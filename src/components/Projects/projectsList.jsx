import React from 'react'
import PropTypes from 'prop-types'
import '../../assets/components/Projects/projectsList.scss'

const ProjectsList = ({ projectsContainerName, ProjectsData }) => {
  const handleProjectClick = (index) => {
    console.log(index)
  }
  return (
    <div className="projects-content">
      <h2>{projectsContainerName}</h2>
      <div className='projects-content-holder'>
        {ProjectsData.map((project, index) => (
          <div className='projects-content-holder-item' key={index} onClick={() => handleProjectClick(this.key)}>
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
      }
      </div>
    </div>
  )
}

ProjectsList.propTypes = {
  projectsContainerName: PropTypes.string,
  ProjectsData: PropTypes.array
}

export default ProjectsList
