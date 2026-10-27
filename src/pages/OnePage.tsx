import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Seo from '@/components/Seo';
import { scrollToSection, type SectionId } from '@/lib/scroll';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';

const PATH_TO_SECTION: Record<string, SectionId> = {
  '/about': 'about',
  '/skills': 'skills',
  '/projects': 'projects',
  '/contact': 'contact',
};

const OnePage = () => {
  const location = useLocation();

  useEffect(() => {
    const sectionId = PATH_TO_SECTION[location.pathname];
    if (!sectionId) return;
    const raf = requestAnimationFrame(() => scrollToSection(sectionId));
    return () => cancelAnimationFrame(raf);
    // Only meant to run once, for whatever URL the page was opened with.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Seo
        title="Ganesh Murali — Frontend & Mobile Developer"
        description="Frontend & React Native developer with 3+ years building web and mobile products. Explore my background, skills, projects, and get in touch."
        path="/"
      />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
};

export default OnePage;
