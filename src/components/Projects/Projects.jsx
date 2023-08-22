import React from "react";
import '../../assets/components/Projects/Projects.scss'

const Projects = () => {
  const projectData = [
    {
      id: 1,
      image: "https://i.imgur.com/UqNMhpZ.png",
      caption: "Tic Tac Toe",
    },
    {
      id: 2,
      image: "https://i.imgur.com/UqNMhpZ.png",
      caption: "Tic Tac Toe",
    },
    {
      id: 3,
      image: "https://i.imgur.com/UqNMhpZ.png",
      caption: "Tic Tac Toe",
    },
    {
      id: 4,
      image: "https://i.imgur.com/UqNMhpZ.png",
      caption: "Tic Tac Toe",
    },
    {
      id: 5,
      image: "https://i.imgur.com/UqNMhpZ.png",
      caption: "Tic Tac Toe",
    }
  ]

  const handleItemClick = (project) => () => {
    console.log(project)
  }

  return (
    <section className="projects">
      <h1>Projects</h1>
      <div className="project-grid">
        {projectData.map((project) => (
          <div className="project-item" key={project.id} onClick={handleItemClick(project)}>
            <img src={project.image} alt={project.caption} />
            <div className="caption">{project.caption}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects;