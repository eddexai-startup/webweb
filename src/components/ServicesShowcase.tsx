import React from 'react';
import { ArrowRight, CheckCircle2, Shield, Wrench, RefreshCw, Layers } from 'lucide-react';
import { motion } from 'motion/react';

interface ServicesShowcaseProps {
  onSelectServiceForEstimate: (serviceId: 'standing-seam' | 'slate-tile' | 'commercial-membrane' | 'restoration-coating') => void;
}

export const ServicesShowcase: React.FC<ServicesShowcaseProps> = ({ onSelectServiceForEstimate }) => {
  return (
    <section id="capabilities" className="py-20 lg:py-28 border-b border-white/5 bg-[#0B0D11] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mb-16 lg:mb-20"
        >
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#D4A373] mb-3">
            <span className="w-5 h-[1.5px] bg-[#D4A373]" aria-hidden="true" />
            <span>Proposed Service Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Comprehensive Enclosure Systems Built Without Compromise.
          </h2>
          <p className="mt-4 text-base text-[#94A3B8] leading-relaxed">
            Every roofing discipline demands distinct structural geometry, material metallurgy, and fastening physics. Explore our proposed service categories tailored for Robinson Roofing.
          </p>
        </motion.div>

        {/* Service 01: Standing Seam Metal — Enters LEFT -> CENTER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-24 pb-16 border-b border-white/5">
          {/* Image Container: Left reveal */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 relative group"
          >
            <div className="aspect-[4/3] rounded-lg overflow-hidden border border-white/10 bg-[#141820] shadow-2xl relative">
              <img
                src="/src/assets/images/service_standing_seam_1792831596442.jpg"
                alt="Architectural Standing Seam metal roof with continuous hidden fasteners"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            {/* Visual Tag */}
            <div className="absolute top-4 left-4 bg-[#0E1219]/90 backdrop-blur-md border border-white/15 px-3 py-1.5 rounded text-xs font-medium text-white shadow-lg">
              Zinc & Galvalume Profiles
            </div>
          </motion.div>

          {/* Text Container: Right reveal */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col justify-center"
          >
            <span className="text-xs font-mono font-medium text-[#D4A373] uppercase tracking-wider mb-2">
              01. Architectural Metal Craft
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Standing Seam & Architectural Metal Systems
            </h3>
            <p className="text-sm sm:text-base text-[#94A3B8] mb-6 leading-relaxed">
              Designed for lifetime permanence. Continuous vertical pans with mechanically seamed or snap-lock joints hide all fasteners beneath the weather surface, allowing unrestricted thermal movement across harsh freeze-thaw and summer expansion cycles.
            </p>

            <div className="space-y-3 mb-8">
              <div className="flex items-start gap-3 text-sm text-[#E2E8F0]">
                <CheckCircle2 className="w-4 h-4 text-[#D4A373] shrink-0 mt-0.5" />
                <span>Zero exposed penetrating screws—eliminates #1 cause of roof leaks</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-[#E2E8F0]">
                <CheckCircle2 className="w-4 h-4 text-[#D4A373] shrink-0 mt-0.5" />
                <span>Engineered stainless thermal expansion clips for longitudinal movement</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-[#E2E8F0]">
                <CheckCircle2 className="w-4 h-4 text-[#D4A373] shrink-0 mt-0.5" />
                <span>Available in 24-gauge Galvalume, natural zinc (VMZINC), and copper</span>
              </div>
            </div>

            <div>
              <motion.button
                onClick={() => onSelectServiceForEstimate('standing-seam')}
                whileHover={{ scale: 1.03, x: 3 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold text-white bg-[#181D26] hover:bg-[#D4A373] hover:text-black border border-white/10 hover:border-transparent rounded-md transition-colors duration-200 cursor-pointer group shadow-lg"
              >
                <span>Calculate Standing Seam Scope</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-200" />
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Service 02: Slate & Tile — Enters RIGHT -> CENTER (Reversed Composition) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-24 pb-16 border-b border-white/5">
          {/* Text Container: Left reveal */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 order-2 lg:order-1 flex flex-col justify-center"
          >
            <span className="text-xs font-mono font-medium text-[#D4A373] uppercase tracking-wider mb-2">
              02. Heritage Masonry & Tile
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Natural Slate & Architectural Clay Tile
            </h3>
            <p className="text-sm sm:text-base text-[#94A3B8] mb-6 leading-relaxed">
              Unrivaled organic elegance and century-long durability. Our proposed slate and clay tile specifications utilize hand-dressed quarried slate fixed with solid copper nails onto breathable high-tensile underlayments.
            </p>

            <div className="space-y-3 mb-8">
              <div className="flex items-start gap-3 text-sm text-[#E2E8F0]">
                <CheckCircle2 className="w-4 h-4 text-[#D4A373] shrink-0 mt-0.5" />
                <span>ASTM C406 S-1 Grade natural slate with 75–100+ year service life</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-[#E2E8F0]">
                <CheckCircle2 className="w-4 h-4 text-[#D4A373] shrink-0 mt-0.5" />
                <span>Double-lap headlap engineering to block wind-driven rain penetration</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-[#E2E8F0]">
                <CheckCircle2 className="w-4 h-4 text-[#D4A373] shrink-0 mt-0.5" />
                <span>Custom lead and copper valley flashing hand-soldered on site</span>
              </div>
            </div>

            <div>
              <motion.button
                onClick={() => onSelectServiceForEstimate('slate-tile')}
                whileHover={{ scale: 1.03, x: 3 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold text-white bg-[#181D26] hover:bg-[#D4A373] hover:text-black border border-white/10 hover:border-transparent rounded-md transition-colors duration-200 cursor-pointer group shadow-lg"
              >
                <span>Calculate Slate & Tile Scope</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-200" />
              </motion.button>
            </div>
          </motion.div>

          {/* Image Container: Right reveal */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 order-1 lg:order-2 relative group"
          >
            <div className="aspect-[4/3] rounded-lg overflow-hidden border border-white/10 bg-[#141820] shadow-2xl relative">
              <img
                src="/src/assets/images/service_tile_slate_1792831597010.jpg"
                alt="Artisan roofer installing natural slate tiles with copper fasteners"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="absolute top-4 right-4 bg-[#0E1219]/90 backdrop-blur-md border border-white/15 px-3 py-1.5 rounded text-xs font-medium text-white shadow-lg">
              Hand-Dressed Quarry Slate
            </div>
          </motion.div>
        </div>

        {/* Services 03 & 04: Alternating Entrance Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 03: Commercial Membrane (Enters LEFT -> CENTER) */}
          <motion.div
            initial={{ opacity: 0, x: -50, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -6, transition: { duration: 0.25 } }}
            className="p-8 rounded-xl bg-[#11151D] border border-white/10 flex flex-col justify-between group hover:border-[#D4A373]/50 transition-colors duration-300 shadow-xl"
          >
            <div>
              <div className="aspect-[16/9] rounded-lg overflow-hidden mb-6 border border-white/5 relative">
                <img
                  src="/src/assets/images/service_commercial_membrane_1792831596263.jpg"
                  alt="Commercial flat roof installation with welded waterproof membrane"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <span className="absolute bottom-3 left-3 text-[11px] font-mono bg-[#0B0D11]/90 backdrop-blur px-2.5 py-1 rounded text-white border border-white/10 shadow">
                  TPO / EPDM Systems
                </span>
              </div>

              <span className="text-xs font-mono font-medium text-[#D4A373] uppercase tracking-wider block mb-2">
                03. Commercial & Industrial
              </span>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#D4A373] transition-colors">
                Commercial Flat Roof & Waterproof Membranes
              </h3>
              <p className="text-sm text-[#94A3B8] leading-relaxed mb-6">
                Single-ply reinforced TPO, PVC, and EPDM membranes hot-air welded at 1,000°F into a seamless monolithic sheet. Integrated with laser-tapered polyisocyanurate drainage boards to prevent pooling.
              </p>

              <ul className="space-y-2 mb-8 text-xs text-[#E2E8F0]">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#D4A373]" />
                  <span>Molecular hot-air welded seams stronger than the membrane itself</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#D4A373]" />
                  <span>Energy Star high-reflectance white cool-roof ratings</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#D4A373]" />
                  <span>Tapered insulation schemes eliminating flat-roof ponding water</span>
                </li>
              </ul>
            </div>

            <div>
              <motion.button
                onClick={() => onSelectServiceForEstimate('commercial-membrane')}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 px-4 text-xs font-semibold text-white bg-[#171B24] hover:bg-[#D4A373] hover:text-black border border-white/10 hover:border-transparent rounded-lg transition-colors text-center cursor-pointer shadow"
              >
                Estimate Commercial Flat System
              </motion.button>
            </div>
          </motion.div>

          {/* Card 04: Protective Coatings (Enters RIGHT -> CENTER) */}
          <motion.div
            initial={{ opacity: 0, x: 50, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -6, transition: { duration: 0.25 } }}
            className="p-8 rounded-xl bg-[#11151D] border border-white/10 flex flex-col justify-between group hover:border-[#D4A373]/50 transition-colors duration-300 shadow-xl"
          >
            <div>
              <div className="aspect-[16/9] rounded-lg overflow-hidden mb-6 border border-white/5 bg-[#171C26] flex items-center justify-center p-6 relative">
                <div className="text-center">
                  <RefreshCw className="w-12 h-12 text-[#D4A373] mx-auto mb-3 opacity-90 transition-transform duration-700 ease-out group-hover:rotate-180" />
                  <p className="text-xs text-white/90 font-medium">Elastomeric & Fluoropolymer Rehabilitation</p>
                  <p className="text-[11px] text-[#94A3B8] mt-1">Extending commercial asset lifespan by 15–20 years</p>
                </div>
                <span className="absolute bottom-3 left-3 text-[11px] font-mono bg-[#0B0D11]/90 backdrop-blur px-2.5 py-1 rounded text-white border border-white/10 shadow">
                  Lifecycle Extension
                </span>
              </div>

              <span className="text-xs font-mono font-medium text-[#D4A373] uppercase tracking-wider block mb-2">
                04. Restoration & Preservation
              </span>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#D4A373] transition-colors">
                Rust Treatment, Waterproofing & Protective Coatings
              </h3>
              <p className="text-sm text-[#94A3B8] leading-relaxed mb-6">
                Avoid premature roof tear-offs. We restore aging metal and modified bitumen surfaces with rust-converting primers, reinforced joint bandages, and high-solids silicone elastomeric protective shields.
              </p>

              <ul className="space-y-2 mb-8 text-xs text-[#E2E8F0]">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#D4A373]" />
                  <span>Non-destructive infrared moisture scan prior to application</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#D4A373]" />
                  <span>Hydrophobic silicone barrier resisting 100% standing ponding</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#D4A373]" />
                  <span>Significant tax-deductible maintenance expense vs capital replacement</span>
                </li>
              </ul>
            </div>

            <div>
              <motion.button
                onClick={() => onSelectServiceForEstimate('restoration-coating')}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 px-4 text-xs font-semibold text-white bg-[#171B24] hover:bg-[#D4A373] hover:text-black border border-white/10 hover:border-transparent rounded-lg transition-colors text-center cursor-pointer shadow"
              >
                Estimate Coating Restoration
              </motion.button>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
