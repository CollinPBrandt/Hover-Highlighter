var hoverStyle = "onhover";
var onToggle;
//listen for messages
chrome.runtime.onMessage.addListener(function(request) {
    onToggle = JSON.parse(request.onToggle);
    //if message contains onToggle, perform blasting
    if(onToggle){
        blastParagraphs();
        }
    else {
        unBlastParagraphs();
    }
});

//for each paragraph hovered over, blast paragraph
function blastParagraphs(){
    $("p").on("mouseenter", blastHoveredParagraph);
}

//turn off blasting when hovering over paragraphs and remove blast spans
function unBlastParagraphs(){
    $("p").off("mouseenter", blastHoveredParagraph);
    $("p").blast(false);
}

//blast paragraphs that haven't been blasted and add hover class to elements with blast tag
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
