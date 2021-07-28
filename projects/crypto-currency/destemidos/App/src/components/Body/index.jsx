import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Feeds from '../../pages/Feeds';
import Influencers from '../../pages/Influencers';

function Body() {
    return (
        <Switch>
            <Route path="/Feeds">
                <Feeds />
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
