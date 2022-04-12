export const LOGIN_SUCCEEDED = 'LOGIN_SUCCEEDED';
export const CATCH_TOKEN_SUCCEEDED = 'CATCH_TOKEN_SUCCEEDED';
export const ERROR = 'ERROR';
export const GET_QUESTIONS_SUCCEDED = 'GET_QUESTIONS_SUCCEDED';
export const GET_QUESTIONS_FAILED = 'GET_QUESTIONS_FAILED';
export const TIMER_ACTION = 'TIMER_ACTION';
export const STOP_ACTION = 'STOP_ACTION';
export const LOADING = 'LOADING';
export const QUESTION_INDEX = 'QUESTION_INDEX';
export const SCORE_SUCCEEDED = 'SCORE_SUCCEEDED';
export const RANKING = 'RANKING';

export const loginAction = (payload) => ({
  type: LOGIN_SUCCEEDED,
  payload,
});

export const getToken = (payload) => ({
  type: CATCH_TOKEN_SUCCEEDED,
  payload,
});

export const errorAction = (payload) => ({
  type: ERROR,
  payload,
});

export const getQuestions = (payload) => ({
  type: GET_QUESTIONS_SUCCEDED,
  payload,
});

export const getQuestionsFail = (payload) => ({
  type: GET_QUESTIONS_FAILED,
  payload,
});

export const scoreAction = (payload) => ({
  type: SCORE_SUCCEEDED,
  payload,
});

export const timerAction = (payload) => ({
  type: TIMER_ACTION,
  payload,
});

export const stopActionTime = () => ({
  type: STOP_ACTION,
});

export const loading = () => ({
  type: LOADING,
});

export const questionIndex = (payload) => ({
  type: QUESTION_INDEX,
  payload,
});

export const setRanking = (payload) => ({
  type: RANKING,
  payload,
});

export const resetRedux = () => ({
  type: 'reset',
});
