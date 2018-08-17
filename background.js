chrome.storage.sync.set({onToggle: false});

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
    //select active tabs and send onToggle message
    chrome.tabs.query({active: true}, function (tabs) {
        for(let i = 0; i< tabs.length; i++) {
            chrome.tabs.sendMessage(tabs[i].id, {"onToggle": onToggle});
        }
    });
}
