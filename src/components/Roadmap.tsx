/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Briefcase, GraduationCap, RefreshCw, Calendar, ChevronDown, ChevronUp, Layers, ListFilter } from 'lucide-react';
import { TIMELINE_DATA } from '../data';
import { TimelineItem } from '../types';

export default function Roadmap() {
  const [filter, setFilter] = useState<'all' | 'experience' | 'academic'>('all');
  const [sortOrder, setSortOrder] = useState<'chrono' | 'reverse'>('chrono');
  const [expandedId, setExpandedId] = useState<string | null>('leader'); // Default leader node open

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

          </div>
        </div>

        {/* Right column / list containing vertical timeline */}
        <div className="lg:col-span-9 p-6 md:p-12 relative">
          
          {/* Vertical layout line */}
          <div className="absolute left-[31px] md:left-[59px] top-12 bottom-12 w-[1px] bg-custom-border pointer-events-none"></div>

          <div className="space-y-8 relative">
            {sortedTimeline.map((item, index) => {
              const isExpanded = expandedId === item.id;
              
              // Define badge/color based on milestone type
              const isLead = item.id === 'leader';
              const isEducation = item.type === 'education';
              const isPivot = item.type === 'pivot';
              const isWork = item.type === 'experience';
              
              return (
                <div key={item.id} className="relative flex gap-4 md:gap-10 items-start group select-none">
                  
                  {/* Circle Hub node with custom symbol or number */}
                  <button
                    onClick={() => toggleExpand(item.id)}
                    className={`relative z-10 flex-shrink-0 w-8 md:w-10 h-8 md:h-10 rounded-full border flex items-center justify-center transition-all cursor-pointer ${
                      isExpanded 
                        ? 'bg-text-main text-page-bg border-custom-border scale-110 shadow-md' 
                        : isWork
                        ? 'bg-semantic-work-bg text-semantic-work-text border-semantic-work-text/30 hover:opacity-90'
                        : 'bg-semantic-study-bg text-semantic-study-text border-semantic-study-text/30 hover:opacity-90'
                    }`}
                  >
                    {isEducation ? (
                      <GraduationCap className="w-4 h-4" />
                    ) : isPivot ? (
                      <RefreshCw className="w-3.5 h-3.5" />
                    ) : (
                      <Briefcase className="w-3.5 h-3.5" />
                    )}
                  </button>
  
                  {/* Content Container Card */}
                  <div className="flex-grow bg-card-bg border border-custom-border hover:border-text-secondary/50 rounded-lg p-5 md:p-6 transition-all duration-300 shadow-none">
                    <div 
                      onClick={() => toggleExpand(item.id)}
                      className="cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="font-mono text-xs text-text-secondary font-semibold bg-page-bg px-2 py-0.5 rounded">
                            {item.period}
                          </span>
                          
                          {isLead && (
                            <span className="font-mono text-[9px] font-bold text-semantic-work-text bg-semantic-work-bg border border-semantic-work-text/20 px-1.5 py-0.5 rounded tracking-wider uppercase">
                              Active Lead
                            </span>
                          )}
  
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

                      <div className="flex items-center gap-3">
                        <span className="hidden md:inline font-mono text-[11px] text-text-super group-hover:text-interactive transition-colors">
                          {isExpanded ? 'Collapse Details' : 'Expand Details'}
                        </span>
                        <span>
                          {isExpanded ? (
                            <ChevronUp className="w-4 h-4 text-text-secondary group-hover:text-interactive transition-colors" />
                          ) : (
                            <ChevronDown className="w-4 h-4 text-text-secondary group-hover:text-interactive transition-colors" />
                          )}
                        </span>
                      </div>
                    </div>

                    <div className="mt-4 text-sm text-text-secondary font-sans border-t border-custom-border pt-3">
                      <p className="leading-relaxed font-light">{item.context}</p>
                    </div>

                    {/* Expandable detailed outcomes */}
                    {isExpanded && item.details && (
                      <div className="mt-4 border-t border-dashed border-custom-border pt-4 space-y-2.5">
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
