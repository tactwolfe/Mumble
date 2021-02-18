import React from "react";

import AboutIllustration from '../../../assets/Images/About_us_illustration.svg';

import './About.css';


const about = () => {

    const style = {
        fontWeight: 'bold',
        color: "#5C62E2",
        fontSize: "2rem"
    }

    return(
        <div className="about" id="about">
            <img className="about__img" src={AboutIllustration} alt="about us illustration"></img>
            <p className="about__description">In <span style={style}>MUMBLE</span> we aim to create a community which will provide a safe space for anyone who want to let it out. 
            you can post whatever is in your heart or can also have 1 to 1 interaction with another random user ,
            but the best part is you will be completely anonomous 🤫 ,without the fear of being judged. so what are you wating for hop on... 😀</p>
        </div>
    );
}

export default about;