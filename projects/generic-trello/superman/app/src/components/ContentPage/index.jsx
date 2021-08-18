import React from 'react'
import { Switch, Route } from 'react-router-dom'
<<<<<<< HEAD
import Login from '../Login'
=======
import Login from '../../pages/Login'
import Board from '../../pages/Board'
import Profile from '../../pages/Profile'
import SingUp from '../../pages/SingUp'
>>>>>>> 09d02a46995eb5538c723e255b53a69a0b9426b7

function ContentPage() {
  return (
    <Switch>
      <Route exact path='/'>
        <Login />
<<<<<<< HEAD
=======
      </Route>
      <Route exact path='/cadastrar'>
        <SingUp />
      </Route>
      <Route exact path='/perfil'>
        <Profile />
      </Route>
      <Route exact path='/quadro'>
        <Board />
>>>>>>> 09d02a46995eb5538c723e255b53a69a0b9426b7
      </Route>
      
    </Switch>
  )
}

export default ContentPage