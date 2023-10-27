import React from 'react'
import PropTypes from 'prop-types'
import '../../assets/components/Contact/Contact.scss'

const Contact = ({ onCloseOverlay }) => {
  return (
    <section className="contact">
      <button type='button' className='close-button' onClick={onCloseOverlay}>X</button>
      <h1>Contact Me</h1>
      <form name='contact' method="POST" data-netlify="true" data-netlify-honeypot='bot-field'>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
        <label htmlFor="message">Message</label>
        <textarea name="message" id="message"></textarea>
        <button type="submit">Send</button>
        <button type="button" disabled>Send via email client</button>
      </form>
    </section>
  )
}

Contact.propTypes = {
  onCloseOverlay: PropTypes.func.isRequired
}

export default Contact
