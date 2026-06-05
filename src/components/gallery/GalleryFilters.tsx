'use client';

import { useTranslations } from 'next-intl';
import { Fragment, type ReactNode } from 'react';

import { semesterCategories, techniqueCategories } from '@/data/categories';
import { formatSemesterLabel, formatTechniqueLabel, formatWorksCountLabel } from '@/i18n/labels';
import { cn } from '@/lib/utils';
import type { WorkFilterState } from '@/lib/utils';
import type { Semester, Technique } from '@/types/work';

type GalleryFiltersProps = {
  filters: WorkFilterState;
  worksCount: number;
  onFiltersChange: (filters: WorkFilterState) => void;
};

type FilterOptionProps = {
  active: boolean;
  label: string;
  testId?: string;
  onClick: () => void;
};

function FilterOption({ active, label, testId, onClick }: FilterOptionProps) {
  return (
    <button
      type="button"
      aria-pressed={active}
      data-testid={testId}
      onClick={onClick}
      className={cn(
        'rounded-sm px-1.5 py-0.5 text-sm transition-colors',
        active
          ? 'text-gallery-text decoration-gallery-accent/70 font-medium underline decoration-1 underline-offset-[6px]'
          : 'text-gallery-text/45 hover:text-gallery-text/75',
      )}
    >
      {label}
    </button>
  );
}

function FilterRow({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="flex min-w-0 flex-wrap items-baseline gap-x-3 gap-y-1">
      <span className="text-gallery-text/35 shrink-0 text-[11px] tracking-[0.18em] uppercase">
        {label}
      </span>
      <div
        className="flex min-w-0 flex-wrap items-baseline gap-x-1"
        role="group"
        aria-label={label}
      >
        {children}
      </div>
    </div>
  );
}

function FilterOptions({
  items,
  getValue,
  getLabel,
  getTestId,
  isActive,
  onSelect,
}: {
  items: { value: string | number }[];
  getValue: (item: { value: string | number }) => string;
  getLabel: (item: { value: string | number }) => string;
  getTestId: (item: { value: string | number }) => string;
  isActive: (value: string) => boolean;
  onSelect: (value: string) => void;
}) {
  return items.map((item, index) => {
    const value = getValue(item);
    return (
      <Fragment key={value}>
        {index > 0 ? (
          <span aria-hidden className="text-gallery-text/20 select-none">
            ·
          </span>
        ) : null}
        <FilterOption
          active={isActive(value)}
          label={getLabel(item)}
          testId={getTestId(item)}
          onClick={() => onSelect(value)}
        />
      </Fragment>
    );
  });
}

export function GalleryFilters({ filters, worksCount, onFiltersChange }: GalleryFiltersProps) {
  const t = useTranslations('filters');

  const getSemesterLabel = (value: string) => {
    if (value === 'all') return t('all');
    return formatSemesterLabel(t, Number(value) as Semester);
  };

  const getTechniqueLabel = (value: string) => {
    if (value === 'all') return t('all');
    return formatTechniqueLabel(t, value as Technique);
  };

  return (
    <nav
      className="border-gallery-muted/35 bg-gallery-bg/90 sticky top-[var(--navbar-height)] z-40 -mx-4 mb-10 flex flex-col gap-4 border-b px-4 py-4 backdrop-blur-md sm:gap-5 md:-mx-8 md:px-8"
      aria-label={t('ariaLabel')}
      data-testid="gallery-filters"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-end sm:justify-between sm:gap-x-10 sm:gap-y-3">
        <FilterRow label={t('semesterLabel')}>
          <FilterOptions
            items={semesterCategories}
            getValue={(item) => String(item.value)}
            getLabel={(item) => getSemesterLabel(String(item.value))}
            getTestId={(item) => `semester-filter-${item.value}`}
            isActive={(value) => String(filters.semester) === value}
            onSelect={(value) =>
              onFiltersChange({
                ...filters,
                semester: value === 'all' ? 'all' : (Number(value) as Semester),
              })
            }
          />
        </FilterRow>

        <p className="text-gallery-text/40 shrink-0 text-xs tabular-nums" data-testid="works-count">
          {formatWorksCountLabel(t, worksCount)}
        </p>
      </div>

      <FilterRow label={t('techniqueLabel')}>
        <FilterOptions
          items={techniqueCategories}
          getValue={(item) => String(item.value)}
          getLabel={(item) => getTechniqueLabel(String(item.value))}
          getTestId={(item) => `technique-filter-${item.value}`}
          isActive={(value) => filters.technique === value}
          onSelect={(value) =>
            onFiltersChange({
              ...filters,
              technique: value as Technique | 'all',
            })
          }
        />
      </FilterRow>
    </nav>
  );
}
