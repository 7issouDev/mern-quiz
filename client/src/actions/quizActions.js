import {
  ADD_QUIZ,
  ADD_QUESTION,
  SHOW_ALL_QUESTION,
  SHOW_ALL_QUIZ,
  REDUCE_QUESTION,
} from './types';
import axios from 'axios';

// DONE: don't touch this code again
export const addQuiz = (data) => (dispatch) => {
  const { TitleQuiz, QuestionsCount, VisibilityQuiz } = data;
  axios
    .post('http://localhost:5000/quiz', {
      TitleQuiz,
      QuestionsCount,
      VisibilityQuiz,
    })
    .then((res) => {
      dispatch({
        type: ADD_QUIZ,
        payload: res.data,
        payload_counter: QuestionsCount,
      });
    });
};

// FIXME: show all the quizes
// TASK: not yet
export const showAllQuizes = () => (dispatch) => {
  axios.get('http://localhost:5000/quiz').then((res) => {
    dispatch({
      type: SHOW_ALL_QUIZ,
      payload: res.data,
    });
  });
};

// TODO: add new question with options
// NOTE: don't touch this code
export const addNewQuestion = (data, quizId) => (dispatch) => {
  const { TitleQuestion, options } = data;
  axios
    .put(`http://localhost:5000/quiz/${quizId}/questions`, {
      TitleQuestion,
      options,
    })
    .then((res) => {
      dispatch({
        type: ADD_QUESTION,
        payload: res.data,
      });
    });
  // NOTE: this action will add a new question with options in the global state
};

// TODO: show all the participants
// TASK: not yet
export const showAllQuestions = () => (dispatch) => {
  dispatch({
    type: SHOW_ALL_QUESTION,
  });
};

// TODO: reduce questions counter
export const reduceCounter = (data) => (dispatch) => {
  dispatch({
    type: REDUCE_QUESTION,
    payload: data,
  });
};
