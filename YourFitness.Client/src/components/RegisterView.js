
import React from 'react';

import Auth from '../utils/AuthService';
import History from '../utils/History';
var auth = new Auth;

var uri = 'http://localhost:57515/api/user'
export default class RegisterView extends React.Component {

  constructor(props){
    super(props);
    this.state = {view : "initial", user : {firstName: "", lastName: "", email: "", password: "", weight : "",
    height: "", goal: "", password: "", age: "", gender: ""}, showPassword: "Password",icon: "fa fa fa-eye", errors: {}, connection: "YourFitness-Auth"};
    this.AddUser = this.AddUser.bind(this);
    this.handleUser = this.handleUser.bind(this);
    this.ShowPassword = this.ShowPassword.bind(this);
  }

validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

ValidateFields()
{
  let fields = this.state.user;
  let errors = {};
  let formIsValid = true;
        if(!fields["firstName"] | fields["firstName"] ==" "){
           formIsValid = false;
           errors["fname"] = "Please enter you first name";
        }
        if(!fields["lastName"] | fields["lastName"] ==" "){
          formIsValid = false;
          errors["lname"] = "Please enter your last name";
        }

      if(!fields["email"] | fields["email"] == " " | !this.validateEmail(fields["email"])){
          formIsValid = false;
          errors["email"] = "Please enter a valid email";
       }

       if(!fields["password"] | fields["password"] == " "){
         formIsValid = false;
         errors["password"] = "Please enter a valid password";
       }
       if(!fields["weight"] | fields["weight"] == " "){
        formIsValid = false;
        errors["weight"] = "Please enter a valid weight";
      }
     if(!fields["height"] | fields["height"] == " "){
       formIsValid = false;
       errors["height"] = "Please enter a valid height";
     }

     if(!fields["goal"] | fields["goal"] == "Select"){
      formIsValid = false;
      errors["goal"] = "Please make a selection";
    }

    if(!fields["age"] | fields["age"] == " "){
      formIsValid = false;
      errors["age"] = "Please enter a valid age";
    }

    if(!fields["gender"] | fields["gender"] == "Select"){
      console.log(fields);
      formIsValid = false;
      errors["gender"] = "Please make a selection";
    }
        this.setState({errors: errors});
        return formIsValid;
}

AddUser(){
  
  var user = this.state.user;
  let errors = {};
  if(this.ValidateFields())
    {
      auth.create(user).then((value) => {
        
        if(value === "user_exists")
        {
          errors["email"] = "This email is already in use!";
          this.setState({errors: errors});
        }else if(value === "invalid_password")
        {
          errors["password"] = "Password is too weak!";
          this.setState({errors: errors});
        }
      });
    }
  else
    {
      //console.log("Fail!");
    }
}

handleUser(evt){
  var property = evt.target.name;
  if(property == "FirstName")
  {   
      this.setState({user: {firstName: evt.target.value, lastName : this.state.user.lastName, email : this.state.user.email, password: this.state.user.password, weight : this.state.user.weight,
      height: this.state.user.height, goal: this.state.user.goal, age: this.state.user.age, gender: this.state.user.gender}})
  }
  else if(property == "LastName")
  {
      
      this.setState({user: {firstName: this.state.user.firstName, lastName: evt.target.value, email : this.state.user.email, password: this.state.user.password, weight : this.state.user.weight,
        height: this.state.user.height, goal: this.state.user.goal, age: this.state.user.age, gender: this.state.user.gender}})
  }
  else if(property == "Email")
  {
      //console.log("email")
      this.setState({user: {firstName: this.state.user.firstName, lastName: this.state.user.lastName, email: evt.target.value, password: this.state.user.password, weight : this.state.user.weight,
        height: this.state.user.height, goal: this.state.user.goal, age: this.state.user.age, gender: this.state.user.gender}})
      //console.log(this.state.user)
  }
  else if(property == "Password")
  {
      //console.log("email")
      this.setState({user: {firstName: this.state.user.firstName, lastName: this.state.user.lastName, email: this.state.user.email, password: evt.target.value, weight : this.state.user.weight,
        height: this.state.user.height, goal: this.state.user.goal, age: this.state.user.age, gender: this.state.user.gender}})
      //console.log(this.state.user)
  }
  else if(property == "Weight")
  {
      //console.log("email")
      this.setState({user: {firstName: this.state.user.firstName, lastName: this.state.user.lastName, email: this.state.user.email, password: this.state.user.password, weight : evt.target.value,
        height: this.state.user.height, goal: this.state.user.goal, age: this.state.user.age, gender: this.state.user.gender}})
      //console.log(this.state.user)
  }
  else if(property == "Height")
  {
      //console.log("email")
      this.setState({user: {firstName: this.state.user.firstName, lastName: this.state.user.lastName, email: this.state.user.email, password: this.state.user.password, weight : this.state.user.weight,
        height: evt.target.value, goal: this.state.user.goal, age: this.state.user.age, gender: this.state.user.gender}})
      //console.log(this.state.user)
  }
  else if(property == "Goal")
  {
      //console.log("email")
      this.setState({user: {firstName: this.state.user.firstName, lastName: this.state.user.lastName, email: this.state.user.email, password: this.state.user.password, weight : this.state.user.weight,
        height: this.state.user.height, goal: evt.target.value, age: this.state.user.age, gender: this.state.user.gender}})
      //console.log(this.state.user)
  }
  else if(property == "Age")
  {
      //console.log("email")
    
      this.setState({user: {firstName: this.state.user.firstName, lastName: this.state.user.lastName, email: this.state.user.email, password: this.state.user.password, weight : this.state.user.weight,
        height: this.state.user.height, goal: this.state.user.goal, age: evt.target.value, gender: this.state.user.gender}})
      //console.log(this.state.user)
  }
  else if(property == "Gender")
  {
      //console.log("email")
      this.setState({user: {firstName: this.state.user.firstName, lastName: this.state.user.lastName, email: this.state.user.email, password: this.state.user.password, weight : this.state.user.weight,
        height: this.state.user.height, goal: this.state.user.goal, age: this.state.user.age, gender: evt.target.value}})
      //console.log(this.state.user)
  }
  //console.log(this.state.user)
}

ShowPassword(evt)
{
  
  if(this.state.showPassword =="Password")
  {
      this.setState({showPassword: "text"});
      this.setState({icon: "fa fa fa-eye-slash"});
  }
  else{
    
    this.setState({showPassword: "Password"});
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
       <input type={this.state.showPassword} name="Password" className="input100" placeholder="Password" value={this.state.user.password} onChange={(e) => this.handleUser(e)}/>
       <span className="focus-input100"></span>
       </div>
       
       <div>
       <span style={{color: "red"}}>{this.state.errors["weight"]}</span>
       </div>
       <div className="wrap-input100 validate-input m-b-16" > 
       <input type="number" name="Weight" className="input100" placeholder="Weight(lbs)" value={this.state.user.weight} onChange={(e) => this.handleUser(e)}/>
       <span className="focus-input100"></span>
       </div>
       
       <div>
       <span style={{color: "red"}}>{this.state.errors["height"]}</span>
       </div>
       <div className="wrap-input100 validate-input m-b-16" > 
       <input type="number" name="Height" className="input100" placeholder="Height(in)" value={this.state.user.height} onChange={(e) => this.handleUser(e)}/>
       <span className="focus-input100"></span>
       </div>

       <div>
       <span style={{color: "red"}}>{this.state.errors["age"]}</span>
       </div>
       <div className="wrap-input100 validate-input m-b-16" > 
       <input type="number" name="Age" className="input100" placeholder="Age" value={this.state.user.age} onChange={(e) => this.handleUser(e)}/>
       <span className="focus-input100"></span>
       </div>
        <br />
       <div>
       <span style={{color: "red"}}>{this.state.errors["gender"]}</span>
       </div>
       <label name= "Genderlbl">Gender</label>
       <br/>
       <select name="Gender" className="custom-select" value={this.state.user.gender} onChange={(e) => this.handleUser(e)} type="text" >
        <option value="Select"> Select</option>
        <option value="M"> Male</option>
        <option value="F"> Female</option>
       </select>
       <br />
       <div>
       <span style={{color: "red"}}>{this.state.errors["goal"]}</span>
       </div>
       <label name= "GoalLbl">Goal</label>
       <br/>
       <select name="Goal" className="custom-select" value={this.state.user.goal} onChange={(e) => this.handleUser(e)} type="text" >
        <option value="Select"> Select</option>
        <option value="Gain Weight"> Gain Weight</option>
        <option value="Maintain"> Maintain</option>
        <option value="Loose Weight">Loose Weight </option>
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

