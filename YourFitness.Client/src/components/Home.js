import React from 'react';

import {connect} from 'react-redux';
import RegisterView from './RegisterView';
import LoginView from './LoginView';

export default class Home extends React.Component {

    constructor(props){
      super(props);
      this.state = {view : "initial"}
      this.checkState = this.checkState.bind(this);
      this.updateState = this.updateState.bind(this);
      this.Login = this.Login.bind(this);
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

    Login(){
        this.setState({view : "Login"})
      }

    render(){
        
        var page = this.checkState()
        if(page == 'initial')
        {
            return(
                <div>
                <div className="limiter">
                    <div className="container-login100">
                        <div className="wrap-login100 p-t-90 p-b-30">
                           
                                <RegisterView />
                                <div className="flex-col-c p-t-224">
						            <span className="txt2 p-b-10">
							                Already have an account?
						            </span>
                                    <a style={{cursor: "pointer"}}  onClick={this.Login} className="txt3 bo1 hov1">
							            Login
						            </a>
					            </div>
                          
                        </div>
                    </div>
            </div>
            </div>
            
            
            )
        }
        else
        {
            return(<div><LoginView /></div>)
        }

    }
}