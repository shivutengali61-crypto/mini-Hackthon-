/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { EXPERIENCES } from '../data/portfolioData.ts';
import { SectionHeading } from './SectionHeading.tsx';
import { ScrollReveal } from './ScrollReveal.tsx';
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  Clock,
  Sparkles,
  ChevronDown,
  ChevronUp,
  Award
} from 'lucide-react';

export const Experience: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Completed' | 'Ongoing'>('All');
  const [expandedId, setExpandedId] = useState<string>('exp-intern');

  const filteredExperiences = EXPERIENCES.filter((exp) => {
    if (filter === 'All') return true;
    return exp.status === filter;
  });

  return (
    <section id="experience" className="py-20 border-t border-slate-200 dark:border-slate-900 bg-slate-50/50 dark:bg-slate-950/50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading with Shareable Section URL Link */}
        <ScrollReveal direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
            <SectionHeading
              id="experience"
              badge="05. Hands-On Engineering"
              title="Experience & Practical Training"
              description="Documented industry internship, academic project leadership, and continuous self-directed algorithmic engineering."
            />

            {/* Filter Toggle: Clearly Distinguishing Completed from Ongoing Learning */}
            <div className="flex items-center gap-1 p-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl mb-8 md:mb-12 shadow-xs">
              {(['All', 'Completed', 'Ongoing'] as const).map((cat) => {
                const isSelected = filter === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                      isSelected
                        ? 'bg-blue-600 text-white font-semibold shadow-xs'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    {cat === 'All' ? 'All Roles' : cat === 'Completed' ? 'Completed (1)' : 'Ongoing Learning (3)'}
                  </button>
                );
              })}
            </div>
          </div>
        </ScrollReveal>

        {/* Experience List */}
        <div className="space-y-5">
          {filteredExperiences.map((exp, idx) => {
            const isExpanded = expandedId === exp.id;
            return (
              <ScrollReveal key={exp.id} direction="up" delay={0.08 * (idx + 1)}>
                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden hover:border-slate-300 dark:hover:border-slate-700 transition-all shadow-xs">
                  
                  {/* Top Header Card Bar */}
                  <button
                    onClick={() => setExpandedId(isExpanded ? '' : exp.id)}
                    className="w-full p-6 text-left flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer focus-visible:outline-hidden focus-visible:bg-slate-50 dark:focus-visible:bg-slate-800/50"
                    aria-expanded={isExpanded}
                  >
                    <div className="flex items-start sm:items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 shadow-xs ${
                        exp.status === 'Completed'
                          ? 'bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800'
                          : 'bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800'
                      }`}>
                        <Briefcase className="w-5 h-5" />
                      </div>

                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          {/* Clearly distinguish Completed vs Ongoing Learning */}
                          <span className={`text-[10px] font-mono px-2 py-0.5 rounded font-bold uppercase tracking-wider border ${
                            exp.status === 'Completed'
                              ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800'
                              : 'bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800'
                          }`}>
                            {exp.status === 'Completed' ? '✓ Completed Experience' : '⚡ Ongoing Learning'}
                          </span>

                          <span className="text-xs font-mono text-slate-500">
                            {exp.type}
                          </span>
                        </div>

                        <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                          {exp.role} <span className="text-slate-500 font-normal text-sm">@ {exp.organization}</span>
                        </h3>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 self-end sm:self-center shrink-0">
                      <div className="text-right text-xs font-mono text-slate-500">
                        <div className="flex items-center gap-1 justify-end">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1 justify-end text-[11px] text-slate-400 mt-0.5">
                          <MapPin className="w-3 h-3" />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      <div className="p-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-500">
                        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </div>
                    </div>
                  </button>

                  {/* Expanded Details Body */}
                  {isExpanded && (
                    <div className="px-6 pb-6 pt-2 border-t border-slate-100 dark:border-slate-800/80 space-y-4 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed italic">
                        "{exp.summary}"
                      </p>

                      <div>
                        <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 font-mono">
                          Key Contributions & Practical Deliverables:
                        </div>
                        <ul className="space-y-2">
                          {exp.contributions.map((contribution, i) => (
                            <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                              <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                              <span>{contribution}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-2">
                        <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 font-mono">
                          Applied Technologies:
                        </div>
                        <div className="flex flex-wrap gap-1.5 text-xs font-mono">
                          {exp.technologies.map((t, i) => (
                            <span
                              key={i}
                              className="px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
};
