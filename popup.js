let onButton = $("button");

window.addEventListener('load', function(){
    chrome.storage.sync.get('onToggle', function (data) {
        if(data.onToggle) {
            onButton.removeClass("buttonOff");
            onButton.addClass("buttonOn");
        }
    });
});

//If button clicked, change onToggle to true
onButton.on("click", function() {
    chrome.storage.sync.get('onToggle', function (data) {
        if (data.onToggle) {
            chrome.storage.sync.set({onToggle: false}, function () {
                console.log('Highlighter is off');
                onButton.removeClass("buttonOn");
                onButton.addClass("buttonOff");
            });
        }
        else {
            chrome.storage.sync.set({onToggle: true}, function () {
                console.log('Highlighter is on');
                onButton.removeClass("buttonOff");
                onButton.addClass("buttonOn");
            });
        }
    });
});