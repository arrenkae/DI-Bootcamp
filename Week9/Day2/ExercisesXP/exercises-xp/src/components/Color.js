import { useState, useEffect } from 'react';

const Color = () => {
    const [favoriteColor, setfavoriteColor] = useState('red');

    const changeColor = () => {
        setfavoriteColor('blue');
    }

    useEffect(() => {
        console.log('useEffect reached');
    });

        return (
        <>
            <h2>My favorite color is {favoriteColor}</h2>
            <button onClick={changeColor}>Change Color</button>
        </>
    )
}

export default Color;