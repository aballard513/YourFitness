import React from 'react';
import axios from 'axios';
import store from '../store'

export default class UserView extends React.Component {

    constructor(props){
      super(props);
      this.state = {view : "initial", objs : []}
      this.checkState = this.checkState.bind(this);
      this.ViewUsers = this.ViewUsers.bind(this);
      //this.render = this.render.bind(this);
      //var Users  {string:name}
    }

    ViewUsers(e){

        var bodyFormData = new FormData();
      
        axios({
          method: 'get',
          url: 'http://localhost:57515/api/user',
          //data: bodyFormData,
          config: { headers: {'Content-Type': 'multipart/form-data' }}
        })
        .then((response) => {
          //handle success
          this.setState( {objs : response.data});
          //this.setState({view: "users"});
         
          //return obj;*/
          //var d = response.data
          //console.log(d[0].firstName);
          console.log("success")
      })
      .catch(function (response) {
          //handle error;
          console.log("failed");
      });

      this.setState({view: "users"});
      //console.log(this.state.objs);
      }

      checkState(){
        return this.state.view;
        }

    render(){
        if(this.checkState() == "initial"){
            return <div><button onClick={this.ViewUsers}>ViewUsers</button></div>
        }
        else{
            //console.log("userview")
            let el = this.state.objs.map(objects =>
                <div key ={objects.id} > {objects.firstName} {objects.lastName} </div>
            )
            
            return(<div>
            {el}
            </div>
            )}
}
}