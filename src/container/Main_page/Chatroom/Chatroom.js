import React , {Component} from 'react';
import {Switch ,Route} from 'react-router-dom';

import './Chatroom.css';

import Sidebar from '../../../component/Chatroom_component/Chatroom_sidebar_components/Sidebar';
import Chat from '../../../component/Chatroom_component/Chatroom_chat/Chat';
import ChatroomWelcomePage from '../../../component/Chatroom_component/ChatroomWelcome/ChatroomWelcomePage';


class ChatRoom extends Component {


    render(){
        return(
            <div className="chatroom">
                <div className="chatroom_body">
                    <Sidebar/>
                    <Switch>   
                        <Route path='/chatroom/rooms/:roomId' component={Chat}/>
                        <Route path='/chatroom' component={ChatroomWelcomePage}/>
                    </Switch>
                    
                    {/* <Chat/> */}
                </div>
            </div>
        );
    }
}

export default ChatRoom;