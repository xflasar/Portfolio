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

  const [loadStyleState, setLoadStyleState] = useState(true)

  const handleBubblePop = (event) => {
    if (event.target.getAttribute('name') === 'bubble') {
      event.target.className += 'popped'
      setTimeout(() => {
        event.target.classList.remove('popped')
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

  const handleNavbarPageRender = () => {
    let element = null
    if (!clickedButton) return
    const dom = Array.from(document.getElementsByTagName('li')).filter((element) => {
      return Array.from(element.childNodes).some((child) => {
        return child.data === clickedButton.innerText
      })
    })

    switch (activePage) {
      case 'about':
        element = <div className='overlay-page' style={{ left: `${dom[0].getBoundingClientRect().x}px`, top: `${dom[0].getBoundingClientRect().y}px` }}><About redirectTo={handleAboutCallback}/></div>
        break
      case 'skills':
        element = <div className='overlay-page' style={{ left: `${dom[0].getBoundingClientRect().x}px`, top: `${dom[0].getBoundingClientRect().y}px` }}><Skills projectsData={projects} skills={skills} /></div>
        break
      case 'projects':
        console.log(projects)
        element = <div className='overlay-page' style={{ left: `${dom[0].getBoundingClientRect().x}px`, top: `${dom[0].getBoundingClientRect().y}px` }}><Projects projectsData={projects} /></div>
        break
      case 'contact':
        element = <div className='overlay-page' style={{ left: `${dom[0].getBoundingClientRect().x}px`, top: `${dom[0].getBoundingClientRect().y}px` }}><Contact /></div>
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
    document.addEventListener('click', handleBubblePop, { useCapture: true })

    return () => {
      document.removeEventListener('click', handlePageOutsideClick)
      document.removeEventListener('click', handleBubblePop)
    }
  }, [])

  return (
    <>
    {handleNavbarPageRender()}
    <div className="wrapper">
      {bubbles && bubbles.map((bubble) => bubble)}
    </div>
    <section className="home">
      <h1>Home</h1>
      <div className="holder">
        <div className="prof-image">
          <img src="../prof-image.png"/>
          <div className='links'>
          <ul>
            <a href='#About' className={'about-nav load-in'} onClick={(e) => handleNavbar(e, 'about')}><li>About</li></a>
            <a href='#Skills' className="skills-nav load-in" onClick={(e) => handleNavbar(e, 'skills')}><li>Skills</li></a>
            <a href='#Projects' className="projects-nav load-in" onClick={(e) => handleNavbar(e, 'projects')}><li>Projects</li></a>
            <a href='#Contact' className="contact-nav load-in" onClick={(e) => handleNavbar(e, 'contact')}><li>Contact</li></a>
          </ul>
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
