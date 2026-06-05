import Image, { type ImageProps } from 'next/image';

/**
 * Remote Wikimedia URLs use only certain thumbnail widths; loading them
 * unoptimized avoids the Next.js image proxy re-fetching invalid variants.
 */
export function ArtworkImage({ alt, ...props }: ImageProps) {
  return <Image unoptimized alt={alt} {...props} />;
}
