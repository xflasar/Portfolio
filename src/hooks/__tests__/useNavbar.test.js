import { renderHook, act } from '@testing-library/react';
import { useNavbar } from '../useNavbar';

jest.mock('../../components/About/About', () => {
  const MockAbout = () => <div>About Component</div>;
  MockAbout.displayName = 'About';
  return MockAbout;
});

jest.mock('../../components/Skills/Skills', () => {
  const MockSkills = () => <div>Skills Component</div>;
  MockSkills.displayName = 'Skills';
  return MockSkills;
});

jest.mock('../../components/Projects/Projects', () => {
  const MockProjects = () => <div>Projects Component</div>;
  MockProjects.displayName = 'Projects';
  return MockProjects;
});

jest.mock('../../components/Contact/Contact', () => {
  const MockContact = () => <div>Contact Component</div>;
  MockContact.displayName = 'Contact';
  return MockContact;
});

describe('useNavbar', () => {
  let mockSetActivePage;

  beforeEach(() => {
    mockSetActivePage = jest.fn();
  });

  it('should initialize with no activePage or clickedButton', () => {
    const { result } = renderHook(() =>
      useNavbar(false, false, mockSetActivePage)
    );

    expect(result.current.handleNavbarPageRender('')).toBeNull();
  });

  it('should update activePage and clickedButton on handleNavbar', () => {
    const { result } = renderHook(() =>
      useNavbar(false, false, mockSetActivePage)
    );

    const mockEvent = { target: {} };
    mockEvent.target.getBoundingClientRect = jest.fn(() => ({
      x: 100,
      y: 200,
      width: 50,
      height: 50,
    }));

    act(() => {
      result.current.handleNavbar(mockEvent, 'about');
    });

    expect(mockSetActivePage).toHaveBeenCalledWith('about');
    expect(result.current.handleNavbarPageRender('about')).not.toBeNull();
  });

  it('should indirectly test handleAboutCallback', () => {
    const { result } = renderHook(() =>
      useNavbar(false, false, mockSetActivePage)
    );

    const mockEvent = { target: {} };
    mockEvent.target.getBoundingClientRect = jest.fn(() => ({
      x: 100,
      y: 200,
      width: 50,
      height: 50,
    }));

    act(() => {
      result.current.handleNavbar(mockEvent, 'about');
    });

    const renderedElement = result.current.handleNavbarPageRender('about');
    expect(renderedElement).not.toBeNull();

    act(() => {
      renderedElement.props.children.props.redirectTo('about');
    });

    expect(mockSetActivePage).toHaveBeenCalledWith('');
    jest.advanceTimersByTime(500);
    expect(mockSetActivePage).toHaveBeenCalledWith('about');
  });

  it('should indirectly test handleOverlayClose', () => {
    const { result } = renderHook(() =>
      useNavbar(false, false, mockSetActivePage)
    );

    const mockEvent = { target: {} };
    mockEvent.target.getBoundingClientRect = jest.fn(() => ({
      x: 100,
      y: 200,
      width: 50,
      height: 50,
    }));

    act(() => {
      result.current.handleNavbar(mockEvent, 'about');
    });

    const renderedElement = result.current.handleNavbarPageRender('about');
    expect(renderedElement).not.toBeNull();

    act(() => {
      renderedElement.props.children.props.onCloseOverlay();
    });

    expect(mockSetActivePage).toHaveBeenCalledWith('');
  });

  it('should render correct component for each activePage', () => {
    const { result } = renderHook(() =>
      useNavbar(false, false, mockSetActivePage)
    );

    const mockEvent = { target: {} };
    mockEvent.target.getBoundingClientRect = jest.fn(() => ({
      x: 100,
      y: 200,
      width: 50,
      height: 50,
    }));

    act(() => {
      result.current.handleNavbar(mockEvent, 'about');
    });

    const aboutElement = result.current.handleNavbarPageRender('about');
    expect(aboutElement.props.children.type.displayName || aboutElement.props.children.type.name).toBe('About');

    act(() => {
      result.current.handleNavbar(mockEvent, 'skills');
    });

    const skillsElement = result.current.handleNavbarPageRender('skills');
    expect(skillsElement.props.children.type.displayName || skillsElement.props.children.type.name).toBe('Skills');

    act(() => {
      result.current.handleNavbar(mockEvent, 'projects');
    });

    const projectsElement = result.current.handleNavbarPageRender('projects');
    expect(projectsElement.props.children.type.displayName || projectsElement.props.children.type.name).toBe('Projects');

    act(() => {
      result.current.handleNavbar(mockEvent, 'contact');
    });

    const contactElement = result.current.handleNavbarPageRender('contact');
    expect(contactElement.props.children.type.displayName || contactElement.props.children.type.name).toBe('Contact');

    act(() => {
      result.current.handleNavbar(mockEvent, '');
    })

    const nullElement = result.current.handleNavbarPageRender('');
    expect(nullElement).toBeNull()
  });

  it('should handle navigation animation correctly', () => {
    const { result } = renderHook(() =>
      useNavbar(false, false, mockSetActivePage)
    );

    const mockEvent = {
      target: {
        classList: {
          add: jest.fn(),
          remove: jest.fn(),
        },
      },
    };

    act(() => {
      result.current.handleNavAnimation(mockEvent);
    });

    expect(mockEvent.target.classList.add).toHaveBeenCalledWith('hoverAnim');

    act(() => {
      result.current.handleNavAnimationEnd(mockEvent);
    });

    expect(mockEvent.target.classList.remove).toHaveBeenCalledWith('hoverAnim');
  });

  it('should update link classes in sequence with delay', async () => {
    jest.useFakeTimers();

    const { result } = renderHook(() =>
      useNavbar(false, false, mockSetActivePage)
    );

    const linkClasses = ['.about-nav', '.skills-nav', '.projects-nav', '.contact-nav'];
    document.querySelector = jest.fn().mockImplementation((selector) => ({
      removeAttribute: jest.fn(),
      className: '',
    }));

    act(() => {
      jest.advanceTimersByTime(2000);
    });

    for (let i = 0; i < linkClasses.length; i++) {
      await act(async () => {
        jest.advanceTimersByTime(1000);
      });
      expect(document.querySelector).toHaveBeenCalledWith(linkClasses[i]);
    }

    jest.useRealTimers();
  });
});
