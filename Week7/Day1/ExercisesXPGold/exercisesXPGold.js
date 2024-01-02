// Exercise 1 : print Full Name

// 1. Create a function called printFullName.
// 2. The function should return a string like the example below

// printFullName({first: 'Elie', last:'Schoppik'}) 
// // 'Your full name is Elie Schoppik`

// Destructure this object directly from the parameters (ie. Look at the Advanced Object lesson - Part II : Object destructuring used as an assignment to a function)
// The output of the printFullName function should be the exact same as the displayStudentInfo function. (Exercise XP)

function printFullName({first, last}) {
    console.log(`Your full name is ${first} ${last}`);
};

printFullName({first: 'Elie', last:'Schoppik'});

// Exercise 2 : keys and values

// Create a function that takes an object and returns the keys and values as separate arrays.
// Return the keys sorted alphabetically, and their corresponding values in the same order.

function keysAndValues(obj) {
    const keys = Object.keys(obj).sort();
    const values = keys.map((key) => obj[key]);
    return [keys, values];
}

console.log(keysAndValues({ c: 3, a: 1, b: 2 }));
console.log(keysAndValues({ b: 'Microsoft', c: 'Google', a: 'Apple' }));
console.log(keysAndValues({ key3: undefined, key1: true, key2: false }));

// Exercise 3 : Counter class

// 1. Analyze the code below, what will be the output?

class Counter {
  constructor() {
    this.count = 0;
  }

  increment() {
    this.count++;
  }
}

const counterOne = new Counter();
counterOne.increment();
counterOne.increment();

const counterTwo = counterOne;
counterTwo.increment();

console.log(counterOne.count);
/** 3 */