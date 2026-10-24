import React, { useState } from 'react';
import { Layers, ShieldCheck, ChevronRight, Info, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { RoofingSystemData } from '../types';

const ROOF_SYSTEMS: RoofingSystemData[] = [
  {
    id: 'standing-seam',
    name: 'Architectural Standing Seam System',
    subtitle: 'Concealed Fastener 24-Gauge Galvalume / Zinc Panel',
    bestFor: 'Modern architectural residences, coastal high-wind properties, contemporary commercial pavilions',
    expectedLifespan: '50 – 75+ Years',
    windRating: 'UL 580 Class 90 (up to 150 mph)',
    fireRating: 'Class A Non-Combustible',
    imageSrc: '/src/assets/images/service_standing_seam_1792831596442.jpg',
    layers: [
      {
        id: 'layer-metal-deck',
        number: '01',
        name: 'Structural Deck Substrate',
        materialSpec: '5/8" CDX Exterior-Grade Plywood or 22-Ga B-Deck',
        thickness: '15.9 mm (5/8")',
        purpose: 'Provides rigid deflection-free structural foundation engineered for uplift loads.',
      },
      {
        id: 'layer-metal-vapor',
        number: '02',
        name: 'Self-Adhered Vapor Retarder',
        materialSpec: 'SBS Modified Bituminous Vapor Permeable Membrane',
        thickness: '40 mil (1.0 mm)',
        purpose: 'Prevents indoor conditioned air moisture from condensing on the cold underside of metal panels.',
      },
      {
        id: 'layer-metal-polyiso',
        number: '03',
        name: 'High-Density Polyiso Insulation',
        materialSpec: 'Continuous Polyisocyanurate Board (R-6.0 per inch)',
        thickness: '50.8 mm (2.0")',
        purpose: 'Eliminates structural thermal bridging and satisfies modern energy envelope codes.',
      },
      {
        id: 'layer-metal-underlay',
        number: '04',
        name: 'High-Temperature Ice & Water Underlayment',
        materialSpec: 'Cross-laminated polymer matrix rated to 250°F (121°C)',
        thickness: '50 mil (1.27 mm)',
        purpose: 'Endures extreme localized solar radiant heat without degrading or sticking to pan movement.',
      },
      {
        id: 'layer-metal-clips',
        number: '05',
        name: 'Sliding Thermal Expansion Clips',
        materialSpec: '304-Grade Stainless Steel Floating Clip Assembly',
        thickness: '16 Gauge',
        purpose: 'Absorbs 1" to 2" longitudinal expansion and contraction without pan oil-canning or fastener fatigue.',
      },
      {
        id: 'layer-metal-surface',
        number: '06',
        name: 'Standing Seam Metal Pan (Finished Surface)',
        materialSpec: '24-Gauge Galvalume with Kynar 500 / PVDF or VMZINC',
        thickness: '0.6 mm (24 Ga)',
        purpose: 'Continuous vertical seam shedding 100% of water with zero exposed surface penetration screws.',
      },
    ],
  },
  {
    id: 'slate-tile',
    name: 'Artisanal Natural Slate & Tile System',
    subtitle: 'ASTM C406 S-1 Quarried Slate with Solid Copper Fixings',
    bestFor: 'Heritage estates, luxury residential architecture, historic restorations',
    expectedLifespan: '75 – 100+ Years',
    windRating: '130+ mph with full copper tie clips',
    fireRating: 'Class A Non-Combustible Stone',
    imageSrc: '/src/assets/images/service_tile_slate_1792831597010.jpg',
    layers: [
      {
        id: 'layer-slate-deck',
        number: '01',
        name: 'Reinforced Solid Sheathing',
        materialSpec: '3/4" Tongue-and-Groove Douglas Fir Structural Planks',
        thickness: '19.0 mm (3/4")',
        purpose: 'Engineered to support dead loads of 800 to 1,200 lbs per roofing square.',
      },
      {
        id: 'layer-slate-membrane',
        number: '02',
        name: 'Self-Healing Membrane & High-Perm Felt',
        materialSpec: 'SBS Elastomeric Peel-and-Stick with 30# High-Perm Felt',
        thickness: '60 mil (1.5 mm)',
        purpose: 'Self-seals completely around every penetrating copper nail shank to prevent leaks.',
      },
      {
        id: 'layer-slate-battens',
        number: '03',
        name: 'Ventilated Counter-Battens & Lath',
        materialSpec: 'Pressure-Treated Cedar or Polymer Cavity Battens',
        thickness: '19 mm x 38 mm',
        purpose: 'Creates continuous airflow channel beneath slate to dissipate moisture and prevent frost heave.',
      },
      {
        id: 'layer-slate-nails',
        number: '04',
        name: 'Solid Copper Slating Nails',
        materialSpec: 'Heavy-Gauge Smooth-Shank Hard-Drawn Copper Nails',
        thickness: '10 Gauge / 1.5"-2.0"',
        purpose: 'Immune to rust and galvanic degradation for over 100 years.',
      },
      {
        id: 'layer-slate-stone',
        number: '05',
        name: 'Natural Quarried Architectural Slate',
        materialSpec: 'Unfading S-1 Grade Welsh or Vermont Stone',
        thickness: '9.0 mm – 12.0 mm',
        purpose: 'Double-lapped natural stone creating an impervious, firesafe, and timeless weather armor.',
      },
    ],
  },
  {
    id: 'commercial-membrane',
    name: 'High-Performance Flat Commercial System',
    subtitle: 'Induction-Welded Reinforced TPO / EPDM Single-Ply Membrane',
    bestFor: 'Commercial buildings, flat roofs, parapet architectures, low-slope luxury roofs',
    expectedLifespan: '25 – 35 Years',
    windRating: 'FM 1-90 to FM 1-120 Class Certified',
    fireRating: 'Class A Flame Spread Rated',
    imageSrc: '/src/assets/images/service_commercial_membrane_1792831596263.jpg',
    layers: [
      {
        id: 'layer-tpo-deck',
        number: '01',
        name: 'Commercial Structural Deck',
        materialSpec: 'Fluted Steel Deck (22-Ga) or Cast Concrete Slab',
        thickness: 'Structural Grade',
        purpose: 'Carries snow loads, equipment loads, and positive slope drainage framework.',
      },
      {
        id: 'layer-tpo-barrier',
        number: '02',
        name: 'Thermal Air & Vapor Permeation Barrier',
        materialSpec: 'High-Tack Self-Adhering Butyl Vapor Shield',
        thickness: '32 mil (0.8 mm)',
        purpose: 'Blocks building moisture from penetrating into the thermal insulation layer.',
      },
      {
        id: 'layer-tpo-tapered',
        number: '03',
        name: 'Tapered Polyiso Drainage System',
        materialSpec: 'Slope-Engineered 1/4" per foot Polyisocyanurate Blocks',
        thickness: 'Variable 2" to 6"',
        purpose: 'Mechanically forces all rainwater toward primary roof sumps, completely eliminating ponding water.',
      },
      {
        id: 'layer-tpo-cover',
        number: '04',
        name: 'High-Density Gypsum Cover Board',
        materialSpec: 'Glass-Mat Reinforced Primed Gypsum Board',
        thickness: '12.7 mm (1/2")',
        purpose: 'Provides impact resistance against hail stones, foot traffic, and equipment servicing.',
      },
      {
        id: 'layer-tpo-membrane',
        number: '05',
        name: 'Robotic Heat-Welded TPO Membrane',
        materialSpec: '80-mil Reinforced Thermoplastic Polyolefin with UV Scrim',
        thickness: '80 mil (2.0 mm)',
        purpose: 'Hot-air fused into a monolithic watertight sheet reflecting 85% of solar radiation.',
      },
    ],
  },
];

export const RoofSystemsExplorer: React.FC = () => {
  const [selectedSystemIndex, setSelectedSystemIndex] = useState(0);
  const [activeLayerIndex, setActiveLayerIndex] = useState(0);

  const currentSystem = ROOF_SYSTEMS[selectedSystemIndex];
  const activeLayer = currentSystem.layers[activeLayerIndex] || currentSystem.layers[0];

  const handleSystemChange = (index: number) => {
    setSelectedSystemIndex(index);
    setActiveLayerIndex(0);
  };

  return (
    <section id="systems-explorer" className="py-20 lg:py-28 border-b border-white/5 bg-[#0D1017] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-12"
        >
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#D4A373] mb-3">
            <span className="w-5 h-[1.5px] bg-[#D4A373]" aria-hidden="true" />
            <span>Architectural Systems Inspector</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Anatomy of an Impervious Roof Assembly.
          </h2>
          <p className="mt-4 text-base text-[#94A3B8] leading-relaxed">
            A premium roof is not just a surface material; it is an integrated multi-tier engineering assembly. Explore the internal anatomy, moisture dynamics, and fastening mechanics of each proposed system.
          </p>
        </motion.div>

        {/* System Selector Tabs with Animated Background Pill */}
        <div className="flex flex-wrap gap-2 p-1.5 bg-[#141820] border border-white/10 rounded-xl max-w-2xl mb-10 shadow-lg relative">
          {ROOF_SYSTEMS.map((system, idx) => {
            const isSelected = selectedSystemIndex === idx;
            return (
              <button
                key={system.id}
                onClick={() => handleSystemChange(idx)}
                className={`flex-1 min-w-[180px] py-2.5 px-4 text-xs font-semibold rounded-lg transition-colors text-center cursor-pointer whitespace-nowrap relative z-10 ${
                  isSelected ? 'text-black' : 'text-[#94A3B8] hover:text-white'
                }`}
              >
                {isSelected && (
                  <motion.div
                    layoutId="activeSystemTabPill"
                    className="absolute inset-0 bg-gradient-to-r from-[#D4A373] to-[#E2B78E] rounded-lg -z-10 shadow-md"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                  />
                )}
                <span>{system.name.replace(' System', '')}</span>
              </button>
            );
          })}
        </div>

        {/* Interactive Cross-Section Explorer Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Layer Navigation Stack */}
          <div className="lg:col-span-5 space-y-3">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs uppercase tracking-wider text-[#94A3B8] font-mono">
                System Layer Stack (Base to Surface)
              </span>
              <span className="text-xs text-[#D4A373] font-medium">
                Click layer to inspect
              </span>
            </div>

            <div className="space-y-2">
              {currentSystem.layers.map((layer, idx) => {
                const isSelected = activeLayerIndex === idx;
                return (
                  <motion.button
                    key={layer.id}
                    onClick={() => setActiveLayerIndex(idx)}
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.99 }}
                    className={`w-full text-left p-4 rounded-xl border transition-all duration-200 flex items-center justify-between cursor-pointer ${
                      isSelected
                        ? 'bg-[#181E29] border-[#D4A373] shadow-lg shadow-[#D4A373]/10'
                        : 'bg-[#11151D] border-white/5 hover:border-white/20 hover:bg-[#151A24]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded transition-colors ${
                        isSelected ? 'bg-[#D4A373] text-black' : 'bg-white/5 text-[#94A3B8]'
                      }`}>
                        {layer.number}
                      </span>
                      <div>
                        <span className={`text-sm font-semibold block leading-snug ${isSelected ? 'text-white' : 'text-[#CBD5E1]'}`}>
                          {layer.name}
                        </span>
                        <span className="text-xs text-[#94A3B8] block truncate max-w-[260px]">
                          {layer.materialSpec}
                        </span>
                      </div>
                    </div>
                    <ChevronRight className={`w-4 h-4 transition-transform duration-200 ${isSelected ? 'text-[#D4A373] translate-x-1' : 'text-white/20'}`} />
                  </motion.button>
                );
              })}
            </div>

            {/* Quick System Engineering Specs Card */}
            <div className="mt-8 p-5 rounded-xl bg-[#11151D] border border-white/10 space-y-3 text-xs shadow-lg">
              <div className="flex items-center justify-between pb-2 border-b border-white/5">
                <span className="text-[#94A3B8]">Target Application:</span>
                <span className="text-white font-medium text-right max-w-[240px] truncate">{currentSystem.bestFor}</span>
              </div>
              <div className="flex items-center justify-between pb-2 border-b border-white/5">
                <span className="text-[#94A3B8]">Expected Service Life:</span>
                <span className="text-[#D4A373] font-mono font-bold">{currentSystem.expectedLifespan}</span>
              </div>
              <div className="flex items-center justify-between pb-2 border-b border-white/5">
                <span className="text-[#94A3B8]">Wind Uplift Rating:</span>
                <span className="text-white font-mono">{currentSystem.windRating}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#94A3B8]">Fire Classification:</span>
                <span className="text-white font-medium">{currentSystem.fireRating}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Layer Detailed Breakdown Card with AnimatePresence */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-xl bg-[#141822] border border-white/10 shadow-2xl relative overflow-hidden min-h-[440px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${currentSystem.id}-${activeLayer.id}`}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="flex items-start justify-between gap-4 mb-6 pb-6 border-b border-white/10">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-mono font-bold text-[#D4A373] bg-[#D4A373]/10 px-2.5 py-0.5 rounded border border-[#D4A373]/20">
                          Layer {activeLayer.number} Analysis
                        </span>
                        <span className="text-xs text-[#94A3B8]">{currentSystem.name}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white">
                        {activeLayer.name}
                      </h3>
                    </div>
                    <div className="text-right">
                      <span className="text-xs uppercase tracking-wider text-[#94A3B8] block">Thickness / Caliber</span>
                      <span className="text-sm font-mono font-bold text-white">{activeLayer.thickness}</span>
                    </div>
                  </div>

                  {/* Material Spec Section */}
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-[#D4A373] mb-2 flex items-center gap-1.5">
                        <Info className="w-3.5 h-3.5" />
                        <span>Material Specification</span>
                      </h4>
                      <div className="p-4 rounded-lg bg-[#0D1017] border border-white/5 text-sm font-mono text-[#E2E8F0]">
                        {activeLayer.materialSpec}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-[#94A3B8] mb-2 flex items-center gap-1.5">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#D4A373]" />
                        <span>Structural & Environmental Purpose</span>
                      </h4>
                      <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
                        {activeLayer.purpose}
                      </p>
                    </div>

                    {/* Cross-section visual preview representation */}
                    <div className="pt-4 border-t border-white/10">
                      <span className="text-xs uppercase tracking-wider text-[#94A3B8] block mb-3 font-mono">
                        System Installation Geometry
                      </span>
                      <div className="p-4 rounded-lg bg-[#0D1017] border border-white/5 flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <Layers className="w-6 h-6 text-[#D4A373] shrink-0" />
                          <div>
                            <p className="text-xs font-medium text-white">Continuous Monolithic Integration</p>
                            <p className="text-[11px] text-[#94A3B8]">Each tier interlocks to form an airtight thermal and moisture boundary.</p>
                          </div>
                        </div>
                        <span className="text-xs font-mono text-[#D4A373] whitespace-nowrap">
                          Grade ASTM Compliant
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
