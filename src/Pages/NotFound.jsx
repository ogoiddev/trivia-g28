import React, { Component } from 'react';
import DiogoNotFound from '../images/DiogoNotfound.png';
import * as S from './cssPages/Notfound';

export default class NotFound extends Component {
  render() {
    return (
      <>
        <S.GlobalStyle />
        <S.Container>
          <h2>Estou procurando aqui e</h2>
          <img src={ DiogoNotFound } alt="Diogo NotFound" />
          <h2> não estou econtrando sua página</h2>
        </S.Container>
      </>
    );
  }
}
