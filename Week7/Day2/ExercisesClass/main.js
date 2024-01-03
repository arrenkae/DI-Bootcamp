// let arr = [
//     {id:1, name:'aaa', username: undefined},
//     {id:2, name:'bbb', username:'bbb222', c:function(){}},
//     {id:3, name:'ccc', username:'ccc333'},
// ];

// console.log(arr);
// arr.forEach(item => {
//     console.log(item.name);
// })

// let arrjson = JSON.stringify(arr);

// console.log(arrjson);

// let json = `[
//     {"id":1,"name":"aaa"},
//     {"id":2,"name":"bbb","username":"bbb222"},
//     {"id":3,"name":"ccc","username":"ccc333"}
// ]`;

// let arrFromJson = JSON.parse(json);

// console.log(arrFromJson);

/* Birthday Cake Candles
*  This array are Birthday Cake Candles
*  You can blow only the tallest candles
*  let ar = [2,4,4,1]
*  birthdayCakeCandles function will return
*  how many candles you can blow
*/

// let candles = [2, 4, 4, 1, 4];

// function birthdayCakeCandles(candles) {
//     let max = Math.max(...candles);
//     let count = candles.filter(item => item === max).length;
//     return count;
// }

// console.log(birthdayCakeCandles(candles));

/**
 * Create a function called parseJSON that takes a string as a parameter 
 * and attempts to parse it as JSON using JSON.parse(). 
 * Implement error handling using a try...catch block 
 * to catch any parsing errors that might occur. 
 * Return the parsed JSON object if successful, 
 * or return a custom error message if parsing fails.
 * 
 */

function parseJSON(input) {
    try {
        return JSON.parse(input);
    }
    catch(e) {
        return (`Couldn't parse into JSON: error ${e.name}`)
    }
}

let json = `[
    {"id":1,"name":"aaa"},
    {"id":2,"name":"bbb","username":"bbb222"},
    {"id":3,"name":"ccc","username":"ccc333"}
]`;

console.log(parseJSON(json));
console.log(parseJSON("id: 1, name: aaa"));

/**
 * find the smallest distance between 2 numbers in array
 * [2,5,3,7,2,3,6,8,6] => 2
 */

arr = [2,5,3,7,2,3,6,8,6]

let min = Math.abs(arr[1] - arr[0]);

for (let i = 1; i < arr.length-1; i++) {
    let diff = Math.abs(arr[i] - arr[i+1]);
    if (diff < min) {
        min = diff;
    }
}

console.log(min);