import type { Metadata } from 'next';
import { DM_Sans, Playfair_Display } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';

import { Footer } from '@/components/layout/Footer';
import { Navbar } from '@/components/layout/Navbar';
import { SiteBackdrop } from '@/components/layout/SiteBackdrop';

import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-serif',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-sans',
  display: 'swap',
});

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('metadata');

  return {
    title: {
      default: t('title.default'),
      template: t('title.template'),
    },
    description: t('description'),
    icons: {
      icon: '/images/wit-logo-emblem.png',
      shortcut: '/images/wit-logo-emblem.png',
      apple: '/images/wit-logo-emblem.png',
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const messages = await getMessages();

  return (
    <html lang="pl" className={`${playfair.variable} ${dmSans.variable} h-full`}>
      <body className="bg-gallery-bg flex min-h-full flex-col">
        <NextIntlClientProvider messages={messages}>
          <SiteBackdrop />
          <Navbar />
          <main id="main-content" className="relative z-0 flex-1 pt-[var(--navbar-height)]">
            {children}
          </main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
