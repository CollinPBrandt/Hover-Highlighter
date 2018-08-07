chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({extensionOn: false}, function () {
        console.log('Highlighter is off');
    });
});

chrome.storage.onChanged.addListener(function(changes, namespace){
    alert(changes[0]);
})

function sendMessage(changes, sync){

}

