/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData.ts';
import { SectionHeading } from './SectionHeading.tsx';
import { ScrollReveal } from './ScrollReveal.tsx';
import {
  User,
  Target,
  Compass,
  Sparkles,
  Rocket,
  CheckCircle2,
  Code,
  Layers,
  Cpu,
  Database,
  ArrowRight
} from 'lucide-react';

export const About: React.FC = () => {
  const { aboutDetails } = PERSONAL_INFO;

  const interestIcons = [
    { label: 'Full-Stack Web Development', icon: Code, desc: 'React, Node.js, Express, Tailwind CSS, Component architecture' },
    { label: 'Data Structures & Algorithms', icon: Layers, desc: 'Arrays, Trees, Graphs, Sorting, Time & Space complexity' },
    { label: 'Relational Database Design', icon: Database, desc: 'MySQL, PostgreSQL, Normalization, Query optimization' },
    { label: 'AI & Computer Vision Basics', icon: Cpu, desc: 'OpenCV, Python NumPy/Pandas, Image preprocessing, Automation' },
  ];

  return (
    <section id="about" className="py-20 border-t border-slate-200 dark:border-slate-900 bg-slate-50/50 dark:bg-slate-950/50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading with Shareable Section URL link */}
        <ScrollReveal direction="up">
          <SectionHeading
            id="about"
            badge="01. Profile & Aspirations"
            title="About Me"
            description="A detailed overview of my background, technical interests, development journey, and career goals as an aspiring software engineer."
          />
        </ScrollReveal>

        {/* 2-Column Split: Overview & Career Objective */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          
          {/* Card 1: Professional Introduction */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="left" delay={0.1}>
              <div className="h-full p-6 sm:p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xs space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800/80 flex items-center justify-center text-blue-600 dark:text-blue-400">
                    <User className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      Professional Introduction
                    </h3>
                    <div className="text-xs text-slate-500 font-mono">Who I am & What drives me</div>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  {aboutDetails.professionalIntroduction}
                </p>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-600 dark:text-slate-400">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span><strong>Degree:</strong> B.E. in Computer Science</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span><strong>Academic Standing:</strong> 8.8 CGPA (First Class with Distinction)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span><strong>Institution:</strong> {PERSONAL_INFO.collegeName}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span><strong>University:</strong> {PERSONAL_INFO.universityName}</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Card 2: Career Objective */}
          <div className="lg:col-span-5">
            <ScrollReveal direction="right" delay={0.15}>
              <div className="h-full p-6 sm:p-8 bg-gradient-to-br from-blue-50/80 via-white to-indigo-50/50 dark:from-slate-900 dark:via-slate-900 dark:to-blue-950/30 border border-blue-200 dark:border-slate-800 rounded-2xl shadow-xs space-y-4 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-sm">
                      <Target className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                        Career Objective
                      </h3>
                      <div className="text-xs text-blue-600 dark:text-blue-400 font-mono">My Immediate Goal</div>
                    </div>
                  </div>

                  <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                    {aboutDetails.careerObjective}
                  </p>
                </div>

                <div className="p-4 bg-white/80 dark:bg-slate-950/80 border border-blue-100 dark:border-slate-800 rounded-xl text-xs text-slate-600 dark:text-slate-400 space-y-1">
                  <div className="font-semibold text-slate-900 dark:text-white flex items-center gap-1.5">
                    <Rocket className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                    <span>Target Roles:</span>
                  </div>
                  <div>• Software Development Engineer (SDE) Intern</div>
                  <div>• Graduate Trainee Software Engineer / Junior Developer</div>
                  <div>• Associate Full-Stack / Web Developer</div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Technical Interests Matrix */}
        <ScrollReveal direction="up" delay={0.2}>
          <div className="mb-12">
            <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <Compass className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <span>Technical Interests & Passions</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {interestIcons.map((interest, idx) => {
                const Icon = interest.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl hover:border-blue-300 dark:hover:border-slate-700 transition-all space-y-2 shadow-xs"
                  >
                    <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-slate-800 flex items-center justify-center text-blue-600 dark:text-blue-400">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="text-sm font-bold text-slate-900 dark:text-white">
                      {interest.label}
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                      {interest.desc}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </ScrollReveal>

        {/* Development Journey & Future Career Goals 2-Column */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Development Journey */}
          <ScrollReveal direction="left" delay={0.25}>
            <div className="p-6 sm:p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xs space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/80 flex items-center justify-center text-amber-600 dark:text-amber-400">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    My Development Journey
                  </h3>
                  <div className="text-xs text-slate-500 font-mono">How I learned & evolved</div>
                </div>
              </div>

              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {aboutDetails.developmentJourney}
              </p>

              {/* Progress Milestones Strip */}
              <div className="pt-2 space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400">
                  <span className="w-6 h-6 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-center font-bold text-[10px]">01</span>
                  <span><strong>Phase 1:</strong> Foundations in C & C++ (Memory & Logic)</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400">
                  <span className="w-6 h-6 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-center font-bold text-[10px]">02</span>
                  <span><strong>Phase 2:</strong> Java & Python Object-Oriented Programming + DSA</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400">
                  <span className="w-6 h-6 rounded bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-[10px]">03</span>
                  <span><strong>Phase 3:</strong> Modern Full-Stack (React 19, Node.js, Express, MySQL)</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400">
                  <span className="w-6 h-6 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-[10px]">04</span>
                  <span><strong>Phase 4:</strong> Computer Vision (OpenCV) & Practical AI Integrations</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Future Career Goals */}
          <ScrollReveal direction="right" delay={0.3}>
            <div className="p-6 sm:p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xs space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800/80 flex items-center justify-center text-purple-600 dark:text-purple-400">
                  <Rocket className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    Future Career Goals
                  </h3>
                  <div className="text-xs text-slate-500 font-mono">Long-term vision</div>
                </div>
              </div>

              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {aboutDetails.futureCareerGoals}
              </p>

              <div className="p-4 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2 text-xs text-slate-700 dark:text-slate-300">
                <div className="font-semibold text-slate-900 dark:text-white">Key Aspirations:</div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 dark:text-blue-400 font-mono">›</span>
                  <span>Design and engineer reliable, high-availability software products that solve real citizen or business challenges.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 dark:text-blue-400 font-mono">›</span>
                  <span>Participate in and maintain open-source developer tooling and accessible web utilities.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 dark:text-blue-400 font-mono">›</span>
                  <span>Continuously grow into a dependable Technical Lead with deep full-stack and systems competence.</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

        </div>

      </div>
    </section>
  );
};
