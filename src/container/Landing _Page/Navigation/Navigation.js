import React, { Component } from "react";

import  './Navigation.css';


class Navigation extends Component {

    render(){
        return(
            <header className="Nav-links">
                <nav>
                    <ul className="Nav-links__ul">
                        <li className="Nav-links__li"><a className="Nav-links__a" href="#home">Home</a></li>
                        <li className="Nav-links__li"><a className="Nav-links__a" href="#about">About us</a></li>
                        <li className="Nav-links__li"><a className="Nav-links__a" href="#features">Features</a></li>
                        <li className="Nav-links__li"><a className="Nav-links__a" href="#footer">Contact us</a></li>
                        <li className="Nav-links__li"><a className="Nav-links__login" href="/homepage">Login</a></li>
                    </ul> 
                </nav>
            </header>
        );
    }

}

export default Navigation;
