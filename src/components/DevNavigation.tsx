import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun, Menu, X, Code2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SECTION_IDS, handleSectionLinkClick, type SectionId } from '@/lib/scroll';

const navItems: { name: string; id: SectionId; code: string }[] = [
  { name: 'Home', id: 'home', code: 'home()' },
  { name: 'About', id: 'about', code: 'about()' },
  { name: 'Skills', id: 'skills', code: 'skills()' },
  { name: 'Projects', id: 'projects', code: 'projects()' },
  { name: 'Contact', id: 'contact', code: 'contact()' },
];

const DevNavigation = () => {
  const [isDark, setIsDark] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<SectionId>('home');

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    const darkMode = stored ? stored === 'dark' : true;
    setIsDark(darkMode);
    document.documentElement.classList.toggle('dark', darkMode);
  }, []);

  useEffect(() => {
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null
    );
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id as SectionId);
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    document.documentElement.classList.toggle('dark', newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  const goToSection = (id: SectionId) => (e: React.MouseEvent) => {
    handleSectionLinkClick(id)(e);
    setIsOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 px-4 pt-4"
    >
      <nav className="container mx-auto max-w-6xl">
        <div className="flex items-center justify-between h-16 px-4 sm:px-6 rounded-2xl border border-border bg-card/70 backdrop-blur-xl shadow-medium">
          {/* Logo */}
          <a
            href="#home"
            onClick={goToSection('home')}
            className="flex items-center space-x-2 text-xl font-bold shrink-0"
          >
            <div className="p-2 rounded-xl bg-gradient-primary">
              <Code2 className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="gradient-text">{'<GM />'}</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1 rounded-full border border-border/60 bg-background/40 p-1">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={goToSection(item.id)}
                className="relative px-4 py-2 text-sm font-mono rounded-full"
              >
                {activeSection === item.id && (
                  <motion.span
                    layoutId="activeTab"
                    className="absolute inset-0 rounded-full bg-primary/15 border border-primary/30"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span
                  className={`relative z-10 ${
                    activeSection === item.id
                      ? 'text-primary'
                      : 'text-muted-foreground hover:text-foreground'
                  } transition-colors duration-200`}
                >
                  {item.code}
                </span>
              </a>
            ))}
          </div>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center gap-2 shrink-0">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="p-2 rounded-xl"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>

            <Button
              variant="ghost"
              size="sm"
              className="md:hidden p-2 rounded-xl"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden mt-2 p-2 rounded-2xl border border-border bg-card/90 backdrop-blur-xl shadow-medium"
          >
            {navItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.06 }}
              >
                <a
                  href={`#${item.id}`}
                  onClick={goToSection(item.id)}
                  className={`block py-2.5 px-4 rounded-xl font-mono text-sm ${
                    activeSection === item.id
                      ? 'text-primary bg-primary/10'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  } transition-all duration-200`}
                >
                  {item.code}
                </a>
              </motion.div>
            ))}
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
};

export default DevNavigation;
