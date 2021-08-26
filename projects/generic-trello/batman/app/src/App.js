import React from "react"
import Home from './components/Home'
import { BrowserRouter as Router } from "react-router-dom"
import GlobalStyle from './styles/global'
import { createTheme, StylesProvider } from "@material-ui/core/styles" 
import { ThemeProvider } from "styled-components"

function App() {
  const theme = createTheme()
  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Router>
          <Home />
          <GlobalStyle />
        </Router>
      </ThemeProvider>
    </StylesProvider>
  )
}

export default App