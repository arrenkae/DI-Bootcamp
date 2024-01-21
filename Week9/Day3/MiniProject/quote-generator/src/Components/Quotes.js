import { useState, useEffect } from 'react';
import quotes from './QuotesDatabase';

const Quotes = () => {
    let index; 

    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');

    useEffect(() => {
        randomizeQuote();
    }, []);

    const randomizeQuote = () => {
        let newIndex;
        do {
            newIndex = Math.floor(Math.random() * quotes.length);
        } while (newIndex === index);
        index = newIndex;
        setQuote(quotes[index].quote);
        setAuthor(quotes[index].author);
    }

        return (
        <div>
            <h2>"{quote}"</h2>
            <p>- {author}</p>
            <button onClick = {randomizeQuote}>New quote</button>
        </div>
    )
}

export default Quotes;