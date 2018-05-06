import React, {Component} from 'react';
import Home from '../components/Home';
import {Route, Router, Switch} from 'react-router-dom';
import Auth from '../utils/AuthService';
import HomeView from '../components/HomeView';
import Callback from '../components/Callback.js'
import History from '../utils/History';
import Login from '../components/Login';

const auth = new Auth();



class App extends Component 
{
   
    render(){
        return (
        <Router basename={'/dist'} history = {History}>
        <Switch>
        <Route exact path='/' render={props => <Home {...props} />}/>
        <Route path='/Home' component = {HomeView} />
        <Route exact path='/Login' component = {Login} />
        <Route path="${process.env.Public_URL}/callback" render={(props) => {
          auth.handleAuthentication(props);
          return <Callback {...props} /> 
        }}/>
        </Switch>
        </Router> 
        )
    }

}

export default (App);