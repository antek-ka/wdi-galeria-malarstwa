import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import { GalleryPageClient } from '@/app/gallery/GalleryPageClient';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('metadata');

  return {
    title: t('gallery'),
  };
}

export default function GalleryPage() {
  return <GalleryPageClient />;
}
