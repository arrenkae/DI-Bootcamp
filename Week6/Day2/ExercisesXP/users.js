// Exercise 5 : Users

// <div id="container">Users:</div>
// <ul class="list">
//     <li>John</li>
//     <li>Pete</li>
// </ul>
// <ul class="list">
//     <li>David</li>
//     <li>Sarah</li>
//     <li>Dan</li>
// </ul>

// 1. Add the code above, to your HTML file
// 2. Using Javascript:
//     - Retrieve the div and console.log it
//     - Change the name “Pete” to “Richard”.
//     - Delete the second <li> of the second <ul>.
//     - Change the name of the first <li> of each <ul> to your name. (Hint : use a loop)
// 3. Using Javascript:
//     - Add a class called student_list to both of the <ul>'s.
//     - Add the classes university and attendance to the first <ul>.
// 4. Using Javascript:
//     - Add a “light blue” background color and some padding to the <div>.
//     - Do not display the <li> that contains the text node “Dan”. (the last <li> of the first <ul>)
//     - Add a border to the <li> that contains the text node “Richard”. (the second <li> of the <ul>)
//     - Change the font size of the whole body.
//     - Bonus: If the background color of the div is “light blue”, alert “Hello x and y” (x and y are the users in the div).

let container = document.querySelector("#container");
console.log(container);

let lists = document.querySelectorAll(".list"); 
lists[0].children[1].innerText = "Richard";
lists[1].children[1].remove()

for (let ul of lists) {
    ul.children[0].innerText = "Nadia";
}

for (let ul of lists) {
    ul.classList.add("student_list");
}

lists[0].classList.add("university", "attendance");

container.style.backgroundColor = "lightblue";
container.style.padding = "20px"; 

lists[1].children[1].remove()
lists[0].children[1].style.border = "1px solid";

body = document.querySelector("body");

body.style.fontSize = "30px";

if (container.style.backgroundColor === "lightblue") {
    alert(`Hello ${lists[0].children[0].innerText} and ${lists[0].children[1].innerText}`)
}