import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import '../../assets/components/Home/Home.scss'
import About from '../About/About'
import Skills from '../Skills/Skills'
import Projects from '../Projects/Projects'
import Contact from '../Contact/Contact'

// Needs refactoring
// custom hooks

const Home = ({ projects, skills }) => {
  const bubblesCountMax = 20
  const bubblesFreeIndexes = Array.from({ length: bubblesCountMax }, (_, index) => index)

  const [bubbles, setBubbles] = useState([])
  const [activePage, setActivePage] = useState('')
  const [clickedButton, setClickedButton] = useState(null)

  const handleBubblePop = (event) => {
    if (event.target.getAttribute('name') === 'bubble') {
      const elementPos = event.target.getBoundingClientRect()

      // Preseting values to use current from animation
      event.target.style.top = `${elementPos.y}px`
      event.target.style.left = `${elementPos.x}px`
      event.target.style.width = `${elementPos.width}px`
      event.target.style.height = `${elementPos.height}px`
      event.target.className = 'popped'

      setTimeout(() => {
        event.target.removeAttribute('class')
        event.target.removeAttribute('style')
      }, 1500)
    }
  }

  const handleBubbleCreate = () => {
    const newBubbles = []
    const bFreeIndex = bubblesFreeIndexes.length

    for (let i = 0; i < bFreeIndex; i++) {
      const newIndex = bubblesFreeIndexes.pop()
      const eParent = <div key={newIndex} data-id={newIndex} name='bubble'><button type="button" className="dot" onClick={() => handleBubblePop()}></button></div>

      newBubbles.push(eParent)
    }

    setBubbles(newBubbles)
  }

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
        element = <div className='overlay-page' style={{ left: `${dom.getBoundingClientRect().x}px`, top: `${dom.getBoundingClientRect().y}px` }}><About redirectTo={handleAboutCallback} onCloseOverlay={handleOverlayClose} /></div>
        break
      case 'skills':
        element = <div className='overlay-page' style={{ left: `${dom.getBoundingClientRect().x}px`, top: `${dom.getBoundingClientRect().y}px` }}><Skills projectsData={projects} skills={skills} onCloseOverlay={handleOverlayClose} /></div>
        break
      case 'projects':
        element = <div className='overlay-page' style={{ left: `${dom.getBoundingClientRect().x}px`, top: `${dom.getBoundingClientRect().y}px` }}><Projects projectsData={projects} onCloseOverlay={handleOverlayClose} /></div>
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
    handleBubbleCreate()
  }, [])

  useEffect(() => {
    document.addEventListener('click', handlePageOutsideClick)
    const bubblePopEventListener = document.addEventListener('click', handleBubblePop, { useCapture: true })

    return () => {
      document.removeEventListener('click', handlePageOutsideClick)
      document.removeEventListener('click', bubblePopEventListener)
    }
  }, [])

  return (
    <>
    {handleNavbarPageRender()}
    <section className="home">
    <div className="wrapper">
      {bubbles && bubbles.map((bubble) => bubble)}
    </div>
        <div className="prof-image">
          <img src="../prof-image.png"/>
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
