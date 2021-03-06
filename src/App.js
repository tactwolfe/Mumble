import React, { Component } from 'react';
import './App.scss';

import {Route} from 'react-router-dom';



//my own components import
import Landing from './container/Landing _Page/LandingPage';
import Login from './container/Authentication/Login/Login';
import ForgetPassword from './container/Authentication/Forget Password/ForgetPassword';
import Register from './container/Authentication/Register/Register';
import Homepage from './container/Main_page/Homepage/Homepage';
import MyPost from './container/Main_page/Mypost/MyPost';
import NewPost from './container/Main_page/NewpostContainer/NewpostContainer';
// import ChatSelection from './container/Main_page/Chat_Selection/ChatSelection';
import ChatRoom from './container/Main_page/Chatroom/Chatroom';
// import RandomChat from './container/Main_page/Random_chat/RandomChat';
// import Random from './container/Main_page/Random/Random';
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
            <Route path="/forget-password" exact component={ForgetPassword}/>
            <PrivateRoute exact path="/homepage" component={Homepage}/>
            <PrivateRoute path="/my-post" exact component={MyPost}/>
            <PrivateRoute path="/new-post" exact component={NewPost}/>
            <Route path="/chatroom"  component={ChatRoom}/>

     
        </div>
       </AuthProvider>
    );
  }

}

export default App;
