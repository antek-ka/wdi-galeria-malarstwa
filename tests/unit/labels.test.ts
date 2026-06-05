import { createTranslator } from 'next-intl';
import { describe, expect, it } from 'vitest';

import messages from '../../messages/pl.json';
import {
  formatSemesterLabel,
  formatTechniqueLabel,
  formatWorksCountLabel,
  type LabelTranslator,
} from '@/i18n/labels';

const t = createTranslator({
  locale: 'pl',
  messages,
  namespace: 'filters',
}) as LabelTranslator;

describe('i18n labels', () => {
  it('formatSemesterLabel(1) returns Semestr 1', () => {
    expect(formatSemesterLabel(t, 1)).toBe('Semestr 1');
  });

  it('formatTechniqueLabel formats oil', () => {
    expect(formatTechniqueLabel(t, 'oil')).toBe('Olej');
  });

  it('formatWorksCountLabel handles Polish plural forms', () => {
    expect(formatWorksCountLabel(t, 1)).toBe('1 praca');
    expect(formatWorksCountLabel(t, 3)).toBe('3 prace');
    expect(formatWorksCountLabel(t, 5)).toBe('5 prac');
  });
});
