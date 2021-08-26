import React from "react"
import Home from './components/Home'
import { BrowserRouter as Router } from "react-router-dom"
import GlobalStyle from './styles/global'
//import { Home } from './pages/Home'

function App() {

  return (
    <Router>
      {/* <Home /> */}
      <Home />
      <GlobalStyle />
    </Router>
  )
}

export default App