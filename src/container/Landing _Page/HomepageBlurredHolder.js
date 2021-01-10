import React from 'react';

import './HomepageBlurredHolder.scss';


import Homepage from './Homepage';
import Navigation from "../Navigation/Navigation";
import About from '../About_us/About';
import Features from "../Features/Features";
import Footer from "../Footer/Footer";


const blurredHolder = (props) => {
    return (
        <div className="HomepageBlurredHolder">
            <Navigation/>
            <Homepage/>
            <About/>
            <Features/>
            <Footer/>
        </div>
    );
}

export default blurredHolder;