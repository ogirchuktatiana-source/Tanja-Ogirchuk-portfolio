/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Sparkles, Terminal, ArrowUp, Check, Globe } from 'lucide-react';
import { SKILL_CATEGORIES, LANGUAGES, HERO_DATA } from '../data';

export default function SkillsFooter() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(HERO_DATA.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="skills" className="bg-page-bg border-t border-custom-border">
      
      {/* 2-Column Sidebar Layout for Profile & Capabilities */}
      <div className="w-full max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-0 border-b border-custom-border" id="profile-grid">
        
        {/* Left Sidebar (Matching layout, bg-card-bg, border-r) */}
        <div 
          className="lg:col-span-3 p-6 md:p-12 border-b lg:border-b-0 lg:border-r border-custom-border bg-card-bg"
          id="profile-sidebar"
        >
          <div className="sticky top-24 space-y-10">
            {/* Title & Section details */}
            <div className="space-y-4">
              <span className="font-mono text-xs text-text-super uppercase tracking-widest block">
                05 / CAPABILITIES & CONTACT
              </span>
              <h2 className="text-2xl font-sans font-semibold tracking-tight text-text-main pb-1">
                Capabilities & Languages
              </h2>
            </div>

            {/* Linguistic Profile placed on Left Sidebar */}
            <div className="space-y-4 pt-6 mt-6 border-t border-custom-border" id="profile-languages">
              <span className="font-mono text-[10px] text-text-super uppercase tracking-wider block">
                Linguistic Profile
              </span>
              <div className="space-y-3 font-sans">
                {LANGUAGES.map((language, idx) => (
                  <div key={idx} className="flex items-center justify-between py-1.5 border-b border-custom-border/50 text-xs">
                    <div className="flex items-center gap-2">
                      <Globe className="w-3.5 h-3.5 text-text-secondary opacity-80" />
                      <span className="font-semibold text-text-main">{language.name}</span>
                    </div>
                    <span className="font-mono text-text-secondary text-[10px]">{language.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Content Column (White/page background) */}
        <div 
          className="lg:col-span-9 p-6 md:p-12 space-y-10 bg-page-bg"
          id="profile-main"
        >
          {/* Top Sub-section: Core Expertise & Tools */}
          <div className="space-y-6" id="profile-expertise">
            <h3 className="font-mono text-[10px] text-text-super uppercase tracking-widest">
              Core Expertise & Tools
            </h3>
            <div className="space-y-6">
              {SKILL_CATEGORIES.map((category, index) => (
                <div key={index} className="space-y-2.5">
                  <h4 className="font-mono text-[10px] text-text-secondary uppercase tracking-widest opacity-80">
                    {category.title}
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {category.items.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 bg-tag-bg border border-custom-border text-tag-text rounded text-[11px] font-mono select-none hover:border-text-secondary/50 hover:text-text-main transition-colors duration-200 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Sub-section (The Grand Finale): Call to Action Banner Box */}
          <div className="pt-6 border-t border-custom-border/50" id="profile-cta">
            <div className="p-6 md:p-8 bg-card-bg/40 border border-custom-border rounded-lg space-y-5 w-full">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-interactive animate-pulse" />
                <span className="font-mono text-[11px] text-text-main uppercase tracking-widest font-bold">
                  LET&apos;S BUILD SYSTEMS TOGETHER
                </span>
              </div>
              
              <p className="text-sm text-text-secondary leading-relaxed font-sans font-light max-w-2xl">
                Tatiana is based in Munich (Anabin cert / Es gibt berufliche Anerkennung) and open to collaborating on complex UI dashboards, design system networks, and SaaS product leadership.
              </p>

              <button
                onClick={copyEmail}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-interactive hover:bg-interactive-hover hover:-translate-y-0.5 active:opacity-90 transition-all duration-300 text-white rounded text-xs font-mono font-semibold cursor-pointer shadow-sm"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-300" />
                    <span className="text-emerald-300">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <span>Copy: {HERO_DATA.email}</span>
                  </>
                )}
              </button>
            </div>
          </div>

        </div>

      </div>

      {/* Footer Branding Line */}
      <div className="bg-card-bg text-text-secondary py-8 px-6 md:px-12 border-t border-custom-border">
        <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px]">
          <div>
            <span>&copy; {new Date().getFullYear()} Tatiana Ogirchuk. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href={`https://${HERO_DATA.linkedin}`}
              target="_blank"
              referrerPolicy="no-referrer"
              className="text-text-secondary dark:text-neutral-200 hover:text-[#2F4EFF] dark:hover:text-white transition-all underline decoration-1 underline-offset-[4px] decoration-transparent hover:decoration-[#2F4EFF]"
            >
              LinkedIn
            </a>
            <span className="text-custom-border">|</span>
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-1 text-text-secondary dark:text-neutral-200 hover:text-[#2F4EFF] dark:hover:text-white transition-colors duration-300 cursor-pointer"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3 text-text-secondary dark:text-neutral-400 group-hover:text-[#2F4EFF] transition-colors" />
            </button>
          </div>
        </div>
      </div>

    </footer>
  );
}
