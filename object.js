

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
console.log( student)
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

// this is keyword which is used for access the value of same objects within methods


const Boy ={
    name:"Shamshad",
    rollno:50,
    greet: function (){
        let surname="Husain"
        console.log("hello"+" "+this.name+ " "+surname, this.rollno) //this is refering same object
    }
}

Boy.greet()


// constructor  is a function which is used to create objects!!

// without parameter

// function Men (){
//     this.name="Shamshad",
//     this.age=80
// }


// create an objects

//    const men1 =new Men();
//    const men2 =new Men();

//    console.log(men1.age)
//    console.log(men2.name)



// passing argument 
   function Men (Men_name,Men_Age){
    this.name=Men_name,
    this.age=Men_Age

}


// create an objects

   const men1 =new Men("shamshad",50);
   const men2 =new Men("anil",20);
   const men3 =new Men("afjal",21);
   const men4 =new Men("mujeeb",22);
   const men5 =new Men("monish",25);


//    access and print
   console.log(men1.age)
   console.log(men2.name,men2.age)
   console.log(men3.name)
   console.log(men4.name)
   console.log(men5.name)


// how to add a new property to one particular objects

men2.address="moradabad";

console.log(men2.address)
console.log(men1.address)   //undefined

// how to change the property of an object 
console.log("before change the name property",men4.name)

men4.name="shuaib";
console.log("after change the name property",men4.name)

// adding a method into particular object

men2.greet=function (){
    console.log("hello anil!!!")
}

men2.greet()


// prototype
// prototype
// prototype
// prototype
// prototype   is used for adding property in constructor
console.log(men2)

// adding property into construcor
Men.prototype.height=20;

console.log(men1.height)
console.log(men2.height)
console.log(men3.height)
console.log(men2.height)
console.log(men3.height)
// adding methods into construcor


// without parameter
Men.prototype.add= function (){
    let a=4;
    let b=5;
    let c=a+b;
    console.log(c)
}

men1.add()
men2.add()
men3.add()
men1.add()

// with parametr
Men.prototype.Subtraction= function (a,b){
   
    let c=a-b;
    console.log("subtraction",c)
}

men1.Subtraction(2,5)
men2.Subtraction(36,7)
men3.Subtraction(37,9)
men4.Subtraction(87,6)


