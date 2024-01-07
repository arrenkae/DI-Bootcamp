// Mini-Project:  Star Wars Web App Using AJAX API

// You should use this API: https://www.swapi.tech/ to get the data and update it “randomly” in your website by clicking a button.
// Note: The API contains 83 different characters

// 1. Create your HTML file, and add the relevant elements.

// 2. In your JS file, create your functions :
//     - to retrieve the elements from the DOM.
//     - to get the data from the API (star wars characters).
//     - to display the info on the DOM: the name, height, gender, birth year, and home world of the character.

// 3. Display the data using AJAX. Make sure to display a loading message as follows:
//     You can use any of these animation icons for the loading message.
//     Fontawesome link :
//     https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css

const getPerson = async() => {
    try {
        const index = Math.floor(Math.random() * 83);
        const response = await fetch(`https://www.swapi.tech/api/people/${index}`);
        if(response.ok) {
            render('<div class="fa-3x"><i class="fa-solid fa-circle-notch fa-spin"></i></div>Loading...');
            const obj = await response.json();
            console.log(obj);
            const planet = await getPlanet(obj.result.properties.homeworld);
            render(`<h1>${obj.result.properties.name}</h1>
            <p>Height: ${obj.result.properties.height}</p><p>Gender: ${obj.result.properties.gender}</p><p>Birth Year: ${obj.result.properties.birth_year}</p><p>Home World: ${planet}</p>`);
        } else {
            throw new Error("Oh No! That person isn't available.");
        }
    } catch(error) {
        render(error.message);
    }
};

const getPlanet = async(url) => {
    try {
        const response = await fetch(url);
        if(response.ok) {
            const obj = await response.json();
            return(obj.result.properties.name);
        } else {
            throw new Error("not found");
        }
    } catch(error) {
        return(error.message);
    }
};

const render = (info) => {
    document.getElementById('info').innerHTML = info;
};