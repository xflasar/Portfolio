import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import '../../assets/components/Skills/Skills.scss'

const Skills = ({ projectsData, skills, onCloseOverlay }) => {
  const [skillSelectedProjects, setSkillSelectedProjects] = useState(null)
  const [shouldAnimate, setShouldAnimate] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [antiSkillsBoxCollision, setAntiSkillsBoxCollision] = useState(() => {
    try {
      document.createEvent('TouchEvent')
      return true
    } catch (e) {
      return false
    }
  })

  const handleSkillClick = (skill) => {
    getProjectsFromSkill(skill)
  }

  const getProjectsFromSkill = (_skill) => {
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
    function antiSkillsBoxCollisionFn () {
      if (window.innerHeight < 1050) {
        setAntiSkillsBoxCollision(true)
      } else {
        setAntiSkillsBoxCollision(false)
      }
    }

    if (isMobile) {
      if (antiSkillsBoxCollision) {
        window.removeEventListener('resize', antiSkillsBoxCollisionFn)
        setAntiSkillsBoxCollision(false)
      }
      return
    }

    window.addEventListener('resize', antiSkillsBoxCollisionFn)

    return () => {
      window.removeEventListener('resize', antiSkillsBoxCollisionFn)
    }
  }, [skillSelectedProjects, isMobile])

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

  useEffect(() => {
    function handleOrientationChange (event) {
      const { matches, media } = event
      if (matches) {
        console.log('changed')

        const fnTouch = function () {
          try {
            document.createEvent('TouchEvent')
            return true
          } catch (e) {
            return false
          }
        }

        if (fnTouch) {
          setAntiSkillsBoxCollision(true)
        } else {
          setAntiSkillsBoxCollision(false)
        }

        if (media === '(orientation: portrait)') {
          setIsMobile(true)
        } else if (media === '(orientation: landscape)') {
          setIsMobile(false)
        }
      }
    }
    const mediaQueryPortrait = window.matchMedia('(orientation: portrait)')
    const mediaQueryLandscape = window.matchMedia('(orientation: landscape)')

    if (mediaQueryPortrait.matches) {
      setIsMobile(true)
    } else if (mediaQueryLandscape.matches) {
      setIsMobile(false)
    }

    mediaQueryPortrait.addEventListener('change', handleOrientationChange)
    mediaQueryLandscape.addEventListener('change', handleOrientationChange)

    return () => {
      mediaQueryPortrait.removeEventListener('change', handleOrientationChange)
      mediaQueryLandscape.removeEventListener('change', handleOrientationChange)
    }
  }, [])

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
        {skills.map((skill, index) => {
          const rotation = (360 / skills.length) * index
          const radius = 18 // Spacing between items
          let translateY = -radius * Math.cos((rotation - 90) * (Math.PI / 180))
          if (skillSelectedProjects) {
            translateY = -radius * Math.cos((rotation - 90) * (Math.PI / 180)) * 0.7
          }
          const translateX = radius * Math.sin((rotation - 90) * (Math.PI / 180)) * 1.2

          return (
            <div
              onClick={() => handleSkillClick(skill)}
              key={skill.name}
              className="skill"
              title={`Learning since ${skill.startDate}`}
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
              <img src={skill.image} />
              <span className="skill-name">{skill.name}</span>
              <span className="experience">{calculateExperience(skill.startDate)}</span>
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
  skills: PropTypes.array,
  onCloseOverlay: PropTypes.func
}

export default Skills
