// // 1rst daily challenge

// // 1. Create two functions. Each function should return a promise.
// // 2. The first function called makeAllCaps(), takes an array of words as an argument
// //   - If all the words in the array are strings, resolve the promise. The value of the resolved promise is the array of words uppercased.
// //   - else, reject the promise with a reason.
// // 3. The second function called sortWords(), takes an array of words uppercased as an argument
// //    - If the array length is bigger than 4, resolve the promise. The value of the resolved promise is the array of words sorted in alphabetical order.
// //    - else, reject the promise with a reason.

function makeAllCaps(arr) {
    return new Promise((resolve, reject) => {
        if (arr.every(element => typeof element === 'string')) {
            resolve(arr.map(element => element.toUpperCase()))
        } else {
            reject('Error: array should contain only strings')
        }
    })
}

function sortWords(arr) {
    return new Promise((resolve, reject) => {
        if (arr.length > 4) {
            resolve(arr.sort());
        } else {
            reject('Error: array should have more than 4 elements')
        }
    })
}

//in this example, the catch method is executed
makeAllCaps([1, "pear", "banana"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result))
      .catch(error => console.log(error))

//in this example, the catch method is executed
makeAllCaps(["apple", "pear", "banana"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result))
      .catch(error => console.log(error))

//in this example, you should see in the console, 
// the array of words uppercased and sorted
makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result)) //["APPLE","BANANA", "KIWI", "MELON", "PEAR"]
      .catch(error => console.log(error))

// 2nd daily challenge

// 1. Create three functions. The two first functions should return a promise..
// 2. The first function is named toJs():
//     - this function converts the morse json string provided above to a morse javascript object.
//     - if the morse javascript object is empty, throw an error (use reject)
//     - else return the morse javascript object (use resolve)
// 3. The second function called toMorse(morseJS), takes one argument: the new morse javascript object.
//     - This function asks the user for a word or a sentence.
//     - if the user entered a character that doesn’t exist in the new morse javascript object, throw an error. (use reject)
//     - else return an array with the morse translation of the user’s word.
//         if the user enters the word "Hello", the promise resolves with this value ["....", ".", ".-..", ".-..","---"]
//         if the user entered the word "¡Hola!", the promise rejects because the character "¡" doesn't exist in the morse javascript object
// 4. The third function called joinWords(morseTranslation), takes one argument: the morse translation array
//     - this function joins the morse translation by using line break and display it on the page (ie. On the DOM)
// 5. Chain the three functions.

const morse = `{
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-"
  }`

function toJs(jsonStr) {
    return new Promise((resolve, reject) => {
        let jsObj = JSON.parse(jsonStr);
        if (Object.keys(jsObj).length != 0) {
            resolve(jsObj);
        } else {
            reject(new Error('JavaScript object is empty'));
        }
    })
};

function toMorse(morseJS) {
    const userInput = prompt('Word or sentence to translate into morse code: ')
    return new Promise((resolve, reject) => {
        const charList = [...userInput.toLowerCase()].filter(char => char != ' ');
        const morseTranslation = charList.map(char => {
            if (char.toLowerCase() in morseJS) {
                return morseJS[char];
            } else {
                reject('Input contains invalid characters');
            }
        });
        resolve(morseTranslation);
    });
};

function joinWords(morseTranslation) {
    document.getElementById('morse').innerHTML = morseTranslation.join('<br>');
};

toJs(morse)
    .then(morseJS => {
        return toMorse(morseJS);
    })
    .then(translation => {
        joinWords(translation);
    })
    .catch(err => {
        console.log(err);
    });