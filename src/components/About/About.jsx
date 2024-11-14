import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import '../../assets/components/About/About.scss';
import { useLocale } from '../../hooks/useLocale';
import CloseButton from '../closeButton';
import AboutCard from './AboutCards';

const About = ({ redirectTo, onCloseOverlay }) => {
  const { localeData } = useLocale('About')  

  if(!localeData) return null

  const handleFreelancingProjectsClick = () => {
    redirectTo('projects');
  };

  return (
    <div className="about">
      <CloseButton onCloseOverlay={onCloseOverlay} />
      <h1>{localeData?.Title}</h1>
      <div className="about-container">
        <section className='top'>
          <AboutCard data={localeData.Intro} className='intro'/>
          <AboutCard data={localeData.Journey} className='journey'/>
        </section>
        <section className='middle'>
          <AboutCard data={localeData.Frontend} className='frontend'/>
          <AboutCard data={localeData.Backend} className='backend'/>
          <AboutCard data={localeData.Freelancing} className='freelancing'/>
        </section>
        <section className='bottom'>
          <AboutCard data={localeData.Motivation} className='motivation'/>
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
