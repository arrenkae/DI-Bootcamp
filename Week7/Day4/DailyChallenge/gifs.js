// Daily Challenge: Gifs

// 1. Use this Giphy API Random documentation. Use this API Key : hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My
// 2. In the HTML file, add a form, containing an input and a button. This input is used to fetch gif depending on a specific category.
// 3. In the JS file, create a program to fetch one random gif depending on the search of the user (ie. If the search is “sun”, append on the page one gif with a category of “sun”).
// 4. The gif should be appended with a DELETE button next to it. Hint : to find the URL of the gif, look for the sub-object named “images” inside the data you receive from the API.
// 4. Allow the user to delete a specific gif by clicking the DELETE button.
// 5. Allow the user to remove all of the GIFs by clicking a DELETE ALL button.

const gifQuery = async(tag) => {
    try {
        const response = await fetch(`https://api.giphy.com/v1/gifs/random?tag=${tag}&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`);
        if(response.ok) {
            const obj = await response.json();
            render(obj.data.images.downsized.url);
        } else {
            throw new Error("Unable to fetch");
        }
    } catch(error) {
        console.log(error);
    }
};

const render = (url) => {
    const container = document.getElementById('container');
    if (!container.hasChildNodes()) {
        container.innerHTML = `<button type="button" onclick="this.parentNode.innerHTML=''">Delete All</button>`;
    };
    const gifDiv = document.createElement('div');
    gifDiv.innerHTML = `<img src='${url}'><br>
    <button type="button" onclick="this.parentNode.parentNode.removeChild(this.parentNode)">Delete</button>`;
    container.appendChild(gifDiv);
};


document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    const category = document.getElementById('category').value;
    gifQuery(category);
})
