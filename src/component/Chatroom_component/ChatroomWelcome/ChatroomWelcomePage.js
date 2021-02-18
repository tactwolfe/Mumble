import React from 'react'

import './ChatroomWelcomePage.css'
import Logo from '../../../assets/Images/logo.png'

function ChatroomWelcomePage() {
    return (
        <div className="chatroom_welcome">
            <div className="chatroom_welcome-box">
                <div>
                    <img src={Logo} alt="logo" className='logo'/>
                    <h1 className="chatroom_welcome-heading">Welcome to our chatrooms</h1>
                    <p className="chatroom_welcome-subheading">click on any of the rooms on the sidebar to join or better create one yourself</p>
                </div>
                
            </div>
        </div>
    )
}

export default ChatroomWelcomePage;
