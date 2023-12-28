// Exercise 1 : Scope

// 1. Analyse the code below, and predict what will be the value of a in all the following functions.
// 2. Write your prediction as comments in a js file. Explain your predictions.

// #1
function funcOne() {
    let a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(`inside the funcOne function ${a}`);
}

// #1.1 - run in the console:
funcOne()
// alert:"inside the funcOne function 3" (a declared outside of the if scope, redefined inside the scope)

// #1.2 What will happen if the variable is declared 
// with const instead of let ?
// error (const can't be redefined)

//#2
let a = 0;
function funcTwo() {
    a = 5;
}

function funcThree() {
    alert(`inside the funcThree function ${a}`);
}

// #2.1 - run in the console:
funcThree()
funcTwo()
funcThree()
// alert1:"inside the funcThree function 0", alert2:"inside the funcThree function 5" (a declared at the global scope, redefined by funcTwo)

// #2.2 What will happen if the variable is declared 
// with const instead of let ?
// alert:"inside the funcThree function 0", error on funcTwo (a=0 declared at the global scope but can't be redefined)

//#3
function funcFour() {
    window.a = "hello";
}

function funcFive() {
    alert(`inside the funcFive function ${a}`);
}

// #3.1 - run in the console:
funcFour()
funcFive()
// alert: "inside the funcFive function hello" (window declares a variable at the global scope)

//#4
let a = 1;
function funcSix() {
    let a = "test";
    alert(`inside the funcSix function ${a}`);
}

// #4.1 - run in the console:
funcSix()
// alert: "inside the funcSix function test" (new a declared within the scope of the function)

// #4.2 What will happen if the variable is declared 
// with const instead of let ?
// alert: "inside the funcSix function test" (new a is still declared within the scope of the function)

//#5
const a = 2;
if (true) {
    const a = 5;
    alert(`in the if block ${a}`);
}
alert(`outside of the if block ${a}`);

// #5.1 - run the code in the console
// alert1: "in the if block 5", alert2: "outside of the if block 2" (new a is declared within the if block)

// #5.2 What will happen if the variable is declared 
// with const instead of let ?
// alert1: "in the if block 5", alert2: "outside of the if block 2" (new a is still declared, doesn't get redefined)

// Exercise 2 : Ternary operator

// Using the code below:
//     function winBattle(){
//         return true;
//     }
// 1. Transform the winBattle() function to an arrow function.
// 2. Create a variable called experiencePoints.
// 3. Assign to this variable, a ternary operator. If winBattle() is true, the experiencePoints variable should be equal to 10, else the variable should be equal to 1.
// 4. Console.log the experiencePoints variable.

const winBattle = () => {
    return true;
}

let experiencePoints = winBattle() ? 10 : 1;
console.log(experiencePoints);

// Exercise 3 : Is it a string ?

// Write a JavaScript arrow function that checks whether the value of the argument passed, is a string or not. The function should return true or false

const isString = (input) => {
    return typeof input === "string";
}

console.log(isString('hello'));
console.log(isString([1, 2, 4, 0]));

// Exercise 4 : Find the sum

// Create a one line function (ie. an arrow function) that receives two numbers as parameters and returns the sum.

const numSum = (a, b) => a + b;

console.log(numSum(2, 3));

// Exercise 5 : Kg and grams

// Create a function that receives a weight in kilograms and returns it in grams. (Hint: 1 kg is 1000gr)
// 1. First, use function declaration and invoke it.
// 2. Then, use function expression and invoke it.
// 3. Write in a one line comment, the difference between function declaration and function expression.
// 4. Finally, use a one line arrow function and invoke it.

function toGramsD(kgWeight) {
    return kgWeight * 1000;
}

console.log(toGramsD(5))

const toGramsE = function(kgWeight) {
    return kgWeight * 1000;
}

console.log(toGramsE(10))
// function declaration creates a function object, function expression assigns function to a variable

const toGramsA = (kgWeight) => kgWeight * 1000;

console.log(toGramsA(20));

// Exercise 6 : Fortune teller

// Create a self invoking function that takes 4 arguments: number of children, partner’s name, geographic location, job title.
// The function should display in the DOM a sentence like "You will be a <job title> in <geographic location>, and married to <partner's name> with <number of children> kids."

(function (children, partner, location, job) {
    const fortune = document.getElementById("fortune");
    let prediction = document.createElement("p");
    prediction.innerText = `You will be a ${job} in ${location}, and married to ${partner} with ${children} kids.`;
    fortune.append(prediction);
}) (10, "Megan Fox", "Los Angeles", "senior developer");

// Exercise 7 : Welcome

// John has just signed in to your website and you want to welcome him.
// Create a Navbar in your HTML file.
// In your js file, create a self invoking funtion that takes 1 argument: the name of the user that just signed in.
// The function should add a div in the nabvar, displaying the name of the user and his profile picture.

(function (username, imgLink) {
    const navbar = document.getElementById("navbar");
    userpic = document.createElement("img");
    userpic.src = imgLink;
    navbar.append(userpic);
    navbar.append(username);
}) ("user1", "https://1.gravatar.com/avatar/68bb437a7b6ba2752adf814006e00d913c4dea07c3cf506db59b4ccf46832a5d");

// Exercise 8 : Juice Bar

// You will use nested functions, to open a new juice bar.
// Part I:
// 1. The outer function named makeJuice receives 1 argument: the size of the beverage the client wants - small, medium or large.
// 2. The inner function named addIngredients receives 3 ingredients, and displays on the DOM a sentence like The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>".
// 3. Invoke the inner function ONCE inside the outer function. Then invoke the outer function in the global scope.

// Part II:
// 1. In the makeJuice function, create an empty array named ingredients.
// 2. The addIngredients function should now receive 3 ingredients, and push them into the ingredients array.
// 3. Create a new inner function named displayJuice that displays on the DOM a sentence like The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>".
// 4. The client wants 6 ingredients in his juice, therefore, invoke the addIngredients function TWICE. Then invoke once the displayJuice function. Finally, invoke the makeJuice function in the global scope.

function makeJuice(size) {
    let ingredients = [];
    function addIngredients(ingredient1, ingredient2, ingredient3) {
        ingredients.push(ingredient1, ingredient2, ingredient3);
    }
    function displayJuice() {
        const juiceBar = document.getElementById("juice");
        let juiceOrder = document.createElement("p");
        juiceOrder.innerText = `The client wants a ${size} juice, containing ` + ingredients.join(", ");
        juiceBar.append(juiceOrder);
    }
    addIngredients("watermelon", "mango", "orange");
    addIngredients("mint", "vodka", "tapioca");
    displayJuice();
}

makeJuice("extra large");