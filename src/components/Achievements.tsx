/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ACHIEVEMENTS } from '../data/portfolioData.ts';
import { AchievementRecord } from '../types.ts';
import { SectionHeading } from './SectionHeading.tsx';
import { ScrollReveal } from './ScrollReveal.tsx';
import {
  Trophy,
  ExternalLink,
  ShieldCheck,
  X,
  FileCheck2,
  Award,
  Code2
} from 'lucide-react';

export const Achievements: React.FC = () => {
  const [selectedAchievement, setSelectedAchievement] = useState<AchievementRecord | null>(null);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Hackathon':
        return <Trophy className="w-5 h-5 text-amber-500" />;
      case 'Certification':
        return <ShieldCheck className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
      case 'Coding Milestone':
        return <Code2 className="w-5 h-5 text-emerald-500" />;
      default:
        return <Award className="w-5 h-5 text-purple-500" />;
    }
  };

  return (
    <section id="achievements" className="py-20 border-t border-slate-200 dark:border-slate-900 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading with Shareable Section URL Link */}
        <ScrollReveal direction="up">
          <SectionHeading
            id="achievements"
            badge="06. Verified Accomplishments"
            title="Achievements & Certifications"
            description="Hackathon honors, technical certifications from Google Cloud & Meta, algorithmic coding benchmarks, and departmental awards."
          />
        </ScrollReveal>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ACHIEVEMENTS.map((item, idx) => (
            <ScrollReveal key={item.id} direction="up" delay={0.08 * (idx % 6)}>
              <div
                className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-lg transition-all flex flex-col justify-between h-full shadow-xs"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-center justify-center shadow-xs">
                      {getCategoryIcon(item.category)}
                    </div>
                    <div className="text-right">
                      <span className="text-[11px] font-mono text-slate-500">
                        {item.year}
                      </span>
                      <div className="text-[10px] text-blue-600 dark:text-blue-400 font-mono font-semibold uppercase mt-0.5">
                        {item.category}
                      </div>
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 dark:text-white tracking-tight mb-1">
                    {item.title}
                  </h3>

                  <div className="text-xs text-slate-500 font-mono mb-3">
                    {item.organization}
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                    {item.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200 dark:border-slate-800 space-y-3">
                  <div className="text-[11px] text-slate-600 dark:text-slate-400">
                    <strong className="text-slate-800 dark:text-slate-200 font-mono">Impact: </strong>
                    {item.impact}
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    {item.credentialId ? (
                      <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500 truncate max-w-[150px]">
                        ID: {item.credentialId}
                      </span>
                    ) : (
                      <span />
                    )}

                    <button
                      onClick={() => setSelectedAchievement(item)}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors cursor-pointer"
                    >
                      <span>Inspect Credential</span>
                      <ExternalLink className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Credential Inspection Modal */}
        {selectedAchievement && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-md"
            onClick={() => setSelectedAchievement(null)}
            role="dialog"
            aria-modal="true"
          >
            <div
              className="relative w-full max-w-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-2xl space-y-5"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                    <FileCheck2 className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-blue-600 dark:text-blue-400 font-semibold uppercase tracking-wider">
                      Verified Credential
                    </div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white">
                      {selectedAchievement.title}
                    </h3>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedAchievement(null)}
                  className="p-1.5 text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="p-4 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl space-y-2.5 text-xs text-slate-700 dark:text-slate-300">
                <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-800/80">
                  <span className="text-slate-500">Issuing Authority:</span>
                  <span className="font-semibold text-slate-900 dark:text-white font-mono">{selectedAchievement.organization}</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-800/80">
                  <span className="text-slate-500">Year / Concurrence:</span>
                  <span className="font-mono text-slate-800 dark:text-slate-200">{selectedAchievement.year}</span>
                </div>
                {selectedAchievement.credentialId && (
                  <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-800/80">
                    <span className="text-slate-500">Credential ID:</span>
                    <span className="font-mono text-blue-600 dark:text-blue-400 bg-white dark:bg-slate-900 px-2 py-0.5 rounded border border-slate-200 dark:border-slate-800">
                      {selectedAchievement.credentialId}
                    </span>
                  </div>
                )}
                <div>
                  <div className="text-slate-500 mb-1">Scope & Technical Summary:</div>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                    {selectedAchievement.summary}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2">
                {selectedAchievement.verificationUrl ? (
                  <a
                    href={selectedAchievement.verificationUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-semibold transition-colors"
                  >
                    <span>Verify with Issuer</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <span className="text-xs text-slate-400 font-mono">Issued by academic institution</span>
                )}

                <button
                  onClick={() => setSelectedAchievement(null)}
                  className="px-4 py-2 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg text-xs font-medium transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
