// Centralized image registry ensuring reliable asset resolution in both Vite dev and Netlify production builds
import heroRoofSrc from './images/hero_architectural_roof_1792831595834.jpg';
import standingSeamSrc from './images/service_standing_seam_1792831596442.jpg';
import tileSlateSrc from './images/service_tile_slate_1792831597010.jpg';
import commercialMembraneSrc from './images/service_commercial_membrane_1792831596263.jpg';

export const ROOF_IMAGES = {
  heroRoof: heroRoofSrc,
  standingSeam: standingSeamSrc,
  tileSlate: tileSlateSrc,
  commercialMembrane: commercialMembraneSrc,
} as const;

// Static root-relative fallback paths served directly from public/assets/images/
export const FALLBACK_IMAGES = {
  heroRoof: '/assets/images/hero_architectural_roof_1792831595834.jpg',
  standingSeam: '/assets/images/service_standing_seam_1792831596442.jpg',
  tileSlate: '/assets/images/service_tile_slate_1792831597010.jpg',
  commercialMembrane: '/assets/images/service_commercial_membrane_1792831596263.jpg',
} as const;
