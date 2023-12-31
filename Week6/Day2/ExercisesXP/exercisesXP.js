// Exercise 1 : Find the numbers divisible by 23

// 1. Create a function call displayNumbersDivisible() that takes no parameter.
// 2. In the function, loop through numbers 0 to 500.
// 3. Console.log all the numbers divisible by 23.
// 4. At the end, console.log the sum of all numbers that are divisible by 23.
// 5. Bonus: Add a parameter divisor to the function.

function displayNumbersDivisible(divisor=23) {
    let sum = 0;
    for (let i=0; i < 501; i++){
        if (i % divisor === 0) {
            console.log(i);
            sum += i;
        }
    }
    console.log(sum);
}

displayNumbersDivisible();
displayNumbersDivisible(10);

// Exercise 2 : Shopping List

// 1. Add the stock and prices objects to your js file.
// 2. Create an array called shoppingList with the following items: “banana”, “orange”, and “apple”. It means that you have 1 banana, 1 orange and 1 apple in your cart.
// 3. Create a function called myBill() that takes no parameters.
// 4. The function should return the total price of your shoppingList. In order to do this you must follow these rules:
// 5. The item must be in stock. (Hint : check out if .. in)
// 6. If the item is in stock find out the price in the prices object.
// 7. Call the myBill() function.
// 8. Bonus: If the item is in stock, decrease the item’s stock by 1

const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
};

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
};

let shoppingList = ["banana", "orange", "apple"];

function myBill() {
    let total = 0;
    for (let item of shoppingList) {
        if (item in stock && stock[item] > 0) {
            total += prices[item];
            stock[item]--;
        }
    }
    return total;
}

console.log(myBill());
console.log(stock);

// Exercise 3 : What’s in my wallet ?

// Note: Read the illustration (point 4), while reading the instructions
// 1. Create a function named changeEnough(itemPrice, amountOfChange) that receives two arguments :
//     - an item price
//     - and an array representing the amount of change in your pocket.
// 2. In the function, determine whether or not you can afford the item.
//     - If the sum of the change is bigger or equal than the item’s price (ie. it means that you can afford the item), the function should return true
//     - If the sum of the change is smaller than the item’s price (ie. it means that you cannot afford the item) the function should return false
// 3. Change will always be represented in the following order: quarters, dimes, nickels, pennies.
//     - A quarters is 0.25
//     - A dimes is 0.10
//     - A nickel is 0.05
//     - A penny is 0.01
// 4. To illustrate:
//     After you created the function, invoke it like this:
    
//     changeEnough(4.25, [25, 20, 5, 0])

//     The value 4.25 represents the item’s price
//     The array [25, 20, 5, 0] represents 25 quarters, 20 dimes, 5 nickels and 0 pennies.
//     The function should return true, since having 25 quarters, 20 dimes, 5 nickels and 0 pennies gives you 6.25 + 2 + .25 + 0 = 8.50 which is bigger than 4.25 (the total amount due)

function changeEnough(itemPrice, amountOfChange) {
    let changeSum = amountOfChange[0] * 0.25 + amountOfChange[1] * 0.10 + amountOfChange[2] * 0.05 + amountOfChange[3] * 0.01;
    if (changeSum >= itemPrice) {
        return true;
    } else {
        return false;
    }
}

console.log(changeEnough(4.25, [25, 20, 5, 0]));
console.log(changeEnough(14.11, [2,100,0,0]));
console.log(changeEnough(0.75, [0,0,20,5]));

// Exercise 4 : Vacations Costs

// Let’s create functions that calculate your vacation’s costs:
// 1. Define a function called hotelCost().
//     - It should ask the user for the number of nights they would like to stay in the hotel.
//     - If the user doesn’t answer or if the answer is not a number, ask again.
//     - The hotel costs $140 per night. The function should return the total price of the hotel.
// 2. Define a function called planeRideCost().
//     - It should ask the user for their destination.
//     - If the user doesn’t answer or if the answer is not a string, ask again.
//     - The function should return a different price depending on the location.
//         - “London”: 183$
//         - “Paris” : 220$
//         - All other destination : 300$
// 3. Define a function called rentalCarCost().
//     - It should ask the user for the number of days they would like to rent the car.
//     - If the user doesn’t answer or if the answer is not a number, ask again.
//     - Calculate the cost to rent the car. The car costs $40 everyday.
//     - If the user rents a car for more than 10 days, they get a 5% discount.
//     - The function should return the total price of the car rental.
// 4. Define a function called totalVacationCost() that returns the total cost of the user’s vacation by calling the 3 functions that you created above.
//     - Example : The car cost: $x, the hotel cost: $y, the plane tickets cost: $z.
//     - Hint: You have to call the functions hotelCost(), planeRideCost() and rentalCarCost() inside the function totalVacationCost().
// 5. Call the function totalVacationCost()
//     - Bonus: Instead of using a prompt inside the 3 first functions, only use a prompt inside the totalVacationCost() function. You need to change the 3 first functions, accordingly.

function hotelCost(hotelNights) {
    return hotelNights * 140;
}

function planeRideCost(destination) {
    if (destination === "London") {
        return 183;
    } else if (destination === "Paris") {
        return 220;
    } else {
        return 300;
    }
}

function rentalCarCost(carDays) {
    let total = carDays * 40;
    if (carDays > 10) {
        return total - total * 0.05;
    } else {
        return total;
    }
}

function totalVacationCost() {
    let destination = (prompt("What is your destination?"));
    let hotelNights = Number(prompt("How many nights would you like to stay in the hotel?"));
    let carDays = Number(prompt("For how many days would you like to to rent a car?"));
    return planeRideCost(destination) + hotelCost(hotelNights) + rentalCarCost(carDays);
}

console.log(totalVacationCost())