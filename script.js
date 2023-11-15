// number
let one = document.getElementById("one");
let two = document.getAnimations("two");
let three = document.getAnimations("three");
let four = document.getAnimations("four");
let five = document.getAnimations("five");
let six = document.getAnimations("six");
let seven = document.getAnimations("seven");
let eight = document.getAnimations("eight");
let nine = document.getAnimations("nine");
let zero = document.getAnimations("ten");
let dot = document.getElementById("dot");

// operator
let ac = document.getElementById("ac");
let plusMinus = document.getElementById("plus/minus");
let modulus = document.getElementById("modulus");
let division = document.getElementById("division");
let minus = document.getElementById("minus");
let plus = document.getElementById("plus");
let equal = document.getElementById("equal");

// values
let val1 = "";
let val2 = "";
let operator = "";
let ans = "";
let flag = true;

// functions

function number(val) {
  if (operator == "") {
    val1 = val1.concat(val);
    document.getElementById("value").innerText = val1;
  } else {
    val2 = val2.concat(val);
    document.getElementById("value").innerText = val2;
  }
}

function cancle() {
  document.getElementById("value").innerText = "";
  val1 = "";
  val2 = "";
  operator = "";
  ans = "";
}

function symbol(val) {
  operator = val;
  document.getElementById("value").innerText = "";
}

function cal() {
  if (operator == "+") {
    ans = parseFloat(val1) + parseFloat(val2);
  } else if (operator == "-") {
    ans = parseFloat(val1) - parseFloat(val2);
  } else if (operator == "*") {
    ans = parseFloat(val1) * parseFloat(val2);
  } else if (operator == "/") {
    if (val2 == "0") {
      ans = "Error";
    } else {
      ans = parseFloat(val1) / parseFloat(val2);
    }
  } else if (operator == "%") {
    ans = parseFloat(val1) % parseFloat(val2);
  }
  document.getElementById("value").innerText = ans;
  val1 = ans;
  val2 = "";
  operator = "";
  ans = "";
}

function changeSign() {
  if (operator == "") {
    if (flag) {
      val1 = "-" + val1;
      flag = false;
    } else {
      val1 = val1.substring(1);
      flag = true;
    }
    document.getElementById("value").innerText = val1;
  } else {
    if (flag) {
      val2 = "-" + val2;
      flag = false;
    } else {
      val2 = val2.slice(1);
      flag = true;
    }
    document.getElementById("value").innerText = val2;
  }
}
