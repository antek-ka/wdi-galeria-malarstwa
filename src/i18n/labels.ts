import type { Semester, Technique } from '@/types/work';

export type LabelTranslator = (
  key: string,
  values?: Record<string, string | number | Date>,
) => string;

export function formatSemesterLabel(t: LabelTranslator, semester: Semester): string {
  return t('semester', { n: semester });
}

export function formatTechniqueLabel(t: LabelTranslator, technique: Technique): string {
  return t(`technique.${technique}`);
}

export function formatWorksCountLabel(t: LabelTranslator, count: number): string {
  return t('worksCount', { count });
}
