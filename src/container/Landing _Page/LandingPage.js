import React from 'react';


import Theme from '../Landing _Page/Landing_page_theme/Theme';
import HomepageBlurredHolder from '../Landing _Page/HomepageBlurredHolder';
import Aux from "../../hoc/Auxillary";


const landing = () => {
    return (
        <Aux>
            <Theme/>
            <HomepageBlurredHolder/>
        </Aux>
    );
}

export default landing;