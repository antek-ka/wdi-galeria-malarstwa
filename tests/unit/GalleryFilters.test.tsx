import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';
import { describe, expect, it } from 'vitest';

import { renderWithIntl } from '../utils/render';
import { GalleryFilters } from '@/components/gallery/GalleryFilters';
import { works } from '@/data/works';
import { filterWorks, type WorkFilterState } from '@/lib/utils';

function FiltersHarness() {
  const [filters, setFilters] = useState<WorkFilterState>({
    semester: 'all',
    technique: 'all',
  });
  const count = filterWorks(works, filters).length;

  return (
    <>
      <GalleryFilters filters={filters} worksCount={count} onFiltersChange={setFilters} />
      <p data-testid="filtered-count">{count}</p>
    </>
  );
}

describe('GalleryFilters', () => {
  it('selecting semester 2 filter only shows matching works', async () => {
    const user = userEvent.setup();
    renderWithIntl(<FiltersHarness />);

    const semester2Count = filterWorks(works, { semester: 2, technique: 'all' }).length;
    await user.click(screen.getByTestId('semester-filter-2'));

    expect(screen.getByTestId('filtered-count')).toHaveTextContent(String(semester2Count));
    expect(semester2Count).toBe(works.filter((w) => w.semester === 2).length);
  });
});
