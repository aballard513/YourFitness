import React from 'react';
import axios from 'axios';
import store from '../store'
import HomeView from './Home.js'

export default class UserView extends React.Component {

    constructor(props){
      super(props);
      this.state = {view : "initial", objs : []}
      this.checkState = this.checkState.bind(this);
      this.ViewUsers = this.ViewUsers.bind(this);
      this.Register = this.Register.bind(this);
    }

    ViewUsers(e){

        var bodyFormData = new FormData();
      
        axios({
          method: 'get',
          url: 'http://localhost:57515/api/user',
          config: { headers: {'Content-Type': 'multipart/form-data' }}
        })
        .then((response) => {
          //handle success
          this.setState( {objs : response.data});
      })
      .catch(function (response) {
          //handle error;
          console.log("failed");
      });

      this.setState({view: "users"});
      }

      checkState(){
        return this.state.view;
        }

        Register(){
            this.setState({view: "register"})
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
        if(this.checkState() == "initial"){
            return <div><button onClick={this.ViewUsers}>View All Users</button></div>
        }
        else if(this.checkState() == "register")
        {
            return (
                    <div>
                        <HomeView />
                    </div>
                    )
        }
        else
        {
            
            let el = this.state.objs.map(objects =>
                <div key ={objects.id} > {objects.firstName} {objects.lastName} <button onClick={this.UpdateUser}>update</button></div>
            )
            
            return(<div>
            {el}
            <button onClick={this.Register}>Back</button>
            </div>
            )}
        }
}