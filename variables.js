// console.log("hellowolrd!!!!")

// variables

// let num =5;
// let NuM=7;
// let NUM=5;
// const _num=10;
// var 122name ="hitech";

// //   var let const
// var number=19;
//local scope
//global scope


//function scope
//lexical scope 
// if (true){
//    let  name ="hitech";
//    const number ="10"; 
// };
// function(){

// }

// console.log("global scope :",num);

// function test(){
//     let  num= 15;
//     console.log("test function is called : and value is ",num)
// }
// test();

// let name="hitech";
// const num=5;
// var name;
// diff
// var num=10;
// console.log("varkeyword:",num)
// var num =12;
// console.log("varkeyword2:",num)


// let number=15;
// console.log("letkeyword:",number)

// // let number ;
// number=50;
// console.log("letkeyword:",number)

// const number=20;
// console.log("constkeyword:",number)

// const number;
// number=45;
// console.log("constkeyword:",number)




const reviewWrap = document.getElementById("reviewWrap");
const leftArrow = document.getElementById("leftArrow");
const rightArrow = document.getElementById("rightArrow");
const imgDiv = document.getElementById("imgDiv");
const personName = document.getElementById("personName");
const profession = document.getElementById("profession");
const description = document.getElementById("description");
const surpriseMeBtn = document.getElementById("surpriseMeBtn");
const chicken = document.querySelector(".chicken");

let isChickenVisible;

let people = [
  {
    photo:
      'url("https://cdn.pixabay.com/photo/2018/03/06/22/57/portrait-3204843_960_720.jpg")',
    name: "Susan Smith",
    profession: "WEB DEVELOPER",
    description:
      "Cheese and biscuits chalk and cheese fromage frais. Cheeseburger caerphilly cheese slices chalk and cheese cheeseburger mascarpone danish fontina rubber cheese. Squirty cheese say cheese manchego jarlsberg lancashire taleggio cheese and wine squirty cheese. Babybel pecorino feta macaroni cheese brie queso everyone loves gouda. Cheese and biscuits camembert de normandie fromage fromage macaroni cheese"
  },

  {
    photo:
      "url('https://cdn.pixabay.com/photo/2019/02/11/20/20/woman-3990680_960_720.jpg')",
    name: "Anna Grey",
    profession: "UFC FIGHTER",
    description:
      "I'm baby migas cornhole hell of etsy tofu, pickled af cardigan pabst. Man braid deep v pour-over, blue bottle art party thundercats vape. Yr waistcoat whatever yuccie, farm-to-table next level PBR&B. Banh mi pinterest palo santo, aesthetic chambray leggings activated charcoal cred hammock kitsch humblebrag typewriter neutra knausgaard. Pabst succulents lo-fi microdosing portland gastropub Banh mi pinterest palo santo"
  },

  {
    photo:
      "url('https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_960_720.jpg')",
    name: "Branson Cook",
    profession: "ACTOR",
    description:
      "Radio telescope something incredible is waiting to be known billions upon billions Jean-François Champollion hearts of the stars tingling of the spine. Encyclopaedia galactica not a sunrise but a galaxyrise concept of the number one encyclopaedia galactica from which we spring bits of moving fluff. Vastness is bearable only through love paroxysm of global death concept"
  },

  {
    photo:
      "url('https://cdn.pixabay.com/photo/2014/10/30/17/32/boy-509488_960_720.jpg')",
    name: "Julius Grohn",
    profession: "PROFESSIONAL CHILD",
    description:
      "Biscuit chocolate pastry topping lollipop pie. Sugar plum brownie halvah dessert tiramisu tiramisu gummi bears icing cookie. Gummies gummi bears pie apple pie sugar plum jujubes. Oat cake croissant bear claw tootsie roll caramels. Powder ice cream caramels candy tiramisu shortbread macaroon chocolate bar. Sugar plum jelly-o chocolate dragée tart chocolate marzipan cupcake gingerbread."
  }
];

imgDiv.style.backgroundImage = people[0].photo;
personName.innerText = people[0].name;
profession.innerText = people[0].profession;
description.innerText = people[0].description;
let currentPerson = 0;

//Select the side where you want to slide
function slide(whichSide, personNumber) {
  let reviewWrapWidth = reviewWrap.offsetWidth + "px";
  let descriptionHeight = description.offsetHeight + "px";
  //(+ or -)
  let side1symbol = whichSide === "left" ? "" : "-";
  let side2symbol = whichSide === "left" ? "-" : "";

  let tl = gsap.timeline();

  if (isChickenVisible) {
    tl.to(chicken, {
      duration: 0.4,
      opacity: 0
    });
  }

  tl.to(reviewWrap, {
    duration: 0.4,
    opacity: 0,
    translateX: `${side1symbol + reviewWrapWidth}`
  });

  tl.to(reviewWrap, {
    duration: 0,
    translateX: `${side2symbol + reviewWrapWidth}`
  });

  setTimeout(() => {
    imgDiv.style.backgroundImage = people[personNumber].photo;
  }, 400);
  setTimeout(() => {
    description.style.height = descriptionHeight;
  }, 400);
  setTimeout(() => {
    personName.innerText = people[personNumber].name;
  }, 400);
  setTimeout(() => {
    profession.innerText = people[personNumber].profession;
  }, 400);
  setTimeout(() => {
    description.innerText = people[personNumber].description;
  }, 400);

  tl.to(reviewWrap, {
    duration: 0.4,
    opacity: 1,
    translateX: 0
  });

  if (isChickenVisible) {
    tl.to(chicken, {
      duration: 0.4,
      opacity: 1
    });
  }
}

function setNextCardLeft() {
  if (currentPerson === 3) {
    currentPerson = 0;
    slide("left", currentPerson);
  } else {
    currentPerson++;
  }

  slide("left", currentPerson);
}

function setNextCardRight() {
  if (currentPerson === 0) {
    currentPerson = 3;
    slide("right", currentPerson);
  } else {
    currentPerson--;
  }

  slide("right", currentPerson);
}

leftArrow.addEventListener("click", setNextCardLeft);
rightArrow.addEventListener("click", setNextCardRight);

surpriseMeBtn.addEventListener("click", () => {
  if (chicken.style.opacity === "0") {
    chicken.style.opacity = "1";
    imgDiv.classList.add("move-head");
    surpriseMeBtn.innerText = "Remove the chicken";
    surpriseMeBtn.classList.remove("surprise-me-btn");
    surpriseMeBtn.classList.add("hide-chicken-btn");
    isChickenVisible = true;
  } else if (chicken.style.opacity === "1") {
    chicken.style.opacity = "0";
    imgDiv.classList.remove("move-head");
    surpriseMeBtn.innerText = "Surprise me";
    surpriseMeBtn.classList.add("surprise-me-btn");
    surpriseMeBtn.classList.remove("hide-chicken-btn");
    isChickenVisible = false;
  }
});

window.addEventListener("resize", () => {
  description.style.height = "100%";
});




// let obj={
// a:"2",
// sum:function(){
// console.log("hello")
// },
// sum:console.log("this.sum+world")
// }
  




var name ="hitech"
var name ="mentor"
{




}
function(){

}
if (){

}
for (){

}
let _name  
let Name =15;
Name=17;
let naMe
var name=12;
age=14sajhajh;


