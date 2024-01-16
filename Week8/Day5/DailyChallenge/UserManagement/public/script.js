const register = async() => {
    const userdata = [...document.querySelectorAll('#register input')];
    const inputs = {};
    for (element of userdata) {
        inputs[element.id] = element.value;
    }
    try {
        const response = await fetch(`http://localhost:3000/register`, {
            method: 'POST',
            headers: {
                'Content-type':'application/json',
            },
            body: JSON.stringify(inputs)
        });
        if (response.status === 404) {
            const data = await response.json();
            document.getElementById('register_feedback').textContent = data.msg;
        } else {
            document.getElementById('register_feedback').textContent = 'Registered successfully';
        }
    } catch (error) {
        document.getElementById('register_feedback').textContent = 'Error';
        console.log(error);
    }
}

const login = async() => {
    const username = document.getElementById('username_login').value;
    const password = document.getElementById('password_login').value;
    try {
        const response = await fetch(`http://localhost:3000/login`, {
            method: 'POST',
            headers: {
                'Content-type':'application/json',
            },
            body: JSON.stringify({ username, password })
        });
        const data = await response.json();
        document.getElementById('login_feedback').textContent = data.msg;
    } catch (error) {
        document.getElementById('login_feedback').textContent = 'Error';
        console.log(error);
    }
}