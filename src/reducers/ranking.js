import { RANKING } from '../actions';

const INITIAL_STATE = [];

const ranking = (state = INITIAL_STATE, action) => (action.type === RANKING
  ? [action.payload]
  : state);

export default ranking;
