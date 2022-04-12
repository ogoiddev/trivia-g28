import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Login from '../Login';
import Game from '../Game';
import Feedback from '../FeedBack';
import Config from '../Config';
import NotFound from '../NotFound';
import Ranking from '../Ranking';
import { lightTheme, darkTheme } from '../cssPages/theme';
import * as S from '../cssPages/Login';

const Routes = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  return (
    <ThemeProvider theme={ isDarkTheme ? darkTheme : lightTheme }>
      <S.Container>
        <button
          type="button"
          className="btn-theme"
          onClick={ () => setIsDarkTheme(!isDarkTheme) }
        >
          Trocar Tema
        </button>
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route path="/game" component={ Game } />
          <Route path="/ranking" component={ Ranking } />
          <Route path="/feedback" component={ Feedback } />
          <Route path="/config" component={ Config } />
          <Route path="*" component={ NotFound } />
        </Switch>
      </S.Container>
    </ThemeProvider>

  );
};

export default Routes;
