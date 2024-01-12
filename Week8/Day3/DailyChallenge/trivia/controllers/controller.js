import { trivia } from '../config/trivia.js';
import { score } from '../config/score.js';

export const startQuiz = (req, res) => {
    score.score = 0;
    res.json(trivia[0]);
}

export const submitAnswer = (req, res) => {
    const { currentQuestion, userAnswer } = req.body;
    const nextIndex = trivia.findIndex(q => q.question === currentQuestion.question);
    if ( currentQuestion.answer.toLowerCase() === userAnswer.toLowerCase() ) {
        score.score++;
        return res.json({message: 'Correct!', nextQuestion:trivia[nextIndex + 1]})
    }
    else { return res.json({message: 'Wrong!', nextQuestion: trivia[nextIndex + 1]})}
};

export const displayScore = (req, res) => {
    res.json(score);
};