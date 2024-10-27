
// 1. Create an object representing a person with properties: `firstName`, `lastName`, and `age`.

// 1. Create an object representing a person
let person = {
  firstName: "John",
  lastName: "Doe",
  age: 30
};

// 2. Access and log the `firstName` property of the person object.

// 2. Access and log the `firstName` property
// console.log(person.firstName);

// 3. Update the `age` property of the person object to 25.

// 3. Update the `age` property to 25
person.age = 25;
// console.log(person.age)
// 4. Add a `city` property to the person object and log it.

// 4. Add a `city` property and log it
person.city = "New York";
// console.log(person.city);

// 5. change the `lastName` property from the person object.

// 5. Change the `lastName` property
person.lastName = "Smith";
// console.log(person.lastName)

// 6. Check if the `age` property exists in the person object (without using `in` or `hasOwnProperty`).

// 6. Check if the `age` property exists (without `in` or `hasOwnProperty`)
// console.log(person.age !== undefined);

// 7. Create an object representing a `book` with properties `title`, `author`, and `year`. Log the `author` property.

// 7. Create a `book` object and log the `author` property
let book = {
  title: "To Kill a Mockingbird",
  author: "Harper Lee",
  year: 1960
};
// console.log(book.author);

// 8. Create an object `student` with properties: `name`, `grade`, and `subject`. Update the `grade` property to "A+".

// 8. Create a `student` object and update the `grade` property
let student = {
  name: "Alice",
  grade: "B",
  subject: "Mathematics"
};
// console.log(student.grade)

student.grade = "A+";
// console.log(student.grade)

// 9. Create an object `car` with properties: `make`, `model`, and `year`. Change the `model` property to "Tesla Model S".

// 9. Create a `car` object and change the `model` property
let car = {
  make: "Tesla",
  model: "Model 3",
  year: 2021
};
// console.log(car.model)

car.model = "Tesla Model S";
// console.log(car.model)

// 10. Create an object `movie` with properties: `title`, `director`, and `releaseYear`. Add a new property `rating` to the movie object.**

// 10. Create a `movie` object and add a `rating` property
let movie = {
  title: "Inception",
  director: "Christopher Nolan",
  releaseYear: 2010
};
movie.rating = 9.5;
// console.log(movie.rating)
// 11. Create an object `person` with properties `firstName`, `lastName`, and `age`. Write a function `greet()` that logs "Hello, [firstName] [lastName]!"

// 11. Create a `person` object and a `greet` function
let person2 = {
  firstName: "Emily",
  lastName: "Clark",
  age: 28,
  greet: function() {
    console.log(`Hello, ${this.firstName} ${this.lastName}!`);
  }
};
// person2.greet();

// 12. Create an object `counter` with a property `count` set to 0. Write a function to increase the `count` property by 1 each time it’s called.

// 12. Create a `counter` object and a function to increase `count`
let counter = {
  count: 0,
  increment: function() {
    this.count += 1;
  }
};
counter.increment();
// console.log(counter.count);
counter.increment();
// console.log(counter.count);


// 13. Create an object `dog` with properties: `name`, `breed`, and `age`. Add a method `bark()` that logs "Woof!" when called.

// 13. Create a `dog` object with a `bark` method
let dog = {
  name: "Buddy",
  breed: "Golden Retriever",
  age: 3,
  bark: function() {
    console.log("Woof!");
  }
};
// dog.bark();

// 14. Create an object `product` with properties `name`, `price`, and `quantity`. Write a function `getTotalPrice()` that returns the total price (`price * quantity`).

// 14. Create a `product` object with `getTotalPrice` function
let product = {
  name: "dolo625",
  price: 1000,
  quantity: 2,
  getTotalPrice: function() {
    return this.price * this.quantity;
  }
};
// console.log(`productname      quantity    Total`)
// console.log(`${product.name}          ${product.quantity }          `,product.getTotalPrice());

// 15. Create an object `user` with properties `username`, `email`, and `password`. Log the values of the `username` and `email` properties.

// 15. Create a `user` object and log `username` and `email`
let user = {
  username: "johndoe",
  email: "johndoe@example.com",
  password: "securePassword123"
};
// console.log(user.username);
// console.log(user.email);

// 16. Create an object `address` with properties `street`, `city`, and `zipcode`. Modify the `city` property to "Los Angeles".

// 16. Create an `address` object and modify the `city`
let address = {
  street: "123 Main St",
  city: "New York",
  zipcode: "10001"
};
// console.log(address.city)

address.city = "Los Angeles";
// console.log(address.city)

// 17. Create an object `person` with properties `name` and `age`. Write a function `isAdult()` that returns `true` if `age` is 18 or above.

// 17. Create a `person` object and `isAdult` function
let person3 = {
  name: "Tom",
  age: 50,
  isAdult: function() {
    return this.age >= 18;
  }
};
// console.log(person3.isAdult());

// 18. Create an object `order` with properties `item`, `quantity`, and `price`. Calculate the total cost (quantity * price) and log it.

// 18. Create an `order` object and calculate total cost
let order = {
  item: "Headphones",
  quantity: 2,
  price: 50
};
// console.log("Total price :",order.quantity * order.price);

// 19. Create an object `teamMember` with properties `name`, `role`, and `experience`. Add a new property `team` and assign it a value "Development".

// 19. Create a `teamMember` object and add `team` property
let teamMember = {
  name: "Sarah",
  role: "Developer",
  experience: 5
};
teamMember.team = "Development";
// console.log(teamMember.team)

// 20. Create a constructor function `Person` that accepts `name`, `age`, and `gender` as arguments, and creates a new object with these properties.

// 20. Create a constructor function `Person`
function Person(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
}
let person4 = new Person("Mark", 25, "Male");
console.log(person4);
let person5 = new Person("shamshad", 25, "Male");
console.log(person5);