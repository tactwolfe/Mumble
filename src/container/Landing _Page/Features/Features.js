import React from 'react';

import Aux from '../../../hoc/Auxillary';

//features svg imports
import Intro from '../../../assets/Images/feature_intro.svg';
import Posting from '../../../assets/Images/posting-feature.svg';
import Chatting from '../../../assets/Images/chatting-features.svg';
import Expert from '../../../assets/Images/expert-features.svg';

import './Features.css';

//bootstrap components
import Carousel from 'react-bootstrap/Carousel';

const features = ()=> {
    return(
        <Aux >
            <Carousel className="feature-section" nextLabel="" prevLabel="" id="features">
                <Carousel.Item>
                    <img className="feature-section_img" src={Intro} alt="First slide"/>
                    <Carousel.Caption className="feature-section_details">
                        <h3>Mumble</h3>
                        <p>There is so much you could do in MUMBLE.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img className="feature-section_img" src={Posting} alt="Third slide"/>
                    <Carousel.Caption className="feature-section_details">
                        <h3>Posting</h3>
                        <p>Post all your secret and desires anonomously.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img className="feature-section_img" src={Chatting} alt="Third slide"/>
                    <Carousel.Caption className="feature-section_details">
                        <h3>Chatting</h3>
                        <p>Interact 1 on 1 with other user of MUMBLE randomly or better talk with everyone in our Group chat section.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                {/* <Carousel.Item>
                    <img className="feature-section_img" src={Expert} alt="fourth SLide"/>
                    <Carousel.Caption className="feature-section_details">
                        <h3>Expert</h3>
                        <p>we have a panel of experts who always goes though your post and give their own take on how to handle situation you are going through.</p>
                    </Carousel.Caption>
                </Carousel.Item> */}

            </Carousel>
        </Aux>
    );
}

export default features;