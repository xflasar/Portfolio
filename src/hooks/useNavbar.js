import React, { useState, useEffect } from 'react';
import About from '../components/About/About'
import Skills from '../components/Skills/Skills'
import Projects from '../components/Projects/Projects'
import Contact from '../components/Contact/Contact'
import '../assets/components/Other/overlayPage.scss'

export const useNavbar = (isMobile, antiSkillsBoxCollision, setActivePage) => {
  const [clickedButton, setClickedButton] = useState(null);

  const handleNavbar = (event, page) => {
    setActivePage(page);
    setClickedButton(event.target);
  };

  const handleAboutCallback = (childValue) => {
    setActivePage('');
    setTimeout(() => {
      setActivePage(childValue);
    }, 500);
  };

  const handleOverlayClose = () => {
    setActivePage('');
  };

  const handleNavbarPageRender = (activePage) => {
    if (!clickedButton) return null;
    
    const dom = clickedButton;
    const overlayStyle = {
      left: `${dom.getBoundingClientRect().x}px`,
      top: `${dom.getBoundingClientRect().y}px`,
    };

    switch (activePage) {
      case 'about':
        return (
          <div className='overlay-page' style={overlayStyle}>
            <About
              redirectTo={handleAboutCallback}
              onCloseOverlay={handleOverlayClose}
              isMobile={isMobile}
              antiSkillsBoxCollision={antiSkillsBoxCollision}
            />
          </div>
        );
      case 'skills':
        return (
          <div className='overlay-page' style={overlayStyle}>
            <Skills
              onCloseOverlay={handleOverlayClose}
              isMobile={isMobile}
              antiSkillsBoxCollision={antiSkillsBoxCollision}
            />
          </div>
        );
      case 'projects':
        return (
          <div className='overlay-page' style={overlayStyle}>
            <Projects onCloseOverlay={handleOverlayClose} isMobile={isMobile} />
          </div>
        );
      case 'contact':
        return (
          <div className='overlay-page' style={overlayStyle}>
            <Contact onCloseOverlay={handleOverlayClose} />
          </div>
        );
      default:
        return null;
    }
  };

  const handleNavAnimation = (event) => {
    event.target.classList.add('hoverAnim');
  };

  const handleNavAnimationEnd = (event) => {
    event.target.classList.remove('hoverAnim');
  };

  useEffect(() => {
    const linkClasses = ['.about-nav', '.skills-nav', '.projects-nav', '.contact-nav'];

    const updateLinkClass = async (index) => {
      if (index < linkClasses.length) {
        const link = document.querySelector(linkClasses[index]);

        if (link) {
          await new Promise((resolve) => setTimeout(resolve, 1000));
          link.className = linkClasses[index].split('.')[1];
          updateLinkClass(index + 1);
        }
      }
    };

    setTimeout(() => {
      updateLinkClass(0);
    }, 2000);
  }, []);

  return {
    handleNavbar,
    handleNavbarPageRender,
    handleNavAnimation,
    handleNavAnimationEnd,
  };
};
