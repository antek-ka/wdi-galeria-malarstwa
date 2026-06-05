'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

import { InstructorModal } from '@/components/instructors/InstructorModal';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import type { Instructor } from '@/types/instructor';

type InstructorCardProps = {
  instructor: Instructor;
};

export function InstructorCard({ instructor }: InstructorCardProps) {
  const t = useTranslations('instructors.card');
  const [modalOpen, setModalOpen] = useState(false);
  const fullName = `${instructor.title} ${instructor.firstName} ${instructor.lastName}`;

  return (
    <>
      <button
        type="button"
        className="focus-visible:outline-gallery-accent w-full cursor-pointer text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
        onClick={() => setModalOpen(true)}
        aria-label={t('viewProfileAria', { name: fullName })}
      >
        <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
          <Card className="group h-full overflow-hidden">
            <div className="relative aspect-[3/4] w-full overflow-hidden">
              <Image
                src={instructor.photoSrc}
                alt={t('portraitAlt', { name: fullName })}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <CardHeader>
              <CardTitle className="font-serif text-xl">{fullName}</CardTitle>
              <CardDescription>{instructor.specialisation}</CardDescription>
            </CardHeader>
          </Card>
        </motion.div>
      </button>

      <InstructorModal instructor={instructor} open={modalOpen} onOpenChange={setModalOpen} />
    </>
  );
}
