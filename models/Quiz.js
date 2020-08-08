const mongoose = require('mongoose');

// TODO: this is the first schema
const QuizSchema = new mongoose.Schema({
  TitleQuiz: {
    type: String,
    required: true,
  },
  QuestionsCount: {
    type: Number,
    required: true,
  },
  VisibilityQuiz: {
    type: Boolean,
    required: true,
  },
  questions: [
    {
      TitleQuestion: {
        type: String,
      },
      options: [
        {
          TitleOption: {
            type: String,
          },
          OptionTruth: {
            type: Boolean,
          },
        },
      ],
    },
  ],
});

module.exports = mongoose.model('Quiz', QuizSchema, 'Quizes');
