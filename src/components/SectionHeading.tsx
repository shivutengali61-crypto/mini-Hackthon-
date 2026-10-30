/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Link2, Check } from 'lucide-react';

interface SectionHeadingProps {
  id: string;
  badge: string;
  title: string;
  description?: string;
  alignment?: 'left' | 'center';
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  id,
  badge,
  title,
  description,
  alignment = 'left',
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const fullUrl = `${window.location.origin}${window.location.pathname}#${id}`;
    
    // Copy URL to clipboard
    navigator.clipboard.writeText(fullUrl).then(() => {
      setCopied(true);
      // Update window history without full reload
      if (window.location.hash !== `#${id}`) {
        window.history.pushState(null, '', `#${id}`);
      }
      setTimeout(() => setCopied(false), 2200);
    }).catch(() => {
      // Fallback
      window.location.hash = `#${id}`;
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    });
  };

  return (
    <div className={`mb-12 ${alignment === 'center' ? 'text-center max-w-2xl mx-auto' : ''}`}>
      <div className="flex items-center gap-2 mb-2">
        <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider font-mono">
          {badge}
        </span>
      </div>

      <div className="flex items-center gap-3 group">
        <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          {title}
        </h2>

        {/* Copy Section Link Button */}
        <button
          onClick={handleCopyLink}
          type="button"
          className="p-1.5 rounded-lg text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-500 cursor-pointer relative"
          title={`Copy shareable link to #${id}`}
          aria-label={`Copy link to section ${title}`}
        >
          {copied ? (
            <Check className="w-4 h-4 text-emerald-500" />
          ) : (
            <Link2 className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" />
          )}

          {copied && (
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-slate-900 text-white dark:bg-white dark:text-slate-900 text-[10px] font-mono rounded shadow-md whitespace-nowrap z-30 pointer-events-none">
              Link Copied!
            </span>
          )}
        </button>
      </div>

      {description && (
        <p className="mt-2 text-slate-600 dark:text-slate-400 max-w-2xl text-sm sm:text-base leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};
