let angleOne = document.querySelector("#angle-1");
let angleTwo = document.querySelector("#angle-2");
let angleThree = document.querySelector("#angle-3");
let triangleButton = document.querySelector("#triangle-button");
let outputText = document.querySelector(".output-text")

function calculateSumOfAngles(angleOne,angleTwo,angleThree){
    var angle1 = Number(angleOne.value);
    var angle2 = Number(angleTwo.value);
    var angle3 = Number(angleThree.value);
    var sum = angle1 + angle2 + angle3;
    return sum;
    
}
function isTriangle(){
    var sumOfAngles = calculateSumOfAngles(angleOne,angleTwo,angleThree)
    console.log(sumOfAngles);
    if(sumOfAngles === 180){
        outputText.innerText = "Congrats! These angles form a triangle";
    }
    else{
        outputText.innerText ="Oh no! these angles do not form an triangle.";
    }
    
} 

triangleButton.addEventListener("click", isTriangle );