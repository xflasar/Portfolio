import React from "react";
import PropTypes from 'prop-types';
import "../../assets/components/About/AboutCard.scss"

const AboutCard = ({ data }) => {
  return (
    <div className="about-card">
      <div className="about-card-content">
        <h2 className="about-card-title">{data.H}</h2>
        {Array.isArray(data.P) ? (
          data.P.map((section, index) => (
            <div key={index} className="about-card-section">
              {section.subheader && <h3 className="about-card-subheader">{section.subheader}</h3>}
              <p className="about-card-description">{section.text}</p>
            </div>
          ))
        ) : (
          <p className="about-card-description">{data.P}</p>
        )}
      </div>
    </div>
  );
};

AboutCard.propTypes = {
  data: PropTypes.shape({
    H: PropTypes.string.isRequired,
    P: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(
        PropTypes.shape({
          subheader: PropTypes.string,
          text: PropTypes.string.isRequired
        })
      )
    ]).isRequired
  }).isRequired
};

export default AboutCard;
