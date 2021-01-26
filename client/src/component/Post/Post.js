import React from 'react';

import './Post.css';

const post = (props) => {

    return(
        <div className="post">
            <p className="post_para">{props.posts}</p>
        </div>
    );
}

export default post;