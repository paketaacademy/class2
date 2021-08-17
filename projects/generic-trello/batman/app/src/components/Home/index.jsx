import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Login from '../../pages/Login'
import Register from '../../pages/Register'
import Home from '../../components/Home'
import Out from '../../pages/Out'

function page() {
  return (
    <Switch>
      <Route exact path='/'>
        <Login />
      </Route>
      <Route path='/home'>
        <Home />
      </Route>
      <Route path='/conectar'>
        <Login />
      </Route>
      <Route path='/registrar'>
        <Register />
      </Route>
      <Route path='/sair'>
        <Out />
      </Route>
    </Switch>
  )
}

export default page