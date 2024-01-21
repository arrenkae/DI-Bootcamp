import { useState, useEffect } from 'react';

const Calculator = () => {
    const [numbers, setNumbers] = useState([]);
    const [operator, setOperator] = useState('');
    const [result, setResult] = useState();

    const sumbitNums = (e) => {
        e.preventDefault();
        setNumbers([Number(e.target.elements.num1.value), Number(e.target.elements.num2.value)]);
        setOperator(e.target.elements.operator.value);
    }

    useEffect(() => {
        if (numbers.length > 0) {
            switch(operator) {
                case 'add':
                    setResult(numbers[0] + numbers[1]);
                    break
                case 'substract':
                    setResult(numbers[0] - numbers[1]);
                    break
                case 'multiply':
                    setResult(numbers[0] * numbers[1]);
                    break
                case 'divide':
                    setResult(numbers[0] / numbers[1]);
                    break
            }
            
        }
    }, [numbers, operator]);

    return (
        <div>
            <form onSubmit={sumbitNums}>
                <h2>Adding two numbers</h2>
                <input type="number" name="num1" />
                <input type="number" name="num2" />
                <br />
                <select name='operator'>
                    <option value='add'>+</option>
                    <option value='substract'>-</option>
                    <option value='multiply'>*</option>
                    <option value='divide'>/</option>
                </select>
                <input type="submit" value="Calculate!" />
            </form>
            <h2>{result}</h2>
        </div>
    )
}

export default Calculator;