import { screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { renderWithIntl } from '../utils/render';
import { GalleryCard } from '@/components/gallery/GalleryCard';
import { works } from '@/data/works';

describe('GalleryCard', () => {
  const work = works[0];

  it('renders author name, title, and semester badge', () => {
    renderWithIntl(<GalleryCard work={work} onSelect={() => undefined} />);

    expect(screen.getByRole('heading', { name: work.title })).toBeInTheDocument();
    expect(
      screen.getByText(`${work.author.firstName} ${work.author.lastName}`),
    ).toBeInTheDocument();
    expect(screen.getByTestId('semester-badge')).toHaveTextContent(`Semestr ${work.semester}`);
  });
});
