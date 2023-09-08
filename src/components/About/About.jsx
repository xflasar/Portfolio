import React from 'react'
import PropTypes from 'prop-types'
import '../../assets/components/About/About.scss'

const About = ({ redirectTo }) => {
  const handleFreelancingProjectsClick = () => {
    redirectTo('projects')
  }

  return (
    <div className="about">
      <h1>About</h1>
      <div className="about-container">
        <section className="about-container-intro">
          <h2>Hi there again, I&apos;m Martin Flasar!</h2>
          <p>I&apos;m a passionate software developer dedicated to developing elegant and efficient websites. With a background in IT, I&apos;ve honed my skills in various programming languages and technologies to create meaningful and user-friendly applications.</p>
        </section>
        <section className="about-container-workflow">
          <h2>What I Do</h2>
          <div className="key-point">
            <span className="key-word">Frontend</span>
            <span className="key-description">I specialize primarily in React.js and Vue.js, crafting immersive and dynamic user interfaces.</span>
          </div>
          <div className="key-point">
            <span className="key-word">Backend</span>
            <span className="key-description">While my primary focus is on frontend development, I also possess strong skills in backend development, particularly in Node.js. I have some experience with Java Spring Boot as well.</span>
          </div>
          <div className="key-point">
            <span className="key-word">Freelancing</span>
            <span className="key-description">I have a history of freelancing, often working on personal or side projects. Additionally, I&apos;ve completed small-scale projects for clients. You can explore my freelancing projects on my <a onClick={handleFreelancingProjectsClick}>dedicated page</a>.</span>
          </div>
        </section>
        <section className="about-container-journey">
          <h2>My Journey</h2>
          <p>I started looking into programming in my High School where I was tasked to develop a simple program in Pascal from that moment my curiosity began to rise and fall until my University days where I dove deeper into Software Developement and made my first 3 medium sized projects ( C++, PHP ) after that I slowly started learning Web Developement where I felt being pulled and found my joy in making websites. Since then I made various projects personal or for close clients.</p>
        </section>
        <section className="about-container-motivation">
          <h2>Passionate about Coding and Innovation</h2>
          <p>I find immense joy in coding and work while using the limitless possibilities of technology to develop new things for my own use or for client&apos;s benefit. I&apos;m dedicated to making a difference through Software Developement from developing a user-friendly websites and interfaces to optimizing application performance.</p>
        </section>
      </div>
    </div>
  )
}

About.propTypes = {
  redirectTo: PropTypes.func
}

export default About
