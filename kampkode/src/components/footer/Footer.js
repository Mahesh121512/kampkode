import React, { useState, useEffect } from 'react';
import './Footer.css';

const Footer = () => {
  const content = [
    { heading: 'Collaborative Editing', paragraph: 'Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.' },
    { heading: 'Real time changes', paragraph: 'See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.Version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.' },
    { heading: 'Version control', paragraph: 'Experience real-time updates and never stress about version control again. Our platform ensures that you'},
    { heading: 'Running out of content', paragraph: 'Experience real-time updates and never stress about version control again. Our platform ensures that you are re always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.' }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = (event) => {
    const scrollTop = event.target.scrollTop;
    const scrollHeight = event.target.scrollHeight;
    const clientHeight = event.target.clientHeight;
    const totalScrollable = scrollHeight - clientHeight;

    const scrollFraction = scrollTop / totalScrollable;
    const newIndex = Math.min(
      content.length - 1,
      Math.floor(scrollFraction * content.length)
    );

    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const container = document.querySelector('.footer-container');
    container.addEventListener('scroll', handleScroll);

    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  const backgroundColors = [
    'linear-gradient(to right, #ff7e5f, #feb47b, #86a8e7, #7f7fd5, #91eae4)',  // Gradient 1
    'linear-gradient(to right, #6a11cb, #2575fc, #ffafbd, #ffc3a0, #ffecd2)',  // Gradient 2
    'linear-gradient(to right, #00c6ff, #0072ff, #17ead9, #6078ea, #f0c27b)',  // Gradient 3
    'linear-gradient(to right, #f7971e, #ffd200, #ff512f, #dd2476, #fffc00)',  // Gradient 4
    'linear-gradient(to right, #fc5c7d, #6a82fb, #fe8c00, #f83600, #f9d423)'   // Gradient 5
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="left-section">
          {content.map((item, index) => (
            <div key={index} style={{ marginBottom: '20px' }}>
              <h1>{item.heading}</h1>
              <p>{item.paragraph}</p>
            </div>
          ))}
        </div>

        <div className="right-section">
          <div
            className="rectangle"
            style={{ background: backgroundColors[currentIndex] }}
          >
            <h2>Collaborative Editing</h2>
            {/* <p>{content[currentIndex].paragraph}</p> Added paragraph to reflect dynamic content */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;