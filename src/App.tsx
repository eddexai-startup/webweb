import React, { useState } from 'react';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesShowcase } from './components/ServicesShowcase';
import { RoofSystemsExplorer } from './components/RoofSystemsExplorer';
import { ProjectGallery } from './components/ProjectGallery';
import { EngineeringRationale } from './components/EngineeringRationale';
import { CustomerJourney } from './components/CustomerJourney';
import { FaqSection } from './components/FaqSection';
import { ConsultationEstimator } from './components/ConsultationEstimator';
import { ProposalDrawer } from './components/ProposalDrawer';
import { Footer } from './components/Footer';

export default function App() {
  const [isProposalDrawerOpen, setIsProposalDrawerOpen] = useState(false);
  const [selectedServiceForEstimate, setSelectedServiceForEstimate] = useState<
    'standing-seam' | 'slate-tile' | 'commercial-membrane' | 'restoration-coating'
  >('standing-seam');

  const scrollToConsultation = (serviceId?: 'standing-seam' | 'slate-tile' | 'commercial-membrane' | 'restoration-coating') => {
    if (serviceId) {
      setSelectedServiceForEstimate(serviceId);
    }
    const target = document.getElementById('consultation');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSystems = () => {
    const target = document.getElementById('systems-explorer');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0D11] text-[#E2E8F0] selection:bg-[#D4A373] selection:text-black flex flex-col overflow-x-hidden">
      {/* Top Animated Scroll Progress Indicator */}
      <ScrollProgressBar />

      {/* Top Navbar adhering to Top Bar Contract & Reference Style */}
      <Navbar
        onOpenConsultation={() => scrollToConsultation()}
        onOpenProposalDrawer={() => setIsProposalDrawerOpen(true)}
      />

      {/* Main Content Flow */}
      <main className="flex-1">
        {/* Section B: Hero with Cinematic Line-by-Line Reveals & Floating Capsule Pill */}
        <Hero
          onOpenConsultation={() => scrollToConsultation()}
          onExploreSystems={scrollToSystems}
        />

        {/* Section D: Core Services with Alternating Left/Right Entrances & Tactile Hovers */}
        <ServicesShowcase
          onSelectServiceForEstimate={(serviceId) => scrollToConsultation(serviceId)}
        />

        {/* Section D2: Interactive Roof Systems Anatomical Inspector with Animated Pills & Spec Transitions */}
        <RoofSystemsExplorer />

        {/* Section F: Featured Work & Animated Accessible Lightbox Gallery */}
        <ProjectGallery />

        {/* Section E: Why Professional Roofing Matters / Alternating Principles */}
        <EngineeringRationale />

        {/* Section G: Interactive 5-Stage Customer Journey Timeline */}
        <CustomerJourney />

        {/* Section H: Technical FAQ with Butter-Smooth Height Accordions */}
        <FaqSection />

        {/* Section 16: Interactive Scope Configurator & Lead Consultation Docket */}
        <ConsultationEstimator
          key={selectedServiceForEstimate}
          initialService={selectedServiceForEstimate}
        />
      </main>

      {/* Section J: Footer with Pre-Footer CTA */}
      <Footer
        onOpenConsultation={() => scrollToConsultation()}
        onOpenProposalDrawer={() => setIsProposalDrawerOpen(true)}
      />

      {/* Agency Proposal Presentation Deck & Handover Roadmap Drawer */}
      <ProposalDrawer
        isOpen={isProposalDrawerOpen}
        onClose={() => setIsProposalDrawerOpen(false)}
      />
    </div>
  );
}
