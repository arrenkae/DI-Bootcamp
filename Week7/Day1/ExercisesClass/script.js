// let b = 3, d = b, u = b;

// const tree = ++d * d*b * b++ +
// + --d+ + b-- +
// + +d*b+ +
// u

//163
// console.log(tree);

// ++x before the next action
// x++ after the next action

// 4 * 4 * 3 * 3 +
// 3 + 4 + 
// 3 * 3 +
// 3

// let obj = {
//     name: 'dan',
//     age: 16
// };

// obj.email = 'dan@gmail.com';

// let obj1 = new Object();

// obj1.name = 'john';
// obj1.age = 32;
// obj1['email'] = 'john@gmail.com';

// console.log(obj);
// console.log(obj1);

// let name = obj.name;
// console.log(name);
// let email = obj['email'];
// console.log(email);

/** dynamic key */

// let e = 'email';
// let un = 'username';

// let obj2 = {
//     [e]: 'jjj@aaa.com',
//     [un]: 'johnjohn'
// }

// console.log(obj2);

// console.log(obj2[e]);
// console.log(obj2.email);

/** loop */
// let obj = {
//     name: 'dan',
//     age: 16
// };

// for (x in obj) {
//     console.log(x, obj[x]);
// }

/** Object.keys */
// const keys = Object.keys(obj);
// console.log(keys);
// keys.forEach((item) => {
//     console.log(item);
// })

/** Object.values */
// const values = Object.values(obj);
// console.log(values);

// Object.values(obj).forEach((item) => {
//     console.log(item);
// })

/** Object.entries */
// const entries = Object.entries(obj);
// console.log(entries);

// for(x of entries){
//     console.log(x[0], x[1]);
// }

/** Object.fromEntries */
// let cities = [
//     ['Tokyo', 300000000],
//     ['Delhi', 700000000],
//     ['TelAviv', 7000000]
// ]

// let fromEntries = Object.fromEntries(cities);
// console.log(fromEntries);


// let obj1 = obj;

// obj1.age = 20;

// console.log('obj=>', obj);
// console.log('obj1=>', obj1);

/** clone */
// let obj2 = {...obj};

// obj2.age = 32;
// console.log('obj=>', obj);
// console.log('obj2=>', obj2);

// let obj = {
//     name: 'Dan',
//     age: 16,
//     address: {
//         city: 'Tel Aviv'
//     }
// };

// let obj2 = {...obj};

// obj2.name = 'Marry',
// obj2['age'] = 25,
// obj2.address.city = 'Paris' // inner object still has the same address

// console.log('obj=>', obj);
// console.log('obj2=>', obj2);

/** JSON object */

// let jsonObj = JSON.stringify(obj);
// console.log(jsonObj);

// let newObj = JSON.parse(jsonObj);
// console.log(newObj);

// newObj.address.city = 'New York';
// console.log('obj=>', obj);
// console.log('obj2=>', newObj);

/** Merging */

// let obj = {
//     name: 'Dan',
//     age: 16,
// };

// let obj2 = {
//     city: 'TLV',
//     name: 'Marry' // will override
// };

// let obj3 = {...obj, ...obj2}
// console.log(obj3);

/** Destructuring */
// let obj = {
//     name: 'Dan',
//     age: 16,
// };

// const {name, age} = obj;
// console.log(name, age);

// let arr = ['one', 'two'];

// const [a, b] = arr;
// console.log(a, b);

/** Spreading */

// let obj = {
//     fname: 'Dan',
//     age: 16,
// };

// let obj1 = {...obj, city:'TLV', lname:'Cohen', age:22};

// console.log(obj1);

/** Nested object destructuring */
// let obj = {
//     fname: 'Dan',
//     age: 16,
//     address: {
//         city: 'New York',
//         country: 'USA'
//     }
// };

// const {fname, age, address:{city, country}} = obj;

// console.log(fname, age, city, country);

// let formvalues = {};

// function handleInput(e) {
//     formvalues[e.target.name] = e.target.value;
//     console.log(formvalues);
// }

// filter for all users older than 30
// and store their data in an array
// use Array.filter Array.map Object.keys

// const users = {
//     user1: { age: 44, name: 'picard', },
//     user2: { age: 12, name: 'sisko', },
//     user3: { age: 109, name: 'janeway',},
// };

// const userKeys = Object.keys(users);

// const userKeysFiltered = userKeys.filter(key => users[key].age > 30);
// const usersFiltered = userKeysFiltered.map(id => ({id, ...users[id]}));
// console.log(usersFiltered);

// let fname = 'marry';
// let email = 'm@gmail.com';
// let id = 'user1'

// let obj = {
//     id,
//     fname,
//     email
// };

// console.log(obj);

/** Object methods */
// let obj = {
//     name: 'John',
//     getName: function() {
//         return `My name is ${this.name}`;
//     }
// };

// let username = obj.getName();
// console.log(username);

/** Classes */
class Animal {
    constructor(animalName) {
        this.name = animalName;
    }
    makeSound() {
        console.log(`${this.name} makes a sound`);
    }
};

const animalA = new Animal('dog');
const animalB = new Animal('lion');
animalA.makeSound();
animalB.makeSound();

class Dog extends Animal {
    constructor(dogname) {
        super('dog')
        this.dogname = dogname;
    }
    makeSound() {
        console.log(`${this.dogname} the ${this.name} barks`);
    }
};

const myDog = new Dog('Tony');
myDog.makeSound();

