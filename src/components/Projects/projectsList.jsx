import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../../assets/components/Projects/projectsList.scss';
import Project from './project';
import ProjectViewer from './projectViewer';

const ProjectsList = ({ projectsContainerName, ProjectsData, isMobile }) => {
  const [expandedProject, setExpandedProject] = useState(null);

  const handleProjectClick = (e, index) => {
    e.preventDefault();
    console.log('Hit');
    setExpandedProject(ProjectsData[index]);
  };

  const closeProjectViewer = () => {
    setExpandedProject(null);
  };

  return (
    <div className={isMobile ? `projects-content ${projectsContainerName.replace(' ', '').toLowerCase()} mobile` : `projects-content ${projectsContainerName.replace(' ', '').toLowerCase()}`}>
      <h2>{projectsContainerName}</h2>
      <div className={expandedProject ? 'projects-content-holder project-view-active' : 'projects-content-holder'}>
        {ProjectsData && !expandedProject
          ? ProjectsData.map((project, index) => (
            <Project key={index} project={project} index={index} projectClick={(e, index) => handleProjectClick(e, index)} />
          ))
          : (<ProjectViewer project={expandedProject} closeViewer={closeProjectViewer}/>)
      }
      </div>
    </div>
  );
};

ProjectsList.propTypes = {
  projectsContainerName: PropTypes.string,
  ProjectsData: PropTypes.array,
  isMobile: PropTypes.bool
};

export default ProjectsList;
