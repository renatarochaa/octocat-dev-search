import React from 'react'
import { ThemeProvider } from 'styled-components'
import dark from './styles/themes/dark'
import GlobalStyle from './styles/global'
import Grid from './components/atoms/grid'
import UserInfo from './components/molecules/userInfo'
import UserData from './components/molecules/userData'
import Card from './components/atoms/card'
import light from './styles/themes/light'
import UserLinks from './components/molecules/userLinks'
import Header from './components/organisms/header'
import SearchBar from './components/organisms/search/indext'
import Profile from './components/organisms/profile'

const App = () => (
  <ThemeProvider theme={dark}>
    <GlobalStyle />
    <Grid>
      <Header />
      <SearchBar />
      <Profile />
    </Grid>
  </ThemeProvider>
)

export default App
