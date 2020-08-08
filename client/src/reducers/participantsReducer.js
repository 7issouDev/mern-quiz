import { ADD_PARTICIPANT, SHOW_ALL_PARTICIPANT } from '../actions/types';

const initialState = {
  CurrentParticipant: {},
  participants: [],
  count: 0,
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_PARTICIPANT:
      return {
        ...state,
        CurrentParticipant: payload,
        participants: [payload, ...state.participants],
        count: state.participants.length + 1,
      };
    case SHOW_ALL_PARTICIPANT:
      return { ...state, participants: payload };
    default:
      return state;
  }
};
