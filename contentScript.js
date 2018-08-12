var spanified = false;

chrome.runtime.onMessage.addListener(function(request) {
    let onToggle = JSON.parse(request.onToggle);

    if(onToggle){
        if(spanified === false) {
            //
            $("p").blast({ delimiter: "word" });
            spanified = true;
        }
        $(".blast").on("mouseenter", function(){$(this).addClass("onhover");})
        $(".blast").on("mouseleave", function(){$(this).removeClass("onhover");})
    }
    else{
        $(".blast").off("mouseenter")
        $(".blast").off("mouseleave")
    }
});

