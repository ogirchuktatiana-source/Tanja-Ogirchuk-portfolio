/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ArrowUpRight, Copy, Check, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { HERO_DATA } from '../data';

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(HERO_DATA.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="hero" className="border-b border-custom-border">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12">
        
        {/* Left Column / Prefix (3 cols on desktop) */}
        <div className="lg:col-span-3 p-6 md:p-12 border-b lg:border-b-0 lg:border-r border-custom-border bg-card-bg flex flex-col justify-between">
          <div>
            <span className="font-mono text-xs text-text-super uppercase tracking-widest block mb-1">
              01 / INTRODUCTION
            </span>
            <div className="inline-block mt-4 px-2.5 py-1 bg-page-bg border border-custom-border text-text-main rounded font-mono text-[11px] uppercase tracking-wider">
              Available for Contracts
            </div>
          </div>
          
          <div className="hidden lg:block mt-24">
            <span className="font-mono text-xs text-text-super block mb-2">SPECS & RESIDENCE</span>
            <p className="font-mono text-xs text-text-secondary leading-relaxed">
              Applied Math Degree<br />
              Design Team Leadership<br />
              SaaS Product Design<br />
              Munich, Germany
            </p>
          </div>
        </div>

        {/* Right Column / Content (9 cols on desktop) */}
        <div className="lg:col-span-9 p-6 md:p-12 flex flex-col justify-center">
          
          <div className="max-w-4xl space-y-8">
            {/* Main Statement */}
            <div className="space-y-4">
              <span className="font-mono text-xs text-text-secondary uppercase tracking-wider block">
                {HERO_DATA.title}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-sans font-bold tracking-tight text-text-main leading-[1.05]">
                Tatiana Ogirchuk
              </h1>
            </div>

            <p className="text-xl md:text-2xl text-text-main font-medium leading-relaxed tracking-tight max-w-3xl whitespace-pre-line">
              {HERO_DATA.bio}
            </p>
            
            {/* The Math/Design Bridge highlights - reinforcing unique expertise */}
            <div className="border-l-2 md:border-l-[3px] border-interactive pl-6 md:pl-8 py-1 my-8 md:my-10 max-w-3xl" id="math-design-highlight">
              <span className="font-mono text-xs tracking-widest font-bold text-interactive block mb-2">
                MATH &times; DESIGN
              </span>
              <p className="font-sans text-sm md:text-base text-text-secondary leading-relaxed">
                Leveraging dual skills in <strong className="text-text-main">Applied Mathematics & Computer Science</strong> to code complex logic, calculate responsive layouts, design atomic schemas, and translate visual variables seamlessly into functional Figma-to-Storybook architecture.
              </p>
            </div>

            {/* CTA panel */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-4">
              <button
                onClick={copyEmail}
                className="group flex items-center justify-between sm:justify-start gap-4 px-6 py-3.5 bg-interactive hover:bg-interactive-hover active:opacity-90 transition-all duration-300 rounded font-sans font-medium text-sm text-left cursor-pointer shadow-md hover:shadow-lg hover:-translate-y-0.5 text-white"
              >
                <span>{HERO_DATA.email}</span>
                <span className="flex items-center gap-1 text-xs text-white/60 font-mono border-l border-white/20 pl-4">
                  {copied ? (
                    <span className="text-emerald-300 flex items-center gap-1 font-semibold">
                      <Check className="w-3.5 h-3.5" /> Copied
                    </span>
                  ) : (
                    <span className="group-hover:text-white transition-colors flex items-center gap-1">
                      Copy Email <Copy className="w-3 h-3" />
                    </span>
                  )}
                </span>
              </button>
 
              <div className="flex items-center gap-6 font-mono text-xs">
                <a
                  href={`https://${HERO_DATA.linkedin}`}
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className="inline-flex items-center gap-1.5 text-text-secondary dark:text-neutral-200 hover:text-[#2F4EFF] dark:hover:text-white transition-all py-1.5 underline decoration-1 underline-offset-[5px] decoration-[#2F4EFF]/50 hover:decoration-[#2F4EFF]"
                >
                  <span>LinkedIn Profile</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#2F4EFF] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>

          </div>
          
        </div>

      </div>
    </section>
  );
}
