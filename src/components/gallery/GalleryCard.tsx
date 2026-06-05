'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { ArtworkImage } from '@/components/gallery/ArtworkImage';

import { Badge } from '@/components/ui/badge';
import { formatSemesterLabel, formatTechniqueLabel } from '@/i18n/labels';
import { formatAuthorName } from '@/lib/utils';
import type { Work } from '@/types/work';

type GalleryCardProps = {
  work: Work;
  onSelect?: (work: Work) => void;
  href?: string;
  imageSizes?: string;
};

export function GalleryCard({
  work,
  onSelect,
  href,
  imageSizes = '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw',
}: GalleryCardProps) {
  const tGallery = useTranslations('gallery.card');
  const tFilters = useTranslations('filters');
  const authorName = formatAuthorName(work.author);

  const content = (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="group bg-card border-gallery-muted overflow-hidden rounded-sm border shadow-none"
      data-testid="gallery-card"
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden">
        <ArtworkImage
          src={work.thumbnailSrc}
          alt={tGallery('imageAlt', { title: work.title, author: authorName })}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          sizes={imageSizes}
        />
      </div>
      <div className="space-y-2 p-4">
        <h3 className="font-serif text-lg leading-snug font-medium">{work.title}</h3>
        <p className="text-gallery-text/70 text-sm">{authorName}</p>
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary" data-testid="semester-badge">
            {formatSemesterLabel(tFilters, work.semester)}
          </Badge>
          <Badge variant="outline">{formatTechniqueLabel(tFilters, work.technique)}</Badge>
        </div>
      </div>
    </motion.article>
  );

  if (href) {
    return (
      <Link
        href={href}
        className="focus-visible:outline-gallery-accent block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type="button"
      className="focus-visible:outline-gallery-accent w-full text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
      onClick={() => onSelect?.(work)}
      aria-label={tGallery('viewAria', { title: work.title })}
    >
      {content}
    </button>
  );
}
