import "./commons/global.css"
import { ThemeProvider } from "@material-ui/core"
import { theme } from "./commons/constants/theme"
import { Login } from "./components/Login"
import { Register } from "./components/Register"
import { MenuListComposition } from "./components/Navbar"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from 'react-router-dom'
import "./commons/global.css";
import { Feeds } from "./components/Feed";
import { TemplateAuth } from "./components/TemplateAuth"
import { TemplateMain } from "./components/TemplateMain"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route  exact path="/">
              <MenuListComposition />              

            <Route path="/noticias">
              <TemplateMain>
                <Feeds />
              </TemplateMain>

            </Route>
            <TemplateAuth>
              <Route exact path="/">
                <Login />
              </Route>
              <Route path="/registrar">
                <Register />
              </Route>
            </TemplateAuth>
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
    </div>
  );
}

export default App;
