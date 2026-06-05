import type { Semester, Technique } from '@/types/work';

export interface SemesterCategory {
  value: Semester | 'all';
  label: string;
}

export interface TechniqueCategory {
  value: Technique | 'all';
  label: string;
}

export const semesterCategories: SemesterCategory[] = [
  { value: 'all', label: 'Wszystkie semestry' },
  { value: 1, label: 'Semestr 1' },
  { value: 2, label: 'Semestr 2' },
  { value: 3, label: 'Semestr 3' },
];

export const techniqueCategories: TechniqueCategory[] = [
  { value: 'all', label: 'Wszystkie techniki' },
  { value: 'oil', label: 'Olej' },
  { value: 'watercolour', label: 'Akwarela' },
  { value: 'acrylic', label: 'Akryl' },
  { value: 'gouache', label: 'Gwasz' },
  { value: 'tempera', label: 'Tempera' },
  { value: 'mixed', label: 'Technika mieszana' },
];
