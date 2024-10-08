import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import '../../assets/components/Projects/Projects.scss';
import ProjectsList from './projectsList';
import CloseButton from '../closeButton';
import { useStaticQuery, graphql } from 'gatsby';

const Projects = ({isMobile }) => {
  const [personalProjects, setPersonalProjects] = useState([]);
  const [freelanceProjects, setFreelanceProjects] = useState([]);
  const [sideSmallProjects, setSideSmallProjects] = useState([]);
  const [mobileProjectSelection, setMobileProjectSelection] = useState(null);

  const projectsData = useStaticQuery(graphql`
    query {
      allProjectsJson {
        edges {
          node {
            projectName
            projectDescription
            projectImages
            projectLink
            projectSkills
            Tag
          }
        }
      }
    }
  `);

  const handleProjectSelector = (e) => {
    e.preventDefault();
    const { innerText } = e.target;
    const projectDataE = {
      name: innerText,
      projects: []
    };
    let el = null;
    const topEl = document.querySelector('.projects-top');
    switch (innerText) {
      case 'Personal Projects':
        if (isMobile) {
          projectDataE.projects = personalProjects;
          setMobileProjectSelection(projectDataE);
        } else {
          el = document.getElementById('personal-projects-container');
          return el.parentElement.scrollTo(0, el.offsetTop - topEl.getBoundingClientRect().height);
        }
        break;
      case 'Freelance Projects':
        if (isMobile) {
          projectDataE.projects = freelanceProjects;
          setMobileProjectSelection(projectDataE);
        } else {
          el = document.getElementById('freelance-projects-container');
          return el.parentElement.scrollTo(0, el.offsetTop - topEl.getBoundingClientRect().height);
        }
        break;
      case 'Side-Small Projects':
        if (isMobile) {
          projectDataE.projects = sideSmallProjects;
          setMobileProjectSelection(projectDataE);
        } else {
          el = document.getElementById('side-projects-container');
          return el.parentElement.scrollTo(0, el.offsetTop - topEl.getBoundingClientRect().height);
        }
    }
  };

  useEffect(() => {
    const personalProjectsArray = [];
    const freelanceProjectsArray = [];
    const sideSmallProjectsArray = [];

    // Loop through the data and categorize projects
    projectsData.allProjectsJson.edges.forEach((project) => {
      const projectNode = {
        projectName: project.node.projectName,
        projectDescription: project.node.projectDescription,
        projectLink: project.node.projectLink,
        projectImages: project.node.projectImages,
        projectSkills: project.node.projectSkills,
        Tag: project.node.Tag
      };
      switch (projectNode.Tag) {
        case 'Personal Project':
          personalProjectsArray.push(projectNode);
          break;
        case 'Freelance Project':
          freelanceProjectsArray.push(projectNode);
          break;
        case 'Side small Project':
          sideSmallProjectsArray.push(projectNode);
          break;
        default:
          break;
      }
    });

    // Update the state variables with the categorized projects
    setPersonalProjects(personalProjectsArray);
    setFreelanceProjects(freelanceProjectsArray);
    setSideSmallProjects(sideSmallProjectsArray);
  }, []);

  return (
    <section className="projects">
      <div className='projects-top'>
      <CloseButton onCloseOverlay={onCloseOverlay} />
        <h1>Projects</h1>
        <div className='projects-selector'>
          <button type='button' className='projects-selector-button' onClick={handleProjectSelector}>Personal Projects</button>
          <button type='button' className='projects-selector-button' onClick={handleProjectSelector}>Freelance Projects</button>
          <button type='button' className='projects-selector-button' onClick={handleProjectSelector}>Side-Small Projects</button>
        </div>
      </div>
      <div className='projects-bottom'>
        {projectsData && (
          <div className="project-container">
            {isMobile
              ? mobileProjectSelection && (<ProjectsList projectsContainerName={mobileProjectSelection.name} ProjectsData={mobileProjectSelection.projects} isMobile={isMobile} />)
              : (
              <>
              <span id='personal-projects-container'/>
            <ProjectsList projectsContainerName='Personal Projects' ProjectsData={personalProjects} isMobile={isMobile} />
            <span id='freelance-projects-container'/>
            <ProjectsList projectsContainerName='Freelance Projects' ProjectsData={freelanceProjects} isMobile={isMobile} />
            <span id='side-projects-container'/>
            <ProjectsList projectsContainerName='Side-Small Projects' ProjectsData={sideSmallProjects} isMobile={isMobile} />
            </>
                )
          }
        </div>
        )}
      </div>
    </section>
  );
};

Projects.propTypes = {
  projectsData: PropTypes.array,
  onCloseOverlay: PropTypes.func,
  isMobile: PropTypes.bool
};

export default Projects;
