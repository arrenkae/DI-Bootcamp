// Exercice 4 : Volume of a sphere

// 1. Write a JavaScript program to calculate the volume of a sphere.

const form = document.getElementById("MyForm");
const radiusInput = document.getElementById("radius");
const volumeInput = document.getElementById("volume");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    let radius = radiusInput.value;
    volumeInput.value = (4/3) * Math.PI * Math.pow(radius, 3);
});