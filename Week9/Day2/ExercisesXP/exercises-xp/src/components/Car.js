import {useState} from 'react';

const Car = (props) => {
    const carinfo = props.carinfo;
    const [color] = useState("red");
        return (
        <h3>This car is a {color} {carinfo.model}</h3>
    )
}

export default Car;