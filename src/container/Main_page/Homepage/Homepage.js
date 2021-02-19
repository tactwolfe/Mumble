import React , {useEffect, useState} from 'react';
import {db} from '../../../firebase';

import './Homepage.css';

import Post from '../../../component/Post/Post';
import SideNavigation from '../../../component/SideNavigation/SideNavigation';

const HomePage = ()=> {
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

        const fetchposts = posts.map(({id, post}) => {
            return <Post key={id} postId={id} imageUrl={post.imageUrl} posts={post.caption} email={post.email} likes={post.likes}/>
        })
        

        return(
                <div className="home">
                    <SideNavigation/>
                    <div className="home_postholder">
                        {posts.length === 0 ? <p className='home_empty'>No user have posted anything yet</p> : fetchposts}  
                    </div>
                </div>
        );
    }


export default HomePage;