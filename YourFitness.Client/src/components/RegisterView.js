
import React from 'react';
import axios from 'axios';


import {connect} from 'react-redux';
import Login from './LoginView';

var uri = 'http://localhost:57515/api/user'
export default class RegisterView extends React.Component {

  constructor(props){
    super(props);
    this.state = {view : "initial", user : {firstName: "", lastName: "", email: "", password: "", weight : "",
    height: "", goal: ""}, password: "password", icon: "fa fa fa-eye"}
    this.AddUser = this.AddUser.bind(this);
    this.handleUser = this.handleUser.bind(this);
    this.Login = this.Login.bind(this);
    this.ShowPassword = this.ShowPassword.bind(this);
  }

ValidateFields()
{
  
}

AddUser(e){
  
  var user = this.state.user;
  console.log(user);
  axios.post(
    'http://localhost:57515/api/user',
    user
  )
  .then(response=> {
    //handle success
    console.log(response)
})
.catch(response=> {
    //handle error;
    console.log(response);
});

this.setState({user: {firstName: "", lastName: "", email: "", password: "", weight : "",
  height: "", goal: ""}})


}

checkState(){
  return this.state.view;
}

handleUser(evt){
  var property = evt.target.name;
  console.log(property)
  if(property == "FirstName")
  {   console.log("first")
      this.setState({user: {firstName: evt.target.value, lastName : this.state.user.lastName, email : this.state.user.email, password: this.state.user.password, weight : this.state.user.weight,
      height: this.state.user.height, goal: this.state.user.goal}})
  }
  else if(property == "LastName")
  {
      console.log("last")
      this.setState({user: {firstName: this.state.user.firstName, lastName: evt.target.value, email : this.state.user.email, password: this.state.user.password, weight : this.state.user.weight,
        height: this.state.user.height, goal: this.state.user.goal}})
  }
  else if(property == "Email")
  {
      //console.log("email")
      this.setState({user: {firstName: this.state.user.firstName, lastName: this.state.user.lastName, email: evt.target.value, password: this.state.user.password, weight : this.state.user.weight,
        height: this.state.user.height, goal: this.state.user.goal}})
      //console.log(this.state.user)
  }
  else if(property == "Password")
  {
      //console.log("email")
      this.setState({user: {firstName: this.state.user.firstName, lastName: this.state.user.lastName, email: this.state.user.email, password: evt.target.value, weight : this.state.user.weight,
        height: this.state.user.height, goal: this.state.user.goal}})
      //console.log(this.state.user)
  }
  else if(property == "Weight")
  {
      //console.log("email")
      this.setState({user: {firstName: this.state.user.firstName, lastName: this.state.user.lastName, email: this.state.user.email, password: this.state.user.password, weight : evt.target.value,
        height: this.state.user.height, goal: this.state.user.goal}})
      //console.log(this.state.user)
  }
  else if(property == "Height")
  {
      //console.log("email")
      this.setState({user: {firstName: this.state.user.firstName, lastName: this.state.user.lastName, email: this.state.user.email, password: this.state.user.password, weight : this.state.user.weight,
        height: evt.target.value, goal: this.state.user.goal}})
      //console.log(this.state.user)
  }
  else if(property == "Goal")
  {
      //console.log("email")
      this.setState({user: {firstName: this.state.user.firstName, lastName: this.state.user.lastName, email: this.state.user.email, password: this.state.user.password, weight : this.state.user.weight,
        height: this.state.user.height, goal: evt.target.value}})
      //console.log(this.state.user)
  }
  //console.log(this.state.user)
}

Login(){
  this.setState({view : "Login"})
}

ShowPassword(evt)
{
  console.log(this.state.password);
  
  if(this.state.password =="password")
  {
      this.setState({password: "text"});
      this.setState({icon: "fa fa fa-eye-slash"});
  }
  else{
    
    this.setState({password: "password"});
    this.setState({icon: "fa fa fa-eye"});
  }
}

  
 render () {
   if(this.checkState()=="initial")
   {
   return (
    <div>
    <div className="limiter">
<div className="container-login100">
<div className="wrap-login100 p-t-90 p-b-30">
<form className="login100-form validate-form">
  <span className="login100-form-title p-b-40">
    Register
  </span>

  <div className="text-center p-t-55 p-b-30">
    <span className="txt1">
    
    </span>
  </div>
       
       <div className="wrap-input100 validate-input m-b-16"> 
       <input type="text" name="FirstName" ref="FirstName" placeholder="First Name" className="input100" value={this.state.user.firstName} onChange={(e) => this.handleUser(e)}/>
       <span className="focus-input100"></span>
       </div>

       
       <div className="wrap-input100 validate-input m-b-16" >  
       <input type="text" name="LastName" className="input100" placeholder="Last Name" value={this.state.user.lastName} onChange={(e) => this.handleUser(e)}/>
       <span className="focus-input100"></span>
       </div>

       <div className="wrap-input100 validate-input m-b-16" data-validate="Please enter email: ex@abc.xyz"> 
       <input type="text" name="Email" className="input100" placeholder="Email" value={this.state.user.email} onChange={(e) => this.handleUser(e)}/>
       <span className="focus-input100"></span>
       </div>
       
       <div className="wrap-input100 validate-input m-b-16"> 
       <span className="btn-show-pass" onClick={this.ShowPassword}>
							<i className={this.state.icon}></i>
						</span>
       <input type={this.state.password} name="Password" className="input100" placeholder="Password" value={this.state.user.password} onChange={(e) => this.handleUser(e)}/>
       <span className="focus-input100"></span>
       </div>

       <div className="wrap-input100 validate-input m-b-16" > 
       <input type="text" name="Weight" className="input100" placeholder="Weight" value={this.state.user.weight} onChange={(e) => this.handleUser(e)}/>
       <span className="focus-input100"></span>
       </div>

       <div className="wrap-input100 validate-input m-b-16" > 
       <input type="text" name="Height" className="input100" placeholder="Height" value={this.state.user.height} onChange={(e) => this.handleUser(e)}/>
       <span className="focus-input100"></span>
       </div>

       <label name= "GoalLbl">Goal</label>
       <br/>
       <select name="Goal" className="custom-select" value={this.state.user.goal} onChange={(e) => this.handleUser(e)} type="text" >
        <option> Select</option>
        <option value="Gain"> Gain Weight</option>
        <option value="Maintain"> Maintain</option>
        <option value="Loose">Loose Weight </option>
       </select>
      <br/>
      <br />
      <br />
      <div className="container-login100-form-btn">
        <button className="login100-form-btn" type="button" onClick={this.AddUser}>
          Register
        </button>
      </div>
      <div className="flex-col-c p-t-224">
						<span className="txt2 p-b-10">
							Already have an account?
						</span>

						<a style={{cursor: "pointer"}}  onClick={this.Login} className="txt3 bo1 hov1">
							Login
						</a>
					</div>
      </form>
    </div>
    </div>
    </div>
     </div>

   )
  }
  else{
    return (<Login />)

  }
 }
}

