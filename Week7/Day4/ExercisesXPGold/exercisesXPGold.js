// Exercise 1 : Giphy API #2

// 1. Use the Giphy API Documentation for this exercise. Use the API KEY provided in the Exercises XP.
// 2. Create a program to fetch a gif. Make sure to check the status of the Response and to catch any occuring errors.
// 3. Once the server sends back data, append one random GIF to the page.
// 4. Hint : to find the URL of the gif, look for the sub-object named “images” inside the data you receive from the API.


const fetchGif = async() => {
    try {
        const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`);
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

fetchGif();


// Exercise 2 : Analyze #2

// Analyse the code provided below - what will be the outcome?

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

// let sequentialStart = async function () {
//     console.log('==SEQUENTIAL START==');
//     const slow = await resolveAfter2Seconds();
//     console.log(slow);
//     const fast = await resolveAfter1Second();
//     console.log(fast);
// }

// sequentialStart()

/** '==SEQUENTIAL START==' => 'starting slow promise' => 'slow promise is done' => 'slow' => 'starting fast promise' => 'fast promise is done' => 'fast'*/


// Exercise 3 : Analyze #3
// Instructions

// Analyse the code provided below - what will be the outcome?

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

// let concurrentStart = async function () {
//     console.log('==CONCURRENT START with await==');
//     const slow = resolveAfter2Seconds();
//     const fast = resolveAfter1Second();
//     console.log(await slow);
//     console.log(await fast);
// }

// setTimeout(concurrentStart, 4000)

/** 4 seconds => '==CONCURRENT START with await==' => 'starting slow promise' => 'starting fast promise' => 'fast promise is done' => 'slow promise is done' => 'slow' => 'fast' */

// Exercise 4 : Modify fetch with Async/Await

// Using this code: 

    // const urls = [
    //     "https://jsonplaceholder.typicode.com/users",
    //     "https://jsonplaceholder.typicode.com/posts",
    //     "https://jsonplaceholder.typicode.com/albums"
    // ];

    // const getData = async function() {
    // const [ users, posts, albums ] = await Promise.all(urls.map(url =>
    // fetch(url).then(resp => resp.json())
    // ));
    // console.log('users', users);
    // console.log('posta', posts);
    // console.log('albums', albums);
    // }

    // getData()

// 1. Modify the function above. Add async await in place of the following line:
//     fetch(url).then(resp => resp.json())
//     So there shouldn’t be any .then() calls anymore!
// 2. Add a try catch block in order to catch any errors. To test the catch, modify one of the urls. The catch should console.log ‘ooooooops’.

const urls = [
    "https://jsonplaceholder.typicode.com/users",
    "https://jsonplaceholder.typicode.com/posts",
    "https://jsonplaceholder.typicode.com/albums"
  ];

const getData = async function() {
const [ users, posts, albums ] = await Promise.all(urls.map(async(url) => {
    try {
        const resp = await fetch(url);
        if(resp.ok) {
            return resp.json();
        }
        else {
            throw new Error('ooooooops');
        }
    } catch (error) {
        console.log(error);
    }
}
));
console.log('users', users);
console.log('posts', posts);
console.log('albums', albums);
}

getData();