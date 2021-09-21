var answersOne = document.querySelectorAll("#answer-1");
var answersTwo = document.querySelectorAll("#answers-2");
var answersThree = document.querySelectorAll("#answers-3");

var btnSubmitAnswers = document.querySelector("#submit-answers");

var outputText = document.querySelector("#output-text");

function calculateScore(){
    console.log("clicked");
}

btnSubmitAnswers.addEventListener("click", calculateScore )


