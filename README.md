# Galeria Malarstwa WIT

Responsywna galeria prac malarskich studentów programu **Grafika** w Akademii WIT (_malarstwo.wit.edu.pl_).

Zbudowana w **Next.js 16**, TypeScript, Tailwind CSS v4 i shadcn/ui.

## Szybki start

```bash
pnpm install
pnpm dev
```

Otwórz [http://localhost:3000](http://localhost:3000).

Pełna instrukcja: [docs/11-run-instructions.md](./docs/11-run-instructions.md).

## Dokumentacja projektu

Spis i opisy plików: [docs/README.md](./docs/README.md).

## Skrypty

| Polecenie           | Opis                   |
| ------------------- | ---------------------- |
| `pnpm dev`          | Serwer deweloperski    |
| `pnpm build`        | Build produkcyjny      |
| `pnpm lint`         | ESLint                 |
| `pnpm type-check`   | Sprawdzenie TypeScript |
| `pnpm test`         | Testy jednostkowe      |
| `pnpm test:e2e`     | Testy Playwright       |
| `pnpm format:check` | Sprawdzenie Prettier   |

## Struktura

- `src/app` — strony (App Router)
- `src/components` — UI i layout
- `src/data` — statyczne dane prac
- `src/i18n` + `messages/pl.json` — polski interfejs (next-intl)
- `src/lib` — utils, pobieranie prowadzących z wit.edu.pl
- `docs/` — dokumentacja akademicka (po polsku)
