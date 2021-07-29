import "./commons/global.css"
import { ThemeProvider } from "@material-ui/core";
import { theme } from "./commons/constants/theme";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
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
            <Route exact path="/">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
