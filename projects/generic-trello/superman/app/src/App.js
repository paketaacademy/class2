import { BrowserRouter as Router } from "react-router-dom"
import { createTheme, StylesProvider } from "@material-ui/core/styles"
import { ThemeProvider } from "styled-components"
import ContentPage from "./components/ContentPage"

function App() {
  const theme = createTheme()
  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Router>
<<<<<<< HEAD
          <ContentPage />                      
=======
            
            {/* <Menu /> */}
            <ContentPage/>                       
>>>>>>> 09d02a46995eb5538c723e255b53a69a0b9426b7
        </Router>
      </ThemeProvider>
    </StylesProvider>
  )
}

export default App;
