export const navItems = [
  { href: '/', key: 'home' },
  { href: '/about', key: 'about' },
  { href: '/gallery', key: 'gallery' },
  { href: '/instructors', key: 'instructors' },
  { href: '/contact', key: 'contact' },
] as const;

export type NavItemKey = (typeof navItems)[number]['key'];
