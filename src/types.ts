export interface ProjectItem {
  id: string;
  title: string;
  category: 'standing-seam' | 'slate-tile' | 'commercial';
  categoryLabel: string;
  imageSrc: string;
  pitch: string;
  material: string;
  systemType: string;
  description: string;
  tag: string;
}

export interface SystemLayer {
  id: string;
  number: string;
  name: string;
  materialSpec: string;
  thickness: string;
  purpose: string;
}

export interface RoofingSystemData {
  id: string;
  name: string;
  subtitle: string;
  bestFor: string;
  expectedLifespan: string;
  windRating: string;
  fireRating: string;
  imageSrc: string;
  layers: SystemLayer[];
}
