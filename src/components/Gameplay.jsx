import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchQuestions } from '../services/API';
import Answers from './GameplayComponents/Answers';
import ContainerAns from './GameplayComponents/cssGameplay/Answers';

class Gameplay extends Component {
  componentDidMount() {
    const { token, fetchingQuestion } = this.props;
    fetchingQuestion(token);
  }

  render() {
    const { questions, loading, questionIndex, history } = this.props;

    return (
      <ContainerAns className="containerAlfa">
        {loading ? 'Carregando...'
          : questions
            .filter((_, index) => index === questionIndex)
            .map((element) => (<Answers
              key={ element.question }
              category={ element.category }
              difficulty={ element.difficulty }
              question={ element.question }
              correctAnswer={ element.correct_answer }
              incorrectAnswers={ element.incorrect_answers }
              history={ history }
            />))}
      </ContainerAns>
    );
  }
}

Gameplay.propTypes = {
  token: PropTypes.string,
  question: PropTypes.object,
  loading: PropTypes.bool,
}.isRequired;

const mapStateToProps = (state) => ({
  token: state.token,
  questions: state.getQuestions.questions.results,
  loading: state.getQuestions.loading,
  questionIndex: state.questionId.index,
});

const mapDispatchToProps = (dispatch) => ({
  fetchingQuestion: (token) => dispatch(fetchQuestions(token)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Gameplay);
