import React from 'react';

import "./Footer.scss";

const footer = () => {

    const style={
        padding:'1rem',
        fontWeight: "bold"
    }

    const backStyle={
        backgroundImage: `linear-gradient(105deg,transparent 0%,transparent 45%,#333333 50%)`,
        backgroundSize: "100%"
    }

    return(
        <footer className="footer" style={backStyle}>
            <div className="footer_info">
                <p> &copy; Copyright Sitename. All rights Reserved. </p>

                <p>Made With ❤ by</p>
                <p>
                    <span className="one" style={style}>Anubhav</span>
                    <span className="two" style={style}>Aditya</span>
                    <span className="three" style={style}>Ankita</span>
                </p>

            </div>

            <div className="footer_contact">
                <form action="mailto:anubhav.blaze@gmail.com" method="post" encType="text/plain" className="form">

                    <h3 className="footer_heading">Contact Us</h3>

                    <div className="form_group">
                        <input type="text" className="form_input" placeholder="Full name" id="name" required/>
                        <label htmlFor="name" className="form_label">Full name</label>
                    </div>

                    <div className="form_group">
                        <input type="email" className="form_input" placeholder="Your Email" id="email" required/>
                        <label htmlFor="email" className="form_label">E-mail</label>
                    </div>

                    <input type="submit" className="form_button"/>
                </form>
                    
            </div>
            
        </footer>
    );
}

export default footer;