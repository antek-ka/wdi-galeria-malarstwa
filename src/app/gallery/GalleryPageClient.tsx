'use client';

import { useTranslations } from 'next-intl';
import { useMemo, useState } from 'react';

import { GalleryFilters } from '@/components/gallery/GalleryFilters';
import { GalleryGrid } from '@/components/gallery/GalleryGrid';
import { WorkModal } from '@/components/gallery/WorkModal';
import { PageTransition } from '@/components/layout/PageTransition';
import { works } from '@/data/works';
import { filterWorks, type WorkFilterState } from '@/lib/utils';
import type { Work } from '@/types/work';

export function GalleryPageClient() {
  const t = useTranslations('gallery');
  const [filters, setFilters] = useState<WorkFilterState>({
    semester: 'all',
    technique: 'all',
  });
  const [selectedWork, setSelectedWork] = useState<Work | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const filteredWorks = useMemo(() => filterWorks(works, filters), [filters]);

  const handleSelectWork = (work: Work) => {
    setSelectedWork(work);
    setModalOpen(true);
  };

  return (
    <PageTransition>
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-8">
        <header className="mb-8 max-w-2xl">
          <h1 className="font-serif text-4xl font-semibold">{t('title')}</h1>
          <p className="text-gallery-text/70 mt-3 leading-relaxed">{t('intro')}</p>
        </header>

        <GalleryFilters
          filters={filters}
          worksCount={filteredWorks.length}
          onFiltersChange={setFilters}
        />

        {filteredWorks.length === 0 ? (
          <p className="text-gallery-text/70 text-sm">{t('emptyFilters')}</p>
        ) : (
          <GalleryGrid works={filteredWorks} onSelectWork={handleSelectWork} />
        )}
      </div>

      <WorkModal work={selectedWork} open={modalOpen} onOpenChange={setModalOpen} />
    </PageTransition>
  );
}
