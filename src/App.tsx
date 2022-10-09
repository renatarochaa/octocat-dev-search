import React from 'react'
import { ThemeProvider } from 'styled-components'
import dark from './styles/themes/dark'
import GlobalStyle from './styles/global'
import { H1, H2, H3, H4, Paragraph } from './components/atoms/typography'
import Icon from './components/atoms/icon'
import Button from './components/atoms/button'
import Link from './components/atoms/link'
import Card from './components/atoms/card'

const App = () => (
  <ThemeProvider theme={dark}>
    <GlobalStyle />
    <div className="App">
      <H1>Teste H1</H1>
      <H2>Teste H2</H2>
      <H3>Teste H3</H3>
      <H4>Teste H4</H4>
      <Paragraph>Teste Paragraph</Paragraph>
      <Icon icon="company" medium />
      <Icon icon="location" />
      <Icon icon="moon" />
      <Icon icon="search" />
      <Icon icon="sun" />
      <Icon icon="twitter" />
      <Icon icon="website" />
      <Card padding="0.5rem 0.5rem 0.5rem 2rem">
        <Button>Search</Button>
        <Button inactive>Search</Button>
      </Card>
      <Card>
        <Link href="http://www.teste.com.br">
          <Icon icon="twitter" />
          <Paragraph>Twitter</Paragraph>
        </Link>

        <Link href="http://www.teste.com.br" accent>
          <H4>@octocat</H4>
        </Link>

        <Link inactive>
          <Icon icon="twitter" />
          <Paragraph>Twitter</Paragraph>
        </Link>
      </Card>
    </div>
  </ThemeProvider>
)

export default App
