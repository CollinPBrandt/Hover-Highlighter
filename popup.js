let onButton = $("button");

//Initialize onToggle to false to begin all tabs with highlighter off
chrome.storage.sync.set({onToggle: false}, function () {
    console.log('Highlighter is off')
});

//If button clicked, change onToggle to true
onButton.on("click", function() {
    chrome.storage.sync.get('onToggle', function (data) {
        if (data.onToggle) {
            chrome.storage.sync.set({onToggle: false}, function () {
                console.log('Highlighter is off');
                onButton.text("Turn on Highlighter");
                sendMessage();
            });
        }
        else {
            chrome.storage.sync.set({onToggle: true}, function () {
                console.log('Highlighter is on');
                onButton.text("Turn off Highlighter");
                sendMessage();
            });
        }
    })
})

/*function sendMessage() {
    chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
        if (changeInfo.status == 'complete') {
            chrome.tabs.query({active: true}, function (tabs) {
                const msg = "Hello from background ?";
                chrome.tabs.sendMessage(tabs[0].id, {"message": msg});
            })
        }
    });
}*/