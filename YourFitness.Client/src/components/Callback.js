import React, { Component } from 'react';
import loading from '../assets/images/loading.svg';

class Callback extends Component {
  render() {
    //const style = //...

    return (
      <div>
        <img src={loading} alt="loading"/>
      </div>
    );
  }
}

export default Callback;