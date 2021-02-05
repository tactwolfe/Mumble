import React , {useEffect, useState} from 'react';
import {NavLink , useHistory } from 'react-router-dom';
import { useAuth } from '../../Authentication/AuthProvider';
import {db} from '../../../firebase';

import './Homepage.css';

import Logo from '../../../assets/Images/logo.png';
import Logout from '../../../assets/Images/logout.svg';
import BackIllustration from '../../../assets/Images/backIllustration.svg';

import Post from '../../../component/Post/Post';

const HomePage = ()=> {

    const { logout , currentUser } = useAuth();
    const history = useHistory();
    const [error , setError] = useState('');
    const [posts , setPosts] =useState([])

    useEffect( ()=> {

        db.collection('posts').onSnapshot( snapshot =>{

            setPosts(snapshot.docs.map(doc => ({

                id:doc.id,
                post:doc.data()

                })
            ));
        })
    },[])

    console.log(posts);

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

    console.log(currentUser);

        const fetchposts = posts.map(({id, post}) => {
            return <Post key={id} imageUrl={post.imageUrl} posts={post.caption} email={post.email} />
        })
        

        return(
                <div className="home">
                <header className="home_navigation">
                    <nav className="home_nav">
                        <div>
                            <img src={Logo} alt="logo" className="home_nav_logo"/>
                            <h2 className="home_nav_name">MUMBLE</h2>
                        </div> 
                        <ul className="home_nav_ul">
                            <li>{currentUser && currentUser.email}</li>
                            <li className="home_nav_links"><NavLink to="/homepage" exact className="home_nav_link">Home</NavLink></li>
                            <li className="home_nav_links"><NavLink to="/my-post" exact className="home_nav_link">My posts</NavLink></li>
                            <li className="home_nav_links"><NavLink to="/new-post"  className="home_nav_link">Post Something</NavLink></li>
                            <li className="home_nav_links"><NavLink to="/chat-selection"  className="home_nav_link">Chat Rooms</NavLink></li>
                        </ul>
                        <NavLink onClick={handleLogout}  to="/login" exact><img src={Logout} alt="logout" className="logout"/></NavLink>
                    </nav>
                </header>
                <div className="home_postholder">
                    <img alt='back-img' src={BackIllustration} className="background_img"/>
                    {!posts ? null : fetchposts}
                    
                </div>
            </div>
        );
    }


export default HomePage;