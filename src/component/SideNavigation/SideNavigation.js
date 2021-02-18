import React,{useState} from 'react';
import {NavLink , useHistory} from 'react-router-dom';
import { useAuth } from '../../container/Authentication/AuthProvider';

import Logo from '../../assets/Images/logo.png';
import Logout from '../../assets/Images/logout.svg';
import './SideNavigation.css';

import HomeIcon from '@material-ui/icons/Home';
import MyLocationIcon from '@material-ui/icons/MyLocation';
import CreateIcon from '@material-ui/icons/Create';
import GroupIcon from '@material-ui/icons/Group';
import TelegramIcon from '@material-ui/icons/Telegram';

const SideNavigation =()=> {

    const history = useHistory();
    const [error , setError] = useState('');
    const {logout ,currentUser} = useAuth();


    async function handleLogout() {
        setError('')
        
        try {
            await logout()
            history.push('/login')
            
        } catch (error) {
            setError (error)
            console.log(error);
        }
    }
    return (
        <header className="side_navigation">
                    <nav className="side_nav">
                        <div>
                            <img src={Logo} alt="logo" className="side_nav_logo"/>
                            <h2 className="side_nav_name">MUMBLE</h2>
                        </div> 
                        <ul className="side_nav_ul">
                            {/* <li>{currentUser && currentUser.email}</li> */}
                            <li className="side_nav_links"><NavLink to="/homepage" exact className="side_nav_link"><HomeIcon/> Home</NavLink></li>
                            <li className="side_nav_links"><NavLink to="/my-post" exact className="side_nav_link"><MyLocationIcon/> My posts</NavLink></li>
                            <li className="side_nav_links"><NavLink to="/new-post"  className="side_nav_link"><CreateIcon/> Create post</NavLink></li>
                            <li className="side_nav_links"><NavLink to="/chatroom"  className="side_nav_link" target='_blank'><GroupIcon/> Chat Rooms</NavLink></li>
                            <li className="side_nav_links"><a href="https://mummblly.herokuapp.com/"  className="side_nav_link" target='_blank' rel="noreferrer"><TelegramIcon/> Random chat</a></li>
                        </ul>
                        <NavLink onClick={handleLogout}  to="/login" exact><img src={Logout} alt="logout" className="logout"/></NavLink>
                    </nav>
        </header>
    )
}

export default SideNavigation;
