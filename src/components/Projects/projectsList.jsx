import React from 'react'
import PropTypes from 'prop-types'
import '../../assets/components/Projects/projectsList.scss'
import Project from './project'

const ProjectsList = ({ projectsContainerName, ProjectsData, isMobile }) => {
  return (
    <div className={isMobile ? 'projects-content mobile' : 'projects-content'}>
      <h2>{projectsContainerName}</h2>
      <div className='projects-content-holder'>
        {ProjectsData.map((project, index) => (
          <Project key={index} project={project} index={index} />
        ))
      }
      </div>
    </div>
  )
}

ProjectsList.propTypes = {
  projectsContainerName: PropTypes.string,
  ProjectsData: PropTypes.array,
  isMobile: PropTypes.bool
}

export default ProjectsList
