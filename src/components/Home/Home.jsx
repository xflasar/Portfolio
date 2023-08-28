import React, {useState, useEffect } from "react";
import '../../assets/components/Home/Home.scss'

const Home = () => {
  const bubblesCountMax = 20
  let bubblesFreeIndexes = Array.from({ length: bubblesCountMax }, (_, index) => index)

  const [bubbles, setBubbles] = useState([])

  const handleBubblePop = (event) => {
    if(event.target.getAttribute('name') === 'bubble')
      {
        event.target.className += 'popped'
        setTimeout(() => {
          event.target.classList.remove('popped')
        }, 1500)
      }
  }

  const handleBubbleCreate = () => {
    const newBubbles = []
    const bFreeIndex = bubblesFreeIndexes.length
    
    for (let i = 0; i < bFreeIndex; i++){
      const newIndex = bubblesFreeIndexes.pop()
      const eParent = <div key={newIndex} data-id={newIndex} name='bubble'><button type="button" className=".dot" onClick={() => handleBubblePop()}></button></div>
      
      newBubbles.push(eParent)
    }

    setBubbles(newBubbles)
  }
  
  useEffect(() => {
    handleBubbleCreate()
  }, [])
  useEffect(() => {
    document.addEventListener('click', handleBubblePop, {useCapture: true})
    
    return () => {
      document.removeEventListener('click', handleBubblePop)
    }
  }, [])
  
  return (
    <>
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
            <a href='#Home' className="home-nav"><li>Home</li></a>
            <a href='#About' className="about-nav"><li>About</li></a>
            <a href='#Skills' className="skills-nav"><li>Skills</li></a>
            <a href='#Projects' className="projects-nav"><li>Projects</li></a>
            <a href='#Contact' className="contact-nav"><li>Contact</li></a>
          </ul>
        </div>
        </div>
        <h1 className="home-intro-h1">I'm Martin Flasar</h1>
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

export default Home;