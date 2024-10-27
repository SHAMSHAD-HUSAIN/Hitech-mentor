

// 1. Write a JavaScript program to get the character at index 2 from the string `"JavaScript"` using the `charAt()` method.
// const str1 = "JavaScript";
// const charAtIndex2 = str1.charAt(2);
// console.log(charAtIndex2); // "v"

// 2. Write a program to concatenate the strings `"Hello"` and `"World"` using the `concat()` method.
// const str2 = "Hello";
// const str3 = "World";
// const concatenated = str2.concat(str3);
// console.log(concatenated); // "HelloWorld"

// 3. Using the string `"I love cats"`, write a program to replace `"cats"` with `"dogs"` using the `replace()` method.
// const str4 = "I love cats";
// console.log(str4)
// const replacedStr = str4.replace("cats", "dogs");
// console.log(replacedStr); // "I love dogs"

// 4. Write a JavaScript function to split the string `"apple,banana,orange"` into an array of fruits using the `split()` method.
// const str5 = "apple,banana,orange";
// const fruitsArray = str5.split(",");
// console.log(fruitsArray); // ["apple", "banana", "orange"]

// 5. Using the string `"JavaScript"`, write a program to extract the substring `"Script"` starting from index 4 using the `substr()` method.
// const str6 = "JavaScript";
// const substring = str6.substr(4);
// console.log(substring); // "Script"

// 6. Write a program to extract the word `"Java"` from the string `"I am learning JavaScript"` using the `substring()` method.
// const str7 = "I am learning JavaScript";
// const javaWord = str7.substring(13, 18);
// console.log(javaWord); // "Java"

// 7. Write a JavaScript program to extract the word `"Frontend"` from the string `"Frontend Developer"` using the `slice()` method.
// const str8 = "Frontend Developer";
// const frontendWord = str8.slice(0, 8);
// console.log(frontendWord); // "Frontend"

// 8. Write a program to convert the string `"HELLO WORLD"` to lowercase using the `toLowerCase()` method.
// const str9 = "HELLO WORLD";
// const lowerCaseStr = str9.toLowerCase();
// console.log(lowerCaseStr); // "hello world"

// 9. Write a JavaScript program to convert the string `"good morning"` to uppercase using the `toUpperCase()` method.
// const str10 = "good morning";
// const upperCaseStr = str10.toUpperCase();
// console.log(upperCaseStr); // "GOOD MORNING"

// 10. Write a JavaScript function that trims the whitespace from both ends of the string `"   Hello World!   "` using the `trim()` method.
// const str11 = "   Hello World!";
// console.log(str11);
// const trimmedStr = str11.trim();
// console.log(trimmedStr); // "Hello World!"

// 11. Write a JavaScript function to check if the string `"JavaScript"` includes the substring `"Script"` using the `includes()` method.
// const str12 = "JavaScript";
// const includesScript = str12.includes("Script");
// console.log(includesScript); // true


// 12. Write a JavaScript function that searches for the first occurrence of the word `"world"` in the string `"Hello world, welcome to JavaScript"` using the `search()` method.
// const str13 = "Hello world, welcome to JavaScript";
// const firstOccurrence = str13.search("world");
// console.log(firstOccurrence); // 6

// 13. Write a program to concatenate two arrays `['apple', 'banana']` and `['cherry', 'mango']` using the `concat()` method.
// const array1 = ['apple', 'banana'];
// const array2 = ['cherry', 'mango'];
// const concatenatedArray = array1.concat(array2);
// console.log(concatenatedArray); // ['apple', 'banana', 'cherry', 'mango']

// 14. Write a program to find the index of `"blue"` in the array `['red', 'blue', 'green', 'yellow']` using the `indexOf()` method.
// const colors = ['red', 'blue', 'green', 'yellow'];
// const blueIndex = colors.indexOf("blue");
// console.log(blueIndex); // 1

// 15. Write a program to find the first number greater than 10 in the array `[5, 8, 12, 19]` using the `find()` method.
// const numbers1 = [5, 8, 12, 19];
// const firstGreaterThan10 = numbers1.find(num => num > 10);
// console.log(firstGreaterThan10); // 12

// 16. Write a program to find the index of the first number greater than 20 in the array `[7, 14, 28, 36]` using the `findIndex()` method.
// const numbers2 = [7, 14, 28, 36];
// const indexGreaterThan20 = numbers2.findIndex(num => num > 20);
// console.log(indexGreaterThan20); // 2

// 17. Write a JavaScript function that uses `forEach()` to log each element of the array `[1, 2, 3, 4]` to the console.
// const array3 = [1, 2, 3, 4];
// array3.forEach(val => console.log(val));
// // Output: 1 2 3 4

// 18. Write a program that multiplies each element of the array `[2, 4, 6, 8]` by 2 using the `map()` method.
// const numbers3 = [2, 4, 6, 8];
// const multiplied = numbers3.map(num => num * 2);
// console.log(multiplied); // [4, 8, 12, 16]

// 19. Write a program to filter out all numbers less than 10 from the array `[5, 12, 8, 19, 3]` using the `filter()` method.
// const numbers4 = [5, 12, 8, 19, 3];
// const filteredNumbers = numbers4.filter(num => num <= 10);
// console.log(filteredNumbers); // [5,8,3]

// 20. Write a program to check if the array `['dog', 'cat', 'fish']` includes `"cat"` using the `includes()` method.
// const animals = ['dog', 'cat', 'fish'];
// const hasCat = animals.includes("cat");
// console.log(hasCat); // true

// 21. Write a program to add `"orange"` and `"grape"` to the end of the array `['apple', 'banana']` using the `push()` method.
// const fruits2 = ['apple', 'banana'];
// fruits2.push("orange", "grape");
// console.log(fruits2); // ['apple', 'banana', 'orange', 'grape']

// 22. Write a program to add `"pear"` to the beginning of the array `['apple', 'banana']` using the `unshift()` method.
// const fruits3 = ['apple', 'banana'];
// fruits3.unshift("pear");
// console.log(fruits3); // ['pear', 'apple', 'banana']

// 23. Write a program to remove the last element from the array `['car', 'bike', 'bus']` using the `pop()` method.
// const vehicles = ['car', 'bike', 'bus'];
// vehicles.pop();
// console.log(vehicles); // ['car', 'bike']


// issued for sorting
// 24. Write a program to sort the array `[12, 45, 3, 25, 9]` in ascending order using the `sort()` method.
// const numbers5 = [12, 45, 3, 25, 9];
// const sort1=numbers5.sort();
// console.log(sort1); // [3, 9, 12, 25, 45]

// 25. Write a program to remove 2 elements starting from index 1 in the array `['red', 'blue', 'green', 'yellow']` using the `splice()` method.
// const colors2 = ['red', 'blue', 'green', 'yellow'];
// const spliceFruits=colors2.splice(1, 2);
// console.log(colors2); // ['red', 'yellow']
// console.log(spliceFruits); // ['red', 'yellow']


// 26. Using the `replaceAll()` method, write a program that replaces all occurrences of `"cat"` with `"dog"` in the string `"The cat sat on the cat"`.
// const str14 = "The cat sat on the cat";
// const replacedAllStr = str14.replaceAll("cat", "dog");
// console.log(replacedAllStr); // "The dog sat on the dog"








//  TRY THIS BELOW QUETIONS ALSO SOME METHODS ARE NEW FOR YOU!!!!




// 1. Write a JavaScript program to add the numbers `[5, 8, 12]` to an existing array `[1, 2, 3]` using `concat()`. Display the result.
// const existingArray = [1, 2, 3];
// const newNumbers = [5, 8, 12];
// const updatedArray = existingArray.concat(newNumbers);
// console.log(updatedArray); // [1, 2, 3, 5, 8, 12]

// 2. How do you find the length of an array? Write a program to find the length of the array `['apple', 'banana', 'orange']`.
// const fruits4 = ['apple', 'banana', 'orange'];
// const length = fruits4.length;
// console.log(length); // 3

// 3. Use `push()` to add elements `"mango"` and `"grape"` to the array `['apple', 'banana']`, and then remove the last element using `pop()`. Show the final array.
// const fruits5 = ['apple', 'banana'];
// fruits5.push("mango", "grape");
// const removedFruit = fruits5.pop();
// console.log(fruits5); // ['apple', 'banana', 'mango']
// console.log(removedFruit); // 'grape'

// 4. Explain the difference between `shift()` and `unshift()`. Write a program that adds `"strawberry"` to the beginning of an array and removes the first element.
// const fruits6 = ['apple', 'banana'];
// fruits6.unshift("strawberry"); // Adds to the beginning
// console.log(fruits6); // ['strawberry', 'apple', 'banana']

// const removedFruit2 = fruits6.shift(); // Removes from the beginning
// console.log(fruits6); // [ 'apple', 'banana']
// console.log(removedFruit2); // 'strawberry'

// 5. Given an array `['car', 'bike', 'bus', 'train']`, write a function to find the index of `"bike"`.
// const vehicles2 = ['car', 'bike', 'bus', 'train'];
// const bikeIndex = vehicles2.indexOf("bike");
// console.log(bikeIndex); // 1

// 6. Write a JavaScript function that checks whether `"cat"` is present in the array `['dog', 'bird', 'cat', 'fish']` using the `includes()` method.
// const animals2 = ['dog', 'bird', 'cat', 'fish'];
// const hasCat2 = animals2.includes("cat");
// console.log(hasCat2); // true

// 7. Using the array `['pen', 'book', 'notebook', 'laptop', 'tablet']`, write a program to extract elements from index 1 to 3 using the `slice()` method.
// const items = ['pen', 'book', 'notebook', 'laptop', 'tablet'];
// const slicedItems = items.slice(1, 3);
// console.log(slicedItems); // ['book', 'notebook']

// 8. What does `splice()` do? Write a program to remove 2 elements starting from index 2 in the array `['red', 'blue', 'green', 'yellow', 'pink']`.
// const colors3 = ['red', 'blue', 'green', 'yellow', 'pink'];
// const removedColors3=colors3.splice(2, 2);
 // Removes 2 elements starting from index 2
//  console.log(removedColors3)
// console.log(colors3); // ['red', 'blue', 'pink']

// 9. Given an array `['hello', 'world', 'how', 'are', 'you']`, use the `join()` method to create a string with words separated by spaces.
// const words = ['hello', 'world', 'how', 'are', 'you'];
// const joinedString = words.join(" ");
// console.log(joinedString); // "hello world how are you"

// 10. Write a program to reverse the array `['one', 'two', 'three', 'four']` using the `reverse()` method.
// const numbers6 = ['one', 'two', 'three', 'four'];
// const reversedArray = numbers6.reverse();
// console.log(reversedArray); // ['four', 'three', 'two', 'one']

// 11. Write a JavaScript program that multiplies each element of an array `[2, 4, 6, 8]` by 2 using the `map()` method.
// const numbers7 = [2, 4, 6, 8];
// const multipliedBy2 = numbers7.map(num=> num * 2);
// console.log(multipliedBy2); // [4, 8, 12, 16]

// 12. Write a function that filters out all numbers greater than 10 from the array `[5, 8, 12, 19, 3, 14]` using the `filter()` method.
// const numbers8 = [5, 8, 12, 19, 3, 14];
// const filteredNumbers2 = numbers8.filter(num => num >= 10);
// console.log(filteredNumbers2); // [12, 19, 14]

// 13. Explain the `reduce()` method. Write a function to sum all elements of an array `[3, 6, 9, 12]` using `reduce()`.
// const numbers9 = [3, 6, 9, 12];
// const sum = numbers9.reduce((acc, curr) => acc + curr, 0);
// console.log(sum); // 30

// 14. Write a program that finds the first even number in the array `[1, 7, 9, 12, 15, 18]` using the `find()` method.
// const numbers10 = [1, 7, 9, 12, 15, 18];
// const firstEvenNumber = numbers10.find(num => num % 2 === 0);
// console.log(firstEvenNumber); // 12

// 15. Use the `sort()` method to sort the array `[34, 12, 25, 9, 57]` in ascending order.
// const numbers11 = [34, 12, 25, 9, 57];
// numbers11.sort((a, b) => a - b);
// console.log(numbers11); // [9, 12, 25, 34, 57]

// String Manipulation
// 16. How do you find the length of a string? Write a program to find the length of the string `"JavaScript is awesome!"`.
// const str15 = "JavaScript is awesome!";
// const strLength = str15.length;
// console.log(strLength); // 22

// 17. Write a program that extracts the word `"JavaScript"` from the string `"I love JavaScript"` using the `substring()` method.
// const str16 = "I love JavaScript";
// const extractedWord = str16.substring(7);
// console.log(extractedWord); // "JavaScript"

// 18. Find the first occurrence of the letter `'a'` in the string `"banana"` using `indexOf()`.
// const str17 = "banana";
// const firstAIndex = str17.indexOf('a');
// console.log(firstAIndex); // 1

// 19. Given the string `"red,blue,green,yellow"`, use the `split()` method to create an array of colors.
// const str18 = "red,blue,green,yellow";
// const colorsArray = str18.split(",");
// console.log(colorsArray); // ["red", "blue", "green", "yellow"]

// 20. Write a JavaScript function to replace the word `"night"` with `"day"` in the string `"Good night everyone!"` using the `replace()` method.
// const str19 = "Good night everyone!";
// const replacedNightStr = str19.replace("night", "day");
// console.log(replacedNightStr); // "Good day everyone!"


// 21. Write a program that converts the string `"javascript"` to uppercase using the `toUpperCase()` method.
// const str20 = "javascript";
// const upperCaseStr2 = str20.toUpperCase();
// console.log(upperCaseStr2); // "JAVASCRIPT"

// 22. How do you convert the string `"HELLO WORLD"` to lowercase? Write a program using the `toLowerCase()` method.
// const str21 = "HELLO WORLD";
// const lowerCaseStr2 = str21.toLowerCase();
// console.log(lowerCaseStr2); // "hello world"

// 23. Write a JavaScript function that trims the whitespace from both ends of the string `"   Hello World!   "` using the `trim()` method.
// const str22 = "   Hello World!   ";
// const trimmedStr2 = str22.trim();
// console.log(trimmedStr2); // "Hello World!"

// 24. How can you check if a string starts with `"Hello"`? Write a program using the `startsWith()` method for the string `"Hello everyone!"`.
// const str23 = "Hello everyone!";
// const startsWithHello = str23.startsWith("Hello");
// console.log(startsWithHello); // true

// 25. Write a JavaScript program that checks if the string `"Welcome to JavaScript"` ends with `"JavaScript"` using the `endsWith()` method.
// const str24 = "Welcome to JavaScript";
// const endsWithJS = str24.endsWith("JavaScript");
// console.log(endsWithJS); // true

// 26. Using the `charAt()` method, write a program that returns the character at index 5 from the string `"JavaScript"`.
// const str25 = "JavaScript";
// const charAt5 = str25.charAt(5);
// console.log(charAt5); // "c"


// 27. Write a function that counts the number of occurrences of the letter `'a'` in the string `"banana"` using the `split()` method.
// const str26 = "banana";
// const aCount = str26.split('a');
// console.log(aCount); // 3

// const Split=aCount.length-1;
// console.log(Split); // 3

// 28. How do you repeat a string multiple times? Write a program to repeat the string `"hello"` 3 times using the `repeat()` method.
// const str27 = "hello";
// const repeatedStr = str27.repeat(3);
// console.log(repeatedStr); // "hellohellohello"

// 29. Write a JavaScript function to check whether the string `"Coding"` contains the substring `"ing"` using the `includes()` method.
// const str28 = "Coding";
// const containsIng = str28.includes("ing");
// console.log(containsIng); // true
