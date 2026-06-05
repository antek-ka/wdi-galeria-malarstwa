# Wymagania

## Wymagania funkcjonalne

| ID    | Wymaganie                                                                                                          |
| ----- | ------------------------------------------------------------------------------------------------------------------ |
| FR-01 | System wyświetla stronę główną z wyróżnionymi pracami studentów                                                    |
| FR-02 | System wyświetla sekcję O przedmiocie z opisem malarstwa                                                           |
| FR-03 | System wyświetla wszystkie prace studentów w filtrowalnej siatce galerii                                           |
| FR-04 | System umożliwia filtrowanie prac po semestrze (Wszystkie, 1, 2, 3)                                                |
| FR-05 | System umożliwia filtrowanie po technice (Wszystkie, Olej, Akwarela, Akryl, Gwasz, Tempera, Technika mieszana)     |
| FR-06 | System wyświetla modal z pełnymi szczegółami pracy po kliknięciu karty                                             |
| FR-07 | Każda praca ma dedykowany, udostępnialny URL pod `/gallery/[id]`                                                   |
| FR-08 | System wyświetla profile prowadzących (karuzela + modal) ze zdjęciem, biografią i specjalizacją, dane z wit.edu.pl |
| FR-09 | System linkuje do głównej strony Akademii WIT                                                                      |
| FR-10 | System jest nawigowalny z klawiatury (Tab, Escape w modalu)                                                        |
| FR-11 | Wszystkie obrazy mają opisowy atrybut `alt`                                                                        |

## Wymagania niefunkcjonalne

| ID     | Wymaganie                                                         |
| ------ | ----------------------------------------------------------------- |
| NFR-01 | Responsywność przy 360px, 390px, 768px, 1024px, 1440px            |
| NFR-02 | Lighthouse Performance ≥ 85 na desktopie (cel)                    |
| NFR-03 | Lighthouse Accessibility ≥ 90 (cel)                               |
| NFR-04 | First Contentful Paint < 2 s na localhost                         |
| NFR-05 | Wszystkie strony przechodzą ESLint bez błędów                     |
| NFR-06 | TypeScript strict — zero błędów (`pnpm type-check`)               |
| NFR-07 | Kod sformatowany Prettierem — zero naruszeń (`pnpm format:check`) |
