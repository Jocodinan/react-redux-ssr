import React, { Fragment } from 'react';

import Router from './router';

import { ThemeProvider } from 'styled-components';
import theme from '../../styles/theme';

import GlobalStyle from '../../styles/global';

const App = () => (
  <ThemeProvider theme={theme}>
    <Fragment>
      <GlobalStyle />
      <Router />
    </Fragment>
  </ThemeProvider>
);

export default App;