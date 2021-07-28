import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Feeds from '../../pages/Feeds';

function Body() {
    return (
        <Switch>
            <Route path="/Feeds">
                <Feeds />
            </Route>
            <Route path="/users">
                <Feeds />
            </Route>
            <Route path="/">
                <Feeds />
            </Route>
        </Switch>
    )
}



export default Body;
