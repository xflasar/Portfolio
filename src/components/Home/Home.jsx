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
      console.log(bubblesFreeIndexes)
      const newIndex = bubblesFreeIndexes.pop()
      console.log(bubblesFreeIndexes)
      console.log(newIndex)
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