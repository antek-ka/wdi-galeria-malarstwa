'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { GalleryCard } from '@/components/gallery/GalleryCard';
import { cn } from '@/lib/utils';
import type { Work } from '@/types/work';

type FeaturedWorksProps = {
  works: Work[];
};

export function FeaturedWorks({ works }: FeaturedWorksProps) {
  const t = useTranslations('home.featured');

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 md:px-8">
      <div className="mb-10 flex items-end justify-between gap-4">
        <div>
          <h2 className="font-serif text-3xl font-semibold">{t('title')}</h2>
          <p className="text-gallery-text/70 mt-2 max-w-lg text-sm">{t('subtitle')}</p>
        </div>
        <Link href="/gallery" className="text-gallery-accent text-sm font-medium hover:underline">
          {t('viewAll')}
        </Link>
      </div>
      <motion.div
        className="wide:grid-cols-3 grid grid-cols-1 gap-6 md:grid-cols-2"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.12 } },
        }}
      >
        {works.map((work, index) => (
          <motion.div
            key={work.id}
            className={cn(
              index === 2 && 'wide:col-span-1 wide:block md:col-span-2 md:flex md:justify-center',
            )}
            variants={{
              hidden: { opacity: 0, y: 16 },
              show: { opacity: 1, y: 0 },
            }}
          >
            <div
              className={cn(
                'w-full',
                index === 2 && 'wide:max-w-none md:max-w-[calc((100%-1.5rem)/2)]',
              )}
            >
              <GalleryCard
                work={work}
                href={`/gallery/${work.id}`}
                imageSizes="(max-width: 768px) 100vw, (max-width: 1440px) 50vw, 33vw"
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
