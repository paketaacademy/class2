import "./commons/global.css"
import { ThemeProvider } from "@material-ui/core";
import { theme } from "./commons/constants/theme";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { MenuListComposition } from "./components/Navbar"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

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
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
