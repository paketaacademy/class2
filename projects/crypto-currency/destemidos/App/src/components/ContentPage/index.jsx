import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Markets from '../../pages/Markets/index'
import Influencers from '../../pages/Influencers'
import Feeds from '../../pages/Feeds'
import SignIn from '../../pages/SignIn'
import SignUp from '../../pages/SignUp'
import SignOut from '../../pages/SignOut'
import Home from '../../pages/Home'
import InserirCredito from '../../pages/InserirCredito'
import PurchaseDetails from '../../pages/PurchaseDetails'
import { isAuthenticated } from '../../Services/auth'

function ContentPage() {
  return (
    <Switch>
      <Route exact path='/'>
        <SignIn />
      </Route>
      {isAuthenticated() && <Route path="/home">
        <Home />
      </Route>}
      {isAuthenticated() && <Route path="/mercado">
        <Markets />
      </Route>}
      {isAuthenticated() && <Route path="/credito">
        <InserirCredito />
      </Route>}
      {isAuthenticated() && <Route path="/influencias">
        <Influencers />
      </Route>}
      {isAuthenticated() && <Route path="/conteudo">
        <Feeds />
      </Route>}
      <Route path="/conectar">
        <SignIn />
      </Route>
      <Route path="/cadastrar">
        <SignUp />
      </Route>
      {isAuthenticated() && <Route path="/comprar/:id" children={<PurchaseDetails />} >
        <PurchaseDetails />
      </Route>}
      <Route path="/sair">
        <SignOut />
      </Route>
    </Switch>
  )
}

export default ContentPage
