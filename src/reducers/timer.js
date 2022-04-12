import { TIMER_ACTION } from '../actions';

const INITIAL_STATE = {
  stop: false,
  currentTime: '',
};

const timer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case TIMER_ACTION: return {
    stop: !state.stop,
    currentTime: action.payload,
  };
  default: return state;
  }
};

export default timer;
