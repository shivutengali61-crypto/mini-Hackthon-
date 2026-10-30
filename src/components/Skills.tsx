/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { SKILLS } from '../data/portfolioData.ts';
import { SkillCategory } from '../types.ts';
import { SectionHeading } from './SectionHeading.tsx';
import { ScrollReveal } from './ScrollReveal.tsx';
import {
  Code,
  Layout,
  Server,
  Database,
  Wrench,
  Cpu,
  Search,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categoryList: { id: string; label: string; icon: React.ElementType }[] = [
    { id: 'all', label: 'All Skills', icon: Sparkles },
    { id: 'Programming Languages', label: 'Programming Languages', icon: Code },
    { id: 'Frontend Development', label: 'Frontend Development', icon: Layout },
    { id: 'Backend Development', label: 'Backend Development', icon: Server },
    { id: 'Database Management', label: 'Database Management', icon: Database },
    { id: 'Developer Tools', label: 'Developer Tools', icon: Wrench },
    { id: 'AI and Machine Learning Fundamentals', label: 'AI & ML Fundamentals', icon: Cpu },
  ];

  const filteredSkills = useMemo(() => {
    return SKILLS.filter((skill) => {
      const matchesCategory = selectedCategory === 'all' || skill.category === selectedCategory;
      const query = searchQuery.toLowerCase().trim();
      if (!query) return matchesCategory;

      const matchesSearch =
        skill.name.toLowerCase().includes(query) ||
        skill.description.toLowerCase().includes(query) ||
        skill.tools.some((t) => t.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="skills" className="py-20 border-t border-slate-200 dark:border-slate-900 bg-slate-50/50 dark:bg-slate-950/50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading with Shareable Section URL Link */}
        <ScrollReveal direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
            <SectionHeading
              id="skills"
              badge="03. Technical Competencies"
              title="Technical Skills"
              description="Organized into 6 core engineering categories. Only featuring technologies, languages, and tools with practical hands-on experience."
            />

            {/* Real-time Search Box */}
            <div className="relative w-full md:w-72 mb-8 md:mb-12">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search Python, React, SQL..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-8 py-2 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-lg text-xs text-slate-900 dark:text-slate-200 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-hidden focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors shadow-2xs"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 cursor-pointer"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </ScrollReveal>

        {/* 6 Category Filter Tabs */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="flex items-center gap-1.5 p-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-x-auto mb-10 shadow-xs">
            {categoryList.map((cat) => {
              const Icon = cat.icon;
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`flex items-center gap-2 px-3.5 py-2 text-xs font-medium rounded-lg whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                    isSelected
                      ? 'bg-blue-600 text-white shadow-xs font-semibold'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/40'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Skills Grid */}
        {filteredSkills.length === 0 ? (
          <div className="p-12 text-center bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl">
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-3">No skills found matching "{searchQuery}"</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="px-4 py-2 text-xs font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-500/10 rounded-lg border border-blue-200 dark:border-blue-500/20 hover:bg-blue-100 cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredSkills.map((skill, idx) => (
              <ScrollReveal key={skill.name} direction="up" delay={0.04 * (idx % 6)}>
                <div className="p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-md transition-all flex flex-col justify-between h-full shadow-xs">
                  <div>
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div>
                        <span className="text-[10px] font-mono font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                          {skill.category}
                        </span>
                        <h3 className="text-base font-bold text-slate-900 dark:text-white tracking-tight mt-0.5">
                          {skill.name}
                        </h3>
                      </div>
                      <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-950 px-2 py-0.5 rounded border border-slate-200 dark:border-slate-800 shrink-0">
                        {skill.experience}
                      </span>
                    </div>

                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                      {skill.description}
                    </p>
                  </div>

                  <div className="space-y-3 pt-3 border-t border-slate-100 dark:border-slate-800/60">
                    {/* Proficiency progress gauge */}
                    <div>
                      <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-slate-400 mb-1">
                        <span>Proficiency Index</span>
                        <span className="text-blue-600 dark:text-blue-400 font-bold tabular-nums">{skill.level}%</span>
                      </div>
                      <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-950 rounded-full overflow-hidden border border-slate-200 dark:border-slate-800">
                        <div
                          className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-indigo-500 rounded-full"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>

                    {/* Tools & Key Concepts */}
                    <div className="flex flex-wrap items-center gap-1.5 text-[11px] font-mono text-slate-600 dark:text-slate-400 pt-1">
                      {skill.tools.map((t, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 rounded bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        )}

        {/* 6 Category Summary Strips */}
        <ScrollReveal direction="up" delay={0.2}>
          <div className="mt-14 p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center text-xs shadow-xs">
            <div className="p-2 border-r border-slate-100 dark:border-slate-800 last:border-r-0">
              <div className="font-bold text-slate-900 dark:text-white">Python & Java</div>
              <div className="text-[10px] text-slate-500 font-mono mt-0.5">Core Languages</div>
            </div>
            <div className="p-2 border-r border-slate-100 dark:border-slate-800 last:border-r-0">
              <div className="font-bold text-slate-900 dark:text-white">React 19 & Tailwind</div>
              <div className="text-[10px] text-slate-500 font-mono mt-0.5">Frontend Web</div>
            </div>
            <div className="p-2 border-r border-slate-100 dark:border-slate-800 last:border-r-0">
              <div className="font-bold text-slate-900 dark:text-white">Node.js & Express</div>
              <div className="text-[10px] text-slate-500 font-mono mt-0.5">REST APIs</div>
            </div>
            <div className="p-2 border-r border-slate-100 dark:border-slate-800 last:border-r-0">
              <div className="font-bold text-slate-900 dark:text-white">MySQL & Postgres</div>
              <div className="text-[10px] text-slate-500 font-mono mt-0.5">Relational DBs</div>
            </div>
            <div className="p-2 border-r border-slate-100 dark:border-slate-800 last:border-r-0">
              <div className="font-bold text-slate-900 dark:text-white">Git & GitHub</div>
              <div className="text-[10px] text-slate-500 font-mono mt-0.5">Version Control</div>
            </div>
            <div className="p-2">
              <div className="font-bold text-slate-900 dark:text-white">OpenCV & NumPy</div>
              <div className="text-[10px] text-slate-500 font-mono mt-0.5">AI Fundamentals</div>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
