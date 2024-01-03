// Daily challenge : HTML Form

// 1. Create a form with two fields (name, last name) and a submit button.
// 2. When you click the Send button, retrieve the data from the inputs, and append it on the DOM as a JSON string.

const form = document.querySelector('form');
const info = document.getElementById('info');

form.addEventListener("submit", function(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const jsonStr = document.createElement('p');
    jsonStr.textContent = JSON.stringify(Object.fromEntries(formData));
    info.append(jsonStr);
});