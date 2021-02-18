import React from 'react';
import './Comments.css'

const Comments =(props)=>{
    return (
        <div className='comment'>
            <p className='comment_username'>{props.name}</p>
            <p className='comment_usercomment'>{props.comment}</p>
        </div>
    )
}

export default Comments;
