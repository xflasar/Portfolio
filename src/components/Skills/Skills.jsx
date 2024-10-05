import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import "../../assets/components/Skills/Skills.scss";
import InfoSection from "./InfoSection";
import ProjectSection from "./ProjectsSection";

const Skills = ({ onCloseOverlay, lang }) => {
	const [projectsData, setProjectsData] = useState([]);
	const [skillsData, setSkillsData] = useState([]);
	const [skillSelected, setSkillSelected] = useState(null);

	const qlData = useStaticQuery(graphql`
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
			allSkillsJson {
				edges {
					node {
						skillName
						skillUrl
						skillImage
						skillStartDate
						skillLevelPercent
						skillDescription
					}
				}
			}
		}
	`);

	useEffect(() => {
		if (qlData) {
			if (qlData.allProjectsJson) {
				setProjectsData(qlData.allProjectsJson.edges);
			}

			if (skillsData && qlData.allSkillsJson) {
				const updatedSkillsData = qlData.allSkillsJson.edges.map((skill) => {
					skill.node.skillTimeSinceStarted = calculateExperience(
						skill.node.skillStartDate
					);
					return skill;
				});
				setSkillsData(updatedSkillsData);
			}
		}
	}, [qlData]);

	const handleSkillClick = (skill) => {
		setTimeout(() => {
			setSkillSelected(skill);
		}, 0);
	};

	const calculateExperience = (startDate) => {
		const currentDate = new Date();
		const start = new Date(startDate);

		const years = currentDate.getFullYear() - start.getFullYear();
		const months = currentDate.getMonth() - start.getMonth();
		const days = currentDate.getDate() - start.getDate();

		const yearString =
			years > 0
				? lang === "en-US"
					? `${years} year${years > 1 ? "s" : ""}`
					: `${years} rok${
							years <= 4 && years >= 2 ? "y" : years >= 5 ? "ů" : ""
					  }`
				: "";
		const monthString =
			months > 0
				? lang === "en-US"
					? `${months} month${months > 1 ? "s" : ""}`
					: `${months} měsíc${
							months <= 4 && months >= 2 ? "e" : months >= 5 ? "ů" : ""
					  }`
				: "";
		const dayString =
			days > 0
				? lang === "en-US"
					? `${days} day${days > 1 ? "s" : ""}`
					: `${days} ${
							days === 1
								? "den"
								: days <= 4 && days >= 2
								? "dny"
								: days >= 5
								? "dní"
								: ""
					  }`
				: "";

		const components = [yearString, monthString, dayString].filter(
			(component) => component !== ""
		);

		return components.length > 0 ? components.join(", ") : "Less than a day";
	};

	return (
		<section className="skills">
			<button type="button" className="close-button" onClick={onCloseOverlay}>
				<div>
					<span />
				</div>
			</button>
			<div className="skills-container">
				<h1>Skills</h1>
				<section className="scrollable">
					<section className="skills-top">
						<div className="skill-cloud-container">
						{skillsData.map((skill) => {
									return (
										<div
											onClick={() => handleSkillClick(skill.node)}
											key={skill.node.skillName}
											className={
												skillSelected === skill.node ? "skill active" : "skill"
											}
											title={`Learning since ${skill.node.skillStartDate}`}
										>
											<img src={skill.node.skillImage} />
											<div className="skill-overlay">
												<div
													className="skill-overlay-background"
													style={{
														maxHeight: `${skill.node.skillLevelPercent}%`,
														backgroundColor: `${
															skill.node.skillLevelPercent < 25
																? "rgba(200, 20, 20, 0.5)"
																: skill.node.skillLevelPercent > 50
																? "rgba(20, 200, 0, 0.5)"
																: "rgba(200, 200, 10, 0.5)"
														}`,
													}}
												/>
											</div>
											<span className="skill-name">{skill.node.skillName}</span>
										</div>
									);
								})}
						</div>
					</section>
					<section className="skills-bottom">
						<ProjectSection
							selectedSkill={skillSelected}
							projects={projectsData}
						/>
						<InfoSection skill={skillSelected} />
					</section>
				</section>
			</div>
		</section>
	);
};

Skills.propTypes = {
	projectsData: PropTypes.array,
	skills: PropTypes.array,
	onCloseOverlay: PropTypes.func,
	isMobile: PropTypes.bool,
	antiSkillsBoxCollision: PropTypes.bool,
	lang: PropTypes.string,
};

export default Skills;
