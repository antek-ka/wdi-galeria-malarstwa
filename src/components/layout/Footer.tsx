import Image from 'next/image';
import Link from 'next/link';
import { getTranslations } from 'next-intl/server';

import { navItems } from '@/i18n/navigation';

export async function Footer() {
  const t = await getTranslations();
  const year = new Date().getFullYear();

  const footerLinks = navItems.map((item) => ({
    href: item.href,
    label: t(`nav.${item.key}`),
  }));

  return (
    <footer className="border-gallery-muted bg-gallery-surface mt-auto border-t">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-3 md:px-8">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <Image src="/images/wit-logo.png" alt="" width={64} height={26} aria-hidden />
            <p className="font-serif text-lg font-semibold">{t('brand.full')}</p>
          </div>
          <p className="text-gallery-text/70 text-sm leading-relaxed">{t('footer.tagline')}</p>
        </div>

        <nav aria-label={t('a11y.footerNav')}>
          <p className="mb-3 text-xs font-semibold tracking-widest uppercase opacity-70">
            {t('footer.browse')}
          </p>
          <ul className="space-y-2 text-sm">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-gallery-accent transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="text-sm">
          <p className="mb-3 text-xs font-semibold tracking-widest uppercase opacity-70">
            {t('footer.academy')}
          </p>
          <a
            href="https://wit.edu.pl"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gallery-accent underline-offset-4 hover:underline"
          >
            wit.edu.pl
          </a>
          <p className="text-gallery-text/50 mt-6 text-xs">{t('footer.copyright', { year })}</p>
        </div>
      </div>
    </footer>
  );
}
