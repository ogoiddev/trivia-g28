import { QUESTION_INDEX } from '../actions';

const INITIAL_STATE = {
  index: 0,
};

function questionId(state = INITIAL_STATE, action) {
  switch (action.type) {
  case QUESTION_INDEX:
    return { index: action.payload };
  default:
    return state;
  }
}

export default questionId;
