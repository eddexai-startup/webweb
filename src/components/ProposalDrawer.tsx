import React, { useState } from 'react';
import { X, CheckSquare, Square, Sparkles, Palette, Type, Layers, CheckCircle, Shield } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ProposalDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProposalDrawer: React.FC<ProposalDrawerProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'strategy' | 'tokens' | 'checklist'>('strategy');
  
  // Interactive checklist state for the business owner
  const [checklist, setChecklist] = useState<{ id: string; label: string; details: string; checked: boolean }[]>([
    {
      id: 'item-1',
      label: 'Confirm Official Business Address & Service Territory',
      details: 'Define municipal coverage radius and headquarters address for localized SEO schema.',
      checked: false,
    },
    {
      id: 'item-2',
      label: 'Supply Dispatch Telephone & Dedicated Enquiries Inbox',
      details: 'Connect contact routing to company email or direct phone dispatcher.',
      checked: false,
    },
    {
      id: 'item-3',
      label: 'Upload Real Portfolio Photography',
      details: 'Replace illustrative concept renderings with high-resolution photos of Robinson Roofing past installations.',
      checked: false,
    },
    {
      id: 'item-4',
      label: 'Verify Manufacturer Certifications & Warranties',
      details: 'Confirm exact master contractor status (e.g., GAF Master Elite, Carlisle SynTec, PAC-CLAD, VMZINC).',
      checked: false,
    },
    {
      id: 'item-5',
      label: 'Verify License, Bond & Workers’ Compensation Numbers',
      details: 'Insert certified registration credentials into footer trust badge.',
      checked: false,
    },
    {
      id: 'item-6',
      label: 'Connect Consultation Form to CRM / Webhook',
      details: 'Link the interactive scoping estimator directly into JobNimbus, AccuLynx, or Zapier.',
      checked: false,
    },
  ]);

  const toggleChecklistItem = (id: string) => {
    setChecklist((prev) =>
      prev.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item))
    );
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 overflow-hidden flex justify-end"
          role="dialog"
          aria-modal="true"
          aria-labelledby="proposal-drawer-title"
        >
          {/* Smooth Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Smooth Spring Drawer Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 260 }}
            className="relative w-full max-w-2xl bg-[#0F131A] border-l border-white/10 shadow-2xl flex flex-col h-full z-10 overflow-hidden"
          >
            {/* Drawer Header */}
            <div className="p-6 border-b border-white/10 flex items-center justify-between bg-[#131722]">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#D4A373]/20 border border-[#D4A373] flex items-center justify-center text-[#D4A373]">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h2 id="proposal-drawer-title" className="text-base font-bold text-white">
                    Robinson Roofing · Proposal Presentation Deck
                  </h2>
                  <p className="text-xs text-[#94A3B8]">Digital Agency Concept & Production Roadmap</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 text-[#94A3B8] hover:text-white rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
                aria-label="Close Proposal Drawer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Tab Navigation */}
            <div className="flex border-b border-white/10 bg-[#0B0D11] px-6">
              {[
                { id: 'strategy', label: 'Brand Rationale', icon: Sparkles },
                { id: 'tokens', label: 'Design System & Tokens', icon: Palette },
                { id: 'checklist', label: 'Production Launch Checklist', icon: CheckCircle },
              ].map((tab) => {
                const Icon = tab.icon;
                const isSelected = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`py-3.5 px-4 text-xs font-semibold flex items-center gap-2 border-b-2 transition-all cursor-pointer whitespace-nowrap relative ${
                      isSelected
                        ? 'border-[#D4A373] text-white bg-white/5'
                        : 'border-transparent text-[#94A3B8] hover:text-white'
                    }`}
                  >
                    <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-[#D4A373]' : ''}`} />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Drawer Content Body */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 text-sm text-[#CBD5E1]">
              <AnimatePresence mode="wait">
                {activeTab === 'strategy' && (
                  <motion.div
                    key="strategy"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-6"
                  >
                    <div className="p-4 rounded-xl bg-[#141822] border border-white/5">
                      <span className="text-xs font-mono font-bold text-[#D4A373] uppercase tracking-wider block mb-1">
                        Agency Direction
                      </span>
                      <h3 className="text-base font-bold text-white mb-2">
                        Positioning: Architectural Precision & Resilience
                      </h3>
                      <p className="text-xs text-[#94A3B8] leading-relaxed">
                        Moving beyond ordinary contractor websites to position Robinson Roofing alongside luxury architectural builders and commercial enclosure specialists.
                      </p>
                    </div>

                    <div className="space-y-3 text-xs">
                      <div className="p-3.5 rounded-lg bg-[#11151D] border border-white/5">
                        <strong className="text-white block mb-1">1. Invent the Design, Not the Facts</strong>
                        <p className="text-[#94A3B8]">
                          Visuals, layout hierarchy, and engineering copy are proposed. No fake reviews or fabricated years of history are included.
                        </p>
                      </div>
                      <div className="p-3.5 rounded-lg bg-[#11151D] border border-white/5">
                        <strong className="text-white block mb-1">2. Interactive Systems Education</strong>
                        <p className="text-[#94A3B8]">
                          The multi-tier Roof Systems Inspector educates clients on why standing seam and architectural membranes outperform ordinary roofing.
                        </p>
                      </div>
                      <div className="p-3.5 rounded-lg bg-[#11151D] border border-white/5">
                        <strong className="text-white block mb-1">3. Live Scope Configurator</strong>
                        <p className="text-[#94A3B8]">
                          Clients configure roof pitch, area, and service type, pre-qualifying leads with immediate engineering calculations.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'tokens' && (
                  <motion.div
                    key="tokens"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-6"
                  >
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3 flex items-center gap-2">
                        <Palette className="w-4 h-4 text-[#D4A373]" />
                        <span>Curated Color System</span>
                      </h4>
                      <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                        <div className="p-3 rounded-lg bg-[#0B0D11] border border-white/10">
                          <div className="w-full h-8 rounded bg-[#0B0D11] border border-white/20 mb-2" />
                          <span className="text-white font-bold block">Obsidian Slate (#0B0D11)</span>
                          <span className="text-[#94A3B8]">Primary Canvas</span>
                        </div>
                        <div className="p-3 rounded-lg bg-[#161719] border border-white/10">
                          <div className="w-full h-8 rounded bg-[#161719] border border-white/20 mb-2" />
                          <span className="text-white font-bold block">Matte Charcoal (#161719)</span>
                          <span className="text-[#94A3B8]">Header & Surfaces</span>
                        </div>
                        <div className="p-3 rounded-lg bg-[#D4A373] text-black">
                          <div className="w-full h-8 rounded bg-[#D4A373] mb-2" />
                          <span className="font-bold block">Warm Gold (#D4A373)</span>
                          <span className="text-black/80">Architectural Accent</span>
                        </div>
                        <div className="p-3 rounded-lg bg-white text-black">
                          <div className="w-full h-8 rounded bg-white mb-2" />
                          <span className="font-bold block">Pure White (#FFFFFF)</span>
                          <span className="text-black/80">Action Callouts</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3 flex items-center gap-2">
                        <Type className="w-4 h-4 text-[#D4A373]" />
                        <span>Typography Pairings</span>
                      </h4>
                      <div className="p-4 rounded-xl bg-[#11151D] border border-white/5 space-y-3 text-xs">
                        <div>
                          <span className="text-[#94A3B8] block">Display & Headings:</span>
                          <p className="text-sm font-bold text-white font-['Plus_Jakarta_Sans']">
                            Plus Jakarta Sans (Light 300 to Bold 800)
                          </p>
                        </div>
                        <div>
                          <span className="text-[#94A3B8] block">Technical Specs & Metrics:</span>
                          <p className="text-sm font-mono text-[#D4A373]">
                            JetBrains Mono (Tabular Numerals)
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'checklist' && (
                  <motion.div
                    key="checklist"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-4"
                  >
                    <div className="p-4 rounded-xl bg-[#141822] border border-white/5 text-xs text-[#94A3B8]">
                      <strong className="text-white block mb-1">Production Handover Checklist:</strong>
                      Confirm these items with Robinson Roofing before launching live to the web.
                    </div>

                    <div className="space-y-3">
                      {checklist.map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          role="checkbox"
                          aria-checked={item.checked}
                          onClick={() => toggleChecklistItem(item.id)}
                          className={`w-full text-left p-4 rounded-xl border transition-all cursor-pointer flex items-start gap-3.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A373] ${
                            item.checked
                              ? 'bg-[#121A16] border-emerald-500/40 text-emerald-200'
                              : 'bg-[#11151D] border-white/5 hover:border-white/20'
                          }`}
                        >
                          <span className="mt-0.5 text-[#D4A373] shrink-0" aria-hidden="true">
                            {item.checked ? (
                              <CheckSquare className="w-4 h-4 text-emerald-400" />
                            ) : (
                              <Square className="w-4 h-4 text-[#94A3B8]" />
                            )}
                          </span>
                          <div>
                            <span className={`text-xs font-semibold block ${item.checked ? 'line-through text-emerald-300' : 'text-white'}`}>
                              {item.label}
                            </span>
                            <span className="text-[11px] text-[#94A3B8] block mt-0.5">
                              {item.details}
                            </span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Drawer Footer */}
            <div className="p-5 border-t border-white/10 bg-[#121620] flex items-center justify-between">
              <span className="text-xs text-[#94A3B8]">
                {checklist.filter((i) => i.checked).length} of {checklist.length} items verified
              </span>
              <motion.button
                onClick={onClose}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="px-4 py-2 text-xs font-semibold text-black bg-[#D4A373] hover:bg-[#E2B78E] rounded-lg transition-colors cursor-pointer"
              >
                Back to Website Demo
              </motion.button>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
