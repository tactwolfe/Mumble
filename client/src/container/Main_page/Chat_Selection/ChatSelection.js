import React , {Component} from 'react';
import {NavLink} from 'react-router-dom';
// import axios from 'axios';

import './ChatSelection.css';

import Logo from '../../../assets/Images/logo.png';
import Logout from '../../../assets/Images/logout.svg';
import BackIllustration from '../../../assets/Images/backIllustration.svg';

import ChatRoomSelector from '../../../component/Chatroomselector/ChatRoomSelector';

class ChatSelection extends Component {

    // componentDidMount() {
    //     // axios.get()
    //     // axios.get()
    // }

    render(){

        return(
            <div className="chat-selection">
                <header className="chat-selection_navigation">
                    <nav className="chat-selection_nav">
                        <div className="chat-selection_nav_logo-box">
                            <img src={Logo} alt="logo" className="chat-selection_nav_logo"/>
                            <h2 className="chat-selection_nav_name">MUMBLE</h2>
                        </div> 
                        <ul className="chat-selection_nav_ul">
                            <li className="chat-selection_nav_links"><NavLink to="/homepage" exact className="chat-selection_nav_link">Home</NavLink></li>
                            <li className="chat-selection_nav_links"><NavLink to="/my-post" exact className="chat-selection_nav_link">My posts</NavLink></li>
                            <li className="chat-selection_nav_links"><NavLink to="/new-post"  className="chat-selection_nav_link">Post Something</NavLink></li>
                            <li className="chat-selection_nav_links"><NavLink to="/chat-selection"  className="chat-selection_nav_link">Chat Rooms</NavLink></li>
                        </ul>
                        <NavLink to="/logout" exact><img src={Logout} alt="logout" className="logout" /></NavLink>
                    </nav>
                </header>
                <div className="chat-selection_postholder">
                    <img alt='back-img' src={BackIllustration} className="background_img"/>
                    <ChatRoomSelector/>
                </div>
            </div>
        );
    }
}

export default ChatSelection;