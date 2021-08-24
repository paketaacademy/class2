import React from 'react'
import { Switch, Route, BrowserRouter} from 'react-router-dom'
import Login from '../../pages/Login'
import Register from '../../pages/Register'
import HomePage from '../../pages/HomePage'

function page() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path='/'>
        <Login />
      </Route>
      
      <Route path='/home'>
        <HomePage />
      </Route>
      
      <Route path='/conectar'>
        <Login />
      </Route>
      
      <Route path='/registrar'>
        <Register />
      </Route>
    </Switch>
  </BrowserRouter>
  
  )
}

export default page