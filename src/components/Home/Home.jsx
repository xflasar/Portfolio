import React, { useEffect } from "react";
import '../../assets/components/Home/Home.scss'

const Home = () => {
  const bubblesCount = 20

  const handleBubblePop = (event) => {
    const target = event.target
    const bubbles = document.querySelectorAll('.dot')

    bubbles.forEach(bubble => { 
      if (bubble === target.children[0]) {
        console.log('popped')
        bubble.parentElement.remove()
      }
    })
  }

  const handleCreateBubbles = () => {
    const bubbles = []
    for (let i = 0; i < bubblesCount; i++) {
      bubbles.push(
        <div key={i}><button type="button" key={i} className="dot" onClick={() => handleBubblePop()}></button></div>
      )
    }
    return bubbles;
  }

  useEffect(() => {
    document.addEventListener('click', handleBubblePop, {useCapture: true})

    return () => {
      document.removeEventListener('click', handleBubblePop)
    }
  }, [])
  return (
    <>
    <div className="wrapper">
        {handleCreateBubbles()}
      </div>
    <section className="home">
      
      <h1>Home</h1>
      <div className='links'>
        <ul>
          <a href='#Home'><li>Home</li></a>
          <a href='#About'><li>About</li></a>
          <a href='#Skills'><li>Skills</li></a>
          <a href='#Projects'><li>Projects</li></a>
          <a href='#Contact'><li>Contact</li></a>
        </ul>
      </div>
    </section>
    </>
  )
}

export default Home;