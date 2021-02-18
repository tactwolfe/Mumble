import React  from 'react';

import './NewpostContainer.css';


import BackIllustration from '../../../assets/Images/backIllustration.svg';

import NewPost from '../../../component/NewPost/NewPost';
import SideNavigation from '../../../component/SideNavigation/SideNavigation';

const NewPostContainer = ()=> {

        return(
            <div className="new-post">
                <SideNavigation/>
                <div className="new-post_postholder">
                    <img alt='back-img' src={BackIllustration} className="background_img"/>
                    <NewPost/>
                </div>
            </div>
        );
}

export default NewPostContainer;