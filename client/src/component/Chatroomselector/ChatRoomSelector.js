import React ,{useState}from 'react';
import {Link} from 'react-router-dom';

import './ChatRoomSelector.css'


const ChatRoomSelector = () => {


    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    return(

        <div className="chat-room">
            <div className="chat-room_input-box">
                <input type="text" className="chat-room_input" name="username" placeholder="Enter the username you want to use " onChange={(event) => setName(event.target.value)}/>
                <label htmlFor="username" className="chat-room_label">Enter the username u want to use </label>
            </div>
            <div className="chat-room_input-box">
                <input type="text" className="chat-room_input" name="room" placeholder="Enter the name of the room you want to join" onChange={(event) => setRoom(event.target.value)}/>
                <label htmlFor="room" className="chat-room_label">Enter the name of the room you want to join</label>
            </div> 

            <Link  onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chatroom?name=${name}&room=${room}`}>
                <button className="chat-room_button" type="submit">Join Chat</button>  
            </Link>
            

            <p className="chat-room_instruction">Some useful Tips :</p>
            <ul className="chat-room_instructions">
                <li className="chat-room_instructions-items"> We know everyone likes to use that one cool username everywhere they need one but we urge you to keep changing your username everytime when you join one of our chatroom even the same one again so you could keep that element of secrecy around you always 😀 </li>
                <li className="chat-room_instructions-items"> There are so many chat room you could join such as : family , relationship , career , movies , Tv-series and so much. Even better create one yourself and wait who knows someone else might be trying to join the same 😉 </li>
            </ul>
        </div>

    );

}

export default ChatRoomSelector;