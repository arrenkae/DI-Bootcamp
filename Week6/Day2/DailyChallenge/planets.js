// Daily challenge: Planets

// In this exercise we will be creating a webpage with a black background as the universe and we will fill the universe with planets and their moons.
// We will provide the HTML page.
// You only have to work with a JS file.

// 1. Create an array which value is the planets of the solar system.
// 2. For each planet in the array, create a <div> using createElement. This div should have a class named "planet".
// 3. Each planet should have a different background color. (Hint: you could add a new class to each planet - each class containing a different background-color).
// 4. Finally append each div to the <section> in the HTML (presented below).
// 5. Bonus: Do the same process to create the moons.
//     - Be careful, each planet has a certain amount of moons. How should you display them?
//     - Should you still use an array for the planets ? Or an array of objects ?

const planets = [
    {
        name: "Mercury",
        color: "#9a6737",
        moons: 0
    },
    {
        name: "Venus",
        color: "#e8973d",
        moons: 0
    },
    {
        name: "Earth",
        color: "#14b7d8",
        moons: 1
    },
    {
        name: "Mars",
        color: "#cb3210",
        moons: 2
    },
    {
        name: "Jupiter",
        color: "#d6a65d",
        moons: 95
    },
    {
        name: "Saturn",
        color: "#b99968",
        moons: 146
    },
    {
        name: "Uranus",
        color: "#88dade",
        moons: 27
    },
    {
        name: "Neptune",
        color: "#338fd2",
        moons: 14
    }
]

let listPlanets = document.querySelector(".listPlanets");

for (let planet of planets) {
    let divPlanet = document.createElement("div");
    divPlanet.className = "planet";
    listPlanets.append(divPlanet);
    divPlanet.style.backgroundColor = planet.color;
    divPlanet.style.color = "black";
    divPlanet.textContent = planet.name;
    for (let i=0; i < planet.moons; i++) {
        let divMoon = document.createElement("div");
        divMoon.className = "moon";
        divPlanet.append(divMoon);
        divMoon.style.marginLeft = `${150 + i * 60}px`;
    }
}