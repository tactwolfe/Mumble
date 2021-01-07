import React from 'react';

import './HomepageBlurredHolder.scss';


import Homepage from './Homepage';
import Navigation from "../Navigation/Navigation";
import About from '../About_us/About';


const blurredHolder = (props) => {
    return (
        <div className="HomepageBlurredHolder">
            <Navigation/>
            <Homepage/>
            <About/>
        </div>
    );
}

export default blurredHolder;