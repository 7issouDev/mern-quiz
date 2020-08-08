import { ADD_QUIZ, ADD_QUESTION, REDUCE_QUESTION } from '../actions/types';

const initialState = {
  CurrentQuiz: {},
  CurrentQuestions: [],
  Quizes: [],
  questionsCounter: null,
};

export default (state = initialState, action) => {
  const { type, payload, payload_counter } = action;
  switch (type) {
    case ADD_QUIZ:
      return {
        ...state,
        CurrentQuiz: payload,
        Quizes: [payload, ...state.Quizes],
        questionsCounter: payload_counter,
      };
    case ADD_QUESTION:
      return {
        ...state,
        CurrentQuestions: [payload, ...state.CurrentQuestions],
      };
    case REDUCE_QUESTION:
      return {
        ...state,
        questionsCounter: payload,
      };
    default:
      return state;
  }
};
