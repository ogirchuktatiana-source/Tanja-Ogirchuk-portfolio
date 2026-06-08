/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  ArrowUpRight, 
  Info
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS_DATA } from '../data';

// Import local project assets with TS ignore directives to prevent compilation type check failures

// Slide DocsServer AdminPanel
import docServerStats from '../assets/images/DocServerAdminPanel/Statistics.png';
// @ts-ignore
import docServerAI from '../assets/images/DocServerAdminPanel/Al_Integration.png';
// @ts-ignore
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



export default function SelectedWork() {
  const [activeProject, setActiveProject] = useState<string>('cloud-admin');
  
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
    'api-doc': 'Developed clean technical developer portals. Built detailed API Documentation layouts that map direct JSON payloads and authorization guidelines for developers to scale services seamlessly.',
    'integration-edition': 'The Integration Edition layout emphasizes ease of navigation: convenient one-click creation of new files, quick document uploads, and an informative table for managing existing files with a flexible role system (editors / viewers).\nI created an intuitive and concise web panel that allows users to test the full functionality of ONLYOFFICE editors before purchasing.',
    'landing-pages': 'Crafted high-converting, premium marketing landing pages for global enterprise products. Leveraged strict grid alignments, compelling typography pairings, and micro-interactions.',
    'presentations': 'Designed clean, high-impact corporate presentations and sales slide decks for key stakeholding panels. Focused on clear visual hierarchy, storytelling, and elegant data representation.',
    'marketplace': 'Designed a robust, scalable cloud application and plugin marketplace interface, connecting enterprise solutions with modular extensions and single-click installer widgets.',
    'illustrations': 'Crafted a versatile vector illustration style guide, developing branded key visuals, custom isometric scenes, and unique character design libraries used across branding assets.',
    'logos': 'Created iconic, timeless corporate identity solutions and clever negative-space logo grid constructions for digital tech startups and established agencies alike.',
  };
  

  const currentSlides = projectSlides[activeProject] || [];

  const handleNextSlide = () => {
    setSlideIndices((prev) => ({
      ...prev,
      [activeProject]: (prev[activeProject] + 1) % currentSlides.length,
    }));
  };

  const handlePrevSlide = () => {
    setSlideIndices((prev) => ({
      ...prev,
      [activeProject]: (prev[activeProject] - 1 + currentSlides.length) % currentSlides.length,
    }));
  };

  const setSlideIndex = (index: number) => {
    setSlideIndices((prev) => ({
      ...prev,
      [activeProject]: index,
    }));
  };

  return (
    <section 
      id="work" 
      className="border-b border-custom-border bg-page-bg min-h-[85vh] py-0 flex items-center animate-fadeIn"
    >
      <div className="w-full max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0" id="work-grid">
        
        {/* Left Column: Sidebar Info (STRICTLY INTACT) */}
        <div 
          className="lg:col-span-3 p-6 md:p-12 border-b lg:border-b-0 lg:border-r border-custom-border bg-card-bg flex flex-col justify-between"
          id="work-sidebar"
        >
          <div className="sticky top-24 space-y-8">
            <div className="space-y-4">
              <span className="font-mono text-xs text-text-super uppercase tracking-widest block">
                02 / SELECTED WORKS
              </span>
              <h2 className="text-2xl font-sans font-medium tracking-tight text-text-main pb-1">
                Systems Design
              </h2>
              <p className="text-sm text-text-secondary font-sans leading-relaxed">
                Explore architectural schemas, tokens, and navigation frameworks built for high-scale document orchestration systems.
              </p>
            </div>

            {/* Case Selector Button Lists */}
            <div className="space-y-3 pt-6 border-t border-custom-border">
              <span className="font-mono text-[10px] text-text-super uppercase tracking-wider block">
                Select Case Study
              </span>
              <div className="flex flex-col gap-2">
                {PROJECTS_DATA.map((proj) => (
                  <button
                    key={proj.id}
                    onClick={() => setActiveProject(proj.id)}
                    className={`text-left px-4 py-3 rounded-lg border text-xs font-mono transition-all duration-300 flex items-center gap-3 cursor-pointer ${
                      activeProject === proj.id
                        ? 'bg-page-bg text-text-main border-custom-border font-bold shadow-none'
                        : 'bg-transparent border-transparent text-text-secondary hover:border-custom-border hover:text-text-main'
                    }`}
                  >
                    <span className="truncate">{proj.title}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Active Case Study + Slide Image Showcase */}
        <div 
          className="lg:col-span-9 p-6 md:p-12 flex flex-col justify-between h-full" 
          id="work-main"
        >
          {PROJECTS_DATA.map((proj) => {
            if (proj.id !== activeProject) return null;

            const slides = projectSlides[proj.id] || [];
            const activeIdx = slideIndices[proj.id] || 0;
            const detailedDesc = projectDescriptions[proj.id] || proj.impact;

            return (
              <div 
                key={proj.id} 
                className="space-y-10 animate-fadeIn flex flex-col h-full justify-between"
                id={`project-content-${proj.id}`}
                
              >
                {/* 1. Project Text / Spec details strictly on top */}
                <div 
                  className="space-y-6 animate-fadeIn"
                  id={`project-spec-${proj.id}`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-[10px] text-semantic-work-text bg-semantic-work-bg px-2.5 py-1 rounded border border-semantic-work-text/15 tracking-wide font-semibold">
                        {proj.role}
                      </span>
                      <span className="font-mono text-[10px] text-text-super uppercase tracking-wider font-semibold">
                        Spec: {proj.id.toUpperCase()}
                      </span>
                    </div>
                    
                    <h3 className="text-3xl md:text-[36px] font-sans font-black tracking-tight text-text-main leading-tight">
                      {proj.title}
                    </h3>
                  </div>

                  <p className="text-text-secondary font-sans text-sm md:text-base leading-relaxed whitespace-pre-line">
                      {detailedDesc}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2" id="tech-tags-group">
                    {proj.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="font-mono text-[10px] text-tag-text bg-tag-bg px-2.5 py-1 rounded border border-custom-border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* High-Contrast Interactive Call to Action Button */}
                  <div className="pt-2 flex flex-wrap gap-3" id="project-case-action">
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-sans font-mono font-semibold rounded group transition-all duration-300 bg-interactive hover:bg-interactive-hover active:opacity-90 text-white cursor-pointer shadow-sm hover:shadow-md hover:-translate-y-0.5"
                    >
                      <span>View Case Study</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </div>
                </div>

                {/* 2. Slide Galleries Showcase - strictly below text details */}
                <div className="space-y-4 pt-4" id="carousel-outer">
                  <div className="w-full border border-custom-border rounded bg-card-bg overflow-hidden transition-all duration-300 shadow-none">
                    
                    {/* Screenshot Viewer Sandbox Console - no interactive inputs, clean image gallery */}
                    <div className="relative bg-zinc-950 overflow-hidden group w-full aspect-[16/10] flex items-center justify-center">
                      <div className="absolute inset-0 select-none">
                        <AnimatePresence>
                          <motion.div
                            key={activeIdx}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.35, ease: "easeInOut" }}
                            className="absolute inset-0 w-full h-full flex items-center justify-center bg-zinc-950"
                          >
                            <img
                              src={slides[activeIdx]?.src}
                              alt={slides[activeIdx]?.label}
                              className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                              referrerPolicy="no-referrer"
                            />
                          </motion.div>
                        </AnimatePresence>
                      </div>

                      {/* Sliding Arrows (Overlay, showing on hover) */}
                      {slides.length > 1 && (
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

                      {/* Float Slide Counter Badge */}
                      {slides.length > 0 && (
                        <div className="absolute right-3 bottom-3 bg-black/80 border border-white/15 backdrop-blur-sm text-white px-2.5 py-1 rounded font-mono text-[9.5px] select-none tracking-wider z-10">
                          {activeIdx + 1} / {slides.length}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Caption & Nav Pagination dots */}
                  {slides.length > 0 && (
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-1 w-full select-none">
                      <p className="text-xs text-text-secondary font-sans leading-relaxed text-center sm:text-left max-w-[85%] pr-2 flex items-center gap-2">
                        <Info className="inline w-3.5 h-3.5 text-blue-500 shrink-0" />
                        <span className="whitespace-pre-line">{slides[activeIdx].caption}</span>
                        </p>
                      
                      {slides.length > 1 && (
                        <div className="flex items-center gap-1 shrink-0 pt-1 sm:pt-0">
                          {slides.map((_, idx) => (
                            <button
                              key={idx}
                              onClick={() => setSlideIndex(idx)}
                              className={`h-1.5 rounded transition-all duration-300 cursor-pointer ${
                                activeIdx === idx
                                  ? 'w-5 bg-blue-500'
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

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
