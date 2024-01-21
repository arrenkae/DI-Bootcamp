import { useState, useEffect } from 'react';
import quotes from './QuotesDatabase';

const Quotes = () => {
    const [quote, setQuote] = useState('');
    const [color, setColor] = useState(Math.floor(Math.random()*16777215).toString(16));

    useEffect(() => {
        randomize();
    }, []);

    const randomize = () => {
        let oldIndex = quotes.findIndex(element => element.quote === quote.quote);
        console.log(oldIndex);
        do {
            setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
        } while (quote === quotes.oldIndex);
        do {
            setColor(Math.floor(Math.random()*16777215).toString(16));
        } while (document.body.style.backgroundColor === "#" + color);
        document.body.style.backgroundColor = "#" + color;
    }

        return (
        <div>
            <h1>{quote.quote}</h1>
            <p>- {quote.author}</p>
            <button onClick = {randomize}>New quote</button>
        </div>
    )
}

export default Quotes;