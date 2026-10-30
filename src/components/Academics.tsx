/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ACADEMICS, PERSONAL_INFO } from '../data/portfolioData.ts';
import { SectionHeading } from './SectionHeading.tsx';
import { ScrollReveal } from './ScrollReveal.tsx';
import {
  GraduationCap,
  Building,
  Award,
  BookOpen,
  Calendar,
  MapPin,
  CheckCircle2,
  FileBadge
} from 'lucide-react';

export const Academics: React.FC = () => {
  return (
    <section id="academics" className="py-20 border-t border-slate-200 dark:border-slate-900 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading with Shareable Section URL Link */}
        <ScrollReveal direction="up">
          <SectionHeading
            id="academics"
            badge="02. Academic Career"
            title="Academic Qualifications & Timeline"
            description="Detailed educational background in Computer Science & Engineering, academic standings, foundational schooling, and key academic milestones."
          />
        </ScrollReveal>

        {/* Current Ongoing Degree Spotlight Card */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="mb-12 p-6 sm:p-8 bg-gradient-to-r from-blue-50/70 via-white to-indigo-50/40 dark:from-slate-900 dark:via-slate-900 dark:to-blue-950/30 border border-blue-200 dark:border-blue-900/60 rounded-2xl shadow-sm">
            
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-blue-100 dark:border-slate-800">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-md">
                  <GraduationCap className="w-8 h-8" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                      Current Degree (Undergraduate)
                    </span>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-500/20 text-emerald-800 dark:text-emerald-300 font-semibold">
                      {ACADEMICS.currentStatus}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    {ACADEMICS.degree}
                  </h3>
                  <div className="text-sm font-semibold text-blue-700 dark:text-blue-300 mt-0.5">
                    {ACADEMICS.department}
                  </div>
                </div>
              </div>

              {/* Performance Indicator Box */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-white dark:bg-slate-950 p-4 rounded-xl border border-blue-200 dark:border-slate-800 shrink-0">
                <div>
                  <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">Cumulative Grade</div>
                  <div className="text-2xl font-black text-emerald-600 dark:text-emerald-400 font-mono">
                    {ACADEMICS.cgpaOrPercentage}
                  </div>
                </div>
                <div className="sm:border-l sm:border-slate-200 dark:sm:border-slate-800 sm:pl-4 text-xs font-mono text-slate-500">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{ACADEMICS.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5 mt-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{ACADEMICS.location}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* University & Institutional Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
              <div className="space-y-2">
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                  <Building className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span>College & University Details</span>
                </div>
                <div className="p-4 bg-white dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800/80 rounded-xl space-y-2 text-xs text-slate-700 dark:text-slate-300">
                  <div>
                    <span className="text-slate-500 font-mono">College Name: </span>
                    <strong className="text-slate-900 dark:text-white">{ACADEMICS.institution}</strong>
                  </div>
                  <div>
                    <span className="text-slate-500 font-mono">Affiliating University: </span>
                    <strong className="text-slate-900 dark:text-white">{ACADEMICS.university}</strong>
                  </div>
                  <div>
                    <span className="text-slate-500 font-mono">Department: </span>
                    <span className="text-slate-800 dark:text-slate-200">{ACADEMICS.department}</span>
                  </div>
                </div>
              </div>

              {/* Core Computer Science Coursework */}
              <div className="space-y-2">
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span>Key Coursework Studied</span>
                </div>
                <div className="p-4 bg-white dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800/80 rounded-xl">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 dark:text-slate-300 font-mono">
                    {ACADEMICS.keyCourses.map((course, i) => (
                      <div key={i} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                        <span className="truncate">{course}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Academic Achievements Sub-Strip */}
            <div className="mt-6 pt-6 border-t border-blue-100 dark:border-slate-800">
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <Award className="w-4 h-4 text-amber-500" />
                <span>Academic Honors & Accomplishments</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {ACADEMICS.academicAchievements.map((ach, i) => (
                  <div
                    key={i}
                    className="p-3 bg-white/90 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/80 rounded-lg text-xs text-slate-700 dark:text-slate-300 flex items-start gap-2.5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{ach}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </ScrollReveal>

        {/* Previous Education Timeline */}
        <ScrollReveal direction="up" delay={0.2}>
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
              <FileBadge className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <span>Prior Educational Record</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {ACADEMICS.previousEducation.map((edu, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl space-y-3 hover:border-slate-300 dark:hover:border-slate-700 transition-colors shadow-xs"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <span className="text-[11px] font-mono text-blue-600 dark:text-blue-400 font-semibold uppercase">
                        {edu.year}
                      </span>
                      <h4 className="text-base font-bold text-slate-900 dark:text-white mt-0.5">
                        {edu.level}
                      </h4>
                    </div>
                    <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-1 rounded border border-emerald-200 dark:border-emerald-800/80 shrink-0">
                      {edu.score}
                    </span>
                  </div>

                  <div className="text-xs text-slate-600 dark:text-slate-400 space-y-1 pt-1 border-t border-slate-200 dark:border-slate-800/60 font-mono">
                    <div><strong>Institution:</strong> {edu.institution}</div>
                    <div><strong>Board / Authority:</strong> {edu.boardOrUniversity}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
