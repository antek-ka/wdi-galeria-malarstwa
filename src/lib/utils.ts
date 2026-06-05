import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

import type { Author, Semester, Technique, Work } from '@/types/work';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatAuthorName(author: Author): string {
  return `${author.firstName} ${author.lastName}`;
}

export type WorkFilterState = {
  semester: Semester | 'all';
  technique: Technique | 'all';
};

export function filterWorks(items: Work[], filters: WorkFilterState): Work[] {
  return items.filter((work) => {
    const semesterMatch = filters.semester === 'all' || work.semester === filters.semester;
    const techniqueMatch = filters.technique === 'all' || work.technique === filters.technique;
    return semesterMatch && techniqueMatch;
  });
}
