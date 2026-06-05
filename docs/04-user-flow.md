# Ścieżki użytkownika

## Ścieżka 1 — Kandydat przegląda obrazy

Odwiedzający trafia na stronę główną, czyta zajawkę o przedmiocie, otwiera galerię, filtruje Semestr 2, otwiera pracę w `WorkModal`, przechodzi na stronę szczegółów, następnie klika logo WIT i przechodzi na wit.edu.pl.

```mermaid
flowchart TD
  A[Wejście /] --> B[Czytanie hero + zajawki]
  B --> C[Otwarcie /gallery]
  C --> D[Filtr Semestr 2]
  D --> E[Kliknięcie GalleryCard]
  E --> F[Otwarty WorkModal]
  F --> G[Otwarcie /gallery/id]
  G --> H[Kliknięcie linku WIT]
```

## Ścieżka 2 — Student znajduje własną pracę

Student otwiera galerię, filtruje po technice lub semestrze, lokalizuje swoją kartę, otwiera modal i kopiuje URL `/gallery/[id]` do udostępnienia.

```mermaid
flowchart TD
  A[Otwarcie /gallery] --> B[Zastosowanie filtrów]
  B --> C[Znalezienie własnej GalleryCard]
  C --> D[Otwarcie WorkModal]
  D --> E[Kopiowanie URL /gallery/id]
```

## Ścieżka 3 — Gość zewnętrzny przez bezpośredni link

Odwiedzający trafia na `/gallery/[id]` z mediów społecznościowych, czyta metadane, przegląda całą galerię, odwiedza O przedmiocie, następnie wit.edu.pl.

```mermaid
flowchart TD
  A[Bezpośrednio /gallery/id] --> B[Czytanie metadanych pracy]
  B --> C[Powrót do /gallery]
  C --> D[Wizyta /about]
  D --> E[Otwarcie wit.edu.pl]
```
