import React from 'react';
import { ArrowRight, Compass, Shield, Maximize2, ShieldCheck } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ROOF_IMAGES, FALLBACK_IMAGES } from '../assets/images';

interface HeroProps {
  onOpenConsultation: () => void;
  onExploreSystems: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation, onExploreSystems }) => {
  const { scrollY } = useScroll();
  // Subtle parallax on desktop
  const imageY = useTransform(scrollY, [0, 600], [0, 80]);

  return (
    <section className="relative w-full bg-[#111215] overflow-hidden">
      {/* Full-Bleed Edge-to-Edge Hero Image Container matching reference */}
      <div className="relative w-full min-h-[640px] sm:min-h-[700px] lg:min-h-[760px] flex flex-col justify-between">
        
        {/* Full-Width Background Architectural Photography with scale & opacity reveal */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.div
            style={{ y: imageY }}
            initial={{ scale: 1.08, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-[115%] -top-[7.5%] relative"
          >
            <img
              src={ROOF_IMAGES.heroRoof}
              alt="Modern architectural residence with dusk lighting and precision metal roof"
              width={1920}
              height={1080}
              decoding="async"
              className="w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
              loading="eager"
              onError={(e) => {
                const target = e.currentTarget;
                if (!target.src.includes(FALLBACK_IMAGES.heroRoof)) {
                  target.src = FALLBACK_IMAGES.heroRoof;
                }
              }}
            />
            {/* Cinematic Scrim matching reference (darkened gradient on left for high-contrast crisp text) */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/20" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/30" />
          </motion.div>
        </div>

        {/* Precision Engineering Overlays & Coordinate Markers (Slow, Subtle, Technical) */}
        <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden select-none" aria-hidden="true">
          {/* Subtle architectural grid lines */}
          <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px]" />
          
          {/* Top-Right Technical Coordinates */}
          <div className="absolute top-8 right-8 hidden xl:flex flex-col items-end text-[10px] font-mono text-white/35 tracking-widest space-y-1">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4A373]/60 animate-ping" />
              <span>ROBINSON // CAD SPEC V.26</span>
            </div>
            <span>ELEV: +14.2M · PITCH: 4:12 TO 1.5:12</span>
            <span>WIND CLASS: UL 580 CAT-90</span>
          </div>

          {/* Architectural Alignment Crosshairs */}
          <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden md:block text-white/20 font-mono text-[9px] space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-4 h-[1px] bg-white/20" />
              <span>DATUM A</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-[1px] bg-white/20" />
              <span>SEAM CL 01</span>
            </div>
          </div>
        </div>

        {/* Hero Content Overlay: Top / Middle Left */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-22 lg:pt-28 w-full">
          <div className="max-w-2xl text-left">
            
            {/* Eyebrow with reveal */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-2.5 text-xs font-semibold tracking-wider uppercase text-[#D4A373] mb-4"
            >
              <span className="w-6 h-[1.5px] bg-[#D4A373]" />
              <span>Engineered Architectural Enclosures</span>
            </motion.div>

            {/* Main Headline line-by-line reveal matching reference */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white tracking-tight leading-[1.08] mb-6 text-balance">
              <span className="block overflow-hidden pb-1">
                <motion.span
                  initial={{ y: '100%', opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="block"
                >
                  Protection Above
                </motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span
                  initial={{ y: '100%', opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="block font-normal text-white"
                >
                  For Your Life Below
                </motion.span>
              </span>
            </h1>

            {/* Subtitle / Emotional Value Proposition */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-base sm:text-lg text-white/90 font-light leading-relaxed max-w-xl text-balance drop-shadow-sm mb-8"
            >
              A Robinson roof isn’t just shingles and nails—it’s a promise that the life you’re building is protected from whatever comes.
            </motion.p>

            {/* Quick Secondary Specs with staggered entrance */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.75 }}
              className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-white/80 font-medium"
            >
              <span className="flex items-center gap-1.5 hover:text-white transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4A373]" />
                Class 4 Impact & Uplift Rated
              </span>
              <span className="text-white/30 hidden sm:inline">·</span>
              <span className="flex items-center gap-1.5 hover:text-white transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4A373]" />
                Concealed Fastener Standing Seam
              </span>
              <span className="text-white/30 hidden sm:inline">·</span>
              <span className="flex items-center gap-1.5 hover:text-white transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4A373]" />
                Artisanal Natural Slate & Tile
              </span>
            </motion.div>
          </div>
        </div>

        {/* Center-Bottom Floating Action Pill matching reference with spring hover */}
        <div className="relative z-20 w-full flex justify-center px-4 pb-10 sm:pb-14 pt-8">
          <motion.button
            onClick={onOpenConsultation}
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.9, type: 'spring', damping: 20 }}
            whileHover={{ scale: 1.03, y: -4, boxShadow: '0 25px 50px -12px rgba(212, 163, 115, 0.25)' }}
            whileTap={{ scale: 0.98 }}
            className="group max-w-md w-full sm:w-auto px-8 sm:px-14 py-4 sm:py-5 rounded-full bg-white text-black shadow-2xl transition-colors cursor-pointer border border-white/50 flex flex-col items-center justify-center text-center relative overflow-hidden"
            aria-label="Schedule Estimate Today: Roof Leak, Damage, or Replacement"
          >
            {/* Subtle glow highlight on hover */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D4A373]/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out pointer-events-none" />
            
            <span className="text-base sm:text-lg font-bold tracking-tight text-slate-900 group-hover:text-black leading-snug flex items-center gap-2">
              <span>Schedule Estimate Today</span>
              <ArrowRight className="w-4 h-4 text-[#C87D4B] group-hover:translate-x-1 transition-transform duration-200" />
            </span>
            <span className="text-xs sm:text-sm font-medium text-slate-600 mt-0.5">
              Roof Leak, Damage, or Replacement
            </span>
          </motion.button>
        </div>

      </div>

      {/* Sub-Hero Architectural Metric Strip with entrance animations */}
      <div className="bg-[#161719] border-y border-white/10 py-7">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {[
            { label: 'Slope Compatibility', val: '0.5:12 to 12:12', desc: 'From flat commercial to steep pitch' },
            { label: 'Uplift Resistance', val: 'UL 580 Class 90', desc: 'Engineered for 140+ mph wind zones' },
            { label: 'Thermal Assembly', val: 'R-30+ Continuous', desc: 'Eliminates structural thermal bridging' },
            { label: 'Fastener Profile', val: '100% Concealed Clips', desc: 'Zero leak-prone surface penetrations', highlight: true },
          ].map((item, idx) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="border-l-2 border-[#D4A373] pl-4 group hover:bg-white/[0.02] p-2 rounded-r transition-colors"
            >
              <span className="text-[11px] uppercase tracking-wider text-[#94A3B8] block mb-0.5">
                {item.label}
              </span>
              <span className={`text-base sm:text-lg font-bold font-mono-spec ${item.highlight ? 'text-[#D4A373]' : 'text-white'}`}>
                {item.val}
              </span>
              <span className="text-[11px] text-[#64748B] block mt-0.5">
                {item.desc}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
