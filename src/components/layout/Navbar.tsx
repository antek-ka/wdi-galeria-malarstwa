'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';

import { MobileMenu } from '@/components/layout/MobileMenu';
import { navItems } from '@/i18n/navigation';
import { cn } from '@/lib/utils';

export function Navbar() {
  const t = useTranslations();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = navItems.map((item) => ({
    href: item.href,
    label: t(`nav.${item.key}`),
  }));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <a
        href="#main-content"
        className="focus:bg-gallery-accent focus:text-gallery-bg sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:rounded-md focus:px-4 focus:py-2"
      >
        {t('a11y.skipToContent')}
      </a>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 box-border h-[var(--navbar-height)] transition-all duration-300',
          scrolled
            ? 'border-gallery-muted bg-gallery-bg/90 border-b backdrop-blur-md'
            : 'bg-transparent',
        )}
        aria-label={t('a11y.mainNav')}
      >
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 md:px-8">
          <Link
            href="/"
            className="flex min-w-0 items-center gap-3.5 md:gap-4"
            aria-label={t('a11y.homeLink')}
          >
            <Image
              src="/images/wit-logo.png"
              alt={t('a11y.logoAlt')}
              width={116}
              height={48}
              className="h-10 w-auto shrink-0 md:h-12"
              priority
            />
            <span className="text-gallery-text font-serif text-base leading-tight font-bold tracking-wide md:text-lg lg:text-xl">
              {t('brand.short')}
            </span>
          </Link>

          <nav
            className="hidden items-center gap-6 min-[769px]:flex"
            aria-label={t('a11y.mainMenu')}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={pathname === link.href ? 'page' : undefined}
                className={cn(
                  'hover:text-gallery-accent text-sm transition-colors',
                  pathname === link.href
                    ? 'text-gallery-accent font-medium'
                    : 'text-gallery-text/80',
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            data-testid="mobile-menu-button"
            className="text-gallery-text min-[769px]:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen(true)}
          >
            <span className="sr-only">{t('a11y.openMenu')}</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </button>
        </div>
      </header>
      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        links={navLinks}
        pathname={pathname}
      />
    </>
  );
}
