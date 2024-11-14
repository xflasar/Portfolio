import React, { useState, useEffect, useCallback } from 'react'
import './Intro.scss'

const commands = [
  { command: '> whoami', response: <><span className="highlight-blue">Martin Flasar</span>, a passionate developer.</> },
  { command: '> profession', response: <>Student and <span className="highlight-yellow">Frontend</span> Developer with <span className="highlight-red">Backend</span> experience.</> },
  { command: '> hobby', response: <>Web Development💻, Gaming🎮, Anime⛩️</> },
]

const Intro = () => {
  const [displayedText, setDisplayedText] = useState('')
  const [currentStep, setCurrentStep] = useState(0)
  const [isTypingCommand, setIsTypingCommand] = useState(true)
  const [completedSteps, setCompletedSteps] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)

  const typingSpeed = 100
  const displayInterval = 10000
  const initialLoadDelay = 2000

  // Load animation effect
  useEffect(() => {
    const loadTimer = setTimeout(() => setIsLoaded(true), initialLoadDelay)
    return () => clearTimeout(loadTimer)
  }, [])

  const displayCommand = useCallback((text, isCommand) => {
    setCompletedSteps((prev) => [...prev, { text, isCommand }])
    setDisplayedText('')
    setIsTypingCommand(!isCommand)
  }, [])

  const resetAnimation = useCallback(() => {
    setCompletedSteps([])
    setCurrentStep(0)
    setIsTypingCommand(true)
    setDisplayedText('')
  }, [])

  useEffect(() => {
    if (!isLoaded || currentStep >= commands.length) return

    const { command, response } = commands[currentStep]
    const textToDisplay = isTypingCommand ? command : response

    let typingIndex = 0

    const typingInterval = setInterval(() => {
      if (typingIndex < textToDisplay.length && isTypingCommand) {
        setDisplayedText((prev) => prev + textToDisplay[typingIndex])
        typingIndex++
      } else {
        clearInterval(typingInterval)
        displayCommand(textToDisplay, isTypingCommand)
        if (isTypingCommand) return

        setCurrentStep((prev) => prev + 1)
      }
    }, typingSpeed)

    return () => clearInterval(typingInterval)
  }, [currentStep, isTypingCommand, isLoaded, displayCommand])

  useEffect(() => {
    if (currentStep >= commands.length && isLoaded) {
      setDisplayedText('> ')
      const restartTimer = setTimeout(resetAnimation, displayInterval)
      return () => clearTimeout(restartTimer)
    }
  }, [currentStep, isLoaded, resetAnimation])

  return (
    <div className="terminal">
      {completedSteps.map((step, index) => (
        <div key={index} className={step.isCommand ? 'terminal-command' : 'terminal-response'}>
          {step.text}
        </div>
      ))}
      {displayedText && (
        <div className={isTypingCommand ? 'terminal-command' : 'terminal-response'}>
          {displayedText}
          {isTypingCommand && <span className="cursor"></span>}
        </div>
      )}
    </div>
  )
}

export default Intro
