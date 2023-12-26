// Exercise 1: Timer

// Part I
//     In your Javascript file, using setTimeout, call a function after 2 seconds.
//     The function will alert “Hello World”.

// Part II
//      In your Javascript file, using setTimeout, call a function after 2 seconds.
//      The function will add a new paragraph <p>Hello World</p> to the <div id="container">.

// Part III
//     In your Javascript file, using setInterval, call a function every 2 seconds.
//     The function will add a new paragraph <p>Hello World</p> to the <div id="container">.
//     The interval will be cleared (ie. clearInterval), when the user will click on the button.
//     Instead of clicking on the button, the interval will be cleared (ie. clearInterval) as soon as there will be 5 paragraphs inside the <div id="container">.

const container = document.getElementById("container");
const clearBtn = document.getElementById("clear");

// Part I
// setTimeout(function() {
//     alert("Hello World");
// }, 2000);

// Part II
// setTimeout(function() {
//     pNew = document.createElement("p");
//     pNew.textContent = "Hello World";
//     container.append(pNew);
// }, 2000);

// Part III

let helloInterval = setInterval(function() {
    pNew = document.createElement("p");
    pNew.textContent = "Hello World";
    container.append(pNew);
    if (container.children.length === 5) {
        clearInterval(helloInterval);
    }
}, 2000);

clearBtn.addEventListener("click", function() {
    clearInterval(helloInterval);
});