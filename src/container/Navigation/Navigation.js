import React, { Component } from "react";

import  './Navigation.scss';


class Navigation extends Component {

    render(){
        return(
            <header className="Nav-links">
                <nav>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#home">About us</a></li>
                        <li><a href="#home">Features</a></li>
                        <li><a href="#home">Contact us</a></li>
                        <li><a href="/">Login</a></li>
                    </ul>  
                </nav>
            </header>
        );
    }

}

export default Navigation;
