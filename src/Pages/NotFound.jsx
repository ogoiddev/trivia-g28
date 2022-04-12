import React, { Component } from 'react';
import DiogoNotFound from '../images/DiogoNotfound.png';
import Container from './cssPages/Notfound';

export default class NotFound extends Component {
  render() {
    return (
      <Container>
        <h2>Estou procurando aqui e</h2>
        <img src={ DiogoNotFound } alt="Diogo NotFound" />
        <h2> não estou econtrando sua página</h2>
      </Container>

    );
  }
}
