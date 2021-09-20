var baseOfTriangle = document.querySelector("#base");
var heightOfTriangle = document.querySelector("#height");
var calHypotenuseButton = document.querySelector("#btnCalculateHypotenuse");
var outputText = document.querySelector("#output-text");

function calculateHypotenuse(){
    var base = Number(baseOfTriangle.value);
    var height = Number(heightOfTriangle.value);
    console.log(base,height); 
    var hypotenuse = Math.sqrt(((base**2) + (height**2)))
    console.log(hypotenuse);
}

calHypotenuseButton.addEventListener("click", calculateHypotenuse);




