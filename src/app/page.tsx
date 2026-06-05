import { FeaturedWorks } from '@/components/home/FeaturedWorks';
import { HeroSection } from '@/components/home/HeroSection';
import { SubjectTeaser } from '@/components/home/SubjectTeaser';
import { PageTransition } from '@/components/layout/PageTransition';
import { getFeaturedWorks, works } from '@/data/works';

export default function HomePage() {
  const featured = getFeaturedWorks();

  return (
    <PageTransition>
      <HeroSection />
      <div className="mx-auto max-w-7xl space-y-20 px-4 py-16 md:px-8">
        <FeaturedWorks works={featured.length ? featured : works.slice(0, 3)} />
        <SubjectTeaser />
      </div>
    </PageTransition>
  );
}
