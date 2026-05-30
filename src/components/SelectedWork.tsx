/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  ArrowUpRight, 
  ToggleLeft, 
  ToggleRight, 
  Check,
  AlertTriangle
} from 'lucide-react';
import { PROJECTS_DATA } from '../data';

export default function SelectedWork() {
  const [activeProject, setActiveProject] = useState<string>('cloud-admin');
  
  // Track slide index for each case study separately
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

  // Track slide-internal states for rich interactions
  const [lifespan, setLifespan] = useState<number>(3600);
  const [ipFirewallEnabled, setIpFirewallEnabled] = useState<boolean>(true);
  const [checkedPermissions, setCheckedPermissions] = useState<Record<string, boolean>>({
    'doc.read': true,
    'doc.write': true,
    'user.sync': false,
  });

  // Slide content references (captions and labels)
  const projectSlides: Record<string, { label: string; caption: string }[]> = {
    'cloud-admin': [
      {
        label: 'Statistics Dashboard',
        caption: 'Statistics Dashboard - Real-time active sessions, server node loads, and active tenant connection details.',
      },
      {
        label: 'Security Settings',
        caption: 'Security Settings - JSON Web Token (JWT) tenant configuration and interactive secret lifespan slider controller.',
      },
      {
        label: 'Access Rules',
        caption: 'Access Rules - Nginx-style allow/deny firewall grid lists for granular client IP-address filtering.',
      },
    ],
    'admin-docs-cloud': [
      {
        label: 'Organization Directories',
        caption: 'Workspace Directory - Multi-tenant team folders, active storage allocations, and nested organizational assets tree.',
      },
      {
        label: 'Permissions System',
        caption: 'Directory Access Permissions - Dedicated role assignment control panel managing Collaborator, Reviewer, and Owner permissions.',
      },
      {
        label: 'Log Diagnostic Monitoring',
        caption: 'Diagnostic telemetry logs viewer. Pause, resume, and filter system-monitoring events based on status severity flags.',
      },
    ],
    'design-system': [
      {
        label: 'Endpoint Catalog',
        caption: 'REST API Catalog - Complete list of HTTP method endpoints with real-time text query autocomplete and filter logic.',
      },
      {
        label: 'Detailed Inspector',
        caption: 'Dynamic Request Body Specifier - Real-time data schema validator updating JSON client response body templates.',
      },
      {
        label: 'Quick Start Snippets',
        caption: 'Quick Start Code Snippet - Instantly toggle syntax-highlighted setup scripts across JS, Python, and cURL environments.',
      },
    ],
    'integration-edition': [
      {
        label: 'Visual Workflow Builder',
        caption: 'Workflow Orchestration - Interactive flowchart node editor. Pin-point trigger nodes to actions and animate connection paths.',
      },
      {
        label: 'Incident Monitoring Console',
        caption: 'Log & Error Stream - Webhook diagnostic feed listing delivery statuses, latency metrics, and interactive trace retry controllers.',
      },
    ],
    'landing-pages': [
      {
        label: 'Hero Grid System Designer',
        caption: 'High-Conversion Page Architect - Toggle margin guidelines, typographical alignments, and structural padding overlays.',
      },
      {
        label: 'Pricing Feature Matrix',
        caption: 'Pricing Feature Matrix - Plan capabilities layout optimized for conversion with active tier indicators.',
      },
      {
        label: 'Conversions A/B Testing Analytics',
        caption: 'Conversions Analytics Panel - Real-time marketing performance telemetry comparing visual asset performance statistics.',
      },
    ],
    'presentations': [
      {
        label: 'Master Aspect Ruler',
        caption: 'Slide Boundaries Ruler - Dynamic grid systems mapping 16:9 widescreen safe elements and layout guidelines.',
      },
      {
        label: 'High-Impact Projections Slide',
        caption: 'Corporate Slide Deck Preview - Clean data visualization columns communicating complex metrics with high contrast.',
      },
      {
        label: 'Typography Scale Model',
        caption: 'Corporate Branding Standards - Precise ratios mapping main header font weights to read captions and body text blocks.',
      },
    ],
    'marketplace': [
      {
        label: 'Grid Extension Catalog',
        caption: 'App Store Dashboard - Clean category navigation layout used to filter, discover, and install cloud platform plugins.',
      },
      {
        label: 'Secure Consent Setup Workflow',
        caption: 'App Authorization Workflow - Scope consent screen prompting API authentication keys with verification loaders.',
      },
      {
        label: 'Developer Publisher Console',
        caption: 'Developer Publish Center - Upload ZIP packages and validate manifest.json schemas on our automated checks terminal.',
      },
    ],
    'illustrations': [
      {
        label: 'Character Anatomy Outline',
        caption: 'Anatomy Guidelines - Balanced brand character sketches highlighting symmetric structural boundaries.',
      },
      {
        label: '3D Isometric Workspace',
        caption: '3D Isometric Shapes - Live skew projection controls illustrating mathematical depth alongside x, y, and z axes rules.',
      },
      {
        label: 'Colorway Harmony Analyzer',
        caption: 'Contrast Harmonization Rules - Dynamic check tool measuring contrast color safety margins against page defaults for WCAG standards.',
      },
    ],
    'logos': [
      {
        label: 'Golden Ratio Vector Grids',
        caption: 'Golden Ratio Construction Grid - Circular vector boundaries intersecting beautifully to shape high-fidelity emblems.',
      },
      {
        label: 'Contrast Adaptability Matrix',
        caption: 'Branding Contrast Matrix - Reviewing brand mark legibility across light, muted, colored, and dark backgrounds.',
      },
      {
        label: 'Lockup Typographical Padding',
        caption: 'Logo Lockup Rules - Specify padding thresholds as expressions of variable x to align brand indicators.',
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

  // Helper method to draw live interactive slides in high-fidelity 2D mockup layouts
  const renderInteractiveMockup = (projectId: string, slideIdx: number) => {
    // 1. DocServer Admin Panel (cloud-admin)
    if (projectId === 'cloud-admin') {
      if (slideIdx === 0) {
        return (
          <div className="w-full text-text-main p-4 md:p-6 space-y-5 bg-card-bg/25">
            <div className="flex items-center justify-between border-b border-custom-border pb-3">
              <span className="text-xs font-mono font-semibold tracking-wider text-[#2F4EFF]">TELEMETRY_STREAM_LIVE</span>
              <span className="text-[10px] font-mono text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                ACTIVE CLUSTER OK
              </span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="p-3.5 border border-custom-border rounded bg-page-bg/40">
                <span className="text-[10px] font-mono text-text-secondary uppercase">ACTIVE SESSIONS</span>
                <p className="text-xl font-sans font-extrabold mt-1 text-text-main">2,482 <span className="text-[11px] font-mono font-normal text-text-secondary">/ 3,000 max</span></p>
                <div className="w-full h-1.5 bg-neutral-200 dark:bg-neutral-800 rounded-full mt-2 overflow-hidden">
                  <div className="h-full bg-[#2F4EFF] rounded-full" style={{ width: '82%' }}></div>
                </div>
              </div>

              <div className="p-3.5 border border-custom-border rounded bg-page-bg/40">
                <span className="text-[10px] font-mono text-text-secondary uppercase">CPU NODE LOAD</span>
                <p className="text-xl font-sans font-extrabold mt-1 text-text-main">42.5% <span className="text-[10px] text-emerald-500 font-mono">-4.2%</span></p>
                <div className="flex gap-1 items-end h-4 mt-2">
                  {[20, 25, 45, 30, 35, 55, 42, 38, 48, 42, 35, 42].map((val, idx) => (
                    <div 
                      key={idx} 
                      className={`flex-1 rounded-sm ${idx === 11 ? 'bg-[#2F4EFF]' : 'bg-text-secondary/30'}`} 
                      style={{ height: `${val}%` }}
                    />
                  ))}
                </div>
              </div>

              <div className="p-3.5 border border-custom-border rounded bg-page-bg/40">
                <span className="text-[10px] font-mono text-text-secondary uppercase">BANDWIDTH THROTTLE</span>
                <p className="text-xl font-sans font-extrabold mt-1 text-text-main">0.00% <span className="text-[10px] text-text-secondary font-mono">0 kbps</span></p>
                <span className="text-[9px] font-mono text-emerald-500 block mt-2">CAPS OK – NO DEGRADATION</span>
              </div>
            </div>

            <div className="border border-custom-border rounded overflow-hidden">
              <div className="px-3 py-2 bg-page-bg/60 border-b border-custom-border flex justify-between items-center text-[10px] font-mono">
                <span className="text-text-secondary font-bold">NODE HEALTH OVERVIEW</span>
                <span className="text-text-super">CORES STATUS</span>
              </div>
              <div className="p-3 grid grid-cols-2 sm:grid-cols-4 gap-2">
                {['Node-US1', 'Node-EU1', 'Node-EU2', 'Node-AS1'].map((node, idx) => (
                  <div key={idx} className="p-2 border border-custom-border/60 rounded bg-page-bg/10 flex items-center justify-between text-xs font-mono">
                    <span className="text-text-secondary text-[11px]">{node}</span>
                    <span className={`w-2 h-2 rounded-full ${idx === 2 ? 'bg-amber-500 animate-pulse' : 'bg-emerald-500'}`} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      } else if (slideIdx === 1) {
        return (
          <div className="w-full text-text-main p-4 md:p-6 space-y-4 bg-card-bg/25">
            <div className="flex items-center justify-between border-b border-custom-border pb-3">
              <span className="text-xs font-mono font-semibold tracking-wider text-[#2F4EFF]">SECURITY_CONFIG_MODULE</span>
              <span className="text-xs font-mono text-text-secondary">JW_AUTH_SESSION</span>
            </div>

            <div className="space-y-4">
              <div className="space-y-1.5">
                <label className="block text-[10px] font-mono text-text-secondary uppercase">TOKEN LIFESPAN DURATION (SECONDS)</label>
                <div className="flex items-center gap-4">
                  <input 
                    type="range" 
                    min="60" 
                    max="86400" 
                    value={lifespan} 
                    onChange={(e) => setLifespan(Number(e.target.value))}
                    className="flex-grow h-1.5 bg-neutral-200 dark:bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-[#2F4EFF]"
                  />
                  <span className="font-mono text-xs text-[#2F4EFF] font-bold border border-custom-border px-2 py-1 rounded min-w-[70px] text-center">
                    {lifespan}s
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                <div className="space-y-1.5">
                  <label className="block text-[10px] font-mono text-text-secondary uppercase">SIGNING ALGORITHM</label>
                  <select className="w-full text-xs font-mono p-2 bg-page-bg/60 border border-custom-border rounded text-text-main focus:outline-none focus:border-[#2F4EFF]">
                    <option>HMAC (HS256) - Pre-shared Key</option>
                    <option>RSA (RS256) - Public/Private Key</option>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="block text-[10px] font-mono text-text-secondary uppercase">DECRYPTION METHOD</label>
                  <div className="p-2 border border-custom-border rounded text-xs font-mono bg-page-bg/20 text-text-secondary flex justify-between items-center">
                    <span>RELAXED_SYMMETRIC</span>
                    <span className="text-[#2F4EFF] font-semibold text-[10px]">VERIFIED</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      } else {
        return (
          <div className="w-full text-text-main p-4 md:p-6 space-y-4 bg-card-bg/25">
            <div className="flex items-center justify-between border-b border-custom-border pb-3">
              <span className="text-xs font-mono font-semibold tracking-wider text-[#2F4EFF]">IP_RESTRICTION_FIREWALL</span>
              <button 
                onClick={() => setIpFirewallEnabled(!ipFirewallEnabled)}
                className="flex items-center gap-1.5 focus:outline-none"
              >
                <span className="text-[10px] font-mono text-text-secondary uppercase">FIREWALL STATE:</span>
                {ipFirewallEnabled ? (
                  <ToggleRight className="w-7 h-7 text-[#2F4EFF] cursor-pointer" />
                ) : (
                  <ToggleLeft className="w-7 h-7 text-text-super cursor-pointer" />
                )}
              </button>
            </div>

            <div className={`space-y-3 transition-opacity duration-300 ${ipFirewallEnabled ? 'opacity-100' : 'opacity-40'}`}>
              <div className="p-2 border border-yellow-500/20 bg-yellow-500/5 rounded text-[10px] font-mono text-yellow-600 dark:text-yellow-400 flex gap-2 items-center">
                <AlertTriangle className="w-4 h-4 shrink-0" />
                <span>Nginx proxy configurations will be updated instantly across all clusters.</span>
              </div>

              <div className="border border-custom-border rounded overflow-hidden">
                <table className="w-full text-left border-collapse text-xs font-mono">
                  <thead>
                    <tr className="bg-page-bg border-b border-custom-border text-text-secondary text-[10px] tracking-wider uppercase">
                      <th className="p-2.5">PRIORITY</th>
                      <th className="p-2.5">ACTION</th>
                      <th className="p-2.5">IP SOURCE ROUTE</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-custom-border bg-page-bg/20">
                      <td className="p-2.5 font-bold">1</td>
                      <td className="p-2.5">
                        <span className="px-1.5 py-0.5 bg-emerald-500/10 text-emerald-500 text-[10px] rounded border border-emerald-500/20">ALLOW</span>
                      </td>
                      <td className="p-2.5 font-bold">192.168.1.0/24</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-bold">2</td>
                      <td className="p-2.5">
                        <span className="px-1.5 py-0.5 bg-rose-500/10 text-rose-500 text-[10px] rounded border border-rose-500/20">DENY</span>
                      </td>
                      <td className="p-2.5 font-bold text-rose-500">104.244.42.128</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );
      }
    }

    // 2. Admin DocsCloud (admin-docs-cloud)
    if (projectId === 'admin-docs-cloud') {
      if (slideIdx === 0) {
        return (
          <div className="w-full text-text-main p-4 md:p-6 space-y-4 bg-card-bg/25">
            <div className="flex items-center justify-between border-b border-custom-border pb-3">
              <span className="text-xs font-mono font-semibold tracking-wider text-[#2F4EFF]">MULTI_TENANT_WORKSPACE_TREE</span>
              <span className="text-[10px] font-mono text-text-secondary bg-page-bg px-2 py-0.5 border border-custom-border rounded">TENANT ID: acme-7x9</span>
            </div>
            <div className="p-4 border border-custom-border rounded bg-page-bg/30 text-xs font-mono text-left">
              📂 root-cluster <br />
              &nbsp;&nbsp;📂 engineering-node <br />
              &nbsp;&nbsp;&nbsp;&nbsp;📂 marketing_collateral
            </div>
          </div>
        );
      } else if (slideIdx === 1) {
        return (
          <div className="w-full text-text-main p-4 md:p-6 space-y-4 bg-card-bg/25">
            <div className="flex items-center justify-between border-b border-custom-border pb-3">
              <span className="text-xs font-mono font-semibold tracking-wider text-[#2F4EFF]">ACCESS_SECURITY_CONTROLLER</span>
            </div>
            <div className="space-y-2 text-left">
              {['doc.read', 'doc.write', 'user.sync'].map((scope) => (
                <div 
                  key={scope}
                  onClick={() => setCheckedPermissions(prev => ({ ...prev, [scope]: !prev[scope] }))}
                  className="p-2 border border-custom-border rounded flex justify-between items-center bg-page-bg/20 cursor-pointer"
                >
                  <span className="font-mono text-xs">{scope}</span>
                  {checkedPermissions[scope] ? <Check className="w-4 h-4 text-[#2F4EFF]" /> : <div className="w-4 h-4 border rounded" />}
                </div>
              ))}
            </div>
          </div>
        );
      }
    }

    // Заглушка дефолтных слайдов для остальных демо-проджектов
    return (
      <div className="w-full h-48 flex flex-col items-center justify-center bg-card-bg/10 border border-dashed border-custom-border rounded p-6 text-center">
        <span className="text-xs font-mono text-text-secondary uppercase tracking-widest mb-2">Live Canvas Interactive Sandbox</span>
        <p className="text-xs text-text-super max-w-md">
          {projectId ? `${projectId.toUpperCase()} — Slide Mockup Framework Interactive State Engine.` : 'Interactive Sandbox Canvas Layout'}
        </p>
      </div>
    );
  };

  return (
    <section className="w-full py-12 md:py-20 px-4 md:px-8 max-w-7xl mx-auto bg-page-bg">
      {/* Главный двухколоночный контейнер */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        
        {/* ЛЕВЫЙ SIDEBAR (Колонки 1-4) */}
        <div className="lg:col-span-4 flex flex-col justify-between space-y-8">
          <div>
            <span className="text-[10px] tracking-[0.2em] font-mono font-bold text-text-secondary uppercase block mb-2">
              02 / SELECTED WORKS
            </span>
            <h2 className="text-3xl md:text-4xl font-sans font-black text-text-main tracking-tight mb-4">
              Systems Design
            </h2>
            <p className="text-sm md:text-base text-text-secondary leading-relaxed mb-8">
              Explore architectural schemas, tokens, and navigation frameworks built for high-scale document orchestration systems.
            </p>

            {/* Список выбора кейсов */}
            <div className="space-y-2">
              <span className="text-[10px] tracking-wider font-mono text-text-super uppercase block mb-3">
                SELECT CASE STUDY
              </span>
              {PROJECTS_DATA.map((project) => {
                const isSelected = activeProject === project.id;
                return (
                  <button
                    key={project.id}
                    onClick={() => setActiveProject(project.id)}
                    className={`w-full text-left px-4 py-3 rounded text-sm font-sans font-medium transition-all duration-200 flex items-center justify-between border group ${
                      isSelected
                        ? 'bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800 text-text-main shadow-sm font-bold'
                        : 'bg-transparent border-transparent text-text-secondary hover:text-text-main hover:bg-neutral-100/50 dark:hover:bg-neutral-800/30'
                    }`}
                  >
                    <span>{project.title}</span>
                    {isSelected && <span className="text-[#2F4EFF] font-bold">&middot;</span>}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* ПРАВАЯ КОНТЕНТНАЯ ЧАСТЬ (Колонки 5-12) */}
        <div className="lg:col-span-8 space-y-6 flex flex-col justify-between">
          
          {/* Описание проекта, Теги и Кнопка Кейса */}
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-[11px] font-mono font-bold bg-[#E8F7F0] text-[#00875A] dark:bg-[#00875A]/10 dark:text-[#57D9A3] px-2.5 py-1 rounded">
                Senior Product Designer
              </span>
              <span className="text-[11px] font-mono text-text-super">
                SPEC: {activeProject.toUpperCase()}
              </span>
            </div>

            <h3 className="text-2xl md:text-3xl font-sans font-black text-text-main tracking-tight">
              {PROJECTS_DATA.find(p => p.id === activeProject)?.title || 'Project Details'}
            </h3>

            <p className="text-sm md:text-base text-text-secondary leading-relaxed max-w-3xl">
              {projectDescriptions[activeProject] || 'Project design specifications.'}
            </p>

            {/* Теги */}
            <div className="flex flex-wrap gap-2 pt-2">
              {['SaaS Design', 'Figma Variables', 'Dashboard Design', 'Data Visualization', 'Security UX'].map((tag) => (
                <span key={tag} className="text-xs font-mono bg-neutral-100 dark:bg-neutral-800/60 border border-custom-border text-text-secondary px-2.5 py-1 rounded">
                  {tag}
                </span>
              ))}
            </div>

            {/* Восстановленная кнопка View Case Study */}
            <div className="pt-4">
              <a
                href="#case-study-link" 
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#2F4EFF] hover:bg-[#1E3BBF] text-white text-sm font-sans font-bold rounded transition-colors shadow-md group"
              >
                <span>View Case Study</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>

          {/* Слайдер с интерактивным макетом */}
          <div className="border border-custom-border rounded-lg bg-white dark:bg-neutral-900 shadow-xl overflow-hidden mt-6">
            
            {/* Хедер симулированного браузера */}
            <div className="px-4 py-3 bg-neutral-50 dark:bg-neutral-900 border-b border-custom-border flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                <span className="w-3 h-3 rounded-full bg-[#27C93F]" />
                <span className="ml-4 text-xs font-mono text-text-super hidden sm:inline-block">
                  view://portfolio/{activeProject}/{currentSlides[currentSlideIndex]?.label.toLowerCase().replace(/\s+/g, '-')}
                </span>
              </div>

              {/* Стрелки переключения слайдов на хедере */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrevSlide}
                  className="p-1 rounded border border-custom-border hover:bg-neutral-100 dark:hover:bg-neutral-800 text-text-main transition-colors"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-xs font-mono text-text-secondary px-1">
                  {currentSlideIndex + 1} / {currentSlides.length}
                </span>
                <button
                  onClick={handleNextSlide}
                  className="p-1 rounded border border-custom-border hover:bg-neutral-100 dark:hover:bg-neutral-800 text-text-main transition-colors"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Интерактивная рабочая зона холста */}
            <div className="p-4 md:p-8 bg-neutral-50 dark:bg-neutral-950 flex items-center justify-center min-h-[280px]">
              {renderInteractiveMockup(activeProject, currentSlideIndex)}
            </div>

            {/* Подвал слайдера с Описанием текущего слайда и Капшеном */}
            <div className="px-4 py-4 bg-neutral-50 dark:bg-neutral-900 border-t border-custom-border space-y-1">
              <span className="text-[10px] font-mono font-bold text-[#2F4EFF] tracking-wider uppercase block">
                {currentSlides[currentSlideIndex]?.label || 'Screenshot Specification'}
              </span>
              <p className="text-xs font-mono text-text-secondary leading-relaxed">
                {currentSlides[currentSlideIndex]?.caption || 'No description asset metadata supplied.'}
              </p>

              {/* Точки-индикаторы (Буллиты) */}
              <div className="flex justify-center gap-1.5 pt-3">
                {currentSlides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setSlideIndices((prev) => ({
                        ...prev,
                        [activeProject]: idx,
                      }));
                    }}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      idx === currentSlideIndex ? 'w-6 bg-[#2F4EFF]' : 'w-1.5 bg-neutral-300 dark:bg-neutral-700'
                    }`}
                  />
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}