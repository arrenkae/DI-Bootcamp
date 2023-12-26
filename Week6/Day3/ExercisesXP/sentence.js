// Exercise 3 : Transform the sentence

// In the JS file:
// 1. Declare a global variable named allBoldItems.
// 2. Create a function called getBoldItems() that takes no parameter. This function should collect all the bold items inside the paragraph and assign them to the allBoldItems variable.
// 3. Create a function called highlight() that changes the color of all the bold text to blue.
// 4. Create a function called returnItemsToDefault() that changes the color of all the bold text back to black.
// 5. Call the function highlight() on mouseover (ie. when the mouse pointer is moved onto the paragraph), and the function returnItemsToDefault() on mouseout (ie. when the mouse pointer is moved out of the paragraph).

let allBoldItems = [];
const paragraph = document.querySelector("p");

function getBoldItems() {
    for (let boldItem of paragraph.children) {
        allBoldItems.push(boldItem);
    }
}

function highlight() {
    if (allBoldItems.length === 0) {
        getBoldItems()
    }
    for (let item of allBoldItems) {
        item.style.color = "blue";
    }
}

function returnItemsToDefault() {
    for (let item of allBoldItems) {
        item.style.color = "black";
    }
}

paragraph.addEventListener('mouseover', highlight);
paragraph.addEventListener('mouseout', returnItemsToDefault);