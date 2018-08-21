let hoverStyle = "onhover";
var directionIsRight = true;
var oldx = 0;


//listen for messages
chrome.runtime.onMessage.addListener(function(request) {
    onToggle = JSON.parse(request.onToggle);
    //if message contains onToggle, perform blasting
    if(onToggle){
        blastParagraphs();
        document.addEventListener('mousemove', mouseDirectionRight);
        }
    else {
        unBlastParagraphs();
    }
});

function blastHoveredParagraph(){
    if(!this.classList.contains("blast-root")){
        $(this).blast({delimiter: "word"});
        addHoverClass();
    }
}

function blastParagraphs() {
    let paragraphs = document.querySelectorAll("p");
    for (let i = 0; i < paragraphs.length; i++) {
        paragraphs[i].addEventListener("mouseover", blastHoveredParagraph);
    }
}

function unBlastParagraphs() {
    let paragraphs = document.querySelectorAll("p");
    for (let i = 0; i < paragraphs.length; i++) {
        paragraphs[i].removeEventListener("mouseover", blastHoveredParagraph);
    }
    $("p").blast(false);
}

function addHoverClass(){
    let words = document.querySelectorAll(".blast");
    for (let i = 0; i < words.length; i++) {
        words[i].addEventListener("mouseenter", function() {
            if (directionIsRight) {this.classList.add(hoverStyle);}
        });
        words[i].addEventListener("mouseleave", function() {this.classList.remove(hoverStyle);});
    }
}

function mouseDirectionRight(e) {
    if (e.pageX > oldx) {directionIsRight = true;}
    else {directionIsRight = false;}
    oldx = e.pageX;
}