import React from 'react'
import '../assets/components/Other/closeButton.scss'

const CloseButton = ({onCloseOverlay}) => {
  return (
    <button type='button' className='close-button' onClick={onCloseOverlay}><div><span/></div></button>
  )
}

export default CloseButton