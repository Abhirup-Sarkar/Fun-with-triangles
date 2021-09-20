var firstSideOfTriangle = document.querySelector("#first-side");
var secondSideOfTriangle = document.querySelector("#second-side");
var thirdSideOfTriangle = document.querySelector("#third-side");
var calculateAreaButton = document.querySelector("#btn-area");
var outputText = document.querySelector("#output-text");

function calculateArea() {
    var firstSide = Number(firstSideOfTriangle.value);
    var secondSide = Number(secondSideOfTriangle.value);
    var thirdSide = Number(thirdSideOfTriangle.value);
    var semiPerimeter = Number((firstSide + secondSide + thirdSide) / 2); //(firstSide + secondSide + thirdSide) = perimeter of the triangle
    var area = Math.sqrt(semiPerimeter * (semiPerimeter - firstSide) * (semiPerimeter - secondSide) * (semiPerimeter - thirdSide));
    var roundOffArea = area.toFixed(4);
    outputText.innerHTML = "Area of the triangle using Heron's formula is " + roundOffArea + " units";

}

calculateAreaButton.addEventListener("click", calculateArea);