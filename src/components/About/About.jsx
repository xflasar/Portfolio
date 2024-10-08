import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import '../../assets/components/About/About.scss';
import { useLocale } from '../../hooks/useLocale';
import CloseButton from '../closeButton';

const About = ({ redirectTo, onCloseOverlay }) => {
  const { localeData } = useLocale('About')  

  if(!localeData) return null

  const handleFreelancingProjectsClick = () => {
    redirectTo('projects');
  };

  return (
    <div className="about">
      <CloseButton onCloseOverlay={onCloseOverlay} />
      <h1>{localeData?.AboutH1}</h1>
      <div className="about-container">
        <section className="about-container-intro">
          <h2>{localeData?.IntroH2}</h2>
          <p>{localeData?.IntroP}</p>
        </section>
        <section className="about-container-workflow">
          <h2>{localeData?.WorkflowH2}</h2>
          <div className="key-point">
            <span className="key-word">Frontend</span>
            <p className="key-description">{localeData?.WorkflowFrontendKD}</p>
          </div>
          <div className="key-point">
            <span className="key-word">Backend</span>
            <p className="key-description">{localeData?.WorkflowBackendKD}</p>
          </div>
          <div className="key-point">
            <span className="key-word">Freelancing</span>
            <p className="key-description">{localeData?.WorkflowFreelanceKD}<a onClick={handleFreelancingProjectsClick}>{localeData?.WorkflowFreelanceA}</a>.</p>
          </div>
        </section>
        <section className="about-container-journey">
          <h2>{localeData?.JourneyH2}</h2>
          <p>{localeData?.JourneyP}</p>
        </section>
        <section className="about-container-motivation">
          <h2>{localeData?.MotivationH2}</h2>
          <p>{localeData?.MotivationP}</p>
        </section>
      </div>
    </div>
  );
};

About.propTypes = {
  redirectTo: PropTypes.func,
  onCloseOverlay: PropTypes.func,
  locale: PropTypes.string
};

export default About;
