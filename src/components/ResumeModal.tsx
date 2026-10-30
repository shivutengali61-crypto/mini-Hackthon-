/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PERSONAL_INFO, ACADEMICS, PROJECTS, EXPERIENCES, ACHIEVEMENTS } from '../data/portfolioData.ts';
import { downloadResumeFile, getResumePlainText } from '../utils/resumeDownload.ts';
import { X, Printer, Copy, Check, Download, Mail, MapPin, Github, Linkedin, Building2 } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const textResume = getResumePlainText();
    navigator.clipboard.writeText(textResume);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/75 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-title"
    >
      <div
        className="relative w-full max-w-4xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl shadow-slate-900/30 dark:shadow-black/80 overflow-hidden my-6 flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Controls Header */}
        <div className="flex flex-wrap items-center justify-between px-6 py-4 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 shrink-0 gap-3">
          <div className="flex items-center gap-3">
            <h2 id="resume-title" className="text-base font-bold text-slate-900 dark:text-white tracking-tight">
              Curriculum Vitae — Shivakumar
            </h2>
            <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-500/20">
              ATS-Optimized
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={downloadResumeFile}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 hover:bg-emerald-100 dark:hover:bg-emerald-500/20 border border-emerald-200 dark:border-emerald-500/30 rounded-lg transition-colors cursor-pointer"
              title="Download Markdown resume file"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download File</span>
            </button>

            <button
              onClick={handleCopyText}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg transition-colors cursor-pointer"
              title="Copy plain markdown text"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors shadow-xs cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors ml-1 cursor-pointer"
              aria-label="Close resume viewer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Document Sheet */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 font-sans print:bg-white print:text-black">
          
          {/* Document Header */}
          <div className="border-b border-slate-200 dark:border-slate-800 pb-6 print:border-black">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-1 print:text-black">
              SHIVAKUMAR
            </h1>
            <p className="text-sm sm:text-base font-semibold text-blue-600 dark:text-blue-400 font-mono mb-2 print:text-blue-800">
              Aspiring Software Developer · Final Year Computer Science Student
            </p>

            <div className="text-xs font-mono text-slate-600 dark:text-slate-400 mb-3 flex items-center gap-2">
              <Building2 className="w-3.5 h-3.5 text-slate-500" />
              <span>{PERSONAL_INFO.collegeName} ({PERSONAL_INFO.universityName})</span>
            </div>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-500 dark:text-slate-400 font-mono print:text-slate-700">
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-slate-400 print:hidden" />
                <span>{PERSONAL_INFO.email}</span>
              </span>
              <span aria-hidden="true" className="text-slate-300 dark:text-slate-700 print:text-slate-400">·</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-slate-400 print:hidden" />
                <span>{PERSONAL_INFO.location}</span>
              </span>
              <span aria-hidden="true" className="text-slate-300 dark:text-slate-700 print:text-slate-400">·</span>
              <span className="flex items-center gap-1">
                <Github className="w-3.5 h-3.5 text-slate-400 print:hidden" />
                <span>github.com/shivutengali</span>
              </span>
              <span aria-hidden="true" className="text-slate-300 dark:text-slate-700 print:text-slate-400">·</span>
              <span className="flex items-center gap-1">
                <Linkedin className="w-3.5 h-3.5 text-slate-400 print:hidden" />
                <span>linkedin.com/in/shivutengali</span>
              </span>
            </div>
          </div>

          {/* Section: Academic Qualifications */}
          <div>
            <h3 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3 font-mono print:text-black">
              Academic Qualifications
            </h3>
            <div className="p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl space-y-2 text-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                <strong className="text-slate-900 dark:text-white font-bold">{ACADEMICS.degree}</strong>
                <span className="font-mono text-emerald-600 dark:text-emerald-400 font-bold">{ACADEMICS.cgpaOrPercentage}</span>
              </div>
              <div className="text-slate-600 dark:text-slate-400">
                {ACADEMICS.department} · {ACADEMICS.institution} ({ACADEMICS.university})
              </div>
              <div className="text-slate-500 font-mono text-[11px]">
                Status: {ACADEMICS.currentStatus} ({ACADEMICS.period})
              </div>
            </div>
          </div>

          {/* Section: Featured Projects */}
          <div>
            <h3 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3 font-mono print:text-black">
              Featured Software Projects
            </h3>
            <div className="space-y-3">
              {PROJECTS.map((proj) => (
                <div key={proj.id} className="p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-xs space-y-1">
                  <div className="flex items-center justify-between">
                    <strong className="text-slate-900 dark:text-white font-bold">{proj.title}</strong>
                    <span className="font-mono text-blue-600 dark:text-blue-400 text-[11px]">{proj.metrics}</span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300">{proj.overview}</p>
                  <p className="text-slate-500 dark:text-slate-400"><strong>Problem Solved:</strong> {proj.problemSolved}</p>
                  <div className="text-[10px] font-mono text-slate-500">
                    Tech: {proj.technologies.join(' · ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Practical Experience */}
          <div>
            <h3 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3 font-mono print:text-black">
              Experience & Practical Training
            </h3>
            <div className="space-y-4">
              {EXPERIENCES.map((exp) => (
                <div key={exp.id} className="space-y-1 text-xs">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <div>
                      <strong className="text-slate-900 dark:text-white">{exp.role}</strong>
                      <span className="text-slate-500 ml-2">@ {exp.organization}</span>
                      <span className="ml-2 px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-[10px] font-mono text-slate-600 dark:text-slate-300">
                        {exp.status}
                      </span>
                    </div>
                    <span className="text-slate-400 font-mono text-[11px]">{exp.period}</span>
                  </div>
                  <ul className="list-disc list-inside space-y-0.5 text-slate-600 dark:text-slate-300">
                    {exp.contributions.map((c, i) => (
                      <li key={i}>{c}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Achievements & Certifications */}
          <div>
            <h3 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2 font-mono print:text-black">
              Achievements & Certifications
            </h3>
            <ul className="list-disc list-inside space-y-1 text-xs text-slate-600 dark:text-slate-300">
              {ACHIEVEMENTS.map((ach) => (
                <li key={ach.id}>
                  <strong className="text-slate-900 dark:text-white">{ach.title}</strong> — {ach.organization} ({ach.year})
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 font-mono shrink-0">
          <span>Shivakumar · Updated Q4 2026</span>
          <button
            onClick={onClose}
            className="hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
          >
            Close Viewer
          </button>
        </div>
      </div>
    </div>
  );
};
