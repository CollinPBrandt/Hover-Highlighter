var hoverStyle = "onhover";
//listen for messages
chrome.runtime.onMessage.addListener(function(request) {
    let onToggle = JSON.parse(request.onToggle);
    //if message contains onToggle, check status, turn highlighter on/off
    if(onToggle){
        $("p").blast({delimiter: "word"});
        addHoverClass();
    }
    else{
        $("p").blast(false);
        removeHoverClass();
    }
});

function addHoverClass(){
    $(".blast").on("mouseenter", function(){$(this).addClass(hoverStyle);})
    $(".blast").on("mouseleave", function(){$(this).removeClass(hoverStyle);})
}

function removeHoverClass(){
    $(".blast").off("mouseenter");
    $(".blast").off("mouseleave");
}
