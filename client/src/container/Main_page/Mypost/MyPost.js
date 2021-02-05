import React ,{useState , useEffect} from 'react';
import {NavLink , useHistory } from 'react-router-dom';
import {useAuth } from '../../Authentication/AuthProvider';
import {db} from '../../../firebase';


import './MyPost.css';

import Logo from '../../../assets/Images/logo.png';
import Logout from '../../../assets/Images/logout.svg';
import BackIllustration from '../../../assets/Images/backIllustration.svg';

import Post from '../../../component/Post/Post';



const HomePage =()=> {

    const [error , setError] = useState('');
    const {logout , currentUser} = useAuth();
    const history = useHistory();
    const [posts , setPosts] = useState([]);

  

    console.log(currentUser.email);

    useEffect( ()=> {

        db.collection('posts').where('email', '==' , currentUser.email ).onSnapshot( snapshot =>{

            setPosts(snapshot.docs.map(doc => ({

                id:doc.id,
                post:doc.data()

                })
            ));
        })
    },[])

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

    const fetchposts = posts.map(({id, post}) => {
            return <Post key={id} imageUrl={post.imageUrl} posts={post.caption} email={post.email} />
  
    })

        

        return(
            <div className="my-post">
                <header className="my-post_navigation">
                    <nav className="my-post_nav">
                        <div>
                            <img src={Logo} alt="logo" className="my-post_nav_logo"/>
                            <h2 className="my-post_nav_name">MUMBLE</h2>
                        </div> 
                        <ul className="my-post_nav_ul">
                            <li>{currentUser && currentUser.email}</li>
                            <li className="my-post_nav_links"><NavLink to="/homepage" exact className="my-post_nav_link">Home</NavLink></li>
                            <li className="my-post_nav_links"><NavLink to="/my-post" exact className="my-post_nav_link">My posts</NavLink></li>
                            <li className="my-post_nav_links"><NavLink to="/new-post"  className="my-post_nav_link">Post Something</NavLink></li>
                            <hr/>
                            <li className="my-post_nav_links"><NavLink to="/chat-selection"  className="my-post_nav_link">Chat Rooms</NavLink></li>
                        </ul>
                        <NavLink onClick={handleLogout} to="/logout" exact><img src={Logout} alt="logout" className="logout"/></NavLink>
                    </nav>
                </header>
                <div className="my-post_postholder">
                    <img alt='back-img' src={BackIllustration} className="background_img"/>
                    {fetchposts}
                </div>
            </div>
        );
    
}

export default HomePage;