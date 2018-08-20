var hoverStyle = "onhover";
var onToggle;
//listen for messages
chrome.runtime.onMessage.addListener(function(request) {
    onToggle = JSON.parse(request.onToggle);
    //if message contains onToggle, check status, turn highlighter on/off
    if(onToggle){
        blastParagraphs();
        }
    else {
        unBlastParagraphs();
    }
});

//when hovering over a p tag
/*$("p").mouseenter(function(){
    //if the onToggle is true and the p tag has not already been blasted, add blast tag and hover classes
   if(onToggle && !$(this).hasClass("blast-root")){
       $(this).blast({delimiter: "word"});
       addHoverClass();
   }
});

$("p").mouseleave(function(){
    //if the onToggle is true and the p tag has not already been blasted, add blast tag and hover classes
    if(!onToggle && $(this).hasClass("blast-root")){
        $(this).blast({delimiter: "word"});
        addHoverClass();
    }
});*/

function blastParagraphs(){
    $("p").on("mouseenter", blastHoveredParagraph);
}

function unBlastParagraphs(){
    $("p").off("mouseenter", blastHoveredParagraph);
    $("p").blast(false);
}

function blastHoveredParagraph(){
    if(!$(this).hasClass("blast-root")){
        $(this).blast({delimiter: "word"});
        addHoverClass();
    }
}

function addHoverClass(){
    $(".blast").mouseenter(function(){
        $(this).addClass(hoverStyle);
    });

    $(".blast").mouseleave(function(){
        $(this).removeClass(hoverStyle);
    });
}
