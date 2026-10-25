import React from 'react';
import { ArrowRight, Sparkles, Shield, Phone } from 'lucide-react';

interface FooterProps {
  onOpenConsultation: () => void;
  onOpenProposalDrawer: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenConsultation, onOpenProposalDrawer }) => {
  return (
    <footer className="bg-[#121315] border-t border-white/10 text-xs text-[#94A3B8]">
      {/* Bottom Pre-Footer Callout matching reference styling */}
      <div className="border-b border-white/5 py-16 bg-[#161719]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-light text-white tracking-tight mb-4">
            Protection Above. <span className="font-normal text-[#D4A373]">For Your Life Below.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed mb-8 max-w-xl mx-auto">
            Schedule a thorough evaluation for roof leaks, storm assessment, or complete architectural replacement with Robinson Roofing.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenConsultation}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white text-black font-bold text-sm shadow-xl hover:bg-slate-100 transition-all cursor-pointer"
            >
              Schedule Estimate Today
            </button>
            <button
              onClick={onOpenProposalDrawer}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-white bg-white/10 hover:bg-white/15 border border-white/10 text-xs font-medium transition-colors cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#D4A373]" />
              <span>Review Proposal Strategy</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5 tracking-[0.22em] text-white font-bold text-lg font-['Plus_Jakarta_Sans']">
                <span>ROBINSON</span>
                <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5 text-[#D4A373]" aria-hidden="true">
                  <path d="M2 13L8 3L14 13" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M5.5 13L8 8.5L10.5 13" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="text-[10px] tracking-[0.38em] uppercase text-[#D4A373] font-medium">
                ROOFING COMPANY
              </span>
            </div>
            
            <p className="text-xs text-[#94A3B8] leading-relaxed max-w-sm pt-2">
              A proposed digital identity and web experience for Robinson Roofing. Crafted with architectural clarity, verified engineering specs, and seamless client enquiry workflows.
            </p>

            <div className="pt-1 flex items-center gap-2 text-[11px] text-[#D4A373]">
              <Shield className="w-3.5 h-3.5" />
              <span>Agency Proposal Demo · Client Concept Edition</span>
            </div>
          </div>

          {/* Quick Service Links */}
          <div className="md:col-span-3 space-y-2.5">
            <span className="text-xs font-semibold text-white uppercase tracking-wider block">
              Roofing Systems
            </span>
            <ul className="space-y-1.5 text-[#94A3B8]">
              <li><a href="#capabilities" className="hover:text-white transition-colors">Standing Seam Metal</a></li>
              <li><a href="#capabilities" className="hover:text-white transition-colors">Artisanal Slate & Tile</a></li>
              <li><a href="#capabilities" className="hover:text-white transition-colors">Commercial Flat Membrane</a></li>
              <li><a href="#capabilities" className="hover:text-white transition-colors">Protective Shield Coatings</a></li>
            </ul>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-2 space-y-2.5">
            <span className="text-xs font-semibold text-white uppercase tracking-wider block">
              Exploration
            </span>
            <ul className="space-y-1.5 text-[#94A3B8]">
              <li><a href="#systems-explorer" className="hover:text-white transition-colors">Systems Anatomy</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#process" className="hover:text-white transition-colors">5-Stage Journey</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">Technical FAQ</a></li>
            </ul>
          </div>

          {/* Action Link */}
          <div className="md:col-span-2 space-y-2.5">
            <span className="text-xs font-semibold text-white uppercase tracking-wider block">
              Direct Contact
            </span>
            <a
              href="tel:+15557624676"
              className="text-left text-sm font-semibold text-white hover:text-[#D4A373] transition-colors flex items-center gap-1.5 cursor-pointer"
              aria-label="Call Robinson Roofing at (555) 762-4676"
            >
              <ArrowRight className="w-4 h-4 text-[#D4A373]" />
              <span>(555) 762-4676</span>
            </a>
            <p className="text-[11px] text-[#94A3B8] leading-normal pt-1">
              Ready for production telephone and CRM webhook integration.
            </p>
          </div>

        </div>

        {/* Bottom Disclaimers */}
        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-[#64748B]">
          <p>© {new Date().getFullYear()} Robinson Roofing Company. Proposed website demo.</p>
          <p className="text-center sm:text-right">Governing Principle: Invent the design, not the facts.</p>
        </div>

      </div>
    </footer>
  );
};
