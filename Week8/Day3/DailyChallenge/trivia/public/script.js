let currentQuestion = {};

const startQuiz = async() => {
    try {
        const response = await fetch('http://localhost:3000/quiz');
        currentQuestion = await response.json();
        render(currentQuestion);
    } catch(error) {
        console.log(error);
    }
 }

const render = (currentQuestion) => {
    document.getElementById('question').innerText = currentQuestion.question;
}

startQuiz();

const submitAnswer = () => {
    fetch('http://localhost:3000/quiz', {
        method: 'POST',
        headers: {
            'Content-type':'application/json',
        },
        body: JSON.stringify({ currentQuestion, userAnswer: document.getElementById('answer').value })
    })
    .then(response => response.json())
    .then(result => {
        showFeedback(result.message);
        if (result.nextQuestion) {
            document.getElementById('answer').value = '';
            currentQuestion = result.nextQuestion;
            render(currentQuestion);
        } else {
            setTimeout(showScore, 500);
        }
    })
    .catch(error => console.log(error))
}

const showFeedback = (message) => {
    document.getElementById('feedback').style.display = "inline";
    document.getElementById('feedback').innerText = message;
    setTimeout(() => { feedback.style.display = "none" }, 2000);
}

const showScore = () => {
    fetch('http://localhost:3000/quiz/score')
    .then(response => response.json())
    .then(result => {
        document.getElementById('quiz').style.display = "none";
        document.getElementById('results').style.display = "block";
        document.getElementById('score').innerText = `Score: ${result.score}`;
    })
    .catch(error => console.log(error))
}

const again = () => {
    document.getElementById('quiz').style.display = "block";
    document.getElementById('results').style.display = "none";
    startQuiz();
}