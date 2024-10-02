import React from 'react';
import { createPortal } from 'react-dom';
import '../../../assets/components/Home/Home.scss';
import { useNavbar } from '../../../hooks/useNavbar';
import GitActivity from '../../Github/activityContainer';
import { useLocale } from '../../../hooks/useLocale';

const Navbar = ({isMobile, antiSkillsBoxCollision, githubActivityShow, handleGithubActivityShow, activePage, setActivePage }) => {
  const {
    handleNavbar,
    handleNavbarPageRender,
    handleNavAnimation,
    handleNavAnimationEnd,
  } = useNavbar(isMobile, antiSkillsBoxCollision, setActivePage);

  const { localeData } = useLocale('Home')
  if (!localeData) return null

  return (
    <>
      {createPortal(handleNavbarPageRender(activePage), document.querySelector('#portal'))}
      <div className="prof-image">
        <img src="./prof-image.webp" className='profile-img' alt='Profile picture'/>
        <div className='links'>
          <a href='#About' className={'about-nav load-in'} onClick={(e) => handleNavbar(e, 'about')}>
            <span className='navBubble' onMouseEnter={handleNavAnimation} onAnimationEnd={handleNavAnimationEnd} />
            <span className='nav-title'>{localeData?.AboutLink}</span>
          </a>
          <a href='#Skills' className="skills-nav load-in" onClick={(e) => handleNavbar(e, 'skills')}>
            <span className='navBubble' onMouseEnter={handleNavAnimation} onAnimationEnd={handleNavAnimationEnd} />
            <span className='nav-title'>{localeData?.SkillsLink}</span>
          </a>
          <a href='#Projects' className="projects-nav load-in disabled">
            <span className='navBubble' onMouseEnter={handleNavAnimation} onAnimationEnd={handleNavAnimationEnd} />
            <span className='nav-title'>{localeData?.ProjectsLink}</span>
          </a>
          <a href='#Contact' className="contact-nav load-in" onClick={(e) => handleNavbar(e, 'contact')}>
            <span className='navBubble' onMouseEnter={handleNavAnimation} onAnimationEnd={handleNavAnimationEnd} />
            <span className='nav-title'>{localeData?.ContactLink}</span>
          </a>
          {isMobile && (
            <button
              type='button'
              className={githubActivityShow ? 'github-activity-button-show active' : 'github-activity-button-show'}
              onClick={handleGithubActivityShow}
            >
              <img src='../assets/home/github-mark-white.webp' alt='GitHub Activity'/>
              GitHub Activity
            </button>
          )}
        </div>
      </div>
      <div className={githubActivityShow ? 'github-container active' : isMobile ? 'github-container deactivated' : 'github-container'}>
        <GitActivity />
      </div>
    </>
  );
};

export default Navbar;
