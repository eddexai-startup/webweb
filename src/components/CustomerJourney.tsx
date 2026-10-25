import React, { useState } from 'react';
import { Compass, FileSpreadsheet, CalendarCheck, ShieldCheck, HardHat, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export const CustomerJourney: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: '01',
      title: 'Aerial & Laser Scoping',
      icon: Compass,
      description: 'High-resolution photometric aerial imagery and on-site laser level surveying measure exact pitches, rake lengths, valley angles, and flashing perimeters with millimeter fidelity.',
    },
    {
      number: '02',
      title: 'Architectural Blueprinting',
      icon: FileSpreadsheet,
      description: 'We develop a tailored assembly schedule detailing exact substrate repairs, vapor retarders, insulation R-values, panel gauge specifications, and custom trim drawings.',
    },
    {
      number: '03',
      title: 'Transparent Fixed Estimate',
      icon: CalendarCheck,
      description: 'Clients receive an itemized, line-by-line investment breakdown with transparent material allowances, labor timelines, and zero ambiguous change-order surprises.',
    },
    {
      number: '04',
      title: 'Master Installation',
      icon: HardHat,
      description: 'Dedicated craftsmen install continuous underlayments, custom-fabricated valleys, and primary roofing profiles under rigorous weather-tight jobsite protection protocols.',
    },
    {
      number: '05',
      title: 'Multi-Point Quality Audit',
      icon: ShieldCheck,
      description: 'A comprehensive engineering punch-list inspects seam crimps, torque fasteners, parapet terminations, and attic moisture ventilation before final client signoff.',
    },
  ];

  return (
    <section id="process" className="scroll-mt-24 py-20 lg:py-28 border-b border-white/5 bg-[#0B0D11] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-16"
        >
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#D4A373] mb-3">
            <span className="w-5 h-[1.5px] bg-[#D4A373]" aria-hidden="true" />
            <span>Proposed Methodology</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            A Transparent 5-Phase Journey from Assessment to Handover.
          </h2>
          <p className="mt-4 text-base text-[#94A3B8] leading-relaxed">
            Eliminating anxiety through predictable engineering stages. Click or hover any phase to explore our quality control checkpoints.
          </p>
        </motion.div>

        {/* Desktop Progress Timeline Bar */}
        <div className="hidden lg:block mb-8 relative">
          <div className="h-1 bg-white/10 rounded-full w-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-[#C87D4B] via-[#D4A373] to-[#E2B78E]"
              animate={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
              transition={{ type: 'spring', stiffness: 200, damping: 25 }}
            />
          </div>
        </div>

        {/* Steps Grid with Staggered Entrance */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isActive = activeStep === idx;
            return (
              <motion.button
                key={step.number}
                type="button"
                aria-pressed={isActive}
                aria-label={`Phase ${step.number}: ${step.title}`}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                onMouseEnter={() => setActiveStep(idx)}
                onClick={() => setActiveStep(idx)}
                className={`p-6 rounded-xl border transition-all duration-300 flex flex-col justify-between cursor-pointer relative group text-left w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A373] ${
                  isActive
                    ? 'bg-[#181E2A] border-[#D4A373] shadow-xl shadow-[#D4A373]/10 scale-[1.02]'
                    : 'bg-[#11151D] border-white/10 hover:border-white/20'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-xl font-mono font-bold transition-colors ${isActive ? 'text-[#D4A373]' : 'text-white/40'}`}>
                      {step.number}
                    </span>
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                      isActive ? 'bg-[#D4A373] text-black shadow-md' : 'bg-[#171C26] text-white/80 group-hover:text-[#D4A373]'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-white mb-2 leading-snug group-hover:text-[#D4A373] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#94A3B8] leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono w-full">
                  <span className={isActive ? 'text-[#D4A373] font-bold' : 'text-white/40'}>
                    Phase {idx + 1} of 5
                  </span>
                  {isActive && (
                    <span className="w-2 h-2 rounded-full bg-[#D4A373] animate-pulse" />
                  )}
                </div>
              </motion.button>
            );
          })}
        </div>

      </div>
    </section>
  );
};
