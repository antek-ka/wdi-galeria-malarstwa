import { cn } from '@/lib/utils';

const GRAIN_TEXTURE = `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`;

/** Grid, scan lines, and grain — identical on hero and site backdrop */
export function BackdropPattern({ className }: { className?: string }) {
  return (
    <div className={cn('pointer-events-none', className)} aria-hidden>
      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage: `
            linear-gradient(rgb(232 228 220 / 0.14) 1px, transparent 1px),
            linear-gradient(90deg, rgb(232 228 220 / 0.14) 1px, transparent 1px)
          `,
          backgroundSize: '36px 36px',
          maskImage: 'radial-gradient(ellipse 95% 90% at 50% 35%, black 20%, transparent 82%)',
        }}
      />

      <div
        className="absolute inset-0 opacity-[0.3]"
        style={{
          background: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 4px,
            rgb(232 228 220 / 0.06) 4px,
            rgb(232 228 220 / 0.06) 5px
          )`,
        }}
      />

      <div
        className="absolute inset-0 opacity-[0.16] mix-blend-soft-light"
        style={{ backgroundImage: GRAIN_TEXTURE }}
      />
    </div>
  );
}

export function BackdropTexture({ className }: { className?: string }) {
  return (
    <div className={cn('pointer-events-none', className)} aria-hidden>
      <BackdropPattern className="absolute inset-0" />

      <div
        className="absolute h-[min(70vw,520px)] w-[min(70vw,520px)] rounded-full blur-3xl"
        style={{
          left: '8%',
          top: '12%',
          background:
            'radial-gradient(circle, rgb(230 95 35 / 0.28) 0%, rgb(196 70 28 / 0.12) 42%, transparent 70%)',
          opacity: 0.85,
        }}
      />

      <div
        className="absolute h-[min(55vw,400px)] w-[min(55vw,400px)] rounded-full blur-3xl"
        style={{
          right: '5%',
          top: '8%',
          background:
            'radial-gradient(circle, rgb(240 235 225 / 0.14) 0%, rgb(180 175 165 / 0.06) 48%, transparent 72%)',
        }}
      />

      <div
        className="absolute h-[min(40vw,280px)] w-[min(40vw,280px)] rounded-full blur-3xl"
        style={{
          left: '55%',
          bottom: '15%',
          background:
            'radial-gradient(circle, rgb(140 155 175 / 0.18) 0%, rgb(90 100 120 / 0.07) 52%, transparent 68%)',
        }}
      />

      <div className="absolute inset-0 bg-linear-to-b from-[#060504]/80 via-transparent to-[#060504]/90" />
    </div>
  );
}
