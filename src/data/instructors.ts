import { getStaticWitGrafikaInstructors } from '@/lib/wit-instructors';
import type { Instructor } from '@/types/instructor';

export const instructors: Instructor[] = getStaticWitGrafikaInstructors();

export function getInstructorById(id: string): Instructor | undefined {
  return instructors.find((i) => i.id === id);
}
