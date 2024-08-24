
// 1. Assign `a = 10` and `b = 5`. Log the result of `a + b` to the console.  

//    let a = 10;
//    let b = 5;
//    console.log(a + b);
// Answer: 15

// 2. Assign `a = 20` and `b = 8`. Log the result of `a - b` to the console.  
 
//    let a = 20;
//    let b = 8;
//    console.log(a - b);
// Answer: 12
  

// 3. Assign `a = 4` and `b = 7`. Log the result of `a * b` to the console.  

//    let a = 4;
//    let b = 7;
//    console.log(a * b);


// 4. Assign `a = 16` and `b = 4`. Log the result of `a / b` to the console.  

//    let a = 16;
//    let b = 4;
//    console.log(a / b);


// 5. Assign `a = 13` and `b = 4`. Log the result of `a % b` to the console.  

//    let a = 13;
//    let b = 4;
//    console.log(a % b);










// 6. Assign `num = 10`. Use `num += 7`, `num -= 3`, `num *= 2`, and `num /= 5`, logging the value of `num` after each operation.  

//    let num = 10;
//    num += 7; //num =num+7
//    console.log(num); //Answer: 17
//    num -= 3; //num=num-3 
//    console.log(num);//14
//    num *= 2; //num=num*2 
//    console.log(num); //28
//    num /= 5; // num=num/5
//    console.log(num); 


// 7. Assign `a = 10` and `b = 10`. Log `a == b` to the console.  

//    let a = 10;
//    let b = 10;
//    console.log(a == b);

// Answer=true

// 8. Assign `a = 10` and `b = '10'`. Log `a === b` to the console.  
 
   
    //false
   

// 9. Assign `a = 15` and `b = 20`. Log whether `a` is greater than, less than, or equal to `b`.   
//  let a = 15;
//    let b = 20;
//    if (a > b) {
//        console.log('greater than');
//    } else if (a < b) {
//        console.log('less than');
//    } else {
//        console.log('equal to');
//    }
//    answer= less than

// 1.if(){

// }
// 2.if(){}else{}
// 3.if -else-if 





// 10. Assign `x = true` and `y = false`. Log the result of `x && y` and `x || y` to the console.  

    // let x = true;
    // let y = false;
    // console.log("we put variables:",x && y); //false
    // console.log("we put some numbers:",(3>2) && (2<4)); //true
    // console.log(x || y); //tr
  

// 11. Assign `x = false`. Log the result of `!x` to the console.  
 
    // let x = 5;
    // console.log(x); //false 
    // console.log(!x);//true


// 12. Assign `age = 22`. Use a ternary operator to log `'Adult'` if `age` is 18 or older, and `'Minor'` otherwise.  

    // let age = 22;
    // if(age>=18){
    //     console.log("Adult")
    // }else{
    //     console.log("minor")
    // }
    // condtition?statement1:statement2
// age >= 18 ? console.log('Adult' ): console.log('Minor'); // Answer: 'Adult'


// 13. Assign `value = 100`. Log the result of `typeof value` to the console.  

    // let value = 100;
    // console.log(typeof value); //number





// 14. Assign `value = '5'`. Log the result of `+value` to the console.  
  
    // let value = '5';
    // console.log(+value); //5
// 15. Assign `value = 7`. Log the results of `++value`, `value++`, `--value`, and `value--` to the console.  

//     let value = 7;
//     console.log(++value); // Pre-increment //8
// console.log(value) //8
    
//     console.log(value++); // Post-increment //8
// console.log(value) //9
// console.log(value++) //9
// console.log(value) //10


//     console.log(--value); // Pre-decrement //8
//     console.log(value--); // Post-decrement //8 
// console.log(value) //7

// 1. Arithmetic Operators
// Addition:
// Create two variables, a and b, and assign them numeric values. Use the + operator to find their sum and log the result.
// let a = 10;
// let b = 5;
// let sum=a+b;
// console.log(sum); // Answer: 15

// Subtraction:
// Create two variables, a and b, and assign them numeric values. Use the - operator to find the difference between a and b and log the result.
// let a = 20;
// let b = 8;
// console.log(a - b); // Answer: 12

// Multiplication:
// Create two variables, a and b, and assign them numeric values. Use the * operator to find their product and log the result.
// let a = 4;
// let b = 7;
// console.log(a * b); // Answer: 28

// Division:
// Create two variables, a and b, and assign them numeric values. Use the / operator to divide a by b and log the result. Handle division by zero by checking if b is zero before dividing.
// let a = 16;
// let b = 4;
// if (b !== 0) {
//     console.log(a / b); // Answer: 4
// } else {
//     console.log('Division by zero is not allowed.');
// }

// Modulus:
// Create two variables, a and b, and assign them numeric values. Use the % operator to find the remainder of a divided by b and log the result.
// let a = 13;
// let b = 4;
// console.log("remainder:",a % b); // Answer: 1

// 2. Assignment Operators
// Basic Assignment:
// Create a variable num and assign it the value 10. Use the += operator to add 5 to num, -= to subtract 3, *= to multiply by 2, and /= to divide by 4. Log the final value of num after each operation.
// let num = 10;
// num += 5; //num=num+5
// console.log(num); // Answer: 15
// num -= 3;
// console.log(num); // Answer: 12
// num *= 2;
// console.log(num); // Answer: 24
// num /= 4;
// console.log(num); // Answer: 6

// 3. Comparison Operators
// Equal to:
// Create two variables, a and b, and assign them values. Use the == operator to check if a is equal to b and log the result.
// let a = 10;
// let b = 10;
// console.log(a == b); // Answer: true

// Strict Equality:
// Create two variables, a and b, and assign them values of different types. Use the === operator to check if a is strictly equal to b (both value and type) and log the result.
// let a = 10;
// let b = '10';
// console.log(a === b); // Answer: false

// Greater than and Less than:
// Create two variables, a and b, and assign them values. Use the > and < operators to compare a and b. Log whether a is greater than, less than, or equal to b.
// let a = 15;
// let b = 20;
// if (a > b) {
//     console.log('greater than');
// } else if (a < b) {
//     console.log('less than'); // Answer: 'less than'
// } else {
//     console.log('equal to');
// }

// 4. Logical Operators
// Logical AND/OR:
// Create two boolean variables, x and y. Use the && operator to combine x and y, and the || operator to combine x and y. Log the results of both operations.
// let x = true;
// let y = false;
// console.log(x && y); // Answer: false
// console.log(x || y); // Answer: true

// Logical NOT:
// Create a boolean variable x. Use the ! operator to negate x and log the result.
// let x = false;
// console.log(!x); // Answer: true


// 5. Type Operators
// 12.Typeof:
// Create a variable value and assign it a value of different types. Use the typeof operator to log the type of value.
// let value = 100;
// console.log(typeof value); // Answer: 'number'

// value = "Hello";
// console.log(typeof value); // Answer: 'string'

// value = true;
// console.log(typeof value); // Answer: 'boolean'

// 13.Increment and Decrement:
// Create a variable value and assign it a numeric value. Use the pre-increment (++value), post-increment (value++), pre-decrement (--value), and post-decrement (value--) operators. Log the value of value before and after each operation.
// let value = 7;
// console.log(++value); // Answer: 8 (pre-increment)
// console.log(value);   // Answer: 8 (after pre-increment)
// console.log(value++); // Answer: 8 (post-increment)
// console.log(value);   // Answer: 9 (after post-increment)
// console.log(--value); // Answer: 8 (pre-decrement)
// console.log(value);   // Answer: 8 (after pre-decrement)
// console.log(value--); // Answer: 8 (post-decrement)
// console.log(value);   // Answer: 7 (after post-decrement)
























