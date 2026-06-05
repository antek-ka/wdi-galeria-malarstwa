import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';

import { ArtworkImage } from '@/components/gallery/ArtworkImage';
import { PageTransition } from '@/components/layout/PageTransition';
import { getInstructorById } from '@/data/instructors';
import { getAdjacentWorks, getWorkById, works } from '@/data/works';
import { formatSemesterLabel, formatTechniqueLabel } from '@/i18n/labels';
import { formatAuthorName } from '@/lib/utils';

type PageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return works.map((work) => ({ id: work.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const work = getWorkById(id);
  const t = await getTranslations('metadata');

  if (!work) return { title: t('workNotFound') };

  return {
    title: work.title,
    description: work.description,
  };
}

export default async function WorkDetailPage({ params }: PageProps) {
  const { id } = await params;
  const work = getWorkById(id);
  if (!work) notFound();

  const t = await getTranslations();
  const tFilters = await getTranslations('filters');
  const instructor = getInstructorById(work.instructorId);
  const { prev, next } = getAdjacentWorks(id);
  const authorName = formatAuthorName(work.author);

  return (
    <PageTransition>
      <article className="pb-20">
        <div className="mx-auto max-w-4xl px-4 py-12 md:px-8">
          <Link
            href="/gallery"
            className="text-gallery-text/70 hover:text-gallery-accent inline-block text-sm"
          >
            {t('work.backToGallery')}
          </Link>

          <header className="mt-6 max-w-2xl">
            <h1 className="font-serif text-4xl font-semibold">{work.title}</h1>
            <p className="text-gallery-text/70 mt-3 text-lg">{authorName}</p>
          </header>

          <dl className="border-gallery-muted mt-8 grid gap-4 border-y py-6 sm:grid-cols-2">
            <div>
              <dt className="text-gallery-text/60 text-xs tracking-widest uppercase">
                {t('work.fields.academicYear')}
              </dt>
              <dd className="mt-1">{work.academicYear}</dd>
            </div>
            <div>
              <dt className="text-gallery-text/60 text-xs tracking-widest uppercase">
                {t('work.fields.semester')}
              </dt>
              <dd className="mt-1">{formatSemesterLabel(tFilters, work.semester)}</dd>
            </div>
            <div>
              <dt className="text-gallery-text/60 text-xs tracking-widest uppercase">
                {t('work.fields.technique')}
              </dt>
              <dd className="mt-1">{formatTechniqueLabel(tFilters, work.technique)}</dd>
            </div>
            {work.dimensions && (
              <div>
                <dt className="text-gallery-text/60 text-xs tracking-widest uppercase">
                  {t('work.fields.dimensions')}
                </dt>
                <dd className="mt-1">{work.dimensions}</dd>
              </div>
            )}
            {instructor && (
              <div className="sm:col-span-2">
                <dt className="text-gallery-text/60 text-xs tracking-widest uppercase">
                  {t('work.fields.instructor')}
                </dt>
                <dd className="mt-1">
                  <Link href="/instructors" className="text-gallery-accent hover:underline">
                    {instructor.title} {instructor.firstName} {instructor.lastName}
                  </Link>
                </dd>
              </div>
            )}
          </dl>

          {work.description && (
            <p className="text-gallery-text/80 mt-6 max-w-2xl leading-relaxed">
              {work.description}
            </p>
          )}

          <figure className="mt-10 flex justify-center">
            <div className="bg-gallery-muted/20 rounded-lg p-3 md:p-4">
              <ArtworkImage
                src={work.fullSrc}
                alt={t('work.imageAlt', { title: work.title, author: authorName })}
                width={1200}
                height={1600}
                priority
                className="mx-auto max-h-[75vh] w-auto max-w-full"
                sizes="(max-width: 768px) 100vw, 768px"
              />
            </div>
          </figure>

          <nav
            className="border-gallery-muted mt-12 flex flex-wrap justify-between gap-4 border-t pt-8"
            aria-label={t('work.navAriaLabel')}
          >
            {prev ? (
              <Link
                href={`/gallery/${prev.id}`}
                className="hover:text-gallery-accent text-sm font-medium"
              >
                ← {prev.title}
              </Link>
            ) : (
              <span />
            )}
            {next ? (
              <Link
                href={`/gallery/${next.id}`}
                className="hover:text-gallery-accent ml-auto text-right text-sm font-medium"
              >
                {next.title} →
              </Link>
            ) : (
              <span />
            )}
          </nav>
        </div>
      </article>
    </PageTransition>
  );
}
