import { combineReducers } from 'redux';
import quizReducer from './quizReducer';
import participantsReducer from './participantsReducer';

export default combineReducers({
  Quiz: quizReducer,
  Participant: participantsReducer,
});
