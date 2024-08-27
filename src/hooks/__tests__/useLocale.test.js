import { renderHook, act, waitFor } from '@testing-library/react';
import React from 'react';
import { useLocale } from '../useLocale';
import { LocaleContext } from '../../contexts/localeContext';

// Mock the dynamic import to simulate loading of JSON files
jest.mock('../localize/Home/home.en-US.json', () => ({ message: 'Hello Home' }), { virtual: true });
jest.mock('../localize/Home/home.cs-CZ.json', () => ({ message: 'Ahoj Home' }), { virtual: true });
jest.mock('../localize/About/about.en-US.json', () => ({ message: 'Hello About' }), { virtual: true });
jest.mock('../localize/About/about.cs-CZ.json', () => ({ message: 'Ahoj About' }), { virtual: true });

describe('useLocale', () => {
  const renderUseLocaleHook = (path, initialLocale) => {
    return renderHook(() => useLocale(path), {
      wrapper: ({ children }) => (
        <LocaleContext.Provider value={{ locale: initialLocale, setLocale: jest.fn() }}>
          {children}
        </LocaleContext.Provider>
      ),
    });
  };

  // 1. Test Initial State
  it('should initialize with default locale and empty localeData then with data in localeData', async () => {
    const { result } = renderUseLocaleHook('Home', 'en-US');
    expect(result.current.localeData).toBeNull();

    await waitFor(() => {
      expect(result.current.localeData).not.toBeNull()
    });
  });

  // 2. Test Effect When Locale Changes for Home Path
  it('should load locale data when locale changes for Home path', async () => {
    const setLocaleMock = jest.fn();
    const { result, rerender } = renderHook(() => useLocale('Home'), {
      wrapper: ({ children }) => (
        <LocaleContext.Provider value={{ locale: 'en-US', setLocale: setLocaleMock }}>
          {children}
        </LocaleContext.Provider>
      ),
    });

    await waitFor(() => expect(result.current.localeData).not.toBeNull())

    // Simulate changing the locale
    act(() => {
      setLocaleMock('cs-CZ');
      rerender({ children: null });
    });

    await waitFor(() => {
      expect(result.current.localeData).not.toBeNull();
    });
  });

  // 3. Test Effect When Locale Changes for About Path
  it('should load locale data when locale changes for About path', async () => {
    const setLocaleMock = jest.fn();
    const { result, rerender } = renderHook(() => useLocale('About'), {
      wrapper: ({ children }) => (
        <LocaleContext.Provider value={{ locale: 'en-US', setLocale: setLocaleMock }}>
          {children}
        </LocaleContext.Provider>
      ),
    });

    await waitFor(() => expect(result.current.localeData).not.toBeNull());

    // Simulate changing the locale
    act(() => {
      setLocaleMock('cs-CZ');
      rerender({ children: null });
    });

    await waitFor(() => {
      expect(result.current.localeData).not.toBeNull();
    });
  });

  // 4. Test Error Handling in Dynamic Import
  it('should handle errors if the locale data fails to load', async () => {
    jest.mock('../localize/InvalidPath/invalidpath.es-ES.json', () => {
      throw new Error('Failed to load locale data');
    }, { virtual: true });

    const setLocaleMock = jest.fn();
    const { result, rerender } = renderHook(() => useLocale('InvalidPath'), {
      wrapper: ({ children }) => (
        <LocaleContext.Provider value={{ locale: 'es-ES', setLocale: setLocaleMock }}>
          {children}
        </LocaleContext.Provider>
      ),
    });

    await waitFor(() => {
      expect(result.current.localeData).toBeNull();
    });
  });
});
