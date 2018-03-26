import React from 'react';

import {connect} from 'react-redux';
import RegisterView from './RegisterView';
import UserView from './UserView';

export default class Home extends React.Component {

    constructor(props){
      super(props);
      this.state = {view : "initial"}
      this.checkState = this.checkState.bind(this);
      this.updateState = this.updateState.bind(this);
    }

    checkState(){
        return this.state.view;
    }

    updateState(){
        if(this.checkState() == "initial")
        {
            this.setState({view : "user"})
        }
        else{
            this.setState({view : "initial"})
        }
    }

    render(){
        
        var page = this.checkState()
        if(page == 'initial')
        {
            return(
            <div><RegisterView />
            <form onSubmit = {this.updateState}>
                <div>
                    <input type="submit" value="View Users" />
                </div>
            </form>
            </div>
            )
        }
        else
        {
            return(<div><UserView /></div>)
        }

    }
}