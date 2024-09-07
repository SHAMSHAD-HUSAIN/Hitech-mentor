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
