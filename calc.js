$(document).ready(function() {
document.addEventListener("DOMContentLoaded", reset);
document.addEventListener("click", clicked);

var display, displayContent, listNumbers, listOperators, isFinalResult;
var currentOperator, committedOperator, currentNumber, committedNumber;
function reset ()
 {
   display = document.getElementById("display")
   displayContent = "0";
   listNumbers = [];
   listOperators = [];
   finalNumber = false;
   currentOperator = '';
   commitedOperator = true;
   currentNumber = 0;
   commitedNumber = false;
   updateDisplay();
   displayContent = '0';
   lastInput = '';
 }
function clicked(event)
 {
   var buttonClicked = e.target;

   if (!buttonClicked.classList.contains('button')) return;

   if (buttonClicked.classList.contains("number"))
   {
       checkFinal();
       if (displayContent.length < 9) {
       commitedNumber = false;
       commitedOperator = false;
       displayContent += buttonClicked.innerHTML;
    checkIfResult();
    clickedNumber(buttonClicked.innerHTML);
   }
   else if (buttonClicked.classList.contains("operator"))
   {
     addCalculation(buttonClicked.id);
     console.log("op " + buttonClicked.id)
   }
   else
   {
     switch(buttonClicked.id) {
       case "decimal":
         checkFinal();
         if (displayContent.length == 0) displayContent = "0.";
         else if (!displayContent.includes(".")) displayContent += ".";
         break;
       case "clear":
         reset();
         break;
       case "clearEntry":
         displayContent = "";
         break;
       case "equals":
         listNumbers.push(checkIfNumber(display.value));
         console.log(listNumbers)
         displayContent = doCalculations().toString();
         finalNumber = true;
         break;
     } 
    }
}
 }
 function checkFinal()
 {
   if (finalNumber) {
     finalNumber = false;
     displayContent = "";
   }
}
 function clickedNumber(number) {
   if (displayContent.length < 9) {
     committedNumber = false;
     committedOperator = false;
     displayContent += number;
   }
 }
 function addCalculation (operator) {
   if (!commitedNumber) {
     listNumbers.push(checkIfNumber(display.value));
     commitedNumber = true;
   }
}
 function clickedOperator(operator) {
   if (!committedNumber) {
     listNumbers.push(checkIfNumber(displayContent));
     committedNumber = true;
   }
   if (!committedOperator) {
     listOperators.push(operator);
     displayContent = "";
     commitedOperator = true;
     committedOperator = true;
   }
   else {
     listOperators.splice(listOperators.length-1, 1, operator);
   }
 }
 function clickedOther(buttonID) {
   switch(buttonID) {
     case "decimal":
       checkIfResult();
       if (displayContent.length == 0) displayContent = "0."; // Add a zero in front if decimal is first entry
       else if (!displayContent.includes(".")) displayContent += "."; // Block more than one decimal
       break;
     case "clear":
       reset();
       break;
     case "clear-entry":
       displayContent = "0";
     break;
     case "equals":
       listNumbers.push(checkIfNumber(displayContent)); //Add current entry to list. If nothing entered add 0 instead.
       console.log("Calculations: [" + listNumbers + "] by operators [" + listOperators+"]");
       displayContent = doCalculations().toString();
       isFinalResult = true;
       break;
   }
 }
 function updateDisplay () {
   if (!isFinite(displayContent) || isNaN(displayContent)) displayContent = "ERROR";
   // Block leading zero unless second input is decimal
   if ((displayContent[0] == 0 && displayContent.length > 1) && (!isNaN(parseInt(displayContent[1])))) {
     displayContent = displayContent.substr(1);
   }
   if ((displayContent.length > 8) && isFinalResult) screen.value = displayContent.substr(0,8) + "X";
   else screen.value = displayContent;
 }
 function doCalculations () {
   // User pressed = without entering a calculation. listNumbers will contain whatever was
   // on the screen. Remove from the queue and return it.
   if (listOperators.length == 0 && listNumbers.length > 0) {
       return listNumbers.splice(0);
   }
   else if (listOperators.length == 0) {
    return 0;
   }
   // Get first two numbers and operator and remove from queue
   let n1 = listNumbers.splice(0,1);
   let n2 = listNumbers.splice(0,1);
   let op = listOperators.splice(0,1);
   console.log(num1 + " " + op + " " + num2 )
   let result = doOperation(num1,num2,op);
   
   if (listOperators.length == 0)
   {
   console.log("Calculate: " + n1 + " " + op + " " + n2 );

   let result = eval(n1 + getOp(op) + n2);
   console.log("Result: " + result);
   }
   // If we are out of operators then we are done, otherwise repeat with current result
   if (listOperators.length == 0) {
     console.log("Final result: " + result);
     return result;
   }
   else {
     listNumbers.unshift(result);
     console.log("Continue.");
     return doCalculations();
   }
 }
 function doOperation (num1,num2,operator) {
   if (operator == "add") {
     return Number(num1) + Number(num2);
   }
   else if (operator == "subtract") {
     return num1 - num2;
   }
   else if (operator == "multiply") {
     return num1 * num2;
   }
   else if (operator == "divide") {
     return num1 / num2;
   }
 function getOp(op) {
   if (op == "add") return "+";
   if (op == "subtract") return "-";
   if (op == "multiply") return "*";
   if (op == "divide") return "/";
 }
 function checkIfNumber(n) {
   if (isNaN(parseInt(n))) return 0;
   return n;
 }
 function updateDisplay () {
   if (!isFinite(displayContent) || isNaN(displayContent)) displayContent = "ERROR";
   if (displayContent[0] == 0 && displayContent.length > 1) {
     if (!displayContent[1] == ".") displayContent = displayContent.substr(1);
 // isFinalResult set to true after pressing equals and displaying result on screen.
 // This check lets us use the result in a new calculation, but clears it if starting a new one.
 function checkIfResult() {
   if (isFinalResult) {
     isFinalResult = false;
     displayContent = "";
   }
   console.log(displayContent.length);
   console.log(displayContent);
   display.value = displayContent.substr(0,9);
 }
}
 }
