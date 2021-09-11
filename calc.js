function getOne() {
  let one = document.getElementById("one").value;
  var result = (document.getElementById("result").value += one);
}

function getTwo() {
  let two = document.getElementById("two").value;
  var result = (document.getElementById("result").value += two);
}

function getThree() {
  let three = document.getElementById("three").value;
  var result = (document.getElementById("result").value += three);
}

function getFour() {
  let four = document.getElementById("four").value;
  var result = (document.getElementById("result").value += four);
}

function getFive() {
  let five = document.getElementById("five").value;
  var result = (document.getElementById("result").value += five);
}

function getSix() {
  let six = document.getElementById("six").value;
  var result = (document.getElementById("result").value += six);
}

function getSeven() {
  let seven = document.getElementById("seven").value;
  var result = (document.getElementById("result").value += seven);
}

function getEight() {
  let eight = document.getElementById("eight").value;
  var result = (document.getElementById("result").value += eight);
}

function getNine() {
  let nine = document.getElementById("nine").value;
  var result = (document.getElementById("result").value += nine);
}

function getZero() {
  let zero = document.getElementById("zero").value;
  var result = (document.getElementById("result").value += zero);
}

function clearIt() {
  var result = document.getElementById("result");
  result.value = "";
}

function plus() {
  let plus = document.getElementById("plus").value;
  var result = (document.getElementById("result").value += plus);
  // console.log(plus);
  result = document.getElementById("result").value
  console.log(result[0]);

  if(result[result.length-1]==="+"||"-"||"/"||"x"){
    backspace();
  }
  
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
  console.log(document.getElementById("result").value);
}
