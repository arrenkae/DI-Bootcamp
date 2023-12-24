//Console.log
// console.log("hello world")

//Javascript variables
// let x = 2;
// let x = 2 - gives error

// Declare vs define
// let x, y;

// x = 5 + 2;
// y = x * 2;

// console.log(x);

// let x = 5 + 2;
// let y = x * 2;

//Data Types

// let a="Hello";
// let b="World";
// let c = a + " " + b;

// console.log(c);

// let longString = "This is a very long srting which needs to wrap across multiple lines because otherwise my code is undreadable.";
// let shortString = "Hello"

// console.log(longString.length);
// console.log(shortString.length);

// let str = "Hello Everyone, please say hello to the class";

// let posUpperCaseHello = str.indexOf("Hello")
// console.log(posUpperCaseHello);

// let posLowerCaseHello = str.indexOf("hello")
// console.log(posLowerCaseHello);

// console.log(str.substring(0,23));

// console.log(str.toLowerCase());
// console.log(str.toUpperCase());

// let addressNumber = "42";
// let addressStreet = "Ben Gurion";
// let addressCountry = "Israel";

// let globalAddress = "I live in " + addressStreet + " " + addressNumber + ", in " + addressCountry

// console.log(globalAddress);

// let globalAddressButBetter = `I live in ${addressStreet} ${addressNumber}, in ${addressCountry}`;

// console.log(globalAddressButBetter);

// Numbers
// let x = 2;
// let y = "2";

// console.log(x + 1);
// console.log(y + 1);

// let op="me";
// let num = 1;

// console.log(isNaN(op));
// console.log(isNaN(num));

// let numTypeNum = 1;

// console.log(numTypeNum);
// console.log(numTypeNum.toString());

// let op=10.6789;
// console.log(op.toFixed(2));
// console.log(op.toFixed(1));
// console.log(op.toFixed());

// let birthYear = 1990;
// let futureYear = 2042;

// let futureAge = futureYear - birthYear;

// let futureAgeMsg = `I will be ${futureAge} in ${futureYear}`;

// console.log(futureAgeMsg);

// Bollean

// console.log(Boolean(10 > 9));
// console.log(Boolean(10 < 9));

// Comparison

// console.log(1 == "1"); // checks value
// console.log(1 === "1"); // checks value and type

// console.log(1 > 0 && 2 > 1);
// console.log(1 > 0 && 2 < 1);
// console.log(1 > 0 || 2 < 1);

// Redefining

// let x = 1;
// x = x + 1;
// x++;

// console.log(x);

// x--;
// console.log(x);

// x += 10;
// console.log(x);

// x *= 2;
// console.log(x);

// User Interface Functions

// alert("Hello");

// let userAnswer = prompt("What is your username?");
// console.log(userAnswer);

// let confirmAnswer = confirm("Are you the boss?");
// console.log(confirmAnswer);

// Array

// let users = ["John", "Bill", "Nancy", "Sam"];
// console.log(users);
// console.log(users[1]);

// NestedArray

// let sampleArr = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8],
// ];

// console.log(sampleArr[0]);
// console.log(sampleArr[0][1]);

// let colors = ["blue", "yellow", "green"];
// console.log(colors[0]);
// colors[0] = "black";
// console.log(colors[0]);

// console.log(colors.length);

// Array Methods
// Push to add element to the end of array

// console.log(colors);
// colors.push("white");
// colors.push("pink");
// console.log(colors);

// Remove last element of array

// colors.pop()
// console.log(colors);

// Splice -> changes original array, can remove, add and replace elements

// colors.splice(2,1)
// console.log(colors);

// colors.splice(1,0,"pink", "black")
// console.log(colors);

// Slice -> returns a new array, doesn't change original, can only slice

// let slicedColors = colors.slice(1, 2);
// let slicedColors = colors.slice(1);
// let slicedColors = colors.slice(1, 3);

// console.log(slicedColors);

// console.log(colors.toString());

// let pets = ["cat", "dog", "fish", "rabbit", "cow"]
// let dogIndex = pets.indexOf("dog");

// console.log(pets[dogIndex]);

// let rabbitIndex = pets.indexOf("rabbit");
// pets.splice(rabbitIndex, 1, "horse")

// console.log(pets);
// console.log(pets.length);

// Objects

// let person = {
//     fname: "Dani",
//     lname: "Robb",
//     age: 27,
// }

// console.log(person);

// console.log(person.fname);
// console.log(person.lname);

// console.log(person["fname"]);

// edit or add new key value pairs

// person.country = "ISRAEL";
// person.favoriteFood = "Meat";
// person.age = 28;
// console.log(person);

// delete person.fname;
// console.log(person);

// let account1 = {
//     username: "user1",
//     password: "abc123",
// }

// console.log(account1);

// let database = [account1]

// console.log(database);

// let newsfeed = [
//     {username:"user1", timeline:32435},
//     {username:"user2", timeline:4325},
//     {username:"user3", timeline:5768}
// ]

// console.log(newsfeed);

// Conditionals
// if statement

// if(condition){
//     execute this code
// }

// let age = 18;

// if (age > 17) {
//     console.log("You can drive");
// } else {
//     console.log("You can't drive");
// }

// let age = 20;

// if (age===18){
//     console.log("It's your birthday");
// } else if (age > 18) {
//     console.log("We can go to a pub together");
// } else {
//     console.log("Grow up");
// }

// let userAge = prompt("How old are you?");

// if (userAge===18){
//     alert("Congradulations on your first year of driving. Enjoy the ride!");
// } else if (userAge > 18) {
//     alert("Powering On. Enjoy the ride!");
// } else {
//     alert("Sorry, you are yoo young to drive this car. Powering off");
// }

// Switch case

// let fruit="Apples"

// switch(fruit){
//     case "Apples":
//         console.log("Apples are $1 a kilo");
//         break;
//     case "Bananas":
//         console.log("Bananas are $2 a kilo");
//         break
//     case "Papayas":
//     case "Mangoes":
//         console.log("Mangoes and papayas are $2.4 a kilo");
//         break
//     default:
//         console.log("Sorry we do not have" + fruit);
// }   

// For loop
// for (let i=0; i<10; i++){
//     console.log(i);
// }

// let colors = ["blue", "yellow", "green"];

// for (let i=0; i<3; i++){
//     console.log(colors[i]);
// }

// for (let i=0; i < colors.length; i++){
//     console.log(colors[i]);
// }

// let person = {
//     fname: "John",
//     lname: "Doe",
//     age: 25,
// }

// for (let key in person) {
//     console.log(key);
//     console.log(person[key]);
// }

// While loop

// let userAnswer = prompt("What is the special password?")

// while (userAnswer != 1234){
//     userAnswer = prompt("What is the special password?")
// }

// console.log("Welcome to the special section")

// Do While

// let userAnswer;

// do {
//     userAnswer = prompt("Please enter the password...")
// } while (userAnswer != 1234);

// break

// for (let i=0; i<10; i++){
//     if (i===3){
//         console.log("WE BROKE OUT");
//         break;
//     }
//     console.log("The position is " + i);
// }

// continue

// for (let i=0; i<10; i++){
//     if (i===3 || i === 5 || i === 8){
//         continue;
//     }
//     console.log("The position is " + i);
// }

let names = ["john", "sarah", 23, "Rudolph", 34];

for (let i=0; i < names.length; i++){
    if (typeof names[i] == "string") {
        if (names[i][0].toUpperCase() != names[i][0]){
            names[i] = names[i].replace(names[i][0], names[i][0].toUpperCase());
            console.log(names[i])
        }
    }
}

for (let name of names){
    if (typeof name == "string") {
        console.log(name);
    } else {
        break
    }
}