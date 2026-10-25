import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  onOpenConsultation: () => void;
  onOpenProposalDrawer: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation, onOpenProposalDrawer }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  // Escape key handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Capabilities', href: '#capabilities' },
    { label: 'Systems', href: '#systems-explorer' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Process', href: '#process' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <>
      {/* Top Proposal Context Banner */}
      <div className="bg-[#0E0F12] border-b border-white/5 py-1.5 px-4 text-xs text-[#94A3B8] flex items-center justify-between z-40 relative">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4A373] animate-pulse" aria-hidden="true" />
            <span className="font-medium text-white/90">Robinson Roofing</span>
            <span className="text-white/40 hidden sm:inline">|</span>
            <span className="text-white/60 hidden sm:inline">Website Proposal & Digital Identity</span>
          </div>
          <button
            onClick={onOpenProposalDrawer}
            className="group flex items-center gap-1.5 text-xs text-[#D4A373] hover:text-[#E2B78E] font-medium transition-colors whitespace-nowrap cursor-pointer shrink-0"
            aria-label="Open Proposal Rationale and Checklist"
          >
            <Sparkles className="w-3.5 h-3.5 group-hover:rotate-12 transition-transform duration-300" />
            <span>Proposal Roadmap</span>
            <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>

      {/* Main Reference-Matched Dark Header Bar with Smooth Scroll Transitions */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#141517]/95 backdrop-blur-md border-b border-white/10 shadow-2xl py-3.5'
            : 'bg-[#161719] border-b border-black/40 py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-6">
          
          {/* Left: Custom Reference-Inspired Typographic Logo with Roofline Mark */}
          <a
            href="#"
            className="group flex flex-col justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A373] py-1"
          >
            <div className="flex items-center gap-1.5 tracking-[0.22em] text-white font-bold text-xl sm:text-2xl font-['Plus_Jakarta_Sans'] leading-none">
              <span>ROBINSON</span>
              <motion.svg
                viewBox="0 0 16 16"
                fill="none"
                className="w-4 h-4 text-[#D4A373] inline-block -translate-y-0.5"
                aria-hidden="true"
                whileHover={{ scale: 1.15, y: -2 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              >
                <path d="M2 13L8 3L14 13" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M5.5 13L8 8.5L10.5 13" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </motion.svg>
            </div>
            <span className="text-[10px] sm:text-[11px] tracking-[0.38em] uppercase text-[#D4A373] font-medium mt-1 pl-0.5 group-hover:tracking-[0.42em] transition-all duration-300">
              ROOFING COMPANY
            </span>
          </a>

          {/* Center Navigation Links with Smooth Floating Underline Indicator */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-[#CBD5E1]" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative py-1 text-[#CBD5E1] hover:text-white transition-colors duration-200 group whitespace-nowrap shrink-0"
              >
                <span>{link.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#D4A373] to-[#E2B78E] transition-all duration-300 ease-out group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right: Direct Arrow Contact / Phone Reference Style */}
          <div className="flex items-center gap-4 shrink-0">
            <a
              href="tel:+15557624676"
              className="group hidden sm:flex items-center gap-2 text-white hover:text-[#D4A373] transition-colors py-2 px-3 text-sm sm:text-base font-semibold cursor-pointer tracking-wide"
              aria-label="Call Robinson Roofing at (555) 762-4676"
            >
              <ArrowRight className="w-4 h-4 text-[#D4A373] group-hover:translate-x-1.5 transition-transform duration-200" />
              <span>(555) 762-4676</span>
            </a>

            <motion.button
              onClick={onOpenConsultation}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="hidden md:inline-flex items-center gap-2 px-4.5 py-2.5 text-xs font-semibold text-black bg-[#D4A373] hover:bg-[#E2B78E] rounded-md transition-colors shadow-lg shadow-[#D4A373]/15 cursor-pointer"
            >
              <span>Schedule Estimate</span>
            </motion.button>

            {/* Fluid Morphing Hamburger Icon Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-white hover:text-[#D4A373] rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A373] relative w-10 h-10 flex flex-col items-center justify-center cursor-pointer"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation-drawer"
            >
              <span
                className={`w-6 h-0.5 bg-current rounded-full transition-all duration-300 ease-in-out ${
                  mobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`w-6 h-0.5 bg-current rounded-full my-1.5 transition-all duration-200 ease-in-out ${
                  mobileMenuOpen ? 'opacity-0 scale-x-0' : 'opacity-100'
                }`}
              />
              <span
                className={`w-6 h-0.5 bg-current rounded-full transition-all duration-300 ease-in-out ${
                  mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </button>
          </div>

        </div>
      </header>

      {/* Redesigned Fluid Mobile Drawer with AnimatePresence */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true" aria-label="Mobile Navigation">
            {/* Smooth Animated Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Smooth Animated Slide-In Panel */}
            <motion.div
              id="mobile-navigation-drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 260 }}
              className="fixed inset-y-0 right-0 max-w-xs w-full bg-[#14161A] border-l border-white/10 p-6 shadow-2xl flex flex-col justify-between overflow-y-auto z-10"
            >
              <div>
                {/* Header inside drawer */}
                <div className="flex items-center justify-between pb-6 border-b border-white/10">
                  <div className="flex flex-col">
                    <span className="text-base font-bold tracking-widest text-white font-['Plus_Jakarta_Sans']">ROBINSON</span>
                    <span className="text-[10px] tracking-widest uppercase text-[#D4A373] font-medium">ROOFING COMPANY</span>
                  </div>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 text-white/70 hover:text-white rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Staggered Navigation Links */}
                <div className="mt-8 flex flex-col gap-2">
                  {navLinks.map((link, idx) => (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                      transition={{ delay: 0.08 + idx * 0.05, duration: 0.25 }}
                      className="text-lg font-medium text-[#E2E8F0] hover:text-[#D4A373] transition-colors py-3 border-b border-white/5 flex items-center justify-between group"
                    >
                      <span>{link.label}</span>
                      <ArrowRight className="w-4 h-4 text-white/20 group-hover:text-[#D4A373] group-hover:translate-x-1 transition-all" />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Bottom Actions inside drawer */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ delay: 0.35, duration: 0.3 }}
                className="pt-8 flex flex-col gap-3"
              >
                <a
                  href="tel:+15557624676"
                  className="w-full py-3 text-center text-xs font-semibold text-white/90 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Phone className="w-3.5 h-3.5 text-[#D4A373]" />
                  <span>Call (555) 762-4676</span>
                </a>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenConsultation();
                  }}
                  className="w-full py-3.5 text-center text-sm font-semibold text-black bg-[#D4A373] hover:bg-[#E2B78E] rounded-lg transition-colors shadow-lg cursor-pointer"
                >
                  Schedule Estimate Today
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenProposalDrawer();
                  }}
                  className="w-full py-2.5 text-center text-xs text-white/70 hover:text-white border border-white/10 rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
                >
                  View Proposal Strategy
                </button>
              </motion.div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
