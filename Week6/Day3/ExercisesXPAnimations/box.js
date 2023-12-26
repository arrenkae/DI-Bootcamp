// Exercise 2 : Move the box

// 1. Copy the code above, to a structured HTML file.
// 2. In your Javascript file, use setInterval to move the <div id="animate"> to the right side of the <div id="container">, when the button is clicked on.

// The <div id="animate"> should move 1px to the right every milisecond, until it reaches the end of the <div id="container">.
// Hint : use clearInterval as soon as the box reaches the right end side of the container
// Hint : check out the demonstration in the Course Noted named JS Functions

function myMove() {
    let position = 0;
    let moveInterval = setInterval(function() {
        const container = document.getElementById("container");
        const animate = document.getElementById("animate");
        if (position != container.offsetWidth - animate.offsetWidth) {
            position ++;
            animate.style.left = position + "px";
        } else {
            clearInterval(moveInterval);
        }
    }, 1);
}