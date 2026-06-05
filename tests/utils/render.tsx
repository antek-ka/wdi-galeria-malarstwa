import { render, type RenderOptions } from '@testing-library/react';
import { NextIntlClientProvider } from 'next-intl';
import type { ReactElement, ReactNode } from 'react';

import messages from '../../messages/pl.json';

type RenderWithIntlOptions = Omit<RenderOptions, 'wrapper'>;

export function renderWithIntl(ui: ReactElement, options?: RenderWithIntlOptions) {
  function Wrapper({ children }: { children: ReactNode }) {
    return (
      <NextIntlClientProvider locale="pl" messages={messages}>
        {children}
      </NextIntlClientProvider>
    );
  }

  return render(ui, { wrapper: Wrapper, ...options });
}
