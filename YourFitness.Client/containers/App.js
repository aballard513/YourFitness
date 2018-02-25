import React, {Component} from 'react';
import RegisterView from '../components/RegisterView';

import {connect} from 'react-redux';
class App extends Component 
{
    render(){
       const {user} = this.props.userReducer 
        return <RegisterView />
    }

}

export default connect(state => state)(App);