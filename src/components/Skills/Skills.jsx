import React from "react"
import '../../assets/components/Skills/Skills.scss'

const Skills = () => {
  const skillsData = [
    { name: 'React.js', url: 'https://reactjs.org/', startDate: '2023-03-5' },
    { name: 'HTML5', url: 'https://developer.mozilla.org/en-US/docs/Glossary/HTML5', startDate: '2021-06-15' },
    { name: 'CSS3', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS', startDate: '2021-06-15' },
    { name: 'Node.js', url: 'https://nodejs.org/en/', startDate: '2023-03-5' },
    { name: 'Java', url: 'https://www.w3schools.com/java/', startDate: '2023-08-1' },
    { name: 'Vue.js', url: 'https://vuejs.org/', startDate: '2023-08-1' },
    { name: 'MongoDB', url: 'https://www.mongodb.com/', startDate: '2023-02-15' },
    { name: 'PostgreSQL', url: 'https://www.postgresql.org/', startDate: '2023-08-1' }
  ]

  const calculateExperience = (startDate) => {
    const currentDate = new Date()
    const start = new Date(startDate)
    
    const years = currentDate.getFullYear() - start.getFullYear()
    const months = currentDate.getMonth() - start.getMonth()
    const days = currentDate.getDate() - start.getDate()
  
    const yearString = years > 0 ? `${years} year${years > 1 ? 's' : ''}` : ''
    const monthString = months > 0 ? `${months} month${months > 1 ? 's' : ''}` : ''
    const dayString = days > 0 ? `${days} day${days > 1 ? 's' : ''}` : ''
  
    const components = [yearString, monthString, dayString].filter(component => component !== '')
  
    return components.length > 0 ? components.join(', ') : 'Less than a day'
  }

  

  return (
    <section className="skills">
      <h1>Skills</h1>
      <div className="skill-cloud">
        {skillsData.map((skill, index) => {
          const rotation = (360 / skillsData.length) * index
          const radius = 15 // Spacing between items
          const translateY = -radius * Math.cos((rotation - 90) * (Math.PI / 180))
          const translateX = radius * Math.sin((rotation - 90) * (Math.PI / 180))

          return (
            <a
              href={`#skill-${skill.name}`}
              key={skill.name}
              className="skill"
              title={`Learning since ${skill.startDate}`}
              style={{
                transform: `translate(${translateX}vw, ${translateY}vh)`,
                transitionDelay: `${index * 50}ms`
              }}
            >
              <span className="skill-name">{skill.name}</span>
              <span className="experience">{calculateExperience(skill.startDate)}</span>
            </a>
          )
        })}
      </div>
      <div className="skill-project-extra">
        <h2> Project Extras</h2>
        <div className="skill-project-extra-content">
          <p>Here will go projets from selected skill.</p>
        </div>
      </div>
    </section>
  )
}

export default Skills