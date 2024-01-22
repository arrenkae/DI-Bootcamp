import { useState, useEffect } from 'react';

const Forms = () => {
    const [username, setUsername] = useState('');
    const [age, setAge] = useState('');
    const [header, setHeader] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const [text, setText] = useState('');
    const [car, setCar] = useState('');

    const inputUsername = (e) => {
        setUsername(e.target.value);
    }

    const inputAge = (e) => {
        setAge(e.target.value);
    }

    const selectCar = (e) => {
        setCar(e.target.value);
    }

    const inputText = (e) => {
        setText(e.target.value);
    }

    const mySubmitHandler = (e) => {
        if (isNaN(e.target.elements.age.value)) {
            e.preventDefault();
            setErrorMsg('Your age must be a number');
        } else {
            alert(`Name: ${username}, age: ${age}, car: ${car}, message: ${text}`);
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
            <select name='carModel' onChange={selectCar}>
                    <option value='Ford'>Ford</option>
                    <option value='Volvo'>Volvo</option>
                    <option value='Fiat'>Fiat</option>
            </select><br /><br />
            <textarea onChange={inputText}>{text}</textarea>
            <br /><br />
            <input type="submit" value="Submit" />
        </form>
        </>
    )
}

export default Forms;