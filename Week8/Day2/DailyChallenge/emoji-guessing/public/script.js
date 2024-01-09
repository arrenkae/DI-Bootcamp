let emojis = [];
let score = 0;

const newEmoji = async() => {
    try {
        const response = await fetch('http://localhost:3000/api/emojis');
        emojis = await response.json();
        renderChoices();
    } catch(error) {
        console.log(error);
    }
}

const renderChoices = (choices=3) => {
    const index = Math.floor(Math.random() * emojis.length);
    let answers = [emojis[index].name];
    for (let i=0; i < choices-1; i++) { 
        let index;
        do {
            index = Math.floor(Math.random() * emojis.length);
        } while (answers.includes(emojis[index].name));
        answers.push(emojis[index].name);
    }
    answers.sort(() => Math.random() - 0.5);
    document.getElementById('emoji').innerText = emojis[index].emoji;
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