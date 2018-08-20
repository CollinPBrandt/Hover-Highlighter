chrome.storage.sync.set({onToggle: false});

//add listener to any changes in storage
chrome.storage.onChanged.addListener(function(changes, namespace) {
    //iterate over items that changed and send message
    for (let key in changes) {
        if(key === "onToggle") {
            sendMessage(changes[key].newValue);
        }
    }
});

//when active tab is changed, change onToggle causing message to be sent to contentScript turning it off
chrome.tabs.onActivated.addListener(function(){
    chrome.storage.sync.set({onToggle: false});
})

//send onToggle message
function sendMessage(onToggle) {
    //select tabs in active window and send onToggle message
    chrome.tabs.query({currentWindow: true}, function (tabs) {
        for(let i = 0; i < tabs.length; i++) {
            chrome.tabs.sendMessage(tabs[i].id, {"onToggle": onToggle});
        }
    });
}

