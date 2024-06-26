import React from "react";
import "../../assets/components/Skills/InfoSection.scss";
const InfoSection = ({skill}) => {
	const calcExperienceState = (percent) => {
		if (percent > 75) {
			return "Senior";
		} else if (percent >= 70 && percent <= 75) {
			return "Medior/Senior";
		} else if (percent > 50) {
			return "Medior";
		} else if (percent >= 45 && percent <= 50) {
			return "Junior/Medior";
		} else if (percent > 15) {
			return "Junior";
		} else if (percent >= 10 && percent <= 15) {
			return "Entry-Level/Junior";
		} else {
			return "Entry-level";
		}
		}

	return (
		<div className="info-section">
			<h2>Info</h2>
      {skill ? (
        <div className="info-content">
				<div className="info-item">
					<span className="info-label">Skill Name</span>
					<span className="info-value" id="skill-name">
            {skill.skillName}
					</span>
				</div>
				<div className="info-item">
					<span className="info-label">Time Since Started</span>
					<span className="info-value" id="skill-time">
          {skill.skillTimeSinceStarted}
					</span>
				</div>
				<div className="info-item">
					<span className="info-label">Start Date</span>
					<span className="info-value" id="skill-start-date">
          {skill.skillStartDate}
					</span>
				</div>
				<div className="info-item">
					<span className="info-label">Skill Homepage</span>
					<a
						className="info-link"
						id="skill-url"
						href={skill.skillUrl}
					>
						{skill.skillName} Webpage
					</a>
				</div>
				<div className="info-item info-experience-item">
					<span className="info-label">Experience</span>
					<div className="progress-bar">
						<div className="progress" style={{width: skill.skillLevelPercent + "%",
													backgroundColor: `${
														skill.skillLevelPercent < 25
															? "rgba(200, 20, 20, 0.5)"
															: skill.skillLevelPercent > 50
															? "rgba(20, 200, 0, 0.5)"
															: "rgba(200, 200, 10, 0.5)"}`
													}}></div>
					</div>
					<div className="experience-state">
					    {<span>{calcExperienceState(skill.skillLevelPercent)}</span>}
					</div>
				</div>
				<div className="info-item info-description-item">
					<span className="info-label">Description</span>
					<p className="info-description" id="skill-description">
						{skill.skillDescription}
					</p>
				</div>
			</div>
      ) : (<div className="info-section-notselected"><span>Select Skill to show Info!</span></div>)}
		</div>
	)
}

export default InfoSection
