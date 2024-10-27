

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






// methodsss
// methodsss
// methodsss
// methodsss



// 1. Object.keys()`
//    - Returns an array of a given object's property names (keys).

//    const person = { name: 'John', age: 30, city: 'New York' };
//    const keys = Object.keys(person);
//    console.log(keys);  // ["name", "age", "city"]
   

//  2. `Object.values()`
//    - Returns an array of a given object's property values.

//    const person = { name: 'John', age: 30, city: 'New York' };
//    const values = Object.values(person);
//    console.log(values);  // ["John", 30, "New York"]


// 3. `Object.entries()`
//    - Returns an array of a given object's own enumerable string-keyed property `[key, value]` pairs.


//    const person = { name: 'John', age: 30, city: 'New York' };
//    const entries = Object.entries(person);
//    console.log(entries);  // [["name", "John"], ["age", 30], ["city", "New York"]]
   

// 4. `Object.assign()`
//    - Copies all enumerable properties from one or more source objects to a target object.


//    const person = { name: 'John', age: 30 };
//    const contact = { email: 'john@example.com' };
//    const merged = Object.assign({}, person, contact);
//    console.log(merged);  // { name: 'John', age: 30, email: 'john@example.com' }


// 5. `Object.freeze()`
//    - Freezes an object, preventing new properties from being added, and existing properties from being modified or deleted.


//    const person = { name: 'John', age: 30 };
//    Object.freeze(person);
//    person.age = 35;  // This will not change the age
//    console.log(person.age);  // 30 (it didn't change)

//  6. `Object.seal()`
//    - Seals an object, preventing new properties from being added but allowing existing properties to be modified.


//    const person = { name: 'John', age: 30 };
//    Object.seal(person);
//    person.age = 35;  // This will work
//    person.city = 'New York';  // This will not work (can't add new properties)
//    console.log(person);  // { name: 'John', age: 35 }
//    ```

// 7. `Object.create()`
//    - Creates a new object with the specified prototype object and properties.

  
//    const person = { name: 'John' };
//    const newPerson = Object.create(person);
//    newPerson.age = 30;
//    console.log(newPerson.name);  // "John" (inherited from person)
//    console.log(newPerson.age);   // 30
  










// 1. `in` Operator:
// The `in` operator is used to check if a property exists in an object (or an index exists in an array). It returns `true` if the property exists, and `false` otherwise.

//  Example: Using the `in` operator with an object

// const person = {
//   name: 'John',
//   age: 30,
//   city: 'New York'
// };


// // Checking if the 'age' property exists in the person object
// if ('age' in person) {
//   console.log("The 'age' property exists in the person object.");
// } else {
//   console.log("The 'age' property does not exist in the person object.");
// }

// // Checking if a non-existent property 'gender' exists
// if ('gender' in person) {
//   console.log("The 'gender' property exists.");
// } else {
//   console.log("The 'gender' property does not exist.");
// }


//  Output:

// The 'age' property exists in the person object.
// The 'gender' property does not exist.




// we loop through the properties of an object and log both the property name and its value.
// for......in

// const person = {
//   name: 'John',
//   age: 30,
//   city: 'New York'
// };

// // Looping through the properties of the object
// for (const key in person) {
//   console.log(key + ': ' + person[key]);  // Logs key and its value
// }
// Output:

// name: John
// age: 30
// city: New York


//  2. `for...of` Loop:
// The `for...of` loop is used to iterate over iterable objects like arrays, strings, maps, etc. It gives access to the values of the iterable (not the keys or indices).

//  Example: Using the `for...of` loop with an array

// const fruits = ['apple', 'banana', 'cherry', 'date'];

// // Looping over the array to access each fruit
// for (const fruit of fruits) {
//   console.log(fruit);  // Logs each fruit in the array
// }


//  Output:

// apple
// banana
// cherry
// date


//  Example: Using the `for...of` loop with a string

// const name = "John";

// // Looping over the string to access each character
// for (const char of name) {
//   console.log(char);  // Logs each character in the string
// }


//  Output:

// J
// o
// h
// n

//  Key Differences:
// - `in` operator: Checks if a property (key) exists in an object or array (indexes).
// - `for...of` loop: Iterates over iterable objects (like arrays and strings) and provides the values directly, not the keys or indices. 

// You use the `in` operator to check if a property exists, and the `for...of` loop when you want to iterate over the values of an iterable object.


