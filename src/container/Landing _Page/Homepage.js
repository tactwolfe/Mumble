import React,{Component} from 'react';

import './Homepage.scss';
//import of the image thats going to be in the header section in our landing page
import logo from '../../assets/Images/logo.png';
import headerIllustration from '../../assets/Images/header_illustration.svg';


class Homepage extends Component {
    render() {
            return(
               <div className="header" id="#home">
                    <img className='logo' src={logo} alt="logo"></img>
                    <img className='headImage' src={headerIllustration} alt="illustration"></img>
               </div>
            ) 

    }

           
}

export default Homepage;