import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Menu from "./components/Menu";
import Body from "./components/Body";
import "./App.css"
import { createTheme, StylesProvider } from "@material-ui/core/styles" 
import { ThemeProvider  } from "styled-components"

function App() {

  const theme = createTheme()

  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Router>
          <div>
            <Menu/>
            <Body/>
          </div>
        </Router>
      </ThemeProvider>
    </StylesProvider>
  );
}

export default App;