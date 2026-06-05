# Struktura danych

## Typy

Zdefiniowane w `src/types/work.ts` i `src/types/instructor.ts`.

### Work (praca)

| Pole           | Typ       | Opis                                            |
| -------------- | --------- | ----------------------------------------------- |
| `id`           | string    | Slug URL, np. `gwiezdzista-noc-nad-wisla`       |
| `title`        | string    | Tytuł obrazu                                    |
| `author`       | Author    | Imię i nazwisko studenta                        |
| `academicYear` | string    | np. `2024/2025`                                 |
| `semester`     | Semester  | 1–6 (dane demo: 1–3)                            |
| `technique`    | Technique | oil, watercolour itd. (wartości w kodzie)       |
| `dimensions`   | string?   | Wymiary fizyczne                                |
| `description`  | string?   | Opis projektu                                   |
| `thumbnailSrc` | string    | URL miniatury w siatce                          |
| `fullSrc`      | string    | Obraz w szczegółach / modalu                    |
| `instructorId` | string    | Powiązanie z prowadzącym, np. `inst-adam-styka` |
| `featured`     | boolean?  | Wyróżnienie na stronie głównej                  |

### Instructor (prowadzący)

| Pole             | Typ     | Opis                                 |
| ---------------- | ------- | ------------------------------------ |
| `id`             | string  | np. `inst-adam-styka`                |
| `firstName`      | string  | Imię                                 |
| `lastName`       | string  | Nazwisko                             |
| `title`          | string  | Tytuł naukowy, np. `prof.`, `dr`     |
| `photoSrc`       | string  | URL zdjęcia (wit.edu.pl lub lokalny) |
| `bio`            | string  | Biografia                            |
| `specialisation` | string  | Specjalizacja                        |
| `websiteUrl`     | string? | Link do profilu na wit.edu.pl        |

### Przykładowy JSON pracy

```json
{
  "id": "gwiezdzista-noc-nad-wisla",
  "title": "Gwieździsta noc nad Wisłą",
  "author": { "firstName": "Wincenty", "lastName": "van Głaz" },
  "academicYear": "2024/2025",
  "semester": 3,
  "technique": "oil",
  "dimensions": "73 × 92 cm",
  "thumbnailSrc": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/500px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg",
  "fullSrc": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1280px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg",
  "instructorId": "inst-adam-styka",
  "featured": true
}
```

### Przykładowy JSON prowadzącego

```json
{
  "id": "inst-adam-styka",
  "firstName": "Adam",
  "lastName": "Styka",
  "title": "prof.",
  "photoSrc": "https://www.wit.edu.pl/images/person/kadra/Adam-Styka.jpg",
  "bio": "prof. Adam Styka — wykładowca kierunku Grafika w Akademii WIT.",
  "specialisation": "Wykładowca kierunku Grafika",
  "websiteUrl": "https://www.wit.edu.pl/osoby/adam-styka"
}
```

## Dodawanie prawdziwych prac (dla osób nietechnicznych)

1. Zapisz JPEG/PNG w `public/images/works/` ze slugiem w nazwie pliku, np. `poranek-nad-wisla.jpg`.
2. Otwórz `src/data/works.ts` i skopiuj istniejący wpis.
3. Zaktualizuj `id`, `title`, `author`, `semester`, `technique`, ścieżki (`/images/works/...`).
4. Ustaw `instructorId` zgodnie z wpisem w `src/lib/wit-instructors.ts` (format `inst-[slug]`).
5. Uruchom `pnpm dev` i otwórz `/gallery/twoj-id`, aby zweryfikować.

## Zdjęcia prowadzących

Profile są pobierane automatycznie z wit.edu.pl. Lokalny fallback (`src/data/instructors.ts`) korzysta z tej samej listy slugów co `wit-instructors.ts`. Aby dodać ręczny wpis, umieść plik w `public/images/instructors/` i ustaw `photoSrc` na `/images/instructors/nazwa-pliku.jpg`.
