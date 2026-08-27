import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Info } from 'lucide-react';

interface LimitStateItem {
  id: string;
  stateLabel: string;
  stateBadge: string;
  usageRatio: string;
  percentage: number;
  activeCount: number;
  remainingCount: number;
  color: string;
  remainingTextColor: string;
  barColor: string;
  thresholdDesc: string;
  tooltipText?: string;
  isHoverCard?: boolean;
}

const statesData: LimitStateItem[] = [
  {
    id: 'normal',
    stateLabel: 'Normal State',
    stateBadge: 'Normal',
    usageRatio: '24 / 100',
    percentage: 24,
    activeCount: 24,
    remainingCount: 76,
    color: '#007B14',
    remainingTextColor: '#228047',
    barColor: '#007B14',
    thresholdDesc: 'Normal < 70%, color – green',
    tooltipText: 'Usage: 24% – Stable load. Within standard capacity limits.',
  },
  {
    id: 'warning',
    stateLabel: 'Warning State',
    stateBadge: 'Caution',
    usageRatio: '76 / 100',
    percentage: 76,
    activeCount: 76,
    remainingCount: 24,
    color: '#FF6F3D',
    remainingTextColor: '#FF6F3D',
    barColor: '#FF6F3D',
    thresholdDesc: 'Warning ≥ 70% and < 90%, color – orange',
    tooltipText: 'Usage: 76% – Elevated load. Approaching capacity limits.',
  },
  {
    id: 'critical',
    stateLabel: 'Critical State',
    stateBadge: 'Critical',
    usageRatio: '96 / 100',
    percentage: 96,
    activeCount: 96,
    remainingCount: 4,
    color: '#CB0000',
    remainingTextColor: '#CB0000',
    barColor: '#CB0000',
    thresholdDesc: 'Critical ≥ 90%, color – red',
    tooltipText: 'Usage: 96% – High load. Consider increasing editor session limit.',
  },
  {
    id: 'hover-demo',
    stateLabel: 'Interactive Tooltip',
    stateBadge: 'Hover for tips',
    usageRatio: '96 / 100',
    percentage: 96,
    activeCount: 96,
    remainingCount: 4,
    color: '#CB0000',
    remainingTextColor: '#CB0000',
    barColor: '#CB0000',
    thresholdDesc: 'Interactive state with contextual tooltip',
    tooltipText: 'Usage: 96% – High load. Consider increasing editor session limit.',
    isHoverCard: true,
  },
];

export const EditorLimitStates: React.FC = () => {
  const [activeTooltipId, setActiveTooltipId] = useState<string | null>('hover-demo');

  return (
    <div className="w-full space-y-6">
      {/* Section Sub-Header Banner matching mockup styling */}
      <div className="bg-[#F3FFFE] border border-[#A3E7DC]/60 rounded-xl px-5 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-[#007B14] shrink-0 animate-pulse" />
          <h3 className="font-sans font-bold text-base md:text-lg text-[#333333] tracking-tight">
            Using the editor/viewer: Logic to change indicator color when approaching limits
          </h3>
        </div>
        <span className="font-mono text-[11px] text-zinc-500 uppercase tracking-wider shrink-0 bg-white/80 border border-zinc-200/60 px-2.5 py-1 rounded-md">
          DYNAMIC THRESHOLD LOGIC
        </span>
      </div>

      {/* 4 Cards Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-stretch">
        {statesData.map((item, idx) => {
          const showTooltip = activeTooltipId === item.id || item.isHoverCard;

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="flex flex-col justify-between space-y-4"
            >
              {/* Card Container */}
              <div 
                className="bg-white rounded-lg border border-[#E2E2E2] p-6 sm:p-7 shadow-[0_2px_12px_rgba(0,0,0,0.03)] relative flex flex-col justify-between flex-1 transition-all duration-200 hover:border-zinc-300"
              >
                {/* Optional Top Badge for Hover Card */}
                {item.isHoverCard && (
                  <div className="absolute -top-3 right-4 bg-[#D9F4FF] border border-[#BCE6FA] px-2.5 py-0.5 rounded text-[11px] font-sans font-bold text-[#025078] shadow-xs">
                    Hover for tips
                  </div>
                )}

                <div className="space-y-6">
                  {/* Card Header */}
                  <div className="space-y-1">
                    <h4 className="font-sans font-bold text-[22px] text-[#333333] tracking-tight leading-snug">
                      Editors
                    </h4>
                    <p className="font-sans font-semibold text-xs sm:text-[13px] text-[#666666] leading-tight">
                      Active editing sessions and availability
                    </p>
                  </div>

                  {/* Usage Progress Section with Info Tooltip */}
                  <div className="space-y-3 relative">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5 relative">
                        <span className="font-sans font-bold text-base sm:text-lg text-[#444444] tracking-tight">
                          Editor Usage
                        </span>
                        
                        {/* Info Icon Button */}
                        <button
                          type="button"
                          onMouseEnter={() => setActiveTooltipId(item.id)}
                          onMouseLeave={() => {
                            if (!item.isHoverCard) setActiveTooltipId(null);
                          }}
                          onClick={() => setActiveTooltipId(activeTooltipId === item.id ? null : item.id)}
                          aria-label="Show session usage details"
                          className="w-4 h-4 rounded-full border border-[#666666] flex items-center justify-center text-[10px] font-serif font-bold text-[#666666] hover:text-[#333333] hover:border-[#333333] transition-colors cursor-pointer"
                        >
                          i
                        </button>

                        {/* Tooltip Popover (Active or Hovered) */}
                        {showTooltip && (
                          <div 
                            className={`absolute z-30 left-0 -top-16 bg-[#EFEFEF] border border-[#D5D5D5] text-[#333333] rounded px-3 py-2 text-xs font-mono shadow-md w-56 pointer-events-none transition-all duration-150 ${
                              item.isHoverCard ? 'ring-1 ring-zinc-300' : ''
                            }`}
                          >
                            <p className="leading-snug">
                              {item.tooltipText}
                            </p>
                            {/* Tooltip arrow */}
                            <div className="absolute -bottom-1.5 left-4 w-3 h-3 bg-[#EFEFEF] border-r border-b border-[#D5D5D5] transform rotate-45" />

                            {/* Pixel Hand Cursor Indicator for demo card */}
                            {item.isHoverCard && (
                              <div className="absolute -bottom-6 -right-2 transform translate-x-1 translate-y-1">
                                <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-sm">
                                  <path d="M5 1V14M5 14L2 11M5 14L8 11" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="white"/>
                                  <path d="M7 10.5V6.5C7 5.67157 7.67157 5 8.5 5C9.32843 5 10 5.67157 10 6.5V10.5M10 10.5V8.5C10 7.67157 10.6716 7 11.5 7C12.3284 7 13 7.67157 13 8.5V10.5M13 10.5V9.5C13 8.67157 13.6716 8 14.5 8C15.3284 8 16 8.67157 16 9.5V14.5C16 18.0899 13.0899 21 9.5 21H8C5.23858 21 3 18.7614 3 16V12.5C3 11.6716 3.67157 11 4.5 11C5.32843 11 6 11.6716 6 12.5V14" fill="#FFFFFF" stroke="#000000" strokeWidth="1.5"/>
                                </svg>
                              </div>
                            )}
                          </div>
                        )}
                      </div>

                      {/* Usage Number Ratio */}
                      <span className="font-sans font-bold text-lg sm:text-[20px] text-[#333333] tracking-tight">
                        {item.usageRatio}
                      </span>
                    </div>

                    {/* Progress Bar Track & Colored Fill */}
                    <div className="w-full h-2 bg-[#F5F5F5] border border-[#E2E2E2] rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-500 ease-out"
                        style={{
                          width: `${item.percentage}%`,
                          backgroundColor: item.barColor,
                        }}
                      />
                    </div>
                  </div>

                  {/* Metrics Rows: Active and Remaining */}
                  <div className="space-y-4 pt-1">
                    {/* Active Row */}
                    <div className="flex items-center justify-between border-b border-zinc-100 pb-3">
                      <div>
                        <div className="font-sans font-bold text-base sm:text-lg text-[#444444] leading-tight">
                          Active
                        </div>
                        <div className="font-sans text-xs text-[#666666] mt-0.5">
                          Users currently editing documents
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-sans font-bold text-2xl text-[#444444] leading-none">
                          {item.activeCount}
                        </div>
                        <div className="font-sans text-xs text-[#666666] mt-0.5">
                          Sessions
                        </div>
                      </div>
                    </div>

                    {/* Remaining Row */}
                    <div className="flex items-center justify-between pt-1">
                      <div>
                        <div className="font-sans font-bold text-base sm:text-lg text-[#444444] leading-tight">
                          Remaining
                        </div>
                        <div className="font-sans text-xs text-[#666666] mt-0.5">
                          Editor sessions before limit
                        </div>
                      </div>
                      <div className="text-right">
                        <div 
                          className="font-sans font-bold text-2xl leading-none"
                          style={{ color: item.remainingTextColor }}
                        >
                          {item.remainingCount}
                        </div>
                        <div className="font-sans text-xs text-[#666666] mt-0.5">
                          Available
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Threshold Definition Callout Box at Bottom */}
              <div 
                className={`p-3 rounded border text-xs font-sans font-semibold text-center flex items-center justify-center shadow-2xs ${
                  item.isHoverCard 
                    ? 'bg-[#D9F4FF] border-[#BCE6FA] text-[#025078]' 
                    : 'bg-[#F3FFFE] border-[#C8F0EC] text-[#333333]'
                }`}
              >
                <span>{item.thresholdDesc}</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
