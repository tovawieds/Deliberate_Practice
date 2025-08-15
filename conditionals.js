// Use a variable to store a number, then write a condition that prints 0 if the number is equal to 10, and prints -1 otherwise.
var num = 5;
if (num == 10) {
  console.log(0);
} else {
  console.log(-1);
}

// Use a variable to store a number, then write a condition that prints -1 if the number is less than 10, prints 1 if the number is greater than 10, and prints 0 if the number is equal to 10.
var num = 20;
if (num < 10) {
  console.log(-1);
} else if (num > 10) {
  console.log(1);
} else {
  console.log(0);
}

// Use variables to store two numbers, then write a condition that prints 1 if the numbers are both less than 10, and prints 0 otherwise.
var num1 = 5;
var num2 = 1;
if (num2 < 10 && num2 < 10) {
  console.log(1);
} else {
  console.log(0);
}

// Use a variable to store a number, then write a condition that prints 1 if the number is over 9000, and prints -1 otherwise.
var num = 4;
if (num > 9000) {
  console.log(1);
} else {
  console.log(-1);
}

// Use a variable to store a number, then write a condition that prints 9 if the number is less than 10, prints 19 if the number is less than 20, prints 29 if the number is less than 30, and prints -1 otherwise (only one print statement should occur).
var num = 5;
if (num < 10) {
  console.log(9);
} else if (num < 20) {
  console.log(19);
} else if (num < 30) {
  console.log(29);
} else {
  console.log(-1);
}
