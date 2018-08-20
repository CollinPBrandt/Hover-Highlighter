let onButton = $("button");

//When popup is loaded, check if highlighter is on, color green if is
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
                onButton.removeClass("buttonOn");
                onButton.addClass("buttonOff");
            });
        }
        else {
            chrome.storage.sync.set({onToggle: true}, function () {
                onButton.removeClass("buttonOff");
                onButton.addClass("buttonOn");
            });
        }
    });
});