import React from 'react';
import '../../assets/components/Footer/Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <a className='linkedin' href='https://www.linkedin.com/in/xflasar' rel='noreferrer' target='_blank'>
          <img src='./assets/home/linkedin-img.webp' className='linkedin-img'/>
        </a>
        <p className="footer-text">© 2023 Martin Flasar. All rights reserved. </p>
        <a className='github' href='https://github.com/xflasar' rel='noreferrer' target='_blank'>
          <img src='./assets/home/github-mark-white.webp' className='github-img'/>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
