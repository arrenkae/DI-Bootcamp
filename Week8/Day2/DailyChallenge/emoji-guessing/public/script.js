let emojis = [];
let currentEmoji = {};

const newEmoji = async() => {
    try {
        do {
            const response = await fetch('http://localhost:3000/emojis');
            emojis = await response.json();
            currentEmoji = emojis[0];
        } while ( currentEmoji.emoji === document.getElementById('emoji').innerText);
        render();
        showScore();
    } catch(error) {
        console.log(error);
    }
}

const render = (choices=3) => {
    let answers = [currentEmoji.name];
    for (let i=1; i < choices; i++) { 
        answers.push(emojis[i].name);
    }
    answers.sort(() => Math.random() - 0.5);
    document.getElementById('emoji').innerText = currentEmoji.emoji;
    for (element of answers) {
        const answerOption = document.createElement('option');
        answerOption.value = element;
        answerOption.text = element;
        document.getElementById('answers').append(answerOption);
    }
    fetch('http://localhost:3000/scores')
    .then(response => response.json())
    .then(score => {
        document.getElementById('score').innerText = `Score: ${score.score}`;
    })
    .catch(error => console.log(error))
}

const showScore = () => {
    fetch('http://localhost:3000/scores')
    .then(response => response.json())
    .then(scores => {
        document.getElementById('score').innerText = `Score: ${scores.score}`;
    })
    .catch(error => console.log(error))
}

newEmoji();

const resetAnswers = () => {
    const parent = document.getElementById('answers');
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

const showFeedback = (message, color) => {
    const feedback = document.getElementById('feedback');
    feedback.style.display = "inline";
    feedback.innerText = message;
    feedback.style.color = color;
    setTimeout(() => { feedback.style.display = "none"; }, 2000);
}

const verifyAnswer = () => {
    const guess = document.getElementById('answers').value;
    fetch('http://localhost:3000/emojis', {
        method: 'POST',
        headers: {
            'Content-type':'application/json',
        },
        body: JSON.stringify({ guess, name: currentEmoji.name })
    })
    .then(response => response.json())
    .then(msg => {
        showFeedback(msg.message, msg.color);
        resetAnswers();
        newEmoji();
    })
    .catch(error => console.log(error))
}