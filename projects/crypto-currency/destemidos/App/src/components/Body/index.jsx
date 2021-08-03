import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Feeds from '../../pages/Feeds';
import Home from '../../pages/Home';
import Influencers from '../../pages/Influencers';
import SignIn from '../../pages/SignIn';
import SignUp from '../../pages/SignUp';
import InserirCredito from '../../pages/InserirCredito';


function Body() {
    return (
        <Switch>
            <Route path="/SignIn">
                <SignIn />
            </Route>
            <Route path="/SignUp">
                <SignUp />
            </Route>
            <Route path="/Feeds">
                <Feeds />
            </Route>
            <Route path="/Influencers">
                <Influencers />
            </Route>
            <Route exact path="/Home">
                <Home />
            </Route>
            <Route exact path="/InserirCredito">
                <InserirCredito />
            </Route>
        </Switch>
    )
}



export default Body;
