import React, { Component } from 'react';
import logo from './Global/images/logo.svg';
import './Global/css/App.css';
import './Global/css/global.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      algo:"algo"
    }
  }
  render() {
    console.log(this.state);
    const { children } = this.props;
    return (
      <div>
        {children}
      </div>
    );
  }
}

export default App;
