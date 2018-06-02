import Axios from 'axios';

var url = "https://yourfitness-business.azurewebsites.net/api/";


export default class Auth {
  constructor(props)
  {
    
  }

  getWorkOuts(bodypart)
  {
    return new Promise((resolve,reject)=>{
      Axios.get(url + "Exercise/" + bodypart).then((result) => {
          resolve(result.data);
          }).catch((err) => {
            console.log(err);
          });
    }
  )

    
  }
}