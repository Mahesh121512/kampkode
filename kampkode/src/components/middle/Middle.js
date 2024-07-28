// src/components/middle/Middle.js
import React from 'react';
import './Middle.css';
// import reactLogo from './react-logo.png';
// import htmlLogo from './html-logo.png';
// import cssLogo from './css-logo.png';

const Middle = () => {
  return (
    <div className="middle-section">
      <div className="step-up-circles">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        
        
        
        
        {/* <img src={reactLogo} alt="React Logo" className="orbiting-logo react-logo" />
        <img src={htmlLogo} alt="HTML Logo" className="orbiting-logo html-logo" />
        <img src={cssLogo} alt="CSS Logo" className="orbiting-logo css-logo" /> */}
      </div>
      <div className="content">
        <h1>We've really spread up our workflow!</h1>
        <p><span className='span'>We've just released a new update!</span> Check out the all new dashboard view. Pages and now load faster.you can try us<br/>for free for 30 days.</p>
        <p>Join 4,000+ companies already growing</p>
        <div className="buttons">
          <button className="start-learning-button">
            Start Learning Today &#8594;
          </button>
          <button className="join-now-button">
            Join Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Middle;
