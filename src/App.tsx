import React from 'react'
import { ThemeProvider } from 'styled-components'
import dark from './styles/themes/dark'
import GlobalStyle from './styles/global'
import Grid from './components/atoms/grid'
import ThemeSwitcher from './components/molecules/themeSwitcher'
import UserInfo from './components/molecules/userInfo'
import UserData from './components/molecules/userData'
import Card from './components/atoms/card'
import light from './styles/themes/light'
import UserLinks from './components/molecules/userLinks'

const App = () => (
  <ThemeProvider theme={dark}>
    <GlobalStyle />
    <Grid>
      <ThemeSwitcher />
      <Card>
        <div>
          <UserInfo />
          <UserData />
          <UserLinks />
        </div>
      </Card>
    </Grid>
  </ThemeProvider>
)

export default App
