import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import '../../assets/components/Skills/Skills.scss'

const Skills = ({ projectsData, skills }) => {
  const [skillSelectedProjects, setSkillSelectedProjects] = useState(null)

  const handleSkillClick = (skill) => {
    GetProjectsFromSkill(skill)
  }

  const GetProjectsFromSkill = (_skill) => {
    const foundProjectsMatch = []
    projectsData.map((project) => {
      project.projectSkills.map((skill) => {
        if (skill === _skill.name) return foundProjectsMatch.push(project)
        return skill
      })
      return project
    })
    setSkillSelectedProjects(foundProjectsMatch)
  }

  useEffect(() => {
    console.log(skillSelectedProjects)
  }, [skillSelectedProjects])

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
      <div className={skillSelectedProjects !== null ? 'skill-cloud non-main' : 'skill-cloud'}>
        {skills.map((skill, index) => {
          const rotation = (360 / skills.length) * index
          const radius = 15 // Spacing between items
          const translateY = -radius * Math.cos((rotation - 90) * (Math.PI / 180))
          const translateX = radius * Math.sin((rotation - 90) * (Math.PI / 180))

          return (
            <div
              onClick={() => handleSkillClick(skill)}
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
            </div>
          )
        })}
      </div>
      <div className={skillSelectedProjects ? 'skill-project-extra active' : 'skill-project-extra'}>
        <h2> Project Extras</h2>
        <div className="skill-project-extra-content">
          <div className="skill-project-extra-content-holder">
            {skillSelectedProjects
              ? skillSelectedProjects.length === 0
                ? (<p>No Projects assigned!</p>)
                : skillSelectedProjects.map((project, index) => (
                <div className="skill-project-extra-content-item" key={index}>
                  <img src={project.projectImage} alt={project.projectDescription} />
                  <a href={project.projectLink} target="_blank" rel="noreferrer">
                    <div className="content">
                      <div className="content-title">
                        <p>
                          {project.projectName}
                        </p>
                      </div>
                      <div className="content-description">
                        <p>{project.projectDescription}</p>
                      </div>
                    </div>
                  </a>
                </div>
                ))
              : null
            }
          </div>
        </div>
      </div>
    </section>
  )
}

Skills.propTypes = {
  projectsData: PropTypes.array,
  skills: PropTypes.array
}

export default Skills
