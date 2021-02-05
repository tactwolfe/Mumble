import React from 'react';

import './Post.css';

const post = (props) => {

    // const style = {
    //     height: "50vh",
    //     width: "100%",
    //     backgroundImage : `url(props.imageUrl)`,
    //     backgroundSize : "cover",
    //     backgroundPosition : "center",

    // }

    console.log(props.imageUrl);
    console.log(props.caption);

    return(
        <div className="post">
            <h1>{props.email}</h1>
            {props.imageUrl !== null ? <img src={props.imageUrl} className="post_img" alt="post_image"></img> : null}
            <p className="post_para">{props.posts}</p>
        </div>
    );
}

export default post;