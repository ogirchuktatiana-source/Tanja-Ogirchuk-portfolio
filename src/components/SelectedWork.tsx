/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  ArrowUpRight, 
  Server, 
  Key, 
  ShieldCheck, 
  Database, 
  Search, 
  Code, 
  Play, 
  Network, 
  Monitor, 
  Layers, 
  Check, 
  Copy, 
  CheckCircle2, 
  ToggleLeft, 
  ToggleRight, 
  User, 
  Sliders, 
  Maximize, 
  Info, 
  Eye, 
  Workflow, 
  Grid, 
  AlertTriangle, 
  Palette, 
  FileCode, 
  BarChart4, 
  Compass
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

  // Track any slide-internal states for rich interactions
  const [copiedStates, setCopiedStates] = useState<Record<string, boolean>>({});
  const [lifespan, setLifespan] = useState<number>(3600);
  const [ipFirewallEnabled, setIpFirewallEnabled] = useState<boolean>(true);
  const [checkedPermissions, setCheckedPermissions] = useState<Record<string, boolean>>({
    'doc.read': true,
    'doc.write': true,
    'user.sync': false,
  });
  const [activeLang, setActiveLang] = useState<'nodejs' | 'python' | 'curl'>('nodejs');
  const [apiSearchQuery, setApiSearchQuery] = useState<string>('');
  const [docsSearchQuery, setDocsSearchQuery] = useState<string>('');
  const [integrationTesting, setIntegrationTesting] = useState<boolean>(false);
  const [integrationPingStep, setIntegrationPingStep] = useState<number>(0);
  const [activeMarketCategory, setActiveMarketCategory] = useState<string>('all');
  const [gridLinesEnabled, setGridLinesEnabled] = useState<boolean>(true);
  const [marginGuidesEnabled, setMarginGuidesEnabled] = useState<boolean>(true);
  const [illustrationLayer, setIllustrationLayer] = useState<'sketch' | 'wireframe' | 'solid'>('solid');
  const [isoSkewX, setIsoSkewX] = useState<number>(-12);
  const [isoSkewY, setIsoSkewY] = useState<number>(12);
  const [selectedMoodPalette, setSelectedMoodPalette] = useState<'nordic' | 'warm' | 'cyber'>('nordic');
  const [logoGridOpacity, setLogoGridOpacity] = useState<number>(60);
  const [customLogoText, setCustomLogoText] = useState<string>('DocServer');

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

  const setSlideIndex = (index: number) => {
    setSlideIndices((prev) => ({
      ...prev,
      [activeProject]: index,
    }));
  };

  const handleCopyCode = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedStates((prev) => ({ ...prev, [key]: true }));
    setTimeout(() => {
      setCopiedStates((prev) => ({ ...prev, [key]: false }));
    }, 2000);
  };

  const runWorkflowAnimation = () => {
    if (integrationTesting) return;
    setIntegrationTesting(true);
    setIntegrationPingStep(1);
    
    setTimeout(() => {
      setIntegrationPingStep(2);
    }, 1200);

    setTimeout(() => {
      setIntegrationPingStep(3);
    }, 2400);

    setTimeout(() => {
      setIntegrationTesting(false);
      setIntegrationPingStep(0);
    }, 3600);
  };

  // Helper method to draw live interactive slides in high-fidelity 2D mockup layouts
  const renderInteractiveMockup = (projectId: string, slideIdx: number) => {
    // 1. DocServer Admin Panel (cloud-admin)
    if (projectId === 'cloud-admin') {
      if (slideIdx === 0) {
        // Statistics Dashboard
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
        // Security Settings
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
                <div className="flex justify-between text-[8px] font-mono text-text-super">
                  <span>60s (Min)</span>
                  <span>3600s (Default)</span>
                  <span>86400s (24 Hours)</span>
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

              <div className="border border-custom-border rounded overflow-hidden">
                <div className="px-3 py-1.5 bg-page-bg/60 border-b border-custom-border flex justify-between items-center text-[10px] font-mono">
                  <span className="text-text-secondary font-bold">DECRYPTED JWT HEADER & CLAIMS</span>
                  <span className="text-emerald-500 font-semibold text-[9px]">COMPILER VALID</span>
                </div>
                <div className="p-3 bg-neutral-900 text-neutral-200 font-mono text-[10px] space-y-1 overflow-x-auto text-left rounded-b">
                  <p><span className="text-fuchsia-400">{"{"}</span></p>
                  <p className="pl-4"><span className="text-blue-400">"iss"</span>: <span className="text-amber-300">"onlyoffice-doc-server-cluster"</span>,</p>
                  <p className="pl-4"><span className="text-blue-400">"typ"</span>: <span className="text-amber-300">"JWT"</span>,</p>
                  <p className="pl-4"><span className="text-blue-400">"exp"</span>: <span className="text-green-400">Date.now() + {lifespan}</span>,</p>
                  <p className="pl-4"><span className="text-blue-400">"scopes"</span>: <span className="text-amber-300">["read.document", "write.collaborate"]</span></p>
                  <p><span className="text-fuchsia-400">{"}"}</span></p>
                </div>
              </div>
            </div>
          </div>
        );
      } else {
        // Access Rules IP Filtering
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
                <span>Nginx proxy configurations will be updated instantly across all clusters upon clicking save rules.</span>
              </div>

              <div className="border border-custom-border rounded overflow-hidden">
                <table className="w-full text-left border-collapse text-xs font-mono">
                  <thead>
                    <tr className="bg-page-bg border-b border-custom-border text-text-secondary text-[10px] tracking-wider uppercase">
                      <th className="p-2.5">PRIORITY</th>
                      <th className="p-2.5">ACTION</th>
                      <th className="p-2.5">IP SOURCE ROUTE</th>
                      <th className="p-2.5">DESC</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-custom-border bg-page-bg/20">
                      <td className="p-2.5 font-bold">1</td>
                      <td className="p-2.5">
                        <span className="px-1.5 py-0.5 bg-emerald-500/10 text-emerald-500 text-[10px] rounded border border-emerald-500/20">ALLOW</span>
                      </td>
                      <td className="p-2.5 font-bold">192.168.1.0/24</td>
                      <td className="p-2.5 text-text-super">Intranet VPN client pool</td>
                    </tr>
                    <tr className="border-b border-custom-border">
                      <td className="p-2.5 font-bold">2</td>
                      <td className="p-2.5">
                        <span className="px-1.5 py-0.5 bg-rose-500/10 text-rose-500 text-[10px] rounded border border-rose-500/20">DENY</span>
                      </td>
                      <td className="p-2.5 font-bold text-rose-500">104.244.42.128</td>
                      <td className="p-2.5 text-text-super">Malicious request source log #39</td>
                    </tr>
                    <tr className="bg-page-bg/10">
                      <td className="p-2.5 font-bold">3</td>
                      <td className="p-2.5">
                        <span className="px-1.5 py-0.5 bg-emerald-500/10 text-emerald-500 text-[10px] rounded border border-emerald-500/20">ALLOW</span>
                      </td>
                      <td className="p-2.5 font-bold">*</td>
                      <td className="p-2.5 text-text-super">Global wildcards routing list</td>
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
        // Workspace Directories
        return (
          <div className="w-full text-text-main p-4 md:p-6 space-y-4 bg-card-bg/25">
            <div className="flex items-center justify-between border-b border-custom-border pb-3">
              <span className="text-xs font-mono font-semibold tracking-wider text-[#2F4EFF]">MULTI_TENANT_WORKSPACE_TREE</span>
              <span className="text-[10px] font-mono text-text-secondary bg-page-bg px-2 py-0.5 border border-custom-border rounded">TENANT ID: acme-7x9</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-3 h-48">
              {/* Directory Tree Hierarchy */}
              <div className="md:col-span-5 p-3 border border-custom-border rounded bg-page-bg/30 text-xs font-mono space-y-2 overflow-y-auto text-left">
                <span className="text-[9px] font-bold text-text-super block uppercase mb-1">TEAM DOMAINS</span>
                <div className="text-text-main cursor-pointer hover:bg-neutral-200/50 dark:hover:bg-neutral-800/50 p-1 rounded font-bold flex items-center gap-1">
                  <span>📂</span> <span>root-cluster</span>
                </div>
                <div className="pl-3 text-text-secondary cursor-pointer hover:bg-neutral-200/50 dark:hover:bg-neutral-800/50 p-1 rounded flex items-center gap-1">
                  <span>📂</span> <span>engineering-node</span>
                </div>
                <div className="pl-6 text-text-secondary cursor-pointer bg-[#2F4EFF]/10 text-[#2F4EFF] border-l border-[#2F4EFF] p-1 rounded flex items-center gap-1">
                  <span>📂</span> <span>marketing_collateral</span>
                </div>
                <div className="pl-3 text-text-secondary cursor-pointer hover:bg-neutral-200/50 dark:hover:bg-neutral-800/50 p-1 rounded flex items-center gap-1">
                  <span>📂</span> <span>corporate-legal-rules</span>
                </div>
              </div>

              {/* Contents list */}
              <div className="md:col-span-7 p-3 border border-custom-border rounded bg-page-bg/10 text-xs font-mono space-y-2 overflow-y-auto text-left">
                <span className="text-[9px] font-bold text-text-super block uppercase mb-1">active namespace: marketing_collateral</span>
                <div className="border border-custom-border rounded p-2 bg-page-bg/50 space-y-1">
                  <div className="flex justify-between font-bold text-text-main">
                    <span className="truncate">📄 Q4_Partnerships_Briefing.docx</span>
                    <span className="text-[10px] text-emerald-500 font-normal">4.2 MB</span>
                  </div>
                  <div className="flex justify-between text-[9px] text-text-secondary">
                    <span>Creator: Tanja O.</span>
                    <span>Access: EXTERNAL CO-EDIT</span>
                  </div>
                </div>
                <div className="border border-custom-border rounded p-2 bg-page-bg/50 space-y-1">
                  <div className="flex justify-between font-bold text-text-main">
                    <span className="truncate">📄 Brand_Kit_Storybook_Tokens.json</span>
                    <span className="text-[10px] text-emerald-500 font-normal">182 KB</span>
                  </div>
                  <div className="flex justify-between text-[9px] text-text-secondary">
                    <span>Creator: frontend-system</span>
                    <span>Access: INHERITED</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      } else if (slideIdx === 1) {
        // Permissions System Drawer
        return (
          <div className="w-full text-text-main p-4 md:p-6 space-y-4 bg-card-bg/25">
            <div className="flex items-center justify-between border-b border-custom-border pb-3">
              <span className="text-xs font-mono font-semibold tracking-wider text-[#2F4EFF]">ACCESS_SECURITY_CONTROLLER</span>
              <span className="text-[11px] font-mono text-text-secondary">ROLE DELEGATION ENGINE</span>
            </div>

            <div className="border border-custom-border rounded bg-page-bg/40 p-4 space-y-4 text-left">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded bg-[#2F4EFF]/10 border border-[#2F4EFF]/20 flex items-center justify-center text-[#2F4EFF] font-bold font-mono">
                  TO
                </div>
                <div>
                  <h4 className="text-sm font-sans font-black text-text-main">Tanja Ogirchuk</h4>
                  <p className="text-[10px] font-mono text-[#2F4EFF]">SYSTEMS OWNER &middot; PRIMARY TRUSTEE</p>
                </div>
              </div>

              <div className="space-y-2 border-t border-custom-border pt-3">
                <span className="text-[9px] font-mono text-text-secondary block uppercase">MAPPED SECURITY CONSENTS</span>
                <div className="space-y-2">
                  {[
                    { scope: 'doc.read', label: 'Query Node Databases & Stream Document Segments' },
                    { scope: 'doc.write', label: 'Modify Active Document State Cache Directly' },
                    { scope: 'user.sync', label: 'Sync Workspace Metadata to Active Directory LDAP' }
                  ].map((perm) => (
                    <div 
                      key={perm.scope}
                      onClick={() => setCheckedPermissions(prev => ({ ...prev, [perm.scope]: !prev[perm.scope] }))}
                      className="p-2 border border-custom-border hover:border-text-secondary/50 rounded flex items-center justify-between gap-3 bg-page-bg/20 cursor-pointer transition-colors"
                    >
                      <div className="space-y-0.5">
                        <span className="block text-[11px] font-mono font-bold text-text-main">{perm.scope}</span>
                        <span className="block text-[9px] font-sans text-text-secondary">{perm.label}</span>
                      </div>
                      {checkedPermissions[perm.scope] ? (
                        <div className="w-5 h-5 bg-[#2F4EFF] text-white rounded flex items-center justify-center">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                      ) : (
                        <div className="w-5 h-5 border border-custom-border rounded bg-page-bg" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      } else {
        // Logs Diagnostic Monitoring
        return (
          <div className="w-full text-text-main p-4 md:p-6 space-y-4 bg-card-bg/25">
            <div className="flex items-center justify-between border-b border-custom-border pb-3">
              <span className="text-xs font-mono font-semibold tracking-wider text-[#2F4EFF]">REALTIME_DIAGNOSTICS_STREAM</span>
              <div className="flex gap-1.5">
                <span className="w-2 h-2 rounded-full bg-red-400 dark:bg-red-500/80 animate-ping"></span>
                <span className="text-[10px] font-mono text-rose-500">MONITOR_MUTABLE</span>
              </div>
            </div>

            <div className="border border-custom-border rounded divide-y divide-custom-border bg-neutral-950 font-mono text-[10px] text-neutral-300 h-40 overflow-y-auto text-left leading-relaxed">
              <div className="p-2 select-none border-b border-neutral-900 flex justify-between bg-neutral-900/60 text-neutral-400">
                <span>EVENT STREAM LOG FEED (UTC)</span>
                <span>STATE_NODE: LIVE</span>
              </div>
              <div className="p-2 space-y-1">
                <p><span className="text-neutral-500">[2026-05-29 13:36:01]</span> <span className="text-emerald-400">INFO</span>: Sync completed for file: design_tokens_v3.json (24KB)</p>
                <p><span className="text-neutral-500">[2026-05-29 13:36:12]</span> <span className="text-amber-400">WARN</span>: High replication latency resolved for cluster node US-East</p>
                <p><span className="text-neutral-500">[2026-05-29 13:36:25]</span> <span className="text-neutral-500">DB_Q</span>: SELECT * FROM documents WHERE tenant_id = 'acme-7x9' (8ms)</p>
                <p><span className="text-neutral-500">[2026-05-29 13:36:34]</span> <span className="text-indigo-400">AUTH</span>: JWT Token validated successfully for tenant signature verify</p>
                <p><span className="text-neutral-500">[2026-05-29 13:36:42]</span> <span className="text-rose-400">FAIL</span>: Handshake timeout on replica core-eu-3 (Retrying in 250ms...)</p>
              </div>
            </div>

            <div className="flex justify-between items-center text-[10px] font-mono text-text-secondary">
              <span>LATENCY_STRENGTH: <span className="text-emerald-500">EXCELLENT (11ms avg)</span></span>
              <span>BUFFER LIMIT: 5000/5000 LINES</span>
            </div>
          </div>
        );
      }
    }

    // 3. API Documentation (design-system)
    if (projectId === 'design-system') {
      if (slideIdx === 0) {
        // API Endpoint List
        const endpoints = [
          { method: 'GET', url: '/v1/documents', desc: 'Query and filter primary multi-tenant document directories.' },
          { method: 'POST', url: '/v1/documents/create', desc: 'Instantiate interactive collaborative session from base files .' },
          { method: 'PUT', url: '/v1/documents/{id}/access', desc: 'Atomically upgrade or downgrade participant directory access scopes.' },
          { method: 'DELETE', url: '/v1/documents/{id}', desc: 'Purge file content instance and close core websocket sockets.' }
        ].filter(e => e.url.toLowerCase().includes(apiSearchQuery.toLowerCase()) || e.method.toLowerCase().includes(apiSearchQuery.toLowerCase()));

        return (
          <div className="w-full text-text-main p-4 md:p-6 space-y-4 bg-card-bg/25">
            <div className="flex items-center justify-between border-b border-custom-border pb-3">
              <span className="text-xs font-mono font-semibold tracking-wider text-[#2F4EFF]">CLOUDDOCS_API_REFERENCE</span>
              <span className="text-[10px] font-mono text-[#2F4EFF]">VERSION 4.2.0</span>
            </div>

            <div className="relative">
              <Search className="w-3.5 h-3.5 absolute left-3 top-2.5 text-text-super" />
              <input 
                type="text"
                placeholder="Search API endpoints (e.g. create, GET)..."
                value={apiSearchQuery}
                onChange={(e) => setApiSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-1.5 bg-page-bg/65 border border-custom-border rounded text-xs font-mono text-text-main focus:outline-none focus:border-[#2F4EFF]"
              />
            </div>

            <div className="space-y-2 max-h-[160px] overflow-y-auto scrollbar-thin">
              {endpoints.length > 0 ? endpoints.map((item, idx) => (
                <div key={idx} className="p-2 border border-custom-border bg-page-bg/20 rounded flex items-start gap-3 text-left">
                  <span className={`px-2 py-0.5 font-mono text-[9px] font-bold rounded-sm ${
                    item.method === 'GET' ? 'bg-emerald-500/10 text-emerald-500' :
                    item.method === 'POST' ? 'bg-blue-500/10 text-sky-500' :
                    item.method === 'PUT' ? 'bg-amber-500/10 text-amber-500' :
                    'bg-rose-500/10 text-rose-500'
                  }`}>
                    {item.method}
                  </span>
                  <div className="space-y-0.5 min-w-0 flex-grow">
                    <span className="block font-mono text-xs text-text-main font-bold truncate">{item.url}</span>
                    <span className="block text-[10px] text-text-secondary truncate">{item.desc}</span>
                  </div>
                </div>
              )) : (
                <div className="p-6 border border-custom-border rounded bg-page-bg/10 text-xs font-mono text-text-super">
                  NOAPI_METHODS_RESOLVING: "{apiSearchQuery}"
                </div>
              )}
            </div>
          </div>
        );
      } else if (slideIdx === 1) {
        // Detailed Inspector Component
        return (
          <div className="w-full text-text-main p-4 md:p-6 space-y-4 bg-card-bg/25">
            <div className="flex items-center justify-between border-b border-custom-border pb-3">
              <span className="text-xs font-mono font-semibold tracking-wider text-[#2F4EFF]">ENDPOINT_BODY_INSPECTOR</span>
              <span className="px-1.5 py-0.2 bg-blue-500/10 text-sky-500 text-[10px] font-mono rounded font-bold border border-blue-500/20">POST</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {/* Request Parameters schema table */}
              <div className="p-3 border border-custom-border rounded bg-page-bg/30 text-left font-mono text-[10px]">
                <span className="text-[9px] font-bold text-text-secondary block uppercase mb-1.5">DATA SCHEMA SCHEMES</span>
                <div className="space-y-1.5 divide-y divide-custom-border/50">
                  <div className="pt-2">
                    <div className="flex justify-between font-bold text-text-main">
                      <span>name</span>
                      <span className="text-fuchsia-400">string</span>
                    </div>
                    <span className="text-text-secondary text-[9px]">Filename including suffix extensions.</span>
                  </div>
                  <div className="pt-2">
                    <div className="flex justify-between font-bold text-text-main">
                      <span>format</span>
                      <span className="text-fuchsia-400">enum</span>
                    </div>
                    <span className="text-text-secondary text-[9px]">Available values: docx, xlsx, pptx, pdf.</span>
                  </div>
                </div>
              </div>

              {/* JSON Mock Response pane */}
              <div className="border border-custom-border rounded overflow-hidden">
                <div className="px-3 py-1 bg-page-bg/60 border-b border-custom-border flex justify-between items-center text-[9px] font-mono select-none">
                  <span className="text-text-secondary">AUTO RESPONSE PAYLOAD</span>
                  <span className="text-emerald-500 font-bold">201 CREATED</span>
                </div>
                <div className="p-3 bg-neutral-900 border-none font-mono text-[10px] text-neutral-300 text-left space-y-0.5 overflow-x-auto h-32 rounded-b">
                  <p><span className="text-fuchsia-400">{"{"}</span></p>
                  <p className="pl-4"><span className="text-blue-400">"status"</span>: <span className="text-amber-300">"success"</span>,</p>
                  <p className="pl-4"><span className="text-blue-400">"sessionId"</span>: <span className="text-amber-300">"sess_83726a9b4"</span>,</p>
                  <p className="pl-4"><span className="text-blue-400">"editorsUrl"</span>: <span className="text-amber-300">"https://docs.cloud/e/sess_832"</span>,</p>
                  <p className="pl-4"><span className="text-blue-400">"createdTimestamp"</span>: <span className="text-green-400">1829938804</span></p>
                  <p><span className="text-fuchsia-400">{"}"}</span></p>
                </div>
              </div>
            </div>
          </div>
        );
      } else {
        // Quick Start Code Snippets
        const codes = {
          nodejs: `const axios = require('axios');\n\nconst initDocServerSession = async () => {\n  const res = await axios.post(\n    'https://api.docscloud.com/v1/documents/create',\n    {\n      name: 'Partnership_Briefing.docx',\n      format: 'docx'\n    },\n    {\n      headers: { Authorization: \`Bearer JWT_SECRET\` }\n    }\n  );\n  console.log('Session Editors URL:', res.data.editorsUrl);\n};`,
          python: `import requests\n\nurl = "https://api.docscloud.com/v1/documents/create"\npayload = {\n    "name": "Partnership_Briefing.docx",\n    "format": "docx"\n}\nheaders = {\n    "Authorization": "Bearer JWT_SECRET"\n}\n\nresponse = requests.post(url, json=payload, headers=headers)\ndoc_info = response.json()\nprint(f"Editors URL: {doc_info['editorsUrl']}")`,
          curl: `curl -X POST https://api.docscloud.com/v1/documents/create \\\n  -H "Authorization: Bearer JWT_SECRET" \\\n  -H "Content-Type: application/json" \\\n  -d '{\n    "name": "Partnership_Briefing.docx",\n    "format": "docx"\n  }'`,
        };

        return (
          <div className="w-full text-text-main p-4 md:p-6 space-y-4 bg-card-bg/25">
            <div className="flex justify-between items-center border-b border-custom-border pb-2">
              <span className="text-xs font-mono font-semibold tracking-wider text-[#2F4EFF]">QUICKSTART_CLIENT_SNIPPETS</span>
              <button 
                onClick={() => handleCopyCode(codes[activeLang], `api-snippet-${activeLang}`)}
                className="flex items-center gap-1 hover:text-[#2F4EFF] transition-colors duration-300 text-[10px] font-mono cursor-pointer border border-custom-border px-2 py-0.5 rounded bg-page-bg"
              >
                {copiedStates[`api-snippet-${activeLang}`] ? (
                  <>
                    <Check className="w-3 h-3 text-emerald-500" />
                    <span className="text-emerald-500 font-bold">COPIED!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" />
                    <span>COPY CODE</span>
                  </>
                )}
              </button>
            </div>

            <div className="flex gap-1.5 border-b border-custom-border pb-1">
              {['nodejs', 'python', 'curl'].map((lang) => (
                <button
                  key={lang}
                  onClick={() => setActiveLang(lang as any)}
                  className={`px-3 py-1 rounded text-[10px] font-mono transition-all border cursor-pointer ${
                    activeLang === lang 
                      ? 'bg-[#2F4EFF] text-white border-[#2F4EFF]'
                      : 'bg-page-bg/60 text-text-secondary border-transparent hover:border-custom-border'
                  }`}
                >
                  {lang === 'nodejs' ? 'NodeJS / Axios' : lang === 'python' ? 'Python requests' : 'cURL Terminal'}
                </button>
              ))}
            </div>

            <div className="p-3 bg-neutral-900 border-none font-mono text-[9px] text-neutral-300 text-left overflow-y-auto h-28 rounded select-text max-w-full leading-relaxed shrink-0 whitespace-pre">
              {codes[activeLang]}
            </div>
          </div>
        );
      }
    }

    // 4. Integration Edition (integration-edition)
    if (projectId === 'integration-edition') {
      if (slideIdx === 0) {
        // Drag-and-drop Workflow builder flow
        return (
          <div className="w-full text-text-main p-4 md:p-6 space-y-4 bg-card-bg/25">
            <div className="flex items-center justify-between border-b border-custom-border pb-3">
              <span className="text-xs font-mono font-semibold tracking-wider text-[#2F4EFF]">INTEGRATION_AUTOMATION_BUILDER</span>
              <button
                onClick={runWorkflowAnimation}
                disabled={integrationTesting}
                className={`px-3 py-1.5 bg-[#2F4EFF] hover:bg-[#1f3ecc] text-white rounded text-[10px] font-mono font-semibold cursor-pointer shadow-sm disabled:opacity-50 flex items-center gap-1`}
              >
                <Play className="w-3 h-3 fill-current" />
                {integrationTesting ? 'FLOW INTEGRATION RUNNING...' : 'TEST PROTOCOL FLOW'}
              </button>
            </div>

            <div className="relative flex flex-col md:flex-row justify-between items-center gap-4 bg-page-bg/20 p-4 border border-custom-border rounded h-32">
              
              <div className={`p-2.5 border border-custom-border rounded bg-card-bg w-36 text-left transition-all ${integrationPingStep === 1 ? 'border-[#2F4EFF] bg-[#2F4EFF]/10' : ''}`}>
                <div className="flex items-center gap-1 mb-1.5">
                  <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                  <span className="text-[10px] font-mono font-bold text-text-main">CRM EVENT</span>
                </div>
                <span className="text-[9px] font-mono text-text-secondary block">FormSubmitted {"{id}"}</span>
              </div>

              {/* Connector line overlay indicators */}
              <div className="hidden md:block flex-grow border-t-2 border-dashed border-custom-border h-0 relative">
                {integrationTesting && (
                  <div className={`absolute top-1/2 -mt-1 w-2 h-2 rounded-full bg-[#2F4EFF] animate-ping ${integrationPingStep === 1 ? 'left-[10%]' : integrationPingStep === 2 ? 'left-[50%]' : 'left-[90%]'}`} />
                )}
              </div>

              <div className={`p-2.5 border border-custom-border rounded bg-card-bg w-36 text-left transition-all ${integrationPingStep === 2 ? 'border-[#2F4EFF] bg-[#2F4EFF]/10' : ''}`}>
                <div className="flex items-center gap-1 mb-1.5">
                  <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                  <span className="text-[10px] font-mono font-bold text-text-main">DOC GENERATOR</span>
                </div>
                <span className="text-[9px] font-mono text-text-secondary block">CompilePDFContract()</span>
              </div>

              <div className="hidden md:block flex-grow border-t-2 border-dashed border-custom-border h-0" />

              <div className={`p-2.5 border border-custom-border rounded bg-card-bg w-36 text-left transition-all ${integrationPingStep === 3 ? 'border-[#2F4EFF] bg-[#2F4EFF]/10' : ''}`}>
                <div className="flex items-center gap-1 mb-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  <span className="text-[10px] font-mono font-bold text-text-main">API WEBHOOK</span>
                </div>
                <span className="text-[9px] font-mono text-text-secondary block">PushToThirdParty()</span>
              </div>

            </div>
          </div>
        );
      } else {
        // Log & Error Monitoring Dashboard
        return (
          <div className="w-full text-text-main p-4 md:p-6 space-y-4 bg-card-bg/25">
            <div className="flex items-center justify-between border-b border-custom-border pb-3">
              <span className="text-xs font-mono font-semibold tracking-wider text-[#2F4EFF]">INCIDENT_MONITOR_CONSOLE</span>
              <span className="text-[10px] font-mono text-text-secondary">ACCURACY LIMIT ROUTER</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-3 text-left">
              <div className="md:col-span-5 p-3.5 border border-custom-border rounded bg-page-bg/40 space-y-2">
                <span className="text-[9px] font-mono text-text-super uppercase font-bold">MONITOR SCORE</span>
                <p className="text-2xl font-sans font-extrabold text-rose-500">12 Failures <span className="text-xs font-mono text-text-secondary font-normal">/ 128k total</span></p>
                <div className="space-y-1">
                  <div className="flex justify-between text-[9px] font-mono">
                    <span className="text-text-secondary">WEBHOOK SUCCESS RATE</span>
                    <span className="text-text-main">99.82%</span>
                  </div>
                  <div className="flex justify-between text-[9px] font-mono">
                    <span className="text-text-secondary">TIME DELAY OVERHEAD</span>
                    <span className="text-text-main">48ms</span>
                  </div>
                </div>
              </div>

              <div className="md:col-span-7 border border-custom-border rounded overflow-hidden flex flex-col justify-between text-[11px] font-mono">
                <div className="px-3 py-1.5 bg-page-bg/60 border-b border-custom-border text-text-secondary text-[9px] font-bold">
                  ACTIVE WEBHOOK FAILURES (LOG_ID_ERRST)
                </div>
                <div className="p-2 space-y-1.5 bg-page-bg/20 h-24 overflow-y-auto text-left">
                  <div className="p-1 border border-rose-500/10 bg-rose-500/5 rounded text-[10px] flex justify-between items-center text-rose-600 dark:text-rose-400">
                    <span className="truncate">Err 403: Slack Signature Key Check Mismatches</span>
                    <button className="text-[8px] font-bold border border-rose-500/20 px-1 hover:bg-rose-500/10 rounded">RETRY</button>
                  </div>
                  <div className="p-1 border border-rose-500/10 bg-rose-500/5 rounded text-[10px] flex justify-between items-center text-rose-600 dark:text-rose-400">
                    <span className="truncate">Err 504: Timeout connecting to tenant API endpoint</span>
                    <button className="text-[8px] font-bold border border-rose-500/20 px-1 hover:bg-rose-500/10 rounded">RETRY</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      }
    }

    // 5. Landing Pages (landing-pages)
    if (projectId === 'landing-pages') {
      if (slideIdx === 0) {
        return (
          <div className="w-full text-text-main p-4 md:p-6 space-y-4 bg-card-bg/25">
            <div className="flex items-center justify-between border-b border-custom-border pb-3">
              <span className="text-xs font-mono font-semibold tracking-wider text-[#2F4EFF]">LANDING_HERO_SYSTEM_ALIGNMENT</span>
              <div className="flex gap-2">
                <button 
                  onClick={() => setGridLinesEnabled(!gridLinesEnabled)}
                  className={`px-1.5 py-0.5 border text-[9px] font-mono rounded cursor-pointer ${gridLinesEnabled ? 'bg-[#2F4EFF]/10 text-[#2F4EFF] border-[#2F4EFF]/30' : 'bg-transparent text-text-secondary border-custom-border'}`}
                >
                  GRID_OVERLAY
                </button>
                <button 
                  onClick={() => setMarginGuidesEnabled(!marginGuidesEnabled)}
                  className={`px-1.5 py-0.5 border text-[9px] font-mono rounded cursor-pointer ${marginGuidesEnabled ? 'bg-[#2F4EFF]/10 text-[#2F4EFF] border-[#2F4EFF]/30' : 'bg-transparent text-text-secondary border-custom-border'}`}
                >
                  MARGINS
                </button>
              </div>
            </div>

            <div className="relative border border-custom-border bg-page-bg/40 rounded h-32 p-4 text-center overflow-hidden flex flex-col justify-center items-center">
              {/* Overlay lines and labels */}
              {gridLinesEnabled && (
                <div className="absolute inset-0 grid grid-cols-12 pointer-events-none opacity-20 divide-x divide-[#2F4EFF]" />
              )}
              {marginGuidesEnabled && (
                <>
                  <div className="absolute top-2 left-2 right-2 border-b border-dashed border-rose-400/40 text-[7px] font-mono text-rose-500 text-left">safe margin h-top</div>
                  <div className="absolute bottom-2 left-2 right-2 border-t border-dashed border-rose-400/40 text-[7px] font-mono text-rose-500 text-left">safe margin h-bot</div>
                </>
              )}

              <span className="text-[10px] font-mono text-[#2F4EFF] tracking-[0.25em] font-semibold block mb-1">ONLYOFFICE ADMIN SYSTEM</span>
              <h1 className="text-md md:text-lg font-sans font-black tracking-tight text-text-main max-w-sm leading-tight">
                An Orchestration Workspace Designed For Tech Builders
              </h1>
              <div className="flex gap-2 mt-2">
                <span className="px-3 py-1 bg-[#2F4EFF] text-white text-[9px] font-mono rounded font-bold">DEPLOY FLUID</span>
                <span className="px-3 py-1 border border-custom-border text-text-secondary text-[9px] font-mono rounded bg-card-bg">BROWSE SPECS</span>
              </div>
            </div>
          </div>
        );
      } else if (slideIdx === 1) {
        return (
          <div className="w-full text-text-main p-4 md:p-6 space-y-3 bg-card-bg/25">
            <div className="flex items-center justify-between border-b border-custom-border pb-2">
              <span className="text-xs font-mono font-semibold tracking-wider text-[#2F4EFF]">CONVERSION_PRICING_CHART</span>
              <span className="text-[10px] font-mono text-text-secondary">COMPARATIVE MATRIX</span>
            </div>

            <div className="grid grid-cols-3 gap-2 text-left">
              {[
                { plan: 'Core Free', price: '$0', feat: ['1 Core Server', 'Docs Co-Edit', 'Basic Firewall'] },
                { plan: 'Pro SaaS', price: '$49', feat: ['10 Core Nodes', 'Live Diagnostics', 'Full JWT Setup', 'Marketplace Apps'], active: true },
                { plan: 'Enterprise', price: '$199', feat: ['Unlimited Cores', 'Role Delegation', 'Firewall Rules', 'Publisher Console'] }
              ].map((tier, idx) => (
                <div 
                  key={idx} 
                  className={`p-3 border rounded font-mono text-[10px] space-y-1.5 transition-all ${
                    tier.active 
                      ? 'border-[#2F4EFF] bg-[#2F4EFF]/5' 
                      : 'border-custom-border bg-page-bg/20'
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-[9px] uppercase tracking-wide text-text-main">{tier.plan}</span>
                    {tier.active && <span className="text-[7px] font-bold bg-[#2F4EFF] text-white px-1 py-0.2 rounded">POPULAR</span>}
                  </div>
                  <p className="text-md font-sans font-extrabold text-[#2F4EFF]">{tier.price} <span className="text-[8px] font-normal text-text-secondary">/ mo</span></p>
                  <ul className="space-y-1 pt-1.5 border-t border-custom-border/60 text-text-secondary text-[8px] leading-tight">
                    {tier.feat.map((f, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-1">
                        <span className="text-emerald-500">✔</span>
                        <span className="truncate">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        );
      } else {
        return (
          <div className="w-full text-text-main p-4 md:p-6 space-y-4 bg-card-bg/25">
            <div className="flex items-center justify-between border-b border-custom-border pb-3">
              <span className="text-xs font-mono font-semibold tracking-wider text-[#2F4EFF]">MARKETING_VARIANT_METRICS</span>
              <span className="text-[10px] font-mono text-[#2F4EFF] bg-blue-500/10 px-2 py-0.5 rounded">A/B EXPERIMENT ST-39</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left font-mono">
              <div className="p-3 border border-custom-border bg-page-bg/30 rounded space-y-2">
                <span className="text-[9px] font-bold text-text-secondary block">VARIANT A (STATIC GRAPHIC IMAGE)</span>
                <p className="text-xl font-sans font-extrabold mt-0.5 text-text-main">2.4% <span className="text-[10px] font-mono text-text-secondary font-normal">Conversion Rate</span></p>
                <div className="w-full h-1.5 bg-neutral-200 dark:bg-neutral-800 rounded mt-2">
                  <div className="h-full bg-text-secondary/40 rounded" style={{ width: '48%' }}></div>
                </div>
              </div>

              <div className="p-3 border border-[#2F4EFF] bg-[#2F4EFF]/5 rounded space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-[9px] font-bold text-[#2F4EFF] block">VARIANT B (LIVE INTERACTIVE CODE)</span>
                  <span className="text-[8px] font-bold text-emerald-500 text-right">+104.1% SIGNUPS</span>
                </div>
                <p className="text-xl font-sans font-extrabold mt-0.5 text-text-main">4.9% <span className="text-[10px] font-mono text-[#2F4EFF] font-bold">Conversion Rate</span></p>
                <div className="w-full h-1.5 bg-neutral-200 dark:bg-neutral-800 rounded mt-2">
                  <div className="h-full bg-[#2F4EFF] rounded" style={{ width: '98%' }}></div>
                </div>
              </div>
            </div>
          </div>
        );
      }
    }

    // 6. Presentations (presentations)
    if (projectId === 'presentations') {
      if (slideIdx === 0) {
        return (
          <div className="w-full text-text-main p-4 md:p-6 space-y-4 bg-card-bg/25">
            <div className="flex items-center justify-between border-b border-custom-border pb-3">
              <span className="text-xs font-mono font-semibold tracking-wider text-[#2F4EFF]">ASPECT_RATIO_BOUNDS_RULER</span>
              <span className="text-[10px] font-mono text-text-secondary">WIDESCREEN 16:9 CANVAS RULES</span>
            </div>

            <div className="relative border border-custom-border bg-page-bg/50 rounded h-32 flex justify-center items-center overflow-hidden">
              {/* Visual presentation slide bounding lines */}
              <div className="absolute top-1 bottom-1 left-4 right-4 border border-[#2F4EFF] border-dashed rounded-sm opacity-60">
                <div className="absolute top-2 left-2 text-[7px] font-mono text-[#2F4EFF] opacity-85">TITLE SAFE BOUNDARY: 1920 x 1080 PX</div>
                <div className="absolute bottom-2 right-2 text-[7px] font-mono text-text-super">MARGIN SCALE: 1.25x</div>
              </div>
              <div className="absolute h-full w-[0.5px] bg-[#2F4EFF]/15 left-1/2" />
              <div className="absolute w-full h-[0.5px] bg-[#2F4EFF]/15 top-1/2" />
              
              <div className="z-10 bg-card-bg p-3 border border-custom-border rounded text-[11px] font-mono">
                <span className="block font-bold">Presentation Slate Construction</span>
                <span className="block text-[9px] text-text-secondary mt-0.5">Golden rules coordinates matrix alignment checklist</span>
              </div>
            </div>
          </div>
        );
      } else if (slideIdx === 1) {
        return (
          <div className="w-full text-text-main p-4 md:p-6 space-y-4 bg-card-bg/25">
            <div className="flex items-center justify-between border-b border-custom-border pb-3">
              <span className="text-xs font-mono font-semibold tracking-wider text-[#2F4EFF]">CORPORATE_SLIDE_DATA</span>
              <span className="text-[10px] font-mono text-text-secondary">ANNUAL GROWTH METRICS</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left font-mono text-xs">
              <div className="space-y-2">
                <span className="text-[9px] font-bold text-text-super uppercase block">ONLYOFFICE Enterprise Scale-Up</span>
                <p className="text-xs leading-relaxed text-text-secondary">
                  Our custom multi-tenant clusters grew organic adoptions up to <span className="text-text-main font-bold">12M transactions</span> during 2025.
                </p>
                <div className="grid grid-cols-2 gap-1.5 text-[10px] pt-1">
                  <div className="p-1.5 border border-custom-border rounded">
                    <span className="text-[8px] text-text-secondary block">PRO GROWTH YOY</span>
                    <span className="font-bold text-emerald-500">+128.4%</span>
                  </div>
                  <div className="p-1.5 border border-custom-border rounded">
                    <span className="text-[8px] text-text-secondary block">ACTIVE INSTANCES</span>
                    <span className="font-bold text-[#2F4EFF]">2,482</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-2 items-end h-28 border border-custom-border rounded p-3 bg-page-bg/10 select-none">
                {[
                  { year: '2023', val: 30, count: '4M' },
                  { year: '2024', val: 55, count: '7M' },
                  { year: '2025', val: 95, count: '12M', active: true }
                ].map((item, idx) => (
                  <div key={idx} className="flex-1 flex flex-col items-center gap-1 h-full justify-end">
                    <span className={`text-[8px] font-bold ${item.active ? 'text-[#2F4EFF]' : 'text-text-secondary'}`}>{item.count}</span>
                    <div 
                      className={`w-full rounded-sm transition-all duration-500 ${item.active ? 'bg-[#2F4EFF]' : 'bg-text-secondary/20'}`} 
                      style={{ height: `${item.val}%` }}
                    />
                    <span className="text-[8px] font-mono text-text-secondary">{item.year}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      } else {
        return (
          <div className="w-full text-text-main p-4 md:p-6 space-y-4 bg-card-bg/25 text-left font-mono">
            <div className="flex items-center justify-between border-b border-custom-border pb-3">
              <span className="text-xs font-bold text-[#2F4EFF]">TYPOGRAPHIC_SCALE_GOVERNANCE</span>
              <span className="text-[10px] text-text-secondary">SYSTEMS TEXT MODEL</span>
            </div>

            <div className="space-y-2.5">
              <div className="p-2 border border-custom-border rounded bg-page-bg/30">
                <div className="flex justify-between text-[9px] text-text-secondary font-bold">
                  <span>BRAND HEADER SPEC</span>
                  <span className="text-[#2F4EFF]">48px &middot; tracking-tight &middot; leading-[1.05]</span>
                </div>
                <h1 className="text-md font-sans font-black tracking-tight text-text-main mt-1 leading-none">Architectural Document Systems</h1>
              </div>

              <div className="p-2 border border-custom-border rounded bg-page-bg/30">
                <div className="flex justify-between text-[9px] text-text-secondary font-bold">
                  <span>METADATA / CODE LABELS</span>
                  <span className="text-[#2F4EFF]">11px &middot; tracking-[0.15em] &middot; uppercase</span>
                </div>
                <p className="text-[10px] uppercase tracking-widest font-semibold text-text-main mt-1">TELEMETRY_STREAM_LIVE</p>
              </div>
            </div>
          </div>
        );
      }
    }

    // 7. Marketplace (marketplace)
    if (projectId === 'marketplace') {
      if (slideIdx === 0) {
        // App grid navigation
        const apps = [
          { name: 'Google Drive Sync', desc: 'Sync project folders bidirectionally.', cat: 'productivity', icon: '📁', author: 'Google, Inc.' },
          { name: 'DeepL Translator', desc: 'Translate paragraph selections instantly.', cat: 'translations', icon: '📝', author: 'DeepL SE', installed: true },
          { name: 'Draw.io Worksheets', desc: 'Embed vector flowcharts inside documents.', cat: 'productivity', icon: '📊', author: 'JGraph Ltd' },
          { name: 'JWT Secure Proxy', desc: 'Manage access keys on custom servers.', cat: 'utilities', icon: '🔑', author: 'SaaS Devs' }
        ];

        const filteredApps = activeMarketCategory === 'all' ? apps : apps.filter(a => a.cat === activeMarketCategory);

        return (
          <div className="w-full text-text-main p-4 md:p-6 space-y-3.5 bg-card-bg/25">
            <div className="flex items-center justify-between border-b border-custom-border pb-2">
              <span className="text-xs font-mono font-semibold tracking-wider text-[#2F4EFF]">INTEGRATION_MARKETPLACE_GRID</span>
              <div className="flex gap-1">
                {['all', 'productivity', 'translations', 'utilities'].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveMarketCategory(cat)}
                    className={`px-1.5 py-0.5 rounded text-[8px] font-mono border cursor-pointer ${
                      activeMarketCategory === cat ? 'bg-[#2F4EFF] text-white border-[#2F4EFF]' : 'bg-transparent text-text-secondary border-custom-border hover:text-text-main'
                    }`}
                  >
                    {cat.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 text-left h-28 overflow-y-auto pr-1">
              {filteredApps.map((app, idx) => (
                <div key={idx} className="p-2 border border-custom-border rounded bg-page-bg/40 font-mono text-[9px] flex gap-2 items-center">
                  <div className="w-7 h-7 rounded bg-[#2F4EFF]/10 border border-[#2F4EFF]/20 flex items-center justify-center text-xs shrink-0 select-none">
                    {app.icon}
                  </div>
                  <div className="min-w-0 flex-grow">
                    <span className="block font-bold text-text-main truncate text-[10px]">{app.name}</span>
                    <span className="block text-text-secondary truncate text-[8px]">{app.desc}</span>
                  </div>
                  {app.installed ? (
                    <span className="text-[7px] text-[#2F4EFF] font-bold uppercase shrink-0">INSTALLED</span>
                  ) : (
                    <button className="text-[7px] font-bold border border-custom-border px-1 py-0.5 rounded cursor-pointer hover:bg-neutral-200 dark:hover:bg-neutral-800 shrink-0">ADD</button>
                  )}
                </div>
              ))}
            </div>
          </div>
        );
      } else if (slideIdx === 1) {
        // App Installation Screen
        return (
          <div className="w-full text-text-main p-4 md:p-6 space-y-4 bg-card-bg/25 text-left font-mono">
            <div className="flex items-center justify-between border-b border-custom-border pb-3">
              <span className="text-xs font-semibold text-[#2F4EFF]">SECURE_CLIENT_INSTALL_CONSENT</span>
              <span className="text-[9px] text-text-secondary border border-custom-border px-1 rounded bg-page-bg">DEEPL INTEGRATION v1.2</span>
            </div>

            <div className="p-3 border border-custom-border rounded bg-page-bg/40 space-y-3.5 text-[10px]">
              <div className="flex justify-between items-center bg-rose-500/5 border border-rose-500/10 p-2 rounded text-rose-600 dark:text-rose-400">
                <span className="text-[9px] font-bold uppercase tracking-wider block">CONSENT REQUIRED SECURITY PERMISSIONS:</span>
              </div>

              <div className="space-y-1 text-[9px] text-text-secondary">
                <div className="flex gap-2 items-center">
                  <input type="checkbox" defaultChecked className="accent-[#2F4EFF]" />
                  <span>Read paragraphs content in active co-editing session.</span>
                </div>
                <div className="flex gap-2 items-center">
                  <input type="checkbox" defaultChecked className="accent-[#2F4EFF]" />
                  <span>Delegate segments of highlighted text to third-party endpoints.</span>
                </div>
                <div className="flex gap-2 items-center">
                  <input type="checkbox" className="accent-[#2F4EFF]" />
                  <span>Store session configurations in long-term cluster databases.</span>
                </div>
              </div>

              <div className="flex gap-2 pt-1">
                <button className="px-3 py-1 bg-[#2F4EFF] hover:bg-[#1f3ecc] text-white text-[9px] font-bold rounded cursor-pointer">
                  APPROVE & INSTALL
                </button>
                <button className="px-3 py-1 border border-custom-border text-text-secondary text-[9px] rounded bg-card-bg select-none">
                  DECLINE
                </button>
              </div>
            </div>
          </div>
        );
      } else {
        // Publisher Extension Dashboard
        return (
          <div className="w-full text-text-main p-4 md:p-6 space-y-4 bg-card-bg/25">
            <div className="flex items-center justify-between border-b border-custom-border pb-3">
              <span className="text-xs font-mono font-semibold tracking-wider text-[#2F4EFF]">DEVELOPER_PUBLISHING_WORKSPACE</span>
              <span className="text-[10px] font-mono text-emerald-500">MANIFEST VALID: TRUE</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-left font-mono">
              <div className="p-2 border border-custom-border bg-page-bg/30 rounded h-28 overflow-y-auto text-[9px] text-neutral-400">
                <span className="text-[8px] font-bold text-text-secondary block uppercase mb-1">MANIFEST.JSON CONSTRUCT</span>
                <p>{"{"}</p>
                <p className="pl-2">"id": "com.developer.spellchecker",</p>
                <p className="pl-2">"name": "Custom Spellcheck Plugin",</p>
                <p className="pl-2">"version": "1.0.4",</p>
                <p className="pl-2">"scopes": ["document.read", "document.write"]</p>
                <p>{"}"}</p>
              </div>

              <div className="border border-dashed border-[#2F4EFF]/40 hover:border-[#2F4EFF] rounded bg-[#2F4EFF]/5 h-28 flex flex-col justify-center items-center text-center p-3 transition-colors cursor-pointer select-none">
                <FileCode className="w-6 h-6 text-[#2F4EFF] mb-1.5 animate-pulse" />
                <span className="text-[9px] font-mono font-bold text-text-main uppercase">UPLOAD ZIP BUNDLE</span>
                <span className="text-[8px] font-mono text-text-secondary mt-0.5">Drag & drop compiled scripts package</span>
              </div>
            </div>
          </div>
        );
      }
    }

    // 8. Illustrations (illustrations)
    if (projectId === 'illustrations') {
      if (slideIdx === 0) {
        // Anatomy
        return (
          <div className="w-full text-text-main p-4 md:p-6 space-y-4 bg-card-bg/25">
            <div className="flex items-center justify-between border-b border-custom-border pb-3">
              <span className="text-xs font-mono font-semibold tracking-wider text-[#2F4EFF]">VECTOR_ANATOMICAL_SKETCH</span>
              <div className="flex gap-1 bg-page-bg border border-custom-border rounded p-0.5">
                {['sketch', 'wireframe', 'solid'].map((layer) => (
                  <button
                    key={layer}
                    onClick={() => setIllustrationLayer(layer as any)}
                    className={`px-2 py-0.5 capitalize cursor-pointer rounded text-[8px] font-mono ${
                      illustrationLayer === layer ? 'bg-[#2F4EFF] text-white' : 'text-text-secondary'
                    }`}
                  >
                    {layer}
                  </button>
                ))}
              </div>
            </div>

            <div className="relative border border-custom-border bg-page-bg/40 rounded h-32 flex justify-center items-center select-none">
              {/* Custom SVG stylized vectors simulating vector skeleton rules */}
              <div className="w-48 h-20 relative border border-dashed border-[#2F4EFF]/35 rounded flex items-center justify-center">
                
                {illustrationLayer === 'sketch' && (
                  <>
                    <div className="absolute inset-x-0 h-0.5 bg-rose-500/25 border-dashed border-b top-1/2" />
                    <div className="absolute inset-y-0 w-0.5 bg-rose-500/25 border-dashed border-r left-1/2" />
                    <span className="absolute bottom-1 right-2 text-[7px] font-mono text-rose-500">SKETCH AXIS DEFAULTS</span>
                  </>
                )}

                {/* Simulated Character Mark / Shapes */}
                <svg className="w-40 h-24 text-text-main" viewBox="0 0 100 50">
                  {/* Bounding skeleton guidelines */}
                  {illustrationLayer !== 'solid' && (
                    <g stroke="#2F4EFF" strokeWidth="0.5" strokeDasharray="1,1" fill="none">
                      <circle cx="50" cy="25" r="18" />
                      <rect x="25" y="10" width="50" height="30" />
                      <line x1="15" y1="25" x2="85" y2="25" />
                    </g>
                  )}
                  {/* Solid Vector artwork */}
                  {illustrationLayer !== 'sketch' && (
                    <g fill={illustrationLayer === 'wireframe' ? 'none' : 'currentColor'} stroke="#2F4EFF" strokeWidth="1.2">
                      <polygon points="50,12 65,37 35,37" className="opacity-80" />
                      <circle cx="50" cy="22" r="6" className="text-[#2F4EFF]" />
                    </g>
                  )}
                </svg>

                <div className="absolute top-1 left-2 font-mono text-[7px] text-[#2F4EFF] bg-[#2F4EFF]/10 px-1 rounded">R_ANG: 90&deg; &middot; COMPARE: F_TRUE</div>
              </div>
            </div>
          </div>
        );
      } else if (slideIdx === 1) {
        // Isometric Workspace
        return (
          <div className="w-full text-text-main p-4 md:p-6 space-y-4 bg-card-bg/25">
            <div className="flex items-center justify-between border-b border-custom-border pb-3">
              <span className="text-xs font-mono font-semibold tracking-wider text-[#2F4EFF]">ISOMETRIC_DIMENSIONAL_WORKBENCH</span>
              <span className="text-[10px] font-mono text-text-secondary">COORDINATES PROJECTOR</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              <div className="md:col-span-5 text-left text-[9px] font-mono space-y-2 pt-1">
                <div className="space-y-1">
                  <label className="text-text-secondary uppercase">HORIZONTAL SKEW (X)</label>
                  <input 
                    type="range" 
                    min="-45" 
                    max="45" 
                    value={isoSkewX} 
                    onChange={(e) => setIsoSkewX(Number(e.target.value))}
                    className="w-full h-1 bg-neutral-200 dark:bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-[#2F4EFF]"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-text-secondary uppercase">VERTICAL SKEW (Y)</label>
                  <input 
                    type="range" 
                    min="-45" 
                    max="45" 
                    value={isoSkewY} 
                    onChange={(e) => setIsoSkewY(Number(e.target.value))}
                    className="w-full h-1 bg-neutral-200 dark:bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-[#2F4EFF]"
                  />
                </div>
              </div>

              <div className="md:col-span-7 h-28 border border-custom-border bg-page-bg/40 rounded flex justify-center items-center overflow-hidden relative">
                <span className="absolute top-1 left-2 text-[7px] font-mono text-text-super">AXES GRID COMPRESSED</span>
                
                {/* Visual live skew box */}
                <div 
                  className="w-12 h-12 bg-[#2F4EFF] border border-white/20 transition-transform duration-300 shadow-sm flex items-center justify-center font-mono text-white text-[10px] font-black"
                  style={{
                    transform: `rotate(-15deg) skewX(${isoSkewX}deg) skewY(${isoSkewY}deg) scale(0.9)`,
                  }}
                >
                  3D
                </div>
              </div>
            </div>
          </div>
        );
      } else {
        // Colorway Harmonization Rules
        const schemes = {
          nordic: [
            { name: 'Core Blue', hex: '#2F4EFF', ratio: '6.4:1', pass: true },
            { name: 'Paper White', hex: '#F9FAFB', ratio: '1.2:1', pass: false },
            { name: 'Deep Carbon', hex: '#111827', ratio: '15.8:1', pass: true },
          ],
          warm: [
            { name: 'Amber Clay', hex: '#D97706', ratio: '4.8:1', pass: true },
            { name: 'Muted Rose', hex: '#FDA4AF', ratio: '2.1:1', pass: false },
            { name: 'Warm Ink', hex: '#291B1B', ratio: '14.2:1', pass: true },
          ],
          cyber: [
            { name: 'Neon Pulsar', hex: '#10B981', ratio: '5.2:1', pass: true },
            { name: 'Cyber Violet', hex: '#8B5CF6', ratio: '4.1:1', pass: true },
            { name: 'Obsidian Jet', hex: '#020617', ratio: '19.2:1', pass: true },
          ]
        };

        return (
          <div className="w-full text-text-main p-4 md:p-6 space-y-4 bg-card-bg/25">
            <div className="flex items-center justify-between border-b border-custom-border pb-3">
              <span className="text-xs font-mono font-semibold tracking-wider text-[#2F4EFF]">CONTRAST_RATIO_ACCESSIBILITY_DEC</span>
              <div className="flex gap-1">
                {['nordic', 'warm', 'cyber'].map((s) => (
                  <button
                    key={s}
                    onClick={() => setSelectedMoodPalette(s as any)}
                    className={`px-1.5 py-0.2 capitalize cursor-pointer rounded text-[8px] font-mono border ${
                      selectedMoodPalette === s ? 'bg-[#2F4EFF] text-white border-[#2F4EFF]' : 'text-text-secondary border-custom-border'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div className="border border-custom-border rounded overflow-hidden">
              <table className="w-full text-left border-collapse text-[10px] font-mono">
                <thead>
                  <tr className="bg-page-bg border-b border-custom-border text-text-secondary text-[8px] uppercase tracking-wider">
                    <th className="p-2">COLOR IN REVIEW</th>
                    <th className="p-2">HEX CODE</th>
                    <th className="p-2">CONTRAST (vs SLATE)</th>
                    <th className="p-2">WCAG RATING</th>
                  </tr>
                </thead>
                <tbody>
                  {schemes[selectedMoodPalette].map((item, idx) => (
                    <tr key={idx} className="border-b border-custom-border last:border-0">
                      <td className="p-2 flex items-center gap-2">
                        <span className="w-3.5 h-3.5 rounded border border-white/10 shrink-0" style={{ backgroundColor: item.hex }} />
                        <span className="font-bold text-text-main truncate max-w-[80px]">{item.name}</span>
                      </td>
                      <td className="p-2 font-semibold text-text-secondary">{item.hex}</td>
                      <td className="p-2 text-text-main font-bold">{item.ratio}</td>
                      <td className="p-2">
                        {item.pass ? (
                          <span className="text-emerald-500 font-bold">✔ PASS AAA</span>
                        ) : (
                          <span className="text-amber-500 font-semibold">⚠ LOW</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
      }
    }

    // 9. Logos (logos)
    if (projectId === 'logos') {
      if (slideIdx === 0) {
        // Vector grid Golden Ratio
        return (
          <div className="w-full text-text-main p-4 md:p-6 space-y-4 bg-card-bg/25">
            <div className="flex items-center justify-between border-b border-custom-border pb-3">
              <span className="text-xs font-mono font-semibold tracking-wider text-[#2F4EFF]">GOLDEN_RATIO_GEOMETRY_CONSTRUCT</span>
              <div className="flex gap-2 items-center">
                <span className="text-[9px] font-mono text-text-secondary">GRID OPACITY:</span>
                <input 
                  type="range" 
                  min="10" 
                  max="100" 
                  value={logoGridOpacity} 
                  onChange={(e) => setLogoGridOpacity(Number(e.target.value))}
                  className="w-16 h-1 bg-neutral-200 dark:bg-neutral-800 rounded appearance-none cursor-pointer accent-[#2F4EFF]"
                />
              </div>
            </div>

            <div className="relative border border-custom-border bg-page-bg/40 rounded h-32 flex justify-center items-center overflow-hidden">
              <span className="absolute top-1 left-2 text-[7px] font-mono text-[#2F4EFF] bg-[#2F4EFF]/10 px-1 rounded">COMPASS GRID CONST_R_1.618</span>
              
              <div className="relative w-28 h-20 border border-dashed border-[#2F4EFF]/20 rounded flex items-center justify-center">
                {/* Grid circles resembling vector construction schemas */}
                <div 
                  className="absolute rounded-full border border-[#2F4EFF] border-dashed pointer-events-none transition-opacity" 
                  style={{ width: '60px', height: '60px', opacity: logoGridOpacity / 100 }} 
                />
                <div 
                  className="absolute rounded-full border border-sky-400 border-dashed pointer-events-none transition-opacity" 
                  style={{ width: '37px', height: '37px', opacity: logoGridOpacity / 100 }} 
                />
                <div 
                  className="absolute rounded-full border border-rose-400 border-dashed pointer-events-none transition-opacity" 
                  style={{ width: '23px', height: '23px', opacity: logoGridOpacity / 100 }} 
                />

                {/* Main brand icon construct mock */}
                <div className="z-10 w-9 h-9 border border-[#2F4EFF] bg-[#2F4EFF]/10 rounded flex items-center justify-center text-[#2F4EFF] font-mono text-[11px] font-black">
                  DS
                </div>
              </div>
            </div>
          </div>
        );
      } else if (slideIdx === 1) {
        // Canvas contrasts
        return (
          <div className="w-full text-text-main p-4 md:p-6 space-y-4 bg-card-bg/25">
            <div className="flex items-center justify-between border-b border-custom-border pb-3">
              <span className="text-xs font-mono font-semibold tracking-wider text-[#2F4EFF]">BRAND_CLARITY_CONTRAST_BOARD</span>
              <span className="text-[10px] font-mono text-text-secondary">CONTEXTUAL ADAPTABILITY REVIEW</span>
            </div>

            <div className="grid grid-cols-4 gap-2 text-center select-none font-mono text-[9px]">
              <div className="p-3 bg-white text-neutral-900 border border-custom-border rounded space-y-1.5">
                <span className="text-[#2F4EFF] font-bold text-xs">DS</span>
                <span className="block text-[7px] font-semibold text-neutral-500 uppercase">Light bg</span>
              </div>
              <div className="p-3 bg-neutral-100 text-neutral-900 border border-custom-border rounded space-y-1.5">
                <span className="text-[#2F4EFF] font-bold text-xs font-black">DS</span>
                <span className="block text-[7px] font-semibold text-neutral-500 uppercase">Muted bg</span>
              </div>
              <div className="p-3 bg-[#2F4EFF] text-white rounded space-y-1.5 border border-[#2F4EFF]">
                <span className="font-bold text-xs block text-white font-semibold">DS</span>
                <span className="block text-[7px] font-semibold text-white/80 uppercase">Accent bg</span>
              </div>
              <div className="p-3 bg-neutral-900 text-neutral-100 rounded space-y-1.5 border border-neutral-800">
                <span className="text-[#2F4EFF] font-bold text-xs block font-black">DS</span>
                <span className="block text-[7px] font-semibold text-neutral-400 uppercase">Dark bg</span>
              </div>
            </div>
          </div>
        );
      } else {
        // Logo lockup input simulator
        return (
          <div className="w-full text-text-main p-4 md:p-6 space-y-4 bg-card-bg/25 font-mono">
            <div className="flex items-center justify-between border-b border-custom-border pb-3">
              <span className="text-xs font-bold text-[#2F4EFF]">TYPOGRAPHIC_LOGO_LOCKUP_SPEC</span>
              <span className="text-[9px] text-text-secondary">HORIZONTAL BOUNDS IDENTIFIER</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 text-left">
              <div className="md:col-span-5 space-y-1 text-[9px] pt-1">
                <label className="text-text-secondary uppercase font-bold block">TEST BRAND SLOGAN LABEL</label>
                <input 
                  type="text" 
                  value={customLogoText} 
                  onChange={(e) => setCustomLogoText(e.target.value)}
                  className="w-full p-1.5 bg-page-bg/60 border border-custom-border rounded text-[10px] text-text-main font-semibold focus:outline-none focus:border-[#2F4EFF]"
                  maxLength={18}
                />
              </div>

              <div className="md:col-span-7 h-20 border border-custom-border bg-page-bg/45 rounded flex items-center justify-center p-3 overflow-hidden relative">
                {/* Sizing guides overlay lines */}
                <div className="absolute inset-x-2 top-2 bottom-2 border border-dashed border-[#2F4EFF]/20 pointer-events-none" />
                <div className="absolute top-1 left-4 text-[7px] font-mono text-[#2F4EFF] opacity-75">SAFE CLEAR PADDING = 2x</div>
                
                <div className="flex items-center gap-2 text-text-main select-none font-sans mt-2">
                  <div className="w-6 h-6 border border-[#2F4EFF] bg-[#2F4EFF]/15 rounded flex items-center justify-center text-[#2F4EFF] font-mono text-[9px] font-bold">
                    DS
                  </div>
                  <span className="text-md font-bold tracking-tight">{customLogoText || 'DocServer'}</span>
                </div>
              </div>
            </div>
          </div>
        );
      }
    }

    return null;
  };

  return (
    <section 
      id="work" 
      className="border-b border-custom-border bg-page-bg min-h-[85vh] py-0 flex items-center"
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

        {/* Right Column: Active Case Study + Silde Interactive Showcase */}
        <div 
          className="lg:col-span-9 p-6 md:p-12 flex flex-col justify-between" 
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
                  className="space-y-6"
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

                  <p className="text-text-secondary font-sans text-sm md:text-base leading-relaxed">
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

                {/* 2. Interactive Large Screenshot Slider (Carousel) - strictly below text details */}
                <div className="space-y-4 pt-4" id="carousel-outer">
                  <div className="w-full border border-custom-border rounded bg-card-bg transition-all duration-300 shadow-none">
                    
                    {/* Browser Chrome Accent Bar */}
                    <div className="bg-card-bg/60 px-4 py-2.5 flex items-center justify-between border-b border-custom-border select-none">
                      <div className="flex items-center gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-400 dark:bg-red-500/85" />
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400 dark:bg-yellow-500/85" />
                        <div className="w-2.5 h-2.5 rounded-full bg-green-400 dark:bg-green-500/85" />
                        <span className="ml-2.5 font-mono text-[9px] text-text-super tracking-wide uppercase">
                          {slides[activeIdx]?.label?.replace(/ /g, '_').toUpperCase() || 'MOCKUP_SCREENSHOT'}.NODE
                        </span>
                      </div>
                      <div className="flex items-center gap-1 bg-page-bg px-2 py-0.5 rounded text-[8px] font-mono border border-custom-border text-text-secondary select-all">
                        <span>DESIGNER_SANDBOX_LIVE</span>
                      </div>
                    </div>

                    {/* Interactive Mockup Sandbox Console */}
                    <div className="relative bg-neutral-100 dark:bg-page-bg overflow-hidden group w-full h-auto min-h-[180px] flex items-center justify-center">
                      <div className="w-full max-w-full h-auto block select-none">
                        {renderInteractiveMockup(proj.id, activeIdx)}
                      </div>

                      {/* Sliding Arrows (Overlay, showing on hover) */}
                      {slides.length > 1 && (
                        <>
                          <button
                            onClick={handlePrevSlide}
                            className="absolute left-3 top-1/2 -translate-y-1/2 p-1.5 rounded bg-black/40 hover:bg-black/70 text-white border border-white/10 backdrop-blur-sm cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300 focus:opacity-100"
                            aria-label="Previous slide"
                          >
                            <ChevronLeft className="w-4 h-4" />
                          </button>
                          <button
                            onClick={handleNextSlide}
                            className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 rounded bg-black/40 hover:bg-black/70 text-white border border-white/10 backdrop-blur-sm cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300 focus:opacity-100"
                            aria-label="Next slide"
                          >
                            <ChevronRight className="w-4 h-4" />
                          </button>
                        </>
                      )}

                      {/* Float Slide Counter Badge */}
                      {slides.length > 0 && (
                        <div className="absolute right-3 bottom-3 bg-black/70 border border-white/10 backdrop-blur-sm text-white px-2 py-0.5 rounded font-mono text-[8px] select-none tracking-wider">
                          INDEX: {activeIdx + 1} / {slides.length}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Caption & Nav Pagination dots */}
                  {slides.length > 0 && (
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-1 w-full select-none">
                      <p className="text-xs text-text-secondary font-sans leading-relaxed text-center sm:text-left max-w-[85%] pr-2">
                        <Info className="inline w-3.5 h-3.5 mr-1 text-[#2F4EFF] shrink-0 align-text-bottom" />
                        {slides[activeIdx].caption}
                      </p>
                      
                      {slides.length > 1 && (
                        <div className="flex items-center gap-1 shrink-0 pt-1 sm:pt-0">
                          {slides.map((_, idx) => (
                            <button
                              key={idx}
                              onClick={() => setSlideIndex(idx)}
                              className={`h-1.5 rounded transition-all duration-300 cursor-pointer ${
                                activeIdx === idx
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

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
