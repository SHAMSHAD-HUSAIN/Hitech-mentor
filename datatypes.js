// let name ="shamshad";
// let age=10;
// let rollno;
// console.log(name);

// console.log("hitech-mentorsaknfashjfadhjkhfdjhjfd","  sam","mentor",name ,age, rollno)




// 0101010101010101010101010000010101010
// 1mb= 1024 bytes
// 1bytes=8 bits

// datatypes
// 1.  primitve //predifined // single data
// 2.non-primitive // userdefined //sequence data


// types of datatypes javascript
// 1.number 
// A. integer =1,2,3 ,4 5, 6,-4
// B. floaing point = 1.02, 1.4455,0.00000000234, -0.3435,
// 2.string  //let name="",let name1='',
// 3.BigInt   
// 4.Boolean
// 5.undefined
// 6.null 
// 7.Symbol
// 8.Object //non

// let age =12hfgff;

// example numbers
// const number1=3;
// console.log(typeof(number1));
// const number2=3.433;
// const  number3= 3*10^5 ;
// const number4=3/0; //infinity
// const number5=-3/0 //-infinty

// example string

// const name ='sam';
// const name2="hitech";
// const name3 =`the names are ${name} and ${name2} and ${number1} and ${number5}`
// console.log(name3)


// bigInt
// above 2^53-1    below-(2^53 -1)
// const num=34n;
// const val1=9000719925124750998n;
// const result =val1+1n;
// console.log(result)


// Boolean
// const datacheck=true;
// const valuecounted=false;

//undefined
// let name5;
// console.log(name5)

// null
// const number=null; casesensitive

// Symbol Es6(Es2015 ) immutable and unique
// const value1 =Symbol('hello');  
// console.log(value1)
// const value2 =Symbol('hello');

// console.log(typeof(value2))

// Object
// it allows us to store collection of data
// const objectname ={
//     key:Value,
//     key:Value,
//     key:Value,
//     key:Value,
//     key:Value,
//     key:Value,
// }

// const student ={
//     firstName:"sam",
//     lastname :null,
//     class:10,
//     age:12.5
// }
// console.log(student)

// operators are used for arithmatic and logical calculation .
// a=8;
// left ,right(values,variables)= operands
// Symbol= operators


// 1.assignment op  =>   a=7;
// 2.Arithmetic op  => +,-,*,/,%,++,--,**

// 3. comparison op =>  ==,!=,===,!==,>,<,>=,<=,
// 4.logical   =>&&,||,!,
// 5.bitwise =>&,|,^,~,<<,>>,
// 6.string= >``
// 7.others=>,?:,delete,typof,void,in, instanceof,



// javascript type conversion
// 1. implicit conevrsion=> type automatically 
// 1.impicit conversion to string
//  const res="3"+2; //=>type string =>"32"

// console.log(typeof(res))

// const res1="3"+true;  //3true
// console.log(res1)

// const res2="3"+undefined;  
// console.log(res2)

// const res3="3"+null; 
// console.log(res3)


// ex2: impilicit conversion to number

// const val= "4"-"2";  //2
// console.log("impilicit conversion to number",val)

// const val2= "4"*"2";  
// console.log("impilicit conversion to number",val2)

// const val3 ="8"/"2";
// console.log(typeof(val3));


// example3: non-numeric string 
// let result6="hello"-"world"; =>NAN


// implicit boolean conversion to number

// let result="4"-true; 
// console.log("implicit boolean conversion to number",result)//3


// let result2=4+true; 


// console.log("implicit boolean conversion to number",result2)///5


// let result3=4+false; 
// console.log("implicit boolean conversion to number",result3)///4


// implicit null conversion to number
// implicit null conversion to number
// let result7 =4+null; //4
// console.log("implicit null  conversion to number",result7)///4
// let result8 =4-null; 
// console.log("implicit null  conversion to number",result8)///4

// implicit undefined used with number,boolean, null 
// let result= 4+undefined; //NaN
// console.log(typeof(result));
// let result= 4-undefined; //NaN
// console.log(result);

// let result= true+undefined; //NaN
// console.log(result);
// console.log(typeof(result));


// let result= null+undefined; //NaN
// console.log(result);
// console.log(typeof(result));


// 2. explicit conevrsion=> type manually

// 1.convert to number 

// let res=Number("342"-true);

// console.log(typeof(res)); 

// let result=Number(true); //

// let res=parseInt(29.94645);
// console.log(res)


// let res=parseFloat(29.000);
// console.log(typeof(res));


// 1.convert to string

// let res=String(25423);
// console.log(typeof(res));

// let res1=(25423).toString();
// console.log(typeof(res1));


// let res=Boolean(25423);
// console.log(typeof(res));

// let obj={
//     name:"hitech"
// }
// console.log(typeof(obj));

// let res=obj.toString();
// console.log(typeof(res));


// let name=parseFloat(prompt("enter your name:"))