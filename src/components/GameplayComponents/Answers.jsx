import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Alternatives from './Alternatives';
import Timer from './Timer';
import ContainerAns from './cssGameplay/Answers';

class Answers extends Component {
  render() {
    const {
      history,
      category,
      question,
      correctAnswer,
      incorrectAnswers,
      difficulty } = this.props;

    return (
      <>
        <ContainerAns>
          <div className="head0">
            <div className="head">
              <Timer />
              <p data-testid="question-category">{category}</p>
            </div>
          </div>
          <div className="question">
            <p data-testid="question-text">{question}</p>
          </div>
        </ContainerAns>
        <Alternatives
          correctAnswer={ correctAnswer }
          incorrectAnswers={ incorrectAnswers }
          history={ history }
          difficulty={ difficulty }
        />
      </>
    );
  }
}

Answers.propTypes = {
  incorrectAnswers: PropTypes.object,
  correctAnswer: PropTypes.string,
  question: PropTypes.string,
  category: PropTypes.string,
}.isRequired;

export default Answers;
