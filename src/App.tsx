/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Project } from './types.ts';
import { ThemeProvider } from './context/ThemeContext.tsx';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { About } from './components/About.tsx';
import { Academics } from './components/Academics.tsx';
import { Skills } from './components/Skills.tsx';
import { Projects } from './components/Projects.tsx';
import { Experience } from './components/Experience.tsx';
import { Achievements } from './components/Achievements.tsx';
import { Contact } from './components/Contact.tsx';
import { Footer } from './components/Footer.tsx';
import { ProjectModal } from './components/ProjectModal.tsx';
import { ResumeModal } from './components/ResumeModal.tsx';

function PortfolioApp() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [projectModalTab, setProjectModalTab] = useState<'demo' | 'architecture' | 'challenges'>('demo');
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  // 8 Target Sections
  const sectionIds = ['home', 'about', 'academics', 'skills', 'projects', 'experience', 'achievements', 'contact'];

  // Handle Initial Load with Shareable URL Hash (e.g. /#academics or /#projects)
  useEffect(() => {
    const handleInitialHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash && sectionIds.includes(hash)) {
        setActiveSection(hash);
        setTimeout(() => {
          const el = document.getElementById(hash);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 150);
      }
    };

    handleInitialHash();

    // Listen for browser Back & Forward button navigation
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash && sectionIds.includes(hash)) {
        setActiveSection(hash);
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('popstate', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('popstate', handleHashChange);
    };
  }, []);

  // Track active section on scroll with passive listener
  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      const scrollPos = window.scrollY + 240;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPos >= top) {
            if (activeSection !== id) {
              setActiveSection(id);
              // Update URL hash without jumping
              clearTimeout(scrollTimeout);
              scrollTimeout = setTimeout(() => {
                if (window.location.hash !== `#${id}`) {
                  window.history.replaceState(null, '', `#${id}`);
                }
              }, 200);
            }
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [activeSection]);

  // Handle ESC key to close any open modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
        setIsResumeOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleOpenProject = (project: Project, tab: 'demo' | 'architecture' | 'challenges' = 'demo') => {
    setSelectedProject(project);
    setProjectModalTab(tab);
  };

  const handleOpenContact = () => {
    const contactEl = document.getElementById('contact');
    if (window.location.hash !== '#contact') {
      window.history.pushState(null, '', '#contact');
    }
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col selection:bg-blue-600 selection:text-white transition-colors duration-200">
      {/* 1. Website Navigation Bar */}
      <Navbar
        onOpenResume={() => setIsResumeOpen(true)}
        activeSection={activeSection}
      />

      {/* Main Content Sections in exact required order */}
      <main className="flex-1">
        {/* Section 1: Home */}
        <Hero
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenContact={handleOpenContact}
        />

        {/* Section 2: About Me */}
        <About />

        {/* Section 3: Academic Career */}
        <Academics />

        {/* Section 4: Technical Skills */}
        <Skills />

        {/* Section 5: Projects */}
        <Projects onSelectProject={handleOpenProject} />

        {/* Section 6: Experience & Practical Training */}
        <Experience />

        {/* Section 7: Achievements & Certifications */}
        <Achievements />

        {/* Section 8: Contact */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Project Modal with Sandbox Simulation & Architecture */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        initialTab={projectModalTab}
      />

      {/* ATS-Optimized Print & View Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <PortfolioApp />
    </ThemeProvider>
  );
}
