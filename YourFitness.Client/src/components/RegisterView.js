
import React from 'react';
import axios from 'axios';


import {connect} from 'react-redux';
import Login from './LoginView';

var uri = 'http://localhost:57515/api/user'
export default class RegisterView extends React.Component {

  constructor(props){
    super(props);
    this.state = {view : "initial", user : {firstName: "", lastName: "", email: "", password: "", weight : "",
    height: "", goal: ""}, password: "password", icon: "fa fa fa-eye", errors: {}}
    this.AddUser = this.AddUser.bind(this);
    this.handleUser = this.handleUser.bind(this);
    this.ShowPassword = this.ShowPassword.bind(this);
  }

ValidateFields()
{
  let fields = this.state.user;
  let errors = {};
  let formIsValid = true;
  
        if(!fields["firstName"] | fields["firstName"] ==" "){
           formIsValid = false;
           errors["fname"] = "Cannot be empty";
        }
        if(!fields["lastName"] | fields["lastName"] ==" "){
          formIsValid = false;
          errors["lname"] = "Cannot be empty";
        }

      if(!fields["email"] | fields["email"] == " "){
          formIsValid = false;
          errors["email"] = "Cannot be empty";
       }
       if(!fields["password"] | fields["password"] == " "){
         formIsValid = false;
         errors["password"] = "Cannot be empty";
       }
       if(!fields["weight"] | fields["weight"] == " "){
        formIsValid = false;
        errors["weight"] = "Cannot be empty";
      }
     if(!fields["height"] | fields["height"] == " "){
       formIsValid = false;
       errors["height"] = "Cannot be empty";
     }

     if(!fields["Goal"]){
      formIsValid = false;
      errors["goal"] = "Cannot be empty";
    }
        this.setState({errors: errors});
        return formIsValid;
}

AddUser(e){
  
  var user = this.state.user;
  
  if(this.ValidateFields()){
  
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
  else{
    console.log("fail");
  }

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
return (

  <form className="login100-form validate-form">
  <span className="login100-form-title p-b-40">
    Register
  </span>

  <div className="text-center p-t-55 p-b-30">
    <span className="txt1">
    
    </span>
  </div>
       <div>
       <span style={{color: "red"}}>{this.state.errors["fname"]}</span>
       </div>
       <div className="wrap-input100 validate-input m-b-16"> 
       <input type="text" name="FirstName" ref="FirstName" placeholder="First Name" className="input100" value={this.state.user.firstName} onChange={(e) => this.handleUser(e)}/>
       </div>
       <span className="focus-input100"></span>
       
       
       <div>
       <span style={{color: "red"}}>{this.state.errors["lname"]}</span>
       </div>
       <div className="wrap-input100 validate-input m-b-16" >  
       <input type="text" name="LastName" className="input100" placeholder="Last Name" value={this.state.user.lastName} onChange={(e) => this.handleUser(e)}/>
       <span className="focus-input100"></span>
       </div>
       
       <div>
       <span style={{color: "red"}}>{this.state.errors["email"]}</span>
       </div>
       <div className="wrap-input100 validate-input m-b-16" data-validate="Please enter email: ex@abc.xyz"> 
       <input type="text" name="Email" className="input100" placeholder="Email" value={this.state.user.email} onChange={(e) => this.handleUser(e)}/>
       <span className="focus-input100"></span>
       </div>
       
       <div>
       <span style={{color: "red"}}>{this.state.errors["password"]}</span>
       </div>
       <div className="wrap-input100 validate-input m-b-16"> 
       <span className="btn-show-pass" onClick={this.ShowPassword}>
							<i className={this.state.icon}></i>
						</span>
       <input type={this.state.password} name="Password" className="input100" placeholder="Password" value={this.state.user.password} onChange={(e) => this.handleUser(e)}/>
       <span className="focus-input100"></span>
       </div>
       
       <div>
       <span style={{color: "red"}}>{this.state.errors["weight"]}</span>
       </div>
       <div className="wrap-input100 validate-input m-b-16" > 
       <input type="text" name="Weight" className="input100" placeholder="Weight" value={this.state.user.weight} onChange={(e) => this.handleUser(e)}/>
       <span className="focus-input100"></span>
       </div>
       
       <div>
       <span style={{color: "red"}}>{this.state.errors["height"]}</span>
       </div>
       <div className="wrap-input100 validate-input m-b-16" > 
       <input type="text" name="Height" className="input100" placeholder="Height" value={this.state.user.height} onChange={(e) => this.handleUser(e)}/>
       <span className="focus-input100"></span>
       </div>
       
       <div>
       <span style={{color: "red"}}>{this.state.errors["goal"]}</span>
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
      
      </form>
 
)
   
 }
}

