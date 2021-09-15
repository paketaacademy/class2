import React from 'react'
import {Switch, Route, BrowserRouter} from 'react-router-dom'
import Login from '../pages/SignIn'
import Register from '../pages/SignUp'

function route(){
    return(
        <BrowserRouter>
        <Switch>
        <Route exact path='/'>
            <Login/>

        </Route>
        <Route path='/Register'>
            <Register/>
        </Route>
        <Route path='/Login'>
            <Login/>
        </Route>
        </Switch>
        </BrowserRouter>
    )
}

export default route