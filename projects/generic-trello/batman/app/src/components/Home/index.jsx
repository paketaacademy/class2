import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Login from '../../pages/Login'
import Register from '../../pages/Register'
import HomePage from '../../pages/HomePage'
import { Home } from '../../pages/Home'
import Board from '../Board'
import { isAuthenticated } from '../../Services/auth'

function page() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <Login />
        </Route>
        {isAuthenticated() &&
          <Route path='/home'>
            <Home />
          </Route>
        }
        <Route path='/conectar'>
          <Login />
        </Route>

        <Route path='/registrar'>
          <Register />
        </Route>
        {isAuthenticated() &&
          <Route path='/board/:id'>
            <HomePage />
          </Route>
        }
      </Switch>
    </BrowserRouter>

  )
}

export default page