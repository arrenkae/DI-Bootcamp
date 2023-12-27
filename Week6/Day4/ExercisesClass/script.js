// function getFee(isMember) {
//     return isMember ? "2.00" : "10:00";
// }

// console.log(getFee(true));
// console.log(getFee(false));

// function checkYear() {
//     let year = prompt("Give me a year");
//     return year > 2000 ? "You are in the 21st century" : "You live in the middle age";
// }

// console.log(checkYear())

// console.log("string text line 1 \nstring text line 2");
// console.log(`string text line 1
// string text line 2`)

// function myFunc(x, y) {
//     return x + y;
// }

// console.log(myFunc(2,9));

// arrow function

// const myFunc1 = (x,y) => {
//     return x + y;
// }

// const myFunc2 = (x, y) => x + y;

// console.log(myFunc2(2, 4));

// const calculator = (num1, num2, operator) => {
//     return operator === "+"
//         ? num1+num2:
//         operator === "-"
//         ? num1-num2:
//         operator === "*"
//         ? num1*num2:
//         operator === "/"
//         ? num1/num2:
//         "Invalid operator";
// }

// console.log(calculator(2, 3, "+"))
// console.log(calculator(2, 3, "-"))
// console.log(calculator(2, 3, "*"))
// console.log(calculator(2, 3, "/"))
// console.log(calculator(2, 3, "%"))

// nested functions

// function add() {
//     let counter=0;
//     function plus() {
//         counter += 1;
//         console.log(counter);
//     }
//     plus();
// }

// add();

// Closures

// function outside(x) {
//     function inside(y) {
//         return x + y;
//     }
//     return inside
// }

// let fnInside = outside(3);
// console.log(fnInside)

// let result = fnInside(4);
// console.log(result)

// Currying

// const add = a => b => a + b;
// const result = add(2)(3)

// console.log(result)


// Uncurrying
// const curriedAdd = (x) => (y) => x + y;
// const uncurried = (x, y) => curriedAdd(x)(y);

// console.log(uncurried);

// const colors = ["blue", "green", "grey"];

// const person = {
//     fname: "Daniel",
//     age: 27,
// };

// const colors1 = colors;

// colors.push("black");
// console.log(colors);
// console.log(colors1);

// Copying instead of referencing

// const colors = ["blue", "green", "grey"];

// const colors2 = [...colors];

// colors.push("black");
// console.log(colors);
// console.log(colors2);


// let user = {};
// let alsoObject = new Object();

// console.log(alsoObject);
// console.log(user);

// Dot-Notation

// let myCar = new Object();
// myCar.make = "Ford";
// myCar.model = "Mustang";
// myCar.year = 1969;

// console.log(myCar);

// for (let key in myCar) {
//     console.log(myCar[key]);
// }

// let property = "make"
// console.log(myCar[property]);

// function makeUser(name, age) {
//     return {
//         name: name,
//         age: age,
//     };
// }

// let user = makeUser("John", 30)
// console.log(user)

// function makeUserShorthand(name, age) {
//     return {
//         name,
//         age,
//     };
// }

// let user2 = makeUserShorthand("John", 40);
// console.log(user2);

// Advanced Javascript methods

// const colors = ["blue", "yellow", "green"];

// console.log(colors.includes("blue"));
// console.log(colors.includes("pink"));

// console.log("bottle".replace("t", "z"))

// console.log("string".padStart(9, "CAT").padEnd(12, "DOG"));

// const groceries = {
//     fruits : ["pear", "apple", "banana"],
//     vegetables: ["tomatoes", "cucumber", "salad"],
//     totalPrice : "20$",
//     other : {
//         paid : true,
//         meansOfPayment : ["cash", "creditCard"]
//     }
// }

// groceries.fruits.forEach((fruit)=>{
//     console.log(fruit);
// })