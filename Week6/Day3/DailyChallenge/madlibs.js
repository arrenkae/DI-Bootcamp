// Daily challenge: Tell the story

// In todays exercise we will be creating a Mad Libs game.
// If you’ve never played this game, a mad lib is a game where you fill in a bunch of blank inputs with different word types (ie : noun, adjective, verb), and then a story is generated based on the words you chose, and sometimes the story is surprisingly funny.

// Follow these steps :
// 1. Get the value of each of the inputs in the HTML file when the form is submitted. Remember the event.preventDefault()
// 2. Make sure the values are not empty
// 3. Write a story that uses each of the values.
// 4. Make sure you check the console for errors when playing the game.
// 5. Bonus: Add a “shuffle” button to the HTML file, when clicked the button should change the story currently displayed (but keep the values entered by the user). The user could click the button at least three times and get a new story. Display the stories randomly.

const libform = document.getElementById("libform");
const libButton = document.getElementById("lib-button");
const story = document.getElementById("story");
const shuffleButton = document.getElementById("shuffle-button");

let madlibs = [];

function generateStory(index) {
    story.innerHTML = madlibs[index];
}

libform.addEventListener("submit", function(event) {
    event.preventDefault();
    let noun = document.getElementById("noun").value;
    let adjective = document.getElementById("adjective").value;
    let person = document.getElementById("person").value;
    let verb = document.getElementById("verb").value;
    let place = document.getElementById("place").value;
    if (noun === "" || adjective === "" || person === "" || verb === "" || place === "") {
        alert("Please fill all the fields!");
    } else {
        madlibs = [
        `A ${adjective} wizard turned ${person} into a ${noun}. To save ${person}, you'll have to go on adventure until you reach ${place} and ${verb} to undo the spell.`,
        `Dear ${person}: our time at ${place} have been ${adjective}. Can you please send me a ${noun} so that we can ${verb} again.`,
        `${person} woke up in the morning feeling ${adjective}, tried to ${verb} and realized that they are actually in ${place} because ${noun} brought them there.`,
        `10 ${adjective} ways to ${verb}! Brought to you by ${person}, the first person to make a ${noun} business in ${place}.`,
        `Living in ${place} is ${adjective}. Whenever you try to ${verb}, ${noun} appears. Also, ${person} lives there.`
        ];
        generateStory(0);
    }
});

shuffleButton.addEventListener("click", function() {
    if (madlibs.length != 0) {
        let index = Math.floor(Math.random() * madlibs.length);
        generateStory(index);
    } else {
        alert("Nothing to shuffle!");
    }
});