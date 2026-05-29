/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import { PROJECTS_DATA } from '../data';

export default function SelectedWork() {
  const [activeProject, setActiveProject] = useState<string>('cloud-admin');
  
  // Отслеживаем индекс текущего слайда для каждого проекта
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

  // Текстовые подписи к слайдам оставляем, чтобы они выводились под картинкой
  const projectSlides: Record<string, { label: string; caption: string }[]> = {
    'cloud-admin': [
      { label: 'Statistics Dashboard', caption: 'Statistics Dashboard - Real-time active sessions, server node loads, and active tenant connection details.' },
      { label: 'Security Settings', caption: 'Security Settings - JSON Web Token (JWT) tenant configuration and interactive secret lifespan slider controller.' },
      { label: 'Access Rules', caption: 'Access Rules - Nginx-style allow/deny firewall grid lists for granular client IP-address filtering.' },
    ],
    'admin-docs-cloud': [
      { label: 'Organization Directories', caption: 'Workspace Directory - Multi-tenant team folders, active storage allocations, and nested organizational assets tree.' },
      { label: 'Permissions System', caption: 'Directory Access Permissions - Dedicated role assignment control panel managing Collaborator, Reviewer, and Owner permissions.' },
      { label: 'Log Diagnostic Monitoring', caption: 'Diagnostic telemetry logs viewer. Pause, resume, and filter system-monitoring events based on status severity flags.' },
    ],
    'design-system': [
      { label: 'Endpoint Catalog', caption: 'REST API Catalog - Complete list of HTTP method endpoints with real-time text query autocomplete and filter logic.' },
      { label: 'Detailed Inspector', caption: 'Dynamic Request Body Specifier - Real-time data schema validator updating JSON client response body templates.' },
      { label: 'Quick Start Snippets', caption: 'Quick Start Code Snippet - Instantly toggle syntax-highlighted setup scripts across JS, Python, and cURL environments.' },
    ],
    'integration-edition': [
      { label: 'Visual Workflow Builder', caption: 'Workflow Orchestration - Interactive flowchart node editor. Pin-point trigger nodes to actions and animate connection paths.' },
      { label: 'Incident Monitoring Console', caption: 'Log & Error Stream - Webhook diagnostic feed listing delivery statuses, latency metrics, and interactive trace retry controllers.' },
    ],
    'landing-pages': [
      { label: 'Hero Grid System Designer', caption: 'High-Conversion Page Architect - Toggle margin guidelines, typographical alignments, and structural padding overlays.' },
      { label: 'Pricing Feature Matrix', caption: 'Pricing Feature Matrix - Plan capabilities layout optimized for conversion with active tier indicators.' },
      { label: 'Conversions A/B Testing Analytics', caption: 'Conversions Analytics Panel - Real-time marketing performance telemetry comparing visual asset performance statistics.' },
    ],
    'presentations': [
      { label: 'Master Aspect Ruler', caption: 'Slide Boundaries Ruler - Dynamic grid systems mapping 16:9 widescreen safe elements and layout guidelines.' },
      { label: 'High-Impact Projections Slide', caption: 'Corporate Slide Deck Preview - Clean data visualization columns communicating complex metrics with high contrast.' },
      { label: 'Typography Scale Model', caption: 'Corporate Branding Standards - Precise ratios mapping main header font weights to read captions and body text blocks.' },
    ],
    'marketplace': [
      { label: 'Grid Extension Catalog', caption: 'App Store Dashboard - Clean category navigation layout used to filter, discover, and install cloud platform plugins.' },
      { label: 'Secure Consent Setup Workflow', caption: 'App Authorization Workflow - Scope consent screen prompting API authentication keys with verification loaders.' },
      { label: 'Developer Publisher Console', caption: 'Developer Publish Center - Upload ZIP packages and validate manifest.json schemas on our automated checks terminal.' },
    ],
    'illustrations': [
      { label: 'Character Anatomy Outline', caption: 'Anatomy Guidelines - Balanced brand character sketches highlighting symmetric structural boundaries.' },
      { label: '3D Isometric Workspace', caption: '3D Isometric Shapes - Live skew projection controls illustrating mathematical depth alongside x, y, and z axes rules.' },
      { label: 'Colorway Harmony Analyzer', caption: 'Contrast Harmonization Rules - Dynamic check tool measuring contrast color safety margins against page defaults for WCAG standards.' },
    ],
    'logos': [
      { label: 'Golden Ratio Vector Grids', caption: 'Golden Ratio Construction Grid - Circular vector boundaries intersecting beautifully to shape high-fidelity emblems.' },
      { label: 'Contrast Adaptability Matrix', caption: 'Branding Contrast Matrix - Reviewing brand mark legibility across light, muted, colored, and dark backgrounds.' },
      { label: 'Lockup Typographical Padding', caption: 'Logo Lockup Rules - Specify padding thresholds as expressions of variable x to align brand indicators.' },
    ],
  };

  const currentProjectData = PROJECTS_DATA.find((p) => p.id === activeProject);
  const currentSlides = projectSlides[activeProject] || [];
  const currentSlideIndex = slideIndices[activeProject] || 0;

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
    <section id="work" className="w-full py-20 bg-page-bg border-b border-custom-border/40">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
          <div>
            <span className="text-xs font-mono tracking-widest text-text-secondary block mb-2 uppercase">02 / SELECTED WORK</span>
            <h2 className="text-3xl md:text-4xl font-sans font-black tracking-tight text-text-main">
              Case Studies & Systems
            </h2>
          </div>
          <p className="text-sm font-sans text-text-secondary max-w-sm">
            Deep-dives into enterprise architectures, component libraries, and interactive visual frameworks built to optimize scale.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN: Sidebar Navigation */}
          <nav className="lg:col-span-4 space-y-1 bg-card-bg/10 p-2 rounded-lg border border-custom-border/30" aria-label="Case studies selector">
            {PROJECTS_DATA.map((project) => {
              const isSelected = activeProject === project.id;
              return (
                <button
                  key={project.id}
                  onClick={() => setActiveProject(project.id)}
                  className={`w-full text-left px-4 py-3 rounded text-xs font-mono transition-all duration-200 flex items-center justify-between group ${
                    isSelected
                      ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 font-bold shadow-sm'
                      : 'text-text-secondary hover:text-text-main hover:bg-neutral-100 dark:hover:bg-neutral-800/40'
                  }`}
                >
                  <span>{project.title}</span>
                  <ArrowUpRight className={`w-3.5 h-3.5 opacity-0 transition-opacity group-hover:opacity-100 ${isSelected ? 'opacity-100 text-[#2F4EFF]' : ''}`} />
                </button>
              );
            })}
          </nav>

          {/* RIGHT COLUMN: The Viewer Container */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* MAIN SLIDER CONTAINER */}
            <div className="relative bg-neutral-100 dark:bg-neutral-900 overflow-hidden rounded-xl border border-custom-border/40 w-full min-h-[300px] md:min-h-[420px] flex items-center justify-center p-2 group/slider">
              
              {/* ВМЕСТО КОДА ИИ: Рендерим чистую PNG-иллюстрацию из PROJECTS_DATA */}
              {currentProjectData?.image ? (
                <img 
                  src={currentProjectData.image} 
                  alt={`${currentProjectData.title} - ${currentSlides[currentSlideIndex]?.label}`} 
                  className="w-full h-auto max-h-[460px] object-contain block select-none rounded-lg shadow-sm"
                  onError={(e) => {
                    // Хэндлер на случай битого пути картинки
                    console.error("Image load error:", currentProjectData.image);
                    e.currentTarget.src = "https://placehold.co/600x400?text=Image+Not+Found";
                  }}
                />
              ) : (
                <div className="text-xs font-mono text-text-secondary">No preview asset specified.</div>
              )}

              {/* Стрелочки управления (появляются при ховере или видны всегда на мобилках) */}
              {currentSlides.length > 1 && (
                <>
                  <button 
                    onClick={handlePrevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/80 text-white border border-white/10 backdrop-blur-sm transition-all duration-200 opacity-0 group-hover/slider:opacity-100 focus:opacity-100 cursor-pointer"
                    aria-label="Previous slide"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={handleNextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/80 text-white border border-white/10 backdrop-blur-sm transition-all duration-200 opacity-0 group-hover/slider:opacity-100 focus:opacity-100 cursor-pointer"
                    aria-label="Next slide"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}
            </div>

            {/* Слайд-индикаторы (Dots) и подпись под картинкой */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-custom-border/40 pb-4">
              <div className="flex gap-1.5">
                {currentSlides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSlideIndex(idx)}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      idx === currentSlideIndex ? 'w-8 bg-[#2F4EFF]' : 'w-2 bg-text-secondary/30 hover:bg-text-secondary/60'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
              <span className="text-[10px] font-mono tracking-wider text-[#2F4EFF] font-bold uppercase bg-[#2F4EFF]/10 px-2 py-0.5 rounded">
                Slide {currentSlideIndex + 1} of {currentSlides.length}: {currentSlides[currentSlideIndex]?.label}
              </span>
            </div>

            {/* Метаданные и описание проекта */}
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-xl font-sans font-black text-text-main">
                  {currentProjectData?.title}
                </h3>
                <span className="text-xs font-mono text-text-secondary px-2.5 py-1 bg-card-bg/25 border border-custom-border/30 rounded-full">
                  Role: {currentProjectData?.role}
                </span>
              </div>
              
              <p className="text-sm font-sans text-text-secondary leading-relaxed">
                {currentProjectData?.impact}
              </p>

              {/* Теги */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {currentProjectData?.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="text-[10px] font-mono text-text-main bg-neutral-100 dark:bg-neutral-800/60 border border-custom-border/30 px-2.5 py-1 rounded"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}