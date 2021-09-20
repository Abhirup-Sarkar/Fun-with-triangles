var baseOfTriangle = document.querySelector("#base");
var heightOfTriangle = document.querySelector("#height");
var calHypotenuseButton = document.querySelector("#btnCalculateHypotenuse");
var outputText = document.querySelector("#output-text");

function calculateHypotenuse(){
    var baseValue = Number(baseOfTriangle.value);
    var heightValue = Number(heightOfTriangle.value);
    console.log(baseValue,heightValue); 
    
}

calHypotenuseButton.addEventListener("click", calculateHypotenuse);




