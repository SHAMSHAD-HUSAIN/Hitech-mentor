// Control statements in programming languages help determine the
//  flow of execution of a program. 
// They can specify the order of instructions, make decisions, repeat actions, and 
// control the flow based on conditions

// a flow control statement used for decision-making in the  program.

// 1.if
// 2.if-else
// 3.if -else-if
// 4.switch

// Use if to specify a block of code to be executed, if a specified condition is true
// Use else to specify a block of code to be executed, if the same condition is false
// Use else if to specify a new condition to test, if the first condition is false
// Use switch to specify many alternative blocks of code to be executed


// if(condition){
//     // statement
// }

// let age=12;

// if(age>=18){
//     console.log("adult")
// }
// console.log("hello")

// let age=45;
// let age =prompt("Enter your age:");
// // let age =25;
// if(age>=18){
//     console.log("you can vote !!")
// }else{
//     console.log("you can not vote!!!")
// }

// check either number is positive or nagative/zero

// let number =prompt("Enter a number:");
// if (number>0){
//     console.log("number is positive!!")
// }else{
//     console.log("number is nagative /zero!!")

// }

// check either number is positive or nagative/zero
// let number =prompt("Enter a number:");
// if(number>0){
//     console.log("number is postive!!")
// }else if(number==0){

//     console.log("number is  zero!!!")
// }else{
//     console.log("number is negative!!!")
// }


// check student score card 

// let percent= prompt("enter percentage:");

// if(percent>100 ||percent<0){
//     console.log("Enter valid percentage!!!")

// }else if (percent>=90){
//     console.log("grade A")
// }else if(percent>=80){
//     console.log("grade B")

// }else if(percent>=60){
//     console.log("grade c")

// }else if(percent>=40){
//     console.log("grade D")

// }else {
//     console.log("fail!")

// }


// switch(condtion){
//     case1:break;
//     Case2:break;
//     case3:break;
//     default: 

// }

// let a =3;
// switch(a){
//     case 1: a="one";
//     break;
//     case 2: a="two"
//     break;
//     default: a="not found"
//     break;
// }
// console.log(`the value is ${a}`);



// calculater

// let operator=prompt("Enter Operator +,-,*,/:");
// console.log("perform:",operator)
// const value1= parseFloat(prompt("Enter first number:"));
// console.log("first number is :",value1)
// const value2= parseFloat(prompt("Enter second number:"));
// console.log("second number is :",value2)

// switch(operator){
//     case "+":
//         result=value1+value2;
//         console.log("addtion is :",result)
//         break;
//    case "-":   
//    result=value1-value2;
//    console.log("subtraction is :",result)
//    break; 
//    case "*":   
//    result=value1*value2;
//    console.log("multiplication is :",result)
//    break;  
//    case "/":   
//    result=value1/value2;
//    console.log("Division is :",result)
//    break;   
//    default:
//     console.log("invalid operator");
//     break;

// }

// console.log("select choice:\n 1.Addtion \n 2.Subtraction \n 3.Multiply \n 4.divide")

// let choice=prompt("Enter choice :");
// console.log("your choice is:",choice)

// const value1= parseFloat(prompt("Enter first number:"));
// console.log("first number is :",value1)
// const value2= parseFloat(prompt("Enter second number:"));
// console.log("second number is :",value2)

// switch(choice){
//     case "1":
//         result=value1+value2;
//         console.log("addtion is :",result)
//         break;
//    case "2":   
//    result=value1-value2;
//    console.log("subtraction is :",result)
//    break; 
//    case "3":   
//    result=value1*value2;
//    console.log("multiplication is :",result)
//    break;  
//    case "4":   
//    result=value1/value2;
//    console.log("Division is :",result)
//    break;   
//    default:
//     console.log("invalid operator");
//     break;

// }

// nested
// const num= prompt("Enter number:");

// if(num>=0){
//           if(num==0){
//                      console.log("number is zero ")
//                }else{
//                       console.log("number is positive!!")
//                     }
// }else{
//     console.log("number is negative!!")

// }
// function my (){
//     return hello 
// }


