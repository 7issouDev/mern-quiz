const express = require('express');
const router = express.Router();
const Quiz = require('../models/Quiz');

// TODO: show all the quizes
router.get('/', async (req, res) => {
  const quizes = await Quiz.find({});
  res.send({
    message: 'show all the quizes',
    quizes,
  });
});

// TODO: add a new quiz
router.post('/', (req, res) => {
  const { TitleQuiz, QuestionsCount, VisibilityQuiz } = req.body;
  const quiz = new Quiz({
    TitleQuiz,
    QuestionsCount,
    VisibilityQuiz,
  });
  quiz.save().then((result) => {
    res.status(201).send(result);
  });
});

// TODO: affect questions to a new quiz depending on QuizID
router.put('/:quizid/questions', async (req, res) => {
  const { quizid } = req.params;
  const { TitleQuestion, options } = req.body;

  try {
    const quiz = await Quiz.findOne({ _id: quizid });
    // @ts-ignore
    quiz.questions.push({
      TitleQuestion,
      options,
    });
    await quiz.save();
    res.send({
      message: 'the questions has been added',
      quiz,
    });
  } catch (error) {
    console.log('there is an error in your DB');
  }
});

module.exports = router;
