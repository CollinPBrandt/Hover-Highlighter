let hoverStyle = "onhover";
var directionIsRight = true;
var oldx = 0;


//listen for messages
chrome.runtime.onMessage.addListener(function(request) {
    onToggle = JSON.parse(request.onToggle);
    //if message contains onToggle, perform blasting(blast.js, add span around each word)
    if(onToggle){
        blastParagraphs();
        //track mouse direction
        document.addEventListener('mousemove', mouseDirectionRight);
        }
    else {
        unBlastParagraphs();
    }
});

/*When a p tag element is moused over, apply blast */
function blastParagraphs() {
    let paragraphs = document.querySelectorAll("p");
    for (let i = 0; i < paragraphs.length; i++) {
        paragraphs[i].addEventListener("mouseover", blastHoveredParagraph);
    }
}

/*remove blasting from each p*/
function unBlastParagraphs() {
    let paragraphs = document.querySelectorAll("p");
    for (let i = 0; i < paragraphs.length; i++) {
        paragraphs[i].removeEventListener("mouseover", blastHoveredParagraph);
    }
    $("p").blast(false);
}

/*If the paragraph hasn't been separated by blast.js, separate it and add hover class to each word*/
function blastHoveredParagraph(){
    if(!this.classList.contains("blast-root")){
        $(this).blast({delimiter: "word"});
        addHoverClass();
    }
}

/*Add/remove class to .blast when button turned on/off*/
function addHoverClass(){
    let words = document.querySelectorAll(".blast");
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        word.addEventListener("mouseenter", function() {
            if (directionIsRight) {this.classList.add(hoverStyle);}
        });
        word.addEventListener("mouseleave", function() {
            setTimeout(function() {
                word.classList.remove(hoverStyle);}, 2000)
        });
    }
}

/*track mouse x direction as boolean*/
function mouseDirectionRight(e) {
    if (e.pageX > oldx) {directionIsRight = true;}
    else {directionIsRight = false;}
    oldx = e.pageX;
}