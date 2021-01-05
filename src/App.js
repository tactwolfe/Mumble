import React, { Component } from 'react';
import './App.scss';


//my own components import
import Landing from './container/Landing _Page/LandingPage';


class App extends Component {

  render(){
    return (
      <div className="App">
          <Landing/>
      </div>
    );
  }

}

export default App;
