import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import '../../assets/components/Skills/Skills.scss'
import Project from '../Projects/project'

const Skills = ({ onCloseOverlay, isMobile, antiSkillsBoxCollision, lang }) => {
  const [skillSelectedProjects, setSkillSelectedProjects] = useState(null)
  const [shouldAnimate, setShouldAnimate] = useState(false)
  const [projectsData, setProjectsData] = useState([])
  const [skillsData, setSkillsData] = useState([])
  const [skillSelected, setSkillSelected] = useState(null)

  // hook separate
  const qlData = useStaticQuery(graphql`
    query {
      allProjectsJson {
        edges {
          node {
            projectName
            projectDescription
            projectImages
            projectLink
            projectSkills
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
            skillStartDate,
            skillLevelPercent
          }
        }
      }
    }
  `)

  useEffect(() => {
    if (qlData) {
      if (qlData.allProjectsJson) {
        setProjectsData(qlData.allProjectsJson.edges)
        setSkillSelectedProjects(qlData.allProjectsJson.edges)
      }
      if (qlData.allSkillsJson) setSkillsData(qlData.allSkillsJson.edges)
    }
  }, [qlData])

  const handleSkillClick = (skill) => {
    setSkillSelectedProjects(null)

    // Hack for reloading animation when changing skill
    setTimeout(() => {
      setSkillSelected(skill.skillName)
      getProjectsFromSkill(skill)
    }, 0)
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

    const yearString = years > 0 ? lang === 'en-US' ? `${years} year${years > 1 ? 's' : ''}` : `${years} rok${(years <= 4 && years >= 2) ? 'y' : years >= 5 ? 'ů' : ''}` : ''
    const monthString = months > 0 ? lang === 'en-US' ? `${months} month${months > 1 ? 's' : ''}` : `${months} měsíc${(months <= 4 && months >= 2) ? 'e' : months >= 5 ? 'ů' : ''}` : ''
    const dayString = days > 0 ? lang === 'en-US' ? `${days} day${days > 1 ? 's' : ''}` : `${days} ${(days === 1 ? 'den' : (days <= 4 && days >= 2) ? 'dny' : days >= 5 ? 'dní' : '')}` : ''

    const components = [yearString, monthString, dayString].filter(component => component !== '')

    return components.length > 0 ? components.join(', ') : 'Less than a day'
  }

  return (
    <section className="skills">
      <button type='button' className='close-button' onClick={onCloseOverlay}><div><span/></div></button>
      <h1>Skills</h1>
      <div className='skill-cloud-container'>
        <div className={skillSelectedProjects !== null ? antiSkillsBoxCollision ? 'skill-cloud non-main box-collision-active' : 'skill-cloud non-main' : antiSkillsBoxCollision ? 'skill-cloud box-collision-active' : 'skill-cloud'}>
        {skillsData.map((skill) => {
          return (
            <div
              onClick={() => handleSkillClick(skill.node)}
              key={skill.node.skillName}
              className={skillSelected === skill.node.skillName ? 'skill active' : 'skill'}
              title={`Learning since ${skill.node.skillStartDate}`}
            >
              <img src={skill.node.skillImage}/>
              <div className="skill-overlay" style={{ maxHeight: `${skill.node.skillLevelPercent}%`, backgroundColor: `${skill.node.skillLevelPercent < 45 ? 'rgba(200, 20, 20, 0.5)' : skill.node.skillLevelPercent > 75 ? 'rgba(20, 200, 0, 0.5)' : 'rgba(200, 200, 10, 0.5)'}` }}/>
              <span className="skill-name">{skill.node.skillName}</span>
              <span className="experience">{calculateExperience(skill.node.skillStartDate)}</span>
            </div>
          )
        })}
        </div>
      </div>
      <h2>Projects</h2>
      <div className={skillSelectedProjects ? 'skill-project-extra active' : 'skill-project-extra'}>
        <div className="skill-project-extra-content">
          <div className="skill-project-extra-content-holder">
            {skillSelectedProjects
              ? skillSelectedProjects.length === 0
                ? (<p>No Projects assigned!</p>)
                : skillSelectedProjects.map((project, index) => (
                  <div key={index} className='project-container' style={{ animationDelay: `${index * 200}ms` }}>
                    <Project key={index} project={project.node} index={index} />
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
  antiSkillsBoxCollision: PropTypes.bool,
  lang: PropTypes.string
}

export default Skills
