'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { XIcon } from 'lucide-react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useEffect } from 'react';

import { cn } from '@/lib/utils';

type NavLink = { href: string; label: string };

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
  links: NavLink[];
  pathname: string;
};

export function MobileMenu({ open, onClose, links, pathname }: MobileMenuProps) {
  const t = useTranslations('a11y');

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          id="mobile-menu"
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.25 }}
          className="bg-gallery-bg fixed inset-0 z-[60] flex flex-col px-6 pt-24 min-[769px]:hidden"
          role="dialog"
          aria-modal="true"
          aria-label={t('mobileNav')}
        >
          <button
            type="button"
            className="text-gallery-text hover:text-gallery-accent absolute top-6 right-6 transition-colors"
            onClick={onClose}
            aria-label={t('closeMenu')}
          >
            <XIcon size={24} aria-hidden />
          </button>
          <nav className="flex flex-col gap-6" aria-label={t('mobileMenu')}>
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                aria-current={pathname === link.href ? 'page' : undefined}
                className={cn(
                  'font-serif text-2xl',
                  pathname === link.href ? 'text-gallery-accent' : 'text-gallery-text',
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
