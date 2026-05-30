/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';

// ==========================================
// 1. IMAGE IMPORTS (with TS validation bypass)
// ==========================================

// admin_docs_cloud Assets
// @ts-ignore
import adminDocsCloud1 from '../assets/images/admin_docs_cloud/design_system_tokens_1779874208224.png';

// API_Documentation Assets
// @ts-ignore
import apiDocs1 from '../assets/images/API_Documentation/help_center_navigation_1779874228492.png';

// DocServerAdminPanel Assets
// @ts-ignore
import docServerIP from '../assets/images/DocServerAdminPanel/IP_Filtering.png';
// @ts-ignore
import docServerJWT from '../assets/images/DocServerAdminPanel/JWT_Settings.png';
// @ts-ignore
import docServerStats from '../assets/images/DocServerAdminPanel/Statistics.png';

// Standalone case assets
// @ts-ignore
import illustrationsImg from '../assets/images/illustrations/illustrations_1779882579256.png';
// @ts-ignore
import landingPagesImg from '../assets/images/landing_pages/landing-pages.png';
// @ts-ignore
import logosImg from '../assets/images/logos/logos.png';
// @ts-ignore
import marketplaceImg from '../assets/images/marketplace/marketplace.png';
// @ts-ignore
import presentationsImg from '../assets/images/presentations/presentations_1779882539674.png';

// ==========================================
// 2. DATA SCHEMAS & CONFIGURATIONS
// ==========================================

interface SlideItem {
  label: string;
  caption: string;
  image: string;
}

const PROJECT_SLIDES: Record<string, SlideItem[]> = {
  'cloud-admin': [
    {
      label: 'Statistics Dashboard',
      caption: 'Statistics Dashboard - Real-time active sessions, server node loads, and active tenant connection details.',
      image: docServerStats,
    },
    {
      label: 'Security Settings',
      caption: 'Security Settings - JSON Web Token (JWT) tenant configuration and interactive secret lifespan controller.',
      image: docServerJWT,
    },
    {
      label: 'Access Rules',
      caption: 'Access Rules - Nginx-style allow/deny firewall grid lists for granular client IP-address filtering.',
      image: docServerIP,
    },
  ],
  'admin-docs-cloud': [
    {
      label: 'Design System & Storage Allocation Tokens',
      caption: 'Workspace Directory Architecture - Multi-tenant configuration matrices mapping organizational cloud assets.',
      image: adminDocsCloud1,
    },
  ],
  'design-system': [
    {
      label: 'Help Center & API Integration Navigation',
      caption: 'REST API Catalog Ecosystem - Complete index of system documentation layouts with unified navigation elements.',
      image: apiDocs1,
    },
  ],
  'integration-edition': [
    {
      label: 'Visual Workflow Engine Builder',
      caption: 'Integration Framework Orchestration - Conceptual blueprint managing third-party ecosystem modular embeds.',
      image: illustrationsImg,
    },
  ],
  'landing-pages': [
    {
      label: 'Hero Grid System Alignment',
      caption: 'High-Conversion Page Architect - Strict spatial grids mapping visual component parameters across global sites.',
      image: landingPagesImg,
    },
  ],
  'presentations': [
    {
      label: 'Corporate Branding Deck Architecture',
      caption: 'Executive Presentation Layouts - Storytelling frames built with high contrast typographic systems for stakeholder briefs.',
      image: presentationsImg,
    },
  ],
  'marketplace': [
    {
      label: 'Cloud Plugin Extension Directory',
      caption: 'App Store Core Interface - Clean categorical view grids simplifying add-on discoverability for active instances.',
      image: marketplaceImg,
    },
  ],
  'illustrations': [
    {
      label: 'Vector Identity Framework Styles',
      caption: 'Visual Component Style Guide - Branded key isometric designs and character element libraries.',
      image: illustrationsImg,
    },
  ],
  'logos': [
    {
      label: 'Geometric Identity Grid Systems',
      caption: 'Negative Space Construct Elements - Structural vector logotype lockups ensuring readability cross-platform.',
      image: logosImg,
    },
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
  'logos': 'Created iconic, timeless corporate identity solutions and clever negative-space logo grid constructions for digital tech startups and established agencies alike.',
};

const PROJECT_TABS = [
  { id: 'cloud-admin', title: 'DocServer Admin Panel' },
  { id: 'admin-docs-cloud', title: 'Admin DocsCloud' },
  { id: 'design-system', title: 'Developer API Portal' },
  { id: 'integration-edition', title: 'Integration Framework' },
  { id: 'landing-pages', title: 'Enterprise Landings' },
  { id: 'presentations', title: 'Corporate Slide Decks' },
  { id: 'marketplace', title: 'Extension Marketplace' },
  { id: 'illustrations', title: 'Vector Illustrations' },
  { id: 'logos', title: 'Brand Identities' },
];

export default function SelectedWork() {
  const [activeProject, setActiveProject] = useState<string>('cloud-admin');
  
  const [slideIndices, setSlideIndices] = useState<Record<string, number>>({
    'cloud-admin': 0,
    'admin-docs-cloud': 0,
    'design-system': 0,
    'integration-edition': 0,
    'landing-pages': 0,
    'presentations': 0,
    'marketplace': 0,
    'illustrations': 0,
    'logos': 0,
  });

  const currentSlides = PROJECT_SLIDES[activeProject] || [];
  const currentSlideIndex = slideIndices[activeProject] || 0;
  const currentSlide = currentSlides[currentSlideIndex];

  const handleNextSlide = () => {
    if (currentSlides.length <= 1) return;
    setSlideIndices((prev) => ({
      ...prev,
      [activeProject]: (prev[activeProject] + 1) % currentSlides.length,
    }));
  };

  const handlePrevSlide = () => {
    if (currentSlides.length <= 1) return;
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
    <section id="work" className="py-20 border-b border-custom-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Core Block Header */}
        <div className="flex items-start gap-2 mb-12">
          <span className="text-xs font-mono text-text-secondary mt-1">02 //</span>
          <h2 className="text-3xl md:text-4xl font-sans font-black uppercase tracking-tight">SELECTED WORK</h2>
        </div>

        {/* Dynamic Structural Grid Assembly */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* CONTROL RENDER COLUMN: Left Project Trigger List Tabs */}
          <div className="lg:col-span-4 space-y-2">
            <span className="text-[10px] font-mono text-text-secondary uppercase tracking-wider block mb-4">PROJECT INDEX</span>
            <div className="flex lg:flex-col gap-1 overflow-x-auto lg:overflow-x-visible pb-3 lg:pb-0 no-scrollbar">
              {PROJECT_TABS.map((project) => (
                <button
                  key={project.id}
                  onClick={() => setActiveProject(project.id)}
                  className={`w-full text-left px-4 py-3 rounded font-mono text-xs transition-all duration-200 shrink-0 lg:shrink border ${
                    activeProject === project.id
                      ? 'bg-[#2F4EFF] border-[#2F4EFF] text-white font-bold shadow-md shadow-[#2F4EFF]/10'
                      : 'bg-card-bg/40 border-custom-border text-text-secondary hover:text-text-main hover:border-text-secondary/30'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span>{project.title}</span>
                    {activeProject === project.id && <ArrowUpRight className="w-3.5 h-3.5 hidden lg:block" />}
                  </div>
                </button>
              ))}
            </div>

            {/* Desktop Overview Description */}
            <div className="pt-4 border-t border-custom-border mt-4 hidden lg:block">
              <p className="text-xs text-text-secondary font-sans leading-relaxed">
                {projectDescriptions[activeProject] || 'Detailed project asset summary log updating...'}
              </p>
            </div>
          </div>

          {/* EXHIBIT PANEL COLUMN: Viewport Window Framework with Built-in Slider Carousel */}
          <div className="lg:col-span-8 space-y-4">
            <div className="border border-custom-border rounded-lg bg-card-bg overflow-hidden flex flex-col shadow-xl">
              
              {/* Window UI Layout Header Frame */}
              <div className="px-4 py-3 bg-page-bg/80 border-b border-custom-border flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500/40" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/40" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/40" />
                  <span className="text-[10px] font-mono text-text-secondary ml-2 truncate max-w-[180px] md:max-w-none">
                    view://portfolio/{activeProject}/{currentSlide?.label?.toLowerCase().replace(/\s+/g, '-')}
                  </span>
                </div>
                
                {/* Arrow Controllers Display condition */}
                {currentSlides.length > 1 && (
                  <div className="flex items-center gap-1.5">
                    <button 
                      onClick={handlePrevSlide}
                      className="p-1 rounded border border-custom-border bg-card-bg text-text-secondary hover:text-text-main hover:border-text-secondary/40 transition-colors"
                    >
                      <ChevronLeft className="w-3.5 h-3.5" />
                    </button>
                    <span className="text-[10px] font-mono px-1 text-text-secondary">
                      {currentSlideIndex + 1} / {currentSlides.length}
                    </span>
                    <button 
                      onClick={handleNextSlide}
                      className="p-1 rounded border border-custom-border bg-card-bg text-text-secondary hover:text-text-main hover:border-text-secondary/40 transition-colors"
                    >
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}
              </div>

              {/* RENDER BOX CONTAINER */}
              <div className="relative w-full bg-page-bg flex items-center justify-center min-h-[250px] md:min-h-[440px] overflow-hidden p-2 md:p-4">
                {currentSlide && currentSlide.image ? (
                  <img 
                    src={currentSlide.image} 
                    alt={currentSlide.label} 
                    className="w-full h-full object-contain transition-all duration-300 max-h-[520px] rounded border border-custom-border/20 shadow-sm"
                  />
                ) : (
                  <div className="text-center font-mono text-xs text-text-secondary p-8">
                    No viewport asset configured for this tracking index.
                  </div>
                )}
              </div>

              {/* Footer Meta Description Data Panel */}
              {currentSlide && (
                <div className="p-4 border-t border-custom-border bg-page-bg/40 font-mono text-[11px] leading-relaxed text-text-secondary">
                  <span className="text-text-main font-bold block mb-1 uppercase tracking-wider">{currentSlide.label}</span>
                  {currentSlide.caption}
                </div>
              )}

              {/* Slider Progress Dash Indicators */}
              {currentSlides.length > 1 && (
                <div className="p-3 bg-card-bg flex justify-center gap-1.5 border-t border-custom-border/40">
                  {currentSlides.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSlideIndex(idx)}
                      className={`h-1.5 rounded-full transition-all duration-200 ${
                        idx === currentSlideIndex ? 'w-6 bg-[#2F4EFF]' : 'w-1.5 bg-custom-border hover:bg-text-secondary/40'
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Mobile View Screen Context Fallback */}
            <div className="block lg:hidden p-4 border border-custom-border rounded bg-card-bg/40">
              <p className="text-xs text-text-secondary font-sans leading-relaxed">
                {projectDescriptions[activeProject]}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}