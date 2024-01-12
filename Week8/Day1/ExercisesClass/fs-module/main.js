const fs = require('fs').promises;
const path = require('path');

/** Sync / Async- default */
// try {
//     const data = fs.readFileSync('info.txt', 'utf-8');
//     console.log(data);
// } catch (error) {
//     console.log(error.message);
// }

// const info = fs.readFile('info.txt', 'utf-8', (err, data) => {
//     if(err) return console.log(err.message);
//     console.log(data);
// })

// let data = '123456'

// fs.writeFile('newFile', data, 'utf-8', err => {
//     if(err) return console.log(err.message);
//     console.log('File created');
// })


// fs.appendFile('newFile', data, 'utf-8', err => {
//     if(err) return console.log(err.message);
//     console.log('Data appended');
// })

// fs.copyFile('info.txt', 'info', err=> {
//     if(err) return console.log(err.message);
// });

// fs.mkdir('utils', err=> {
//     if(err) return console.log(err.message);
// });

// const read = async() => {
//     const data = await fs.readFile('info', 'utf-8');
//     console.log(data);
// }

// read();