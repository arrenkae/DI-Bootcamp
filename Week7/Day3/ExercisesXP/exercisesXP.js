// Exercise 1 : Comparison

// 1. Create a function called compareToTen(num) that takes a number as an argument.
// 2. The function should return a Promise:
//    - the promise resolves if the argument is less than or equal to 10
//    - the promise rejects if argument is greater than 10.

function compareToTen(num) {
    return new Promise((resolve, reject) => {
        if (num <= 10) {
            resolve(`resolved for ${num}`);
        } else {
            reject(`rejected for ${num}`);
        }
    })
}

compareToTen(15)
  .then(result => console.log(result))
  .catch(error => console.log(error))

compareToTen(8)
  .then(result => console.log(result))
  .catch(error => console.log(error))

// Exercise 2 : Promises
  
// 1. Create a promise that resolves itself in 4 seconds and returns a “success” string.
  
function roadToSuccess() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('success')
        }, 4000)
    })
}

roadToSuccess()
  .then(result => console.log(result))

// Exercise 3 : Resolve & Reject

// 1. Use Promise.resolve(value) to create a promise that will resolve itself with a value of 3.
// 2. Use Promise.reject(error) to create a promise that will reject itself with the string “Boo!”

const promise1 = Promise.resolve(3);

promise1.then(value => console.log(value))

const promise2 = Promise.reject('Boo!');

promise2.catch(value => console.log(value))