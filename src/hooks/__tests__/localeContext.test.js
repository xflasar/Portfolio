import React from 'react';
import { render, screen, renderHook, act } from '@testing-library/react';
import '@testing-library/jest-dom'
import { LocaleProvider, useLocaleContext, LocaleContext } from '../../contexts/localeContext';

// Mock the window.navigator.language
Object.defineProperty(window.navigator, 'language', {
  value: 'en-US',
  writable: true,
});

describe('LocaleContext', () => {
  
  it('should provide the default locale based on browser language', () => {
    const TestComponent = () => {
      const { locale } = useLocaleContext();
      return <div>{locale}</div>;
    };

    render(
      <LocaleProvider>
        <TestComponent />
      </LocaleProvider>
    );

    expect(screen.getByText('en-US')).toBeInTheDocument();
  });

  it('should allow setting and updating the locale', () => {
    const TestComponent = () => {
      const { locale, setLocale } = useLocaleContext();
      return (
        <div>
          <span>{locale}</span>
          <button onClick={() => setLocale('fr-FR')}>Set Locale</button>
        </div>
      );
    };

    render(
      <LocaleProvider>
        <TestComponent />
      </LocaleProvider>
    );

    expect(screen.getByText('en-US')).toBeInTheDocument();

    // Click the button to set the locale to 'fr-FR'
    act(() => {
      screen.getByText('Set Locale').click();
    });

    expect(screen.getByText('fr-FR')).toBeInTheDocument();
  });

  it('should allow initializing the context with a custom locale', () => {
    const TestComponent = () => {
      const { locale } = useLocaleContext();
      return <div>{locale}</div>;
    };

    render(
      <LocaleContext.Provider value={{ locale: 'cs-CZ', setLocale: jest.fn() }}>
        <TestComponent />
      </LocaleContext.Provider>
    );

    expect(screen.getByText('cs-CZ')).toBeInTheDocument();
  });

  it('should correctly provide locale via renderHook', () => {
    const { result } = renderHook(() => useLocaleContext(), {
      wrapper: ({ children }) => <LocaleProvider>{children}</LocaleProvider>,
    });

    expect(result.current.locale).toBe('en-US');

    act(() => {
      result.current.setLocale('es-ES');
    });

    expect(result.current.locale).toBe('es-ES');
  });
});
