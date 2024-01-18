import { useState } from 'react';

const Phone = () => {
    const [brand, setBrand] = useState('Samsung');
    const [model, setModel] = useState('Galaxy S20');
    const [color, setColor] = useState('black');
    const [year, setYear] = useState('2020');

    const changeColor = () => {
        setColor('blue');
    }

        return (
        <>
            <h2>I have a {brand} phone</h2>
            <h3>It's a {color} {model} from {year}</h3>
            <button onClick={changeColor}>Change Color</button>
        </>
    )
}

export default Phone;