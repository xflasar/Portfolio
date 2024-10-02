import { useState, useEffect, useContext } from 'react';
import { LocaleContext } from '../contexts/localeContext';

export const useLocale = (path = 'Home') => {
  const { locale } = useContext(LocaleContext);
  const [localeData, setLocaleData] = useState(null);

  const getLocaleData = async () => {
    const lang = locale.split('-').map((val, index) => {
      if (index === 1) return val.toUpperCase();
      return val;
    }).join('-');

    try {
      const data = await require(`../localize/${path}/${path.toString().toLowerCase()}.${lang}.json`);
      return data;
    } catch (error) {
      console.error(`Error loading language data: ${error.message}`);
      return null;
    }
  };

  useEffect(() => {
    const loadLocaleData = async () => {
      const data = await getLocaleData();
      setLocaleData(data);
    };
    
    loadLocaleData();
  }, [locale, path]);

  return {
    localeData,
  };
};
