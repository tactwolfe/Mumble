import React from 'react'
import Aux from '../../../../hoc/Auxillary';
import {useAuth} from '../../../../container/Authentication/AuthProvider';


import './ChatBubble.css'

const ChatBubble = (props)=> {

    const {currentUser} = useAuth();

    
    return (
        <Aux>
            <p className={props.name === currentUser.email ? 'chat_reciever':'chat_message' }> 
                <span className="chat_username">{props.name}</span> 
                 {props.message}
                <span className="chat_timestamp">{props.timestamp}</span>
            </p>
        </Aux>
    )
}

export default ChatBubble;
