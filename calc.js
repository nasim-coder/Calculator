var operand1 = '';
var operand2 = '';

function getOne() {
  let one = document.getElementById("one").value;
  let result = (document.getElementById("result").value += one);
}// console.log(plus);

function getTwo() {
  let two = document.getElementById("two").value;
  let result = (document.getElementById("result").value += two);
}

function getThree() {
  let three = document.getElementById("three").value;
  let result = (document.getElementById("result").value += three);
}

function getFour() {
  let four = document.getElementById("four").value;
  let result = (document.getElementById("result").value += four);
}

function getFive() {
  let five = document.getElementById("five").value;
  let result = (document.getElementById("result").value += five);
}

function getSix() {
  let six = document.getElementById("six").value;
  let result = (document.getElementById("result").value += six);
}

function getSeven() {
  let seven = document.getElementById("seven").value;
  let result = (document.getElementById("result").value += seven);
}

function getEight() {
  let eight = document.getElementById("eight").value;
  let result = (document.getElementById("result").value += eight);
}

function getNine() {
  let nine = document.getElementById("nine").value;
  let result = (document.getElementById("result").value += nine);
}

function getZero() {
  let zero = document.getElementById("zero").value;
  let result = (document.getElementById("result").value += zero);
}

function clearIt() {
  let result = document.getElementById("result");
  result.value = "";
}

function plus() {
  operand1 = document.getElementById("result").value
  let plus = document.getElementById("plus").value;
  let result = (document.getElementById("result").value += plus);
  // console.log(operand1.length);
}

function minus() {
  let minus = document.getElementById("minus").value;
  var result = (document.getElementById("result").value += minus);
}

function divide(){
  let divide = document.getElementById("divide").value;
  var result = (document.getElementById("result").value += divide)
}

function multiply(){
  let multiply = document.getElementById("multiply").value;
  var result = (document.getElementById("result").value += multiply)
}
function backspace(){
    var result = document.getElementById("result").value;
    document.getElementById("result").value = result.slice(0, result.length-1);
}
function equals(){
  let result = document.getElementById("result").value;
  console.log(operand1);
  operand2 = result.slice(operand1.length+1, result.length)
  console.log(operand2);
  let operator = result.slice(operand1.length,operand1.length+1)
  
}

function solve(a, b, operator) {
  switch (operator) {
    case "+": return a+b;
    break;
    case "-": return a-b;
    break;
    case "x" : return a*b;
    break;
    case "/": return a/b;
    break;
    default: return ""
  }
}