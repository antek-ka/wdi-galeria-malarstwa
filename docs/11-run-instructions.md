# Instrukcja uruchomienia

**Wymagania:** Node.js ≥ 20, pnpm ≥ 9, Git

Instalacja pnpm (jeśli potrzebna): `npm install -g pnpm`

## Kroki

1. **Klonowanie**

   ```bash
   git clone https://github.com/antek-ka/wdi-galeria-malarstwa.git
   cd wdi-galeria-malarstwa
   ```

   Nazwa pakietu npm: `wdi-galeria-malarstwa`.

2. **Instalacja zależności**

   ```bash
   pnpm install
   ```

3. **Serwer deweloperski**

   ```bash
   pnpm dev
   ```

   Otwórz http://localhost:3000

4. **Lint**

   ```bash
   pnpm lint
   ```

5. **Sprawdzenie typów**

   ```bash
   pnpm type-check
   ```

6. **Testy jednostkowe**

   ```bash
   pnpm test
   ```

7. **Testy E2E** (build + serwer produkcyjny na porcie 3001)

   ```bash
   pnpm test:e2e
   ```

8. **Build produkcyjny**

   ```bash
   pnpm build
   pnpm start
   ```

9. **Sprawdzenie formatowania**
   ```bash
   pnpm format:check
   ```

## Skrypty w package.json

| Skrypt         | Polecenie                             |
| -------------- | ------------------------------------- |
| `dev`          | `next dev --turbopack`                |
| `build`        | `next build`                          |
| `start`        | `next start`                          |
| `lint`         | `eslint . --max-warnings 0`           |
| `lint:fix`     | `eslint . --fix`                      |
| `type-check`   | `tsc --noEmit`                        |
| `format`       | `prettier --write .`                  |
| `format:check` | `prettier --check .`                  |
| `test`         | `vitest run`                          |
| `test:watch`   | `vitest`                              |
| `test:e2e`     | `playwright test`                     |
| `test:e2e:ui`  | `playwright test --ui`                |
| `pre-commit`   | `lint-staged && type-check && test`   |
| `verify`       | `lint && type-check && test && build` |
| `prepare`      | `husky`                               |

## Husky

- `pre-commit` → `pnpm pre-commit` (lint-staged, type-check, testy jednostkowe)

Testy E2E (`pnpm test:e2e`) uruchamiane są lokalnie i w CI (`.github/workflows/ci.yml`).

## Cursor MCP

Plik `.mcp.json` konfiguruje `next-devtools` do diagnostyki w Cursor.
