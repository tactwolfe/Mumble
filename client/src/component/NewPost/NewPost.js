import React from 'react';
import './NewPost.css';

const newPost =  () => {
    return(
        <div className="new_post">   
            <form  className="new_post_form">
                <label htmlFor="write" className="new_post_form_label">Write whatever you have in your Mind 🧐</label><br/>
                <textarea name="write" id="write" cols="100" rows="18" className="new_post_form_textarea" ></textarea><br/>
                <input type="submit" className="new_post_form_button"/>
            </form>
        </div>
    );
}

export default newPost;