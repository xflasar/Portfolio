import React from "react";
import PropTypes from "prop-types";
import "../../assets/components/Github/commitBox.scss";

const CommitBox = ({ activityData }) => {
	const { activityTitle, payload, repo, created_at } = activityData;

	console.log(payload)

	return (
		<div className="activity-card">
			<div className="card-header">
				<h3 className="activity-title">{activityTitle.replace("Event", "")}</h3>
				<span className="activity-time">
					{new Date(created_at).toLocaleDateString()}
				</span>
			</div>
			<div className="card-content">
				<h4 className="branch-name">Branch: {payload.ref}</h4>
				<p className="commit-message">{payload.commits[0].message}</p>
			</div>
			<div className="card-footer">
				<a
					href={payload.commits[0].url}
					target="_blank"
					rel="noopener noreferrer"
					className="commit-link"
				>
					View Commit
				</a>
				<span className="activity-repo">{repo.name.split("/")}</span>
			</div>
		</div>
	);
};

CommitBox.propTypes = {
	activityData: PropTypes.object.isRequired,
};

export default CommitBox;
