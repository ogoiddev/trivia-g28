import React, { Component } from 'react';
import { connect } from 'react-redux';
import { func } from 'prop-types';
import { questionIndex } from '../actions';
import Container from './cssPages/Ranking';

class Ranking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ranking: [],
    };
  }

  componentDidMount() {
    this.setState({ ranking: JSON.parse(localStorage.getItem('ranking')) });
  }

  render() {
    const { ranking } = this.state;
    return (
      <Container data-testid="ranking-title">
        <section>
          <h1>Leaderboard</h1>
          {
            ranking.sort((a, b) => a.score - b.score).reverse().map((player, index) => (

              <div key={ player.name + index }>

                <img
                  src={ player.gravatarImg }
                  alt={ player.name }
                />
                <span
                  className="user"
                  key={ player.name }
                  data-testid={ `player-name-${index}` }
                >
                  {player.name}
                </span>
                <span data-testid={ `player-score-${index}` }>
                  {player.score}
                </span>

              </div>
            ))
          }
        </section>
        <button
          className="btn"
          onClick={ () => {
            const { history, dispatch } = this.props;
            dispatch(questionIndex(0));
            history.push('/');
          } }
          type="button"
          data-testid="btn-go-home"
        >
          Play Again
        </button>
      </Container>
    );
  }
}

Ranking.propTypes = {
  history: func,
  dispatch: func,
}.isDisabled;

const mapStateToProps = ({ player }) => ({
  player,
});

export default connect(mapStateToProps)(Ranking);
