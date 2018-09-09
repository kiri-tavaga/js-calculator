$(document).ready(function() {
document.addEventListener("DOMContentLoaded", reset);
document.addEventListener("click", clicked);
//Store inputs form use to calculate later
var inputs=[""];
//String to store current input
var totalString;
//Operators array for validation without the .
var operators1 = ["+", "-", "/", "*"];
//Operators array for validation with the .
var operators2 = ["."];
//Numbers for validation
var nums = [0,1,2,3,4,5,6,7,8,9];
});
