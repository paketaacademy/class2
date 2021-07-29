import "./commons/global.css"
import { ThemeProvider } from "@material-ui/core";
import { theme } from "./commons/constants/theme";
import { FormContainerLogin } from "./components/LoginContainer";
import { FormContainerRegister } from "./components/RegisterContainer";
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
              <FormContainerLogin />
            </Route>
            <Route path="/register">
              <FormContainerRegister />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
