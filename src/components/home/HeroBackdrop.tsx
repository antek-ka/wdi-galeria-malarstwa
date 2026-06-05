'use client';

import { motion, useReducedMotion } from 'framer-motion';

import { BackdropPattern } from '@/components/layout/BackdropTexture';

export function HeroBackdrop() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden>
      <BackdropPattern className="absolute inset-0" />

      <motion.div
        className="pointer-events-none absolute h-[min(85vw,640px)] w-[min(85vw,640px)] rounded-full blur-[64px]"
        style={{
          background:
            'radial-gradient(circle, rgb(230 95 35 / 0.72) 0%, rgb(196 70 28 / 0.35) 38%, rgb(196 70 28 / 0.12) 58%, transparent 72%)',
          left: 0,
          top: 0,
        }}
        animate={
          reduceMotion
            ? undefined
            : {
                x: ['-12vw', '38vw', '62vw', '48vw', '8vw', '-18vw', '-12vw'],
                y: ['-8vh', '6vh', '22vh', '52vh', '68vh', '38vh', '-8vh'],
                scale: [1, 1.1, 1.18, 1.05, 1.14, 0.94, 1],
                opacity: [0.78, 0.95, 1, 0.92, 1, 0.82, 0.78],
              }
        }
        transition={
          reduceMotion ? undefined : { duration: 24, repeat: Infinity, ease: 'easeInOut' }
        }
      />

      <motion.div
        className="pointer-events-none absolute h-[min(65vw,480px)] w-[min(65vw,480px)] rounded-full blur-[56px]"
        style={{
          background:
            'radial-gradient(circle, rgb(240 235 225 / 0.28) 0%, rgb(180 175 165 / 0.12) 45%, transparent 70%)',
          right: '-8%',
          top: '0%',
        }}
        animate={
          reduceMotion
            ? undefined
            : {
                x: [0, -140, -50, 0],
                y: [0, 120, 60, 0],
                opacity: [0.55, 0.95, 0.65, 0.55],
              }
        }
        transition={
          reduceMotion
            ? undefined
            : { duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }
        }
      />

      <motion.div
        className="pointer-events-none absolute h-[min(45vw,320px)] w-[min(45vw,320px)] rounded-full blur-[48px]"
        style={{
          background:
            'radial-gradient(circle, rgb(140 155 175 / 0.35) 0%, rgb(90 100 120 / 0.15) 50%, transparent 68%)',
          left: '40%',
          bottom: '10%',
        }}
        animate={
          reduceMotion
            ? undefined
            : {
                x: [0, -100, 60, 0],
                y: [0, -70, 40, 0],
                opacity: [0.4, 0.8, 0.5, 0.4],
              }
        }
        transition={
          reduceMotion ? undefined : { duration: 20, repeat: Infinity, ease: 'easeInOut', delay: 4 }
        }
      />

      {!reduceMotion && (
        <>
          <motion.div
            className="pointer-events-none absolute inset-x-0 h-[2px]"
            style={{
              background:
                'linear-gradient(90deg, transparent, rgb(240 235 225 / 0.55) 15%, rgb(255 120 45 / 0.95) 50%, rgb(240 235 225 / 0.55) 85%, transparent)',
              boxShadow: '0 0 40px rgb(230 95 35 / 0.65), 0 0 80px rgb(230 95 35 / 0.25)',
            }}
            initial={{ top: '-3%' }}
            animate={{ top: ['-3%', '103%'] }}
            transition={{ duration: 9, repeat: Infinity, ease: 'linear' }}
          />
          <motion.div
            className="pointer-events-none absolute inset-x-0 h-px opacity-60"
            style={{
              background:
                'linear-gradient(90deg, transparent, rgb(180 190 210 / 0.4) 50%, transparent)',
              boxShadow: '0 0 20px rgb(180 190 210 / 0.35)',
            }}
            initial={{ top: '103%' }}
            animate={{ top: ['103%', '-3%'] }}
            transition={{ duration: 13, repeat: Infinity, ease: 'linear', delay: 3 }}
          />
        </>
      )}

      <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-[#060504] via-[#060504]/20 to-transparent" />
    </div>
  );
}
