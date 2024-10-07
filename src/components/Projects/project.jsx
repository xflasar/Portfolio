import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../../assets/components/Projects/project.scss';

const Project = ({ project, index, projectClick }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleProjectClick = (e) => {
    e.preventDefault();
    projectClick(project);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === project.projectImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className='projects-content-holder-item' key={index} onClick={(e) => handleProjectClick(e)}>
      {project.projectImages.length > 1 ? (
        <div className="slideshow" onClick={nextImage}>
          <img src={project.projectImages[currentImageIndex]} alt={project.projectDescription} />
        </div>
      ) : (
        <img src={project.projectImages[0]} alt={project.projectDescription} />
      )}
      <div className="content">
        <a href={project.projectLink} target="_blank" rel="noreferrer">
          <div className="content-title">
            <h3>{project.projectName}</h3>
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
  project: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  projectClick: PropTypes.func.isRequired,
};

export default Project;
