import React from 'react';


const pageTheme = (props) => {

    const divOneStyle = {
        height:'100vh',
        width:'100vw',
        backgroundSize:'cover',
        backgroundRepeat:'no-repeat',
        clipPath: `polygon(64% 0, 100% 0, 100% 100%, 38% 100%)`,
        backgroundColor : "#5C62E2",

      }
  
      const divTwoStyle = {
        height : '100vh',
        width : '100vw',
        backgroundSize:'cover',
        backgroundRepeat:'no-repeat',
        clipPath: `polygon(72% 0, 82% 0, 82% 100%, 52% 100%)`,
        backgroundColor : '#D6ABF4',

      }
  
      const divThreeStyle = {
        height : '100vh',
        width : '100vw',
        backgroundSize:'cover',
        backgroundRepeat:'no-repeat',
        clipPath: `polygon(76% 52%, 82% 52%, 82% 100%, 76% 100%)`,
        backgroundColor : "#FFA500",

      }

    return (
        <div style={divOneStyle}>
            <div style={divTwoStyle}>
                <div style={divThreeStyle}></div>
            </div>
      </div>
    );
}

export default pageTheme ; 