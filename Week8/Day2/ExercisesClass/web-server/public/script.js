 const getData = async() => {
    try {
        const response = await fetch('http://localhost:3001/users');
        const data = await response.json();
        render(data);
    } catch(error) {
        console.log(error);
    }
 }

const render = (arr) => {
    const html = arr.map(item => {
        return `Name: ${item.name}, email: ${item.email}<br>`
    })
    document.getElementById('root').innerHTML = html.join('');
}

getData();