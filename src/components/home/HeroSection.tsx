'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { HeroBackdrop } from '@/components/home/HeroBackdrop';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function HeroSection() {
  const t = useTranslations();

  return (
    <section
      className="bg-gallery-bg relative isolate z-10 -mt-[var(--navbar-height)] flex min-h-[90vh] items-end overflow-hidden pt-36"
      data-hero-section
    >
      <HeroBackdrop />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-16 md:px-8 md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.8 }}
        >
          <a
            href="https://wit.edu.pl"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gallery-text/70 hover:text-gallery-text mb-6 inline-flex items-center gap-2 text-sm transition-colors"
          >
            <Image
              src="/images/wit-logo.png"
              alt={t('a11y.academyLogoAlt')}
              width={56}
              height={23}
            />
            <span>{t('hero.academy')}</span>
          </a>
          <h1 className="text-gallery-text font-serif text-4xl leading-tight font-semibold tracking-tight md:text-6xl">
            {t('hero.title')}
          </h1>
          <p className="text-gallery-text/65 mt-4 max-w-xl text-lg leading-relaxed">
            {t('hero.subtitle')}
          </p>
          <Link
            href="/gallery"
            className={cn(
              buttonVariants({ size: 'lg' }),
              'bg-gallery-accent text-gallery-bg hover:bg-gallery-accent/85 mt-8',
            )}
          >
            {t('hero.cta')}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
