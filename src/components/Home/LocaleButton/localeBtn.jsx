import React from 'react';
import PropTypes from 'prop-types';
import '../../../assets/components/Home/LocaleBtn/localeBtn.scss';

const LocaleBtn = ({ locale, hndlLocaleChange }) => {
  const handleLocaleChange = (e) => {
    e.preventDefault();
    hndlLocaleChange(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div className='locale-button-container'>
      <button type='button' className='locale-button' onClick={(e) => handleLocaleChange(e)} value={locale === 'en-US' ? 'cs-CZ' : 'en-US'}>{locale === 'en-US' ? 'CZ' : 'EN'}</button>
    </div>
  );
};

LocaleBtn.propTypes = {
  locale: PropTypes.string.isRequired,
  hndlLocaleChange: PropTypes.func.isRequired
};

export default LocaleBtn;
