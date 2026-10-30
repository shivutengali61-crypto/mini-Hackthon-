/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { PROJECTS } from '../data/portfolioData.ts';
import { Project } from '../types.ts';
import { ProjectVisualPreview } from './ProjectVisualPreview.tsx';
import { SectionHeading } from './SectionHeading.tsx';
import { ScrollReveal } from './ScrollReveal.tsx';
import { ExternalLink, Github, ArrowUpRight, Play, Eye, CheckCircle2 } from 'lucide-react';

interface ProjectsProps {
  onSelectProject: (project: Project, tab?: 'demo' | 'architecture' | 'challenges') => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  return (
    <section id="projects" className="py-20 border-t border-slate-200 dark:border-slate-900 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading with Shareable Section URL Link */}
        <ScrollReveal direction="up">
          <SectionHeading
            id="projects"
            badge="04. Real-World Engineering"
            title="Featured Software Projects"
            description="Highlighted full-stack and AI applications engineered to solve tangible real-world problems. Each project includes complete architectural overviews, problem statements, source repositories, and live interactive simulations."
          />
        </ScrollReveal>

        {/* 3 Featured Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, idx) => (
            <ScrollReveal key={project.id} direction="up" delay={0.1 * (idx + 1)}>
              <div
                className="group bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full shadow-xs"
              >
                <div>
                  {/* Visual Screenshot Preview with Click to Test */}
                  <div
                    className="cursor-pointer overflow-hidden"
                    onClick={() => onSelectProject(project, 'demo')}
                    title="Click to launch interactive live simulation"
                  >
                    <ProjectVisualPreview type={project.previewType} title={project.title} />
                  </div>

                  {/* Card Content Area */}
                  <div className="p-6">
                    {/* Performance Metric Kicker */}
                    <div className="text-[11px] font-mono text-blue-600 dark:text-blue-400 font-semibold mb-2 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400" />
                      <span className="truncate">{project.metrics}</span>
                    </div>

                    {/* Title */}
                    <h3
                      onClick={() => onSelectProject(project, 'architecture')}
                      className="text-xl font-bold text-slate-900 dark:text-white tracking-tight hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer flex items-center justify-between gap-2"
                    >
                      <span>{project.title}</span>
                      <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </h3>

                    <p className="text-xs text-slate-500 font-medium mb-3">
                      {project.subtitle}
                    </p>

                    {/* Project Overview */}
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                      {project.overview}
                    </p>

                    {/* Problem Solved Callout */}
                    <div className="p-3 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl text-xs text-slate-700 dark:text-slate-300 space-y-1 mb-4">
                      <div className="font-bold text-blue-700 dark:text-blue-400 uppercase text-[10px] tracking-wider font-mono">
                        Problem Solved:
                      </div>
                      <p className="leading-normal text-slate-600 dark:text-slate-400">
                        {project.problemSolved}
                      </p>
                    </div>

                    {/* Technologies Used */}
                    <div className="pt-2 border-t border-slate-200 dark:border-slate-800/80">
                      <div className="text-[10px] font-mono font-semibold text-slate-500 uppercase tracking-wider mb-2">
                        Technologies Used:
                      </div>
                      <div className="flex flex-wrap gap-1.5 font-mono text-[11px]">
                        {project.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 rounded bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 text-[10px]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Actions: Live Demo, Source Code, Details */}
                <div className="p-4 bg-white dark:bg-slate-950/80 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    {/* Live Demo Button */}
                    <button
                      onClick={() => onSelectProject(project, 'demo')}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors shadow-xs cursor-pointer"
                      title="Run live interactive sandbox simulation"
                    >
                      <Play className="w-3.5 h-3.5" />
                      <span>Live Demo</span>
                    </button>

                    {/* Source Code Button */}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white rounded-lg transition-colors cursor-pointer"
                      title="Inspect GitHub repository"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Source</span>
                    </a>
                  </div>

                  {/* Case Study Details Button */}
                  <button
                    onClick={() => onSelectProject(project, 'architecture')}
                    className="inline-flex items-center gap-1 text-xs text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Details</span>
                  </button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};
