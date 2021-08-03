import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Destemidos from '../../pages/Destemidos'
import Markets from '../../pages/Markets'
import Influencers from '../../pages/Influencers/Influencers'
import Feeds from '../../pages/Feeds/Feeds'
import SignIn from '../../pages/SignIn'
import SignUp from '../../pages/SignUp'

function Body() {
  return (
    <Switch>
      <Route path="/destemidos">
        <Destemidos />
      </Route>
      <Route exact path="/">
        <Markets />
      </Route>
      <Route path="/mercado">
        <Markets />
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
      <Route path="/cadastrar">
        <SignUp />
      </Route>
    </Switch>
    )
}

export default Body