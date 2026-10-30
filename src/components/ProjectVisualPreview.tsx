/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { AlertTriangle, Bus, Globe, CheckCircle2, Video, ShieldCheck, MapPin } from 'lucide-react';

interface ProjectVisualPreviewProps {
  type: 'roadsafe' | 'bus' | 'portfolio';
  title: string;
}

export const ProjectVisualPreview: React.FC<ProjectVisualPreviewProps> = ({ type, title }) => {
  return (
    <div className="relative w-full h-56 bg-slate-900 border-b border-slate-800 overflow-hidden select-none group-hover:border-slate-700 transition-colors">
      {/* Top Browser/Window Chrome */}
      <div className="flex items-center justify-between px-3.5 py-2 bg-slate-950/90 border-b border-slate-800 text-[11px] text-slate-400 font-mono">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          <span className="ml-2 text-slate-400 truncate max-w-[200px]">
            {type === 'roadsafe'
              ? 'roadsafe-ai.live/dashboard'
              : type === 'bus'
              ? 'busticket-express.in/booking'
              : 'shivakumar.dev/#home'}
          </span>
        </div>
        <div className="text-[10px] text-blue-400 font-mono bg-blue-500/10 px-1.5 py-0.5 rounded border border-blue-500/20">
          {type === 'roadsafe' ? 'AI Telemetry' : type === 'bus' ? 'Seat Matrix' : 'React 19 SPA'}
        </div>
      </div>

      {/* Screenshot / Mockup Preview per Project */}
      <div className="p-3.5 h-[calc(100%-33px)] flex flex-col justify-between overflow-hidden bg-slate-950/60">
        
        {/* 1. RoadSafe AI Dashboard */}
        {type === 'roadsafe' && (
          <div className="space-y-2.5 h-full flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-md bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
                  <AlertTriangle className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-200">Road Hazard Feed (Live Vision)</div>
                  <div className="text-[10px] text-slate-400 font-mono">OpenCV Model · 30 FPS Ingestion</div>
                </div>
              </div>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                Pothole Detected: 94.2%
              </span>
            </div>

            {/* Simulated Vision Camera + Sensor Strip */}
            <div className="grid grid-cols-3 gap-2">
              <div className="col-span-2 bg-slate-950 rounded-lg border border-slate-800 p-2 relative flex flex-col justify-between overflow-hidden">
                <div className="flex items-center justify-between text-[9px] font-mono text-slate-400">
                  <span className="flex items-center gap-1 text-red-400 font-semibold">
                    <Video className="w-3 h-3 animate-pulse" /> LIVE STREAM
                  </span>
                  <span>Zone: NH-48 Corridor</span>
                </div>
                {/* Simulated bounding box */}
                <div className="my-1 py-2 px-3 border border-dashed border-amber-400 bg-amber-500/10 rounded text-center">
                  <span className="text-[9px] font-mono text-amber-300 font-bold">
                    [POTHOLE_ALERT_04] Depth ~7.2cm
                  </span>
                </div>
                <div className="text-[9px] font-mono text-slate-500 flex justify-between">
                  <span>Lat: 15.3647° N</span>
                  <span>Long: 75.1240° E</span>
                </div>
              </div>

              <div className="bg-slate-950 rounded-lg border border-slate-800 p-2 flex flex-col justify-between text-[9px] font-mono">
                <div>
                  <div className="text-slate-500">Hazard Triage</div>
                  <div className="text-xs font-bold text-amber-400 mt-0.5">High Risk</div>
                </div>
                <div>
                  <div className="text-slate-500">Dispatch Status</div>
                  <div className="text-emerald-400 font-semibold">Alert Transmitted</div>
                </div>
                <div className="text-slate-500 text-[8px]">Latency: 112ms</div>
              </div>
            </div>

            <div className="flex items-center justify-between text-[10px] text-slate-500 font-mono pt-1 border-t border-slate-800/60">
              <span>Stack: Python OpenCV · React · Node.js</span>
              <span className="text-blue-400 font-semibold">Interactive Demo Available</span>
            </div>
          </div>
        )}

        {/* 2. Bus Ticket Booking System */}
        {type === 'bus' && (
          <div className="space-y-2 h-full flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-md bg-blue-500/20 border border-blue-500/40 flex items-center justify-center text-blue-400">
                  <Bus className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-200">Express Reservation Engine</div>
                  <div className="text-[10px] text-slate-400 font-mono">Bengaluru → Kalaburagi Express</div>
                </div>
              </div>
              <span className="text-[10px] font-mono text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">
                Fare: ₹850
              </span>
            </div>

            {/* Interactive Seat Matrix Preview */}
            <div className="bg-slate-950 rounded-lg border border-slate-800 p-2 space-y-1.5">
              <div className="flex items-center justify-between text-[9px] font-mono text-slate-400 pb-1 border-b border-slate-800/80">
                <span>Select Passenger Seats:</span>
                <span className="text-emerald-400">Seat 12A Selected</span>
              </div>

              <div className="grid grid-cols-6 gap-1 text-center font-mono text-[8px]">
                <div className="p-1 rounded bg-slate-800 text-slate-500">1A (X)</div>
                <div className="p-1 rounded bg-blue-600 text-white font-bold">12A (✓)</div>
                <div className="p-1 rounded bg-slate-900 border border-slate-700 text-slate-300">14A</div>
                <div className="p-1 rounded bg-slate-900 border border-slate-700 text-slate-300">14B</div>
                <div className="p-1 rounded bg-slate-800 text-slate-500">16A (X)</div>
                <div className="p-1 rounded bg-slate-900 border border-slate-700 text-slate-300">16B</div>
              </div>

              <div className="flex items-center justify-between text-[9px] text-slate-400 font-mono pt-0.5">
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded bg-blue-600 inline-block" /> Selected</span>
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded bg-slate-700 inline-block" /> Booked</span>
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded border border-slate-600 inline-block" /> Available</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-[10px] text-slate-500 font-mono pt-1 border-t border-slate-800/60">
              <span>Stack: React · Express · MySQL</span>
              <span className="text-emerald-400">Zero Double-Bookings Guaranteed</span>
            </div>
          </div>
        )}

        {/* 3. Personal Portfolio Website */}
        {type === 'portfolio' && (
          <div className="space-y-2 h-full flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-md bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-purple-400">
                  <Globe className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-200">Developer Portfolio Architecture</div>
                  <div className="text-[10px] text-slate-400 font-mono">React 19 · URL Hash Section Routing</div>
                </div>
              </div>
              <span className="text-[10px] font-mono text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/20">
                100% Accessible
              </span>
            </div>

            {/* Layout Wireframe Mockup */}
            <div className="bg-slate-950 rounded-lg border border-slate-800 p-2 text-[9px] font-mono space-y-1">
              <div className="flex items-center justify-between text-slate-500 border-b border-slate-800/80 pb-1">
                <span>Active Routing:</span>
                <span className="text-blue-400 font-semibold">/#academics | /#skills | /#projects</span>
              </div>
              <div className="grid grid-cols-3 gap-1 pt-0.5 text-center">
                <div className="p-1 rounded bg-slate-900 border border-slate-800 text-slate-300">
                  Dual Theme
                </div>
                <div className="p-1 rounded bg-slate-900 border border-slate-800 text-slate-300">
                  Copy Section Link
                </div>
                <div className="p-1 rounded bg-slate-900 border border-slate-800 text-slate-300">
                  Interactive Modals
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between text-[10px] text-slate-500 font-mono pt-1 border-t border-slate-800/60">
              <span>Stack: React 19 · TypeScript · Tailwind</span>
              <span className="text-purple-400">Production Optimized</span>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
