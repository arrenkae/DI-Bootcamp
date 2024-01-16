/** set an item */
// window.localStorage

let = userinfo = {id: 11, name: 'John', email: 'hjjj@gmail.com'};
localStorage.setItem("userinfo", JSON.stringify(userinfo));

/** get an item */
// let data = localStorage.getItem('userinfo');

// console.log(JSON.parse(data));

// localStorage.removeItem('yourname');
// localStorage.clear();

const addToLocalStorage = (key, data) => {
    window.localStorage.setItem(key, JSON.stringify(data));
};

const getFromLocalStorage = key => {
    return JSON.parse(window.localStorage.getItem(key))
}

const userinfo = getFromLocalStorage("userinfo");

console.log(userinfo);

if (!userinfo) {
    window.location.href = '/localstorage/login.html';
} else {
    document.getElementById('welcome').innerHTML = `<h1>Welcome, ${userinfo.name}</h1>`
}