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
      <div className='image-slider'>
        {/* here are gonna be an images sliding right to left if there are more than 2 */}
      </div>
      <div className='project-info'>
        <h2>{project.projectName}</h2>
        <p>{project.projectDescription}</p>
      </div>
    </div>
  )
}

ProjectViewer.propTypes = {
  project: PropTypes.object.isRequired,
  closeViewer: PropTypes.func.isRequired
}

export default ProjectViewer
