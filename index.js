/*
Block 13 Workshop with:
    Raymond Levi Triana
    Ryanmck
    Brian Peyton
*/

//Try to check if a number is even or odd
//get the remainder of div by 2 (%)
//if remainder is 0 then number is even
//else the number is odd
function isEven(input) {
  let isEven = input % 2 ? false : true;
  console.log(input + " is: " + isEven);
}

function isTruthy(input) {
  if (input) {
    console.log("true");
  } else if (input === false) {
    console.log("The boolean value false is falsy");
  } else if (input === null) {
    console.log("The null value is falsy");
  } else if (input === undefined) {
    console.log("The undefined value is falsy");
  } else if (input === 0) {
    console.log("The number 0 is falsy (the only falsy number)");
  } else if (input === "") {
    console.log("The empty string is falsy(the only falsy string)");
  }
}

function numberLine(num1, num2) {
  let sum = num1 + num2;

  if (sum < -1000) {
    console.log(sum + " is less than -1000");
  } else if (sum < 0) {
    console.log(sum + " is a negative number");
  } else if (sum === 0) {
    console.log(sum + " is equal to 0");
  } else if (sum > 100) {
    console.log(sum + " is greater than 100");
  } else if (sum > 0) {
    console.log(sum + " is greater than 0");
  }
}

function greaterThan5(num1, num2) {
  if (num1 >= 5 && num2 >= 5) {
    console.log("true");
  } else {
    console.log("false");
  }
}

function pairAndCompare(input1A, input1B, input2A, input2B) {
  if (input1A === input1B) {
    console.log("true");
  } else if (input2A === input2B) {
    console.log("true");
  } else {
    console.log("false");
  }
}

//IS TRUTHY
console.log("<!--IS TRUTHY-->");
isTruthy("I am a string");
isTruthy(false);
isTruthy(null);
isTruthy(undefined);
isTruthy(0);
isTruthy("");
console.log("<!--IS TRUTHY--/>");

//NUMBER LINE
console.log("<!--NUMBER LINE--/>");
numberLine(50, 51);
numberLine(99, -2);
numberLine(0, 101);
numberLine(500, -500);
numberLine(-1000, 0);
numberLine(-5, 0);
console.log("<!--NUMBER LINE--/>");

//GREATER THAN 5
console.log("<!--GREATER THAN 5-->");
greaterThan5(5, 6);
greaterThan5(10, 11);
greaterThan5(0, 0);
greaterThan5(1000, -1000);
greaterThan5(6, 4);
greaterThan5(5, 5);
console.log("<!--GREATER THAN 5--/>");

//PAIR AND COMPARE
console.log("<!--PAIR AND COMPARE--/>");
pairAndCompare("cat", "cat", 6, "6");
pairAndCompare("five", 5, "dog", "dawg");
pairAndCompare(0, false, "horse", "horse");
pairAndCompare("eight", "eight", "ate", "ate");
pairAndCompare(11, "eleven", "four", "for");
pairAndCompare("cake", "cake", "pie", "pie");
console.log("<!--PAIR AND COMPARE--/>");
