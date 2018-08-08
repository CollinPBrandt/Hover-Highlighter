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

        $("p span").hover(
            function(){$(this).addClass("onhover");},
            function(){$(this).removeClass("onhover");}
        )

    }

});
