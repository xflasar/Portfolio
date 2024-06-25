import React from 'react';
import PropTypes from 'prop-types';
import '../../assets/components/Projects/project.scss';

const Project = ({ project, index, projectClick }) => {
  const handleProjectClick = (e) => {
    e.preventDefault();
    projectClick(project);
  };

  return (
    <div className='projects-content-holder-item' key={index} onClick={(e) => handleProjectClick(e)}>
      <img src={project.projectImages[0]} alt={project.projectDescription} />
      <div className="content">
      <a href={project.projectLink} target="_blank" rel="noreferrer">
        <div className="content-title">
          <h3>
            {project.projectName}
          </h3>
        </div>
        <div className="content-description">
          <p>{project.projectDescription}</p>
        </div>
        </a>
      </div>
    </div>
  );
};

Project.propTypes = {
  project: PropTypes.object,
  index: PropTypes.number,
  projectClick: PropTypes.func
};

export default Project;
