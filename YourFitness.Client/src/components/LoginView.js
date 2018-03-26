import React from 'react';

import {connect} from 'react-redux';
import RegisterView from './RegisterView';

export default class Login extends React.Component {


    constructor(props){
      super(props);
      this.state = {view : "initial", password: "password"}
      this.checkState = this.checkState.bind(this);
      this.Register = this.Register.bind(this);
      this.ShowPassword = this.ShowPassword(this);
    }

    checkState(){
        return this.state.view;
    }

    Register(){
        this.setState({view : "Register"})
    }

    
    ShowPassword(evt)
    {
        console.log(this.state.password);
  
        /*if(this.state.password =="password")
        {
            this.setState({password: "text"});
        }
        else{
            this.setState({password: "password"});
        }*/
    }

    render(){
        if(this.checkState() == "initial"){
        return(
        <div>
            <div className="limiter">
		<div className="container-login100">
			<div className="wrap-login100 p-t-90 p-b-30">
				<form className="login100-form validate-form">
					<span className="login100-form-title p-b-40">
						Login
					</span>

					<div className="text-center p-t-55 p-b-30">
						<span className="txt1">
							
						</span>
					</div>

					<div className="wrap-input100 validate-input m-b-16" data-validate="Please enter email: ex@abc.xyz">
						<input className="input100" name="email" placeholder="Email" type="text" />
						<span className="focus-input100"></span>
					</div>

					<div className="wrap-input100 validate-input m-b-20" data-validate = "Please enter password">
						<span className="btn-show-pass">
							<i className="fa fa fa-eye"></i>
						</span>
						<input className="input100" type={this.state.password} name="pass" placeholder="Password" />
						<span className="focus-input100"></span>
					</div>

					<div className="container-login100-form-btn">
						<button className="login100-form-btn">
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
					
				</form>
			</div>
            
		</div>
	</div>
        </div>
        
        )}
        else
        {
            return <RegisterView />
        }
    }
}