import CoinOfTheDay from "./components/Coinoftheday"
import { ThemeProvider } from "@material-ui/core"
import { theme } from "./commons/constants/theme"
import { Login } from "./components/Login"
import { Register } from "./components/Register"
import { Navbar } from "./components/Navbar"
//import { Footer } from "./components/Footer"
//import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import { Feeds } from "./components/Feed"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import "./commons/global.css";
import { Feeds } from "./components/Feed";
import { TemplateAuth } from "./components/TemplateAuth"
import { TemplateMain } from "./components/TemplateMain"
import Market from "./components/Market"
import { Wallet } from "./components/Wallet"
import Influencer from "./components/Influencer"
import { CryptoCoin } from "./components/CryptoCoin"
import { InsertCredit } from "./components/InsertCredit"
function App() {
  return (
    <div className="App">
      
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route path="/moedadodia">
              <CoinOfTheDay />
            </Route>
            <Route path="/influenciadores">
              <Influencer />
            </Route>

            <Route  exact path="/">
              <Navbar />  
            </Route>
            <Route path="/noticias">
              <TemplateMain>
                <Feeds />
              </TemplateMain>
            </Route>
            {/* <Route  exact path="/">
              < />              
            </Route> */}
            <Route path="/mercado">
              <TemplateMain>
                <Market />
              </TemplateMain>
            </Route>
            <Route path="/mercado/:id" exact>
              <TemplateMain>
                <CryptoCoin />
              </TemplateMain>
            </Route>
            <Route path="/carteira">
              <TemplateMain>
                <Wallet />
              </TemplateMain>
            </Route>
            <Route path="/adicionarsaldo">
              <TemplateMain>
                <InsertCredit />
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
          </Switch>
        </Router>
      </ThemeProvider>         
    </div>
  );
}

export default App;
