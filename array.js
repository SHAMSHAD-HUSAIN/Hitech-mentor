// array======>
    //            an array is an object in javascript that can store multple values at once .
    // let a =1;
    // let b=2;
    // let c=3;

// example:
//     let array=[1,2,3,4,5,6,7,7,8]

//     let arr=[1,"name",true,[1,2,3],myfunction,{val:"1",val2:"23"}]

//     let words={"hello", "javascript","hitechmentor"} wrong
//     let words=["hello", "javascript","hitechmentor"]



//    2. create an array
//    2. create an array
//    2. create an array


//         1. using array litral
//         2. using new keyword

        // syntax:1. using array litral
        //        let arrayname=[1,2,3,4,];


        //   syntax :2  using new keyword
          
        //         let array1=new Array("hello","javascript");

            
                // array can store array, function , other objects inside an array ;

                // const newData=[
                //               {carmodel:"1m133"},
                //               [1,2,344,45,],
                //               function(){
                //                 console.log("hello .......")
                //               }

                // ];




              


                // let array1=1;
                // let array2=4;
                // let array3=["A","B","C","D"];

                // let finalArray=[array1,array2,array3]
                // console.log(finalArray[0])
                // console.log(finalArray[2])
                // console.log(finalArray[2][1])

                // access of array
                // access of array
                // access of array
                // access of array


                let array=["A","B","C","D"]

              
                // console.log(array[0])
                // console.log(array[3])
                // console.log(array[7])
                // console.log(array)





                // add an element  
                // add an element  
                // add an element  
                // add an element  
                // add an element 
                //    1.push ====last
                //    2.unshift ====start

                array.push("push")
                // console.log(array)
                // console.log(array[4])



                array.unshift("unshift")
                // console.log("unshift",array[0])
                // console.log(array)

                // console.log(array[3])
                // console.log(array[7])
                // console.log(array)
                // console.log(array[4])
                array.unshift("E")
                // console.log(array)


                // change value
                // change value
                // change value
                // change value
                // change value

                // array[3]="hitech";
                // console.log(array)
              

                // let newarray=[1,2,3,4,5]
                // console.log(newarray[0])
                // console.log(newarray[9])
                // console.log(newarray)
               


                // remove
                // remove
                // remove
                // remove
                // remove
                // remove
                // 1.pop ==last
                // 2.shift ===start
                let newarray1=[1,2,3,4,5]
                // console.log("length======>",newarray.length)
                // console.log(newarray1[0])
                
                // console.log(newarray1[9])
                // console.log(newarray1)

                // newarray.pop();
                // console.log(newarray)
                // newarray1.shift()
                // console.log(newarray1)


                // Array length
                // Array length
                // Array length
                // Array length
            
                let lengtharray=newarray1.length;
                // console.log("length======>",lengtharray)
              


// array methods
// array methods
// array methods
// array methods
// array methods
// array methods

// 1.concat() 
// 2.indexOf()
// 3.find ()
// 4.findindex() 
// 5.foreach()
// 6. map()
// 7.filter()
// 8.includes()
// 9.push()
// 9.unshift()
// 10.pop()
// 11.sort()
// 12.slice()
// 13.splice()


// concat
// concat
// concat
// concat
// concat
// concat

let fruit="grapes";




let fruits=["mango","apple","orange",fruit]

let arrayfruits2=["papaya","pineapple"]
// console.log(fruits.concat(arrayfruits2)) 

let tokri=fruits.concat(arrayfruits2)






let car1=["maruti800","swift","thar"]
let car2=["bolero","bmw","scorpio"]
let car3=["mercdezbenz","lombargini","alto"]

let CAR=car1.concat(car2,car3)
// console.log("CAR======>",CAR)


               
// 2.indexOf()
// 2.indexOf()
// 2.indexOf()
// serches and element of an array and return its position 
let ages=[1,2,4,56,23,21,21,4,12,24,2,4]


let position=ages.indexOf(4)
// console.log(position)

// 3.find ()
// 3.find ()
// 3.find ()
// 3.find ()
// return the first value of an array element that passes a condition



let AGE=[1,2,4,56,23,21,21,4,12,24,2,4]


function Checkage(age){
return age >20
}

function myfunction(){
    let returnAge=AGE.find(Checkage )

    // console.log(returnAge)
}
// myfunction();
// myfunction();


// 4.findindex()
                // returns the first index of an array element that passes a condition


                const numbers =[30,37,45,54,20,10,63]
                let index=numbers.findIndex(num=>num>40)
                // console.log(index)


        //  5.        foreach()            
        //  5.        foreach()            
        //  5.        foreach()            
        //  5.        foreach()  
        
        const num=[1,2,3,4,5,6,7,8,9,10]

        let newnum=num.forEach(myfunction);

function myfunction(val,index,arr){
    sq=val*val
    // console.log(`value=${val} and index=${index} and square is ${sq}  and array ${arr} ` )
   
  
}

// console.log(num)
// console.log(newnum)

  const Ages=[20,30,34,16,37,50]

    // Ages.forEach((age,ind,array)=>
    //     console.log(array)
    // )

// addition 
    const number=[20,30,34,16,37,50]

    sum=0
    let newnumber=number.forEach((val)=>{
        sum=sum+val
    })
    // console.log("sum ==>",sum)
// console.log(number)
// console.log(newnumber)


// 6. map()==its return new array , and itrate over an array 

const Student=[20,30,34,16,37,50]

sum=0
let newstudent=Student.map((val)=>{
    sum=sum+val
})
// console.log("sum ==>",sum)
// console.log(Student)

// console.log(newstudent)




// 7.filter()
// 7.filter()
// 7.filter()
// 7.filter()


const voterAge=[20,30,34,16,37,56,24,12,34,32,25,12,8]



// const result=voterAge.filter(checkAdult);

// function checkAdult(age){
//      return age>=18
// }

// console.log(result)


const result=voterAge.filter((age)=>age>18);
// console.log(result)


// 8.includes()
// 8.includes()
// 8.includes()
// 8.includes()

let text="Hello javascript,welcome to the universe."
let resulttext=text.includes("universe");
// console.log(resulttext)


// Sort()
// Sort()
// Sort()
// Sort()
// sort elements aphabetically in string and number in asecending order 

const Names=["anil","shahibe","monish","shoaib","rehan","afzal"]
 let newNames=Names.sort();
//  console.log(newNames)

 let sortNum=[23,1,3,4,53,2,5,12,3,87,12]
  let newSortNum=sortNum.sort();
//   console.log(newSortNum)


  // 12.slice()
  // 12.slice()
  // 12.slice()
  // 12.slice()
  // 12.slice(startindex(inclusive),endindex(exclusive))

 let sliceNum=[23,1,3,4,53,2,5,12,3,87,12]
 let newslicenum=sliceNum.slice(2,5)
//  console.log(newslicenum)
  


 let slicefruits=["mango","apple","orange","papaya","pineapple","grapes","guava"]
// let newslicefruits=slicefruits.slice(2,6)
// console.log(newslicefruits)


// something wrong 
// let newslicefruits2=slicefruits.slice(-1,-3)
// console.log(newslicefruits2)


// splice 
// splice 
// splice 
// splice 
// splice 
// splice 
// splice (startindex,counting,newelement....)
let splicefruits=["mango","apple","orange","papaya","pineapple","grapes","guava"]
let removesplice=splicefruits.splice(2,4,"coconut","dates")
console.log(splicefruits)
console.log(removesplice)
