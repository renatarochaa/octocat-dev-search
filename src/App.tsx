import React from 'react';
import { ThemeProvider } from 'styled-components';
import light from './styles/themes/light'
import dark from './styles/themes/dark'
import GlobalStyle from './styles/global';

const App = () => (
  <>
    <ThemeProvider theme={light}>
      <GlobalStyle />
      <div className="App"></div>
    </ThemeProvider>
  </>
);

export default App;
