'use client';

import { AnimatePresence, motion } from 'framer-motion';

import { GalleryCard } from '@/components/gallery/GalleryCard';
import type { Work } from '@/types/work';

type GalleryGridProps = {
  works: Work[];
  onSelectWork: (work: Work) => void;
};

export function GalleryGrid({ works, onSelectWork }: GalleryGridProps) {
  return (
    <AnimatePresence mode="popLayout">
      <motion.div
        key={works.map((w) => w.id).join(',')}
        className="columns-1 gap-6 space-y-6 sm:columns-2 lg:columns-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        data-testid="gallery-grid"
      >
        {works.map((work, index) => (
          <motion.div
            key={work.id}
            className="break-inside-avoid"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.04 }}
          >
            <GalleryCard work={work} onSelect={onSelectWork} />
          </motion.div>
        ))}
      </motion.div>
    </AnimatePresence>
  );
}
