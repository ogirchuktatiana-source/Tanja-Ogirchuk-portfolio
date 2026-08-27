/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Header from './components/Header';
import Hero from './components/Hero';
import Roadmap from './components/Roadmap';
import SelectedWork from './components/SelectedWork';
import Testimonials from './components/Testimonials';
import SkillsFooter from './components/SkillsFooter';
import DocServerAdminCaseStudy from './components/DocServerAdminCaseStudy';
import { Theme } from './types';

export default function App() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' ? 'dark' : 'light';
    }
    return 'light';
  });
  const [activeSection, setActiveSection] = useState('about');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<string | null>(null);
  const [isRoadmapUnlocked, setIsRoadmapUnlocked] = useState<boolean>(false);

  const handleUnlockRoadmap = () => {
    setIsRoadmapUnlocked(true);
  };

  useEffect(() => {
    const root = window.document.documentElement;
    const body = window.document.body;
    if (theme === 'dark') {
      root.classList.add('dark');
      body.classList.add('dark');
    } else {
      root.classList.remove('dark');
      body.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Track active section on scroll to highlight nav items accordingly
  useEffect(() => {
    const handleScroll = () => {
      const mappings = [
        { id: 'hero', key: 'about' },
        { id: 'work', key: 'work' },
        { id: 'roadmap', key: 'career roadmap' },
        { id: 'testimonials', key: 'testimonials' },
      ];
      let currentSection = 'about';
      for (const map of mappings) {
        const element = document.getElementById(map.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Adjust offset for trigger point
          if (rect.top <= 140 && rect.bottom >= 140) {
            currentSection = map.key;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    // Initial call
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const handleCloseCaseStudy = () => {
    setSelectedCaseStudy(null);
    setTimeout(() => {
      const el = document.getElementById('work');
      if (el) {
        el.scrollIntoView({ behavior: 'instant', block: 'start' });
      }
    }, 50);
  };

  if (selectedCaseStudy === 'docserver') {
    return <DocServerAdminCaseStudy onClose={handleCloseCaseStudy} />;
  }

  return (
    <div className="min-h-screen bg-page-bg text-text-main font-sans antialiased selection:bg-[#CCE7FF] selection:text-neutral-900 dark:selection:bg-[#7A7D94] dark:selection:text-white transition-colors duration-500 pb-0">
      
      {/* Structured Sticky Navigation */}
      <Header 
        theme={theme} 
        onToggleTheme={toggleTheme} 
        activeSection={activeSection} 
        onUnlockRoadmap={handleUnlockRoadmap}
      />

      {/* Main Container */}
      <main className="w-full">
        {/* Hero Section (01) */}
        <Hero />

        {/* Selected Work Details (02) with Position Lock & Multi-Slide Progression */}
        <SelectedWork 
          onViewCaseStudy={() => setSelectedCaseStudy('docserver')} 
          isRoadmapUnlocked={isRoadmapUnlocked}
          onUnlockRoadmap={handleUnlockRoadmap}
        />

        {/* Roadmap Timeline (03), Testimonials (04), and Footer - Unlocked after Logos Part 2 */}
        <AnimatePresence>
          {isRoadmapUnlocked && (
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Roadmap Timeline (03) */}
              <Roadmap />

              {/* Testimonials (04) */}
              <Testimonials />

              {/* Capabilities (05 / 06) and Signature Footer */}
              <SkillsFooter />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

    </div>
  );
}
