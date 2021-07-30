import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Feeds from '../../pages/Feeds';
import Influencers from '../../pages/Influencers';
import Markets from '../../pages/Markets';
import SignIn from '../../pages/SignIn';
import SignUp from '../../pages/SignUp';


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
            <Route path="/Markets">
                <Markets />
            </Route>
            <Route path="/Influencers">
                <Influencers />
            </Route>
            <Route exact path="/">
                <Feeds />
            </Route>
        </Switch>
    )
}



export default Body;
