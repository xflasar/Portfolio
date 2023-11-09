import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import '../../assets/components/Home/Home.scss'
import About from '../About/About'
import Skills from '../Skills/Skills'
import Projects from '../Projects/Projects'
import Contact from '../Contact/Contact'

// Needs refactoring
// custom hooks

const Home = () => {
  const isBrowser = typeof window !== 'undefined'

  const [activePage, setActivePage] = useState('')
  const [clickedButton, setClickedButton] = useState(null)
  const [isMobile, setIsMobile] = useState(isBrowser ? window.matchMedia('(pointer:fine)').matches : undefined)
  const [antiSkillsBoxCollision, setAntiSkillsBoxCollision] = useState(isBrowser ? window.matchMedia('(pointer:fine)').matches : undefined)

  useEffect(() => {
    // TODO: Problematic with lower screen laptops change
    // this to be able to show on lower screens of laptops
    function antiSkillsBoxCollisionFn () {
      if (window.innerHeight < 1050) {
        setAntiSkillsBoxCollision(true)
      } else {
        setAntiSkillsBoxCollision(false)
      }
    }

    if (isMobile) {
      if (antiSkillsBoxCollision) {
        window.removeEventListener('resize', antiSkillsBoxCollisionFn)
        setAntiSkillsBoxCollision(false)
      }
      return
    }

    window.addEventListener('resize', antiSkillsBoxCollisionFn)

    return () => {
      window.removeEventListener('resize', antiSkillsBoxCollisionFn)
    }
  }, [isMobile])

  // FIXME: [PORTFOLIO-14] problem with changing from mobile to desktop and reverse
  // NOTFIXED!
  useEffect(() => {
    function handleOrientationChange (event) {
      console.log('run', antiSkillsBoxCollision, isMobile)
      const { matches, media } = event
      if (matches) {
        const fnTouch = function () {
          return window.matchMedia('(pointer:fine)').matches
        }

        if (fnTouch) {
          console.log('Touchy')
          setAntiSkillsBoxCollision(true)
        } else {
          console.log('Touchy not')
          setAntiSkillsBoxCollision(false)
        }

        if (media === '(orientation: portrait)') {
          console.log('portrait')
          setIsMobile(true)
        } else if (media === '(orientation: landscape)') {
          console.log('landscape')
          setIsMobile(false)
        }
      }
    }
    const mediaQueryPortrait = window.matchMedia('(orientation: portrait)')
    const mediaQueryLandscape = window.matchMedia('(orientation: landscape)')

    if (mediaQueryPortrait.matches) {
      setIsMobile(true)
    } else if (mediaQueryLandscape.matches) {
      setIsMobile(false)
    }

    mediaQueryPortrait.addEventListener('change', handleOrientationChange)
    mediaQueryLandscape.addEventListener('change', handleOrientationChange)

    return () => {
      mediaQueryPortrait.removeEventListener('change', handleOrientationChange)
      mediaQueryLandscape.removeEventListener('change', handleOrientationChange)
    }
  }, [])

  const handleNavbar = (event, page) => {
    setActivePage(page)
    setClickedButton(event.target)
  }

  const handleAboutCallback = (childValue) => {
    setActivePage('')
    setTimeout(() => {
      setActivePage(childValue)
    }, 500)
  }

  const handleOverlayClose = () => {
    setActivePage('')
  }

  const handleNavbarPageRender = () => {
    let element = null

    if (!clickedButton) return
    const dom = clickedButton

    switch (activePage) {
      case 'about':
        element = <div className='overlay-page' style={{ left: `${dom.getBoundingClientRect().x}px`, top: `${dom.getBoundingClientRect().y}px` }}><About redirectTo={handleAboutCallback} onCloseOverlay={handleOverlayClose} isMobile={isMobile} antiSkillsBoxCollision={antiSkillsBoxCollision} /></div>
        break
      case 'skills':
        element = <div className='overlay-page' style={{ left: `${dom.getBoundingClientRect().x}px`, top: `${dom.getBoundingClientRect().y}px` }}><Skills onCloseOverlay={handleOverlayClose} isMobile={isMobile} antiSkillsBoxCollision={antiSkillsBoxCollision} /></div>
        break
      case 'projects':
        element = <div className='overlay-page' style={{ left: `${dom.getBoundingClientRect().x}px`, top: `${dom.getBoundingClientRect().y}px` }}><Projects onCloseOverlay={handleOverlayClose} isMobile={isMobile} /></div>
        break
      case 'contact':
        element = <div className='overlay-page' style={{ left: `${dom.getBoundingClientRect().x}px`, top: `${dom.getBoundingClientRect().y}px` }}><Contact onCloseOverlay={handleOverlayClose} /></div>
        break
    }
    return element
  }

  const handlePageOutsideClick = (event) => {
    const clickTarget = event.target
    if (!clickTarget) return

    const aboutPage = document.querySelector('.about')
    const aboutLink = document.querySelector('.about-nav')
    const skillsPage = document.querySelector('.skills')
    const skillsLink = document.querySelector('.skills-nav')
    const projectsPage = document.querySelector('.projects')
    const projectsLink = document.querySelector('.projects-nav')
    const contactPage = document.querySelector('.contact')
    const contactLink = document.querySelector('.contact-nav')

    if (((aboutPage && !aboutPage.contains(clickTarget)) && (aboutLink && !aboutLink.contains(clickTarget))) || ((skillsPage && !skillsPage.contains(clickTarget)) && (skillsLink && !skillsLink.contains(clickTarget))) || ((projectsPage && !projectsPage.contains(clickTarget)) && (projectsLink && !projectsLink.contains(clickTarget))) || ((contactPage && !contactPage.contains(clickTarget)) && (contactLink && !contactLink.contains(clickTarget)))) {
      setActivePage('')
    }
  }

  const handleNavAnimation = (event) => {
    event.target.classList.add('hoverAnim')
  }

  const handleNavAnimationEnd = (event) => {
    event.target.classList.remove('hoverAnim')
  }

  useEffect(() => {
    const linkClasses = ['.about-nav', '.skills-nav', '.projects-nav', '.contact-nav']

    const updateLinkClass = async (index) => {
      if (index < linkClasses.length) {
        const link = document.querySelector(linkClasses[index])

        if (link) {
          await new Promise((resolve) => setTimeout(resolve, 1000))
          link.removeAttribute('class')
          link.className = linkClasses[index].split('.')[1]

          updateLinkClass(index + 1)
        }
      }
    }

    setTimeout(() => {
      updateLinkClass(0)
    }, 2000)
  }, [])

  useEffect(() => {
    document.addEventListener('click', handlePageOutsideClick)

    return () => {
      document.removeEventListener('click', handlePageOutsideClick)
    }
  }, [])

  return (
    <>
    {handleNavbarPageRender()}
    <section className="home">
    <div className="wrapper">
      {/* <video autoPlay muted loop className="video">
        <source src="../bg.mp4" type="video/mp4" />
      </video> */}
    </div>
        <div className="prof-image">
          <img src="../prof-image.webp" alt='Profile picture'/>
          <div className='links'>
            <a href='#About' className={'about-nav load-in'} onClick={(e) => handleNavbar(e, 'about')}><span className='navBubble' onMouseEnter={handleNavAnimation} onAnimationEnd={handleNavAnimationEnd}/><span className='nav-title'>About</span></a>
            <a href='#Skills' className="skills-nav load-in" onClick={(e) => handleNavbar(e, 'skills')}><span className='navBubble' onMouseEnter={handleNavAnimation} onAnimationEnd={handleNavAnimationEnd} /><span className='nav-title'>Skills</span></a>
            <a href='#Projects' className="projects-nav load-in" onClick={(e) => handleNavbar(e, 'projects')}><span className='navBubble' onMouseEnter={handleNavAnimation} onAnimationEnd={handleNavAnimationEnd} /><span className='nav-title'>Projects</span></a>
            <a href='#Contact' className="contact-nav load-in" onClick={(e) => handleNavbar(e, 'contact')}><span className='navBubble' onMouseEnter={handleNavAnimation} onAnimationEnd={handleNavAnimationEnd} /><span className='nav-title'>Contact</span></a>
        </div>
        </div>
        <div className='home-intro-container'>
          <h1 className="home-intro-h1">I&apos;m Martin Flasar</h1>
          <div className="home-intro">
            <span>
              FRONTEND DEVELOPER<br/>
              WITH<br/>
              A TOUCH OF BACKEND
            </span>
          </div>
        </div>
    </section>
    </>
  )
}

Home.propTypes = {
  projects: PropTypes.array,
  skills: PropTypes.array
}

export default Home
