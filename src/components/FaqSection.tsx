import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface FaqItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'How do I determine whether my property requires standing seam metal or single-ply membrane?',
    answer: 'Roof pitch and structural load capacity govern material selection. Slopes shallower than 2:12 generally benefit from continuous hot-air welded membranes (like TPO or PVC) to prevent water ponding, whereas slopes 2:12 and greater achieve optimal hydrostatic shedding, aesthetic longevity, and architectural presence with standing seam metal systems.',
  },
  {
    question: 'Can standing seam metal panels be installed directly over existing asphalt shingles?',
    answer: 'While code in some jurisdictions allows retrofitting over a single layer of shingles using furring channels, architectural best practice requires a full tear-off down to structural sheathing. This permits comprehensive inspection of plywood decking for dry rot, replacement of compromised fasteners, and installation of a dedicated high-temperature self-adhered vapor barrier.',
  },
  {
    question: 'What is the real difference between exposed-fastener metal and concealed-clip standing seam?',
    answer: 'Exposed-fastener systems use thousands of neoprene-washer screws screwed directly through the exterior surface. Over 5 to 10 years, solar UV degrades the rubber washers and daily thermal expansion wallows out the screw holes, leading to pervasive micro-leaks. Concealed-clip standing seam systems secure all panels from underneath using floating stainless clips, leaving 100% of the weather surface unpunctured.',
  },
  {
    question: 'How is a commercial flat roof engineered to eliminate ponding water?',
    answer: 'Proper flat roof engineering employs tapered polyisocyanurate insulation boards cut at precise slope gradients (typically 1/4" per linear foot) directing all precipitation toward engineered scuppers and primary roof drains. This ensures standing water dissipates within 48 hours following severe storms, maintaining manufacturer membrane integrity.',
  },
  {
    question: 'How does the preliminary scoping and quote process work?',
    answer: 'Using modern photometric aerial modeling, initial dimensions and pitch calculations can often be pre-scanned before on-site arrival. An architectural specialist then inspects physical decking conditions, ventilation dynamics, and perimeter flashings to generate a detailed, itemized project scope tailored to the building.',
  },
  {
    question: 'How are heritage slate tiles repaired if an individual tile cracks?',
    answer: 'Natural slate systems are uniquely repairable without disturbing surrounding stones. A craftsman uses a specialized tool called a slate ripper to reach beneath the broken tile and cut its copper nail shank, slides out the damaged piece, inserts a matching quarried slate, and secures it with a discreet copper slate hook or bib flashing.',
  },
];

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 border-b border-white/5 bg-[#0D1017] overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#D4A373] mb-3">
            <span className="w-5 h-[1.5px] bg-[#D4A373]" aria-hidden="true" />
            <span>Technical Clarifications</span>
            <span className="w-5 h-[1.5px] bg-[#D4A373]" aria-hidden="true" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Frequently Addressed Roofing Questions.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#94A3B8]">
            Essential architectural and structural insights for property owners considering residential replacement, metal profiling, or commercial waterproofing.
          </p>
        </motion.div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            const headingId = `faq-heading-${index}`;
            const panelId = `faq-panel-${index}`;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`rounded-xl border transition-colors duration-200 overflow-hidden shadow-lg ${
                  isOpen ? 'border-[#D4A373]/50 bg-[#141822]' : 'border-white/10 bg-[#121620] hover:border-white/20'
                }`}
              >
                <button
                  type="button"
                  id={headingId}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A373]"
                >
                  <span className={`text-base sm:text-lg font-semibold leading-snug transition-colors duration-200 ${isOpen ? 'text-white' : 'text-[#E2E8F0]'}`}>
                    {item.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="shrink-0"
                  >
                    <ChevronDown className="w-5 h-5 text-[#D4A373]" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={headingId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-6 sm:px-6 sm:pb-6 pt-0 text-sm sm:text-base text-[#94A3B8] leading-relaxed border-t border-white/5">
                        <p className="pt-4">{item.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
