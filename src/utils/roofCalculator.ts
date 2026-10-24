/**
 * Pure business and architectural calculation logic for Robinson Roofing proposal
 */

export interface ScopeCalculationInput {
  propertyType: 'residential' | 'commercial' | 'heritage' | 'industrial';
  serviceType: 'standing-seam' | 'slate-tile' | 'commercial-membrane' | 'restoration-coating';
  estimatedSqFt: number;
  pitch: 'low' | 'standard' | 'steep' | 'complex-multi-facet';
  substrateCondition: 'sound' | 'minor-repair' | 'full-replacement-needed';
}

export interface ScopeCalculationOutput {
  baseLaborHoursPerSquare: number;
  totalSquares: number; // 1 square = 100 sq ft
  pitchDifficultyMultiplier: number;
  estimatedMaterialWeightKg: number;
  recommendedGaugeOrSpec: string;
  recommendedFasteningSystem: string;
  estimatedDurationDaysRange: [number, number];
  indicativePriceRange: [number, number];
  isFeasible: boolean;
  warnings: string[];
}

export function calculateRoofScope(input: ScopeCalculationInput): ScopeCalculationOutput {
  const { propertyType, serviceType, estimatedSqFt, pitch, substrateCondition } = input;
  const warnings: string[] = [];

  if (estimatedSqFt < 100) {
    return {
      baseLaborHoursPerSquare: 0,
      totalSquares: 0,
      pitchDifficultyMultiplier: 1,
      estimatedMaterialWeightKg: 0,
      recommendedGaugeOrSpec: 'N/A',
      recommendedFasteningSystem: 'N/A',
      estimatedDurationDaysRange: [0, 0],
      indicativePriceRange: [0, 0],
      isFeasible: false,
      warnings: ['Minimum scoping threshold is 100 sq ft (1 square).'],
    };
  }

  const totalSquares = Math.ceil(estimatedSqFt / 100);

  // Pitch multipliers
  let pitchMultiplier = 1.0;
  switch (pitch) {
    case 'low':
      pitchMultiplier = 1.0;
      break;
    case 'standard':
      pitchMultiplier = 1.15;
      break;
    case 'steep':
      pitchMultiplier = 1.35;
      break;
    case 'complex-multi-facet':
      pitchMultiplier = 1.6;
      break;
  }

  // Service configuration
  let baseHoursPerSquare = 3.5;
  let baseSqFtRateRange: [number, number] = [12, 18];
  let materialWeightKgPerSquare = 120;
  let recommendedGaugeOrSpec = '24-Gauge Galvalume / Zinc Standing Seam';
  let recommendedFasteningSystem = 'Concealed clip system with stainless thermal sliders';

  if (serviceType === 'standing-seam') {
    baseHoursPerSquare = 4.0;
    baseSqFtRateRange = [18, 28];
    materialWeightKgPerSquare = 110;
    recommendedGaugeOrSpec = '24-Gauge Architectural Standing Seam (VMZINC / Galvalume)';
    recommendedFasteningSystem = 'Concealed expansion sliding clips with structural pan seams';
    if (pitch === 'low') {
      warnings.push('Standing seam below 2:12 pitch requires continuous mechanical double-lock seaming.');
    }
  } else if (serviceType === 'slate-tile') {
    baseHoursPerSquare = 7.5;
    baseSqFtRateRange = [28, 45];
    materialWeightKgPerSquare = 450;
    recommendedGaugeOrSpec = 'Natural S1-Grade Welsh/Vermont Architectural Slate (9mm thick)';
    recommendedFasteningSystem = 'Solid copper slating nails on double-batten vapor permeable membrane';
    if (pitch === 'low') {
      warnings.push('Slate and natural tile require minimum 4:12 pitch to prevent capillary moisture draw.');
    }
  } else if (serviceType === 'commercial-membrane') {
    baseHoursPerSquare = 2.5;
    baseSqFtRateRange = [10, 16];
    materialWeightKgPerSquare = 70;
    recommendedGaugeOrSpec = '80-mil Reinforced TPO / Polyisocyanurate Tapered System';
    recommendedFasteningSystem = 'Induction-welded fastening plates with hot-air robotic robotic seam weld';
    if (pitch === 'steep' || pitch === 'complex-multi-facet') {
      warnings.push('Single-ply membrane systems are optimized for low-slope / flat parapet configurations.');
    }
  } else if (serviceType === 'restoration-coating') {
    baseHoursPerSquare = 2.0;
    baseSqFtRateRange = [6, 11];
    materialWeightKgPerSquare = 35;
    recommendedGaugeOrSpec = 'High-Solids Fluoropolymer & Elastomeric Anti-Corrosion Membrane';
    recommendedFasteningSystem = 'Zinc-rich epoxy primer bond with embedded structural scrim';
  }

  // Substrate condition impact
  let substrateMultiplier = 1.0;
  if (substrateCondition === 'minor-repair') {
    substrateMultiplier = 1.15;
  } else if (substrateCondition === 'full-replacement-needed') {
    substrateMultiplier = 1.4;
    warnings.push('Full substrate redecking required before final architectural profile installation.');
  }

  const minPrice = Math.round(estimatedSqFt * baseSqFtRateRange[0] * pitchMultiplier * substrateMultiplier);
  const maxPrice = Math.round(estimatedSqFt * baseSqFtRateRange[1] * pitchMultiplier * substrateMultiplier);

  // Time estimate
  const crewHours = totalSquares * baseHoursPerSquare * pitchMultiplier * substrateMultiplier;
  const crewDailyCapacityHours = 24; // 3-man crew @ 8 hours
  const rawDays = crewHours / crewDailyCapacityHours;
  const minDays = Math.max(2, Math.round(rawDays));
  const maxDays = Math.max(minDays + 2, Math.round(rawDays * 1.35) + 1);

  return {
    baseLaborHoursPerSquare: baseHoursPerSquare,
    totalSquares,
    pitchDifficultyMultiplier: pitchMultiplier,
    estimatedMaterialWeightKg: Math.round(totalSquares * materialWeightKgPerSquare),
    recommendedGaugeOrSpec,
    recommendedFasteningSystem,
    estimatedDurationDaysRange: [minDays, maxDays],
    indicativePriceRange: [minPrice, maxPrice],
    isFeasible: true,
    warnings,
  };
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(amount);
}

export function validateInquiryForm(values: {
  fullName: string;
  email: string;
  phone: string;
  projectAddress: string;
}): { isValid: boolean; errors: Record<string, string> } {
  const errors: Record<string, string> = {};

  if (!values.fullName.trim()) {
    errors.fullName = 'Full contact name is required';
  }

  if (!values.email.trim()) {
    errors.email = 'Email address is required';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = 'Please provide a valid email format';
  }

  if (!values.phone.trim()) {
    errors.phone = 'Contact telephone is required';
  } else if (values.phone.replace(/[^0-9]/g, '').length < 7) {
    errors.phone = 'Please provide a valid telephone number with area code';
  }

  if (!values.projectAddress.trim()) {
    errors.projectAddress = 'Project address or area is required for aerial scoping';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
