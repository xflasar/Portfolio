import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import '../../assets/components/Projects/Projects.scss'
import ProjectsList from './projectsList'

const Projects = ({ projectsData }) => {
  const [personalProjects, setPersonalProjects] = useState([])
  const [freelanceProjects, setFreelanceProjects] = useState([])
  const [sideSmallProjects, setSideSmallProjects] = useState([])

  useEffect(() => {
    const personalProjectsArray = []
    const freelanceProjectsArray = []
    const sideSmallProjectsArray = []

    // Loop through the data and categorize projects
    projectsData.forEach((project) => {
      switch (project.Tag) {
        case 'Personal Project':
          personalProjectsArray.push(project)
          break
        case 'Freelance Project':
          freelanceProjectsArray.push(project)
          break
        case 'Side-Small Project':
          sideSmallProjectsArray.push(project)
          break
        default:
          break
      }
    })

    // Update the state variables with the categorized projects
    setPersonalProjects(personalProjectsArray)
    setFreelanceProjects(freelanceProjectsArray)
    setSideSmallProjects(sideSmallProjectsArray)

    console.log(projectsData)
    console.log('Personal Projects:', personalProjects)
    console.log('Freelance Projects:', freelanceProjects)
    console.log('Side-Small Projects:', sideSmallProjects)
  }, [projectsData])

  return (
    <section className="projects">
      <h1>Projects</h1>
      {projectsData && (
        <div className="project-container">
          {console.log(projectsData)}
          <ProjectsList projectsContainerName='Personal Projects' ProjectsData={personalProjects} />
          <ProjectsList projectsContainerName='Freelance Projects' ProjectsData={freelanceProjects} />
          <ProjectsList projectsContainerName='Side-Small Projects' ProjectsData={sideSmallProjects} />
        </div>
      )}
    </section>
  )
}

Projects.propTypes = {
  projectsData: PropTypes.array
}

export default Projects
