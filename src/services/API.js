import { getToken, getQuestions, getQuestionsFail,
  errorAction, loading } from '../actions';

export const TOKEN_ENDPOINT = 'https://opentdb.com/api_token.php?command=request';
const QUESTIONS_ENDPOINT = 'https://opentdb.com/api.php?amount=5&token=';

export const fetchToken = () => (dispatch) => {
  fetch(TOKEN_ENDPOINT)
    .then((response) => response.json())
    .then((data) => dispatch(getToken(data)))
    .catch((error) => dispatch((errorAction(error))));
};

export const fetchQuestions = (token) => (dispatch) => {
  dispatch(loading());
  fetch(`${QUESTIONS_ENDPOINT}${token}`)
    .then((response) => response.json())
    .then((data) => dispatch(getQuestions(data)))
    .catch((error) => dispatch(getQuestionsFail(error)));
};
