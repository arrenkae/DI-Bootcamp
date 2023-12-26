// function inform() {
//     alert("I've been clicked!");
// }

// function inform2() {
//     alert("I detect mouse over!");
// }

// const button = document = document.getElementById("myBtn");
// button.onclick = inform;

// const mouseOverDiv = document.getElementById("mouseOverDiv");
// mouseOverDiv.onmouseover = inform2;

// function insertRow() {
//     let table = document.getElementById("sampleTable");
//     let newRowIndex = table.rows.length;
//     let newRow = table.insertRow(newRowIndex);
//     let cell1 = newRow.insertCell(0);
//     let cell2 = newRow.insertCell(1);
//     cell1.innerText = `Row${newRowIndex + 1} cell1`;
//     cell2.innerText = `Row${newRowIndex + 1} cell2`;
// }

// let btn = document.getElementById("btn");
// let btn1 = document.getElementById("btn1");

// function RespondClick() { 
//     console.log("Button Clicked");
// } 

// function RespondMouseOver() { 
//     console.log("My mouse is over the btn");
// } 

// function RespondMouseOut() { 
//     console.log("My mouse is out of the btn");
// }

// btn.addEventListener('click', RespondClick);
// btn.addEventListener('mouseover', RespondMouseOver);
// btn.addEventListener('mouseout', RespondMouseOut);

// let btn = document.getElementById("jsstyle");

// function ClickStyle(e) {
//     e.target.style.backgroundColor="salmon";
// }

// function MouseOverStyle(e) {
//     e.target.style.backgroundColor="lightblue";
// }

// btn.addEvXentListener('click', ClickStyle);
// btn.addEventListener('mouseover', MouseOverStyle);

// let btn = document.getElementById("btn");
// let div = document.getElementById("div");
// let section = document.getElementById("section");

// btn.addEventListener("click", XRespondClick); 
// div.addEventListener("click", YRespondClick); 
// section.addEventListener("click", ZRespondClick); 

// function XRespondClick(e) { 
//     console.log("BTN is Clicked")
//     e.stopPropagation()
// }    

// function YRespondClick(e) { 
//     console.log("DIV is Clicked")
// }    

// function ZRespondClick(e) { 
//     console.log("SECTION is Clicked")
// }  

// Forms

// function sumbitFunc(e) {
//     e.preventDefault();
//     console.log(`Username: ${e.target.elements[0].value}`);
//     console.log(`Password: ${e.target.elements[1].value}`);
// }

// const form = document.forms[0];
// form.addEventListener("sumbit", sumbitFunc);

// Settimeout

// function sayHi(name) {
//     alert("Hello " + name);
// }

// setTimeout(sayHi, 5000, "Daniel");

// let id = setTimeout(function() {
//     alert("Hello!");
// }, 3000);

// const button = document.querySelector("button");

// button.addEventListener("click", function(){
//     clearTimeout(id)
// })

// const div = document.querySelector("div");
// console.log(div);

// setTimeout(function () {
//     div.style.display = "block";
// }, 5000);

// let count = 0;

// let intervalId = setInterval(function() {
//     console.log(count);
//     count ++
// }, 2000);

// const button = document.querySelector("button");
// button.addEventListener("click", function() {
//     clearInterval(intervalId);
// });

// const div = document.querySelector("div");
// let count = 10;

// intervalId = setInterval(function () {
//     div.innerText = `The sales end in ${count}sec!`
//     count--
//     if (count < 0) {
//         clearInterval(intervalId);
//         div.innerText = "Time's up!"
//     }
// }, 1000);

// Animation

// const child = document.getElementById("child");
// let pos = 0;

// let id = setInterval(function(){
//     if (pos != 400) {
//         pos++;
//         child.style.left= pos + "px";
//     } else {
//         clearInterval(id);
//     }
// }, 10);