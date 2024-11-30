// promise 
// promise is an object .
//  a promise is a good way to handle asynchronous operations. 
//  it is used to find out if the asynchronous operation is successfully
//  comleted or not 


// there are three states of any Promise



// 1.pending ...the promise starts and process is not complete
// 2.fullfilled/successfull .resolve...the promise starts and process is not complete
// 3.reject...


// real world example
// hotel order , you have ordered and told 
// wait for 10 minutes ...
// // how to create 
// 1. with constructor function
// 2. with object promise (new)


// note:promise constructor passes   an executer function and executer functions passed resolve and reject function as an argument 

let promise = new Promise(function (resolve, reject) {
  //coding here .....
});

// arrow function
let promise1 = new Promise((resolve, reject) => {
  //coding here .....
})



const Order = false;


//  let OrderStatus =new Promise( (resolve,reject)=>{

//     if (Order){
//         resolve ("you recieved your order!!!!")
//     }else {
//         reject(" your order is cancelled!!!")
//     }

//   });

//   console.log(OrderStatus)

// 1 resolve=>>>>then
// 2. reject===>>>catch

// OrderStatus.then((value)=>{
//     console.log(value)
// }).catch((err)=>{
//    console.log(err)
// })



// 2nd case 

// get student api and print roll no 


// let promiseOfStudentData=new Promise( (resolve, reject)=>{
//   setTimeout(()=>{

//          let roll_no=[1,2,3,4,5,6,7,8]; //assume api data

//          let Roll_nodata=false  //assume data store another variable

//         if (Roll_nodata) {
//           resolve(roll_no)
//         }else{
//           reject("data is not found , something is went wrong")

//         }


//   },5000)

// });

// promiseOfStudentData.then((studentData)=>{
//  console.log(studentData);
// }).catch((e)=>{
// console.log(e)
// })
// console.log("other program is here......")



user = {
  name: "mujeeb",
  rollno: 1
}

const pro1 = new Promise((resolve, reject) => {

  const apicall = true;

  if (apicall) {
    resolve(user)
  } else {
    reject("Error: something is wrong.....")

  }

})

// pro1.then((value) => {
//   console.log(value)
//   return value.name
// }).then((username) => {
//   console.log(username)
// }).catch((e) => {
//   console.log(e)
// })

// promises methods (apis)
// 1.Promise.all
// 2.Promise.allSettled
// 3.Promise.race
// 4.Promise.any
// 5.Promise.resolve
// 6.Promise.reject





// 1.Promise.all===> it waits and gives an reslut wrapping inside an array after finish of all apis 

// p1====>3s===>res1=>success
// P2====>4s===>res2=>success
// p3====>1s===>res3=>success

// if anyapi becomes reject it will give error

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("Error: p1 is rejected")
//     // resolve("p1 is success")
//   }, 3000)


// })

// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // resolve("p2 is success")
//     reject("Error: p2 is rejected")
//   }, 4000)

// })

// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // resolve("p3 is success")
//     reject("p3 is reject")

//   }, 1000)

// })


// it waits for all of them to finish and if all are resolved  it gives an array of all result if any of them is rejected it will give error
// Promise.all([p1, p2, p3]).then((result) => {
//   console.log(result)
//   }).catch((e) => {
//     console.log(e)
// })

// it waits for all of them and give an array either resolve or reject 
// Promise.allSettled([p1, p2, p3]).then((result) => {
//   console.log(result)
//   }).catch((e) => {
//     console.log(e)
// })


// it waits for first settled api result
// Promise.race([p1, p2, p3]).then((result) => {
//   console.log(result)
//   }).catch((e) => {
//     console.log(e)
// })

// it waits for first success api result if all are rejected it will give aggregated Error (itrated)

// Promise.any([p1, p2, p3]).then((result) => {
//   console.log(result)
//   }).catch((e) => {
//     console.log(e.errors)
// })


// async await...
// async await...
// async await...
// async await...
// is used for handle promises and aynchronous oprations 
// it always retrurn a promise 

// async function userData() {

//   //  fetch("https://user.com")

//   return "shamshad husain"

// }

// const data = userData()

// console.log(data)

// data.then((result) => {
//   console.log(result)
// })




// const p = new Promise(function (resolve, reject) {

//   resolve("promise 2 is resolved ......")

// })


// async function getData() {

//   return p;

// }

// const DataUser = getData();

// DataUser.then((value) => {
//   console.log(value)
// })

// 3rd way 

// const asyncp3 = new Promise(function (resolve, reject) {

//   resolve("promise 3 is resolved ......")

// })

// async function getDataP3() {

//   asyncp3.then((res)=>{
//     console.log(res)
//   })


// }

// getDataP3();




const p4 = new Promise(function (resolve, reject) {

  setTimeout(()=>{
    resolve("promise 4 is resolved ......")
  },10000)
  

})
const p5 = new Promise(function (resolve, reject) {

  setTimeout(()=>{
    resolve("promise 5 is resolved ......")
  },5000)
  

})

async function handlePromise(){
  console.log("shamshad ")

      const value= await p4;
      console.log(value)
      const value2= await p5;
      console.log(value2)
      
      console.log("shamshad ")

}

handlePromise();


// Error handling is handled by using try and catch in asunc await 

const p6 = new Promise(function (resolve, reject) {

  setTimeout(()=>{
    reject("promise 6 is reject......")
  },5000)
  

})

async function handlePromisewithTryCatch(){
   try{
 
    const value= await p6;
    console.log(value)

   }catch(e){
  console.log(e)
   }

    

}

handlePromisewithTryCatch();


// fetch apis wit promises

const p7= new Promise((resolve,reject)=>{
 
  const data= fetch('https://jsonplaceholder.typicode.com/photos')

  if (data){
    resolve(data)

}else{
  console.log("error ......")
}
}
  )

  p7.then(response => response.json())
  .then(photo => console.log(photo)).catch((e)=>{
    console.log(e)
  })


  // fetch apis with async await 


   async function api(){

    try {
      const data= await fetch('https://jsonplaceholder.typicode.com/users')
         const res= await data.json()
            console.log(res)
    } catch (error) {
      console.log(error)
    }
    
    

  }
  const response=api()
  response.then((users)=>{
    console.log(users)
  })


