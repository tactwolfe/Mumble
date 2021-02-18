import React ,{useState , useEffect} from 'react';
import {useAuth } from '../../Authentication/AuthProvider';
import {db} from '../../../firebase';


import './MyPost.css';

import Post from '../../../component/Post/Post';
import SideNavigation from '../../../component/SideNavigation/SideNavigation';

const HomePage =()=> {
 
    const {currentUser} = useAuth();
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

    console.log(posts);

    const fetchposts = posts.map(({id, post}) => {
            return <Post key={id} postId={id} imageUrl={post.imageUrl} posts={post.caption} email={post.email} likes={post.likes}/>
  
    })

    return(
            <div className="my-post">
                <SideNavigation/>
                <div className="my-post_postholder">
                    { posts.length === 0 ? <p className='my-post_empty'>You Have not posted anything yet</p> : fetchposts}
                </div>
            </div>
        );
    
}

export default HomePage;