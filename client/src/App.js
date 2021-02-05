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
import AuthProvider from './container/Authentication/AuthProvider';
import PrivateRoute from './component/Private_route/PrivateRoute';


class App extends Component {


  render(){
    return (
      <AuthProvider>
          <div className="App">
            <Route path="/" exact component={Landing}/>
            <Route path="/login" exact component={Login}/> 
            <Route path="/register" exact component={Register}/>
            <Route path="/expert-login" exact component={ExpertLogin}/>
            <PrivateRoute exact path="/homepage" component={Homepage}/>
            <PrivateRoute path="/my-post" exact component={MyPost}/>
            <PrivateRoute path="/new-post" exact component={NewPost}/>
            <PrivateRoute path="/chat-selection" exact component={ChatSelection}/>
            <PrivateRoute path="/chatroom"  component={ChatRoom}/>
        </div>
       </AuthProvider>
    );
  }

}

export default App;
