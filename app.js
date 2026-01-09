// arrow function
// import and export
// template literals
// ternary operator
// destructuring
// array mapping and filtering


// function arrows(){
//     console.log("This is an arrow function");
// }
// arrows();

// arrows = () =>{
//     console.log("This is an arrow function");
// }
// arrows();

// sqr = (x) => {
//     return x *x;
// }
// console.log(sqr(5));

// sqr = x => x *x;
// console.log(sqr(5));

// import {Demo,Test} from "./Demo.js"

// templete literals

// let user = {
//     name: "sujeet",
//     email: "sujeet@example.com",
//     age : 25
// };

// // console.log('name :' +user.name+ ' email :' +user.email+ 'age :' +user.age);

// console.log(`name : ${user.name} email : ${user.email} age : ${user.age}`);

// ternary operator

// 10>2 ? console.log("this is true") : console.log("this is false");

// destructuring

// let user = {
//     name: "sujeet",
//     email: "sujeet@example.com",
//     age : 25
// };

// let {name,age} = user;
// console.log(name,age)


// let arr = [1,2,3,4,5,6,7,8,9,10];
// let [a,b,...rest] = arr;
// console.log(...rest)

// let arr = [1,2,3,4,5,6,7,8,9,10];
// let copyarr = [...arr]; // spread operator
// console.log(copyarr.pop());
// console.log(arr,copyarr);

// let movies = {
//     name: "RRR",
//     actor: ["ramcharan","jr ntr","ajay devgan"],
// }

// console.log(movies.name);
// let [actor, ...rest ]= movies.actor;
// console.log(actor,rest);

// let arr = [1,2,3,4,5,6,7,8,9,10];

// // let sqrt = arr.map(x=> x * x)
// // console.log(sqrt);

// let evensqrs = arr.filter(x => x %2 ==0).map(x => x * x); // chaining
// console.log(evensqrs);

const items = [
  { name: "Paneer Butter Masala", rating: 4.6, type: "Veg", price: 250 },
  { name: "Chicken Biryani", rating: 4.8, type: "Non-Veg", price: 320 },
  { name: "Masala Dosa", rating: 4.5, type: "Veg", price: 120 },
  { name: "Butter Chicken", rating: 4.7, type: "Non-Veg", price: 350 },
  { name: "Chole Bhature", rating: 4.4, type: "Veg", price: 180 },
  { name: "Fish Curry", rating: 4.3, type: "Non-Veg", price: 300 },
  { name: "Idli Sambar", rating: 4.2, type: "Veg", price: 100 },
  { name: "Mutton Rogan Josh", rating: 4.6, type: "Non-Veg", price: 420 },
  { name: "Pav Bhaji", rating: 4.5, type: "Veg", price: 150 },
  { name: "Egg Curry", rating: 4.1, type: "Non-Veg", price: 200 }
];
// let food = items.map(item => item.name);
// console.log(food);
let food = items.filter(item=> item.rating >=4.5).filter(item => item.type ==='Veg').map(item => item.name);
console.log(food);