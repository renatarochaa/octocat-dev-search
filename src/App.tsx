import React, { useEffect } from 'react'
import { DefaultTheme, ThemeProvider } from 'styled-components'
import dark from './styles/themes/dark'
import GlobalStyle from './styles/global'
import Grid from './components/atoms/grid'
import light from './styles/themes/light'
import Header from './components/organisms/header'
import SearchBar from './components/organisms/search/indext'
import Profile from './components/organisms/profile'
import usePersistedState from './utils/usePersistedState'
import useProfileProvider from './providers/profile'

const App = () => {
  const { profile, getProfileData } = useProfileProvider()
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', dark)

  const toggleTheme = () => {
    setTheme(theme.title === 'dark' ? light : dark)
  } 

  useEffect(() => { 
    getProfileData('octocat') 
  }, [])

  console.log(profile)
  

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Grid>
        <Header toggleTheme={toggleTheme} theme={theme.title} />
        <SearchBar />
        <Profile />
      </Grid>
    </ThemeProvider>
  )
} 

export default App
