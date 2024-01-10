let emojis = [];
let score = 0;

const newEmoji = async() => {
    try {
        do {
            const response = await fetch('http://localhost:3000/emojis');
            emojis = await response.json();
        } while ( emojis[0].emoji === document.getElementById('emoji').innerText);
        renderChoices();
    } catch(error) {
        console.log(error);
    }
}

const renderChoices = (choices=3) => {
    let answers = [emojis[0].name];
    for (let i=1; i < choices; i++) { 
        answers.push(emojis[i].name);
    }
    answers.sort(() => Math.random() - 0.5);
    document.getElementById('emoji').innerText = emojis[0].emoji;
    for (element of answers) {
        const answerOption = document.createElement('option');
        answerOption.value = element;
        answerOption.text = element;
        document.getElementById('answers').append(answerOption);
    }
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

const verifyAnswer = (event) => {
    event.preventDefault();
    const currentEmoji = emojis.find((element) => element.emoji === document.getElementById('emoji').innerText);
    if (document.getElementById('answers').value === currentEmoji.name) {
        showFeedback('Correct!', '#7FFFD4');
        score++;
        document.getElementById('score').innerText = `Score: ${score}`;
    } else {
        showFeedback('Wrong!', '#8B0000');
    }
    resetAnswers();
    newEmoji();
};