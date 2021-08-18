import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Login from '../../pages/Login'
import Board from '../../pages/Board'
import Profile from '../../pages/Profile'
import SingUp from '../../pages/SingUp'

function ContentPage() {
  return (
    <Switch>
      <Route exact path='/'>
        <Login />
      </Route>
      <Route exact path='/cadastrar'>
        <SingUp />
      </Route>
      <Route exact path='/perfil'>
        <Profile />
      </Route>
      <Route exact path='/quadro'>
        <Board />
      </Route>
    </Switch>
  )
}

export default ContentPage