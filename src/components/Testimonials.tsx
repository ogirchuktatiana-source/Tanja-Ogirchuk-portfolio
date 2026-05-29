/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Users, Code, Award, ArrowUpRight } from 'lucide-react';
import { RECOMMENDATIONS_DATA } from '../data';
import { Recommendation } from '../types';

export default function Testimonials() {
  const [filter, setFilter] = useState<'all' | 'product-management' | 'engineering-tech'>('all');

  // Filter recommendations
  const filteredRecommendations = RECOMMENDATIONS_DATA.filter((item) => {
    if (filter === 'all') return true;
    return item.category === filter;
  });

  return (
    <section 
      id="testimonials" 
      className="border-b border-custom-border bg-page-bg"
    >
      <div className="w-full max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-0" id="testimonials-grid">
        
        {/* Left Sidebar (Sticky, matching user's layout exactly) */}
        <div 
          className="lg:col-span-3 p-6 md:p-12 border-b lg:border-b-0 lg:border-r border-custom-border bg-card-bg"
          id="testimonials-sidebar"
        >
          <div className="sticky top-24 space-y-8">
            <div className="space-y-4">
              <span className="font-mono text-xs text-text-super uppercase tracking-widest block">
                04 / TESTIMONIALS
              </span>
              <h2 className="text-2xl font-sans font-semibold tracking-tight text-text-main pb-1">
                Peer Feedback
              </h2>
              <p className="text-sm text-text-secondary font-sans leading-relaxed">
                Recommendations and feedback from cross-functional product managers, tech architects, and direct reports who collaborated on ONLYOFFICE systems.
              </p>
            </div>

            {/* Filter Navigation */}
            <div className="space-y-3 pt-6 border-t border-custom-border" id="testimonials-filter-nav">
              <span className="font-mono text-[10px] text-text-super uppercase tracking-wider block">
                Filter Feedback
              </span>
              <div className="flex flex-col gap-2">
                <button
                  onClick={() => setFilter('all')}
                  className={`text-left px-4 py-3 rounded-lg border text-xs font-mono transition-all duration-300 flex items-center justify-between cursor-pointer ${
                    filter === 'all'
                      ? 'bg-page-bg text-text-main border-custom-border font-bold shadow-sm'
                      : 'bg-transparent border-transparent text-text-secondary hover:border-custom-border hover:text-text-main'
                  }`}
                  id="filter-all-btn"
                >
                  <span className="flex items-center gap-2">
                    <Users className="w-3.5 h-3.5 opacity-70" />
                    All Recommendations
                  </span>
                  <span className="opacity-55 text-[10px]">[{RECOMMENDATIONS_DATA.length}]</span>
                </button>

                <button
                  onClick={() => setFilter('product-management')}
                  className={`text-left px-4 py-3 rounded-lg border text-xs font-mono transition-all duration-300 flex items-center justify-between cursor-pointer ${
                    filter === 'product-management'
                      ? 'bg-page-bg text-text-main border-custom-border font-bold shadow-sm'
                      : 'bg-transparent border-transparent text-text-secondary hover:border-custom-border hover:text-text-main'
                  }`}
                  id="filter-pm-btn"
                >
                  <span className="flex items-center gap-2">
                    <Award className="w-3.5 h-3.5 opacity-70" />
                    Product & Management
                  </span>
                  <span className="opacity-55 text-[10px]">
                    [{RECOMMENDATIONS_DATA.filter((x) => x.category === 'product-management').length}]
                  </span>
                </button>

                <button
                  onClick={() => setFilter('engineering-tech')}
                  className={`text-left px-4 py-3 rounded-lg border text-xs font-mono transition-all duration-300 flex items-center justify-between cursor-pointer ${
                    filter === 'engineering-tech'
                      ? 'bg-page-bg text-text-main border-custom-border font-bold shadow-sm'
                      : 'bg-transparent border-transparent text-text-secondary hover:border-custom-border hover:text-text-main'
                  }`}
                  id="filter-tech-btn"
                >
                  <span className="flex items-center gap-2">
                    <Code className="w-3.5 h-3.5 opacity-70" />
                    Engineering & Tech
                  </span>
                  <span className="opacity-55 text-[10px]">
                    [{RECOMMENDATIONS_DATA.filter((x) => x.category === 'engineering-tech').length}]
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content Area (White background stack of cards) */}
        <div 
          className="lg:col-span-9 p-6 md:p-12 space-y-8 bg-page-bg relative min-h-[500px]"
          id="testimonials-main"
        >
          <div className="space-y-6" id="testimonials-stack">
            <AnimatePresence mode="popLayout">
              {filteredRecommendations.map((rec) => {
                const isPM = rec.category === 'product-management';
                return (
                  <motion.div
                    key={rec.id}
                    layout
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.35, ease: 'easeInOut' }}
                    className="flex flex-col bg-card-bg/30 border border-custom-border hover:border-text-secondary/40 rounded-lg p-6 md:p-8 transition-all duration-300 hover:shadow-sm space-y-4"
                    id={`testimonial-card-${rec.id}`}
                  >
                    {/* Header Row */}
                    <div className="space-y-1.5" id={`testimonial-header-${rec.id}`}>
                      <div className="flex flex-wrap items-center gap-2.5">
                        <h3 className="font-sans font-bold text-lg text-text-main leading-none">
                          {rec.author}
                        </h3>
                        {rec.linkedin && (
                          <a
                            href={rec.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            referrerPolicy="no-referrer"
                            className="inline-flex items-center gap-0.5 text-[11px] font-mono text-text-secondary dark:text-neutral-200 hover:text-[#2F4EFF] dark:hover:text-white transition-all underline decoration-1 underline-offset-[4px] decoration-[#2F4EFF]/50 hover:decoration-[#2F4EFF] whitespace-nowrap"
                          >
                            <span>LinkedIn</span>
                            <ArrowUpRight className="w-3 h-3 text-[#2F4EFF]" />
                          </a>
                        )}
                      </div>

                      {/* Metadata Row: Job Title • Company Name • [Colored Badge] */}
                      <p className="text-xs font-mono text-text-secondary leading-relaxed flex flex-wrap items-center gap-x-2 gap-y-1">
                        <span>{rec.role}</span>
                        <span className="text-text-super/60 select-none">&bull;</span>
                        <strong className="font-normal text-text-main">{rec.company}</strong>
                        <span className="text-text-super/60 select-none">&bull;</span>
                        <span className={`font-mono text-[9px] uppercase tracking-wider px-2 py-0.5 rounded border inline-block ${
                          isPM
                            ? 'text-semantic-study-text bg-semantic-study-bg border-semantic-study-text/15'
                            : 'text-semantic-work-text bg-semantic-work-bg border-semantic-work-text/15'
                        }`}>
                          {rec.relationship}
                        </span>
                      </p>
                    </div>

                    {/* Feedback Core Content */}
                    <p className="font-sans text-sm md:text-base text-text-secondary font-light leading-relaxed whitespace-pre-line py-1">
                      {rec.text}
                    </p>

                    {/* Bottom Key Skills Tags */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-y-2 pt-3 border-t border-custom-border/50 font-mono text-[10px] text-text-secondary w-full">
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                        <span className="text-text-super uppercase tracking-widest text-[9px] mr-1">Focus Areas:</span>
                        {rec.tags.slice(0, 2).map((tag, tIdx) => (
                          <span key={tIdx} className="flex items-center gap-2">
                            {tIdx > 0 && <span className="text-text-super/60 select-none">&bull;</span>}
                            <span>{tag}</span>
                          </span>
                        ))}
                      </div>
                      <span className="text-text-super select-none">{rec.period}</span>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>

            {filteredRecommendations.length === 0 && (
              <div className="py-20 text-center border border-dashed border-custom-border rounded-lg">
                <span className="font-mono text-sm text-text-super">
                  No matching recommendations found.
                </span>
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
