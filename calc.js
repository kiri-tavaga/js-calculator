$(document).ready(function() {
document.addEventListener("DOMContentLoaded", reset);
document.addEventListener("click", clicked);

var display, displayContent, listNumbers, listOperators, isFinalResult;
var currentOperator, committedOperator, currentNumber, committedNumber;
