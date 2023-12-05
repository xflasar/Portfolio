import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import '../../assets/components/Projects/projectViewer.scss'

function addAnimation (project) {
  const sliding = document.querySelector('.image-slider')
  sliding.setAttribute('data-animated', true)

  const scrollerInner = sliding.querySelector('.sliding')

  if (!scrollerInner) return

  const scrollerContent = Array.from(scrollerInner.children)

  scrollerContent.forEach(item => {
    const duplicateItem = item.cloneNode(true)
    duplicateItem.setAttribute('aria-hidden', true)
    scrollerInner.appendChild(duplicateItem)
  })
}

const ProjectViewer = ({ project, closeViewer }) => {
  const handleCloseViewer = () => {
    closeViewer()
  }

  useEffect(() => {
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      addAnimation(project)
    }
  }, [window])

  return (
    <div className="project-viewer">
      <button className="close-button" onClick={handleCloseViewer}>X</button>
      <div className='project-stuff'>
        <div className={project.projectImages.length === 1 ? 'image-slider' : 'image-slider actived'}>
          <div className={project.projectImages.length > 1 ? ' sliding' : null}>
            {project.projectImages && project.projectImages.length > 0 && (
              <>
                { project.projectImages.map((image, index) => (
                  <img key={index} src={image} alt={project.projectName} />
                ))}
              </>
            )}
          </div>
          {/* here are gonna be an images sliding right to left if there are more than 2 */}
        </div>
        <div className='project-info'>
          <h2>{project.projectName}</h2>
          <div className='project-info-leftside'>
            <p>{project.projectDescription}</p>
          </div>
          <div className='project-info-rightside'>
            <h3>Tech stack:</h3> {project.projectSkills && (project.projectSkills.map((skill, index) => <span key={index}>{skill}</span>))}
          </div>
        </div>
      </div>
    </div>
  )
}

ProjectViewer.propTypes = {
  project: PropTypes.object.isRequired,
  closeViewer: PropTypes.func.isRequired
}

export default ProjectViewer
