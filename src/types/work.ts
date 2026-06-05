export type Technique = 'oil' | 'watercolour' | 'acrylic' | 'gouache' | 'tempera' | 'mixed';

export type Semester = 1 | 2 | 3 | 4 | 5 | 6;

export interface Author {
  firstName: string;
  lastName: string;
}

export interface Work {
  id: string;
  title: string;
  author: Author;
  academicYear: string;
  semester: Semester;
  technique: Technique;
  dimensions?: string;
  description?: string;
  thumbnailSrc: string;
  fullSrc: string;
  instructorId: string;
  featured?: boolean;
}
