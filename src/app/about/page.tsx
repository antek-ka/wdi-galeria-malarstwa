import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import { PageTransition } from '@/components/layout/PageTransition';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqIds = ['scope', 'competencies', 'format', 'works'] as const;

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('metadata');

  return {
    title: t('about'),
  };
}

export default async function AboutPage() {
  const t = await getTranslations('about');

  return (
    <PageTransition>
      <div className="mx-auto max-w-3xl px-4 py-16 md:px-8">
        <h1 className="font-serif text-4xl font-semibold">{t('title')}</h1>
        <p className="text-gallery-text/80 mt-6 leading-relaxed">{t('intro')}</p>

        <Accordion className="mt-12 w-full" defaultValue={['scope']}>
          {faqIds.map((id) => (
            <AccordionItem key={id} value={id}>
              <AccordionTrigger className="text-left font-serif text-lg">
                {t(`faq.${id}.question`)}
              </AccordionTrigger>
              <AccordionContent className="text-gallery-text/80 leading-relaxed">
                {t(`faq.${id}.answer`)}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </PageTransition>
  );
}
