import React from 'react'
import PropTypes from 'prop-types'
import '../../assets/components/Projects/project.scss'

const Project = ({ project, index, projectClick }) => {
  const handleProjectClick = (index) => {
    console.log(index)
  }

  return (
    <div className='projects-content-holder-item' key={index} onClick={() => handleProjectClick(index)}>
      <img src={project.projectImage} alt={project.projectDescription} />
      <a href={project.projectLink} target="_blank" rel="noreferrer">
        <div className="content">
          <div className="content-title">
            <h3>
              {project.projectName}
            </h3>
          </div>
          <div className="content-description">
            <p>{project.projectDescription}</p>
          </div>
        </div>
      </a>
    </div>
  )
}

Project.propTypes = {
  project: PropTypes.object,
  index: PropTypes.number,
  projectClick: PropTypes.func
}

export default Project
