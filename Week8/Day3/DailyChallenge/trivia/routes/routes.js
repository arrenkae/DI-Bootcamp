import express from 'express';
import { startQuiz, submitAnswer, displayScore } from '../controllers/controller.js';

export const router = express.Router();

router.get('/quiz', startQuiz);
router.post('/quiz', submitAnswer);
router.get('/quiz/score', displayScore);