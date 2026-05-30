/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Briefcase, GraduationCap, Calendar, ChevronDown, ChevronUp, Layers, ListFilter } from 'lucide-react';
import { TIMELINE_DATA } from '../data';
import { TimelineItem } from '../types';

export default function Roadmap() {
  const [filter, setFilter] = useState<'all' | 'experience' | 'academic'>('all');
  const [sortOrder, setSortOrder] = useState<'chrono' | 'reverse'>('reverse');
  const [expandedId, setExpandedId] = useState<string | null>('leader'); // Default leader node open
  const [ascensioExpanded, setAscensioExpanded] = useState<boolean>(true);

  // Filter items
  const filteredTimeline = TIMELINE_DATA.filter(item => {
    if (filter === 'all') return true;
    if (filter === 'experience') return item.type === 'experience';
    if (filter === 'academic') return item.type === 'education' || item.type === 'pivot';
    return true;
  });

  // Sort items
  const sortedTimeline = [...filteredTimeline].sort((a, b) => {
    // Standard TIMELINE_DATA is sorted top-to-bottom: 2021 down to 2007 (Present to Past)
    // Choronological means Past to Present (2007 first)
    // Reverse chronological means Present to Past (2021 first)
    const idxA = TIMELINE_DATA.findIndex(x => x.id === a.id);
    const idxB = TIMELINE_DATA.findIndex(x => x.id === b.id);
    if (sortOrder === 'chrono') {
      return idxB - idxA; // larger index in raw (older) comes first
    } else {
      return idxA - idxB; // smaller index in raw (newer) comes first
    }
  });

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="roadmap" className="border-b border-custom-border bg-page-bg">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12">
        
        {/* Left column / sidebar info */}
        <div className="lg:col-span-3 p-6 md:p-12 border-b lg:border-b-0 lg:border-r border-custom-border bg-card-bg">
          <div className="sticky top-24 space-y-8">
            <div>
              <span className="font-mono text-xs text-text-super uppercase tracking-widest block mb-1">
                03 / EVOLUTION ROADMAP
              </span>
              <h2 className="text-2xl font-sans font-medium tracking-tight text-text-main mt-4">
                Career Journey
              </h2>
              <p className="text-sm text-text-secondary mt-2 font-sans">
                Interactively explore the structural timeline bridging systems logic, graphic foundations, and modern SaaS leadership.
              </p>
            </div>

            {/* Ordering Selector */}
            <div className="space-y-3 pt-4 border-t border-custom-border">
              <span className="font-mono text-[10px] text-text-super uppercase tracking-wider block">
                Roadmap Sequence
              </span>
              <div className="grid grid-cols-2 gap-1 p-0.5 bg-page-bg rounded border border-custom-border">
                <button
                  onClick={() => setSortOrder('chrono')}
                  className={`py-1.5 text-[11px] rounded transition-all font-mono font-medium cursor-pointer ${
                    sortOrder === 'chrono' 
                      ? 'bg-card-bg text-text-main shadow-sm font-bold' 
                      : 'text-text-secondary hover:text-text-main'
                  }`}
                >
                  Past &rarr; Present
                </button>
                <button
                  onClick={() => setSortOrder('reverse')}
                  className={`py-1.5 text-[11px] rounded transition-all font-mono font-medium cursor-pointer ${
                    sortOrder === 'reverse' 
                      ? 'bg-card-bg text-text-main shadow-sm font-bold' 
                      : 'text-text-secondary hover:text-text-main'
                  }`}
                >
                  Present &rarr; Past
                </button>
              </div>
            </div>

            {/* Interactive Timeline Filters */}
            <div className="space-y-4 pt-4 border-t border-custom-border">
              <span className="font-mono text-[10px] text-text-super uppercase tracking-wider block">
                Filter Journey
              </span>
              <div className="flex flex-col gap-1">
                <button
                  onClick={() => setFilter('all')}
                  className={`flex items-center justify-between px-3 py-2 text-xs rounded font-mono border transition-all cursor-pointer ${
                    filter === 'all'
                      ? 'bg-page-bg text-text-main border-custom-border font-bold shadow-sm'
                      : 'bg-transparent border-transparent text-text-secondary hover:border-custom-border hover:text-text-main'
                  }`}
                >
                  <span>All Milestones</span>
                  <span className="opacity-50 font-mono text-[10px]">[{TIMELINE_DATA.length}]</span>
                </button>
                <button
                  onClick={() => setFilter('experience')}
                  className={`flex items-center justify-between px-3 py-2 text-xs rounded font-mono border transition-all cursor-pointer ${
                    filter === 'experience'
                      ? 'bg-page-bg text-text-main border-custom-border font-bold shadow-sm'
                      : 'bg-transparent border-transparent text-text-secondary hover:border-custom-border hover:text-text-main'
                  }`}
                >
                  <span>Product Experience</span>
                  <span className="opacity-50 font-mono text-[10px]">
                    [{TIMELINE_DATA.filter(x => x.type === 'experience').length}]
                  </span>
                </button>
                <button
                  onClick={() => setFilter('academic')}
                  className={`flex items-center justify-between px-3 py-2 text-xs rounded font-mono border transition-all cursor-pointer ${
                    filter === 'academic'
                      ? 'bg-page-bg text-text-main border-custom-border font-bold shadow-sm'
                      : 'bg-transparent border-transparent text-text-secondary hover:border-custom-border hover:text-text-main'
                  }`}
                >
                  <span>Systems & Academics</span>
                  <span className="opacity-50 font-mono text-[10px]">
                    [{TIMELINE_DATA.filter(x => x.type === 'education' || x.type === 'pivot').length}]
                  </span>
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Right column / list containing career cards */}
        <div className="lg:col-span-9 p-6 md:p-12 relative bg-page-bg">

          <div className="space-y-6 relative" id="roadmap-stack">
            {sortedTimeline.map((item, index) => {
              // SIA Ascensio Grouping Logic
              const isAscensio = item.id === 'leader' || item.id === 'uxui';
              if (isAscensio) {
                const shouldRenderCombinedCard = 
                  (sortOrder === 'reverse' && item.id === 'leader') ||
                  (sortOrder === 'chrono' && item.id === 'uxui');
                  
                if (!shouldRenderCombinedCard) {
                  return null;
                }

                // Retrieve BOTH roles verbatim from original TIMELINE_DATA to guarantee matching
                const leaderItem = TIMELINE_DATA.find(x => x.id === 'leader')!;
                const uxuiItem = TIMELINE_DATA.find(x => x.id === 'uxui')!;

                return (
                  <div 
                    key="ascensio-group-card" 
                    className="flex flex-col bg-card-bg/30 border border-custom-border hover:border-text-secondary/40 rounded-lg p-6 md:p-8 transition-all duration-300 hover:shadow-sm space-y-5 w-full select-none animate-fadeIn"
                    id="roadmap-card-ascensio-group"
                  >
                    {/* Integrated Header of Combined Card (Company details + general period + Collapse/Expand button) */}
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-4 border-b border-custom-border/65">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="inline-flex items-center gap-1.5 font-mono text-xs text-text-secondary font-semibold bg-page-bg border border-custom-border/40 px-2.25 py-0.5 rounded">
                            <Briefcase className="w-3.5 h-3.5 text-semantic-work-text" />
                            <span>2019 &ndash; 2026</span>
                          </span>
                        </div>
                        <h3 className="font-sans font-bold text-lg md:text-xl text-text-main">
                          SIA "Ascensio System" (ONLYOFFICE)
                        </h3>
                        <p className="font-mono text-xs text-text-secondary">
                          Internal Career Growth &bull; Total of 7 years
                        </p>
                      </div>

                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => setAscensioExpanded(!ascensioExpanded)}
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded border border-custom-border bg-page-bg hover:bg-card-bg/50 text-text-secondary hover:text-text-main transition-all font-mono text-[11px] cursor-pointer"
                        >
                          <span className="hidden sm:inline">
                            {ascensioExpanded ? 'Collapse Details' : 'Expand Details'}
                          </span>
                          {ascensioExpanded ? (
                            <ChevronUp className="w-4 h-4 text-text-secondary" />
                          ) : (
                            <ChevronDown className="w-4 h-4 text-text-secondary" />
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Integrated Hierarchical Timeline representing career growth */}
                    <div className="relative pl-6 md:pl-8 space-y-8 pt-2">
                      {/* Vertical line connecting the roles inside the company */}
                      <div className="absolute left-[10px] md:left-[12px] top-4 bottom-4 w-[1px] bg-custom-border pointer-events-none border-dashed border-text-secondary/20"></div>

                      {/* 1. Senior Designer & Team Lead Role */}
                      <div className="relative space-y-2">
                        {/* Bullet hub icon on timeline */}
                        <div className="absolute -left-[20px] md:-left-[24px] top-1.5 w-3 h-3 rounded-full bg-semantic-work-text border-2 border-page-bg shadow-sm"></div>
                        
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="font-mono text-xs text-text-secondary font-semibold bg-page-bg border border-custom-border/30 px-2 py-0.5 rounded">
                            {leaderItem.period}
                          </span>
                          <span className="font-mono text-[9px] font-bold text-semantic-work-text bg-semantic-work-bg border border-semantic-work-text/20 px-1.5 py-0.5 rounded tracking-wider uppercase">
                            Active Lead
                          </span>
                        </div>

                        <h4 className="font-sans font-bold text-base md:text-lg text-text-main">
                          {leaderItem.title}
                        </h4>

                        <p className="text-sm text-text-secondary font-sans leading-relaxed font-light">
                          {leaderItem.context}
                        </p>

                        {/* Collapsible Key Areas for the Senior position */}
                        {ascensioExpanded && leaderItem.details && (
                          <div className="border-t border-dashed border-custom-border pt-4 mt-2 space-y-2.5">
                            <span className="font-mono text-[10px] text-text-super uppercase tracking-widest block">
                              Key Areas & Accomplishments
                            </span>
                            <ul className="space-y-2">
                              {leaderItem.details.map((detail, dIdx) => (
                                <li key={dIdx} className="flex gap-2.5 items-start text-xs text-text-secondary leading-relaxed font-sans">
                                  <span className="inline-block w-1.5 h-1.5 bg-text-main rounded-full mt-1.5 flex-shrink-0"></span>
                                  <span>{detail}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>

                      {/* 2. UX/UI Designer (Previous Role) */}
                      <div className="relative space-y-2">
                        {/* Bullet hub dot on timeline */}
                        <div className="absolute -left-[19px] md:-left-[23px] top-1.5 w-2 h-2 rounded-full bg-text-secondary/40 border border-page-bg"></div>

                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs text-text-secondary font-semibold bg-page-bg border border-custom-border/30 px-2 py-0.5 rounded">
                            {uxuiItem.period}
                          </span>
                        </div>

                        <h4 className="font-sans font-bold text-base text-text-main">
                          {uxuiItem.title}
                        </h4>

                        <p className="text-sm text-text-secondary font-sans leading-relaxed font-light">
                          {uxuiItem.context}
                        </p>
                      </div>

                    </div>
                  </div>
                );
              }

              // Standard rendering for other timeline items (Academic and older roles)
              const isExpanded = expandedId === item.id;
              const isEducation = item.type === 'education';
              const isPivot = item.type === 'pivot';
              const isAcademic = isEducation || isPivot;
              
              return (
                <div 
                  key={item.id} 
                  className="flex flex-col bg-card-bg/30 border border-custom-border hover:border-text-secondary/40 rounded-lg p-6 md:p-8 transition-all duration-300 hover:shadow-sm space-y-4 w-full select-none"
                  id={`roadmap-card-${item.id}`}
                >
                  <div 
                    onClick={() => toggleExpand(item.id)}
                    className="cursor-pointer flex flex-col md:flex-row md:items-start justify-between gap-4"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="inline-flex items-center gap-1.5 font-mono text-xs text-text-secondary font-semibold bg-page-bg border border-custom-border/40 px-2.25 py-0.5 rounded">
                          {isAcademic ? (
                            <GraduationCap className="w-3.5 h-3.5 text-semantic-study-text" />
                          ) : (
                            <Briefcase className="w-3.5 h-3.5 text-semantic-work-text" />
                          )}
                          <span>{item.period}</span>
                        </span>

                        {isEducation && (
                          <span className="font-mono text-[9px] font-bold text-semantic-study-text bg-semantic-study-bg border border-semantic-study-text/20 px-1.5 py-0.5 rounded tracking-wider uppercase">
                            Anabin Cert
                          </span>
                        )}
                      </div>

                      <h3 className="font-sans font-bold text-base md:text-lg text-text-main">
                        {item.title}
                      </h3>

                      <p className="font-mono text-xs text-text-secondary font-medium">
                        {item.organization}
                      </p>
                    </div>

                    <div className="flex items-center gap-3 self-end md:self-start pt-1">
                      <span className="hidden md:inline font-mono text-[11px] text-text-super hover:text-interactive transition-colors">
                        {isExpanded ? 'Collapse Details' : 'Expand Details'}
                      </span>
                      <span>
                        {isExpanded ? (
                          <ChevronUp className="w-4 h-4 text-text-secondary transition-colors" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-text-secondary transition-colors" />
                        )}
                      </span>
                    </div>
                  </div>

                  <div className="text-sm text-text-secondary font-sans border-t border-custom-border pt-4">
                    <p className="leading-relaxed font-light">{item.context}</p>
                  </div>

                  {/* Expandable detailed outcomes */}
                  {isExpanded && item.details && (
                    <div className="border-t border-dashed border-custom-border pt-4 space-y-2.5">
                      <span className="font-mono text-[10px] text-text-super uppercase tracking-widest block">
                        Key Areas & Accomplishments
                      </span>
                      <ul className="space-y-2">
                        {item.details.map((detail, dIdx) => (
                          <li key={dIdx} className="flex gap-2.5 items-start text-xs text-text-secondary leading-relaxed font-sans">
                            <span className="inline-block w-1.5 h-1.5 bg-text-main rounded-full mt-1.5 flex-shrink-0"></span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                </div>
              );
            })}
          </div>

          {sortedTimeline.length === 0 && (
            <div className="py-12 text-center border border-dashed border-custom-border rounded-lg">
              <span className="font-mono text-sm text-text-super">
                No matching milestones found. Adjust the filters on the left.
              </span>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
