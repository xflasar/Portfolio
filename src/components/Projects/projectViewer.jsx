import React from 'react'
import PropTypes from 'prop-types'
import '../../assets/components/Projects/projectViewer.scss'

const ProjectViewer = ({ project, closeViewer }) => {
  const handleCloseViewer = () => {
    closeViewer()
  }

  return (
    <div className="project-viewer">
      <button className="close-button" onClick={handleCloseViewer}>X</button>
      <div className='project-stuff'>
        <div className='image-slider'>
          <div className='buttons'>
            <button className='left-button' /> {/* onClick={add movement to left} */}
            <button className='right-button' /> {/* onClick={add movement to right} */}
          </div>
          <img src={project.projectImage} alt={project.projectName} />
          {/* here are gonna be an images sliding right to left if there are more than 2 */}
        </div>
        <div className='project-info'>
          <h2>{project.projectName}</h2>
          <p>{project.projectDescription}</p>
          Tech stack: <span>{project.projectSkills}</span>
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
