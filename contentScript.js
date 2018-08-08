/*$("p").lettering('words');

$("p span").hover(
    function(){$(this).addClass("onhover");},
    function(){$(this).removeClass("onhover");}
);*/

// Listening to messages page
chrome.runtime.onMessage.addListener(function(request) {
    var onToggle = JSON.parse(request.onToggle);
    console.log(onToggle);
    if(onToggle){
        $("p").lettering('words');
        $("p span").on("mouseenter", function(){$(this).addClass("onhover");})
        $("p span").on("mouseleave", function(){$(this).removeClass("onhover");})
    }
    else{
        console.log("i should turn off...")
        $("p span").off("mouseenter")
        $("p span").off("mouseleave")
    }
});
