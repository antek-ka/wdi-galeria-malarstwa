import { describe, expect, it } from 'vitest';

import { works } from '@/data/works';
import { filterWorks, formatAuthorName } from '@/lib/utils';

describe('utils', () => {
  it('formatAuthorName joins names', () => {
    expect(formatAuthorName({ firstName: 'Anna', lastName: 'Kowalska' })).toBe('Anna Kowalska');
  });

  it('filterWorks filters by semester', () => {
    const filtered = filterWorks(works, { semester: 2, technique: 'all' });
    expect(filtered.every((w) => w.semester === 2)).toBe(true);
    expect(filtered.length).toBeGreaterThan(0);
  });

  it('filterWorks filters by technique', () => {
    const filtered = filterWorks(works, { semester: 'all', technique: 'oil' });
    expect(filtered.every((w) => w.technique === 'oil')).toBe(true);
  });
});
