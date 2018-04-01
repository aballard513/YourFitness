import React, {Component} from 'react';
import Home from '../components/Home';
import {Route, BrowserRouter, Switch} from 'react-router-dom';

import {connect} from 'react-redux';
import HomeView from '../components/HomeView';
class App extends Component 
{
    render(){
        return (
        <BrowserRouter>
        <Switch>
        <Route exact path='/' render={props => <Home {...props} />}/>
        <Route exact path='/Home' component = {HomeView} />
        </Switch>
        </BrowserRouter> 
        )
    }

}

export default connect(state => state)(App);