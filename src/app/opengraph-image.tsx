import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { ImageResponse } from 'next/og';
import { siteConfig } from '@/lib/site-config';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  const logoData = readFileSync(join(process.cwd(), 'public', siteConfig.logo));
  const logoSrc = `data:image/jpeg;base64,${logoData.toString('base64')}`;

  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#09090b',
        color: '#fafafa',
        fontFamily: 'sans-serif',
      }}
    >
      <img
        src={logoSrc}
        alt=""
        width={200}
        height={200}
        style={{ borderRadius: '50%' }}
      />
      <div style={{ fontSize: 64, fontWeight: 700, marginTop: 24 }}>
        {siteConfig.name}
      </div>
      <div style={{ fontSize: 32, color: '#a1a1aa', marginTop: 12 }}>
        Pickup Lacrosse in Austin, TX
      </div>
    </div>,
    { ...size },
  );
}
