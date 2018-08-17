let spanified = false;

let hoverStyle = "onhover";

chrome.runtime.onMessage.addListener(function(request) {
    let onToggle = JSON.parse(request.onToggle);

    if(onToggle){
        if(spanified === false) {
            //
            $("p").blast({ delimiter: "word" });
            spanified = true;
        }
        $(".blast").on("mouseenter", function(){$(this).addClass(hoverStyle);})
        $(".blast").on("mouseleave", function(){$(this).removeClass(hoverStyle);})
    }
    else{
        $(".blast").off("mouseenter")
        $(".blast").off("mouseleave")
    }
});

