import { useState, useEffect } from 'react';

const Color = () => {
    const [favoriteColor, setfavoriteColor] = useState('red');
    const [changedColor, setChangedColor] = useState(false);

    const changeColor = () => {
        setfavoriteColor('blue');
        setChangedColor(true);
    }

    useEffect(() => {
        if (!changedColor) {
            setfavoriteColor('red');
        } else {
            setTimeout(() => setfavoriteColor('yellow'), 2000);
        }
        console.log('after update');
    }, [favoriteColor]);

    return (
        <>
            <h2>My favorite color is {favoriteColor}</h2>
            <button onClick={changeColor}>Change Color</button>
        </>
    )
}

export default Color;