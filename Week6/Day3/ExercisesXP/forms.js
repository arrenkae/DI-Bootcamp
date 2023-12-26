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

const fname = document.getElementById("fname")
const lname = document.getElementById("lname")
const submit = document.getElementById("submit")

console.log(fname);
console.log(lname);
console.log(submit);

function submitValues(e) {
    e.preventDefault();
    if (fname.value === "" || lname.value === "") {
        alert("Please fill all the fields!");
    } else {
        let usersAnswer = document.querySelector(".usersAnswer");
        let fnameInput = document.createElement("li");
        fnameInput.innerText = fname.value;
        let lnameInput = document.createElement("li");
        lnameInput.innerText = lname.value;
        usersAnswer.append(fnameInput);
        usersAnswer.append(lnameInput);
    }
}

form.addEventListener("submit", submitValues);