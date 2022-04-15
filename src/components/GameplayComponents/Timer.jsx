import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { timerAction } from '../../actions';

class Timer extends Component {
  constructor() {
    super();
    this.state = {
      timer: 30,
    };
  }

  componentDidMount() {
    this.startTimer();
  }

  componentDidUpdate(props, prevState) {
    this.stopTimer(prevState);
  }

  stopTimer = (prevState) => {
    const { handleTimer, stop } = this.props;
    const ZERO = 0;
    const { timer } = this.state;
    if (prevState.timer !== timer && timer === ZERO) {
      clearInterval(this.intervalId);
    }
    if (stop) {
      clearInterval(this.intervalId);
      handleTimer(timer);
    }
  }

  startTimer = () => {
    const ONE_SECOND = 1000;

    this.intervalId = setInterval(() => {
      this.setState((prev) => ({ timer: prev.timer - 1 }));
    }, ONE_SECOND);
  }

  render() {
    const { timer } = this.state;
    const { className } = this.props;
    return (
      <span className={ className }>
        {timer}
        .s
      </span>
    );
  }
}

Timer.propTypes = {
  handleTimer: PropTypes.string,
  stop: PropTypes.bool,
}.isRequired;

const mapStateToProps = (state) => ({
  stop: state.timer.stop,
});

const mapDispatchToProps = (dispatch) => ({
  handleTimer: (timer) => dispatch(timerAction(timer)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
