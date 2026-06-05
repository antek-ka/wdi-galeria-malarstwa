import { witInstructorId } from '@/lib/wit-instructors';
import type { Work } from '@/types/work';

/**
 * Resize a Wikimedia thumbnail URL (…/500px-…).
 * Only certain widths exist (e.g. 330, 500, 960, 1280) — 400/800 often return HTTP 400.
 * @see https://www.mediawiki.org/wiki/Common_thumbnail_sizes
 */
const wikiSize = (url: string, width: number) => url.replace(/\/\d+px-/, `/${width}px-`);

const WIKI_THUMB_W = 500;
const WIKI_FULL_W = 1280;

/** Verified Wikimedia URLs (masterpieces used as demo placeholders). */
const IMG = {
  starryNight:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/500px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg',
  guernica: 'https://upload.wikimedia.org/wikipedia/en/7/74/PicassoGuernica.jpg',
  persistence: 'https://upload.wikimedia.org/wikipedia/en/d/dd/The_Persistence_of_Memory.jpg',
  sunflowers:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Vincent_Willem_van_Gogh_127.jpg/500px-Vincent_Willem_van_Gogh_127.jpg',
  monaLisa:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/500px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg',
  scream:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Edvard_Munch%2C_1893%2C_The_Scream%2C_oil%2C_tempera_and_pastel_on_cardboard%2C_91_x_73_cm%2C_National_Gallery_of_Norway.jpg/500px-Edvard_Munch%2C_1893%2C_The_Scream%2C_oil%2C_tempera_and_pastel_on_cardboard%2C_91_x_73_cm%2C_National_Gallery_of_Norway.jpg',
  kiss: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/The_Kiss_-_Gustav_Klimt_-_Google_Cultural_Institute.jpg/500px-The_Kiss_-_Gustav_Klimt_-_Google_Cultural_Institute.jpg',
  waterLilies:
    'https://upload.wikimedia.org/wikipedia/commons/2/2a/Claude_Monet_-_The_Water_Lilies_-_The_Clouds_-_Google_Art_Project.jpg',
  nighthawks:
    'https://upload.wikimedia.org/wikipedia/commons/a/a8/Nighthawks_by_Edward_Hopper_1942.jpg',
  sonOfMan: 'https://upload.wikimedia.org/wikipedia/en/e/e5/Magritte_TheSonOfMan.jpg',
  greatWave:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Great_Wave_off_Kanagawa2.jpg/500px-Great_Wave_off_Kanagawa2.jpg',
  birthOfVenus:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/La_nascita_di_Venere_%28Botticelli%29.jpg/500px-La_nascita_di_Venere_%28Botticelli%29.jpg',
  nightWatch:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/The_Night_Watch_-_HD.jpg/500px-The_Night_Watch_-_HD.jpg',
  americanGothic:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Grant_Wood_-_American_Gothic_-_Google_Art_Project.jpg/500px-Grant_Wood_-_American_Gothic_-_Google_Art_Project.jpg',
  oldGuitarist:
    'https://upload.wikimedia.org/wikipedia/en/thumb/b/bc/Old_guitarist_chicago.jpg/500px-Old_guitarist_chicago.jpg',
  pearlEarring:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/1665_Girl_with_a_Pearl_Earring.jpg/500px-1665_Girl_with_a_Pearl_Earring.jpg',
  swansReflectingElephants:
    'https://upload.wikimedia.org/wikipedia/en/f/f6/Swans_reflecting_elephants.jpg',
  demoiselles: 'https://upload.wikimedia.org/wikipedia/en/4/4c/Les_Demoiselles_d%27Avignon.jpg',
} as const;

const thumb = (url: string) => (url.includes('/thumb/') ? wikiSize(url, WIKI_THUMB_W) : url);
const full = (url: string) => (url.includes('/thumb/') ? wikiSize(url, WIKI_FULL_W) : url);

export const works: Work[] = [
  {
    id: 'gwiezdzista-noc-nad-wisla',
    title: 'Gwieździsta noc nad Wisłą',
    author: { firstName: 'Wincenty', lastName: 'van Głaz' },
    academicYear: '2024/2025',
    semester: 3,
    technique: 'oil',
    dimensions: '73 × 92 cm (jak w oryginale, prawie)',
    description:
      'Hołd dla van Gogha: wirujące niebo, tylko horyzont przesunięty z Arles na warszawskie wybrzeże.',
    thumbnailSrc: thumb(IMG.starryNight),
    fullSrc: full(IMG.starryNight),
    instructorId: witInstructorId('adam-styka'),
    featured: true,
  },
  {
    id: 'guernica-na-kolokwium',
    title: 'Guernica na kolokwium',
    author: { firstName: 'Paweł', lastName: 'Pisak' },
    academicYear: '2023/2024',
    semester: 1,
    technique: 'oil',
    dimensions: '349 × 777 cm (w skali 1:10 w pracowni)',
    description:
      'Picasso w wersji studenckiej: dramat w czerni i bieli, zanim wykładowca powie „jeszcze chwila”.',
    thumbnailSrc: thumb(IMG.guernica),
    fullSrc: full(IMG.guernica),
    instructorId: witInstructorId('zenon-balcer'),
  },
  {
    id: 'zegary-topia-sie-od-upalu',
    title: 'Zegary topią się od upału',
    author: { firstName: 'Salwator', lastName: 'Dalej' },
    academicYear: '2023/2024',
    semester: 2,
    technique: 'acrylic',
    dimensions: '24 × 33 cm',
    description:
      'Dalí spotyka sesję letnią: czas przestaje płynąć, gdy w pracowni nie ma klimatyzacji.',
    thumbnailSrc: thumb(IMG.persistence),
    fullSrc: full(IMG.persistence),
    instructorId: witInstructorId('sylwia-caban'),
    featured: true,
  },
  {
    id: 'sloneczniki-z-akademika',
    title: 'Słoneczniki z akademika',
    author: { firstName: 'Wincenty', lastName: 'Żółć' },
    academicYear: '2023/2024',
    semester: 2,
    technique: 'oil',
    dimensions: '92 × 73 cm',
    description: 'Van Gogh w wersji „kupione na promocji w Biedronce” — żółć aż buczy.',
    thumbnailSrc: thumb(IMG.sunflowers),
    fullSrc: full(IMG.sunflowers),
    instructorId: witInstructorId('wieslaw-szamborski'),
  },
  {
    id: 'usmiech-jak-na-obronie',
    title: 'Uśmiech jak na obronie dyplomu',
    author: { firstName: 'Leonarda', lastName: 'Winiarska' },
    academicYear: '2024/2025',
    semester: 3,
    technique: 'mixed',
    dimensions: '77 × 53 cm',
    description:
      'Leonardo by się uśmiał: tajemniczy uśmiech modelki, która wie, że komisja już czeka w sali.',
    thumbnailSrc: thumb(IMG.monaLisa),
    fullSrc: full(IMG.monaLisa),
    instructorId: witInstructorId('aneta-jazwinska'),
    featured: true,
  },
  {
    id: 'krzyk-na-tramwaju',
    title: 'Krzyk na tramwaju Nocnym',
    author: { firstName: 'Edward', lastName: 'Mąka' },
    academicYear: '2023/2024',
    semester: 2,
    technique: 'oil',
    dimensions: '91 × 73 cm',
    description: 'Munch w komunikacji miejskiej: ten moment, gdy biletomat znów „nie działa”.',
    thumbnailSrc: thumb(IMG.scream),
    fullSrc: full(IMG.scream),
    instructorId: witInstructorId('grzegorz-grodner'),
  },
  {
    id: 'calus-zaoczny',
    title: 'Całus zaoczny',
    author: { firstName: 'Gustaw', lastName: 'Klimat' },
    academicYear: '2024/2025',
    semester: 3,
    technique: 'watercolour',
    dimensions: '180 × 180 cm (w skali pocztówki)',
    description: 'Klimt w wersji romantycznej: złoto, faktura i zero miejsca na podpis w rogu.',
    thumbnailSrc: thumb(IMG.kiss),
    fullSrc: full(IMG.kiss),
    instructorId: witInstructorId('michal-piekarski'),
  },
  {
    id: 'lilie-w-lazienkach',
    title: 'Lilie w stawie Łazienek',
    author: { firstName: 'Klaudiusz', lastName: 'Moneta' },
    academicYear: '2023/2024',
    semester: 1,
    technique: 'gouache',
    dimensions: '90 × 100 cm',
    description: 'Monet, ale bez Giverny — za to z kaczkami i rowerami w tle, ledwo widocznymi.',
    thumbnailSrc: thumb(IMG.waterLilies),
    fullSrc: full(IMG.waterLilies),
    instructorId: witInstructorId('luiza-kwiatkowska'),
  },
  {
    id: 'nocna-zmiana-w-barze',
    title: 'Nocna zmiana w barze mlecznym',
    author: { firstName: 'Edward', lastName: 'Hopka' },
    academicYear: '2024/2025',
    semester: 3,
    technique: 'acrylic',
    dimensions: '84 × 152 cm',
    description: 'Hopper po polsku: neon, samotność i rosół, który jeszcze nie zdążył się zrobić.',
    thumbnailSrc: thumb(IMG.nighthawks),
    fullSrc: full(IMG.nighthawks),
    instructorId: witInstructorId('justyna-kabala'),
  },
  {
    id: 'pan-w-meloniku',
    title: 'Pan w meloniku (nie w meloniku)',
    author: { firstName: 'Renat', lastName: 'Magryta' },
    academicYear: '2023/2024',
    semester: 1,
    technique: 'tempera',
    dimensions: '116 × 89 cm',
    description:
      'Magritte na zajęciach surrealizmu: twarz zasłonięta, sens — otwarty do interpretacji.',
    thumbnailSrc: thumb(IMG.sonOfMan),
    fullSrc: full(IMG.sonOfMan),
    instructorId: witInstructorId('piotr-janowczyk'),
  },
  {
    id: 'fala-przed-sopotem',
    title: 'Wielka fala przed molo w Sopocie',
    author: { firstName: 'Kacper', lastName: 'Fala' },
    academicYear: '2023/2024',
    semester: 2,
    technique: 'watercolour',
    dimensions: '25 × 37 cm (jak drzeworyt, prawie)',
    description:
      'Hokusai na Bałtyku: fala, łodzie i ten jeden gość, który nie zdążył zejść z plaży.',
    thumbnailSrc: thumb(IMG.greatWave),
    fullSrc: full(IMG.greatWave),
    instructorId: witInstructorId('bartosz-mamak'),
  },
  {
    id: 'wenus-z-baltyku',
    title: 'Wenus wychodzi z Bałtyku',
    author: { firstName: 'Aleksander', lastName: 'Butelka' },
    academicYear: '2024/2025',
    semester: 2,
    technique: 'acrylic',
    dimensions: '172 × 278 cm (marzenie pracowni)',
    description:
      'Botticelli w wersji studenckiej: muszla, wiatr i trochę za dużo piany na jedno płótno.',
    thumbnailSrc: thumb(IMG.birthOfVenus),
    fullSrc: full(IMG.birthOfVenus),
    instructorId: witInstructorId('mieczyslaw-wasilewski'),
  },
  {
    id: 'nocna-straz-w-pracowni',
    title: 'Nocna straż w pracowni',
    author: { firstName: 'Remigiusz', lastName: 'Ren' },
    academicYear: '2024/2025',
    semester: 3,
    technique: 'oil',
    dimensions: '363 × 437 cm (gdyby ściana pozwoliła)',
    description:
      'Rembrandt na dyżurze: światło, tłum i ktoś, kto na pewno zostawił otwarty terpentynę.',
    thumbnailSrc: thumb(IMG.nightWatch),
    fullSrc: full(IMG.nightWatch),
    instructorId: witInstructorId('ryszard-sekula'),
  },
  {
    id: 'gothic-para-z-wiatrakiem',
    title: 'Para gotycka z wiatrakiem w tle',
    author: { firstName: 'Grzegorz', lastName: 'Las' },
    academicYear: '2023/2024',
    semester: 1,
    technique: 'mixed',
    dimensions: '78 × 65 cm',
    description:
      'Wood po amerykańsku, tytuł po polsku: powaga twarzy, widły i wieś, która nigdy nie śpi.',
    thumbnailSrc: thumb(IMG.americanGothic),
    fullSrc: full(IMG.americanGothic),
    instructorId: witInstructorId('anna-klos'),
  },
  {
    id: 'stary-gitarzysta-z-pracowni',
    title: 'Stary gitarzysta z pracowni',
    author: { firstName: 'Paweł', lastName: 'Pikulski' },
    academicYear: '2024/2025',
    semester: 2,
    technique: 'oil',
    dimensions: '122 × 90 cm',
    description:
      'Picasso w niebieskim okresie: gitarzysta ćwiczy gamę, a komisja i tak pyta o inspiracje.',
    thumbnailSrc: thumb(IMG.oldGuitarist),
    fullSrc: full(IMG.oldGuitarist),
    instructorId: witInstructorId('piotr-krochmalski'),
  },
  {
    id: 'perla-w-uchu',
    title: 'Dziewczyna z perłą w uchu',
    author: { firstName: 'Jan', lastName: 'Morzeński' },
    academicYear: '2023/2024',
    semester: 1,
    technique: 'gouache',
    dimensions: '44 × 39 cm',
    description:
      'Vermeer w wersji „słuchawki nie były, ale kolczyk musiał być”: spojrzenie przez ramię, światło z lewej.',
    thumbnailSrc: thumb(IMG.pearlEarring),
    fullSrc: full(IMG.pearlEarring),
    instructorId: witInstructorId('dominika-korzeniowska'),
  },
  {
    id: 'labedzie-odbijaja-slonia',
    title: 'Łabędzie odbijające słonia (ćwiczenie z odbicia)',
    author: { firstName: 'Salomon', lastName: 'Długi' },
    academicYear: '2024/2025',
    semester: 3,
    technique: 'tempera',
    dimensions: '51 × 78 cm (jak w oryginale, prawie)',
    description:
      'Dalí w wersji studenckiej: łabędzie na wodzie, które w odbiciu zamieniają się w słonie — surrealizm na kolokwium.',
    thumbnailSrc: thumb(IMG.swansReflectingElephants),
    fullSrc: full(IMG.swansReflectingElephants),
    instructorId: witInstructorId('malgorzata-sobocinska-kiss'),
  },
  {
    id: 'panie-z-awinionu',
    title: 'Panie z Awinionu na życiorysie',
    author: { firstName: 'Paweł', lastName: 'Piskorz' },
    academicYear: '2023/2024',
    semester: 2,
    technique: 'oil',
    dimensions: '243 × 233 cm (na korytarzu się nie zmieści)',
    description:
      'Picasso prosi o spokój: geometryczne figury, ostre kąty i zero miejsca na dyskretną autopromocję.',
    thumbnailSrc: thumb(IMG.demoiselles),
    fullSrc: full(IMG.demoiselles),
    instructorId: witInstructorId('magdalena-mirkowicz'),
  },
];

export function getWorkById(id: string): Work | undefined {
  return works.find((w) => w.id === id);
}

export function getFeaturedWorks(): Work[] {
  return works.filter((w) => w.featured);
}

export function getAdjacentWorks(id: string): { prev?: Work; next?: Work } {
  const index = works.findIndex((w) => w.id === id);
  if (index === -1) return {};
  return {
    prev: index > 0 ? works[index - 1] : undefined,
    next: index < works.length - 1 ? works[index + 1] : undefined,
  };
}
