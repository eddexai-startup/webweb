import React, { useState, useEffect } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ProjectItem } from '../types';
import { ROOF_IMAGES, FALLBACK_IMAGES } from '../assets/images';

const GALLERY_PROJECTS: ProjectItem[] = [
  {
    id: 'proj-01',
    title: 'Modern Coastal Pavilion Residence',
    category: 'standing-seam',
    categoryLabel: 'Standing Seam Metal',
    imageSrc: ROOF_IMAGES.heroRoof,
    pitch: '1.5:12 to 4:12 Integrated Pitch',
    material: '24-Gauge Matte Charcoal Zinc (VMZINC)',
    systemType: 'Double-Locked Mechanical Standing Seam',
    description: 'An expansive shoreline residence requiring low-slope aerodynamic profile, marine-grade corrosion resistance, and fully concealed expansion clips.',
    tag: 'Coastal Engineering',
  },
  {
    id: 'proj-02',
    title: 'Precision Metal Fascia & Valley Detail',
    category: 'standing-seam',
    categoryLabel: 'Standing Seam Metal',
    imageSrc: ROOF_IMAGES.standingSeam,
    pitch: '6:12 Architectural Pitch',
    material: 'Architectural Galvalume with Kynar 500 Coating',
    systemType: 'Snap-Lock Concealed Fastener Pan',
    description: 'Crisp geometric lines showing seamless box gutter integration, custom drip edge flashing, and knife-edge ridge caps.',
    tag: 'Detail Precision',
  },
  {
    id: 'proj-03',
    title: 'Highland Heritage Estate Slate Overhaul',
    category: 'slate-tile',
    categoryLabel: 'Slate & Tile',
    imageSrc: ROOF_IMAGES.tileSlate,
    pitch: '9:12 Steep Gable Pitch',
    material: 'Natural Welsh Quarried S-1 Grade Slate',
    systemType: 'Double-Lap Solid Copper Nail Assembly',
    description: 'Hand-dressed architectural slate tiles paired with lead valleys and ventilated cedar counter-battens designed to outlast a century of severe weather.',
    tag: 'Heritage Craft',
  },
  {
    id: 'proj-04',
    title: 'Metro Commercial Headquarters Enclosure',
    category: 'commercial',
    categoryLabel: 'Commercial Flat',
    imageSrc: ROOF_IMAGES.commercialMembrane,
    pitch: '0.25:12 Tapered Low-Slope',
    material: '80-mil Reinforced White TPO Membrane',
    systemType: 'Automated Heat-Welded Induction System',
    description: 'Multi-acre commercial installation featuring continuous laser-tapered polyisocyanurate insulation drainage boards to prevent all standing ponding.',
    tag: 'Commercial Scale',
  },
];

export const ProjectGallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'standing-seam' | 'slate-tile' | 'commercial'>('all');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const filteredProjects = activeFilter === 'all'
    ? GALLERY_PROJECTS
    : GALLERY_PROJECTS.filter((p) => p.category === activeFilter);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (activeLightboxIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveLightboxIndex(null);
      } else if (e.key === 'ArrowRight') {
        setActiveLightboxIndex((prev) => (prev !== null && prev < filteredProjects.length - 1 ? prev + 1 : 0));
      } else if (e.key === 'ArrowLeft') {
        setActiveLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : filteredProjects.length - 1));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeLightboxIndex, filteredProjects.length]);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (activeLightboxIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [activeLightboxIndex]);

  const activeProject = activeLightboxIndex !== null ? filteredProjects[activeLightboxIndex] : null;

  return (
    <section id="portfolio" className="scroll-mt-24 py-20 lg:py-28 border-b border-white/5 bg-[#0B0D11] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header and Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#D4A373] mb-3">
              <span className="w-5 h-[1.5px] bg-[#D4A373]" aria-hidden="true" />
              <span>Project Gallery & Visual Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Architectural Form Meets Weatherproof Execution.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#94A3B8]">
              Proposed showcase portfolio ready for Robinson Roofing. Click any project to inspect architectural specifications, material profiles, and pitch engineering.
            </p>
          </motion.div>

          {/* Filter Tabs with animated selection */}
          <div
            role="tablist"
            aria-label="Filter projects by roofing discipline"
            className="flex flex-wrap gap-1.5 p-1.5 bg-[#141820] border border-white/10 rounded-xl shrink-0 shadow-md relative"
          >
            {[
              { id: 'all', label: 'All Disciplines' },
              { id: 'standing-seam', label: 'Standing Seam' },
              { id: 'slate-tile', label: 'Slate & Tile' },
              { id: 'commercial', label: 'Commercial Flat' },
            ].map((tab) => {
              const isSelected = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setActiveFilter(tab.id as any)}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap relative z-10 ${
                    isSelected ? 'text-black' : 'text-[#94A3B8] hover:text-white'
                  }`}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="activePortfolioFilterPill"
                      className="absolute inset-0 bg-[#D4A373] rounded-lg -z-10 shadow-sm"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                    />
                  )}
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Gallery Grid with Staggered Entrance */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              onClick={() => setActiveLightboxIndex(idx)}
              className="group relative rounded-xl overflow-hidden border border-white/10 bg-[#12161F] cursor-pointer hover:border-[#D4A373]/50 transition-colors duration-300 flex flex-col shadow-xl"
              role="button"
              tabIndex={0}
              aria-label={`View architectural details for ${project.title}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setActiveLightboxIndex(idx);
                }
              }}
            >
              <div className="aspect-[16/10] overflow-hidden relative">
                <img
                  src={project.imageSrc}
                  alt={project.title}
                  width={800}
                  height={500}
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.currentTarget;
                    const fallbackMap: Record<string, string> = {
                      'proj-01': FALLBACK_IMAGES.heroRoof,
                      'proj-02': FALLBACK_IMAGES.standingSeam,
                      'proj-03': FALLBACK_IMAGES.tileSlate,
                      'proj-04': FALLBACK_IMAGES.commercialMembrane,
                    };
                    const fallback = fallbackMap[project.id];
                    if (fallback && !target.src.includes(fallback)) {
                      target.src = fallback;
                    }
                  }}
                />
                
                {/* Overlay hover cue with smooth fade & translate */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0E1219]/90 text-xs font-semibold text-white border border-white/20 shadow-xl backdrop-blur-md transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <Eye className="w-3.5 h-3.5 text-[#D4A373]" />
                    <span>Inspect Architectural Blueprint</span>
                  </span>
                </div>

                {/* Corner Category Tag */}
                <span className="absolute top-3 left-3 text-[11px] font-mono font-medium text-white bg-[#0B0D11]/85 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10 shadow">
                  {project.categoryLabel}
                </span>

                <span className="absolute top-3 right-3 text-[11px] font-mono text-[#D4A373] bg-[#D4A373]/15 backdrop-blur-md px-2.5 py-1 rounded-md border border-[#D4A373]/30 shadow">
                  {project.tag}
                </span>
              </div>

              {/* Card Meta Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-[#D4A373] transition-colors duration-200 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-[#94A3B8]">
                  <span>Pitch: <strong className="text-white font-mono">{project.pitch}</strong></span>
                  <span className="truncate max-w-[200px]">Spec: <strong className="text-white font-mono">{project.material.split(' ')[0]}</strong></span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Client Photo Placeholder Notice */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 p-4 rounded-xl bg-[#141820]/60 border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#94A3B8]"
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#D4A373]" aria-hidden="true" />
            <span>Illustrative concept studies shown. Easily replaced with Robinson Roofing's completed residential & commercial project records upon live launch.</span>
          </div>
          <span className="font-mono text-white/50 shrink-0">CMS Ready Format</span>
        </motion.div>

      </div>

      {/* Accessible Full-Screen Lightbox Modal with AnimatePresence */}
      <AnimatePresence>
        {activeProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8"
            role="dialog"
            aria-modal="true"
            aria-labelledby="lightbox-title"
          >
            {/* Smooth Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/90 backdrop-blur-md"
              onClick={() => setActiveLightboxIndex(null)}
            />

            {/* Close button */}
            <button
              onClick={() => setActiveLightboxIndex(null)}
              className="absolute top-5 right-5 z-50 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              aria-label="Close Lightbox (Escape)"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation Controls */}
            <button
              onClick={() => setActiveLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : filteredProjects.length - 1))}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-40 p-3 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/10 transition-colors hidden sm:block cursor-pointer"
              aria-label="Previous project (Left arrow)"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={() => setActiveLightboxIndex((prev) => (prev !== null && prev < filteredProjects.length - 1 ? prev + 1 : 0))}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-40 p-3 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/10 transition-colors hidden sm:block cursor-pointer"
              aria-label="Next project (Right arrow)"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ type: 'spring', damping: 25, stiffness: 280 }}
              className="max-w-5xl w-full bg-[#11151D] border border-white/15 rounded-2xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col lg:flex-row relative z-10"
            >
              {/* Image side */}
              <div className="lg:w-3/5 bg-black flex items-center justify-center relative overflow-hidden">
                <img
                  src={activeProject.imageSrc}
                  alt={activeProject.title}
                  width={1200}
                  height={800}
                  decoding="async"
                  className="w-full h-full object-cover max-h-[50vh] lg:max-h-[80vh]"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.currentTarget;
                    const fallbackMap: Record<string, string> = {
                      'proj-01': FALLBACK_IMAGES.heroRoof,
                      'proj-02': FALLBACK_IMAGES.standingSeam,
                      'proj-03': FALLBACK_IMAGES.tileSlate,
                      'proj-04': FALLBACK_IMAGES.commercialMembrane,
                    };
                    const fallback = fallbackMap[activeProject.id];
                    if (fallback && !target.src.includes(fallback)) {
                      target.src = fallback;
                    }
                  }}
                />
                <span className="absolute bottom-3 left-3 text-[11px] font-mono bg-black/80 px-2.5 py-1 rounded text-white border border-white/10">
                  {activeProject.categoryLabel}
                </span>
              </div>

              {/* Architectural Spec Sheet side */}
              <div className="lg:w-2/5 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
                <div>
                  <span className="text-xs font-mono font-medium text-[#D4A373] uppercase tracking-wider block mb-1">
                    Architectural Case Spec
                  </span>
                  <h3 id="lightbox-title" className="text-2xl font-bold text-white mb-3">
                    {activeProject.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed mb-6">
                    {activeProject.description}
                  </p>

                  <div className="space-y-3.5 text-xs border-t border-white/10 pt-5">
                    <div>
                      <span className="text-[#94A3B8] block mb-0.5">Primary Material:</span>
                      <span className="text-white font-mono font-medium">{activeProject.material}</span>
                    </div>
                    <div>
                      <span className="text-[#94A3B8] block mb-0.5">System Assembly:</span>
                      <span className="text-white font-mono font-medium">{activeProject.systemType}</span>
                    </div>
                    <div>
                      <span className="text-[#94A3B8] block mb-0.5">Calculated Roof Pitch:</span>
                      <span className="text-[#D4A373] font-mono font-bold">{activeProject.pitch}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10 mt-6 flex items-center justify-between text-xs text-[#94A3B8]">
                  <span>Use Arrow Keys to Navigate</span>
                  <button
                    onClick={() => setActiveLightboxIndex(null)}
                    className="px-4 py-2 bg-white/5 hover:bg-white/10 text-white rounded-lg transition-colors cursor-pointer"
                  >
                    Close Viewer
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
