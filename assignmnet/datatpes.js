// Datatypes assignment

// 1. What are the two main categories of data types in JavaScript?

// The two main categories of data types in JavaScript are:

// Primitive Data Types
// Non primitive Data Types

// 2. What is a primitive data type? List all the primitive data types in JavaScript.
// The primitive data types in JavaScript are:

// String
// Number
// Boolean
// Undefined
// Null
// Symbol (introduced in ES6)
// BigInt (introduced in ES11)


// 3. What is the difference between `null` and `undefined` in JavaScript?

// null is an intentional absence of any object value. It is explicitly assigned by the programmer to indicate that a variable should have no value.
// undefined means a variable has been declared but has not yet been assigned a value.

// 4. How do you check the type of a variable in JavaScript?
// let x = 42;
// console.log(typeof x);  // "number"

// 5. What will the following code output?


// console.log(typeof 42);             // "number"
// console.log(typeof 'Hello');        // "string"
// console.log(typeof true);           // "boolean"
// console.log(typeof { name: 'John' });// "object"
// console.log(typeof [1, 2, 3]);      // "object"


// 6. What data type is returned by the expression `3 + '3'`?
// The expression 3 + '3' returns a string. The result is "33" because the number 3 is converted to a string and then concatenated with '3'.

// 7. What will be the result of the following code?

// let num = 10;
// let str = '10';

// console.log(num == str);   // true
// console.log(num === str);  // false
// == compares only the values, so 10 == '10' is true because the string is converted to a number.
// === compares both the value and the type, so 10 === '10' is false because the types are different.


// 8. Explain the difference between `==` and `===` in JavaScript.
// == (loose equality) checks for equality of values after performing type conversion if necessary.
// === (strict equality) checks for both equality of value and type without performing any type conversion.

// 9. What data type is used to represent a sequence of characters in JavaScript?
// The String data type is used to represent a sequence of characters in JavaScript.


// 10. What will be the output of the following code?


// let obj = { a: 1, b: 2 };

// console.log(typeof obj);    // "object"
// console.log(typeof obj.a);  // "number"






// 11.What are the datatypes of `a`, `b`, `c`, `d`, `e`, `f`, and `g`?Identify the datatype:
// let a = 42;                // number
// let b = "JavaScript";      // string
// let c = false;             // boolean
// let d = undefined;         // undefined
// let e = null;              // object (this is a special case in JavaScript)
// let f = { key: "value" };  // object
// let g = [1, 2, 3];         // object (arrays are objects in JavaScript)

// 12.What is the datatype of the following values?
// console.log(typeof "Hello World");   // "string"
// console.log(typeof 12345);           // "number"
// console.log(typeof true);            // "boolean"
// console.log(typeof { foo: "bar" });  // "object"
// console.log(typeof [1, 2, 3]);       // "object"
// console.log(typeof function() {});   // "function"
// console.log(typeof undefined);       // "undefined"
// 13.What will be the result of the following code?
// let x = 10;
// let y = "10";

// console.log(typeof x);  // "number"
// console.log(typeof y);  // "string"
// 14.Determine the datatype of the result of these expressions:
// console.log(typeof (10 + 20));   // "number"  (addition of two numbers)
// console.log(typeof (10 - "2"));  // "number"  (string "2" is converted to number)
// console.log(typeof ("5" * 3));   // "number"  (string "5" is converted to number)
// console.log(typeof ("hello" / 2)); // "number"  (string "hello" can't be converted, result is NaN, but typeof NaN is "number")