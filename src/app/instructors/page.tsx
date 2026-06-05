import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import { InstructorCarousel } from '@/components/instructors/InstructorCarousel';
import { PageTransition } from '@/components/layout/PageTransition';
import { instructors as fallbackInstructors } from '@/data/instructors';
import { fetchWitGrafikaInstructors } from '@/lib/wit-instructors';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('metadata');

  return {
    title: t('instructors'),
  };
}

export const revalidate = 86_400;

export default async function InstructorsPage() {
  const t = await getTranslations('instructors');
  let instructors = fallbackInstructors;

  try {
    instructors = await fetchWitGrafikaInstructors();
  } catch {
    // Keep local fallback data when WIT is unreachable.
  }

  return (
    <PageTransition>
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <header className="mb-12 max-w-2xl">
          <h1 className="font-serif text-4xl font-semibold">{t('title')}</h1>
          <p className="text-gallery-text/70 mt-3 leading-relaxed">{t('intro')}</p>
        </header>
        <InstructorCarousel instructors={instructors} />
      </div>
    </PageTransition>
  );
}
