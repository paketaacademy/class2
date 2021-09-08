import React, { Fragment, useState, useEffect } from "react"
import { ThemeProvider } from "styled-components"
import { lightTheme, darkTheme } from "../../Page/theme.js"
import GlobalTheme from "../../Page/globals.js"
import { Container, Title, BoxTheme } from './style.js'
import Brightness6Icon from '@material-ui/icons/Brightness6'

const Menu = () => {

  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      window.localStorage.setItem("theme", "dark")
      setTheme("dark")
    } else {
      window.localStorage.setItem("theme", "light")
      setTheme("light")
    }
  }
  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    localTheme && setTheme(localTheme);
  }, [])

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <Fragment>
        <GlobalTheme />
        <Container>
          <h4>devfinder</h4>
          <BoxTheme>
            <Title>
              {theme === "light" ? "LIGHT" : "DARK"}!
            </Title>
            <Brightness6Icon onClick={toggleTheme} />
          </BoxTheme>
        </Container>
      </Fragment>
    </ThemeProvider>
  )
}

export default Menu