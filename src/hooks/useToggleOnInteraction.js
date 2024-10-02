import { useState, useEffect, useRef } from 'react'

const useToggleOnInteraction = (initialValue, delay = 10000, interactionTimeout = 5000) => {
  const [toggleState, setToggleState] = useState(initialValue)
  const [isInteracting, setIsInteracting] = useState(false)
  const componentRef = useRef(null)

  useEffect(() => {
    let interval
    let interactionTimer

    const resetInteraction = () => {
      setIsInteracting(false)
      if (!interval) {
        interval = setInterval(() => {
          setToggleState(prev => !prev)
        }, delay)
      }
    }

    const handleInteraction = () => {
      setIsInteracting(true)
      clearInterval(interval)
      interval = null
      clearTimeout(interactionTimer)
      interactionTimer = setTimeout(resetInteraction, interactionTimeout)
    }

    const componentNode = componentRef.current
    if (componentNode) {
      componentNode.addEventListener('scroll', handleInteraction)
      componentNode.addEventListener('mousemove', handleInteraction)
      componentNode.addEventListener('touchstart', handleInteraction)
      componentNode.addEventListener('touchmove', handleInteraction)
    }

    interval = setInterval(() => {
      if (!isInteracting) {
        setToggleState(prev => !prev)
      }
    }, delay)

    return () => {
      clearInterval(interval)
      clearTimeout(interactionTimer)

      if (componentNode) {
        componentNode.removeEventListener('scroll', handleInteraction)
        componentNode.removeEventListener('mousemove', handleInteraction)
        componentNode.removeEventListener('touchstart', handleInteraction)
        componentNode.removeEventListener('touchmove', handleInteraction)
      }
    }
  }, [isInteracting, delay, interactionTimeout])

  return { toggleState, componentRef }
}

export default useToggleOnInteraction
