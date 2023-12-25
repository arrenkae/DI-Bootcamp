// Functions

// function drinkCoffee() {
//     console.log("I drink coffee");
// }

// drinkCoffee();

// function userInfo(username) {
//     console.log(`Welcome to the website, ${username}`);
// }

// userInfo("Dani123")
// userInfo("Bob")
// userInfo("shira")

// function calculate(a, b, c, d) {
//     console.log(a + b + c + d);
// }

// calculate(1, 2, 3, 4)

// Default value

// function userInfo(username, userAge="unknown") {
    
//     console.log(`My name is ${username} and my age is ${userAge}`);
// }

// userInfo("Dani", 33)
// userInfo("secret")

// Local variables

// function parentsAge(myAge) {
//     let mumAge = myAge * 2
//     let dadAge = mumAge * 1.2
//     console.log(`My mum is ${mumAge} years old and my dad is ${dadAge} years old`);
// }

// let age = Number(prompt("How old are you?"))
// parentsAge(age);


// Return

// function userInfo(username, userAge) {
//     let result = `My name is ${username} and my age is ${userAge}`
//     return result
// }

// let functionReturn = userInfo("dani2", 27);
// console.log(functionReturn)

// function calc(a,b) {
//     return a + b;
// }

// console.log(calc(1,2) + calc(2,3))

// function isDivisible(number, divider) {
//     if(number % divider === 0) {
//         return `${number} is divisible by ${divider}`
//     } else {
//         return `${number} is not divisible by ${divider}`
//     }
// }

// console.log(isDivisible(6,2))
// console.log(isDivisible(5,2))
// console.log(isDivisible(7,2))

// function parentAge(myAge) {
//     let mumAge = myAge * 2
//     return(`My mum is ${mumAge} years old`);
// }

// console.log(parentAge(33))

// Exceptions

// try {
//     const fruit = "apple";
//     throw new ReferenceError("I made up an error, haha");
//     console.log("ignore this");
// } catch (err) {
//     console.log(err.name);
//     console.log(err.message);
//     console.log(err.stack);
// } finally {
//     console.log("I will run regardless of error");
// }

// Object Methods

// const person = {
//     firstName: "Sarah",
//     eyeColor: "Blue",
//     eat: function() {
//         console.log(`My name is ${this.firstName} I love chocolate`);
//     },
// };

// person.eat();

// DOM
// queryselector

// const h1 = document.querySelector("h1");
// console.log(h1.firstChild);

// const li = document.querySelector("#secondListItem");
// console.log(li);

//queryselector all

// const listItems = document.querySelectorAll("li"); 
// console.log(listItems);

// const listItems = document.querySelectorAll("li"); 
// console.log(listItems);

// const secondList = document.querySelector("#secondList"); 
// console.log(secondList.children);

// const firstUl = document.getElementById("firstList");
// console.log(firstUl);

// const lis = document.getElementsByClassName("firstListItem");
// console.log(lis);
// console.log(lis[2].innerText);

// const div = document.querySelector("#container");
// console.log(div);

// const h2 = document.createElement("h2");
// h2.innerText = "This is our first created Element"

// div.append(h2)

// let ul = document.getElementById("firstList");
// ul.remove();

// let ul = document.getElementById("firstList");
// ul.style.backgroundColor = "red";
// ul.style.borderRadius = "14px";

// console.log(ul.matches("#firstList"));

// Closest

// const listItems = document.querySelectorAll("li");
// const secondLi = listItems[1];

// console.log(secondLi.closest("#firstList"));

const div1 = document.querySelector("#container");
console.log(div1.innerText);

const div2 = document.getElementById("container");
console.log(div2.innerText);

const ulNodes1 = document.querySelectorAll("ul");
for (let ul of ulNodes1) {
    for (let li of ul.children) {
        console.log(li.innerText);
    }
    console.log(ul.children[0].innerText);
}

const ulNodes2 = document.querySelectorAll(".list");
for (let ul of ulNodes2) {
    for (let li of ul.children) {
        console.log(li.innerText);
    }
    console.log(ul.children[0].innerText);
}