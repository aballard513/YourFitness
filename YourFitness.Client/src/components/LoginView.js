import React from 'react';

import {connect} from 'react-redux';
import RegisterView from './RegisterView';
import Home from './Home';


export default class Login extends React.Component {


    constructor(props){
      super(props);
      this.state = {view : "initial", password: "password", credentials: {email: "", password: ""}, icon: "fa fa fa-eye"}
      this.checkState = this.checkState.bind(this);
      this.Register = this.Register.bind(this);
	  this.ShowPass = this.ShowPass.bind(this);
	  this.Home = this.Home.bind(this);
    }

    checkState(){
        return this.state.view;
    }

    Register(){
        this.setState({view : "Register"})
    }

     ShowPass(evt)
    {
		console.log("password")
		
		if(evt){
        if(this.state.password =="password")
        {
			this.setState({password: "text"});
			this.setState({icon: "fa fa fa-eye-slash"});
        }
        else{
			this.setState({password: "password"});
			this.setState({icon: "fa fa fa-eye"});
		}}
	}
	
	Home()
	{
		console.log("home");
		this.props.history.push("/Home")
		//BrowserRouter.
	}

	handleCredentials(evt){
		var property = evt.target.name;
		if(property == "Email")
		{
			//console.log("email")
			this.setState({credentials: {email: evt.target.value, password: this.state.credentials.password}})
			//console.log(this.state.user)
		}
		else if(property == "Password")
		{
			//console.log("email")
			this.setState({credentials: {email: this.state.credentials.email, password: evt.target.value}})
			//console.log(this.state.user)
		}
	  }

    render(){
		console.log(this.props);
		if(this.checkState() == "initial"){
        return(
			<div className="limiter">
                    <div className="container-login100">
                        <div className="wrap-login100 p-t-90 p-b-30">
			
					<span className="login100-form-title p-b-40">
						Login
					</span>

					<div className="text-center p-t-55 p-b-30">
						<span className="txt1">
							
						</span>
					</div>

					<div className="wrap-input100 validate-input m-b-16" data-validate="Please enter email: ex@abc.xyz">
					<input type="text" name="Email" className="input100" placeholder="Email" value={this.state.credentials.email} onChange={(e) => this.handleCredentials(e)}/>
						<span className="focus-input100"></span>
					</div>

					<div className="wrap-input100 validate-input m-b-20" data-validate = "Please enter password">
						<span className="btn-show-pass" onClick = {this.ShowPass}>
							<i className={this.state.icon}></i>
						</span>
						<input type={this.state.password} name="Password" className="input100" placeholder="Password" value={this.state.credentials.password} onChange={(e) => this.handleCredentials(e)}/>
						<span className="focus-input100"></span>
					</div>

					<div className="container-login100-form-btn">
						<button onClick={this.Home} className="login100-form-btn">
							Login
						</button>
					</div>
					
					<div className="flex-col-c p-t-224">
						<span className="txt2 p-b-10">
							Don’t have an account?
						</span>

						<a onClick={this.Register} style={{cursor: "pointer"}} className="txt3 bo1 hov1">
							Sign up now
						</a>
					</div>
					
				</div>
				</div>
				</div>
        
	)}else{
		return <Home />
	}
	
	}
    
}