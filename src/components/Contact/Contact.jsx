import React from 'react'
import PropTypes from 'prop-types'
import '../../assets/components/Contact/Contact.scss'

const Contact = ({ onCloseOverlay }) => {
  return (
    <div className="contact">
      <button type='button' className='close-button' onClick={onCloseOverlay}><div><span/></div></button>
      <form name='contact' method="POST" data-netlify="true" data-netlify-honeypot='bot-field'>
        <h1>Contact Me</h1>
        <label className='form-group'>
          <input type="text" className='form-control' name="name" id="name" placeholder=' ' required />
          <span htmlFor='name'>Your name</span>
          <span className='border' />
        </label>
        <label className='form-group'>
          <input type="email" className='form-control' name="email" id="email" placeholder=' ' required />
          <span htmlFor='email'>Your email</span>
          <span className='border' />
        </label>
        <label className='form-group'>
          <textarea className='form-control' name="message" id="message" placeholder=' ' required></textarea>
          <span htmlFor='message'>Your message</span>
        </label>
        <div className='buttons' >
          <button type="submit">Send</button>
          <button type="button" disabled>Send via email client</button>
        </div>
      </form>
    </div>
  )
}

Contact.propTypes = {
  onCloseOverlay: PropTypes.func.isRequired
}

export default Contact
