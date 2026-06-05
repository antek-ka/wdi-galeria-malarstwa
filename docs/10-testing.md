# Testowanie

## Testy jednostkowe (Vitest + Testing Library)

| Plik                                 | Zakres                                                                   |
| ------------------------------------ | ------------------------------------------------------------------------ |
| `tests/unit/GalleryCard.test.tsx`    | Renderuje tytuł, autora, odznakę semestru                                |
| `tests/unit/GalleryFilters.test.tsx` | Filtr Semestr 2 aktualizuje widoczną liczbę                              |
| `tests/unit/utils.test.ts`           | `formatAuthorName`, `filterWorks` (semestr, technika)                    |
| `tests/unit/labels.test.ts`          | `formatSemesterLabel`, `formatTechniqueLabel`, polskie formy liczby prac |

Uruchomienie: `pnpm test`

## Testy E2E (Playwright)

| Plik                           | Zakres                                        |
| ------------------------------ | --------------------------------------------- |
| `tests/e2e/navigation.spec.ts` | Linki nawigacji → poprawne trasy              |
| `tests/e2e/gallery.spec.ts`    | Filtry Olej / Semestr 2, modal + Escape       |
| `tests/e2e/responsive.spec.ts` | Brak overflow przy 390/768/1440, menu mobilne |

Uruchomienie: `pnpm test:e2e` — `playwright.config.ts` buduje aplikację i uruchamia serwer produkcyjny na porcie `3001`.

## Lista kontrolna ręczna

| ID     | Wymaganie                             | OK  |
| ------ | ------------------------------------- | --- |
| FR-01  | Wyróżnione prace na stronie głównej   | ☐   |
| FR-03  | Galeria z 18 pracami demonstracyjnymi | ☐   |
| FR-06  | Modal po kliknięciu karty             | ☐   |
| NFR-01 | 390px — brak poziomego scrolla        | ☐   |
| NFR-05 | `pnpm lint` bez błędów                | ☐   |
| NFR-06 | `pnpm type-check` bez błędów          | ☐   |
