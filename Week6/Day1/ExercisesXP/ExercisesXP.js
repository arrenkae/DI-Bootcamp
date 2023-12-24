// Exercise 1 : List of people

// Part I - Review about arrays
// 1. Write code to remove “Greg” from the people array.
// 2. Write code to replace “James” to “Jason”.
// 3. Write code to add your name to the end of the people array.
// 4. Write code that console.logs Mary’s index. take a look at the indexOf method on Google.
// 5. Write code to make a copy of the people array using the slice method.
//   - The copy should NOT include “Mary” or your name.
//   - Hint: remember that now the people array should look like this const people = ["Mary", "Devon", "Jason", "Yourname"];
//   - Hint: Check out the documentation for the slice method
// 6. Write code that gives the index of “Foo”. Why does it return -1 ?
// 7. Create a variable called last which value is the last element of the array.
//  - Hint: What is the relationship between the index of the last element in the array and the length of the array?

const people = ["Greg", "Mary", "Devon", "James"];

people.shift();
people[people.length-1] = "Jason";
people.push("Nadia");

console.log(people.indexOf("Mary"));

people_copy = people.slice(1, 3);

console.log(people.indexOf("Foo")); // not in the array

last = people[people.length-1];

// Part II - Loops
// 1. Using a loop, iterate through the people array and console.log each person.
// 2. Using a loop, iterate through the people array and exit the loop after you console.log “Devon” .
// - Hint: take a look at the break statement in the lesson.

for (let name of people) {
    console.log(name);
    if (name === "Devon") {
        break;
    }
}

// Exercise 2 : Your favorite colors

// 1. Create an array called colors where the value is a list of your five favorite colors.
// 2. Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
// 3. Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
// - Hint : create an array of suffixes to do the Bonus

colors = ["purple", "black", "cyan", "red", "indigo"];
suffixes = ["st", "nd", "rd", "th", "th"]

for (let i=0; i < colors.length; i++) {
    console.log(`My ${i+1}${suffixes[i]} choice is ${colors[i]}`);
}

// Exercise 3 : Repeat the question

// 1. Prompt the user for a number.
// - Hint : Check the data type you receive from the prompt (ie. Use the typeof method)
// 2. While the number is smaller than 10 continue asking the user for a new number.
// -  Tip : Which while loop is more relevant for this situation?

do {
    userAnswer = prompt("Give me a number:")
} while (userAnswer < 10 || parseInt(userAnswer) != userAnswer); //typeof returns "string" for prompt

// Exercise 4 : Building Management

// Review about objects
// 1. Copy and paste the above object to your Javascript file.
// 2. Console.log the number of floors in the building.
// 3. Console.log how many apartments are on the floors 1 and 3.
// 4. Console.log the name of the second tenant and the number of rooms he has in his apartment.
// 5. Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200.

const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}

console.log("Number of floors in the building: " + building.numberOfFloors);
console.log(`${building.numberOfAptByFloor.firstFloor} apartments on floor 1, ${building.numberOfAptByFloor.thirdFloor} apartments on floor 3`);
console.log(`${building.nameOfTenants[1]}'s apartment has ${building.numberOfRoomsAndRent[building.nameOfTenants[1].toLowerCase()][0]} rooms`);

if (building.numberOfRoomsAndRent.sarah[1] + building.numberOfRoomsAndRent.david[1] > building.numberOfRoomsAndRent.dan[1]) {
    building.numberOfRoomsAndRent.dan[1] += 1200;
}

// Exercise 5 : Family

// 1. Create an object called family with a few key value pairs.
// 2. Using a for in loop, console.log the keys of the object.
// 3. Using a for in loop, console.log the values of the object.

let family = {
    fname: "Simpson",
    members: 5,
    pets: 2,
    address: "742 Evergreen Terrace"
}

for (let key in family) {
    console.log(key);
    console.log(family[key]);
}

// Exercise 6 : Rudolf

// Given the object above and using a for loop, console.log “my name is Rudolf the raindeer”

const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
  }

let msg = ""

for (let word in details) {
    msg += word + " " + details[word] + " "
}

console.log(msg)

// Exercise 7 : Secret Group

// 1. A group of friends have decided to start a secret society. The society’s name will be the first letter of each of their names sorted in alphabetical order.
// - Hint: a string is an array of letters
// 2. Console.log the name of their secret society. The output should be “ABJKPS”

const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
names.sort()
nameSecret = ""

for (let name of names) {
    nameSecret += name[0]
}

console.log(nameSecret)