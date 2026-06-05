import { BackdropTexture } from '@/components/layout/BackdropTexture';

export function SiteBackdrop() {
  return (
    <div className="fixed inset-0 -z-10 bg-[#060504]" aria-hidden data-testid="site-backdrop">
      <BackdropTexture className="absolute inset-0" />
    </div>
  );
}
