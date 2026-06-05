import Link from 'next/link';
import { getTranslations } from 'next-intl/server';

import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export async function SubjectTeaser() {
  const t = await getTranslations('home.subject');

  return (
    <section className="border-gallery-muted bg-gallery-surface mx-auto max-w-7xl rounded-sm border px-6 py-14 md:px-12">
      <h2 className="font-serif text-2xl font-semibold md:text-3xl">{t('title')}</h2>
      <p className="text-gallery-text/80 mt-4 max-w-2xl leading-relaxed">{t('paragraph1')}</p>
      <p className="text-gallery-text/80 mt-3 max-w-2xl leading-relaxed">{t('paragraph2')}</p>
      <Link
        href="/about"
        className={cn(
          buttonVariants({ variant: 'outline' }),
          'border-gallery-accent text-gallery-accent mt-6',
        )}
      >
        {t('cta')}
      </Link>
    </section>
  );
}
