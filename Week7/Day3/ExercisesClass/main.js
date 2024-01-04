/** Callback and promises */

// function getX() {
//     setTimeout(() => {
//         console.log('get x =>');
//         return 5;
//     }, 1)
// }

// function getY() {
//     console.log('get y =>');
//     return 6;
// }

// function getXY() {
//     console.log('get xy =>');
//     let x = getX();
//     console.log('x=>', x);
//     let y = getY();
//     console.log('y=>', y);
// }

// getXY();

// function doSomething(f) {
//     // ...get data from the server

//     f()
// }

// function myCallback() {
//     console.log('Callback executed!');
// }

// doSomething(myCallback);

// function fetchDataFromServer(callback) {
//     setTimeout(() => {
//         const data = 'Data from server';
//         callback(data)
//     }, 2000)
// }

// function processData(data) {
//     console.log('Received: ' + data);
// }

// fetchDataFromServer(processData);

// function getX(callback) {
//     setTimeout(() => {
//         console.log('get x =>');
//         callback(5);
//     }, 2000)
// }

// function getY(callback) {
//     console.log('get y =>');
//     callback(6);
// }

// function getXY() {
//     getX(function(x) {
//         getY(function(y) {
//             console.log(x + y);
//         }) 
//     })
// }

// getXY()

/** Promises
 * - Pending
 *      - Resolved
 *      - Rejected
 */

/** new Promise((resolve, reject) => {}) */

// const p = new Promise((resolve, reject) => {
//     resolve(5);
// });

// console.log(p);

// const flip = () => {
//     const coin = Math.floor(Math.random() * 3);
//     return coin < 2 ? (coin === 0 ? 'head' : 'tail') : 'side';
// }

// const flipcoin = new Promise((res, rej) => {
//     setTimeout(() => {
//         const flipResult = flip();
//         if(flipResult === 'head' || flipResult === 'tail') {
//             res(flipResult);
//         }
//         else {
//             rej(flipResult);
//         }
//     }, 1000);
// });

// console.log(flipcoin);
// flipcoin
//     .then((result) => {
//         // console.log('res =>', result);
//         return JSON.stringify(result);
//     })
//     .then((result) => {
//         return JSON.parse(result)
//     })
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((error) => {
//         console.log('rej => ', error);
//     });

// function getX() {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             console.log('get x =>');
//             res(5);
//         }, 2000);
//     })
// }

// function getY() {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             console.log('get y =>');
//             res(6);
//         }, 3000);
//     })
// }

// function getXY() {
//     console.log('get xy =>');
//     let x = getX();
//     console.log('x =>', x);
//     x.then((resultX) => {
//         console.log('resultX =>', resultX);
//         let y = getY();
//         console.log(y);
//         y.then((resultY) => {
//             console.log('resultY =>', resultY);
//             console.log('resultXY  =>', resultX + resultY);
//         })
//     })
// }

// getXY();

/** 
 * simulatedAsyncOperaton -> get array of objects from server as json
 * setTimeout -> 5
 * return a Promise with the data
 * 
 * call this function and log the data as an array datatype
 * 
 * simulate an error
 */

// const getDataFromServer = () => {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             const data = [
//                 {
//                     id: 0,
//                     content: 'idjfpwjp'
//                 },
//                 {
//                     id: 1,
//                     content: 'wijdicpd'
//                 },
//                 {
//                     id: 2,
//                     content: 'sokdpowe'
//                 },
//                 {
//                     id: 3,
//                     content: 'grehtreh'
//                 }
//             ];
//             res(JSON.stringify(data));
//             // rej(new Error('server not found'));
//         }, 2000)
//     })
// };

// function simulatedAsyncOperaton() {
//     getDataFromServer()
//         .then((data) => {
//             return JSON.parse(data);
//         })
//         .then((data) => {
//             showData(data);
//         })
//         .catch(err => {
//             console.log(err);
//             alert('Please try again in a few minutes');
//         })
// }

// const showData = (arr) => {
//     const html = arr.map(item => {
//         return `<p>${item.id + 1}: ${item.content}</p>`;
//     })
//     document.getElementById('root').innerHTML = html.join('');
// }  

// simulatedAsyncOperaton()

/** Promise static methods
 * 
 * Promise.all(arr_of_promises)
 * Promise.allSettled(arr)
 * Promise.race(arr)
 * 
 */

const promise1 = new Promise((res, rej) => {
    setTimeout(() => {
        res('Resolve promise 1');
    }, 2 * 1000)
});

const promise2 = new Promise((res, rej) => {
        res('Resolve promise 2');
});

const promise3 = new Promise((res, rej) => {
    setTimeout(() => {
        rej('Reject promise 3');
    }, 5 * 1000)
});

// Promise.all([promise1, promise2, promise3]).then((result) => {
//     console.log(result);
// })
// .catch(err => {
//     console.log(err);
// })

// Promise.allSettled([promise1, promise2, promise3]).then((result) => {
//     console.log(result);
// })
// .catch(err => {
//     console.log(err);
// })

// Promise.race([promise1, promise2, promise3]).then((result) => {
//     console.log(result);
// })
// .catch(err => {
//     console.log(err);
// })