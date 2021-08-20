import React from 'react'
import { Switch, Route, BrowserRouter} from 'react-router-dom'
import Login from '../../pages/Login'
import Register from '../../pages/Register'
import HomePage from '../../pages/HomePage'
import Out from '../../pages/Out'
//import { isAuthenticated } from '../../Services/auth'



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
      
      <Route path='/sair'>
        <Out />
      </Route>
    </Switch>
  </BrowserRouter>
  
  
  )
}

export default page