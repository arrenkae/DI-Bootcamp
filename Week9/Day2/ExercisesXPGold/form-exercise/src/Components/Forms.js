import { useState, useEffect } from 'react';

const Forms = () => {
    const [username, setUsername] = useState('');
    const [age, setAge] = useState('');
    const [header, setHeader] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const [text, setText] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit. In blandit ut odio volutpat convallis.');

    const inputUsername = (e) => {
        setUsername(e.target.value);
    }

    const inputAge = (e) => {
        setAge(e.target.value);
    }

    const mySubmitHandler = (e) => {
        if (isNaN(e.target.elements.age.value)) {
            e.preventDefault();
            setErrorMsg('Your age must be a number');
        } else {
            alert(`You are submitting ${e.target.elements.username.value} ${e.target.elements.age.value}`);
        }
    }

    useEffect(() => {
        if (username && age) {
            setHeader(<h1>Hello {username} {age}</h1>);
        }
    }, [username, age]);

    return (
        <>
        <form onSubmit={mySubmitHandler}>
            {header}
            <p>Enter your name:</p>
            <input type="text" name="username" onChange={inputUsername} />
            <p>Enter your age:</p>
            <input type="text" name="age" onChange={inputAge} /> <span id='error'>{errorMsg}</span><br /><br />
            <input type="submit" value="Submit" />
        </form>
        <br />
        <textarea>{text}</textarea>
        </>
    )
}

export default Forms;