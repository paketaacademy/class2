import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Menu from "./components/Menu";
import Body from "./components/Body";
import "./App.css"

function App() {
  return (
    
    <Router>
      <div className="teste">
        <Menu/>
        <Body/>
      </div>
    </Router>
  );
}

export default App;