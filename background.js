//add listener to any changes in storage
chrome.storage.onChanged.addListener(function(changes, namespace) {
    //iterate over items that changed and send message
    for (key in changes) {
        if(key === "onToggle") {
            sendMessage(changes[key].newValue);
        }
    }
});

//send onToggle message
function sendMessage(onToggle) {
    chrome.tabs.query({active: true}, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {"message": onToggle})
    });
}
