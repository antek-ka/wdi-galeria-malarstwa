import type { Metadata } from 'next';
import Link from 'next/link';
import { getTranslations } from 'next-intl/server';

import { PageTransition } from '@/components/layout/PageTransition';
import { Separator } from '@/components/ui/separator';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('metadata');

  return {
    title: t('contact'),
  };
}

export default async function ContactPage() {
  const t = await getTranslations('contact');

  return (
    <PageTransition>
      <div className="mx-auto max-w-3xl px-4 py-16 md:px-8">
        <h1 className="font-serif text-4xl font-semibold">{t('title')}</h1>
        <p className="text-gallery-text/80 mt-4 leading-relaxed">{t('intro')}</p>

        <Separator className="my-8" />

        <section>
          <h2 className="font-serif text-xl font-semibold">{t('academy.title')}</h2>
          <p className="text-gallery-text/80 mt-3 text-sm leading-relaxed">
            {t('academy.addressLine1')}
          </p>
          <p className="text-gallery-text/80 mt-3 text-sm leading-relaxed">
            {t('academy.addressLine2')}
          </p>
          <p className="mt-3 text-sm">
            {t('academy.emailLabel')}{' '}
            <a href="mailto:wig@wit.edu.pl" className="text-gallery-accent hover:underline">
              wig@wit.edu.pl
            </a>
          </p>
        </section>

        <Separator className="my-8" />

        <section>
          <h2 className="font-serif text-xl font-semibold">{t('website.title')}</h2>
          <p className="text-gallery-text/80 mt-3 text-sm">
            <Link
              href="https://wit.edu.pl"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gallery-accent hover:underline"
            >
              wit.edu.pl
            </Link>
          </p>
        </section>

        <Separator className="my-8" />

        <section>
          <h2 className="font-serif text-xl font-semibold">{t('submissions.title')}</h2>
          <p className="text-gallery-text/80 mt-3 text-sm leading-relaxed">
            {t('submissions.body')}
          </p>
        </section>
      </div>
    </PageTransition>
  );
}
