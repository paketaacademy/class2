import React from "react"
import { BrowserRouter as Router } from "react-router-dom"
import { createTheme, StylesProvider } from "@material-ui/core/styles"
import { ThemeProvider } from "styled-components"
import Menu from "../../components/Menu"
import Body from "../../components/Body"

function AccountUser() {

  const theme = createTheme()
  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Router>
            <Menu />
            <Body />
        </Router>
      </ThemeProvider>
    </StylesProvider>
  )
}

export default AccountUser