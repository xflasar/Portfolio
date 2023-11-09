import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import '../../assets/components/Skills/Skills.scss'

const Skills = ({ onCloseOverlay, isMobile, antiSkillsBoxCollision }) => {
  const [skillSelectedProjects, setSkillSelectedProjects] = useState(null)
  const [shouldAnimate, setShouldAnimate] = useState(false)
  const [projectsData, setProjectsData] = useState([])
  const [skillsData, setSkillsData] = useState([])

  // hook separate
  const qlData = useStaticQuery(graphql`
    query {
      allProjectsJson {
        edges {
          node {
            projectName,
            projectDescription,
            projectLink,
            projectImage,
            projectSkills,
            Tag
          }
        }
      },
      allSkillsJson {
        edges {
          node {
            skillName,
            skillUrl,
            skillImage,
            skillStartDate
          }
        }
      }
    }
  `)

  useEffect(() => {
    if (qlData) {
      if (qlData.allProjectsJson) setProjectsData(qlData.allProjectsJson.edges)
      if (qlData.allSkillsJson) setSkillsData(qlData.allSkillsJson.edges)
    }
  }, [qlData])

  const handleSkillClick = (skill) => {
    getProjectsFromSkill(skill)
  }

  const getProjectsFromSkill = (_skill) => {
    const foundProjectsMatch = []
    projectsData.map((project) => {
      project.node.projectSkills.map((skill) => {
        if (skill === _skill.skillName) return foundProjectsMatch.push(project)
        return skill
      })
      return project
    })
    setSkillSelectedProjects(foundProjectsMatch)
  }

  useEffect(() => {
    if (skillSelectedProjects && skillSelectedProjects.length === 0) {
      setShouldAnimate(false)
      return
    }

    if (shouldAnimate) {
      setShouldAnimate(false)
      setTimeout(() => {
        setShouldAnimate(true)
      }, 100)
    } else {
      setShouldAnimate(true)
    }
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
      <button type='button' className='close-button' onClick={onCloseOverlay}><div><span/></div></button>
      <h1>Skills</h1>
      <div className={skillSelectedProjects !== null ? antiSkillsBoxCollision ? 'skill-cloud non-main box-collision-active' : 'skill-cloud non-main' : antiSkillsBoxCollision ? 'skill-cloud box-collision-active' : 'skill-cloud'}>
        {skillsData.map((skill, index) => {
          const rotation = (360 / skillsData.length) * index
          const radius = 18 // Spacing between items
          let translateY = -radius * Math.cos((rotation - 90) * (Math.PI / 180))
          if (skillSelectedProjects) {
            translateY = -radius * Math.cos((rotation - 90) * (Math.PI / 180)) * 0.7
          }
          const translateX = radius * Math.sin((rotation - 90) * (Math.PI / 180)) * 1.2

          return (
            <div
              onClick={() => handleSkillClick(skill.node)}
              key={skill.node.skillName}
              className="skill"
              title={`Learning since ${skill.node.skillStartDate}`}
              style={isMobile
                ? null
                : antiSkillsBoxCollision
                  ? null
                  : {
                      transform: `translate(${translateX}vw, ${translateY}vh)`,
                      transitionDelay: `${index * 50}ms`
                    }
              }
            >
              <img src={skill.node.skillImage} />
              <span className="skill-name">{skill.node.skillName}</span>
              <span className="experience">{calculateExperience(skill.node.skillStartDate)}</span>
            </div>
          )
        })}
      </div>
      <div className={skillSelectedProjects ? 'skill-project-extra active' : 'skill-project-extra'}>
        <h2>Projects</h2>
        <div className="skill-project-extra-content">
          <div className="skill-project-extra-content-holder">
            {skillSelectedProjects
              ? skillSelectedProjects.length === 0
                ? (<p>No Projects assigned!</p>)
                : skillSelectedProjects.map((project, index) => (
                <div className="skill-project-extra-content-item" key={index} style={shouldAnimate ? { animation: `landingAnimI 1s cubic-bezier(0.075, 0.82, 0.165, 1) ${index * 0.5}s 1 normal forwards` } : null}>
                  <img src={project.node.projectImage} alt={project.node.projectDescription} />
                  <a href={project.node.projectLink} target="_blank" rel="noreferrer">
                    <div className="content">
                      <div className="content-title">
                        <p>
                          {project.node.projectName}
                        </p>
                      </div>
                      <div className="content-description">
                        <p>{project.node.projectDescription}</p>
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
  skills: PropTypes.array,
  onCloseOverlay: PropTypes.func,
  isMobile: PropTypes.bool,
  antiSkillsBoxCollision: PropTypes.bool
}

export default Skills
