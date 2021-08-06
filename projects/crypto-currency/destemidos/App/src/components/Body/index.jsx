import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Destemidos from '../../pages/Destemidos'
import Markets from '../../pages/Markets'
import Influencers from '../../pages/Influencers'
import Feeds from '../../pages/Feeds'
import SignIn from '../../pages/SignIn'
import SignUp from '../../pages/SignUp'
import SignOut from '../../pages/SignOut'
import Home from '../../pages/Home'
import InserirCredito from '../../pages/InserirCredito'
import Comprar from '../../pages/Comprar'
import NaoEncontrada from '../../pages/NaoEncontrada'

function Body() {
  return (
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/mercado">
        <Markets />
      </Route>
      <Route path="/credito">
        <InserirCredito />
      </Route>
      <Route path="/comprar">
        <Comprar />
      </Route>
      <Route path="/influencias">
        <Influencers />
      </Route>
      <Route path="/conteudo">
        <Feeds />
      </Route>
      <Route path="/conectar">
         <SignIn />
      </Route>
      <Route path="/conectar">
         <Markets />
      </Route>
      <Route path="/cadastrar">
        <SignUp />
      </Route>
      <Route path="*">
        <NaoEncontrada />
      </Route>
      <Route>
        <SignOut path="/sair" />
      </Route>
    </Switch>
    )
}

export default Body