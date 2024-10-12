

// how to declare javascript object 
// syntax:
// const objectName={
//     key1:value1,
//     key2:value2,
//     key3:value3
// }

const student ={
    firstName:"sam", //key pairs values
    class:"12th",
    section:"A",
    rollno:20
}

console.log(typeof student)
// key=leftside values
// values=rightsidevalues

const student2 ={firstName:"sam",class:"12th",section:"A",rollno:20}
console.log(typeof student2)


// how tp access property of any object
// 1.using dot notation
// 2. using bracket notation

console.log(student.firstName,student.rollno)
console.log(student["section"])


// B.
const Student3={
    name:"john",
    age:20,
    marks:{
        science:50,
        maths:65,
        percentage:{
          science2:70
        }
    }
}

// how to access property of nested objects
console.log(Student3.marks.percentage.science2)


// C. Objects methods

const person={
    name:"shamshad",
    age:26,
    greet: function(){
        console.log("hello! thank you for contact us!")
    }
}


person.greet();
console.log("hello my name is ",person.name, "and my age is ", person.age)

// D. adding methods to objects

let car ={}

// adding a method
car.speed= function (){
    console.log("hello   iam BMW and my speed is 600 km/hr")
}
car.name="BMW";
car.colour="Red";
car.speed();
console.log(car.colour)