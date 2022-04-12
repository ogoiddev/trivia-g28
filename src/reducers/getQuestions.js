import { GET_QUESTIONS_SUCCEDED, ERROR, LOADING } from '../actions';

const INITIAL_STATE = {
  questions: [],
  loading: true,
};

function getQuestions(state = INITIAL_STATE, action) {
  switch (action.type) {
  case LOADING:
    return { ...state, loading: true };
  case GET_QUESTIONS_SUCCEDED:
    return { ...state, questions: action.payload, loading: false };
  case ERROR:
    return {
      ...state,
      error: action.payload,
    };
  default:
    return state;
  }
}

export default getQuestions;
