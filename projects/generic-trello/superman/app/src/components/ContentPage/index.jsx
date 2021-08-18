import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Login from '../Login'

function ContentPage() {
  return (
    <Switch>
      <Route exact path='/'>
        <Login />
      </Route>
      
    </Switch>
  )
}

export default ContentPage