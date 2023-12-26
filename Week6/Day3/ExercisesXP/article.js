// Exercise 1 : Change the article

// 1. Using a DOM property, retrieve the h1 and console.log it.
// 2. Using DOM methods, remove the last paragraph in the <article> tag.
// 3. Add a event listener which will change the background color of the h2 to red, when it’s clicked on.
// 4. Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).
// 5. Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.
// 6. BONUS : When you hover on the h1, set the font size to a random pixel size between 0 to 100.(Check out this documentation)
// 7. BONUS : When you hover on the 2nd paragraph, it should fade out (Check out “fade css animation” on Google)

const h1 = document.querySelector("h1");
console.log(h1.innerText)

const article = document.querySelector("article");
article.lastElementChild.remove();

const h2 = document.querySelector("h2");
const h3 = document.querySelector("h3");

h2.addEventListener("click", function() {
    this.style.backgroundColor = "red";
})

h3.addEventListener("click", function() {
    this.style.display = "none";
})

const button = document.querySelector("button");

button.addEventListener("click", function() {
    article.style.fontWeight = "bold";
})

h1.addEventListener("mouseover", function() {
    this.style.fontSize = Math.floor(Math.random() * 101) + "px";
})

const paragraphs = document.querySelectorAll("p")

function fadeOut() {
    this.style.transition = "2s";
    this.style.transitionTimingFunction = "ease-in";
    this.style.opacity = "0";
    this.style.visibility = "hidden";
}

paragraphs[1].addEventListener("mouseover", fadeOut);
