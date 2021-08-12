import React from "react"
import { BrowserRouter as Router } from "react-router-dom"
import { createTheme, StylesProvider } from "@material-ui/core/styles"
import { ThemeProvider } from "styled-components"
import Menu from "./components/Menu"
import Footer from './components/Footer'
import ContentPage from "./components/ContentPage"

function App() {

  const theme = createTheme()
  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Router>
          <Menu />
          <ContentPage />
          <Footer />
        </Router>
      </ThemeProvider>
    </StylesProvider>
  )
}

export default App