// Write a while loop to print the numbers 1 through 10.
var x = 1;
while (x < 11) {
  console.log(x);
  x++;
}

x++;
// Write a while loop that prints the word "hello" 5 times.
var x = 1;
while (x <= 5) {
  console.log("hello");
  x++;
}

// // Write a while loop that asks the user to enter a word and will run forever until the user enters the word "stop".
// while (true) {
//   var input = window.prompt("Enter a word: ");
//   if (input === "stop") {
//     break;
//   }
// }

// Write a while loop that prints the numbers 0 through 100, increasing by 5 each time.
var num = 0;
while (num <= 100) {
  console.log(num);
  num += 5;
}

// Write a while loop that prints the number 9000 ten times.
var num = 0;
while (num < 10) {
  console.log(9000);
  num++;
}

// LOOPS2
// Start with an array of numbers and create a new array with each number times 3.
// For example, [1, 2, 3] becomes [3, 6, 9].
var arr = [1, 2, 3];
var arr2 = [];
// for (x = 0; x < arr.length; x++) {
//   arr2.push(arr[x] * 3);
// }
arr.forEach(function (num) {
  arr2.push(num * 3);
});
console.log(arr2);

// Start with an array of strings and create a new array with each string upcased.
// For example, ["hello", "goodbye"] becomes ["HELLO", "GOODBYE"].
var arr = ["hello", "goodbye"];
var arr2 = [];
arr.forEach(function (word) {
  arr2.push(word.toUpperCase());
});
console.log(arr2);

// Start with an array of hashes and create a new array of string values from each hash's :name key.
// For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes ["Alice", "Blane"].
var arr = [
  { name: "Tova", age: 21 },
  { name: "Ahuva", age: 9 },
];
var arr2 = [];
arr.forEach(function (key) {
  arr2.push(key.name);
});
console.log(arr2);

// Start with an array of numbers and create a new array with each number plus 7.
// For example, [1, 2, 3] becomes [8, 9, 10].
var arr = [1, 2, 3];
var arr2 = [];
arr.forEach(function (num) {
  arr2.push(num + 7);
});
console.log(arr2);

// Start with an array of strings and create a new array with each string's length.
// For example, ["hello", "goodbye"] becomes [5, 7].
var arr = ["hello", "goodbye"];
var arr2 = [];
arr.forEach(function (word) {
  arr2.push(word.length);
});
console.log(arr2);

count = 0;
while (count < arr.length) {
  arr2.push(arr[count].length);
  count++;
}
console.log(arr2);

var arr2 = arr.map(function (word) {
  return word.length;
});
console.log(arr2);
