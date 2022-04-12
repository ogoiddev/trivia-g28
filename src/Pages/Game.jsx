import React, { Component } from 'react';
import { func } from 'prop-types';
import Header from '../components/Header';
import Gameplay from '../components/Gameplay';

export default class Game extends Component {
  render() {
    const { history } = this.props;
    return (
      <>
        <Header />
        <Gameplay history={ history } />

        <footer />

      </>
    );
  }
}

Game.propTypes = {
  history: func,
}.isRequired;
