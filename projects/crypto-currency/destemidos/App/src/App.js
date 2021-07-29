import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Menu from "./components/Menu";
import Body from "./components/Body";

function App() {
  return (
    
    <Router>
      <div>
        <Menu/>
        <Body/>
      </div>
    </Router>
  );
}

export default App;