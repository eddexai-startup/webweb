import React from 'react';
import { Wind, Droplets, ThermometerSun, ShieldAlert } from 'lucide-react';
import { motion } from 'motion/react';

export const EngineeringRationale: React.FC = () => {
  const principles = [
    {
      icon: Droplets,
      number: '01',
      title: 'Capillary Action & Hydrostatic Barrier',
      description: 'Water does not merely fall vertically; surface tension and wind shear drive moisture uphill through overlapping seam gaps under high wind pressure. Precision double-folded standing seams and continuous butyl tape barriers permanently defy capillary migration.',
      fromLeft: true,
    },
    {
      icon: ThermometerSun,
      number: '02',
      title: 'Thermal Cycling & Fastener Fatigue',
      description: 'A 60-foot metal roof panel expands and contracts up to 3/4" between summer sunlight and winter freezes. Exposed screws with rubber washers work loose and wallow out oversized leak holes within 5 to 7 years. Engineered sliding clips eliminate this failure point entirely.',
      fromLeft: false,
    },
    {
      icon: Wind,
      number: '03',
      title: 'Aerodynamic Uplift at the Perimeters',
      description: 'Over 80% of storm roof failures begin not in the field of the roof, but at the eaves and rakes where negative suction vortices pull flashings upward. Precision cleated perimeter edges resist severe aerodynamic peel forces.',
      fromLeft: true,
    },
    {
      icon: ShieldAlert,
      number: '04',
      title: 'Substrate Vapor & Interstitial Condensation',
      description: 'Warm, humid interior air inevitably migrates upward into roof cavities. Without engineered vapor retarders and dedicated counter-batten airflow channels, condensation rots structural rafters unseen beneath pristine finished panels.',
      fromLeft: false,
    },
  ];

  return (
    <section id="craftsmanship" className="py-20 lg:py-28 border-b border-white/5 bg-[#0D1017] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-16"
        >
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#D4A373] mb-3">
            <span className="w-5 h-[1.5px] bg-[#D4A373]" aria-hidden="true" />
            <span>The Physics of Enclosure</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Why Precision Roofing Engineering Matters.
          </h2>
          <p className="mt-4 text-base text-[#94A3B8] leading-relaxed">
            The roof is the single most vulnerable structural element of any building envelope, absorbing 100% of solar radiation, freeze-thaw cycles, and driving wind. True longevity requires mastering the physics of moisture, thermal expansion, and aerodynamics.
          </p>
        </motion.div>

        {/* 4 Architectural Principles Grid with Alternating Left/Right Entrances */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {principles.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, x: item.fromLeft ? -50 : 50, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, delay: (idx % 2) * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="p-8 rounded-xl bg-[#121620] border border-white/10 hover:border-[#D4A373]/50 transition-colors duration-300 flex flex-col justify-between group shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-lg bg-[#181E2A] border border-white/5 flex items-center justify-center text-[#D4A373] group-hover:bg-[#D4A373] group-hover:text-black transition-colors duration-300 shadow">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-sm font-mono font-bold text-[#D4A373] bg-[#D4A373]/10 px-3 py-1 rounded-md border border-[#D4A373]/25">
                      Principle {item.number}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#D4A373] transition-colors duration-200">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#94A3B8] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5 flex items-center gap-2 text-xs text-[#CBD5E1]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4A373]" aria-hidden="true" />
                  <span>Integrated into every Robinson Roofing specification</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
