const quotes = [
    {
        id: 0,
        author: 'Douglas Adams', 
        quote: 'In the beginning the Universe was created. This had made many people very angry and has been widely regarded as a bad move.'
    },
    {
        id: 1,
        author: 'Joshua Graham, Fallout: New Vegas',
        quote: 'I survived because the fire inside me burned brighter than the fire around me.'
    },
    {
        id: 2,
        author: '@dril, Twitter',
        quote: 'I will face God and walk backwards into hell.'
    },
    {
        id: 3,
        author: 'Mickey Mouse, rulesofthirds comic',
        quote: 'All knowledge is based on that which we cannot prove. Will you fight? Or will you perish like a dog?'
    },
    {
        id: 4,
        author: 'Dr. Romero, Spy Kids 2',
        quote: 'Do you think God lives in heaven because he, too, fears what he has created?'
    },
    {
        id: 5,
        author: 'Jake the Dog, Adventure Time',
        quote: 'Dude, sucking at something is the first step towards being sort of good at something.'
    },
    {
        id: 6,
        author: 'afabbaeddel, Tumblr',
        quote: 'God may judge you, but his sins outnumber your own.'
    },
    {
        id: 7,
        author: 'Barbie, Toy Story 3',
        quote: 'Authority should derive from the consent of the governed, not from the threat of force.'
    },
    {
        id: 8,
        author: 'personsonable, Tumblr',
        quote: 'Decay exists as an extant form of life.'
    },
    {
        id: 9,
        author: 'Vending Machine',
        quote: 'The light inside me is broken, but I still work.'
    },
    {
        id: 10,
        author: 'Nintendo Quit Screen Message',
        quote: 'Everything not saved will be lost.'
    },
]

const container = document.getElementById('container');
const generateButton = document.getElementById('generate');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');

function randomizeIndex(quotes, currentIndex) {
    let newIndex;
    do {
        newIndex = Math.floor(Math.random() * quotes.length);
    } while (newIndex === currentIndex);
    return newIndex;
}

function getQuote(quotes, index) {
    return quotes[index];
}

let index = randomizeIndex(quotes);

generateButton.addEventListener("click", function() {
    let currentQuote = getQuote(quotes, index);
    index = randomizeIndex(quotes, index);
    quoteText.textContent = `"${currentQuote.quote}"`;
    authorText.textContent = `— ${currentQuote.author}`
})

