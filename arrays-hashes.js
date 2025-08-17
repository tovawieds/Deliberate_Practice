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

// ARRAYS-HASHES3 (6-10)
// Convert an array of strings into a hash with keys for each string in the array and values for the number of times the string appears in the array.
// For example, ["do", "or", "do", "not"] becomes {"do" => 2, "or" => 1, "not" => 1}.
var arr = ["do", "or", "do", "not"];
var hash = {};
index = 0;
while (index < arr.length) {
  if (hash[arr[index]] > 0) {
    hash[arr[index]] += 1;
  } else {
    hash[arr[index]] = 1;
  }
  index++;
}
console.log(hash);

// Convert a hash into a flat array containing all the hash’s keys and values.
// For example, {"a" => 1, "b" => 2, "c" => 3, "d" => 4} becomes ["a", 1, "b", 2, "c", 3, "d", 4].
var hash = { a: 1, b: 2, c: 3, d: 4 };
var arr = [];
Object.entries(hash).forEach(function ([key, value]) {
  arr.push(key);
  arr.push(value);
});
console.log(arr);

// Combine data from a hash with names and prices and an array of hashes with names, colors, and weights to make a new hash.
// For example, {"chair" => 75, "book" => 15} and [{name: "chair", color: "red", weight: 10}, {name: "book", color: "black", weight: 1}] becomes {"chair" => {price: 75, color: "red", weight: 10}, "book" => {price: 15, color: "black", weight: 1}}.
var hash = { chair: 75, book: 15 };
var arr = [
  { name: "chair", color: "red", weight: 10 },
  { name: "book", color: "black", weight: 1 },
];
var newHash = {};
index = 0;
while (index < arr.length) {
  item = arr[index]["name"];
  price = hash[item];
  color = arr[index]["color"];
  weight = arr[index]["weight"];
  newHash[item] = { price: price, color: color, wieght: weight };
  index++;
}
console.log(newHash);

// Convert an array of hashes into a hash of arrays, using the author as keys and the titles as values.
// For example, [{author: "Jeff Smith", title: "Bone"}, {author: "George Orwell", title: "1984"}, {author: "Jeff Smith", title: "RASL"}] becomes {"Jeff Smith" => ["Bone", "RASL"], "George Orwell" => ["1984"]}.
var arr = [
  { author: "Jeff Smith", title: "Bone" },
  { author: "George Orwell", title: "1984" },
  { author: "Jeff Smith", title: "RASL" },
];
var hash = {};
var index = 0;
while (index < arr.length) {
  author = arr[index]["author"];
  title = arr[index]["title"];
  if (hash[author] == undefined) {
    hash[author] = [];
  }
  hash[author].push(title);
  index++;
}
console.log(hash);

// Given a hash, create a new hash that has the keys and values switched.
// For example, {"a" => 1, "b" => 2, "c" => 3} becomes {1 => "a", 2 => "b", 3 => "c"}.
var hash = { a: 1, b: 2, c: 3 };
var hash2 = {};
Object.entries(hash).forEach(function ([key, value]) {
  hash2[value] = key;
});
console.log(hash2);
