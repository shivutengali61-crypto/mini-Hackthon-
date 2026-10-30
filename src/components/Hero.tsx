/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData.ts';
import { ScrollReveal } from './ScrollReveal.tsx';
import { downloadResumeFile } from '../utils/resumeDownload.ts';
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  FileText,
  Download,
  GraduationCap,
  Building2,
  Code2,
  Sparkles,
  CheckCircle2,
  ExternalLink,
  Send,
  Terminal
} from 'lucide-react';

interface HeroProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onOpenContact }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'academics' | 'stack'>('overview');

  const handleNavigate = (hash: string) => {
    if (window.location.hash !== hash) {
      window.history.pushState(null, '', hash);
    }
    const target = document.getElementById(hash.replace('#', ''));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="relative pt-24 sm:pt-32 pb-16 sm:pb-24 overflow-hidden">
      {/* Background radial gradient accent */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[400px] bg-blue-600/10 dark:bg-blue-600/15 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <ScrollReveal direction="up" delay={0.1}>
          
          {/* Prominent College & University Trust Strip */}
          <div className="mb-6 inline-flex flex-wrap items-center gap-2 px-3.5 py-1.5 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800/80 text-xs text-blue-900 dark:text-blue-300">
            <Building2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
            <span className="font-semibold">{PERSONAL_INFO.collegeName}</span>
            <span aria-hidden="true" className="text-blue-300 dark:text-blue-700">·</span>
            <span className="font-mono">{PERSONAL_INFO.department}</span>
            <span aria-hidden="true" className="text-blue-300 dark:text-blue-700">·</span>
            <span className="text-blue-700 dark:text-blue-400">{PERSONAL_INFO.universityName}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-stretch">
            
            {/* Left Column: Core Identity */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              
              {/* Name Display */}
              <div className="text-xs font-bold text-blue-600 dark:text-blue-400 tracking-widest uppercase mb-1 font-mono">
                Portfolio of
              </div>
              <h1 className="text-4xl sm:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-none mb-3">
                SHIVAKUMAR
              </h1>

              {/* Role */}
              <div className="text-xl sm:text-2xl font-bold text-blue-600 dark:text-blue-400 mb-3 flex items-center gap-2">
                <span>{PERSONAL_INFO.role}</span>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-500/20 text-blue-700 dark:text-blue-300 font-medium">
                  {PERSONAL_INFO.currentYear}
                </span>
              </div>

              {/* Quote */}
              <blockquote className="text-base sm:text-lg font-medium text-slate-800 dark:text-slate-200 italic mb-5 border-l-2 border-blue-600 dark:border-blue-500 pl-4">
                {PERSONAL_INFO.quote}
              </blockquote>

              {/* Introduction Paragraph */}
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-8 max-w-2xl">
                Computer science student passionate about software development, modern web technologies, and solving real-world problems. 
                Focused on building scalable web applications with React and Node.js, mastering data structures and algorithms, and exploring practical AI-driven tools.
              </p>

              {/* Three Primary Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-10">
                {/* 1. View Projects */}
                <button
                  onClick={() => handleNavigate('#projects')}
                  className="inline-flex items-center gap-2 px-5 py-3 text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 active:scale-[0.98] transition-all rounded-lg shadow-md shadow-blue-600/20 whitespace-nowrap focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-400 cursor-pointer"
                >
                  <span>View Projects</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                {/* 2. Download Resume */}
                <button
                  onClick={downloadResumeFile}
                  className="inline-flex items-center gap-2 px-5 py-3 text-xs sm:text-sm font-semibold text-emerald-800 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 hover:bg-emerald-100 dark:hover:bg-emerald-900/60 rounded-lg transition-all whitespace-nowrap shadow-xs cursor-pointer"
                  title="Download Resume in Markdown / Text format"
                >
                  <Download className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>Download Resume</span>
                </button>

                {/* 3. Contact Me */}
                <button
                  onClick={() => handleNavigate('#contact')}
                  className="inline-flex items-center gap-2 px-5 py-3 text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700/80 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-all whitespace-nowrap shadow-xs cursor-pointer"
                >
                  <Send className="w-4 h-4 text-blue-500" />
                  <span>Contact Me</span>
                </button>

                {/* Optional view modal */}
                <button
                  onClick={onOpenResume}
                  className="inline-flex items-center gap-1.5 px-3 py-3 text-xs text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
                  title="Inspect ATS resume viewer"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span className="underline underline-offset-4">Read Online</span>
                </button>
              </div>

              {/* Working Social Media Links */}
              <div className="flex items-center gap-6 text-xs text-slate-600 dark:text-slate-400">
                <span className="text-slate-400 dark:text-slate-500 uppercase tracking-wider text-[11px] font-semibold">Profiles:</span>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  <Github className="w-4 h-4 text-slate-700 dark:text-slate-300" />
                  <span className="font-mono">GitHub</span>
                </a>
                <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                  <span className="font-mono">LinkedIn</span>
                </a>
                <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="inline-flex items-center gap-1.5 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                  <span className="font-mono">Email</span>
                </a>
              </div>
            </div>

            {/* Right Column: Interactive Student Profile & Fast Facts Box */}
            <div className="lg:col-span-5 flex flex-col">
              <div className="w-full h-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-xl shadow-slate-900/5 dark:shadow-black/40 flex flex-col justify-between">
                
                {/* Header Strip */}
                <div className="px-4 py-3 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    <span className="ml-2 text-xs font-mono text-slate-700 dark:text-slate-300 font-medium">
                      shivakumar_profile.tsx
                    </span>
                  </div>
                  <div className="text-[11px] font-mono text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-500/10 px-2 py-0.5 rounded border border-blue-200 dark:border-blue-500/20">
                    Active Student
                  </div>
                </div>

                {/* Tabs */}
                <div className="flex items-center border-b border-slate-200 dark:border-slate-800 bg-slate-100/60 dark:bg-slate-950/40 px-2 pt-1 gap-1">
                  <button
                    onClick={() => setActiveTab('overview')}
                    className={`px-3 py-2 text-xs font-medium rounded-t-lg transition-colors flex items-center gap-1.5 cursor-pointer ${
                      activeTab === 'overview'
                        ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 border-t-2 border-blue-600 dark:border-blue-500'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                    }`}
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Quick Profile</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('academics')}
                    className={`px-3 py-2 text-xs font-medium rounded-t-lg transition-colors flex items-center gap-1.5 cursor-pointer ${
                      activeTab === 'academics'
                        ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 border-t-2 border-blue-600 dark:border-blue-500'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                    }`}
                  >
                    <GraduationCap className="w-3.5 h-3.5" />
                    <span>Academics</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('stack')}
                    className={`px-3 py-2 text-xs font-medium rounded-t-lg transition-colors flex items-center gap-1.5 cursor-pointer ${
                      activeTab === 'stack'
                        ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 border-t-2 border-blue-600 dark:border-blue-500'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                    }`}
                  >
                    <Code2 className="w-3.5 h-3.5" />
                    <span>Core Stacks</span>
                  </button>
                </div>

                {/* Tab Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  {activeTab === 'overview' && (
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-extrabold text-2xl shadow-md">
                          SK
                        </div>
                        <div>
                          <div className="text-base font-bold text-slate-900 dark:text-white">
                            Shivakumar
                          </div>
                          <div className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                            Computer Science & Engineering Student
                          </div>
                          <div className="text-[11px] text-slate-500 font-mono">
                            {PERSONAL_INFO.email}
                          </div>
                        </div>
                      </div>

                      <div className="p-3.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl space-y-2 text-xs text-slate-700 dark:text-slate-300">
                        <div className="flex justify-between items-center">
                          <span className="text-slate-500 font-mono">Degree:</span>
                          <span className="font-semibold text-slate-900 dark:text-white">B.E. Computer Science</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-slate-500 font-mono">Current Standing:</span>
                          <span className="font-semibold text-emerald-600 dark:text-emerald-400 font-mono">8.8 CGPA (7th Sem)</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-slate-500 font-mono">Primary Focus:</span>
                          <span className="font-medium text-blue-600 dark:text-blue-400">Web & Software Dev</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-slate-500 font-mono">Availability:</span>
                          <span className="text-slate-800 dark:text-slate-200">Internship & Graduate Roles</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-xs text-slate-500 font-mono pt-1">
                        <span>Status: Actively Seeking Opportunities</span>
                        <button
                          onClick={() => handleNavigate('#academics')}
                          className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-1 cursor-pointer"
                        >
                          <span>Full Timeline</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  )}

                  {activeTab === 'academics' && (
                    <div className="space-y-3 text-xs">
                      <div className="p-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl space-y-1">
                        <div className="text-xs font-bold text-slate-900 dark:text-white flex items-center justify-between">
                          <span>{PERSONAL_INFO.degree}</span>
                          <span className="font-mono text-emerald-600 dark:text-emerald-400 font-semibold">8.8 CGPA</span>
                        </div>
                        <div className="text-[11px] text-blue-600 dark:text-blue-400 font-medium">
                          {PERSONAL_INFO.collegeName}
                        </div>
                        <div className="text-[10px] text-slate-500 font-mono">
                          {PERSONAL_INFO.universityName} · 2021 — 2025
                        </div>
                      </div>

                      <div className="p-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl space-y-1">
                        <div className="text-xs font-bold text-slate-900 dark:text-white flex items-center justify-between">
                          <span>Pre-University Course (PUC - Science)</span>
                          <span className="font-mono text-emerald-600 dark:text-emerald-400">92.4%</span>
                        </div>
                        <div className="text-[10px] text-slate-500 font-mono">
                          Karnataka State Board · Distinction
                        </div>
                      </div>

                      <div className="pt-1 flex justify-between items-center text-[11px] text-slate-500 font-mono">
                        <span>Cohort: Top 5%</span>
                        <button
                          onClick={() => handleNavigate('#academics')}
                          className="text-blue-600 dark:text-blue-400 hover:underline cursor-pointer"
                        >
                          View Academics Section →
                        </button>
                      </div>
                    </div>
                  )}

                  {activeTab === 'stack' && (
                    <div className="space-y-3 text-xs">
                      <div className="space-y-1.5">
                        <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">Top Languages:</div>
                        <div className="flex flex-wrap gap-1.5 font-mono text-[11px]">
                          {['Python', 'Java', 'C++', 'JavaScript', 'TypeScript'].map((lang) => (
                            <span key={lang} className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-300">
                              {lang}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">Web & Databases:</div>
                        <div className="flex flex-wrap gap-1.5 font-mono text-[11px]">
                          {['React.js', 'Node.js', 'Express', 'Tailwind CSS', 'MySQL', 'PostgreSQL'].map((t) => (
                            <span key={t} className="px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800/80 text-blue-700 dark:text-blue-300">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">Tools & AI:</div>
                        <div className="flex flex-wrap gap-1.5 font-mono text-[11px]">
                          {['Git & GitHub', 'VS Code', 'Postman', 'OpenCV', 'NumPy', 'Pandas'].map((t) => (
                            <span key={t} className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-400">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Window Bottom Link */}
                  <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                    <span>portfolio_build_2026</span>
                    <button
                      onClick={() => handleNavigate('#projects')}
                      className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <span>Explore 3 Featured Projects</span>
                      <ExternalLink className="w-3 h-3" />
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Quick Stats Grid */}
          <div className="mt-14 pt-8 border-t border-slate-200 dark:border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-6 text-left">
            {PERSONAL_INFO.stats.map((stat, idx) => (
              <div key={idx} className="space-y-1">
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-mono tabular-nums tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

        </ScrollReveal>
      </div>
    </section>
  );
};
