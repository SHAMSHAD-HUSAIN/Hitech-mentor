

// Compile error
// Occurs when the code is being built, and is usually caused by syntax or semantic errors. 
// The compiler can detect these errors and they can be fixed during code development.


// Runtime error
// Occurs when the program is executing, and can be caused by issues 
// like division by zero, memory allocation errors, or out of bounds array access.

//  The compiler cannot identify these errors, and they can be more difficult to find and fix




//  Error objects are thrown when runtime errors occur. 

//  The Error object can also be used as a base object for user-defined exceptions.

// Summary of Error Types

// ErrorType	                   Description
// SyntaxError	               Code syntax is incorrect, causing parsing issues.
// ReferenceError          	Variable or function not found in the current scope.
// TypeError	               Operation performed on an incompatible data type (e.g., calling a method on undefined).
// RangeError	               Value is outside the allowable range (e.g., array.length = -1).
// URIError	               Malformed URI passed to URI handling functions (e.g., decodeURI).
// EvalError	               Issues with eval() (rarely encountered in modern JavaScript).
// AggregateError	           Multiple errors combined in one error, mainly for asynchronous operations (e.g., Promise.any).




// // how to handle 

// try, catch, and finally in JavaScript


// The try, catch, and finally blocks are used for error handling in JavaScript. 
// They allow you to execute code that might throw an error (try), handle the error
//  if it occurs (catch), and perform any final actions regardless of whether an error occurred (finally).

// 1. The try Block
// The try block contains code that might throw an error.
//  If an error occurs in the try block, JavaScript jumps immediately to the catch block.

// Example of try Block:



// try {
//   let result = 10 / 0; // Code that could potentially throw an error
//   console.log("Result:", result);
// }



// In this example, dividing by zero won’t throw an error in JavaScript (it’ll return Infinity),
//  so the code in try will run without issues. But in more complex cases, errors can arise, and we need catch.



// 2. The catch Block
// The catch block is executed if an error occurs within the try block.
//  You can also capture details of the error using a parameter in the catch block.


// Example of try and catch:


// try {
//   let x = y + 1; // Error: y is not defined
//   console.log("This will not execute");
// } catch (error) {
//   console.log("Error caught:", error.message);
// }


// Output:

// Error caught: y is not defined
// Here, y is undefined, so the try block throws a ReferenceError, which is caught in the catch block.
//  The catch block captures the error and prevents the program from crashing.



// 3. The finally Block

// The finally block will always run, regardless of whether an error occurred in the try block or if it was caught by catch. 
// It’s useful for cleanup operations or other actions that need to
//  happen after the try and catch blocks, like closing a database connection or clearing data.

// Example of try, catch, and finally:

// try {
//   let num = 10;
//   let result = num.toUpperCase(); // Error: toUpperCase() is not a function for numbers
//   console.log("Result:", result);
// } catch (error) {
//   console.log("Error caught:", error.message);
// } finally {
//   console.log("Execution completed. This runs regardless of errors.");
// }
// Output:

// Error caught: num.toUpperCase is not a function
// Execution completed. This runs regardless of errors.
// Here, the finally block runs no matter what. Whether an error occurs or not, finally ensures that cleanup code runs.

// Usage Summary

// try: Place potentially error-prone code here. 
// catch: Handles errors that occur in the try block.
//  finally: Runs code after try and catch complete, regardless of success or failure in the try.


// Another Example
// function fetchData() {
//   try {
//     let data = JSON.parse("{ invalid JSON string }"); // This will throw an error
//     console.log("Data fetched:", data);
//   } catch (error) {
//     console.log("Error in parsing JSON:", error.message);
//   } finally {
//     console.log("Fetching data process completed.");
//   }
// }

// fetchData();
// Output:

// Error in parsing JSON: Unexpected token i in JSON at position 2
// Fetching data process completed.



// Summary of try, catch, finally

// try: Used for code that might throw an error. 
// catch: Catches and handles any error that occurs in the try block.
// finally: Executes code after try and catch finish, no matter what.
// This structure helps manage errors gracefully and ensures the program doesn’t crash unexpectedly.





// the throw statement is used to create a custom error. When you use throw, you can specify the error message or even throw a specific error type like TypeError, ReferenceError, etc. 
// This is especially useful for handling specific cases where you want to enforce certain conditions in your code.

// Basic throw Example
// function divide(a, b) {
//     if (b === 0) {
//       throw "Cannot divide by zero"; // Custom error message
//     }
//     return a / b;
//   }
  
//   try {
//     console.log(divide(10, 0));
//   } catch (error) {
//     console.log("Error:", error);
//   }


//   Throwing a Custom Error with an Error Object

  function login(username) {
    if (!username) {
      throw new Error("Username is required"); // Custom error message in Error object
    }
    console.log("Login successful!");
  }
  
  try {
    login("shamshad"); // Missing username
  } catch (error) {
    console.log("Caught Error:", error.message);
  }
  

  
