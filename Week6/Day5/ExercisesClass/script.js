// Methods
// forEach

// const colors = ["red", "blue", "green", "purple"];

// colors.forEach((element, index, array) => {
//     console.log(index + " " + element + " in [" + array + "]");
// });

// const numbers = [10,11,12,15,20]; 

// numbers.forEach((element) => {
//     element % 2 === 0 && console.log(element);
// });

// Some -> return true if at least one element matches a given condition

// const myArray = [1, 2, 3, 4, 5, 6, 7, 8];

// let someReturn = myArray.some((element) => {
//     return element % 2 === 0; // need to return
// });

// let someReturn1 = myArray.some((element) => {
//     console.log(element); // only logs until 5
//     return element === 5;
// });

// let someReturn2 = myArray.some((element) => {
//     return element === 9;
// });

// console.log(someReturn);
// console.log(someReturn1);
// console.log(someReturn2);

// const words = ["wow","hey","bye"];

// let result1 = words.some((element) => {
//     return element[0] === "h";
// })
// let result2 = words.some((element) => {
//     return element.startsWith("h");
// })

// console.log(result1);
// console.log(result2);

// Every -> returns true if all elements match a condition

// const myArray = [1, 2, 3, 4, 5, 6, 7, 8];

// returnEvery1 = myArray.every((element) => {
//     return element > 0;
// });

// returnEvery2 = myArray.every((element) => {
//     console.log(element);
//     return element < 1;
// });

// console.log(returnEvery1);
// console.log(returnEvery2);

// const words = ["hello","hey","hola"];

// let result = words.every((element) => {
//     return element[0] === "h";
// })

// console.log(result);

// Map -> creates a new array

// const originalArr = [1,4,9,16];

// const newArr = originalArr.map((element) => {
//     if (element > 4) {
//         return element * 2;
//     } else {
//         return element;
//     }
// });

// console.log(newArr);

// const myArr = [10,20,30,40];

// let newArr = myArr.map((val, i) => {
//   return {
//     value: val,
//     index: i
//   };
// });

// console.log(newArr);

// Filter

// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// const wordsFiltered = words.filter((element) => {
//     return element.length > 6;
// });

// console.log(wordsFiltered);

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const numbersFiltered = numbers.filter((element) => {
//     return element > 3 && element < 8;
// });

// console.log(numbersFiltered);

// Reduce -> reduces into one value

// const arr = [1, 4, 9, 16];

// let sum = arr.reduce((acc, val) => {
//     console.log(`accumulator: ${acc}`);
//     console.log(`value: ${val}`);
//     return acc + val;
// })


// let sumOneLine = arr.reduce((acc, val) => acc + val);

// let sumLimited = arr.reduce((acc, val) => {
//     console.log(`value: ${val}`);
//     return acc + val;
// }, 0);

// console.log(sum);
// console.log(sumLimited);

// let party = [
//     {
//       desert: 'Chocolate Mousse',
//       calories: 30,
//     },
//     {
//       desert: 'Apple Pie',
//       calories: 15,
//     },
//     {
//       desert: 'Croissant',
//       calories: 50,
//     },
//     {
//       desert: 'Strawberry Icecream',
//       calories: 5,
//     },
//   ]
  
//   let caloriesTotal = party.reduce((acc, val) => {
//     return val.desert != "Apple Pie" ? acc + val.calories : acc;
//   }, 0);

//   console.log(caloriesTotal);

// Destructuring

// let [a, b, c] = [10, 20, 30, 40, 50];

// console.log(a);
// console.log(b);
// console.log(c);

// let arr = ["Bob", "Sam"]
// let [person1, person2] = arr;

// console.log(person1);
// console.log(person2);

// Spread operator

// let a = 10;
// let b = 20;
// let rest = [30, 40, 50]
// let str = "a string"

// const arr = [a, b, ...rest, ...str]
// console.log(arr);

// Rest operator

// let [a, b, ...c] = [10, 20, 30, 40, 50]

// console.log(a);
// console.log(b);
// console.log(c);

// const rainbow = ["red", "orange", "yellow"];
// const rainbow2 = rainbow;
// const rainbow3 = [...rainbow];

// rainbow.push("green");
// rainbow2.push("blue");

// const [...rainbow4] = rainbow;

// rainbow4.push("purple");

// console.log(rainbow);
// console.log(rainbow2);
// console.log(rainbow3);
// console.log(rainbow4);

