import type { Instructor } from '@/types/instructor';

const WIT_BASE = 'https://www.wit.edu.pl';
const GRAFIKA_URL = `${WIT_BASE}/studia-licencjackie/grafika`;

export const WIT_INSTRUCTORS_REVALIDATE = 86_400;

/** Slugs, names, and photos from https://www.wit.edu.pl/studia-licencjackie/grafika */
export const WIT_GRAFIKA_INSTRUCTORS = [
  {
    slug: 'zenon-balcer',
    fullName: 'dr Zenon Balcer',
    photoPath: '/images/person/kadra/Zenon-Balcer.jpg',
  },
  {
    slug: 'sylwia-caban',
    fullName: 'dr Sylwia Caban',
    photoPath: '/images/person/kadra/Sylwia-Caban-Wiater.jpg',
  },
  {
    slug: 'grzegorz-grodner',
    fullName: 'dr inż. Grzegorz Grodner',
    photoPath: '/images/osoby/Grzegorz-Grodner.jpg',
  },
  {
    slug: 'piotr-janowczyk',
    fullName: 'mgr Piotr Janowczyk',
    photoPath: '/images/osoby/Piotr-Janowczyk.jpg',
  },
  {
    slug: 'aneta-jazwinska',
    fullName: 'dr hab. Aneta Jaźwińska',
    photoPath: '/images/person/kadra/Aneta-Jaźwińska.jpg',
  },
  {
    slug: 'justyna-kabala',
    fullName: 'dr Justyna Kabala',
    photoPath: '/images/person/kadra/Justyna-Kabala.jpg',
  },
  { slug: 'anna-klos', fullName: 'dr Anna Kłos', photoPath: '/images/person/kadra/Anna-Kłos.jpg' },
  {
    slug: 'dominika-korzeniowska',
    fullName: 'dr Dominika Korzeniowska',
    photoPath: '/images/osoby/Dominika-Korzeniowska.jpg',
  },
  {
    slug: 'piotr-krochmalski',
    fullName: 'dr Piotr Krochmalski',
    photoPath: '/images/osoby/Piotr-Krochmalski.jpg',
  },
  {
    slug: 'luiza-kwiatkowska',
    fullName: 'dr Luiza Kwiatkowska',
    photoPath: '/images/person/kadra/Luiza-Kwiatkowska.jpg',
  },
  {
    slug: 'bartosz-mamak',
    fullName: 'dr Bartosz Mamak',
    photoPath: '/images/osoby/Bartosz-Mamak.jpg',
  },
  {
    slug: 'joanna-mankiewicz',
    fullName: 'mgr Joanna Mankiewicz',
    photoPath: '/images/person/kadra/Joanna-Mankiewicz.jpg',
  },
  {
    slug: 'magdalena-mirkowicz',
    fullName: 'dr inż. Magdalena Mirkowicz',
    photoPath: '/images/osoby/Magdalena-Mirkowicz.jpg',
  },
  {
    slug: 'dariusz-mlacki',
    fullName: 'dr hab. Dariusz Mlącki',
    photoPath: '/images/person/kadra/Dariusz-Mlącki2.jpg',
  },
  {
    slug: 'anna-nowokunska-maksymiuk',
    fullName: 'mgr inż. arch. Anna Nowokuńska-Maksymiuk',
    photoPath: '/images/osoby/Anna-Nowokuńska-Maksymiuk.jpg',
  },
  {
    slug: 'grzegorz-pabel',
    fullName: 'prof. Grzegorz Pabel',
    photoPath: '/images/osoby/Grzegorz-Pabel.jpg',
  },
  {
    slug: 'michal-piekarski',
    fullName: 'dr hab. Michał Piekarski',
    photoPath: '/images/person/kadra/Michał-Piekarski2.jpg',
  },
  {
    slug: 'grzegorz-rogala',
    fullName: 'dr Grzegorz Rogala',
    photoPath: '/images/person/kadra/Grzegorz-Rogala.jpg',
  },
  {
    slug: 'ryszard-sekula',
    fullName: 'prof. Ryszard Sekuła',
    photoPath: '/images/person/kadra/Ryszard-Sekuła.jpg',
  },
  {
    slug: 'malgorzata-sobocinska-kiss',
    fullName: 'dr Małgorzata Sobocińska-Kiss',
    photoPath: '/images/osoby/Małgorzata-Sobocińska-Kiss.jpg',
  },
  {
    slug: 'rafal-strent',
    fullName: 'prof. Rafał Strent',
    photoPath: '/images/person/kadra/Rafał-Strent.jpg',
  },
  {
    slug: 'adam-styka',
    fullName: 'prof. Adam Styka',
    photoPath: '/images/person/kadra/Adam-Styka.jpg',
  },
  {
    slug: 'wieslaw-szamborski',
    fullName: 'prof. Wiesław Szamborski',
    photoPath: '/images/person/kadra/Wiesław-Szamborski.jpg',
  },
  {
    slug: 'mieczyslaw-wasilewski',
    fullName: 'prof. Mieczysław Wasilewski',
    photoPath: '/images/osoby/Mieczysław-Wasilewski.jpg',
  },
] as const;

export type WitGrafikaInstructorSlug = (typeof WIT_GRAFIKA_INSTRUCTORS)[number]['slug'];

export function witInstructorId(slug: WitGrafikaInstructorSlug): string {
  return `inst-${slug}`;
}

export function getStaticWitGrafikaInstructors(): Instructor[] {
  return WIT_GRAFIKA_INSTRUCTORS.map(({ slug, fullName, photoPath }) => {
    const { title, firstName, lastName } = parseName(fullName);
    const profileUrl = `${WIT_BASE}/osoby/${slug}`;

    return {
      id: witInstructorId(slug),
      firstName,
      lastName,
      title,
      photoSrc: toPhotoSrc(photoPath),
      bio: `${title} ${firstName} ${lastName} — wykładowca kierunku Grafika w Akademii WIT.`,
      specialisation: 'Wykładowca kierunku Grafika',
      websiteUrl: profileUrl,
    };
  });
}

type RawInstructor = {
  slug: string;
  fullName: string;
  photoPath: string;
  profilePath: string;
};

const TITLE_PATTERN = /^(dr hab\.|dr inż\.|mgr inż\. arch\.|prof\.|dr|mgr)\s+/i;

function decodeHtml(text: string): string {
  return text
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)))
    .replace(/&bdquo;/g, '„')
    .replace(/&ldquo;/g, '“')
    .replace(/&rdquo;/g, '”')
    .replace(/\s+/g, ' ')
    .trim();
}

function stripTags(html: string): string {
  return decodeHtml(html.replace(/<[^>]+>/g, ' '));
}

function parseName(fullName: string): Pick<Instructor, 'title' | 'firstName' | 'lastName'> {
  const name = decodeHtml(fullName);
  const titleMatch = name.match(TITLE_PATTERN);
  const title = titleMatch?.[1] ?? '';
  const rest = titleMatch ? name.slice(titleMatch[0].length) : name;
  const parts = rest.trim().split(/\s+/);
  const firstName = parts[0] ?? '';
  const lastName = parts.slice(1).join(' ');

  return { title, firstName, lastName };
}

function parseInstructorsList(html: string): RawInstructor[] {
  const section = html.match(/id="wykladowcy"[\s\S]*?<\/section>/i)?.[0] ?? '';
  const items = [
    ...section.matchAll(
      /background-image:url\(([^)]+)\)[\s\S]*?href="([^"]+)"[^>]*><b>([^<]+)<\/b>/g,
    ),
  ];

  return items.map(([, photoRaw, profilePath, fullName]) => ({
    slug: profilePath.replace(/^\/osoby\//, ''),
    fullName,
    photoPath: photoRaw.replace(/!important$/, '').trim(),
    profilePath,
  }));
}

function parseProfile(html: string): Pick<Instructor, 'bio' | 'specialisation' | 'websiteUrl'> {
  const h1End = html.indexOf('</h1>');
  const snippet = h1End > 0 ? html.slice(h1End, h1End + 12_000) : html;

  const roleMatch = snippet.match(/<p class="fw-bold">([^<]+)<\/p>/);
  const specialisation = roleMatch ? stripTags(roleMatch[1]) : 'Wykładowca kierunku Grafika';

  const websiteMatch =
    snippet.match(/<a[^>]+href="(https?:\/\/[^"]+)"[^>]*class="[^"]*ico-external/i) ??
    snippet.match(/bi-globe[\s\S]*?href="(https?:\/\/[^"]+)"/i);
  const websiteUrl = websiteMatch?.[1];

  const bioParagraphs = [...snippet.matchAll(/<p>([\s\S]*?)<\/p>/g)]
    .map((match) => stripTags(match[1]))
    .filter(
      (paragraph) =>
        paragraph.length > 40 &&
        !paragraph.includes('@wit.edu.pl') &&
        !paragraph.startsWith('Strona internetowa'),
    );

  return {
    bio:
      bioParagraphs.slice(0, 2).join(' ') ||
      `${specialisation} — wykładowca kierunku Grafika w Akademii WIT.`,
    specialisation,
    websiteUrl,
  };
}

async function fetchProfileDetails(
  profilePath: string,
): Promise<Pick<Instructor, 'bio' | 'specialisation' | 'websiteUrl'> | null> {
  try {
    const response = await fetch(`${WIT_BASE}${profilePath}`, {
      next: { revalidate: WIT_INSTRUCTORS_REVALIDATE },
    });

    if (!response.ok) {
      return null;
    }

    return parseProfile(await response.text());
  } catch {
    return null;
  }
}

function toPhotoSrc(photoPath: string): string {
  return photoPath.startsWith('http') ? photoPath : `${WIT_BASE}${photoPath}`;
}

export async function fetchWitGrafikaInstructors(): Promise<Instructor[]> {
  const response = await fetch(GRAFIKA_URL, {
    next: { revalidate: WIT_INSTRUCTORS_REVALIDATE },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch instructors from WIT (${response.status})`);
  }

  const rawList = parseInstructorsList(await response.text());

  return Promise.all(
    rawList.map(async (raw) => {
      const { title, firstName, lastName } = parseName(raw.fullName);
      const profile = await fetchProfileDetails(raw.profilePath);
      const profileUrl = `${WIT_BASE}${raw.profilePath}`;

      return {
        id: `inst-${raw.slug}`,
        firstName,
        lastName,
        title,
        photoSrc: toPhotoSrc(raw.photoPath),
        bio:
          profile?.bio ??
          `${title} ${firstName} ${lastName} — wykładowca kierunku Grafika w Akademii WIT.`,
        specialisation: profile?.specialisation ?? 'Wykładowca kierunku Grafika',
        websiteUrl: profile?.websiteUrl ?? profileUrl,
      };
    }),
  );
}
