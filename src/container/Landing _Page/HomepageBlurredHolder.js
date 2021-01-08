import React from 'react';

import './HomepageBlurredHolder.scss';


import Homepage from './Homepage';
import Navigation from "../Navigation/Navigation";
import About from '../About_us/About';
import Features from "../Features/Features";


const blurredHolder = (props) => {
    return (
        <div className="HomepageBlurredHolder">
            <Navigation/>
            <Homepage/>
            <About/>
            <Features/>
        </div>
    );
}

export default blurredHolder;