'use client';

import { ArtworkImage } from '@/components/gallery/ArtworkImage';

import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';

type ImageLightboxProps = {
  src: string;
  alt: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function ImageLightbox({ src, alt, open, onOpenChange }: ImageLightboxProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl border-none bg-black/95 p-2">
        <DialogTitle className="sr-only">{alt}</DialogTitle>
        <div className="relative aspect-[4/3] min-h-[50vh] w-full">
          <ArtworkImage src={src} alt={alt} fill className="object-contain" sizes="100vw" />
        </div>
      </DialogContent>
    </Dialog>
  );
}
