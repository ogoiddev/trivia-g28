import React from 'react';
import { connect } from 'react-redux';
import { func } from 'prop-types';
import md5 from 'crypto-js/md5';
import { fetchToken } from '../services/API';
import { loginAction } from '../actions';
import * as S from './cssPages/Login';
import LogoTrivia from '../images/Trivia_Logo.png';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      gravatarEmail: '',
      name: '',
      buttonDisable: true,
    };
  }

  componentDidMount() {
    const { fetchingToken } = this.props;
    fetchingToken();
  }

  changeHandler = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value }, this.validateButton);
  }

  validateButton = () => {
    const { gravatarEmail, name } = this.state;
    const TWO = 2;
    const VALIDATION = gravatarEmail.length > TWO && name.length > TWO;

    this.setState((VALIDATION) ? { buttonDisable: false } : { buttonDisable: true });
  }

  clickHandler = (e) => {
    e.preventDefault();
    const { loginInfo, history } = this.props;
    if (e.target.name === 'config') {
      return history.push('/config');
    }
    const { gravatarEmail, name } = this.state;
    const hash = md5(gravatarEmail).toString();
    const gravatarImg = `https://www.gravatar.com/avatar/${hash}`;

    loginInfo({ name, gravatarEmail, gravatarImg, score: 0, assertions: 0 });

    history.push('/game');
  }

  render() {
    const { gravatarEmail, name, buttonDisable } = this.state;
    return (
      <S.Container name="container-login">
        <img
          className="logo-trivia"
          src={ LogoTrivia }
          alt="Logo do game"
        />

        <S.ContainerForm>
          <S.Form>

            <label
              htmlFor="email"
            >
              EMAIL DO GRAVATAR
              <input
                type="text"
                id="email"
                data-testid="input-gravatar-email"
                name="gravatarEmail"
                value={ gravatarEmail }
                onChange={ this.changeHandler }
              />
            </label>

            <label
              htmlFor="senha"
            >
              NOME
              <input
                type="text"
                id="senha"
                data-testid="input-player-name"
                name="name"
                value={ name }
                onChange={ this.changeHandler }
              />
            </label>
            <div className="btn-group">

              <button
                className="btn enter"
                type="submit"
                data-testid="btn-play"
                disabled={ buttonDisable }
                onClick={ this.clickHandler }
              >
                Entrar
              </button>
              <S.BtnIcon
                name="config"
                type="button"
                data-testid="btn-settings"
                onClick={ this.clickHandler }
              >
                Configurações
              </S.BtnIcon>

            </div>
          </S.Form>
        </S.ContainerForm>
      </S.Container>
    );
  }
}

const mapDispatchToProps = {
  fetchingToken: fetchToken,
  loginInfo: loginAction,
};

Home.propTypes = {
  fetchingToken: func,
  history: func,
}.isRequired;

export default connect(null, mapDispatchToProps)(Home);
