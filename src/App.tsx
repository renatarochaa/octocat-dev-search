import React, { useEffect, useState } from 'react'
import { DefaultTheme, ThemeProvider } from 'styled-components'
import dark from './styles/themes/dark'
import GlobalStyle from './styles/global'
import Grid from './components/atoms/grid'
import light from './styles/themes/light'
import Header from './components/organisms/header'
import SearchBar from './components/organisms/search/indext'
import usePersistedState from './utils/usePersistedState'
import useProfileProvider from './providers/profile'
import ProfileContent from './components/organisms/profile'

const App = () => {
  const { profile, error, setError, getProfileData } = useProfileProvider()
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', dark)
  const [search, setSearch] = useState<string>('')

  const toggleTheme = () => {
    setTheme(theme.title === 'dark' ? light : dark)
  }

  const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
    setError('')
  }

  const handleSubmit = (e:React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    getProfileData(search)
  }

  useEffect(() => { 
    !profile.userData && getProfileData('octocat') 
  }, [])    

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Grid>
        <Header
          toggleTheme={toggleTheme}
          theme={theme.title}
        />
        <SearchBar
          search={search}
          error={error}
          onSubmit={handleSubmit}
          onChange={handleInputChange}
        />
        {profile.userData && <ProfileContent data={profile} />}
      </Grid>
    </ThemeProvider>
  )
} 

export default App
