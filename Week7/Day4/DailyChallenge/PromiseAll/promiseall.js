// Daily Challenge : Promise.all()

// You will find the hour of sunrise of two cities, using the API https://sunrise-sunset.org/api.

// 1. In the HTML file, create a form with 4 inputs:
//     - the latitude and longitude of the first city
//     - the latitude and longitude of the second city

// 2. Retrieve the input’s value and display the hour of the sunrise for both city ONLY when both promises are resolved
//     Hint : Use Promise.all()

const sunriseSunset = (lat, lng) => new Promise((resolve) => {
    fetch(`https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}`)
        .then((response) => {
            if(response.ok) {
                return response.json();
            } else {
                reject("Unable to get data");
            }
        })
        .then((obj) => {
            resolve(`Sunrise: ${obj.results.sunrise}, sunset: ${obj.results.sunset}`);
        })
});

document.querySelector('form').addEventListener('submit', async(e) => {
    e.preventDefault();
    const [city1, city2] = await Promise.all([
        sunriseSunset(document.getElementById('lat1').value, document.getElementById('lng1').value),
        sunriseSunset(document.getElementById('lat2').value, document.getElementById('lng2').value)
        ]);
        document.getElementById('info').innerHTML = `<h3>City1</h3>${city1}<h3>City2</h3>${city2}`
});