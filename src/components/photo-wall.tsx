import Image from 'next/image';

interface Photo {
  src: string;
  alt: string;
  /** Rotation in degrees */
  rotate: number;
  /** % from top of the viewport */
  top: number;
  /** % from left of the viewport */
  left: number;
}

const GAME_PHOTOS = [
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

const POSITIONS: { rotate: number; top: number; left: number }[] = [
  // Row 1
  { rotate: -6, top: 0, left: 0 },
  { rotate: 3, top: 1, left: 16 },
  { rotate: -2, top: 0, left: 32 },
  { rotate: 5, top: 1, left: 48 },
  { rotate: -4, top: 0, left: 65 },
  { rotate: 7, top: 1, left: 82 },

  // Row 2
  { rotate: 2, top: 25, left: -2 },
  { rotate: -5, top: 24, left: 14 },
  { rotate: 4, top: 25, left: 30 },
  { rotate: -3, top: 24, left: 47 },
  { rotate: 6, top: 25, left: 63 },
  { rotate: -7, top: 24, left: 80 },

  // Row 3
  { rotate: 3, top: 50, left: 1 },
  { rotate: -4, top: 49, left: 17 },
  { rotate: 5, top: 50, left: 33 },
  { rotate: -2, top: 50, left: 50 },
  { rotate: 7, top: 48, left: 67 },
  { rotate: -5, top: 49, left: 83 },

  // Row 4
  { rotate: -6, top: 73, left: -1 },
  { rotate: 4, top: 72, left: 15 },
  { rotate: -3, top: 73, left: 31 },
  { rotate: 6, top: 72, left: 48 },
  { rotate: -4, top: 73, left: 65 },
  { rotate: 2, top: 72, left: 81 },
];

const PHOTOS: Photo[] = POSITIONS.map((position, i) => ({
  ...position,
  ...GAME_PHOTOS[i % GAME_PHOTOS.length],
}));

/**
 * Fixed full-screen wall of randomly rotated Polaroid-style photo frames,
 * used as a decorative backdrop behind foreground content.
 */
export function PhotoWall() {
  return (
    <div className="bg-ink fixed inset-0 -z-10" aria-hidden="true">
      <div className="absolute inset-0 z-10 bg-black/40" />

      {PHOTOS.map((photo, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            top: `${photo.top}%`,
            left: `${photo.left}%`,
            transform: `rotate(${photo.rotate}deg)`,
            zIndex: 1,
          }}
        >
          <div
            className="flex flex-col bg-white shadow-2xl"
            style={{ width: 148, padding: '10px 10px 36px 10px' }}
          >
            <div
              className="relative overflow-hidden"
              style={{ width: 128, height: 128 }}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="128px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
