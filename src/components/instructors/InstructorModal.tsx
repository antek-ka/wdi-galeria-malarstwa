'use client';

import { useTranslations } from 'next-intl';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import type { Instructor } from '@/types/instructor';

type InstructorModalProps = {
  instructor: Instructor | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function InstructorModal({ instructor, open, onOpenChange }: InstructorModalProps) {
  const t = useTranslations('instructors.modal');

  if (!instructor) return null;

  const fullName = `${instructor.title} ${instructor.firstName} ${instructor.lastName}`;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="bg-gallery-surface flex max-h-[min(90dvh,90vh)] min-h-0 w-full max-w-none flex-col gap-0 overflow-hidden rounded-none p-0 sm:max-w-none md:max-w-lg md:rounded-xl"
        data-testid="instructor-modal"
      >
        <div className="flex min-h-0 flex-1 flex-col overflow-y-auto px-5 py-5 md:px-6 md:py-6">
          <DialogHeader className="gap-1.5 pr-8 text-left">
            <DialogTitle className="font-serif text-xl leading-tight md:text-2xl">
              {fullName}
            </DialogTitle>
            <DialogDescription className="text-gallery-text/70">
              {instructor.specialisation}
            </DialogDescription>
          </DialogHeader>

          <p className="text-gallery-text/80 mt-4 text-sm leading-relaxed">{instructor.bio}</p>

          {instructor.websiteUrl && (
            <a
              href={instructor.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gallery-accent mt-6 inline-block text-sm font-medium hover:underline"
            >
              {t('website')}
            </a>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
