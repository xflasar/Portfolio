import React, { createContext, useContext, useState } from 'react';

export const LocaleContext = createContext();

export const LocaleProvider = ({ children }) => {
  const isBrowser = typeof window !== 'undefined';
  const defaultLocale = isBrowser ? window.navigator.language : 'en-US';

  const [locale, setLocale] = useState(defaultLocale);

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
};

export const useLocaleContext = () => {
  return useContext(LocaleContext);
};
