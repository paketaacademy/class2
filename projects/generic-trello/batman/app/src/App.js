import React from "react"
import Home from './components/Home'
import { BrowserRouter as Router } from "react-router-dom"
import GlobalStyle from './styles/global'

function App() {

  return (
    <Router>
      <Home />
      <GlobalStyle />
    </Router>
  )
}

export default App