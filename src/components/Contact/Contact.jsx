import React, { useState } from 'react'
import '../../assets/components/Contact/Contact.scss'
import CloseButton from '../closeButton'

const sendContact = async (data) => {
  /* try {
    const response = await fetch('/api/contact-me', {
      method: POST,
      body: JSON.stringify(data)
    })

    if (response.ok) {
      const data = response.json()
      return data
    } else {
      console.log('SOmetihng happend.')
    }
  } catch (err){
    console.log('Error in contactme fetch: ' + err)
    return null
  } */

    return 'Worked!'
}

const Contact = ({onCloseOverlay}) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [sendStatus, setSendStatus] = useState('')

  const onChangeName = (e) => {
    setName(e.target.value)
  }
  
  const onChangeEmail = (e) => {
    setEmail(e.target.value)
  }
  
  const onChangeMessage = (e) => {
    setMessage(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(name + " " + email + " " + message)

    if (name == '' || email == '' || message == '') {
      setSendStatus('Failed!')
      setTimeout(() => {
        setSendStatus('')
      }, 5000)
      return
    }

    const status = await sendContact({name, email, message})
    setSendStatus(status)
    setTimeout(() => {
      setSendStatus('')
    }, 5000)
  }

  const handleEmail = () => {
    if (name == '' || email == '' || message == '') {
      setSendStatus('Failed!')
      setTimeout(() => {
        setSendStatus('')
      }, 5000)
      return
    }

    const subject = 'Contact Me';
    const body = `${message}\n\nBest regards,\n${name}\nEmail: ${email}`;
    
    window.open(`mailto:xflasar@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
  };

  return (
    <div className="contact-overlay">
      <CloseButton onCloseOverlay={onCloseOverlay} />
      <h2>Contact Me</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          name="name"
          placeholder="Your name"
          value={name}
          onChange={onChangeName}
        />
        <input
          type="email"
          name="email"
          placeholder="Your email"
          value={email}
          onChange={onChangeEmail}
        />
        <textarea
          name="message"
          placeholder="Your message"
          value={message}
          onChange={onChangeMessage}
        />
        <div className="submit-buttons">
          <button type="submit">Send</button>
          <button type="button" onClick={handleEmail}>
            Send via Email Client
          </button>
        </div>
      </form>
      <div className={sendStatus ? 'alert-box active' : 'alert-box'}>
          {sendStatus}
      </div>
    </div>
  )
}

export default Contact
