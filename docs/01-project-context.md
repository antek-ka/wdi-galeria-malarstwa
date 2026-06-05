# Kontekst projektu

## Tytuł projektu

**Galeria Malarstwa WIT**

## Autor

Antoni Karlsson - projekt indywidualny.

## Wybrany obszar

**Prace malarskie** studentów na kierunku **Grafika**.

## Cel projektu

Projekt i budowa responsywnej stronę prezentującej prace malarskie studentów, opisującej przedmiot, profile prowadzących oraz linkującą do Akademii WIT. Serwis wspiera rekrutację, promocję studentów i rozbudowę semestr po semestrze bez CMS w wersji podstawowej.

## Kontekst

Akademia WIT prowadzi galerie przedmiotowe dla Grafiki (np. [internetowa.wit.edu.pl](https://internetowa.wit.edu.pl)). Siostrzane serwisy takie jak mają rozszerzyć ten model o malarstwo, animację, 3D i skład publikacji. Ten projekt to prototyp galerii malarstwa.

## Wariant implementacji

**Wersja podstawowa** — prototyp frontendu ze statycznymi danymi prac w TypeScript, obrazami zastępczymi z Wikimedia Commons oraz profilem prowadzących pobieranym z wit.edu.pl (z lokalnym fallbackiem przy braku połączenia).

## Uzasadnienie technologii

| Wybór                   | Uzasadnienie                                                          |
| ----------------------- | --------------------------------------------------------------------- |
| **Next.js 16**          | App Router, SSG dla udostępnialnych URL prac, `next/image`, wydajność |
| **TypeScript**          | Typowane modele `Work` i `Instructor`, bezpieczniejsze refaktoryzacje |
| **shadcn/ui**           | Dostępny Dialog, Accordion, Carousel bez ciężkiego własnego CSS       |
| **Tailwind CSS v4**     | Szybki układ galerii, spójna paleta kolorów                           |
| **Framer Motion**       | Subtelne animacje hero i kart, nie konkurujące z obrazami             |
| **next-intl**           | Polski interfejs i metadane stron z pliku `messages/pl.json`          |
| **Vitest + Playwright** | Szybkie testy jednostkowe; E2E nawigacji i responsywności             |

Alternatywy (czysty HTML, SPA tylko na Vite) odrzucono, bo Next.js łączy routing, metadane i optymalizację obrazów w jednym toolchainie zgodnym z wymaganiami jakości produkcyjnej zadania.
