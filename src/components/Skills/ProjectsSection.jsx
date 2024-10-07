import React, { useState, useEffect } from "react";
import Project from "../Projects/project";
import "../../assets/components/Skills/ProjectsSection.scss";

const ProjectsSection = ({ selectedSkill, projects }) => {
	const [skillSelectedProjects, setSkillSelectedProjects] = useState(null);
	const [shouldAnimate, setShouldAnimate] = useState(false);
	const projectsContainerRef = React.createRef();
	const [isAtBottom, setIsAtBottom] = useState(false);

	const checkScroll = () => {
		const container = projectsContainerRef.current;
		if (container) {
			const isBottom =
				Math.floor(container.scrollHeight - container.scrollTop) ===
				container.clientHeight;
			setIsAtBottom(isBottom);
		}
	};

	useEffect(() => {
		const container = projectsContainerRef.current;
		if (container) {
			container.addEventListener("scroll", checkScroll);
			// Initial check
			checkScroll();
		}

		// Cleanup function to remove the event listener
		return () => {
			if (container) {
				container.removeEventListener("scroll", checkScroll);
			}
		};
	}, [projectsContainerRef]);

	const getProjectsFromSkill = (_skill) => {
		const foundProjectsMatch = [];

		projects.map((project) => {
			project.node.projectSkills.map((skill) => {
				if (skill === _skill.skillName) return foundProjectsMatch.push(project);
				return skill;
			});
			return project;
		});

		setSkillSelectedProjects(foundProjectsMatch);
	};

	// Make a way to redirect to the project in Project page into project projectViewer
	const handleProjectClick = (project) => {
		console.log("Not Implemented! URL:", project.projectLink);
	};

	useEffect(() => {
		if (selectedSkill && projects.length > 0) {
			getProjectsFromSkill(selectedSkill);
		}
	}, [selectedSkill]);

	useEffect(() => {
		if (skillSelectedProjects && skillSelectedProjects.length === 0) {
			setShouldAnimate(false);
			return;
		}
		if (shouldAnimate) {
			setShouldAnimate(false);
			setTimeout(() => {
				setShouldAnimate(true);
			}, 100);
		} else {
			setShouldAnimate(true);
		}
	}, [skillSelectedProjects]);

	return (
		<div className="skills-projects">
			<h2>Projects</h2>
			<div
				className={
					skillSelectedProjects
						? "skill-project-container active"
						: "skill-project-container"
				}
			>
				{skillSelectedProjects ? (
				<div className={skillSelectedProjects.length > 1 ? "skill-project-container-content" : "skill-project-container-content oneitem"} ref={projectsContainerRef}>
						{skillSelectedProjects.length === 0 ? (
							<p className="empty-project-list">No Projects assigned!</p>
						) : (
							skillSelectedProjects.map((project, index) => (
								<div
									key={index}
									className="project-container"
									style={{ animationDelay: `${index * 200}ms` }}
								>
									<Project
										key={index}
										project={project.node}
										index={index}
										projectClick={handleProjectClick}
									/>
								</div>
							))
						)}
				</div>
				) : (
					<div className="skills-projects-notselected">
						<span>Select Skill to show Projects!</span>
					</div>
				)}
			</div>
			{!isAtBottom && <div className="skill-project-extra-bottom-blur"></div>}
		</div>
	);
};

export default ProjectsSection;
