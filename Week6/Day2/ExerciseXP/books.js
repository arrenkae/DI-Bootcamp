// Exercise 7 : My Book List

// The point of this challenge is to display a list of two books on your browser.
// 1. In the body of the HTML page, create an empty section:
//     <section class="listBooks"></section>
// 2. In the js file, create an array called allBooks. This is an array of objects. Each object is a book that has 4 keys (ie. 4 properties) :
//     - title,
//     - author,
//     - image : a url,
//     - alreadyRead : which is a boolean (true or false).
// 3. Initiate the array with 2 books of your choice (ie. Add manually 2 books objects in the array)
// 4. Requirements : All the instructions below need to be coded in the js file:
//     1. Using the DOM, render each book inside a div (the div must be added to the <section> created in part 1).
//     For each book :
//         - You have to display the book’s title and the book’s author.
//             Example: HarryPotter written by JKRolling.
//         - The width of the image has to be set to 100px.
//         - If the book is already read. Set the color of the book’s details to red.

let allBooks = [
    {
        title: "The Hitchhiker's Guide to the Galaxy",
        author: "Douglas Adams",
        image: "https://assets-eu-01.kc-usercontent.com/bcd02f72-b50c-0179-8b4b-5e44f5340bd4/f2c1107f-3fc3-4235-a480-524d1b40102e/hitchhikers-guide-to-the-galaxy-80s.jpg",
        alreadyRead: true
    },
    {
        title: "The Cat in the Hat",
        author: "Dr. Seuss",
        image: "https://upload.wikimedia.org/wikipedia/en/1/10/The_Cat_in_the_Hat.png",
        alreadyRead: false
    },
]

let listBooks = document.querySelector(".listBooks")

for (let book of allBooks) {
    let bookContainer = document.createElement("div");
    listBooks.append(bookContainer);
    bookContainer.innerHTML = `<p>${book.title} is written by ${book.author}</p>
    <img src="${book.image}" width="100">
    `
    if (book.alreadyRead === true) {
        bookContainer.style.color = "red";
    }
}