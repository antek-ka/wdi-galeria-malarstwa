# Implementacja

## Struktura plików

Drzewo w katalogu głównym (`wdi-galeria-malarstwa/`, pakiet npm: `wit-malarstwo`):

- `src/app` — strony App Router
- `src/components` — UI (galeria, home, prowadzący, layout)
- `src/data` — statyczne dane prac i fallback prowadzących
- `src/i18n` — konfiguracja next-intl i etykiety filtrów
- `src/lib` — utils, integracja z wit.edu.pl (`wit-instructors.ts`)
- `src/types` — typy `Work`, `Instructor`
- `messages/pl.json` — tłumaczenia interfejsu (język polski)
- `tests/` — Vitest i Playwright
- `docs/` — dokumentacja akademicka
- `public/images/` — logo WIT, katalogi na lokalne zdjęcia prac i prowadzących

## Decyzje architektoniczne

| Decyzja                | Wybór                   | Powód                                              |
| ---------------------- | ----------------------- | -------------------------------------------------- |
| Routing                | App Router              | Layouty, metadane, `generateStaticParams` dla prac |
| Dane prac              | Statyczne moduły TS     | Wersja podstawowa — bez CMS                        |
| Prowadzący             | Fetch z wit.edu.pl      | Aktualne profile kadry Grafiki; fallback lokalny   |
| Interaktywność galerii | Komponenty klienta      | Filtry i modal wymagają stanu w przeglądarce       |
| i18n                   | next-intl (locale `pl`) | Spójne etykiety UI i metadane SEO                  |

### Komponenty klienta (`'use client'`)

`Navbar`, `MobileMenu`, `HeroSection`, `HeroBackdrop`, `FeaturedWorks`, `SubjectTeaser`, `GalleryPageClient`, `GalleryGrid`, `GalleryCard`, `GalleryFilters`, `WorkModal`, `ImageLightbox`, `ArtworkImage`, `InstructorCard`, `InstructorCarousel`, `InstructorModal`, `PageTransition`

### Komponenty serwera

`layout.tsx`, `page.tsx` (strona główna), `about/page.tsx`, `gallery/page.tsx`, `gallery/[id]/page.tsx`, `instructors/page.tsx`, `contact/page.tsx`

## Internacjonalizacja (next-intl)

- Locale: `pl` — zdefiniowany w `src/i18n/request.ts`
- Treści UI: `messages/pl.json` (nawigacja, filtry, metadane, FAQ)
- Etykiety semestru i techniki: `src/i18n/labels.ts` (`formatSemesterLabel`, `formatTechniqueLabel`)
- Nawigacja: `src/i18n/navigation.ts` — wspólna lista tras dla `Navbar` i `Footer`

## Prowadzący z wit.edu.pl

`src/lib/wit-instructors.ts` pobiera listę wykładowców kierunku Grafika ze strony `wit.edu.pl/studia-licencjackie/grafika`, a następnie uzupełnia biografie z podstron `/osoby/[slug]`. Strona `/instructors` używa `revalidate: 86400` (ISR). Przy błędzie sieci serwis korzysta ze statycznego fallbacku w `src/data/instructors.ts`.

## Stylowanie

- Tailwind v4 ze zmiennymi CSS w `globals.css` — ciemny motyw galerii:
  - tło: `#060504`, tekst: `#e8e4dc`, akcent: `#c45a32`, muted: `#2a2724`
- shadcn/ui: `button`, `card`, `dialog`, `accordion`, `tabs`, `badge`, `separator`, `carousel`, `sheet`, `avatar`, `toggle`, `toggle-group`
- Tło strony: `SiteBackdrop`, `BackdropTexture`

## Animacje (Framer Motion)

| Komponent        | Animacja                         |
| ---------------- | -------------------------------- |
| `PageTransition` | Fade-in strony                   |
| `HeroSection`    | Skala + fade obrazu hero (1,2 s) |
| `FeaturedWorks`  | Kaskadowe wejście kart           |
| `GalleryGrid`    | Przejście filtra + stagger kart  |
| `GalleryCard`    | Uniesienie przy hover 4px        |
| `MobileMenu`     | Nakładka zjazdu z góry           |
| `InstructorCard` | Uniesienie przy hover 4px        |

## Czcionki

`Playfair_Display` → `--font-serif` (nagłówki), `DM_Sans` → `--font-sans` (treść) przez `next/font/google`.

## Obrazy

`next/image` z `sizes` dla breakpointów. Zdalne hosty w `next.config.ts`: `upload.wikimedia.org` (zastępcze arcydzieła w danych demonstracyjnych), `www.wit.edu.pl` (zdjęcia prowadzących). Naturalne proporcje w kolumnach.

## Filtrowanie

`GalleryFilters` aktualizuje `WorkFilterState`; `filterWorks()` w `utils.ts` zwraca przefiltrowaną tablicę; licznik w elemencie z `data-testid="works-count"`.

## Modal

`WorkModal` używa shadcn `Dialog` (Base UI); Escape zamyka; fokus zarządzany przez primitive dialogu; link do pełnej strony szczegółów do udostępniania.
