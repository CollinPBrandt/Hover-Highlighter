let onButton = $("button");

onButton.on("click", function() {
    chrome.storage.sync.get('extensionOn', function (data) {
        if (data.extensionOn) {
            chrome.storage.sync.set({extensionOn: false}, function () {
                console.log('Highlighter is off');
                onButton.text("Turn on Highlighter");
            });
        }
        else {
            chrome.storage.sync.set({extensionOn: true}, function () {
                console.log('Highlighter is on');
                onButton.text("Turn off Highlighter");
            });
        }
    })
})