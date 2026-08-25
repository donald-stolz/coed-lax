import Image from 'next/image';

interface Photo {
  src: string;
  alt: string;
}

const GAME_PHOTOS: Photo[] = [
  { src: '/images/instagram/game_0.jpg', alt: 'Coed Lax ATX pickup game' },
  { src: '/images/instagram/game_1.jpg', alt: 'Coed Lax ATX pickup game' },
  { src: '/images/instagram/game_2.jpg', alt: 'Coed Lax ATX pickup game' },
  { src: '/images/instagram/team_0.jpg', alt: 'Coed Lax ATX group photo' },
  { src: '/images/instagram/team_1.jpg', alt: 'Coed Lax ATX group photo' },
  { src: '/images/instagram/team_2.jpg', alt: 'Coed Lax ATX group photo' },
  {
    src: '/images/instagram/goals_for_good.jpg',
    alt: 'Goals for Good charity event',
  },
  { src: '/images/instagram/dog_0.jpg', alt: 'Dog at a Coed Lax ATX game' },
];

type Size = 'sm' | 'md' | 'lg';

/** Polaroid frame width and padding (px) per size tier. */
type SizeScale = Record<
  Size,
  { frame: number; padX: number; padTop: number; padBottom: number }
>;

const DESKTOP_SIZES: SizeScale = {
  sm: { frame: 120, padX: 7, padTop: 7, padBottom: 22 },
  md: { frame: 145, padX: 8, padTop: 8, padBottom: 26 },
  lg: { frame: 165, padX: 9, padTop: 9, padBottom: 30 },
};

const MOBILE_SIZES: SizeScale = {
  sm: { frame: 76, padX: 5, padTop: 5, padBottom: 16 },
  md: { frame: 90, padX: 6, padTop: 6, padBottom: 18 },
  lg: { frame: 104, padX: 6, padTop: 6, padBottom: 20 },
};

interface Placement {
  /** % from top of the viewport */
  top: number;
  /** % from left of the viewport */
  left: number;
  /** Rotation in degrees */
  rotate: number;
  size: Size;
}

// Full-bleed clusters, ported from the "C2" Paper design.
const DESKTOP_PLACEMENTS: Placement[] = [
  { top: 5.45, left: 5.56, rotate: -8, size: 'lg' },
  { top: 9.09, left: 15.28, rotate: 6, size: 'md' },
  { top: 21.82, left: 7.64, rotate: -5, size: 'lg' },
  { top: 22.73, left: 20.14, rotate: 9, size: 'md' },
  { top: 34.55, left: 11.81, rotate: -3, size: 'md' },
  { top: 5.45, left: 82.64, rotate: 7, size: 'lg' },
  { top: 10, left: 71.53, rotate: -6, size: 'md' },
  { top: 22.73, left: 79.86, rotate: 4, size: 'lg' },
  { top: 23.64, left: 68.75, rotate: -9, size: 'md' },
  { top: 35.45, left: 77.08, rotate: 3, size: 'md' },
  { top: 53.64, left: 6.25, rotate: 5, size: 'lg' },
  { top: 57.27, left: 16.67, rotate: -7, size: 'md' },
  { top: 70, left: 8.33, rotate: 4, size: 'lg' },
  { top: 70.91, left: 20.83, rotate: -4, size: 'md' },
  { top: 80, left: 12.5, rotate: 8, size: 'md' },
  { top: 53.64, left: 81.94, rotate: -5, size: 'lg' },
  { top: 58.18, left: 70.83, rotate: 7, size: 'md' },
  { top: 70, left: 79.17, rotate: -3, size: 'lg' },
  { top: 71.82, left: 68.06, rotate: 6, size: 'md' },
  { top: 80, left: 76.39, rotate: -8, size: 'md' },
  { top: 4.55, left: 31.94, rotate: -6, size: 'sm' },
  { top: 7.27, left: 42.36, rotate: 5, size: 'sm' },
  { top: 5, left: 52.78, rotate: -4, size: 'sm' },
  { top: 7.73, left: 62.5, rotate: 7, size: 'sm' },
  { top: 69.09, left: 30.56, rotate: 4, size: 'md' },
  { top: 72.73, left: 41.67, rotate: -6, size: 'sm' },
  { top: 70, left: 52.78, rotate: 5, size: 'md' },
  { top: 73.18, left: 63.89, rotate: -3, size: 'sm' },
  { top: 20, left: 25, rotate: -7, size: 'sm' },
  { top: 43.64, left: 24.31, rotate: 5, size: 'md' },
  { top: 20, left: 68.75, rotate: 6, size: 'sm' },
  { top: 43.64, left: 68.06, rotate: -5, size: 'md' },
  { top: 9.09, left: 26.39, rotate: -9, size: 'lg' },
  { top: 7.73, left: 64.58, rotate: 8, size: 'md' },
  { top: 33.64, left: 24.31, rotate: -6, size: 'lg' },
  { top: 36.36, left: 64.58, rotate: 7, size: 'lg' },
  { top: 60.91, left: 27.08, rotate: 6, size: 'md' },
  { top: 62.73, left: 63.89, rotate: -7, size: 'md' },
];

const MOBILE_PLACEMENTS: Placement[] = [
  { top: 8.29, left: 2.05, rotate: -8, size: 'lg' },
  { top: 6.64, left: 37.18, rotate: 6, size: 'md' },
  { top: 9.24, left: 69.74, rotate: -6, size: 'lg' },
  { top: 77.61, left: 3.08, rotate: 5, size: 'lg' },
  { top: 81.16, left: 38.97, rotate: -7, size: 'md' },
  { top: 78.79, left: 69.23, rotate: 7, size: 'lg' },
  { top: 21.92, left: 3.59, rotate: -9, size: 'lg' },
  { top: 21.33, left: 67.18, rotate: 8, size: 'lg' },
  { top: 78.2, left: 2.56, rotate: 6, size: 'lg' },
  { top: 77.61, left: 68.72, rotate: -7, size: 'lg' },
  { top: 11.26, left: 14.1, rotate: 3, size: 'sm' },
  { top: 11.85, left: 62.82, rotate: -4, size: 'sm' },
  { top: 83.53, left: 14.1, rotate: -8, size: 'md' },
  { top: 85.07, left: 52.56, rotate: 6, size: 'sm' },
  { top: 82.35, left: 84.62, rotate: -5, size: 'sm' },
];

function PhotoCluster({
  placements,
  sizes,
  className,
}: {
  placements: Placement[];
  sizes: SizeScale;
  className: string;
}) {
  return (
    <div className={className}>
      {placements.map((placement, i) => {
        const { frame, padX, padTop, padBottom } = sizes[placement.size];
        const imageSize = frame - padX * 2;
        const photo = GAME_PHOTOS[i % GAME_PHOTOS.length];

        return (
          <div
            key={i}
            className="absolute origin-top-left bg-white shadow-xl"
            style={{
              top: `${placement.top}%`,
              left: `${placement.left}%`,
              width: frame,
              padding: `${padTop}px ${padX}px ${padBottom}px`,
              transform: `rotate(${placement.rotate}deg)`,
            }}
          >
            <div
              className="relative overflow-hidden"
              style={{ width: imageSize, height: imageSize }}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes={`${imageSize}px`}
                className="object-cover"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

/**
 * Fixed full-bleed backdrop of clustered, rotated Polaroid-style photos over
 * a warm gradient, shared across pages behind the frosted foreground content.
 */
export function PhotoWall() {
  return (
    <div
      className="fixed inset-0 -z-10 overflow-hidden"
      style={{
        backgroundImage:
          'linear-gradient(135deg, var(--color-pink) 0%, var(--color-teal) 55%, var(--color-peach) 100%)',
      }}
      aria-hidden="true"
    >
      <PhotoCluster
        placements={DESKTOP_PLACEMENTS}
        sizes={DESKTOP_SIZES}
        className="hidden sm:block"
      />
      <PhotoCluster
        placements={MOBILE_PLACEMENTS}
        sizes={MOBILE_SIZES}
        className="sm:hidden"
      />
    </div>
  );
}
