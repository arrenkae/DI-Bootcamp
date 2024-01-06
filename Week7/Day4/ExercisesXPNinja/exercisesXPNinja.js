// Exercise 1 : Giphy API #3

// 1. Use this Giphy API documentation. Use the API KEY provided in Exercises XP.
// 2. In the HTML file, add a form, containing an input and a button. This input is used to fetch gif depending on a specific category.
// 3. Use the Fetch API to fetch the gifs. Make sure to check the status of the Response and to catch any occuring errors.
// 4. Append the relevant gifs to the page.
//  Hint : to find the URL of the gif, look for the sub-object named “images” inside the data you receive from the API.

const addGif = async(tag) => {
    try {
        const response = await fetch(`https://api.giphy.com/v1/gifs/random?tag=${tag}&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`);
        if(response.ok) {
            const obj = await response.json();
            const gif = document.createElement('img');
            gif.src = obj.data.images.original.url;
            document.getElementById('root').append(gif);
        } else {
            throw new Error("Unable to fetch");
        }
    } catch(error) {
        console.log(error);
    }
};

const deleteGifs = () => {
    document.getElementById('root').innerHTML = '';
};

document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    const category = document.getElementById('category').value;
    addGif(category);
});

// Exercise 2 : Analyze #4

// Analyze the code provided below - what will be the outcome?

// let resolveAfter2Seconds = function () {
//     console.log("starting slow promise");
//     return new Promise(resolve => {
//         setTimeout(function () {
//             resolve("slow");
//             console.log("slow promise is done");
//         }, 2000);
//     });
// };

// let resolveAfter1Second = function () {
//     console.log("starting fast promise");
//     return new Promise(resolve => {
//         setTimeout(function () {
//             resolve("fast");
//             console.log("fast promise is done");
//         }, 1000);
//     });
// };

//The Promise.all() method returns a single Promise that fulfills when all of the promises passed as an iterable have been fulfilled.

// let concurrentPromise = function () {
//     console.log('==CONCURRENT START with Promise.all==');
//     return Promise.all([resolveAfter2Seconds(), resolveAfter1Second()]).then((messages) => {
//         console.log(messages[0]);
//         console.log(messages[1]);
//     });
// }

// setTimeout(concurrentPromise, 1000)

/** 1 second => '==CONCURRENT START with Promise.all==' => 'starting slow promise' => 'starting fast promise' => 'fast promise is done' => 'slow promise is done' => 'slow' => 'fast' */

// Exercise 3 : Analyze #5

// Analyze the code provided below - what will be the outcome?

// let resolveAfter2Seconds = function () {
//     console.log("starting slow promise");
//     return new Promise(resolve => {
//         setTimeout(function () {
//             resolve("slow");
//             console.log("slow promise is done");
//         }, 2000);
//     });
// };

// let resolveAfter1Second = function () {
//     console.log("starting fast promise");
//     return new Promise(resolve => {
//         setTimeout(function () {
//             resolve("fast");
//             console.log("fast promise is done");
//         }, 1000);
//     });
// };

// let parallel = async function () {
//     console.log('==PARALLEL with await Promise.all==');
//     // Start 2 "jobs" in parallel and wait for both of them to complete
//     await Promise.all([
//         (async () => console.log(await resolveAfter2Seconds()))(),
//         (async () => console.log(await resolveAfter1Second()))()
//     ]);
// }

// setTimeout(parallel, 5000)

/** 5 seconds => 'PARALLEL with await Promise.all' => 'starting slow promise' => 'starting fast promise' => 'fast promise is done' => 'fast' => 'slow promise is done' => 'slow' */


// Exercise 4 : Analyze #6

// Analyze the code provided below - what will be the outcome?

// let resolveAfter2Seconds = function () {
//     console.log("starting slow promise");
//     return new Promise(resolve => {
//         setTimeout(function () {
//             resolve("slow");
//             console.log("slow promise is done");
//         }, 2000);
//     });
// };

// let resolveAfter1Second = function () {
//     console.log("starting fast promise");
//     return new Promise(resolve => {
//         setTimeout(function () {
//             resolve("fast");
//             console.log("fast promise is done");
//         }, 1000);
//     });
// };

// This function does not handle errors. See warning below!
// let parallelPromise = function () {
//     console.log('==PARALLEL with Promise.then==');
//     resolveAfter2Seconds().then((message) => console.log(message));
//     resolveAfter1Second().then((message) => console.log(message));
// }

// setTimeout(parallelPromise, 13000)

/** 13 seconds => '==PARALLEL with Promise.then==' => 'starting slow promise' => 'starting fast promise' => 'fast promise is done' => 'fast' => 'slow promise is done' => 'slow' */
