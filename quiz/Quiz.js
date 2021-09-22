var quizForm = document.querySelector(".quiz-form")

var submitAnswersButton = document.querySelector("#submit-answers-btn")

var outputText = document.querySelector("#output-text");

//Array of correct answers
var correctAnswers = ["90°","15cm","35 square centimetres"];

function calculateScore(){
    let score = 0;
    let index = 0;
    var formResults = new FormData(quizForm);
    for(let value of formResults.values()){
        if(value === correctAnswers[index]){
            score = score + 1;   
        }
        index = index + 1;
    }
    console.log();
    outputText.innerText = "Your final score is "+score;
}

submitAnswersButton.addEventListener("click", calculateScore )


