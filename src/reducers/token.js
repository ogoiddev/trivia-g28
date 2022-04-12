import { CATCH_TOKEN_SUCCEEDED, ERROR } from '../actions';

const INITIAL_STATE = '';

function token(state = INITIAL_STATE, action) {
  switch (action.type) {
  case CATCH_TOKEN_SUCCEEDED:
    return action.payload.token;
  case ERROR:
    return {
      ...state,
      error: action.payload,
    };
  default:
    return state;
  }
}

export default token;
