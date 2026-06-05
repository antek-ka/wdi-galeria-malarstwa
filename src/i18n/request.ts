import { getRequestConfig } from 'next-intl/server';

export const locale = 'pl' as const;

export default getRequestConfig(async () => ({
  locale,
  messages: (await import('../../messages/pl.json')).default,
}));
