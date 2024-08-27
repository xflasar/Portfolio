import { renderHook, act } from '@testing-library/react';
import { useResponsive } from '../useResponsive';

describe('useResponsive', () => {
  beforeAll(() => {
    // Mocking window.matchMedia
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation(query => ({
        matches: query === '(any-pointer:coarse)',
        media: query,
        onchange: null,
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
  });

  // 1. Test Initial State
  it('should initialize with correct values for isMobile and antiSkillsBoxCollision', () => {
    const { result } = renderHook(() => useResponsive());

    expect(result.current.isMobile).toBe(true);
    expect(result.current.antiSkillsBoxCollision).toBe(true);
  });

  // 2. Test Resize Behavior
  it('should update isMobile and antiSkillsBoxCollision on window resize', () => {
    const { result } = renderHook(() => useResponsive());

    // Mock window innerHeight and innerWidth to simulate a mobile device
    global.innerHeight = 1040;
    global.innerWidth = 1040;

    // Trigger the resize event
    act(() => {
      global.dispatchEvent(new Event('resize'));
    });

    expect(result.current.antiSkillsBoxCollision).toBe(true);
    expect(result.current.isMobile).toBe(true);

    // Mock window innerHeight and innerWidth to simulate a non-mobile device
    global.innerHeight = 1080;
    global.innerWidth = 1080;

    // Mock matchMedia to return false for larger dimensions
    window.matchMedia.mockImplementation(query => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    }));

    act(() => {
      global.dispatchEvent(new Event('resize'));
    });

    expect(result.current.antiSkillsBoxCollision).toBe(false);
    expect(result.current.isMobile).toBe(false);
  });

  // 3. Test Effect Cleanup
  it('should remove the resize event listener on unmount', () => {
    const { unmount } = renderHook(() => useResponsive());

    const removeEventListenerSpy = jest.spyOn(window, 'removeEventListener');

    unmount();

    expect(removeEventListenerSpy).toHaveBeenCalledWith('resize', expect.any(Function));
  });
});
