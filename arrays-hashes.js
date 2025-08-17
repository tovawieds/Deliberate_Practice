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

// ARRAYS-HASHES2
// Make a hash to store a person's first name, last name, and email address. Then print each attribute on separate lines.
var hash = { firstName: "Tova", lastName: "Wieds", email: "t@gmail" };
console.log(hash.firstName);
console.log(hash["lastName"]);
console.log(hash.email);

// Make an array of hashes to store the first name and last name for 3 different people. Then print out the first person's info.
var arr = [
  { firstName: "Tova", lastName: "Wieds" },
  { firstName: "Ahuva", lastName: "David" },
  { firstName: "Devo", lastName: "Berko" },
];
console.log(arr[0].firstName);
console.log(arr[0]["lastName"]);

// Make a hash to store prices for 3 different menu items. Then add a new menu item and price and print the hash to see the result.
var menu = { hotDog: 3.99, soda: 2.99, burger: 4.99 };
menu["fries"] = 6.25;
console.log(menu);

// Make a hash to store a book's title, author, number of pages, and language. Then print each attribute on separate lines.
var book = { title: "Book", author: "Dena", pages: 304, language: "English" };
console.log(book.title);
console.log(book["author"]);
console.log(book.pages);
console.log(book.language);

// Make an array of hashes to store the title and author for 3 different books. Then print out the third book's author.
var books = [
  { title: "title1", author: "author1" },
  { title: "title2", author: "author2" },
  { title: "title3", author: "author3" },
];
console.log(books[2].author);
