import React from 'react'
import { Switch, Route } from 'react-router-dom'

function ContentPage() {
  return (
    <Switch>
      <Route exact path='/'>
        <SignIn />
      </Route>
    </Switch>
  )
}

export default ContentPage