import React from 'react';
import axios from 'axios';
export default class BusinessService {

    constructor(props){
      this.GetStats = this.GetStats.bind(this);
    }
    
    GetStats(email){

        axios.get(
          'http://localhost:57515/api/user/?email=' + email
        )
        .then(response=> {
            console.log(response);
      })
      .catch(response=> {
          //handle error;
          console.log(response);
      });

      }


}  
