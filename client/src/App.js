import React, { Component } from 'react';
import './App.scss';

import {Route} from 'react-router-dom';



//my own components import
import Landing from './container/Landing _Page/LandingPage';
import Login from './container/Authentication/Login/Login';
import ExpertLogin from './container/Authentication/Expert_login/ExpertLogin';
import Register from './container/Authentication/Register/Register';
import Homepage from './container/Main_page/Homepage/Homepage';
import MyPost from './container/Main_page/Mypost/MyPost';
import NewPost from './container/Main_page/NewpostContainer/NewpostContainer';
import ChatSelection from './container/Main_page/Chat_Selection/ChatSelection';
import ChatRoom from './container/Main_page/Chatroom/Chatroom';


class App extends Component {

  render(){
    return (
      <div className="App">
          <Route path="/" exact component={Landing}/>
          <Route path="/login" exact component={Login}/>
          <Route path="/register" exact component={Register}/>
          <Route path="/expert-login" exact component={ExpertLogin}/>
          <Route path="/homepage" exact component={Homepage}/>
          <Route path="/my-post" exact component={MyPost}/>
          <Route path="/new-post" exact component={NewPost}/>
          <Route path="/chat-selection" exact component={ChatSelection}/>
          <Route path="/chatroom"  component={ChatRoom}/>
      </div>
    );
  }

}

export default App;
