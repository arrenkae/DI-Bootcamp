// Exercise 1 : Promise.all()

// 1. Use the Promise.all that will accept the 3 promises below.
// 2. The method should accept an array of promises and return an array of resolved values.
// 3. If any of the promises are rejected, the function should catch them.

// Explain in a comment how Promise.all work and why you receive this output.

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, 'foo');
});

Promise.all([promise1, promise2, promise3]).then((results) => {
    console.log(results);
}).catch((error) => {
    console.log(error);
})

/** If all the promises are resolved, returns an array of promise results; if any of them are rejected, catches error */

// Exercise 2 : Analyse Promise.all()

// Analyse the code below - what will be the output ?

function timesTwoAsync(x) {
  return new Promise(resolve => resolve(x * 2));
}

const arr = [1, 2, 3];
const promiseArr = arr.map(timesTwoAsync);

Promise.all(promiseArr)
  .then(result => {
    console.log(result);
  });

/** [2, 4, 6] */
