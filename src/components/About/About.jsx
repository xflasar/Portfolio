import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import '../../assets/components/About/About.scss'

const About = ({ redirectTo, onCloseOverlay, locale }) => {
  const [localeData, setLocaleData] = useState(null)

  const handleFreelancingProjectsClick = () => {
    redirectTo('projects')
  }

  // alone hook move this to hooks.js
  useEffect(() => {
    const lang = locale
    import(`../../localize/About/about.${lang}.json`)
      .then((data) => {
        setLocaleData(data)
      })
      .catch((error) => {
        console.error(`Error loading language data: ${error.message}`)
      })
  }, [])

  return (
    <div className="about">
      <button type='button' className='close-button' onClick={onCloseOverlay}><div><span/></div></button>
      <h1>{localeData?.AboutH1}</h1>
      <div className="about-container">
        <section className="about-container-intro">
          <h2>{localeData?.IntroH2}</h2>
          <p>{localeData?.IntroP}</p>
        </section>
        <section className="about-container-workflow">
          <h2>{localeData?.WorkflowH2}</h2>
          <div className="key-point">
            <span className="key-word">Frontend</span>
            <span className="key-description">{localeData?.WorkflowFrontendKD}</span>
          </div>
          <div className="key-point">
            <span className="key-word">Backend</span>
            <span className="key-description">{localeData?.WorkflowBackendKD}</span>
          </div>
          <div className="key-point">
            <span className="key-word">Freelancing</span>
            <span className="key-description">{localeData?.WorkflowFreelanceKD}<a onClick={handleFreelancingProjectsClick}>{localeData?.WorkflowFreelanceA}</a>.</span>
          </div>
        </section>
        <section className="about-container-journey">
          <h2>{localeData?.JourneyH2}</h2>
          <p>{localeData?.JourneyP}</p>
        </section>
        <section className="about-container-motivation">
          <h2>{localeData?.MotivationH2}</h2>
          <p>{localeData?.MotivationP}</p>
        </section>
      </div>
    </div>
  )
}

About.propTypes = {
  redirectTo: PropTypes.func,
  onCloseOverlay: PropTypes.func,
  locale: PropTypes.string
}

export default About
