import { useState } from 'react';

const Events = () => {
    const [isToggleOn, switchToggle] = useState('ON');
    const clickMe = () => {
        console.log('I was clicked')
    }
    const handleKeyDown = (e) => {
        if (e.keyCode === 13) {
            if (e.target.value) {
                console.log(`The Enter key was pressed, your input is: ${e.target.value}`)
            } else {
                console.log('The Enter key was pressed, but you didn\'t input anything')
            }
        }
    }
    const toggle = () => {
        if (isToggleOn === 'ON') {
            switchToggle('OFF');
        } else {
            switchToggle('ON');
        }
    }
    return (
        <>
            <button onClick={clickMe}>Click me!</button>
            <input type='text' onKeyDown={handleKeyDown} placeholder='Press the ENTER key!'/>
            <button onClick={toggle}>{isToggleOn}</button>
        </>
    )
}

export default Events;