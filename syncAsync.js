// Synchronous: Executes line-by-line, blocking the next line until the current one finishes.
// Asynchronous: Allows tasks to run concurrently without blocking the main thread.
// Callback: A function passed into another function to execute after an async operation completes.
// Callback Hell: Nested callbacks, which make code harder to read and maintain.
// Promise: An object that represents a future result of an async operation.
// async/await: Syntax that makes asynchronous code look synchronous, improving readability.
// A web API is an application programming interface (API) for either a web server or a web browser.
//event loop ==it manages async operations and  ensures non-blocking behavior. while javascript code is executed sequentially , asynchronous tasks, such as timers ,ajax requests are scheduled and managed by event loop.


// 1. Synchronous vs. Asynchronous JavaScript

// JavaScript is single-threaded, meaning it executes code line-by-line in a single flow.
//  In synchronous code, each line waits for the previous one to finish before executing.
 



//  Synchronous Example:
//  console.log("Start");

// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }

// console.log("End");

// ---------------------------------------------------------------------------
// Asynchronous code allows multiple operations to occur simultaneously, 
// improving efficiency for tasks like fetching data from a server.

// Asynchronous Example using setTimeout:
// console.log("Start");

// setTimeout(() => {
//   console.log("Async operation complete");
// }, 2000);

// console.log("End");





// console.log(" hello , i am roll no 1.")
// alert()
// console.log(" hello , i am roll no 2.")
// console.log(" hello , i am roll no 3.")
// console.log(" hello , i am roll no 4.")
// console.log(" hello , i am roll no 5.")





// function fn1(){
//   console.log(" hello , i am roll no 1.")
// }

// alert()

// function fn2(){
//   console.log(" hello , i am roll no 2.")
// }

// function fn3(){
//   console.log(" hello , i am roll no 3.")
// }

// function fn4(){
//  let a=5;
//  let b=7;
// console.log("sum of a and b is:",a+b);
// }

// fn1();
// fn2();
// fn3();
// fn4();



// setTimeout();
// setInterval()
// callback();
// Promise
// async /await

function fn1(){
  setTimeout(()=>{
    console.log(" hello , i am roll no 1. after 2 sec")
  
  },6000)
}

function fn2(){
  setTimeout(()=>{
    console.log(" hello , i am roll no 2. after 2 sec")
  
  },1000)
}

function fn3(){
  setTimeout(()=>{
    console.log(" hello , i am roll no 3.after 2 sec ")
  
  },3000)
}

function fn4(){
  setTimeout(()=>{
    console.log(" hello , i am roll no 4.after 2 sec")
  
  },5000)
}

fn1();
fn2();
fn3();
fn4();
