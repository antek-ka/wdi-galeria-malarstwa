# Diagramy UML

## Diagram przypadków użycia

```mermaid
flowchart LR
  Guest((Gość))
  Student((Student))
  Instructor((Prowadzący))

  Guest --> UC1[Przeglądanie galerii]
  Guest --> UC2[Filtrowanie prac]
  Guest --> UC3[Podgląd szczegółów pracy]
  Guest --> UC4[Profile prowadzących]
  Guest --> UC5[Przejście na wit.edu.pl]

  Student --> UC2
  Student --> UC3
  Instructor --> UC4
```

## Diagram komponentów

```mermaid
flowchart TB
  Browser[Przeglądarka]
  Next[Next.js App Router]
  Layout[Navbar / Footer]
  Pages[Strony: główna, O przedmiocie, Galeria, Szczegóły, Prowadzący, Kontakt]
  Components[GalleryCard, GalleryFilters, WorkModal, InstructorCarousel, ...]
  Data[(works.ts, instructors.ts, categories.ts)]
  WIT[wit.edu.pl API HTML]

  Browser --> Next
  Next --> Layout
  Next --> Pages
  Pages --> Components
  Components --> Data
  Pages --> WIT
```

## Model danych

```
┌─────────────┐       ┌─────────────┐
│   Author    │       │ Instructor  │
├─────────────┤       ├─────────────┤
│ firstName   │       │ id          │
│ lastName    │       │ firstName   │
└──────┬──────┘       │ lastName    │
       │              │ title       │
       │ zagnieżdżony │ photoSrc    │
       ▼              │ bio         │
┌─────────────┐       │ specialisation
│    Work     │       │ websiteUrl? │
├─────────────┤       └──────▲──────┘
│ id          │              │
│ title       │   instructorId│
│ semester    │───────────────┘
│ technique   │
│ thumbnailSrc│
│ fullSrc     │
└─────────────┘
```

## Diagram stanów galerii

```mermaid
stateDiagram-v2
  [*] --> bezczynny
  bezczynny --> filtrowanie: zmiana filtra
  filtrowanie --> przefiltrowany: filterWorks
  przefiltrowany --> filtrowanie: zmiana filtra
  przefiltrowany --> modalOtwarty: kliknięcie karty
  modalOtwarty --> przefiltrowany: Escape / zamknięcie
```
