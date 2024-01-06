// Exercise 1 : Giphy API

// 1. Create a program to retrieve the data from the API URL provided above.
// Use the fetch() method to make a GET request to the Giphy API and Console.log the Javascript Object that you receive.
// Make sure to check the status of the Response and to catch any occuring errors.

const fetchGif = (url) => {
    fetch(url)
        .then((response) => {
            if(response.ok){
                return response.json()
            } else {
                throw new Error("Unable to fetch")
            }
        })
        .then(obj => {
            console.log(obj);
        })
        .catch(error => {
            console.log(error)
        });
}

fetchGif('https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My');

// Exercise 2 : Giphy API

// 1. Read carefully the documention to understand all the possible queries that the URL accept.
// 2. Use the Fetch API to retrieve 10 gifs about the “sun”. The starting position of the results should be 2.
// Make sure to check the status of the Response and to catch any occuring errors.
// 3. Console.log the Javascript Object that you receive.

fetchGif('https://api.giphy.com/v1/gifs/search?q=sun&limit=10&offset=2&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My');

// Exercise 3 : Async function

// Improve the program below :

// fetch("https://www.swapi.tech/api/starships/9/")
//     .then(response => response.json())
//     .then(objectStarWars => console.log(objectStarWars.result));

// 1. Create an async function, that will await for the above GET request.
// 2.  The program shouldn’t contain any then() method.
// 3. Make sure to check the status of the Response and to catch any occuring errors.


const fetchStarWars = async() => {
    try {
        const response = await fetch('https://www.swapi.tech/api/starships/9/');
        if(response.ok) {
            const objectStarWars = await response.json();
            console.log(objectStarWars.result);
        } else {
            throw new Error("Unable to fetch");
        }
    } catch(error) {
        console.log(error);
    }
};

fetchStarWars();

// const getData = async(id) => {
//     try {
//         const response = await fetch(`https://jsonplaceholder.typicode.com/users?id=${id}`);
//         const data = await response.json();
//         render(data);
//     } catch (error) {
//         console.log(error);
//     }
// };

// Exercise 4: Analyze

// Analyse the code provided below - what will be the outcome?

function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall();

/** 'calling' => 2 seconds wait => 'resolved */