/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * SelectedWork Component with Seamless Scroll-Based Project Switching & Section Locking
 * Features:
 * - Two-column editorial layout (Fixed sticky sidebar on left, dynamic content on right)
 * - Seamless wheel scroll gesture detection with debounce, thresholding, and cooldown locks
 * - Part 1 & Part 2 multi-slide transitions across projects
 * - Position lock: Restricts advancement to 03 / EVOLUTION ROADMAP until reaching the end of Logos Part 2
 * - Touch swipe gesture support for mobile & tablet devices
 * - Full keyboard accessibility (ArrowUp/Down, PageUp/Down, Home/End)
 * - Direction-aware smooth fade & vertical slide animations via Motion
 * - Synchronized active state in sidebar with auto-scroll into view
 */

import React, { useState, useRef, useEffect, useCallback } from 'react';
import type { WheelEvent, TouchEvent, KeyboardEvent, MouseEvent } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  ArrowUpRight, 
  Info,
  ChevronDown,
  ChevronUp,
  MousePointer,
  Lock,
  Unlock,
  CheckCircle2,
  ArrowDown
} from 'lucide-react';
import { motion, AnimatePresence, Variants } from 'motion/react';
import { PROJECTS_DATA } from '../data';

// Import local project assets with TS ignore directives to prevent compilation type check failures

// Slide DocsServer AdminPanel
import docServerStats from '../assets/images/DocServerAdminPanel/Statistics.png';
// @ts-ignore
import docServerAI from '../assets/images/DocServerAdminPanel/Al_Integration.png';
import docServerJWT from '../assets/images/DocServerAdminPanel/JWT_Settings.png';
// @ts-ignore
import docServerIP from '../assets/images/DocServerAdminPanel/IP_Filtering.png';

// Slide Admin_docs_cloud
import DocsCloudAct from '../assets/images/admin_docs_cloud/DocsCloud_User_activity.svg';
// @ts-ignore
import DocsCloudUser from '../assets/images/admin_docs_cloud/DocsCloud_Prepaid_reduction_users.png';

// Slide API
import apiDeveloper from '../assets/images/API_Documentation/API.png';
// @ts-ignore
import apiMetod from '../assets/images/API_Documentation/API_method.png';

// Slide Integration-edition
import IntegrationEdition from '../assets/images/integration_edition/Integration_Edition.png';
// @ts-ignore

// Slide landing
import landingdevices from '../assets/images/landing_pages/devices.png';
import landingManage from '../assets/images/landing_pages/Landing_Manage.png';

// Slide marketplace
import ClaudeDocSpace from '../assets/images/marketplace/marketplaceClaudeDocSpace.png';
import ClaudeM from '../assets/images/marketplace/marketplaceClaudeM.png';

// Slide Presentations
import presentationsImg from '../assets/images/presentations/presentations.png';
// @ts-ignore

// Slide illustrations
import illustrations_dev from '../assets/images/illustrations/illustrations_dev.png';
// @ts-ignore
import illustrations_Cover from '../assets/images/illustrations/illustrations_Cover.png';
// @ts-ignore
import illustrations_AI from '../assets/images/illustrations/illustrations_AI.png'
// @ts-ignore

// Slide logos
import logosImg from '../assets/images/logos/Logo_Dev.png';

interface SelectedWorkProps {
  onViewCaseStudy?: () => void;
  isRoadmapUnlocked?: boolean;
  onUnlockRoadmap?: () => void;
}

export default function SelectedWork({ 
  onViewCaseStudy, 
  isRoadmapUnlocked = false, 
  onUnlockRoadmap 
}: SelectedWorkProps) {
  // Active Project Index state (0 to PROJECTS_DATA.length - 1)
  const [activeIndex, setActiveIndex] = useState<number>(0);
  
  // Transition direction: 'down' (next) or 'up' (prev)
  const [direction, setDirection] = useState<'down' | 'up'>('down');
  
  // Cooldown / lock to prevent rapid accidental skipping during wheel scrolls
  const isLockedRef = useRef<boolean>(false);
  const wheelDeltaAccumulator = useRef<number>(0);
  const touchStartY = useRef<number | null>(null);
  const touchStartTime = useRef<number>(0);

  // References for DOM accessibility & auto-scrolling
  const contentAreaRef = useRef<HTMLDivElement>(null);
  const sidebarButtonsRef = useRef<(HTMLButtonElement | null)[]>([]);

 // Track active slide index for each project
  const [slideIndices, setSlideIndices] = useState<Record<string, number>>({
    'cloud-admin': 0,
    'admin-docs-cloud': 0,
    'api-doc': 0,
    'integration-edition': 0,
    'landing-pages': 0,
    'presentations': 0,
    'marketplace': 0,
    'illustrations': 0,
    'logos': 0,
  });

  // Slide content references mapping purely to local high-fidelity screenshots/visuals
  const projectSlides: Record<string, { label: string; caption: string; src: string }[]> = {
    
    // Slide Docs Server Admin Panel
    'cloud-admin': [
      {
        label: 'Statistics Dashboard',
        caption: 'Statistics Dashboard - Real-time active sessions, server node loads, and active tenant connection details.',
        src: docServerStats
      },
      {
        label: 'Al Integration',
        caption: 'Al Integration Settings - Connected AI model management, API endpoint configurations, and supported task details.',
        src: docServerAI
      },
      {
        label: 'Security Settings',
        caption: 'JWT Configuration — Manage authorization headers, secret keys, token expiration times, and authentication algorithms.',
        src: docServerJWT
      },
      {
        label: 'Access Rules',
        caption: 'IP Filtering — Access control management, custom allow/deny rules configuration, and IP range restrictions.',
        src: docServerIP
      },
    ],

    // Slide Admin_docs_cloud
    'admin-docs-cloud': [
      {
        label: 'DocsCloud Prepaid reduction users',
        caption: 'Focused on risk-mitigation patterns (such as dynamic warnings during user seat downgrades) to eliminate accidental data loss, reduce support ticket volume, and build trust at critical financial touchpoints.',
        src: DocsCloudUser
      },
       {
        label: 'Organization Directories',
        caption: 'Workspace Directory - Multi-tenant team folders, active storage allocations, and nested organizational assets tree.',
        src: DocsCloudAct
      },
      // TODO: Permissions System and Log Diagnostic Monitoring screenshots are not yet exported.
    ],

    // Slide API
    'api-doc': [
      {
        label: 'Endpoint Catalog',
        caption: 'api Developer - Complete list of HTTP method endpoints with real-time text query autocomplete and filter logic.',
        src: apiDeveloper
      },
      {
        label: 'Figma Variables & Tokens',
        caption: 'api Metod - Systematic color, spacing, and typography semantic token parameters map.',
        src: apiMetod
      },
      // TODO: Detailed Inspector and Quick Start Snippet screenshots are not yet exported.
    ],

    // Slide Integration-edition
    'integration-edition': [
      {
        label: 'Integration Edition',
        caption: 'ONLYOFFICE Integration Edition service, designed to allow you to test all the editor is features before purchasing.',
        src: IntegrationEdition
      },
      // TODO: Visual Workflow Builder and Webhook Monitoring Console screenshots are not yet exported.
    ],

    // Slide landing-pages
    'landing-pages': [
       {
        label: 'Marketing Case Study',
        caption: 'Conversion-optimized Enterprise Marketing Landing Page with high typographic contrast and spacious layout.',
        src: landingManage
      },
      {
        label: 'Marketing Case Study',
        caption: 'Conversion-optimized Enterprise Marketing Landing Page with high typographic contrast and spacious layout.',
        src: landingdevices
      },
      
      // TODO: Pricing Feature Matrix and Conversion A/B analytics screenshots are unable to load offline.
    ],
    
    // Slide Presentations
    'presentations': [
      {
        label: 'Corporate Slide Deck',
        caption: 'Corporate key stakeholders presentation deck communicating complex systems details concisely.',
        src: presentationsImg
      },
      // TODO: Master Aspect Ratio Ruler and Typography Scale layouts are not yet exported.
    ],

    // Slide Marketplace
    'marketplace': [
      {
        label: 'App Store Grid',
        caption: 'SaaS App Store Directory layout showcasing discoverable category filter buttons with pristine alignments.',
        src: ClaudeDocSpace
      },
      {
        label: 'App Store Grid',
        caption: 'SaaS App Store Directory layout showcasing discoverable category filter buttons with pristine alignments.',
        src: ClaudeM
      },
      // TODO: Application Direct Consent and Developer Publisher views are not yet exported.
    ],

      // Slide Illustrations
    'illustrations': [
      {
        label: 'Illustration for dev blog',
        caption: 'Elegant vector brand illustration style guide detailing structural drawing lines and soft shadows.',
        src: illustrations_dev
      },
       {
        label: 'Illustration AI',
        caption: 'Elegant vector brand illustration style guide detailing structural drawing lines and soft shadows.',
        src: illustrations_AI
      },
       {
        label: 'illustrations Cover for YouTube',
        caption: 'Elegant vector brand illustration style guide detailing structural drawing lines and soft shadows.',
        src: illustrations_Cover
      },
      // TODO: Character Anatomy and 3D Isometric grid models are not yet exported.
    ],

      // Slide logos
    'logos': [
      {
        label: 'Logo',
        caption: 'Timeless branding logo and vector grid guidelines for startups and established global teams.',
        src: logosImg
      },
      // TODO: Contrast Adaptability matrix and Brand Spacing layouts are not yet exported.
    ],
  };
  const projectDescriptions: Record<string, string> = {
    'cloud-admin': 'Designed the SaaS administrative panel from scratch to help enterprise clients easily manage self-hosted collaboration servers. Focused on data visualization to build clear dashboards for tracking real-time server metrics and capacity limits.',
    'admin-docs-cloud': 'Engineered multi-tenant administration workflows and document libraries, bringing advanced search patterns, file collaboration permissions, and live diagnostic monitoring to cloud deployments.',
    'design-system': 'Developed clean technical developer portals. Built detailed API Documentation layouts that map direct JSON payloads and authorization guidelines for developers to scale services seamlessly.',
    'integration-edition': 'Designed the integration framework to seamlessly embed collaborative editors into third-party SaaS ecosystems, streamlining API configurations and developer hand-off guides during platform partnerships.',
    'landing-pages': 'Crafted high-converting, premium marketing landing pages for global enterprise products. Leveraged strict grid alignments, compelling typography pairings, and micro-interactions.',
    'presentations': 'Designed clean, high-impact corporate presentations and sales slide decks for key stakeholding panels. Focused on clear visual hierarchy, storytelling, and elegant data representation.',
    'marketplace': 'Designed a robust, scalable cloud application and plugin marketplace interface, connecting enterprise solutions with modular extensions and single-click installer widgets.',
    'illustrations': 'Crafted a versatile vector illustration style guide, developing branded key visuals, custom isometric scenes, and unique character design libraries used across branding assets.',
    'logos': 'Created iconic, timeless corporate identity solutions and clever negative-space logo grid constructions for digital tech ventures and established enterprises alike.',
  };

  const totalProjects = PROJECTS_DATA.length;
  const currentProject = PROJECTS_DATA[activeIndex];
  const currentSlides = projectSlides[currentProject.id] || [];
  const activeSlideIdx = slideIndices[currentProject.id] || 0;

  // Determine if user has reached the final project (Logos) and final slide (Part 2)
  const isAtFinalProject = activeIndex === totalProjects - 1;
  const isAtFinalSlideOfFinalProject = isAtFinalProject && activeSlideIdx === (currentSlides.length - 1);

  // Smoothly switch to a specific project index
  const goToProject = useCallback((targetIndex: number) => {
    if (targetIndex === activeIndex || targetIndex < 0 || targetIndex >= totalProjects) return;
    
    setDirection(targetIndex > activeIndex ? 'down' : 'up');
    setActiveIndex(targetIndex);
    // Reset slide index for target project
    setSlideIndices(prev => ({
      ...prev,
      [PROJECTS_DATA[targetIndex].id]: 0,
    }));

    // Auto-scroll the corresponding sidebar button into view gracefully
    const btn = sidebarButtonsRef.current[targetIndex];
    if (btn) {
      btn.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [activeIndex, totalProjects]);

  // Step forward through slides and then projects
  const goToNextStep = useCallback(() => {
    const slides = projectSlides[currentProject.id] || [];
    const currentSlide = slideIndices[currentProject.id] || 0;

    // 1. Advance slide within current project if more slides exist
    if (currentSlide < slides.length - 1) {
      setSlideIndices(prev => ({
        ...prev,
        [currentProject.id]: currentSlide + 1,
      }));
      return;
    }

    // 2. Advance to next project if available
    if (activeIndex < totalProjects - 1) {
      const nextIdx = activeIndex + 1;
      setDirection('down');
      setActiveIndex(nextIdx);
      setSlideIndices(prev => ({
        ...prev,
        [PROJECTS_DATA[nextIdx].id]: 0,
      }));
      const btn = sidebarButtonsRef.current[nextIdx];
      if (btn) {
        btn.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
      return;
    }

    // 3. At the end of Logos Part 2: Unlock and advance to 03 / EVOLUTION ROADMAP
    if (isAtFinalSlideOfFinalProject) {
      if (onUnlockRoadmap) {
        onUnlockRoadmap();
      }
      setTimeout(() => {
        const roadmapEl = document.getElementById('roadmap');
        if (roadmapEl) {
          roadmapEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, [activeIndex, totalProjects, currentProject.id, slideIndices, projectSlides, isAtFinalSlideOfFinalProject, onUnlockRoadmap]);

  // Step backward through slides and then projects
  const goToPrevStep = useCallback(() => {
    const currentSlide = slideIndices[currentProject.id] || 0;

    // 1. If currently on slide > 0 in this project, step back
    if (currentSlide > 0) {
      setSlideIndices(prev => ({
        ...prev,
        [currentProject.id]: currentSlide - 1,
      }));
      return;
    }

    // 2. If at slide 0, step back to previous project (and its last slide)
    if (activeIndex > 0) {
      const prevIdx = activeIndex - 1;
      const prevProjId = PROJECTS_DATA[prevIdx].id;
      const prevProjSlides = projectSlides[prevProjId] || [];
      setDirection('up');
      setActiveIndex(prevIdx);
      setSlideIndices(prev => ({
        ...prev,
        [prevProjId]: Math.max(0, prevProjSlides.length - 1),
      }));
      const btn = sidebarButtonsRef.current[prevIdx];
      if (btn) {
        btn.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }
  }, [activeIndex, currentProject.id, slideIndices, projectSlides]);

  // Handle Wheel Events with Debounce & Threshold Accumulator
  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    // If locked during animation cooldown, ignore
    if (isLockedRef.current) return;

    // Allow native scrolling inside sidebar list if it overflows
    const target = e.target as HTMLElement;
    if (target && target.closest('#work-sidebar-list')) {
      return;
    }

    const deltaY = e.deltaY;
    wheelDeltaAccumulator.current += deltaY;

    const THRESHOLD = 35; // Sensitivity threshold for intentional wheel/touchpad flick

    if (Math.abs(wheelDeltaAccumulator.current) >= THRESHOLD) {
      if (wheelDeltaAccumulator.current > 0) {
        // Scrolling Down
        e.preventDefault();
        isLockedRef.current = true;
        goToNextStep();
        wheelDeltaAccumulator.current = 0;
        setTimeout(() => {
          isLockedRef.current = false;
        }, 500);
      } else if (wheelDeltaAccumulator.current < 0) {
        // Scrolling Up
        if (activeIndex > 0 || (slideIndices[currentProject.id] || 0) > 0) {
          e.preventDefault();
          isLockedRef.current = true;
          goToPrevStep();
          wheelDeltaAccumulator.current = 0;
          setTimeout(() => {
            isLockedRef.current = false;
          }, 500);
        } else {
          // At the very top (cloud-admin slide 0), allow natural page scroll up to Hero
          wheelDeltaAccumulator.current = 0;
        }
      }
    }
  };

  // Reset accumulator when wheel is idle
  useEffect(() => {
    const timer = setInterval(() => {
      wheelDeltaAccumulator.current *= 0.6;
    }, 100);
    return () => clearInterval(timer);
  }, []);

  // Touch Swipe Handlers for Mobile / Touchscreens
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartY.current = e.touches[0].clientY;
    touchStartTime.current = Date.now();
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartY.current === null || isLockedRef.current) return;

    const touchEndY = e.changedTouches[0].clientY;
    const diffY = touchStartY.current - touchEndY;
    const timeElapsed = Date.now() - touchStartTime.current;

    // Swipe criteria: at least 40px delta within 600ms
    if (Math.abs(diffY) > 40 && timeElapsed < 600) {
      if (diffY > 0) {
        // Swiped Up -> Advance Step
        isLockedRef.current = true;
        goToNextStep();
        setTimeout(() => { isLockedRef.current = false; }, 500);
      } else if (diffY < 0) {
        // Swiped Down -> Return Step
        if (activeIndex > 0 || (slideIndices[currentProject.id] || 0) > 0) {
          isLockedRef.current = true;
          goToPrevStep();
          setTimeout(() => { isLockedRef.current = false; }, 500);
        }
      }
    }

    touchStartY.current = null;
  };

  // Keyboard Navigation Support
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (isLockedRef.current) return;

    if (e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === 'j') {
      e.preventDefault();
      isLockedRef.current = true;
      goToNextStep();
      setTimeout(() => { isLockedRef.current = false; }, 450);
    } else if (e.key === 'ArrowUp' || e.key === 'PageUp' || e.key === 'k') {
      if (activeIndex > 0 || (slideIndices[currentProject.id] || 0) > 0) {
        e.preventDefault();
        isLockedRef.current = true;
        goToPrevStep();
        setTimeout(() => { isLockedRef.current = false; }, 450);
      }
    } else if (e.key === 'Home') {
      e.preventDefault();
      goToProject(0);
    } else if (e.key === 'End') {
      e.preventDefault();
      goToProject(totalProjects - 1);
    }
  };

  // Slide navigation within current active project
  const handleNextSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSlideIndices((prev) => ({
      ...prev,
      [currentProject.id]: (prev[currentProject.id] + 1) % (currentSlides.length || 1),
    }));
  };

  const handlePrevSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSlideIndices((prev) => ({
      ...prev,
      [currentProject.id]: (prev[currentProject.id] - 1 + (currentSlides.length || 1)) % (currentSlides.length || 1),
    }));
  };

  const setSlideIndex = (index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setSlideIndices((prev) => ({
      ...prev,
      [currentProject.id]: index,
    }));
  };

  const detailedDesc = projectDescriptions[currentProject.id] || currentProject.impact;

  // Animation variants for smooth vertical slide & fade transition
  const contentVariants: Variants = {
    initial: (dir: 'down' | 'up') => ({
      opacity: 0,
      y: dir === 'down' ? 24 : -24,
      filter: 'blur(2px)',
    }),
    animate: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    exit: (dir: 'down' | 'up') => ({
      opacity: 0,
      y: dir === 'down' ? -24 : 24,
      filter: 'blur(2px)',
      transition: {
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1], 
      },
    }),
  };

  return (
    <section 
      id="work" 
      className="border-b border-custom-border bg-page-bg min-h-[90vh] py-0 flex items-stretch outline-none relative select-text"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      aria-label="Selected Works Portfolio"
    >
      <div 
        className="w-full max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch" 
        id="work-grid"
      >
        
        {/* ========================================================================= */}
        {/* Left Column: Fixed Sticky Sidebar with Case Study List                    */}
        {/* ========================================================================= */}
        <aside 
          className="lg:col-span-3 p-6 md:p-12 border-b lg:border-b-0 lg:border-r border-custom-border bg-card-bg flex flex-col justify-between"
          id="work-sidebar"
        >
          <div className="space-y-8 sticky top-24">
            
            {/* Header Section Metadata */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-text-super uppercase tracking-widest block font-semibold">
                  02 / SELECTED WORKS
                </span>
              </div>

              <h2 className="text-2xl font-sans font-medium tracking-tight text-text-main">
                Systems Design
              </h2>
              <p className="text-xs md:text-sm text-text-secondary font-sans leading-relaxed">
                Explore architectural schemas, tokens, and navigation frameworks built for high-scale document orchestration systems.
              </p>
            </div>

            {/* Case Studies Interactive List */}
            <div className="space-y-3 pt-4 border-t border-custom-border">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] text-text-super uppercase tracking-wider block font-bold">
                  CASE STUDY
                </span>
              </div>

              <nav 
                id="work-sidebar-list"
                className="flex flex-col gap-1.5 max-h-[46vh] overflow-y-auto pr-1 scrollbar-thin"
                aria-label="Case Study Projects Navigation"
              >
                {PROJECTS_DATA.map((proj, idx) => {
                  const isActive = activeIndex === idx;

                  return (
                    <button
                      key={proj.id}
                      ref={(el) => { sidebarButtonsRef.current[idx] = el; }}
                      onClick={() => goToProject(idx)}
                      aria-current={isActive ? 'true' : 'false'}
                      className={`group relative text-left px-3.5 py-2.5 rounded-lg border text-xs font-mono transition-all duration-250 flex items-center justify-between cursor-pointer ${
                        isActive
                          ? 'bg-page-bg text-text-main border-custom-border font-bold shadow-sm ring-1 ring-custom-border/60'
                          : 'bg-transparent border-transparent text-text-secondary hover:border-custom-border/60 hover:text-text-main hover:bg-page-bg/40'
                      }`}
                    >
                      <span className="truncate">{proj.title}</span>
                    </button>
                  );
                })}
              </nav>
            </div>

          </div>
        </aside>

        {/* ========================================================================= */}
        {/* Right Column: Dynamic Project Content with Smooth Scroll Switching        */}
        {/* ========================================================================= */}
        <main 
          ref={contentAreaRef}
          onWheel={handleWheel}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="lg:col-span-9 p-6 md:p-12 flex flex-col justify-between relative overflow-hidden focus:outline-none" 
          id="work-main"
          tabIndex={0}
        >
          {/* Top Progress bar showing portfolio position across all projects and parts */}
          <div className="w-full bg-custom-border/30 h-1 rounded-full mb-6 overflow-hidden flex items-center">
            <motion.div 
              className="bg-[#2F4EFF] h-full"
              initial={false}
              animate={{ 
                width: `${(((activeIndex + (activeSlideIdx / (currentSlides.length || 1))) + (1 / (currentSlides.length || 1))) / totalProjects) * 100}%` 
              }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
            />
          </div>

          {/* AnimatePresence for Seamless Project Cross-Fade & Slide */}
          <div className="relative min-h-[580px] flex-1 flex flex-col justify-between">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div 
                key={`${currentProject.id}-${activeSlideIdx}`}
                custom={direction}
                variants={contentVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="space-y-8 flex flex-col h-full justify-between"
                id={`project-content-${currentProject.id}`}
              >
                
                {/* 1. Project Header & Specifications Block */}
                <div 
                  className="space-y-5"
                  id={`project-spec-${currentProject.id}`}
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className="font-mono text-[10px] text-semantic-work-text bg-semantic-work-bg px-2.5 py-1 rounded border border-semantic-work-text/15 tracking-wide font-semibold">
                        {currentProject.role}
                      </span>
                      <span className="font-mono text-[10px] text-text-super uppercase tracking-wider font-semibold">
                        SPEC: {currentProject.id.toUpperCase()}
                      </span>
                      {currentSlides.length > 1 && (
                        <span className="font-mono text-[10px] text-[#2F4EFF] bg-[#2F4EFF]/10 px-2 py-0.5 rounded font-semibold border border-[#2F4EFF]/20">
                          PART {activeSlideIdx + 1} OF {currentSlides.length}
                        </span>
                      )}
                      <span className="font-mono text-[10px] text-text-secondary ml-auto hidden sm:inline-block">
                        Project {activeIndex + 1} of {totalProjects}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl lg:text-[34px] font-sans font-black tracking-tight text-text-main leading-tight">
                      {currentProject.title}
                      {currentProject.id === 'logos' && (
                        <span className="text-text-secondary text-lg md:text-xl font-normal ml-2">
                          (Part {activeSlideIdx + 1}/2)
                        </span>
                      )}
                    </h3>
                  </div>

                  <p className="text-text-secondary font-sans text-sm md:text-base leading-relaxed max-w-3xl">
                    {detailedDesc}
                  </p>

                  {/* Tech / Skill Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1" id="tech-tags-group">
                    {currentProject.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="font-mono text-[10px] text-tag-text bg-tag-bg px-2.5 py-1 rounded border border-custom-border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons: Only DocServer Admin Panel has "View Case Study" */}
                  {(currentProject.id === 'cloud-admin' || isAtFinalSlideOfFinalProject) && (
                    <div className="pt-2 flex flex-wrap items-center gap-3" id="project-case-action">
                      {currentProject.id === 'cloud-admin' && onViewCaseStudy && (
                        <button
                          onClick={onViewCaseStudy}
                          className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-sans font-mono font-semibold rounded group transition-all duration-300 bg-interactive hover:bg-interactive-hover active:opacity-90 text-white cursor-pointer shadow-sm hover:shadow-md hover:-translate-y-0.5"
                        >
                          <span>View Case Study</span>
                          <ArrowUpRight className="w-3.5 h-3.5 text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </button>
                      )}

                      {/* Special Final Step Callout for Logos Part 2 
                      {isAtFinalSlideOfFinalProject && (
                        
                          <button
                          onClick={() => {
                            if (onUnlockRoadmap) onUnlockRoadmap();
                            setTimeout(() => {
                              const el = document.getElementById('roadmap');
                              if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                            }, 100);
                          }}
                          className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-sans font-mono font-semibold rounded bg-[#2F4EFF] hover:bg-[#2F4EFF]/90 text-white transition-all shadow-md animate-pulse cursor-pointer"
                        >
                          <Unlock className="w-3.5 h-3.5" />
                          <span>Unlock & View 03 / Evolution Roadmap ↓</span>
                        </button> 
                        
                      )} 
                       */}
                    </div>
                  )}
                </div>

                {/* 2. Slide Galleries Showcase */}
                <div className="space-y-4 pt-2" id="carousel-outer">
                  <div className="w-full border border-custom-border rounded-lg bg-card-bg overflow-hidden transition-all duration-300 shadow-none">
                    
                    {/* Screenshot Viewer Box */}
                    <div className="relative bg-zinc-950 overflow-hidden group w-full aspect-[16/10] flex items-center justify-center">
                      <div className="absolute inset-0 select-none">
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={activeSlideIdx}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="absolute inset-0 w-full h-full flex items-center justify-center bg-zinc-950"
                          >
                            {currentSlides[activeSlideIdx]?.src ? (
                              <img
                                src={currentSlides[activeSlideIdx].src}
                                alt={currentSlides[activeSlideIdx]?.label || currentProject.title}
                                className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.01]"
                                referrerPolicy="no-referrer"
                              />
                            ) : (
                              <div className="text-zinc-500 font-mono text-xs flex items-center gap-2">
                                <span>Preview Artifact</span>
                              </div>
                            )}
                          </motion.div>
                        </AnimatePresence>
                      </div>

                      {/* Sliding Arrows on Hover */}
                      {currentSlides.length > 1 && (
                        <>
                          <button
                            onClick={handlePrevSlide}
                            className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded bg-black/50 hover:bg-black/80 text-white border border-white/15 backdrop-blur-sm cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300 focus:opacity-100 z-10"
                            aria-label="Previous slide"
                          >
                            <ChevronLeft className="w-4 h-4" />
                          </button>
                          <button
                            onClick={handleNextSlide}
                            className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded bg-black/50 hover:bg-black/80 text-white border border-white/15 backdrop-blur-sm cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300 focus:opacity-100 z-10"
                            aria-label="Next slide"
                          >
                            <ChevronRight className="w-4 h-4" />
                          </button>
                        </>
                      )}

                      {/* Floating Slide Counter Badge */}
                      {currentSlides.length > 0 && (
                        <div className="absolute right-3 bottom-3 bg-black/80 border border-white/15 backdrop-blur-sm text-white px-2.5 py-1 rounded font-mono text-[9.5px] select-none tracking-wider z-10">
                          {activeSlideIdx + 1} / {currentSlides.length}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Caption & Navigation Pagination Dots */}
                  {currentSlides.length > 0 && (
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-1 w-full select-none">
                      <p className="text-xs text-text-secondary font-sans leading-relaxed text-center sm:text-left max-w-[85%] pr-2 flex items-center gap-2">
                        <Info className="inline w-3.5 h-3.5 text-[#2F4EFF] shrink-0" />
                        <span>{currentSlides[activeSlideIdx]?.caption}</span>
                      </p>
                      
                      {currentSlides.length > 1 && (
                        <div className="flex items-center gap-1.5 shrink-0 pt-1 sm:pt-0">
                          {currentSlides.map((_, idx) => (
                            <button
                              key={idx}
                              onClick={(e) => setSlideIndex(idx, e)}
                              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                                activeSlideIdx === idx
                                  ? 'w-5 bg-[#2F4EFF]'
                                  : 'w-1.5 bg-text-secondary/30 hover:bg-text-secondary/60'
                              }`}
                              aria-label={`Go to slide ${idx + 1}`}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

          {/* Bottom Navigation Toolbar & Progression Lock Status */}
          <div className="pt-6 mt-4 border-t border-custom-border/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-text-secondary">
            
            <button
              onClick={goToPrevStep}
              disabled={activeIndex === 0 && activeSlideIdx === 0}
              className="flex items-center gap-2 px-3 py-1.5 rounded border border-custom-border/60 hover:bg-card-bg hover:text-text-main transition-colors disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer order-1 sm:order-none"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Previous</span>
              <span className="sm:hidden">Prev</span>
            </button>

            {/* Central Status / Lock Information Cue */}
            <div className="flex items-center gap-2 text-[11px] order-3 sm:order-none font-sans">
              {!isRoadmapUnlocked ? (
                isAtFinalSlideOfFinalProject ? (
                  <span className="text-[#2F4EFF] font-semibold flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#2F4EFF]" />
                    <span>Case studies complete (Logos Part 2/2) • Ready to unlock Roadmap</span>
                  </span>
                ) : (
                  <span className="text-text-secondary flex items-center gap-1.5">
                    <Lock className="w-3.5 h-3.5 text-text-secondary/70" />
                    <span>03 / Roadmap locked until Logos Part 2 ({activeIndex + 1}/{totalProjects})</span>
                  </span>
                )
              ) : (
                <span className="text-emerald-500 font-semibold flex items-center gap-1.5">
                  <Unlock className="w-3.5 h-3.5 text-emerald-500" />
                  <span>03 / Evolution Roadmap Unlocked</span>
                </span>
              )}
            </div>

            <button
              onClick={goToNextStep}
              className={`flex items-center gap-2 px-3 py-1.5 rounded border transition-all cursor-pointer order-2 sm:order-none ${
                isAtFinalSlideOfFinalProject
                  ? 'bg-[#2F4EFF] text-white border-[#2F4EFF] hover:bg-[#2F4EFF]/90 font-semibold shadow-sm'
                  : 'border-custom-border/60 hover:bg-card-bg hover:text-text-main'
              }`}
            >
              <span>{isAtFinalSlideOfFinalProject ? 'Continue to Roadmap' : 'Next'}</span>
              {isAtFinalSlideOfFinalProject ? (
                <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
              ) : (
                <ChevronRight className="w-3.5 h-3.5" />
              )}
            </button>

          </div>

        </main>

      </div>
    </section>
  );
}
