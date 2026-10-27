import { Github, Linkedin, Instagram, Code2, Mail } from 'lucide-react';
import { handleSectionLinkClick, type SectionId } from '@/lib/scroll';

const Footer = () => {
  const year = new Date().getFullYear();

  const navItems: { name: string; id: SectionId }[] = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/ganeshmurali-dev', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/ganesh-murali-/', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/__gane.sha__?igsh=MWk0Nmx2ZnNybXFvMA==', label: 'Instagram' },
    { icon: Mail, href: 'mailto:ganeshmdckap@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="border-t border-border bg-card/40 mt-24">
      <div className="container mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <a
            href="#home"
            onClick={handleSectionLinkClick('home')}
            className="flex items-center gap-2 text-lg font-bold"
          >
            <div className="p-2 rounded-xl bg-gradient-primary">
              <Code2 className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="gradient-text">{'<GM />'}</span>
          </a>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-mono text-sm">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={handleSectionLinkClick(item.id)}
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="p-2 rounded-xl border border-border hover:border-primary hover:text-primary text-muted-foreground transition-all duration-200"
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border/60 text-center text-xs font-mono text-muted-foreground">
          {'// © '}{year}{' Ganesh Murali — built with React & Tailwind'}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
