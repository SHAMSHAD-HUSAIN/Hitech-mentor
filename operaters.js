// operators are used for arithmatic and logical calculation .
// a=8;
// left ,right(values,variables)= operands
// Symbol= operators


// 1.assignment op  =>   a=7;
// 2.Arithmetic op  => +,-,*,/,%,++,--,**

// 3. comparison op =>  ==,!=,===,!==,>,<,>=,<=,
// 4.logical   =>&&,||,!,
// 5.bitwise =>&,|,^,~,<<,>>,
// 6.string= +
// 7.others=>,?:,delete,typof,void,in, instanceof,


// assignment op 
let a=8*3032552-62525;
let  b=5;
 b += 6; // b=5;  
console.log("b====>",b)
let c=6; //c=6;
let d=-3; // d=-3;

// const g+=5 ;//a=a+5

// Arithmetic op
// Arithmetic op
// Arithmetic op
// Arithmetic op
// Arithmetic op
let x=6
let y=10

// + addtion
//  let z=x+y;
//  console.log(`addiotion of ${x} and ${y} is:`, z);
// -  subtraction
let z=x-y;
 console.log(`subtraction of ${x} and ${y} is:`, z);

// *  multiplication
let t=x*z;
 console.log(`multiply of ${x} and ${z} is:`, t);
// / division
// let d=x/y;
 console.log(`division of ${x} and ${y} is:`, d);
// % remainder
let r=x%y;
 console.log(`division of ${x} and ${y} is:`, r);
// ++ increment
console.log("value of x is:",x);
console.log("++x",++x); //7
console.log("x++",x++); //7 
console.log("x",x); //8 

// -- decrement
console.log("value of y is:",y); //10
console.log("--y:",--y); //9
console.log("y--:",y--); //9
console.log("y:",y); //8 
// **  exponential
let h=2;
let j=3
let E=h**j; 
console.log(`H is${h}**J is ${j}=`,E)


// comparison op
// comparison op
// comparison op
// comparison op
// comparison op
// comparison op
 let val1=10;
 let val2=20;
 console.log(val1==val2); //false
 console.log(val1!=val2); //true
 console.log(val1===val2); //false
 console.log(val1!==val2); //true
 console.log(val1>val2); //false
 console.log(val1<val2); //true
 console.log(val1<=val2); //true
 console.log(val1>=val2); //false

 console.log(3<=6); //true
 console.log("hello"!=="hello"); 


//  logical operators  =>
    // && ==return true if both are true
// ||==return true if one value is  true
// "!" 
let value1=30;
let value2=40;

console.log((value1<value2)&&(value1==value2));  
console.log((value1<value2)||(value1==value2));  
console.log(!value1);  
console.log("true :",!true);  


// bitwise operator  =>&,|,^,~,<<,>>,
// bitwise operator  =>&,|,^,~,<<,>>,
// bitwise operator  =>&,|,^,~,<<,>>,
// bitwise operator  =>&,|,^,~,<<,>>,
// bitwise operator  =>&,|,^,~,<<,>>,


// & operaror
console.log("&",5&1) 
// 5=101
// 1=001
// 001 =1

// || operator
console.log("OR",5|1) 

// 5=101
// 1=001
    // 5=101



    // XOR "^" if both bits are diffrent it returns 1
console.log("XOR",5^1) 
// 5=101
// 1=001
//  4=100



// "~ not operator"
console.log(~5);
// 5=000000000000000000000000101
//  -6=1111111111111111111111010




    // left shift <<  one or more zeroes bits  pushed from right side
    // 5=000000000000000000000000101
    console.log(5<<1)
    // 5=000000000000000000000000101
    // 10=10000000000000000000001010

    
    // right shift >> one or more zeroes bits  pushed from right side
    console.log(5>>1)
    // 5=000000000000000000000000101
    // 2=000000000000000000000000010
    console.log(5>>2)
// 5=000000000000000000000000101
// 1=000000000000000000000000001
console.log(-6>>1)
// -6=1111111111111111111111010
//  -3=111111111111111111111101

