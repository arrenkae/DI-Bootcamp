// Exercise 2 : Work with forms

// 1. Retrieve the form and console.log it.
// 2. Retrieve the inputs by their id and console.log them.
// 4. Retrieve the inputs by their name attribute and console.log them.
// 5. When the user submits the form (ie. submit event listener)
//     - use event.preventDefault(), why ?
//     - get the values of the input tags,
//     - make sure that they are not empty,
//     - create an li per input value,
//     - then append them to a the <ul class="usersAnswer"></ul>, below the form.

// The output should be :

// <ul class="usersAnswer">
//     <li>first name of the user</li>
//     <li>last name of the user</li>
// </ul>

const form = document.querySelector("form");
console.log(form);

const fnameInput = document.getElementById("fname")
const lnameInput = document.getElementById("lname")
const submit = document.getElementById("submit")

console.log(fname);
console.log(lname);
console.log(submit);

function submitValues(e) {
    e.preventDefault();
    if (fnameInput.value === "" || lnameInput.value === "") {
        alert("Please fill all the fields!");
    } else {
        let usersAnswer = document.querySelector(".usersAnswer");
        let fname = document.createElement("li");
        fname.innerText = fnameInput.value;
        let lname = document.createElement("li");
        lname.innerText = lnameInput.value;
        usersAnswer.append(fname);
        usersAnswer.append(lname);
    }
}

form.addEventListener("submit", submitValues);