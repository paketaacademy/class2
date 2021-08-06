import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Destemidos from '../../pages/Destemidos'
import Markets from '../../pages/Markets'
import Influencers from '../../pages/Influencers'
import Feeds from '../../pages/Feeds'
import SignIn from '../../pages/SignIn'
import SignUp from '../../pages/SignUp'
import SignOut from '../../pages/SignOut'
import { isAuthenticated } from '../../Services/auth'
import Home from '../../pages/Home'
import InserirCredito from '../../pages/InserirCredito'

function Body() {
  return (
    <Switch>
      <Route exact path='/'>
        <Destemidos />
      </Route>
      <Route path="/destemidos">
        <Destemidos />
      </Route>
      <Route path="/mercado">
        <Markets />
      </Route>
      <Route path="/credito">
        <InserirCredito />
      </Route>
      <Route path="/influencias">
        <Influencers />
      </Route>
      <Route path="/conteudo">
        <Feeds />
      </Route>
      {!isAuthenticated() && <Route path="/conectar">
         <SignIn />
      </Route>}
      {isAuthenticated() && <Route path="/conectar">
         <Markets />
      </Route>}
      <Route path="/cadastrar">
        <SignUp />
      </Route>
      <Route path="/sair">
        <SignOut />
      </Route>
    </Switch>
    )
}

export default Body
