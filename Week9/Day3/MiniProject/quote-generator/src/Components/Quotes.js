import { useState, useEffect } from 'react';
import quotes from './QuotesDatabase';
import './Quotes.css';

const Quotes = () => {
    const [quote, setQuote] = useState('');
    const [bgColor, setBgColor] = useState(0);
    const [textColor, setTextColor] = useState(0);

    useEffect(() => {
        randomize();
    }, []);

    useEffect(() => {
        document.body.style.backgroundColor = "#" + bgColor;
    }, [bgColor]);

    const randomize = () => {
        let oldIndex = quotes.findIndex(element => element.quote === quote.quote);
        do {
            setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
        } while (quote === quotes.oldIndex);
        do {
            setBgColor(Math.floor(Math.random()*16777215).toString(16));
        } while (document.body.style.backgroundColor === "#" + bgColor);
        do {
            setTextColor(Math.floor(Math.random()*16777215).toString(16));
        } while (document.getElementById('container').color === "#" + textColor);

    }

        return (
        <div id="container" style={{color: `#${textColor}`}}>
            <h1>"{quote.quote}"</h1>
            <p>- {quote.author}</p>
            <button onClick = {randomize} style={{backgroundColor: `#${textColor}`}}>New quote</button>
        </div>
    )
}

export default Quotes;