1.Imagine you are building a simple program to manage a book inventory. Each book has attributes such as title, author, publication year, and price. Your task is to define meaningful variable names for these attributes.
let bookTitle;
let bookAuthor;
let publicationYear;
let bookPrice;

2.Write a program that declares three variables (one for each data type: string, number, and boolean), assigns values to them, and then prints the values and types of these variables.let name = "Alice";           // String
let age = 30;                // Number
let isMember = true;         // Boolean

console.log(name, typeof name);
console.log(age, typeof age);
console.log(isMember, typeof isMember);

3.Write a program that declares a variable and initializes it with an integer value. Perform both pre-increment and post-increment operations on the variable and print the results.
let num = 5;
console.log("Original:", num); // 5

let preIncrement = ++num; // Pre-increment
console.log("Pre-increment:", preIncrement); // 6
console.log("After pre-increment:", num); // 6

let postIncrement = num++; // Post-increment
console.log("Post-increment:", postIncrement); // 6
console.log("After post-increment:", num); // 7

4.Create a program that calculates and displays the area of a rectangle. Prompt the user for the length and width of the rectangle, store the values in variables, and use them to calculate the area.
let length = prompt("Enter the length of the rectangle:");
let width = prompt("Enter the width of the rectangle:");
let area = length * width;

console.log("Area of the rectangle:", area);

5.Write a program that takes a user's first name, last name, and age as input and then outputs a message using variables to concatenate and format the strings.
let firstName = prompt("Enter your first name:");
let lastName = prompt("Enter your last name:");
let age = prompt("Enter your age:");

let message = `Hello, ${firstName} ${lastName}. You are ${age} years old.`;
console.log(message);


6.Write a program that takes two numbers as input from the user and performs arithmetic operations (addition, subtraction, multiplication, division). Display the results of each operation.
let num1 = parseFloat(prompt("Enter first number:"));
let num2 = parseFloat(prompt("Enter second number:"));

console.log("Addition:", num1 + num2);
console.log("Subtraction:", num1 - num2);
console.log("Multiplication:", num1 * num2);
console.log("Division:", num1 / num2);

7.Create a program that compares two numbers entered by the user using comparison operators. Output whether the first number is greater than, less than, or equal to the second number.
let number1 = parseFloat(prompt("Enter first number:"));
let number2 = parseFloat(prompt("Enter second number:"));

if (number1 > number2) {
    console.log("First number is greater than the second number.");
} else if (number1 < number2) {
    console.log("First number is less than the second number.");
} else {
    console.log("Both numbers are equal.");
}

8.Implement a program that checks if a user-entered number is divisible by 
   both 3 and 5. Use logical AND (&&) to make this determination.
   let number = parseInt(prompt("Enter a number:"));

if (number % 3 === 0 && number % 5 === 0) {
    console.log("The number is divisible by both 3 and 5.");
} else {
    console.log("The number is not divisible by both 3 and 5.");
}

9.Create a program that calculates the total price of items in a shopping cart. Prompt the user for the price of an item and the quantity, then use the assignment operators to update the total price.
let price = parseFloat(prompt("Enter the price of the item:"));
let quantity = parseInt(prompt("Enter the quantity:"));
let totalPrice = 0;

totalPrice += price * quantity;
console.log("Total price:", totalPrice);

10.Implement a program that takes an integer as input and determines whether it is even or odd using the modulus operator.
let num = parseInt(prompt("Enter an integer:"));

if (num % 2 === 0) {
    console.log("The number is even.");
} else {
    console.log("The number is odd.");
}

11.Write a program that checks whether a user-entered number is positive, negative, or zero using the if-else statement. Display the result accordingly.
let number = parseFloat(prompt("Enter a number:"));

if (number > 0) {
    console.log("The number is positive.");
} else if (number < 0) {
    console.log("The number is negative.");
} else {
    console.log("The number is zero.");
}

12.Write a JavaScript program that classifies students into different grade categories based on their exam scores. Prompt the user to enter a numeric score, and then use if-else if-else statements to determine and display the corresponding grade category.
let score = parseFloat(prompt("Enter your exam score:"));
let grade;

if (score >= 90) {
    grade = "A";
} else if (score >= 80) {
    grade = "B";
} else if (score >= 70) {
    grade = "C";
} else if (score >= 60) {
    grade = "D";
} else {
    grade = "F";
}

console.log("Your grade is:", grade);

13.Create a program that prompts the user to enter a day of the week (as a number, e.g., 1 for Monday). Use a switch statement to output the corresponding day name.
let day = parseInt(prompt("Enter a day of the week (1-7):"));
let dayName;

switch (day) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        dayName = "Invalid day";
}

console.log("Day of the week:", dayName);

14.Implement a program that uses a while loop to print the numbers from 1 to 10.
let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

15.Write a JavaScript program that uses a for loop to print the squares of numbers from 1 to 20.  then use a for loop to calculate and print the square of each number.
for (let i = 1; i <= 20; i++) {
    console.log(`Square of ${i}:`, i * i);
}

16.Write a JavaScript program that prompts the user to enter a number and generates the multiplication table for that number. Use a for loop to calculate and display the multiplication table from 1 to 10 for the entered number.
let num = parseInt(prompt("Enter a number:"));

for (let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
}

17.Write a JavaScript program that defines a function called  greet which takes a person's name as a parameter and displays a personalized greeting message. Then, call this function with a user-provided name and show the greeting message.
function greet(name) {
    console.log(`Hello, ${name}!`);
}

let userName = prompt("Enter your name:");
greet(userName);

18.Write a JavaScript program that defines a function called EvenOrOdd which takes an integer as a parameter and displays whether the number is even or odd. Then, call this function with a user-provided integer.
function EvenOrOdd(num) {
    if (num % 2 === 0) {
        console.log("The number is even.");
    } else {
        console.log("The number is odd.");
    }
}

let userNumber = parseInt(prompt("Enter an integer:"));
EvenOrOdd(userNumber);

19.Write a JavaScript program that defines a function called RepeatCharacter which takes a character and a number as parameters and displays a string composed of the repeated character. Then, call this function with a user-provided character and number.
function RepeatCharacter(char, num) {
    let result = ""; // Start with an empty string
    for (let i = 0; i < num; i++) {
        result += char; // Add the character to the result each time
    }
    return result;
}

// Asking the user for input
let character = prompt("Enter a character to repeat:");
let number = parseInt(prompt("Enter how many times to repeat it:"));

// Calling the function and showing the result
let result = RepeatCharacter(character, number);
console.log(result); // Print the repeated character string




function RepeatCharacter(char, count) {
    console.log(char.repeat(count));
}

let character = prompt("Enter a character:");
let repeatCount = parseInt(prompt("Enter a number:"));
RepeatCharacter(character, repeatCount);

20.Write a JavaScript program that defines a recursive function called calculateFactorial which takes a positive integer as a parameter and calculates its factorial. Then, call this function with a user-provided positive integer.
function calculateFactorial(n) {
    if (n <= 1) return 1;
    return n * calculateFactorial(n - 1);
}

let num = parseInt(prompt("Enter a positive integer:"));
console.log("Factorial:", calculateFactorial(num));
