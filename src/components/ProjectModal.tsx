/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Project } from '../types.ts';
import {
  X,
  Github,
  ExternalLink,
  Layers,
  Activity,
  CheckCircle,
  Play,
  RotateCcw,
  ShieldCheck,
  AlertTriangle,
  Bus,
  Check,
  Ticket
} from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  initialTab?: 'demo' | 'architecture' | 'challenges';
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  initialTab = 'demo'
}) => {
  const [activeTab, setActiveTab] = useState<'demo' | 'architecture' | 'challenges'>(initialTab);

  // 1. RoadSafe AI Simulator State
  const [hazardLog, setHazardLog] = useState<string[]>([
    'Camera ingestion initialized @ 30 FPS',
    'OpenCV edge detection kernel: 5x5 Gaussian blur active',
    'Zone NH-48 checked: 0 collisions detected'
  ]);
  const [isDetecting, setIsDetecting] = useState(false);
  const [potholesFound, setPotholesFound] = useState(4);

  // 2. Bus Ticket Simulator State
  const [selectedSeats, setSelectedSeats] = useState<string[]>(['12A']);
  const [busRoute, setBusRoute] = useState<'BLR-KLB' | 'BLR-MYS' | 'KLB-HYD'>('BLR-KLB');
  const [bookedStatus, setBookedStatus] = useState(false);

  // 3. Portfolio Sandbox
  const [copiedLink, setCopiedLink] = useState(false);

  if (!project) return null;

  const handleSimulateHazard = () => {
    setIsDetecting(true);
    setPotholesFound((prev) => prev + 1);
    const newLog = `[${new Date().toLocaleTimeString()}] Pothole hazard tagged at km-marker ${Math.floor(Math.random() * 80 + 10)}. Alert dispatched.`;
    setHazardLog((prev) => [newLog, ...prev.slice(0, 3)]);
    setTimeout(() => setIsDetecting(false), 500);
  };

  const handleSeatClick = (seat: string) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== seat));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  const basePrice = busRoute === 'BLR-KLB' ? 850 : busRoute === 'BLR-MYS' ? 350 : 600;
  const totalPrice = selectedSeats.length * basePrice;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/75 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <div
        className="relative w-full max-w-4xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl shadow-slate-900/20 dark:shadow-black/70 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400">
              <span className="text-blue-600 dark:text-blue-400 font-semibold">{project.title}</span>
              <span aria-hidden="true">·</span>
              <span>{project.metrics}</span>
            </div>
            <h2 id="project-modal-title" className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white tracking-tight mt-0.5">
              {project.subtitle}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="flex items-center gap-2 px-6 pt-3 border-b border-slate-200 dark:border-slate-800 bg-slate-100/60 dark:bg-slate-950/40">
          <button
            onClick={() => setActiveTab('demo')}
            className={`px-4 py-2.5 text-xs font-medium border-b-2 transition-colors flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'demo'
                ? 'border-blue-600 dark:border-blue-500 text-blue-600 dark:text-blue-400 font-semibold'
                : 'border-transparent text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
            }`}
          >
            <Play className="w-3.5 h-3.5" />
            <span>Interactive Live Simulation</span>
          </button>

          <button
            onClick={() => setActiveTab('architecture')}
            className={`px-4 py-2.5 text-xs font-medium border-b-2 transition-colors flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'architecture'
                ? 'border-blue-600 dark:border-blue-500 text-blue-600 dark:text-blue-400 font-semibold'
                : 'border-transparent text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Problem Solved & Stack</span>
          </button>

          <button
            onClick={() => setActiveTab('challenges')}
            className={`px-4 py-2.5 text-xs font-medium border-b-2 transition-colors flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'challenges'
                ? 'border-blue-600 dark:border-blue-500 text-blue-600 dark:text-blue-400 font-semibold'
                : 'border-transparent text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Key Engineering Features</span>
          </button>
        </div>

        {/* Tab 1: Interactive Live Sandbox */}
        <div className="p-6">
          {activeTab === 'demo' && (
            <div className="space-y-6">
              
              {/* Project 1: RoadSafe AI Sandbox */}
              {project.id === 'roadsafe-ai-dashboard' && (
                <div className="p-5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
                    <div>
                      <div className="text-xs font-semibold text-slate-900 dark:text-slate-200 flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4 text-amber-500" />
                        <span>Live Hazard Detection & Ingestion Simulator</span>
                      </div>
                      <div className="text-[11px] text-slate-500 font-mono">
                        Simulating Python OpenCV video stream frame analysis & WebSocket dispatch
                      </div>
                    </div>
                    <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2.5 py-1 rounded border border-emerald-200 dark:border-emerald-800">
                      WebSocket: Connected
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
                    <div className="p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg">
                      <div className="text-slate-500 text-[10px]">Potholes Tagged</div>
                      <div className="text-xl font-bold text-amber-600 dark:text-amber-400 tabular-nums">
                        {potholesFound} Hazards
                      </div>
                    </div>
                    <div className="p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg">
                      <div className="text-slate-500 text-[10px]">Processing Latency</div>
                      <div className="text-xl font-bold text-emerald-600 dark:text-emerald-400">
                        ~115 ms
                      </div>
                    </div>
                    <div className="p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg">
                      <div className="text-slate-500 text-[10px]">Emergency Dispatch</div>
                      <div className="text-xl font-bold text-blue-600 dark:text-blue-400">
                        Automatic
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    <button
                      onClick={handleSimulateHazard}
                      disabled={isDetecting}
                      className="px-4 py-2 bg-amber-600 hover:bg-amber-500 disabled:opacity-60 text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <Play className="w-3.5 h-3.5" />
                      <span>{isDetecting ? 'Processing Video Frame...' : 'Simulate Hazard Frame Detection'}</span>
                    </button>

                    <button
                      onClick={() => setPotholesFound(4)}
                      className="px-3 py-2 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Reset Counter</span>
                    </button>
                  </div>

                  <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-3 text-[11px] font-mono space-y-1 text-slate-600 dark:text-slate-400">
                    <div className="text-slate-500 font-semibold mb-1 text-[10px]">Real-Time Incident Stream:</div>
                    {hazardLog.map((log, i) => (
                      <div key={i} className="text-slate-800 dark:text-slate-200">{log}</div>
                    ))}
                  </div>
                </div>
              )}

              {/* Project 2: Bus Ticket Booking Simulator */}
              {project.id === 'bus-ticket-booking-system' && (
                <div className="p-5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
                    <div>
                      <div className="text-xs font-semibold text-slate-900 dark:text-slate-200 flex items-center gap-2">
                        <Bus className="w-4 h-4 text-blue-600" />
                        <span>Interactive Seat Allocation & Fare Engine</span>
                      </div>
                      <div className="text-[11px] text-slate-500 font-mono">
                        Select individual seats to test dynamic fare calculation & reservation lock
                      </div>
                    </div>

                    <div className="flex gap-1">
                      {(['BLR-KLB', 'BLR-MYS', 'KLB-HYD'] as const).map((r) => (
                        <button
                          key={r}
                          onClick={() => setBusRoute(r)}
                          className={`px-2 py-1 rounded text-xs font-mono cursor-pointer ${
                            busRoute === r
                              ? 'bg-blue-600 text-white font-bold'
                              : 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                          }`}
                        >
                          {r}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Seat Grid */}
                  <div className="p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl space-y-3">
                    <div className="text-xs font-semibold text-slate-900 dark:text-white flex justify-between">
                      <span>Click to Select Seats:</span>
                      <span className="font-mono text-blue-600 dark:text-blue-400">
                        {selectedSeats.length} seat(s) selected: {selectedSeats.join(', ') || 'None'}
                      </span>
                    </div>

                    <div className="grid grid-cols-4 sm:grid-cols-8 gap-2 font-mono text-xs text-center">
                      {['1A', '1B', '2A', '2B', '12A', '12B', '14A', '14B'].map((seat) => {
                        const isSelected = selectedSeats.includes(seat);
                        const isBooked = seat === '1A' || seat === '2B';
                        return (
                          <button
                            key={seat}
                            disabled={isBooked}
                            onClick={() => handleSeatClick(seat)}
                            className={`p-2 rounded-lg border font-bold transition-all cursor-pointer ${
                              isBooked
                                ? 'bg-slate-100 dark:bg-slate-800 text-slate-400 border-slate-200 dark:border-slate-700 cursor-not-allowed'
                                : isSelected
                                ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                                : 'bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-300 border-slate-300 dark:border-slate-700 hover:border-blue-400'
                            }`}
                          >
                            {seat} {isBooked ? '(X)' : ''}
                          </button>
                        );
                      })}
                    </div>

                    <div className="flex flex-wrap items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-800 text-xs">
                      <div className="font-mono text-slate-700 dark:text-slate-300">
                        Computed Fare: <strong className="text-emerald-600 dark:text-emerald-400 text-base">₹{totalPrice}</strong>
                      </div>

                      <button
                        onClick={() => {
                          setBookedStatus(true);
                          setTimeout(() => setBookedStatus(false), 2500);
                        }}
                        disabled={selectedSeats.length === 0}
                        className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                      >
                        <Ticket className="w-3.5 h-3.5" />
                        <span>{bookedStatus ? 'E-Ticket Generated!' : 'Simulate E-Booking Pass'}</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Project 3: Portfolio Simulator */}
              {project.id === 'personal-portfolio-website' && (
                <div className="p-5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
                    <div className="text-xs font-semibold text-slate-900 dark:text-slate-200">
                      Shareable URL Hash Router Architecture
                    </div>
                    <span className="text-xs font-mono text-purple-600 dark:text-purple-400">
                      8 Hash Anchors Verified
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    Test the deep-linking section anchors. Clicking any of the links below directly sets the browser URL hash and initiates a smooth scroll:
                  </p>

                  <div className="flex flex-wrap gap-2 text-xs font-mono">
                    {['#home', '#about', '#academics', '#skills', '#projects', '#experience', '#achievements', '#contact'].map((h) => (
                      <button
                        key={h}
                        onClick={() => {
                          onClose();
                          window.location.hash = h;
                          document.getElementById(h.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="px-3 py-1.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-400 text-blue-600 dark:text-blue-400 cursor-pointer"
                      >
                        {h}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Modal Project Links Action Bar */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-800 dark:text-white bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 rounded-lg transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>View GitHub Repository</span>
                  </a>

                  {project.liveDemoUrl && (
                    <a
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-sm transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Open Live Demo</span>
                    </a>
                  )}
                </div>

                <div className="text-xs text-slate-500 font-mono">
                  Verified Project Architecture
                </div>
              </div>

            </div>
          )}

          {/* Tab 2: Problem Solved & Stack */}
          {activeTab === 'architecture' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-1 font-mono">
                  Project Overview
                </h3>
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                  {project.overview}
                </p>
              </div>

              <div className="p-4 bg-blue-50/70 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900/60 rounded-xl space-y-1.5">
                <div className="text-xs font-bold text-blue-900 dark:text-blue-300 uppercase tracking-wider font-mono">
                  Problem Solved:
                </div>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {project.problemSolved}
                </p>
              </div>

              <div className="space-y-2">
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider font-mono">
                  Architectural Layers
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.architecture.map((layer, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg text-xs text-slate-700 dark:text-slate-300 flex items-start gap-2.5"
                    >
                      <span className="w-5 h-5 rounded bg-blue-100 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center font-mono text-[10px] shrink-0 mt-0.5 font-bold">
                        0{idx + 1}
                      </span>
                      <span>{layer}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 font-mono">
                  Technologies & Frameworks
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 text-xs font-mono text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Tab 3: Key Features & Deliverables */}
          {activeTab === 'challenges' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-2">
                  Key Implemented Features
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  Concrete deliverables engineered to solve user experience, data integrity, and system performance requirements.
                </p>
              </div>

              <div className="space-y-3">
                {project.keyFeatures.map((feature, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg text-xs text-slate-700 dark:text-slate-300 flex items-start gap-3"
                  >
                    <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="p-4 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl space-y-1">
                <div className="text-xs font-bold text-slate-900 dark:text-white">Performance Metric & Outcome</div>
                <div className="text-sm font-mono text-blue-600 dark:text-blue-400 font-semibold">{project.metrics}</div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Bottom Footer */}
        <div className="px-6 py-3 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 font-mono">
          <span>Shivakumar · Portfolio Showcase</span>
          <button
            onClick={onClose}
            className="hover:text-slate-900 dark:hover:text-slate-300 transition-colors cursor-pointer"
          >
            Close Viewer [ESC]
          </button>
        </div>
      </div>
    </div>
  );
};
