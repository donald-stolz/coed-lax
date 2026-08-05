import { ImageResponse } from 'next/og';
import { siteConfig } from '@/lib/site-config';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

// Generated from text since there's no logo/brand asset yet — swap for a
// designed image (and delete this file) once one exists.
export default function OpengraphImage() {
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
      <div style={{ fontSize: 80, fontWeight: 700 }}>{siteConfig.name}</div>
      <div style={{ fontSize: 36, color: '#a1a1aa', marginTop: 16 }}>
        Pickup Lacrosse in Austin, TX
      </div>
    </div>,
    { ...size },
  );
}
