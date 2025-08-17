// Create an array to store 3 words. Then add two more words to the array and print the array on one line.
var arr = ["hello", "how", "are"];
arr.push("you");
arr.push("doing");
console.log(arr);

// Create an array to store 4 letters. Then change the second letter to a number and print the array on one line.
var arr = ["a", "b", "c", "d"];
arr[1] = 1;
console.log(arr);

// Create an array to store 5 numbers. Then print out each number on separate lines with a while loop.
var arr = [1, 2, 3, 4, 5];
index = 0;
while (index < arr.length) {
  console.log(arr[index]);
  index++;
}

// Create an array to store 1 number. Then add three more numbers to the array and print the array on one line.
var arr = [1];
arr.push(2, 3, 4, "test");
console.log(arr);

// Create an array to store 3 strings with lower case letters. Then change the third string to have all capital letters and print the array on one line.
var arr = ["one", "two", "three"];
arr[2] = arr[2].toUpperCase();
console.log(arr);
