import React from 'react';

import './HomepageBlurredHolder.scss';


import Homepage from './Homepage';
import Navigation from "../Navigation/Navigation";


const blurredHolder = (props) => {
    return (
        <div className="HomepageBlurredHolder">
            <Navigation/>
            <Homepage/>
        </div>
    );
}

export default blurredHolder;