import React from 'react'
import {Switch, Route} from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Wizard from './components/Wizard/Wizard'
import Nav from './components/Nav/Nav'

export default (
    <div> 
        <Nav /> 
        <Switch> 
        <Route exact path='/' component={Dashboard}> </Route>
        <Route path='/wizard' component={Wizard}> </Route>
        </Switch>
    </div>
)