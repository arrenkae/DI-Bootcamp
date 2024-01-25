import {useState, useEffect} from 'react';
import superheroes from './superheroes.json'
import './Superheroes.css'

function Superheroes() {
    const [cards, setCards] = useState(superheroes.superheroes);
    const [score, setScore] = useState(0);
    const [topScore, setTopScore] = useState(0);

    useEffect(() => {
        shuffleCards();
    }, [score])

    const shuffleCards = () => {
        const shuffled = [...cards];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        setCards(shuffled);
    }

    const clickCard = (id, clicked) => {
        console.log(id, clicked);
        if (clicked) {
            setCards(cards.map(card => {
                return {...card, clicked: false};
            }));
            setScore(0);
        } else {
            setCards(cards.map(card => card.id === id ? {...card, clicked: true} : card))
            setTopScore(score + 1);
            setScore(score + 1);
        }
    }

    return (
      <>
      <header>
        <div className='header-text'>
            <h1>Superheroes Memory Game</h1>
            <h2>Click without repeating!</h2>
        </div>
        <div className='scores'>
            <h4>Score: {score}</h4>
            <h4>Top score: {topScore}</h4>
        </div>
      </header>
        <div className='game'>
            {
                cards.map((card, index) => {
                    return (
                        <div className='card' onClick={() => clickCard(card.id, card.clicked)}>
                            <img src={card.image} alt={card.name} />
                            <p><strong>Name:</strong> {card.name}</p>
                            <p><strong>Occupation:</strong> {card.occupation}</p>
                        </div>
                    );
                })
            }
        </div>
      </>
    );
}

export default Superheroes;