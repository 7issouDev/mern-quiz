import { ADD_PARTICIPANT, SHOW_ALL_PARTICIPANT } from './types';
import axios from 'axios';

// DONE: don't touch this code again
export const addParticipant = (data) => (dispatch) => {
  const { name, email, generatedPassword } = data;
  axios
    .post('http://localhost:5000/participant', {
      fullname: name,
      email,
      password: generatedPassword,
    })
    .then((res) => {
      dispatch({
        type: ADD_PARTICIPANT,
        payload: res.data.returnedParticipant,
      });
    });
};

export const showAllParticipants = () => (dispatch) => {
  dispatch({
    type: SHOW_ALL_PARTICIPANT,
    payload: [],
  });
};
