import React from 'react'
import PropTypes from 'prop-types'
import '../../assets/components/Projects/Projects.scss'

const Projects = ({ projectsData }) => {
  const handleItemClick = (project) => () => {
    console.log(project)
  }

  return (
    <section className="projects">
      <h1>Projects</h1>
      <div className="project-grid">
        {console.log(projectsData)}
        {projectsData.map((project) => (
          <div className="project-item" key={project.id} onClick={handleItemClick(project)}>
            <img src={project.image} alt={project.caption} />
            <div className="caption">{project.caption}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

Projects.propTypes = {
  projectsData: PropTypes.array
}

export default Projects
