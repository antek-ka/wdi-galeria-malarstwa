'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { ArtworkImage } from '@/components/gallery/ArtworkImage';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { getInstructorById } from '@/data/instructors';
import { formatSemesterLabel, formatTechniqueLabel } from '@/i18n/labels';
import { formatAuthorName } from '@/lib/utils';
import type { Work } from '@/types/work';

type WorkModalProps = {
  work: Work | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

function WorkModalHeader({ work }: { work: Work }) {
  const tFilters = useTranslations('filters');

  return (
    <DialogHeader className="gap-1.5">
      <DialogTitle className="font-serif text-xl leading-tight md:text-2xl">
        {work.title}
      </DialogTitle>
      <DialogDescription className="text-gallery-text/70">
        {formatAuthorName(work.author)} · {work.academicYear} ·{' '}
        {formatSemesterLabel(tFilters, work.semester)}
      </DialogDescription>
    </DialogHeader>
  );
}

function WorkModalDetails({
  work,
  instructor,
}: {
  work: Work;
  instructor: ReturnType<typeof getInstructorById>;
}) {
  const t = useTranslations('work');
  const tFilters = useTranslations('filters');

  return (
    <div className="flex flex-col gap-4 md:min-h-0 md:flex-1">
      <dl className="grid gap-3 text-sm">
        <div>
          <dt className="text-gallery-text/60 text-xs tracking-widest uppercase">
            {t('fields.technique')}
          </dt>
          <dd className="mt-0.5">{formatTechniqueLabel(tFilters, work.technique)}</dd>
        </div>
        {work.dimensions && (
          <div>
            <dt className="text-gallery-text/60 text-xs tracking-widest uppercase">
              {t('fields.dimensions')}
            </dt>
            <dd className="mt-0.5">{work.dimensions}</dd>
          </div>
        )}
        {instructor && (
          <div>
            <dt className="text-gallery-text/60 text-xs tracking-widest uppercase">
              {t('fields.instructor')}
            </dt>
            <dd className="mt-0.5">
              {instructor.title} {instructor.firstName} {instructor.lastName}
            </dd>
          </div>
        )}
      </dl>
      {work.description && (
        <p className="text-gallery-text/80 line-clamp-4 text-sm leading-relaxed">
          {work.description}
        </p>
      )}
      <Link
        href={`/gallery/${work.id}`}
        className="text-gallery-accent mt-auto shrink-0 pt-1 text-sm font-medium hover:underline"
      >
        {t('modal.openFullPage')}
      </Link>
    </div>
  );
}

export function WorkModal({ work, open, onOpenChange }: WorkModalProps) {
  const t = useTranslations('work.modal');

  if (!work) return null;

  const instructor = getInstructorById(work.instructorId);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="bg-gallery-surface flex max-h-[min(90dvh,90vh)] min-h-0 w-full max-w-none flex-col gap-0 overflow-hidden rounded-none p-0 sm:max-w-none md:max-w-none lg:max-w-6xl lg:rounded-xl"
        data-testid="work-modal"
      >
        <header className="border-gallery-muted shrink-0 border-b px-4 pt-4 pr-12 pb-3 md:hidden">
          <WorkModalHeader work={work} />
        </header>

        <div className="flex min-h-0 flex-1 flex-col overflow-hidden md:flex-row">
          <div className="bg-gallery-muted/30 relative min-h-[38dvh] shrink-0 md:min-h-0 md:min-w-0 md:flex-1 md:shrink">
            <ArtworkImage
              src={work.fullSrc}
              alt={t('fullViewAlt', { title: work.title })}
              fill
              className="object-contain p-2 md:p-4"
              sizes="(max-width: 1024px) 100vw, 70vw"
            />
          </div>

          <aside className="border-gallery-muted flex min-h-0 shrink-0 flex-col overflow-y-auto border-t md:w-[min(20rem,34%)] md:shrink-0 md:border-t-0 md:border-l">
            <header className="border-gallery-muted hidden shrink-0 border-b px-5 pt-5 pr-12 pb-4 md:block">
              <WorkModalHeader work={work} />
            </header>
            <div className="flex min-h-0 flex-col px-4 py-4 md:flex-1 md:px-5 md:py-5">
              <WorkModalDetails work={work} instructor={instructor} />
            </div>
          </aside>
        </div>
      </DialogContent>
    </Dialog>
  );
}
