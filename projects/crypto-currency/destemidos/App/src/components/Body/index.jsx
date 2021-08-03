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
            <Route path="/entrar">
                <SignIn />
            </Route>
            <Route path="/sair">
                <SignUp />
            </Route>
            <Route path="/feed">
                <Feeds />
            </Route>
            <Route path="/mercado">
                <Markets />
            </Route>
            <Route path="/influenciadores">
                <Influencers />
            </Route>
            <Route exact path="/">
                <Feeds />
            </Route>
        </Switch>
    )
}



export default Body;
