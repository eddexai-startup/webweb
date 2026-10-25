import React, { useState } from 'react';
import {
  Calculator,
  Send,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Shield,
  FileText,
  RotateCcw,
  Building2,
  Home,
  Landmark,
  Factory,
  Copy,
  Check
} from 'lucide-react';
import {
  calculateRoofScope,
  formatCurrency,
  validateInquiryForm,
  ScopeCalculationInput,
} from '../utils/roofCalculator';

interface ConsultationEstimatorProps {
  initialService?: 'standing-seam' | 'slate-tile' | 'commercial-membrane' | 'restoration-coating';
}

export const ConsultationEstimator: React.FC<ConsultationEstimatorProps> = ({
  initialService = 'standing-seam',
}) => {
  // Scoping calculator state
  const [propertyType, setPropertyType] = useState<'residential' | 'commercial' | 'heritage' | 'industrial'>('residential');
  const [serviceType, setServiceType] = useState<'standing-seam' | 'slate-tile' | 'commercial-membrane' | 'restoration-coating'>(initialService);
  const [estimatedSqFt, setEstimatedSqFt] = useState<number>(2400);
  const [pitch, setPitch] = useState<'low' | 'standard' | 'steep' | 'complex-multi-facet'>('standard');
  const [substrateCondition, setSubstrateCondition] = useState<'sound' | 'minor-repair' | 'full-replacement-needed'>('sound');

  // Contact form state
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [projectAddress, setProjectAddress] = useState('');
  const [projectNotes, setProjectNotes] = useState('');

  // UI status
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [copiedRef, setCopiedRef] = useState(false);
  const [submittedDocket, setSubmittedDocket] = useState<{
    referenceId: string;
    timestamp: string;
    calculation: ReturnType<typeof calculateRoofScope>;
    contact: {
      fullName: string;
      email: string;
      phone: string;
      projectAddress: string;
      projectNotes: string;
      propertyType: string;
      serviceType: string;
    };
  } | null>(null);

  const handleCopyReference = (refId: string) => {
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(refId).catch(() => {});
    }
    setCopiedRef(true);
    setTimeout(() => setCopiedRef(false), 2000);
  };

  // Compute live scope
  const calculation = calculateRoofScope({
    propertyType,
    serviceType,
    estimatedSqFt,
    pitch,
    substrateCondition,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const validation = validateInquiryForm({
      fullName,
      email,
      phone,
      projectAddress,
    });

    if (!validation.isValid) {
      setFormErrors(validation.errors);
      return;
    }

    setFormErrors({});
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const referenceId = `ROB-${new Date().getFullYear()}-${randomSuffix}`;
    const timestamp = new Date().toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });

    setSubmittedDocket({
      referenceId,
      timestamp,
      calculation,
      contact: {
        fullName,
        email,
        phone,
        projectAddress,
        projectNotes,
        propertyType,
        serviceType,
      },
    });
  };

  const handleReset = () => {
    setSubmittedDocket(null);
    setFullName('');
    setEmail('');
    setPhone('');
    setProjectAddress('');
    setProjectNotes('');
    setFormErrors({});
  };

  return (
    <section id="consultation" className="scroll-mt-24 py-20 lg:py-28 border-b border-white/5 bg-[#0B0D11]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#C87D4B] mb-3">
            <span className="w-5 h-[1.5px] bg-[#C87D4B]" aria-hidden="true" />
            <span>Scope Configuration & Project Consultation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Configure Your Scope & Generate an Engineering Brief.
          </h2>
          <p className="mt-4 text-base text-[#94A3B8] leading-relaxed">
            Select your architectural parameters below to view real-time material weight, pitch multipliers, and indicative investment ranges. Submit the brief to record a demo consultation docket.
          </p>
        </div>

        {submittedDocket ? (
          /* Successful Consultation Docket View */
          <div className="max-w-3xl mx-auto p-8 sm:p-10 rounded-xl bg-[#121620] border border-[#C87D4B]/40 shadow-2xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#C87D4B]/20 border border-[#C87D4B] flex items-center justify-center text-[#C87D4B] shrink-0">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Project Consultation Docket Recorded</h3>
                  <p className="text-xs text-[#94A3B8]">Reference #{submittedDocket.referenceId} · {submittedDocket.timestamp}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => handleCopyReference(submittedDocket.referenceId)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white/5 hover:bg-white/10 text-xs text-[#CBD5E1] border border-white/10 transition-colors cursor-pointer"
                  aria-label="Copy reference ID to clipboard"
                >
                  {copiedRef ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-[#C87D4B]" />}
                  <span aria-live="polite">{copiedRef ? 'Copied' : 'Copy ID'}</span>
                </button>
                <span className="text-xs font-mono font-semibold text-[#C87D4B] bg-[#C87D4B]/10 px-3 py-1 rounded border border-[#C87D4B]/30">
                  Demo Status: Ready for CRM
                </span>
              </div>
            </div>

            {/* Scope Summary */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 text-xs">
              <div className="p-4 rounded bg-[#0D1017] border border-white/5">
                <span className="text-[#94A3B8] block mb-1">Applicant Contact</span>
                <p className="text-sm font-semibold text-white">{submittedDocket.contact.fullName}</p>
                <p className="text-[#CBD5E1] mt-0.5">{submittedDocket.contact.email} · {submittedDocket.contact.phone}</p>
                <p className="text-[#94A3B8] mt-1 truncate">{submittedDocket.contact.projectAddress}</p>
              </div>

              <div className="p-4 rounded bg-[#0D1017] border border-white/5">
                <span className="text-[#94A3B8] block mb-1">Configured Scope</span>
                <p className="text-sm font-semibold text-white capitalize">{submittedDocket.contact.serviceType.replace('-', ' ')}</p>
                <p className="text-[#CBD5E1] mt-0.5">{submittedDocket.calculation.totalSquares} Squares ({estimatedSqFt.toLocaleString()} sq ft)</p>
                <p className="text-[#C87D4B] font-mono font-bold mt-1">
                  Est. {formatCurrency(submittedDocket.calculation.indicativePriceRange[0])} – {formatCurrency(submittedDocket.calculation.indicativePriceRange[1])}
                </p>
              </div>
            </div>

            {/* Engineering Specs */}
            <div className="p-5 rounded-lg bg-[#0D1017] border border-white/5 space-y-2 mb-8 text-xs">
              <div className="flex justify-between text-[#CBD5E1]">
                <span className="text-[#94A3B8]">Recommended Material Specification:</span>
                <span className="font-mono font-medium text-white text-right max-w-xs">{submittedDocket.calculation.recommendedGaugeOrSpec}</span>
              </div>
              <div className="flex justify-between text-[#CBD5E1]">
                <span className="text-[#94A3B8]">Fastener Profile:</span>
                <span className="font-mono text-white text-right max-w-xs">{submittedDocket.calculation.recommendedFasteningSystem}</span>
              </div>
              <div className="flex justify-between text-[#CBD5E1]">
                <span className="text-[#94A3B8]">Estimated Project Window:</span>
                <span className="font-mono font-bold text-[#C87D4B]">{submittedDocket.calculation.estimatedDurationDaysRange[0]} to {submittedDocket.calculation.estimatedDurationDaysRange[1]} Working Days</span>
              </div>
            </div>

            {/* Proposal Demo Notice */}
            <div className="p-4 rounded bg-[#181D28] border border-white/10 text-xs text-[#94A3B8] mb-8 leading-relaxed">
              <strong className="text-white block mb-1">Production Integration Note for Robinson Roofing:</strong>
              This enquiry was processed and validated client-side for demonstration. In the live production website, this handler seamlessly forwards data into Robinson Roofing's dispatch email, phone SMS relay, or estimating CRM (e.g. JobNimbus, AccuLynx, or custom webhook).
            </div>

            <div className="flex items-center justify-between">
              <button
                onClick={handleReset}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#1A202C] hover:bg-[#252D3D] rounded border border-white/10 transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Configure Another Scope</span>
              </button>
            </div>
          </div>
        ) : (
          /* Live Two-Column Estimator & Consultation Interface */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left 7 Columns: Architectural Scope Configurator */}
            <div className="lg:col-span-7 p-6 sm:p-8 rounded-xl bg-[#121620] border border-white/10 shadow-xl space-y-8">
              
              {/* Step 1: Property Type */}
              <div>
                <label id="label-property-type" className="text-xs font-bold uppercase tracking-wider text-[#C87D4B] block mb-3">
                  01. Select Property Classification
                </label>
                <div role="radiogroup" aria-labelledby="label-property-type" className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {[
                    { id: 'residential', label: 'Luxury Res.', icon: Home },
                    { id: 'commercial', label: 'Commercial', icon: Building2 },
                    { id: 'heritage', label: 'Heritage', icon: Landmark },
                    { id: 'industrial', label: 'Industrial', icon: Factory },
                  ].map((p) => {
                    const Icon = p.icon;
                    const isSelected = propertyType === p.id;
                    return (
                      <button
                        key={p.id}
                        type="button"
                        role="radio"
                        aria-checked={isSelected}
                        onClick={() => setPropertyType(p.id as any)}
                        className={`p-3 rounded-lg border text-left transition-all cursor-pointer flex flex-col justify-between h-20 ${
                          isSelected
                            ? 'bg-[#1C2230] border-[#C87D4B] text-white shadow-md'
                            : 'bg-[#0E121A] border-white/5 text-[#94A3B8] hover:text-white hover:border-white/20'
                        }`}
                      >
                        <Icon className={`w-4 h-4 ${isSelected ? 'text-[#C87D4B]' : 'text-[#94A3B8]'}`} />
                        <span className="text-xs font-semibold">{p.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: System Category */}
              <div>
                <label id="label-service-discipline" className="text-xs font-bold uppercase tracking-wider text-[#C87D4B] block mb-3">
                  02. Desired Roofing Discipline
                </label>
                <div role="radiogroup" aria-labelledby="label-service-discipline" className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { id: 'standing-seam', label: 'Standing Seam Metal', note: '24-Ga Zinc & Galvalume with concealed clips' },
                    { id: 'slate-tile', label: 'Natural Slate & Clay Tile', note: 'Quarried S-1 stone with solid copper fixings' },
                    { id: 'commercial-membrane', label: 'Commercial Flat Membrane', note: '80-mil hot-air welded TPO / EPDM system' },
                    { id: 'restoration-coating', label: 'Protective Shield Coating', note: 'Elastomeric restoration & rust treatment' },
                  ].map((s) => {
                    const isSelected = serviceType === s.id;
                    return (
                      <button
                        key={s.id}
                        type="button"
                        role="radio"
                        aria-checked={isSelected}
                        onClick={() => setServiceType(s.id as any)}
                        className={`p-4 rounded-lg border text-left transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-[#1C2230] border-[#C87D4B] shadow-md'
                            : 'bg-[#0E121A] border-white/5 hover:border-white/20 hover:bg-[#131722]'
                        }`}
                      >
                        <span className={`text-sm font-semibold block mb-1 ${isSelected ? 'text-white' : 'text-[#CBD5E1]'}`}>
                          {s.label}
                        </span>
                        <span className="text-xs text-[#94A3B8] block">{s.note}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 3: Area Slider */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label htmlFor="roof-sqft-slider" className="text-xs font-bold uppercase tracking-wider text-[#C87D4B]">
                    03. Estimated Roof Surface Area
                  </label>
                  <span className="text-sm font-mono font-bold text-white bg-[#0D1017] px-3 py-1 rounded border border-white/10">
                    {estimatedSqFt.toLocaleString()} sq ft ({Math.ceil(estimatedSqFt / 100)} squares)
                  </span>
                </div>
                <input
                  id="roof-sqft-slider"
                  type="range"
                  min="500"
                  max="12000"
                  step="100"
                  value={estimatedSqFt}
                  onChange={(e) => setEstimatedSqFt(Number(e.target.value))}
                  className="w-full accent-[#C87D4B] cursor-pointer"
                  aria-label="Estimated Roof Surface Area in square feet"
                />
                <div className="flex justify-between text-[11px] text-[#94A3B8] mt-1 font-mono">
                  <span>500 sq ft</span>
                  <span>Typical Residence (2,500)</span>
                  <span>12,000+ sq ft</span>
                </div>
              </div>

              {/* Step 4: Pitch & Substrate */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="roof-pitch-select" className="text-xs font-bold uppercase tracking-wider text-[#94A3B8] block mb-2">
                    Roof Pitch / Slope Geometry
                  </label>
                  <select
                    id="roof-pitch-select"
                    value={pitch}
                    onChange={(e) => setPitch(e.target.value as any)}
                    className="w-full p-2.5 rounded-lg bg-[#0E121A] border border-white/10 text-xs text-white focus:outline-none focus:border-[#C87D4B]"
                  >
                    <option value="low">Low Slope (Under 3:12)</option>
                    <option value="standard">Standard Pitch (4:12 to 7:12)</option>
                    <option value="steep">Steep Pitch (8:12 to 12:12)</option>
                    <option value="complex-multi-facet">Complex Multi-Facet / Dormers</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="roof-substrate-select" className="text-xs font-bold uppercase tracking-wider text-[#94A3B8] block mb-2">
                    Substrate & Decking State
                  </label>
                  <select
                    id="roof-substrate-select"
                    value={substrateCondition}
                    onChange={(e) => setSubstrateCondition(e.target.value as any)}
                    className="w-full p-2.5 rounded-lg bg-[#0E121A] border border-white/10 text-xs text-white focus:outline-none focus:border-[#C87D4B]"
                  >
                    <option value="sound">Sound Structural Sheathing</option>
                    <option value="minor-repair">Minor Plywood Spot Repairs</option>
                    <option value="full-replacement-needed">Full Structural Redeck Required</option>
                  </select>
                </div>
              </div>

              {/* Live Technical Output Box */}
              <div className="p-5 rounded-lg bg-[#0D1017] border border-white/10 space-y-3">
                <div className="flex items-center justify-between pb-3 border-b border-white/5">
                  <span className="text-xs text-[#94A3B8]">Indicative Investment Estimate:</span>
                  <span className="text-lg font-bold font-mono text-[#C87D4B]">
                    {formatCurrency(calculation.indicativePriceRange[0])} – {formatCurrency(calculation.indicativePriceRange[1])}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 text-xs text-[#CBD5E1]">
                  <div>
                    <span className="text-[#94A3B8] block">Estimated Deadload Weight:</span>
                    <span className="font-mono text-white">{calculation.estimatedMaterialWeightKg.toLocaleString()} kg total</span>
                  </div>
                  <div>
                    <span className="text-[#94A3B8] block">Project Execution Window:</span>
                    <span className="font-mono text-white">{calculation.estimatedDurationDaysRange[0]}–{calculation.estimatedDurationDaysRange[1]} Days</span>
                  </div>
                </div>

                {calculation.warnings.length > 0 && (
                  <div className="pt-2 text-[11px] text-amber-300 flex items-start gap-1.5">
                    <AlertTriangle className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                    <span>{calculation.warnings[0]}</span>
                  </div>
                )}
              </div>

            </div>

            {/* Right 5 Columns: Client Consultation Enquiry Form */}
            <div className="lg:col-span-5 p-6 sm:p-8 rounded-xl bg-[#121620] border border-white/10 shadow-xl">
              <h3 className="text-xl font-bold text-white mb-2">
                Request Formal Scope Assessment
              </h3>
              <p className="text-xs text-[#94A3B8] leading-relaxed mb-6">
                Receive an itemized technical evaluation tailored to your building coordinates.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div>
                  <label htmlFor="contact-fullName" className="text-xs font-medium text-[#CBD5E1] block mb-1">
                    Full Name <span className="text-[#C87D4B]">*</span>
                  </label>
                  <input
                    id="contact-fullName"
                    type="text"
                    autoComplete="name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    aria-invalid={Boolean(formErrors.fullName)}
                    aria-describedby={formErrors.fullName ? 'error-fullName' : undefined}
                    placeholder="e.g. Jonathan Robinson"
                    className={`w-full p-2.5 rounded-lg bg-[#0E121A] border text-xs text-white placeholder-white/30 focus:outline-none ${
                      formErrors.fullName ? 'border-rose-500' : 'border-white/10 focus:border-[#C87D4B]'
                    }`}
                  />
                  {formErrors.fullName && (
                    <span id="error-fullName" role="alert" className="text-[11px] text-rose-400 mt-1 block">{formErrors.fullName}</span>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="contact-email" className="text-xs font-medium text-[#CBD5E1] block mb-1">
                      Email Address <span className="text-[#C87D4B]">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      autoComplete="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      aria-invalid={Boolean(formErrors.email)}
                      aria-describedby={formErrors.email ? 'error-email' : undefined}
                      placeholder="client@estate.com"
                      className={`w-full p-2.5 rounded-lg bg-[#0E121A] border text-xs text-white placeholder-white/30 focus:outline-none ${
                        formErrors.email ? 'border-rose-500' : 'border-white/10 focus:border-[#C87D4B]'
                      }`}
                    />
                    {formErrors.email && (
                      <span id="error-email" role="alert" className="text-[11px] text-rose-400 mt-1 block">{formErrors.email}</span>
                    )}
                  </div>

                  <div>
                    <label htmlFor="contact-phone" className="text-xs font-medium text-[#CBD5E1] block mb-1">
                      Phone Number <span className="text-[#C87D4B]">*</span>
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      autoComplete="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      aria-invalid={Boolean(formErrors.phone)}
                      aria-describedby={formErrors.phone ? 'error-phone' : undefined}
                      placeholder="(555) 234-5678"
                      className={`w-full p-2.5 rounded-lg bg-[#0E121A] border text-xs text-white placeholder-white/30 focus:outline-none ${
                        formErrors.phone ? 'border-rose-500' : 'border-white/10 focus:border-[#C87D4B]'
                      }`}
                    />
                    {formErrors.phone && (
                      <span id="error-phone" role="alert" className="text-[11px] text-rose-400 mt-1 block">{formErrors.phone}</span>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-address" className="text-xs font-medium text-[#CBD5E1] block mb-1">
                    Project Address or Region <span className="text-[#C87D4B]">*</span>
                  </label>
                  <input
                    id="contact-address"
                    type="text"
                    autoComplete="street-address"
                    value={projectAddress}
                    onChange={(e) => setProjectAddress(e.target.value)}
                    aria-invalid={Boolean(formErrors.projectAddress)}
                    aria-describedby={formErrors.projectAddress ? 'error-projectAddress' : undefined}
                    placeholder="e.g. 742 Ridgeview Terrace, North Sector"
                    className={`w-full p-2.5 rounded-lg bg-[#0E121A] border text-xs text-white placeholder-white/30 focus:outline-none ${
                      formErrors.projectAddress ? 'border-rose-500' : 'border-white/10 focus:border-[#C87D4B]'
                    }`}
                  />
                  {formErrors.projectAddress && (
                    <span id="error-projectAddress" role="alert" className="text-[11px] text-rose-400 mt-1 block">{formErrors.projectAddress}</span>
                  )}
                </div>

                <div>
                  <label htmlFor="contact-notes" className="text-xs font-medium text-[#CBD5E1] block mb-1">
                    Architectural Notes or Timeline Requirements (Optional)
                  </label>
                  <textarea
                    id="contact-notes"
                    rows={3}
                    value={projectNotes}
                    onChange={(e) => setProjectNotes(e.target.value)}
                    placeholder="Specific architectural preferences, existing roof issues, or target completion dates..."
                    className="w-full p-2.5 rounded-lg bg-[#0E121A] border border-white/10 text-xs text-white placeholder-white/30 focus:outline-none focus:border-[#C87D4B] resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 px-4 text-xs font-semibold text-white bg-[#C87D4B] hover:bg-[#B36B3B] active:bg-[#9B5A2F] rounded transition-all duration-200 shadow-lg shadow-[#C87D4B]/20 cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>Generate & Submit Project Brief</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>

                <p className="text-[11px] text-[#94A3B8] text-center pt-2">
                  Demo environment · Validated client-side · Ready for live mail/CRM integration
                </p>
              </form>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
