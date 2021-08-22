import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Login from '../../pages/Login'
import Board from '../../pages/Board'
import Profile from '../../pages/Profile'
import SingUp from '../../pages/SingUp'
import { isAuthenticated } from '../../Services/auth'

function ContentPage() {
  return (
    <Switch>
      <Route exact path='/'>
        <Login />
      </Route>
      
      <Route path='/cadastrar'>
        <SingUp />
      </Route>
      {isAuthenticated() &&<Route path='/perfil'>
        <Profile />
      </Route>}
      {isAuthenticated() &&<Route path='/quadro'>
        <Board />
      </Route>}
      
    </Switch>
  )
}

export default ContentPage