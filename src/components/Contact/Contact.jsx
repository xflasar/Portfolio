import React from "react";
import "../../assets/components/Contact/Contact.scss"

const Contact = () => {
  return (
    <section className="contact">
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

export default Contact;