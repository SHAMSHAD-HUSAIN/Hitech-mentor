//      *
//     ***
//    *****
//   *******
//  *********
// ***********


// iteration, loop,repitation
// what ?

// why?
// console.log( 'join htech mentor');
// console.log( 'join htech mentor');
// console.log( 'join htech mentor');
// console.log( 'join htech mentor');
// console.log( 'join htech mentor');
// console.log( 'join htech mentor');
// console.log( 'join htech mentor');
// console.log( 'join htech mentor');
// console.log( 'join htech mentor');
// console.log( 'join htech mentor');
// console.log( 'join htech mentor');
// console.log( 'join htech mentor');
// console.log( 'join htech mentor');
// console.log( 'join htech mentor');
// console.log( 'join htech mentor');
// console.log( 'join htech mentor');
// console.log( 'join htech mentor');
// console.log( 'join htech mentor');
// console.log( 'join htech mentor');
// console.log( 'join htech mentor');
// console.log( 'join htech mentor');
// console.log( 'join htech mentor');
// console.log( 'join htech mentor');
// console.log( 'join htech mentor');
// console.log( 'join htech mentor');
// console.log( 'join htech mentor');
// console.log( 'join htech mentor');

// how?
// 1.while 
// 2. do...while
// 3.for
// syntax:
// while(condition){
//     //body of loop 
// }
// 1.evaluates the condition inside the ().
// 2.if condition is  true ,code inside the while loop {}is exucuted
// 3.condition evaluates again
// 4.process continues untli condition is false
// 5. when condition is false , loops stops (terminates)
// example:


// print number 1 to 5
// let i=1;
// let n =5;
// while (i<=n){
//     console.log(i)
//     i+=1; //i=i+1;
// }
// 1
// 2
// 3
// 4
// 5

// 2. do...while
// 2. do...while
// 2. do...while
// syntax :
// do {

// }while(condition)

    // example:
    // 1. body exucuted at first .then condition is evaluated

// print number 1 to 5
// let firstnum=1;
// let lastnum =5;
// do {
//  console.log(firstnum)
//     // i+=1; //i=i+1;
//     firstnum++;

// }while(firstnum<=lastnum);

// for loop

// syntax:
// for(intialExpression;condition ;updatedExpression){
//     // for loop body 
// }

// example:
// let n=5;
// for (let i=1; i<=n;i++){
//     console.log("join hitech mentor!!!!")
// }
// 1. initial exp excute only once
// 2.condition evaluate 
// 3. update the upodateExp



// print sum of natural number

// let sum=0;
// const n =5;
// for (let i=1; i<=n; i++){
//     sum=sum+i;
//     if (i==3){
//         continue;
//     }
// }
// console.log("sum ",sum)

//   sum i 
//    0+1
//    1+2
//    3+3
//    6+4
//    10+5 


// i++ >>>>>>>>>>i=i+1



// label statement:
// 1. break ///
// 2. continue



// nested 
// outer loop, innerloop
// for (){
//     for (){

//     }
// }

// * * * * * *            
// ******
// ******
// ******
// row=i; outer loop
// col= j; inner loop

let n=4;
let  m=6;
for (let i=1; i<=4; i++){

    let str=""
    for (let j=1; j<=6; j++){
       str=str+"* "
   

    }
    console.log(str)
   

}


i=1;
    j=1 
      str=*
      *
    j=2
       str=**
       **
    j=3
         str=***
         ***
    j=4
       str=****
       ****

    j=5
          str=*****
          *****
     j=6
           str=******
           *****  
           
           // ****** 
           
i=2  
     j=1 
         str=*
         j=2
           str=**
     j=3
       str=***
     j=4
        str=****
     j=5
        str=*****
      j=6
         str=******    

      // ****** 
      // ****** 

      i=3 
      j=1 
          str=*
          j=2
            str=**
      j=3
        str=***
      j=4
         str=****
      j=5
         str=*****
       j=6
          str=****** 


          i=4 
     j=1 
         str=*
         j=2
           str=**
     j=3
       str=***
     j=4
        str=****
     j=5
        str=*****
      j=6
         str=****** 

        

// ******            
// ******
// ******
// ******


// print * right angle angle
// *  
// **
// ***
// ****
// *****

// row=i=5 
// col=j=5
//i=j
  let n =5

   

for (let i=1; i<=n; i++){
    let str =""
    for (let j=1; j<=i; j++){
    str=str+"*"
    }
    console.log(str)
}


i=1
   j=1
      str=*
      *
 i=2 
    j=1
     str=*
    j=2
    str=**
    **
  i=3  
   j=1
     str=*
    j=2
       str=** 
     j=3 
       str =***  
         ***
   i=4
   j=1
   str=*
  j=2
     str=** 
   j=3 
     str =***  
       ***
    j=4
    str=****
    
    ****


    i=5
    j=1
    str=*
   j=2
      str=** 
    j=3 
      str =***  
        ***
     j=4
     str=****
     
    
     j=5
     str=****
     
     *****


   // print  right angle 
   1
   1 2
   1 2 3
   1 2 3 4
//i=j
   
   let n=4


   for (let i=1; i<=n ; i++){

    let str =""
    for (let j=1; j<=i; j++){
        str=str+j+" ";
   }
   console.log(str)

   }

   i=1
      j=1
      str=1
      1
   i=2
     j=1
         1 
      j=2
         2

i=3
    j=1
      1
      j=2
       2
       j=3
       3
i=4
      j=1
      1
      j=2
       2
       j=3
       3
       j=4
       4

            

//    print pyramid pattern 
   *
  ***
 *****
******* 

row         space      Star 
i=1     j=3 n-i      1 =2*i-1
i=2     j=2 n-i      3 =2*i-1
i=3     j=1 n-i      5 =2*i-1
i=4     j=0 n-i      7 =2*i-1
let n=4;
for (let i=1; i<=n; i++){
    let str=""
    for (let j=1;j<=n-i; j++ ){
        str=str+" "
    }

    for (let k=1; k<=2*i-1 ; k++){
        str=str+"*"
    }
    console.log(str)
}



i=1
   j=1
     _
     j=2
     __
     j=3
     str=___

     k=1;
        ___*



        print=___*

   i=2
      j=1
       str=_
       j=2
       str=__

       k=1
        str=__*
       k=2
       str=__**
       k=3
       str=__***
       
       print:__***


  i=3
       j=1
        str=_
        
 
        k=1
         str=_*
        k=2
        str=_**
        k=3
        str=_***
        k=4
        str=_****
        k=5
        str=_*****

        
        print:_*****

 i=4
       j=1
        str=
        
 
        k=1
         str=*
        k=2
        str=**
        k=3
        str=***
        k=4
        str=****
        k=5
        str=*****
        k=6
        str=******
        k=7
        str=*******
        
        print:*******

assignment
1.
*****
****
***
**
*


// row=i=5 
// col=j=5
//i=j
let n =5

   

for (let i=5; i>=1; i--){
    let str =""
    for (let j=1; j<=i; j++){
    str=str+"*"
    }
    console.log(str)
}

i=5 
   j=1 
      *
   j=2
      **
   j=3
      ***
    j=4
     ****
     j= 5
     ***** 

     *****



2.
*****    
 ***
  *
  row      space      star      
  i=3        j= 0 n-i    k=5
  2       j= 1  n-i   k=3
  1       j= 2   n-i  k=1

 let n=3;

for (let i=n; i>=1; i--){
    let str=""
    for (let j=1;j<=n-i; j++ ){
        str=str+" "
    }

    for (let k=1; k<=2*i-1 ; k++){
        str=str+"*"
    }
    console.log(str)
}


3.
 1
 2 3
 4 5 6
 7 8 9 10 

 row=4
 col=4

 let n=4

  let count =1
 for (let i=1; i<=n ; i++){

  let str =""

  for (let j=1; j<=i; j++){
      str=str+count+ " ";
      count++
 }
 console.log(str)

 }

 4.
    *
   **
  ***
 ****
 

 let n=4;
for (let i=1; i<=n; i++){
    let str=""
    for (let j=1;j<=n-i; j++ ){
        str=str+" "
    }

    for (let k=1; k<=i ; k++){
        str=str+"*"
    }
    console.log(str)
}

 5.
 1 2 3 4 5
 1 2 3 4
 1 2 3
 1 2
 1

 let n=5


 for (let i=n; i>=1 ; i--){

  let str =""
  for (let j=1; j<=i; j++){
      str=str+j+" ";
 }
 console.log(str)

 }
 6.
 *****
 *   *
 *   *
 *****

 row= let n=4
 col=5 let m=5

 star    i=1,  i=n ,j=1 ,j=m
space 
\
let n=4;
let m=5;
 for (let i=1; i<=n; i++){
  
   let str =" ";

   for (j=1; j<=m; j++){
if (i===1||i===n||j===1||j===m){
   str +="* "
}else{
   str+=" "
}


   }

console.log(str)
 }





