import { LOGIN_SUCCEEDED, SCORE_SUCCEEDED } from '../actions';

const INITIAL_STATE = {
  name: '',
  gravatarEmail: '',
  gravatarImg: '',
  score: 0,
  assertions: 0,
};

function player(state = INITIAL_STATE, action) {
  switch (action.type) {
  case LOGIN_SUCCEEDED:
    return {
      ...state,
      ...action.payload,
    };
  case SCORE_SUCCEEDED:
    return {
      ...state,
      score: state.score + action.payload,
      assertions: state.assertions + 1,
    };
  default:
    return state;
  }
}

export default player;
