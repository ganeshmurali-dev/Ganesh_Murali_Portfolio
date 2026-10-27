import type { MouseEvent } from 'react';

export const SECTION_IDS = ['home', 'about', 'skills', 'projects', 'contact'] as const;

export type SectionId = (typeof SECTION_IDS)[number];

export const scrollToSection = (id: SectionId) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

export const handleSectionLinkClick = (id: SectionId) => (e: MouseEvent) => {
  e.preventDefault();
  scrollToSection(id);
};
