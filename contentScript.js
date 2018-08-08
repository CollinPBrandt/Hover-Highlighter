$("p").lettering('words');

$("p span").hover(
    function(){$(this).addClass("onhover");},
    function(){$(this).removeClass("onhover");}
);

// Listening to messages page
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    console.log(request);
    // Callback for that request
    sendResponse({ message: "Background has received that message ?" });
});
