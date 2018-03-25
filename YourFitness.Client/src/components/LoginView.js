import React from 'react';

import {connect} from 'react-redux';
import RegisterView from './RegisterView';
import UserView from './UserView';
import '../assets/images/icons/favicon.ico'
import '../assets/vendor/bootstrap/css/bootstrap.min.css'
import '../assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css'
import '../assets/fonts/Linearicons-Free-v1.0.0/icon-font.min.css'
import '../assets/vendor/animate/animate.css'
import '../assets/vendor/css-hamburgers/hamburgers.min.css'
import '../assets/vendor/animsition/css/animsition.css'
import '../assets/vendor/select2/select2.min.css'
import '../assets/vendor/daterangepicker/daterangepicker.css'
import '../assets/css/main.css'
import '../assets/css/util.css'
import '../assets/vendor/jquery/jquery-3.2.1.min.js'
import '../assets/vendor/animsition/js/animsition.min.js'
import '../assets/vendor/bootstrap/js/popper'
import '../assets/vendor/bootstrap/js/bootstrap.min.js'
import '../assets/vendor/select2/select2.min.js'
import '../assets/vendor/daterangepicker/moment.min.js'
import '../assets/js/main.js'

export default class Login extends React.Component {


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
        
    }

    render(){
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
							Login with email
						</span>
					</div>

					<div className="wrap-input100 validate-input m-b-16" data-validate="Please enter email: ex@abc.xyz">
						<input className="input100" name="email" placeholder="Email" type="text" />
						<span className="focus-input100"></span>
					</div>

					<div className="wrap-input100 validate-input m-b-16" data-validate="Please enter email: ex@abc.xyz">
                        <span className="btn-show-pass">
							<i className="fa fa fa-eye"></i>
						</span>
						<input className="input100" name="password" placeholder="Password" type="text" />
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

						<a href="#" className="txt3 bo1 hov1">
							Sign up now
						</a>
					</div>
					
				</form>
			</div>
		</div>
	</div>
        </div>
        
        )
    }
}