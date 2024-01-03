// function getX() {
//     console.log('start');
//     let x = 10;
//     try {
//         y;
//     }
//     catch(error) {
//         console.log(error.name + "at getX function");
//         console.log(error.message);
//         console.log(error.stack);
//     }
//     finally {
//         x++;
//     }
//     console.log('end');
//     return x;
// }

// let result = getX();
// console.log(result);

/**
 try{

 } 
 catch(error) {

 }
 
 */

// function makeArr(num) {
//     try {
//         let arr = new Array(num);
//         return arr;
//     }
//     catch(e) {
//         return e.message;
//     }
// }

// let result = makeArr(-1);
// console.log(result);

// function divideNumbers(a, b) {
//     try {
//         if(b === 0) {
//             throw new Error('Can\'t divide by zero')
//         }
//         return a / b;
//     }
//     catch(e) {
//         return e;
//     }
// }

// let div1 = divideNumbers(9, 3);
// console.log(div1);

// let div2 = divideNumbers(2, 0);
// console.log(div2);

// const myArray = [10, 20, 30, 40, 50];

// function findElement(array, index) {
//     try {
//         if(array[index] === undefined) {
//             throw new Error('Index out of range or invalid')
//         }
//         return array[index];
//     }
//     catch(e) {
//         return e;
//     }
// }

// console.log(findElement(myArray, 2));
// console.log(findElement(myArray, 8));
// console.log(findElement(myArray, -1));
// console.log(findElement(myArray, 'aaa'));