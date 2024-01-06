// /** async / await ES8 */

// function simpleAsync() {
//     return new Promise((res, rej) => {
//         res(1);
//     })
// }

// simpleAsync()
//     .then(result => console.log(result))
//     .catch(err => console.log(err));


// async function asyncFunction() {
//     return 1;
// }

/** returns promise with resolve 1*/

// const arrowAsyncFunction = async () => {

// }

// asyncFunction()
//     .then(result => console.log(result))
//     .catch(err => console.log(err));

/** await */

// async function getResult() {
//     try {
//         let res = await asyncFunction();
//         console.log(res);
//     } catch (error) {
//         console.log(error);
//     }
// }

// getResult();

// function getX() {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             console.log('get x =>');
//             res(5);
//         }, 2000);
//     })
// };

// function getY() {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             console.log('get y =>');
//             res(6);
//         }, 3000);
//     })
// };

// async function getXY() {
//     try {
//         let x = await getX();
//         let y = await getY();
//         console.log( x + y);
//     } catch (error) {
//         console.log(error);
//     }
// };

// getXY();

/** WARNING: async/await doesn't work well with .forEach() loops, better use for : of */

// const data = async() => {
//     try {
//         const result = await Promise.all([promise1, promise2, promise3])
//         console.log(result);
//     }
//     catch(err) {
//         console.log(err);
//     }
// }

/** fetch(url, {}) */

const getData = async(id) => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users?id=${id}`);
        const data = await response.json();
        render(data);
    } catch (error) {
        console.log(error);
    }
};

const render = (arr) => {
    const html = arr.map(item => {
        return `<div style=
        'display: inline-block;
        padding: 20px;
        margin: 20px;
        text-align: center;
        border: 1px solid black;'
        >
        <img src = https://robohash.org/${item.id}?size=150x150>
        <h2>${item.name}</h2>
        <h4>${item.username}</h4>
        <p>${item.email}</p>
        </div>`;
    });
    document.getElementById("root").innerHTML = html.join('');
};

document.getElementById('usersearch').addEventListener('submit', (e) => {
    e.preventDefault();
    const userid = document.getElementById('search').value;
    getData(userid);
})

// const post = {
//     title: 'Untitled',
//     body: 'TTA8 the best class ever',
//     userId: 4
// }

// fetch(`https://jsonplaceholder.typicode.com/posts`, {
//     method: 'POST',
//     headers: {
//         'Content-type': 'application/json'
//     },
//     body: JSON.stringify(post)
// })
// .then(res => res.json())
// .then(newpost => console.log(newpost))

/** 
 * form -> name, username, email -> submit
 * POST this https://users-18kl.onrender.com/userjson
 * 
 * get back list of users and render on page
 */

// document.getElementById('usersearch').addEventListener('submit', (e) => {
//     e.preventDefault();
//     const userid = document.getElementById('search').value;
//     getData(userid);
// })

document.getElementById('userinfo').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    postUser(name, username, email);
})

const postUser = async(name, username, email) => {
    try {
        const options = {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({name, username, email})
        };
        const res = await fetch(
            `https://users-18kl.onrender.com/userjson`,
            options
        );
        const data = await res.json();
        render(data);
    } catch (err) {
        console.log(err);
    }
}