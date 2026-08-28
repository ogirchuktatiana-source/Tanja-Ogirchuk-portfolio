/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Case Study component for Tatiana Ogirchuk (Senior Product Designer)
 * Project: DocServer Admin Panel
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, 
  ArrowRight,
  Shield, 
  ShieldCheck, 
  Key, 
  Sliders, 
  Lock, 
  Activity, 
  Layers, 
  FileText, 
  Server, 
  Sparkles, 
  Check, 
  Globe, 
  Cpu, 
  Terminal, 
  Database,
  ExternalLink,
  ChevronRight,
  Maximize2
} from 'lucide-react';

// Import local premium screenshots
// @ts-ignore
import docServerStats from '../assets/images/DocServerAdminPanel/Statistics.png';
// @ts-ignore
import docServerJWT from '../assets/images/DocServerAdminPanel/JWT_Settings.png';
// @ts-ignore
import docServerIP from '../assets/images/DocServerAdminPanel/IP_Filtering.png';
// @ts-ignore
import docServerAI from '../assets/images/DocServerAdminPanel/Al_Integration.png';
// @ts-ignore
import docServerDesignSystem from '../assets/images/DocServerAdminPanel/Design_System_Icons.svg';
import { EditorLimitStates } from './EditorLimitStates';

interface CaseStudyProps {
  onClose: () => void;
}

export default function DocServerAdminCaseStudy({ onClose }: CaseStudyProps) {
  // Ensure page starts at the top
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const [securityTab, setSecurityTab] = useState<'jwt' | 'ip' | 'ai'>('jwt');

  return (
    <div className="min-h-screen bg-[#FCFCFD] text-[#24252D] font-sans antialiased selection:bg-[#2F4EFF]/10 selection:text-[#2F4EFF] w-full relative z-[9999]">
      
      {/* 1. Header Navigation Bar */}
      <header className="sticky top-0 z-[100] w-full bg-white/80 backdrop-blur-xl border-b border-zinc-200/70 h-16 md:h-20 flex items-center px-6 md:px-12 justify-between">
        <button 
          onClick={onClose}
          className="group flex items-center gap-2.5 px-3.5 py-1.5 md:px-4 md:py-2 rounded-full border border-zinc-200/80 bg-white hover:bg-neutral-50 text-zinc-600 hover:text-zinc-900 font-mono text-xs transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md"
        >
          <ArrowLeft className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-x-0.5" />
          <span>Back to Portfolio</span>
        </button>

        <div className="flex items-center gap-3 font-mono text-[10px] md:text-xs">
          <span className="text-zinc-400">PROJECT /</span>
          <span className="text-zinc-900 font-semibold tracking-wider uppercase">DocServer Admin Panel</span>
        </div>

        <button 
          onClick={() => {
            onClose();
            setTimeout(() => {
              const el = document.getElementById('contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }, 300);
          }}
          className="bg-zinc-950 text-white rounded hover:bg-zinc-800 transition-colors duration-200 px-3.5 py-1.5 md:px-5 md:py-2.5 font-mono text-xs font-semibold cursor-pointer shadow-sm"
        >
          <span>Contact Me</span>
        </button>
      </header>

      {/* Hero Section Container */}
      <section 
        id="hero" 
        className="w-full bg-[#FAFAFC] pt-12 pb-16 md:py-20 border-b border-zinc-200/70 flex flex-col items-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-40 pointer-events-none" />
        
        <div className="w-full max-w-[1360px] mx-auto px-6 md:px-12 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4 text-center md:text-left max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 border border-[#2F4EFF]/15 bg-[#2F4EFF]/5 px-3.5 py-1 rounded-full text-[#2F4EFF] font-semibold text-xs font-mono select-none">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2F4EFF] animate-pulse" />
              <span>Senior Product Designer Case Study</span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-sans font-extrabold tracking-tight text-zinc-950">
              DocServer <span className="text-zinc-500 font-light">Admin Panel</span>
            </h1>

            <p className="text-lg md:text-2xl text-zinc-500 font-sans font-light tracking-wide leading-relaxed">
              Enterprise administration platform for managing document collaboration infrastructure.
            </p>

            <p className="text-sm md:text-base text-zinc-650 leading-relaxed max-w-3xl font-sans pt-1">
              A sophisticated enterprise administration platform, simplified through a clear information architecture, focused navigation, data visualization, security management, and intuitive configuration workflows.
            </p>
          </motion.div>

          {/* Compact Project Metadata Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 pt-8 mt-8 border-t border-zinc-200/70 text-left"
          >
            <div className="bg-white p-4 rounded-xl border border-zinc-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
              <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest block font-bold">Role</span>
              <span className="font-sans text-sm font-semibold text-zinc-900 mt-1 block">Senior Product Designer</span>
            </div>
            <div className="bg-white p-4 rounded-xl border border-zinc-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
              <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest block font-bold">Product Type</span>
              <span className="font-sans text-sm font-semibold text-zinc-900 mt-1 block">Enterprise Infrastructure SaaS</span>
            </div>
            <div className="bg-white p-4 rounded-xl border border-zinc-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
              <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest block font-bold">Duration</span>
              <span className="font-sans text-sm font-semibold text-zinc-900 mt-1 block">2025</span>
            </div>
            <div className="bg-white p-4 rounded-xl border border-zinc-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
              <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest block font-bold">Platform</span>
              <span className="font-sans text-sm font-semibold text-zinc-900 mt-1 block">ONLYOFFICE DocServer</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Body Content: Aligned with Hero & Navigation Container */}
      <main className="w-full max-w-[1360px] mx-auto px-6 md:px-12 py-12 md:py-20 space-y-16 md:space-y-24">
        
        {/* Section 1: Overview (Compact Challenge & Goal) */}
          <motion.section 
            id="overview"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 bg-white rounded-2xl border border-zinc-200/80 p-6 md:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.02)]"
          >
            <div className="space-y-3">
              <div className="inline-flex p-2 rounded-lg bg-orange-50 text-orange-600 border border-orange-100/80">
                <Shield className="w-4 h-4" />
              </div>
              <h3 className="text-lg md:text-xl font-sans font-bold text-zinc-950 tracking-tight">
                The Challenge
              </h3>
              <p className="text-xs md:text-sm text-zinc-600 leading-relaxed font-sans">
                Enterprise document servers contain hundreds of technical parameters, security controls, authentication rules, and telemetry feeds. Administrators often struggle with fragmented tools requiring deep terminal knowledge and creating a steep operational learning curve.
              </p>
            </div>

            <div className="space-y-3 md:border-l md:border-zinc-100 md:pl-8 pt-6 md:pt-0 border-t md:border-t-0 border-zinc-100">
              <div className="inline-flex p-2 rounded-lg bg-[#2F4EFF]/5 text-[#2F4EFF] border border-[#2F4EFF]/15">
                <Sliders className="w-4 h-4" />
              </div>
              <h3 className="text-lg md:text-xl font-sans font-bold text-zinc-950 tracking-tight">
                The Goal
              </h3>
              <p className="text-xs md:text-sm text-zinc-600 leading-relaxed font-sans">
                Create a unified administration platform that empowers IT teams to confidently monitor performance, manage security rules, and configure server policies through a clean, intuitive, and modern interface.
              </p>
            </div>
          </motion.section>

          {/* Section 2: Strong Product Showcase - Control Center */}
          <section id="control-center" className="space-y-8 scroll-mt-24">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5 }}
              className="space-y-3"
            >
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-[#2F4EFF] font-bold tracking-widest uppercase">01 / UNIFIED CONTROL CENTER</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-sans font-extrabold text-zinc-950 tracking-tight">
                A unified control center for enterprise infrastructure
              </h2>
              <p className="text-sm md:text-base text-zinc-600 leading-relaxed max-w-3xl">
                Complex server configuration is organized into focused workflows for monitoring, security, AI integration, and system management.
              </p>
            </motion.div>

            {/* Product Showcase Screenshot */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="w-full bg-white rounded-2xl border border-zinc-200/80 shadow-sm overflow-hidden"
            >
              <img 
                src={docServerStats} 
                alt="DocServer Admin Panel Main Dashboard Showcase" 
                className="w-full h-auto object-contain block"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            {/* Architecture Highlights Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-2">
              <div className="bg-white p-5 rounded-xl border border-zinc-200/80 shadow-sm space-y-2">
                <div className="w-8 h-8 rounded-lg bg-[#2F4EFF]/5 text-[#2F4EFF] border border-[#2F4EFF]/15 flex items-center justify-center">
                  <Activity className="w-4 h-4" />
                </div>
                <h4 className="font-sans font-bold text-sm text-zinc-900 pt-1">Real-time Telemetry</h4>
                <p className="font-sans text-xs text-zinc-500 leading-relaxed">
                  Color-coded capacity thresholds instantly communicate server health without requiring raw terminal querying.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-zinc-200/80 shadow-sm space-y-2">
                <div className="w-8 h-8 rounded-lg bg-[#2F4EFF]/5 text-[#2F4EFF] border border-[#2F4EFF]/15 flex items-center justify-center">
                  <Cpu className="w-4 h-4" />
                </div>
                <h4 className="font-sans font-bold text-sm text-zinc-900 pt-1">Editors vs. Viewers</h4>
                <p className="font-sans text-xs text-zinc-500 leading-relaxed">
                  Distinguishes write-heavy collaborative document sessions from lightweight read-only previews to forecast traffic spikes.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-zinc-200/80 shadow-sm space-y-2">
                <div className="w-8 h-8 rounded-lg bg-[#2F4EFF]/5 text-[#2F4EFF] border border-[#2F4EFF]/15 flex items-center justify-center">
                  <Layers className="w-4 h-4" />
                </div>
                <h4 className="font-sans font-bold text-sm text-zinc-900 pt-1">Focused Hierarchy</h4>
                <p className="font-sans text-xs text-zinc-500 leading-relaxed">
                  Consolidates dozens of technical settings into four clean domains: Monitoring, Security, Settings, and AI.
                </p>
              </div>
            </div>

            {/* Threshold Logic & Indicators Section */}
            <div className="pt-6">
              <EditorLimitStates />
            </div>
          </section>

          {/* Section 3: Dedicated Security Section with Content Area Tabs */}
          <section id="security" className="space-y-8 scroll-mt-24">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5 }}
              className="space-y-3"
            >
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-[#2F4EFF] font-bold tracking-widest uppercase">02 / SECURITY WORKFLOWS</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-sans font-extrabold text-zinc-950 tracking-tight">
                Consolidated Security Architecture
              </h2>
              <p className="text-sm md:text-base text-zinc-600 leading-relaxed max-w-3xl">
                Security-related configuration was consolidated into one focused area. Rather than cluttering the global sidebar with individual sub-pages, security workflows are organized as internal tabs within the content canvas.
              </p>
            </motion.div>

            {/* Interactive Security Showcase with Tabs matching screenshot styling */}
            <div className="bg-white rounded-2xl border border-zinc-200/90 shadow-[0_12px_40px_rgba(0,0,0,0.05)] overflow-hidden">
              
              {/* Top Navigation Tabs for Security */}
              <div className="px-6 pt-5 bg-[#F9F9FB] border-b border-zinc-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-1 overflow-x-auto">
                  <button
                    onClick={() => setSecurityTab('jwt')}
                    className={`px-4 py-2.5 font-mono text-xs font-semibold tracking-wider rounded-t-lg transition-all duration-200 cursor-pointer border-b-2 ${
                      securityTab === 'jwt'
                        ? 'text-[#FF6F3D] border-[#FF6F3D] bg-white font-bold'
                        : 'text-zinc-500 hover:text-zinc-900 border-transparent hover:bg-white/50'
                    }`}
                  >
                    <span>JWT SETTINGS</span>
                  </button>

                  <button
                    onClick={() => setSecurityTab('ip')}
                    className={`px-4 py-2.5 font-mono text-xs font-semibold tracking-wider rounded-t-lg transition-all duration-200 cursor-pointer border-b-2 ${
                      securityTab === 'ip'
                        ? 'text-[#FF6F3D] border-[#FF6F3D] bg-white font-bold'
                        : 'text-zinc-500 hover:text-zinc-900 border-transparent hover:bg-white/50'
                    }`}
                  >
                    <span>IP FILTERING</span>
                  </button>

                  <button
                    onClick={() => setSecurityTab('ai')}
                    className={`px-4 py-2.5 font-mono text-xs font-semibold tracking-wider rounded-t-lg transition-all duration-200 cursor-pointer border-b-2 ${
                      securityTab === 'ai'
                        ? 'text-[#FF6F3D] border-[#FF6F3D] bg-white font-bold'
                        : 'text-zinc-500 hover:text-zinc-900 border-transparent hover:bg-white/50'
                    }`}
                  >
                    <span>AI CONFIGURATION</span>
                  </button>
                </div>

                <div className="font-mono text-[10px] text-zinc-400 hidden sm:block pb-2">
                  SECURITY DOMAIN CONSOLIDATION
                </div>
              </div>

              {/* Tab Content Display */}
              <div className="p-4 md:p-8 bg-white">
                <AnimatePresence mode="wait">
                  {securityTab === 'jwt' && (
                    <motion.div
                      key="jwt"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-6"
                    >
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-2">
                        <div>
                          <h4 className="font-sans font-bold text-base text-zinc-900">JWT Token Authentication Settings</h4>
                          <p className="text-xs text-zinc-500 font-sans mt-0.5">Configures cryptographic signature keys, authorization headers, and token lifetimes for collaborative endpoints.</p>
                        </div>
                        <span className="font-mono text-[10px] bg-amber-50 text-amber-700 border border-amber-200/80 px-2.5 py-1 rounded shrink-0">
                          CRITICAL ACCESS GATE
                        </span>
                      </div>

                      <div className="rounded-xl overflow-hidden border border-zinc-200/90 shadow-sm bg-neutral-900">
                        <img 
                          src={docServerJWT} 
                          alt="ONLYOFFICE JWT Security Configuration Screen" 
                          className="w-full h-auto object-contain"
                          referrerPolicy="no-referrer"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                        <div className="p-3.5 bg-neutral-50 rounded-lg border border-zinc-200/70 text-xs">
                          <strong className="block text-zinc-900 font-mono text-[11px] mb-1">Secret Key Masking</strong>
                          <span className="text-zinc-500">Allows generation and hidden copying of cryptographic tokens with one-click clipboard verify.</span>
                        </div>
                        <div className="p-3.5 bg-neutral-50 rounded-lg border border-zinc-200/70 text-xs">
                          <strong className="block text-zinc-900 font-mono text-[11px] mb-1">Header Customization</strong>
                          <span className="text-zinc-500">Enables bespoke authorization headers (e.g. Bearer JWT) to match any enterprise IAM stack.</span>
                        </div>
                        <div className="p-3.5 bg-neutral-50 rounded-lg border border-zinc-200/70 text-xs">
                          <strong className="block text-zinc-900 font-mono text-[11px] mb-1">Safe Verification State</strong>
                          <span className="text-zinc-500">Live inline validation tests token exchange before committing destructive server restarts.</span>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {securityTab === 'ip' && (
                    <motion.div
                      key="ip"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-6"
                    >
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-2">
                        <div>
                          <h4 className="font-sans font-bold text-base text-zinc-900">IP Firewall & Access Control Rules</h4>
                          <p className="text-xs text-zinc-500 font-sans mt-0.5">Defines granular CIDR block allow/deny lists for document server gateways and internal APIs.</p>
                        </div>
                        <span className="font-mono text-[10px] bg-blue-50 text-blue-700 border border-blue-200/80 px-2.5 py-1 rounded shrink-0">
                          NETWORK FILTERING
                        </span>
                      </div>

                      <div className="rounded-xl overflow-hidden border border-zinc-200/90 shadow-sm bg-neutral-900">
                        <img 
                          src={docServerIP} 
                          alt="ONLYOFFICE IP Filtering Access Control Configuration" 
                          className="w-full h-auto object-contain"
                          referrerPolicy="no-referrer"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                        <div className="p-3.5 bg-neutral-50 rounded-lg border border-zinc-200/70 text-xs">
                          <strong className="block text-zinc-900 font-mono text-[11px] mb-1">CIDR Parsing</strong>
                          <span className="text-zinc-500">Handles subnet notation with real-time regex validation to prevent syntax lockouts.</span>
                        </div>
                        <div className="p-3.5 bg-neutral-50 rounded-lg border border-zinc-200/70 text-xs">
                          <strong className="block text-zinc-900 font-mono text-[11px] mb-1">Rule Hierarchy</strong>
                          <span className="text-zinc-500">Clear visual distinction between whitelist exemptions and strict blacklisted subnets.</span>
                        </div>
                        <div className="p-3.5 bg-neutral-50 rounded-lg border border-zinc-200/70 text-xs">
                          <strong className="block text-zinc-900 font-mono text-[11px] mb-1">Audit Logging</strong>
                          <span className="text-zinc-500">Instant activity records capturing dropped requests and unauthorized connection attempts.</span>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {securityTab === 'ai' && (
                    <motion.div
                      key="ai"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-6"
                    >
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-2">
                        <div>
                          <h4 className="font-sans font-bold text-base text-zinc-900">AI Integration & Model Configuration</h4>
                          <p className="text-xs text-zinc-500 font-sans mt-0.5">Add, select and manage AI models, endpoint parameters, and API keys for intelligent document generation and analysis.</p>
                        </div>
                        <span className="font-mono text-[10px] bg-purple-50 text-purple-700 border border-purple-200/80 px-2.5 py-1 rounded shrink-0">
                          INTELLIGENT WORKFLOWS
                        </span>
                      </div>

                      <div className="rounded-xl overflow-hidden border border-zinc-200/90 shadow-sm bg-white">
                        <img 
                          src={docServerAI} 
                          alt="ONLYOFFICE AI Configuration and Model Management" 
                          className="w-full h-auto object-contain"
                          referrerPolicy="no-referrer"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                        <div className="p-3.5 bg-neutral-50 rounded-lg border border-zinc-200/70 text-xs">
                          <strong className="block text-zinc-900 font-mono text-[11px] mb-1">Multi-Provider Registry</strong>
                          <span className="text-zinc-500">Easily register OpenAI, Claude, and custom LLM server endpoints for document editing.</span>
                        </div>
                        <div className="p-3.5 bg-neutral-50 rounded-lg border border-zinc-200/70 text-xs">
                          <strong className="block text-zinc-900 font-mono text-[11px] mb-1">Granular Parameter Tuning</strong>
                          <span className="text-zinc-500">Fine-tune temperature, context window token limits, and secure bearer keys per deployment.</span>
                        </div>
                        <div className="p-3.5 bg-neutral-50 rounded-lg border border-zinc-200/70 text-xs">
                          <strong className="block text-zinc-900 font-mono text-[11px] mb-1">Active Model Toggling</strong>
                          <span className="text-zinc-500">Designate primary cluster models with instantaneous failover and access policy controls.</span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </section>

          {/* Section 04: Design System */}
          <section id="design-system" className="space-y-8 scroll-mt-24">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5 }}
              className="space-y-3"
            >
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-[#2F4EFF] font-bold tracking-widest uppercase">04 / DESIGN SYSTEM</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-sans font-extrabold text-zinc-950 tracking-tight">
                Icons
              </h2>
              <p className="text-sm md:text-base text-zinc-600 leading-relaxed max-w-3xl">
                A strong, restrained design system doesn't have to be sterile. I use strategic, charming line-art icons to add character and make the interface more approachable, showing that even professional tools can have personality.
              </p>
            </motion.div>

            {/* Design System Icons Showcase */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-6 md:p-8 rounded-2xl border border-zinc-200/90 shadow-[0_4px_24px_rgba(0,0,0,0.03)] overflow-hidden"
            >
              <div className="w-full rounded-xl overflow-hidden border border-zinc-200/70 bg-[#F9F9F9]">
                <img
                  src={docServerDesignSystem}
                  alt="ONLYOFFICE Design System Line-Art Icons and Visual Tokens"
                  className="w-full h-auto object-contain block"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-zinc-500 font-sans border-t border-zinc-100 mt-5">
                <span className="font-mono text-[11px] text-zinc-700 font-semibold tracking-wide">
                  Clean line-art iconography & navigation tokens
                </span>
                <span className="font-mono text-[11px] text-zinc-400">
                  Aesthetic: Clean, minimalist, and perfectly aligned UI
                </span>
              </div>
            </motion.div>
          </section>

          {/* Section: Business Impact & Outcomes */}
          <section id="impact" className="space-y-8 scroll-mt-24">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5 }}
              className="space-y-3"
            >
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-[#2F4EFF] font-bold tracking-widest uppercase">03 / IMPACT & OUTCOMES</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-sans font-extrabold text-zinc-950 tracking-tight">
                Measurable Enterprise Outcomes
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
              {[
                { title: 'Reduced Complexity', score: '↓ Cognitive Load', caption: 'Progressive disclosure eliminated visual intimidation for junior admins.' },
                { title: 'Navigation Speed', score: '↑ 3x Faster Access', caption: 'Consolidated domain grouping enables sub-three-click configuration.' },
                { title: 'Reduced Mistakes', score: '↓ 0 Config Outages', caption: 'Inline validation and safety barriers prevent destructive server restarts.' },
                { title: 'Platform Scale', score: '↑ Multi-Model Ready', caption: 'Modular design system streamlined delivery of AI routing capabilities.' }
              ].map((card, idx) => (
                <div key={idx} className="bg-white p-5 rounded-xl border border-zinc-200/80 shadow-sm flex flex-col justify-between text-left space-y-3">
                  <div>
                    <span className="font-mono text-[9px] text-zinc-400 uppercase tracking-widest block font-bold leading-none">{card.title}</span>
                    <span className="font-sans font-extrabold text-lg md:text-xl text-[#2F4EFF] block pt-2 leading-tight tracking-tight">{card.score}</span>
                  </div>
                  <p className="text-xs text-zinc-500 leading-relaxed font-sans pt-2 border-t border-zinc-100">{card.caption}</p>
                </div>
              ))}
            </div>

            {/* Key Takeaways Card */}
            <div className="bg-white p-6 md:p-8 rounded-2xl border border-zinc-200/80 shadow-sm space-y-4">
              <h4 className="text-sm font-sans font-bold text-zinc-950 tracking-tight">
                Design Reflection & Key Learnings
              </h4>
              <p className="text-xs md:text-sm text-zinc-600 leading-relaxed font-sans">
                Designing for complex server infrastructure requires respecting the expertise of IT administrators while relentlessly reducing friction. True craft in enterprise design is not about hiding power, but rather orchestrating it into clear, confident workflows where security, telemetry, and system control work in harmony.
              </p>
            </div>
          </section>

      </main>

      {/* Footer Call to Action */}
      <section className="w-full bg-white border-t border-zinc-200/80 py-16 md:py-24 text-center flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none" />
        <div className="w-full max-w-[700px] px-6 relative z-10 space-y-5">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-sans font-black tracking-tight text-neutral-900 leading-tight">
            Interested in enterprise UX or complex SaaS design?
          </h2>
          <p className="text-zinc-500 font-sans tracking-wide leading-relaxed text-sm md:text-base max-w-lg mx-auto">
            Let's discuss how we can bring clarity to your product infrastructure.
          </p>

          <div className="pt-3 flex flex-wrap justify-center gap-3.5">
           {/* <button
              onClick={() => {
                onClose();
                setTimeout(() => {
                  const el = document.getElementById('contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }, 300);
              }}
              className="inline-flex items-center gap-2 px-7 py-3 text-sm font-sans font-semibold rounded bg-[#2F4EFF] hover:bg-[#001BD2] text-white cursor-pointer shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              <span>Contact Tatiana</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </button>
          */}

            <button
              onClick={onClose}
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-mono font-medium rounded border border-zinc-300 bg-white hover:bg-zinc-50 text-zinc-700 cursor-pointer hover:shadow-sm transition-all duration-300"
            >
              <span>Back to Portfolio</span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}

