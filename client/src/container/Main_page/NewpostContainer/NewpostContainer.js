import React , {Component} from 'react';
import {NavLink} from 'react-router-dom';
import axios from 'axios';

import './NewpostContainer.css';

import Logo from '../../../assets/Images/logo.png';
import Logout from '../../../assets/Images/logout.svg';
import BackIllustration from '../../../assets/Images/backIllustration.svg';

import NewPost from '../../../component/NewPost/NewPost';

class NewPostContainer extends Component {

    // componentDidMount() {
    //     // axios.get()
    //     // axios.get()
    // }

    render(){

        return(
            <div className="new-post">
                <header className="new-post_navigation">
                    <nav className="new-post_nav">
                        <div className="new-post_nav_logo-box">
                            <img src={Logo} alt="logo" className="new-post_nav_logo"/>
                            <h2 className="new-post_nav_name">MUMBLE</h2>
                        </div> 
                        <ul className="new-post_nav_ul">
                            <li className="new-post_nav_links"><NavLink to="/homepage" exact className="new-post_nav_link">Home</NavLink></li>
                            <li className="new-post_nav_links"><NavLink to="/my-post" exact className="new-post_nav_link">My posts</NavLink></li>
                            <li className="new-post_nav_links"><NavLink to="/new-post"  className="new-post_nav_link">Post Something</NavLink></li>
                            <li className="new-post_nav_links"><NavLink to="/chat-selection"  className="new-post_nav_link">Chat Rooms</NavLink></li>
                        </ul>
                        <NavLink to="/logout" exact><img src={Logout} alt="logout" className="logout" /></NavLink>
                    </nav>
                </header>
                <div className="new-post_postholder">
                    <img alt='back-img' src={BackIllustration} className="background_img"/>
                    <NewPost/>
                </div>
            </div>
        );
    }
}

export default NewPostContainer;