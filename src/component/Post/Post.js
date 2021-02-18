import React,{useEffect ,useState} from 'react';
import {Avatar} from '@material-ui/core';
import CommentIcon from '@material-ui/icons/Comment';
import GradeIcon from '@material-ui/icons/Grade';
import {db} from '../../firebase';
import firebase from 'firebase';
import {useAuth} from '../../container/Authentication/AuthProvider';
import Comment from '../Comments/Comments';

import './Post.css';

const Post = (props) => {

    const {currentUser} = useAuth();
    const [seed , setSeed] = useState('');
    const[name,setName] =useState('');
    const[comments,setComments] =useState([]);
    const[comment,setComment] = useState('');
    const[trigger ,setTrigger]=useState(false);

    console.log(name);
    console.log(comment);

    useEffect(()=> {
        setSeed(Math.floor(Math.random()*5000));
    },[])

    useEffect(()=>{
        let unsubscribe; 
        if(props.postId){
            unsubscribe = db.collection('posts').doc(props.postId).collection('comments').onSnapshot((snapshot)=>{
                setComments(snapshot.docs.map((doc)=>doc.data()));
            })
        }

        return ()=> {
            unsubscribe();
        }

    },[props.postId])

    // console.log(props.imageUrl);
    // console.log(props.caption);

    const showCommentBox =()=> {
        setTrigger(!trigger);
    }

    const submitComment = (event)=>{

        event.preventDefault();

        db.collection('posts').doc(props.postId).collection('comments').add({
            name:name,
            comment : comment,
            email:currentUser.email
        })
        setName('');
        setComment('');
        // setTrigger(!trigger);
    }

    const sendLike = (e)=> {
        e.preventDefault();

        const increment = firebase.firestore.FieldValue.increment(1)

        db.collection('posts').doc(props.postId).update({likes: increment});

    }

    const commentList = comments.map((comment) => {

        return <Comment name={comment.name} comment={comment.comment}/>
             
            
    })

    return(
        <div className="post">
            <div className="post_header">
                <Avatar src={`https://avatars.dicebear.com/api/avataaars/${seed}.svg`}/>
            </div>
            {props.imageUrl? <img src={props.imageUrl} className="post_img" alt="post_image"></img> : null}
            <p className="post_text">{props.posts}</p>
            <div className="post_interactions">
                <div className="post_like">
                    <button className='post_buttons' onClick={sendLike}><GradeIcon/></button>
                    <p className='post_like_count'>{props.likes}</p>    
                </div>
                <button className='post_buttons' onClick={showCommentBox}><CommentIcon/></button>
            </div>
            {commentList}
            
            {trigger ? 
                <div className="post_comment">
                    <form onSubmit={submitComment} className="post_comment-form">
                        <input type="text" className="post_comment-inputs" placeholder='Enter a  name you want to comment as' value={name} onChange={e => setName(e.target.value)}/>
                        <input type="text" className="post_comment-inputs" placeholder='add a comment...' value={comment} onChange={e => setComment(e.target.value)}/>
                        <button disabled={!comment} className="post_comment-button" onClick={submitComment}>Comment</button>
                    </form>
                </div>
                :
                null
            }
            
        </div>
    );
}

export default Post;