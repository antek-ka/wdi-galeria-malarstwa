'use client';

import { InstructorCard } from '@/components/instructors/InstructorCard';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import type { Instructor } from '@/types/instructor';

type InstructorCarouselProps = {
  instructors: Instructor[];
};

export function InstructorCarousel({ instructors }: InstructorCarouselProps) {
  return (
    <Carousel
      opts={{
        align: 'start',
      }}
      className="w-full"
    >
      <CarouselContent>
        {instructors.map((instructor) => (
          <CarouselItem key={instructor.id} className="basis-full md:basis-1/2 lg:basis-1/3">
            <InstructorCard instructor={instructor} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious
        size="icon"
        className="bg-gallery-accent text-gallery-bg hover:bg-gallery-accent/85 hover:text-gallery-bg left-2 cursor-pointer border-0 active:translate-y-0 disabled:opacity-40 [&_svg]:size-5"
      />
      <CarouselNext
        size="icon"
        className="bg-gallery-accent text-gallery-bg hover:bg-gallery-accent/85 hover:text-gallery-bg right-2 cursor-pointer border-0 active:translate-y-0 disabled:opacity-40 [&_svg]:size-5"
      />
    </Carousel>
  );
}
