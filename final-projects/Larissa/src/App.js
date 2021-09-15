import React from 'react'
import GlobalStyle from './global-style'
import {BrowserRouter as Router} from 'react-router-dom'
import Routes from './Routes'

function App() {
  return (
    <div className="App">
     <Router>
      <GlobalStyle/>
      <Routes/>
     </Router>
    </div>
  );
}

export default App;
