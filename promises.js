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

     let promise =new Promise ( function (resolve,reject ) {
               //coding here .....
     });

// arrow function
     let promise1 =new Promise (  (resolve,reject )=> {
        //coding here .....
})



const Order =false ;


         let OrderStatus =new Promise( (resolve,reject)=>{
     
            if (Order){
                resolve ("you recieved your order!!!!")
            }else {
                reject(" your order is cancelled!!!")
            }

          });

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


          let promiseOfStudentData=new Promise( (resolve, reject)=>{
            setTimeout(()=>{
              
                   let roll_no=[1,2,3,4,5,6,7,8]; //assume api data
                   
                   let Roll_nodata=false  //assume data store another variable

                  if (Roll_nodata) {
                    resolve(roll_no)
                  }else{
                    reject("data is not found , something is went wrong")

                  }
                

            },5000)

          });

          promiseOfStudentData.then((studentData)=>{
           console.log(studentData);
          }).catch((e)=>{
          console.log(e)
          })
console.log("other program is here......")