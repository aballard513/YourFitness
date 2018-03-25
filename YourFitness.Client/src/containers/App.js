import React, {Component} from 'react';
import HomeView from '../components/Home';

import {connect} from 'react-redux';
class App extends Component 
{
    render(){
       const {user} = this.props.userReducer 
        return <HomeView />
    }

}

export default connect(state => state)(App);