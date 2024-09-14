// . JavaScript Functions:
// A  function is a block of code designed to perform a particular task.
// A JavaScript function is executed when "something" invokes it (calls it).





// A. JavaScript Function Syntax:
//            A JavaScript function is defined with the function keyword, followed by a 
//            name, followed by parentheses ().
// Function names can contain letters, digits, underscores, and dollar signs (same rules as variables).
// The parentheses may include parameter names separated by commas:
// (parameter1, parameter2, ...)

// The code to be executed, by the function, is placed inside curly brackets: {}


// OR Declare the function name myNameFunction() without parameter
// function myNameFunction() {
//     function body   
// }
// exp:
// function addition (){
//     let a=5;
//     let b=6;
//     let c=a+b
//     console.log(c)
// }

// addition();
// addition();
// addition();


// Declare the function with parameters
// function secondNameOfFunction(parameter1, parameter2, parameter3) {
//   function body 
// }
// example:


// parametrize function
// define
// function addition (a=3,b=5){
    
//     let c=a+b
//     console.log(c)
// }
// calling
// addition(5,6);//11
// addition(4,6);// 10
// addition(7);//5


// Function parameters are listed inside the parentheses () in the function definition.
// function myFunction(x, y) {
//   return x * y;
// }
// Function arguments are the values received by the function when it is invoked.
// Inside the function, the arguments (the parameters) behave as local variables.

// B. Calling Function:
// The code inside the function will execute when "something" invokes (calls)   
// the function:
// When an event occurs (when a user clicks a button)
// When it is invoked (called) from JavaScript code 
// Automatically (self invoked)



// declaring a function :
 
// function myFirstFunction() {
//     console.log("Hello World");
// }


// calling
// myFirstFunction();

// C. Function Return:
// When JavaScript reaches a return statement, the function will stop executing.
// If the function was invoked from a statement, JavaScript will "return" to execute the code after the invoking statement.
// Functions often compute a return value. The return value is "returned" back to the "caller":

// The return value is the output that a function produces. It is sent back to the part of the code that called the function.

// Example
// let c = myFunction(12, 2);   // Function is called, return value will end up in c
// console.log(c); // here, get the value of c
// function myFunction(a, b) {
//  return a * b;       	  // Function returns the product of a and b
// }

// let myvalue=myFunction(3,5)
// console.log(myvalue)

// D. Why Functions?
// You can reuse code: Define the code once, and use it many times.
// You can use the same code many times with different arguments, to produce different results.

// let myFunction = (a, b) => {a * b};

// 1.
// area of rectangle
// area =length*width

// function AreaofRactangle(length,widht){

//     let area=length*widht
// console.log(area)
// }
// AreaofRactangle(5,6)//30
// AreaofRactangle(10,7)//70
// 2.
// area=pi*R*R
// function AreaofCicle(radius){
// let pi=3.14
//     let area=pi*radius*radius
// console.log(area)
// }

// AreaofCicle(5)
// AreaofCicle(56)

// function AreaofCicle(radius){

//     let area=Math.PI*Math.pow(radius,2)
// console.log(area)
// }
// AreaofCicle(5)
// AreaofCicle(56)

// 3. AreaofTriangle
// area= 1/2*base*height

// function AreaofTriangle(base,height){
//     area=0.5*base*height
//     console.log(area)
// }
// AreaofTriangle(3,40)
// AreaofTriangle(4,7)


// celciusTOFahrenheit
// celcius=(c*9/5)+32

// function celciusTOFahrenheit(C){
//    temp =(C*9/5)+32
//    console.log(temp+"f")
// }

// celciusTOFahrenheit(45)

// Function to generate OTP
// function generateOTP() {
		
// 	// Declare a digits variable
// 	// which stores all digits
// 	var digits = '0123456789';
// 	let OTP = '';
// 	for (let i = 0; i < 4; i++ ) {
// 		OTP += digits[Math.floor(Math.random() * 10)];
// 	}
// 	return OTP;
// }

// console.log("OTP of 4 digits: ", generateOTP())


// JavaScript Hoisting:

// 	Hoisting in JavaScript is a behavior in which a function or a variable can be 
//            used before declaration.

           
//  Example:
 // using test before declaring
//  console.log(test);   // undefined
//  var test = "Hello";
 
// using test before declaring
// var test = "Hello";
// console.log(test); // Hello 


// Note: In hoisting, though it seems that the declaration has moved up
//  in the program, the actual thing that happens is that the function 
//  and variable declarations are added to memory during the compile phase.
// (execution context phase created or global execution context )

//  There are two types of Hoisting:
// Variable Hoisting
// Function Hoisting

// A. Variable Hoisting:
//   	In terms of variables and constants, keyword var is hoisted and let and const 
// does not allow hoisting.

// Example:
// program to display value
// a = 5;
// console.log(a);
// var a; // 5

// In the above example, variable a is used before declaring it. And the program works and displays the output 5. The program behaves as:

// program to display value
// var a;
// a = 5;
// console.log(a); // 5


// However in JavaScript, initializations are not hoisted. For example,
// program to display value
// console.log(a);
// var a = 5;


// The above program behaves as:
// var a;
// console.log(a);
// a = 5;



// Only the declaration is moved to the memory in the compile phase. Hence, the value of variable a is undefined because a is printed without initializing it.

// Also, when the variable is used inside the function, the variable is hoisted only to the top of the function.
// Example:
// program to display value
// var a = 4;

// function greet() {
//     b = 'hello';
//     console.log(b); // hello
//     var b;
// }

// greet(); // hello
// console.log(b);


// In the above example, variable b is hoisted to the top of the function greet and becomes a local variable. Hence b is only accessible inside the function. b does not become a global variable.



// B. Function Hoisting
// A function can be called before declaring it.
// program to print the text
// greet();

// function greet() {
//     console.log('Hi, there.');
// }



// 17. JavaScript Recursion:
//     Recursion is a process of calling itself. A function that calls itself is called a 
//    recursive function. 
// The syntax for recursive function is: 
// function recurse() {
    // function code
//     recurse();
    // function code
// }

// recurse();

// A recursive function must have a condition to stop calling itself.
//  Otherwise, the function is called indefinitely.

//  function recurse() {
//     if(condition) {
//         recurse();
//     }
//     else {
//         stop calling recurse()
//     }
// }

// recurse();



// find factorial
// 5=5*4*3*2*1=120    x * factorial(x - 1);
// 3=3*2*1=6

function factorial(x) {

    // if number is 0
    if (x === 0) {
        return 1;
    }

    // if number is positive
    else {
        return x * factorial(x - 1);
    }
}

const num = 3;

// calling factorial() if num is non-negative
if (num > 0) {
    let result = factorial(num);
    console.log(`The factorial of ${num} is ${result}`);
}



// x * factorial(x - 1);
// 3* factorial(2)
// 3*  2*factorial(1)
// 3*2*1*factorial(0)
// 3*2*1*1





















// var x =5;
// function myfunction(){
//     console.log("hitech mentor")
// }
// console.log(x)
// myfunction();




// function ===>Otp , 4 digit , random 


// string=""

// var digits="hitechmentor"

// console.log(digits[4])
// let OTP ="";


// Math.random =0-1 decimal

// 0-9
// 0.1*10 =1
// 0.3*10=3
// console.log(Math.random()*10);
// console.log(Math.random()*10);
// console.log(Math.random()*10);
// console.log(Math.random()*10);
// console.log(Math.random()*10);
// console.log(Math.random()*10);
// console.log(Math.random()*10);


// console.log(Math.floor(1.2))//

// console.log(Math.floor(3.4))//
// console.log(Math.floor(5.9))//
// console.log(Math.floor(6.0))//
// console.log(Math.floor(7.1))//



// function OTPgenerate(){
//     var digits="0123456789"
//     let OTP ="";
//     for (let i=0; i<4; i++){
//         OTP=OTP+digits[Math.floor(Math.random()*10)]
//     }
//     console.log(OTP)
// }
// OTPgenerate();
// OTPgenerate();
// OTPgenerate();
// OTPgenerate();
// OTPgenerate();
// OTPgenerate();
// OTPgenerate();
// OTPgenerate();
// OTPgenerate();
// OTPgenerate();



// hoisting:

// console.log(x)//8
// myfunction()//hitech mentor
// console.log(myfunction)

// var x=8;
// function myfunction(){
//     console.log("hitech mentor")
// }

// x=undefined
// hitech mentor
// function myfunction(){
//     console.log("hitech mentor")
// }
// var and function


// console.log(Math.sin(0))


function
