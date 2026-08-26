import { ImageResponse } from '@vercel/og';

export const config = {
  runtime: 'edge',
};

export default function handler(request) {
  try {
    const { searchParams } = new URL(request.url);

    // Dynamic parameters with sensible defaults
    const title = searchParams.get('title') || 'Cliftonville Gardens';
    const description = searchParams.get('description') || 'Supported Living Community & Luxury Residential Enclave in Ogun State, Nigeria';
    const badge = searchParams.get('badge') || 'Supported Living & Luxury Residences';
    const location = searchParams.get('location') || 'Abeokuta & Itori • Ogun State, Nigeria';

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            backgroundColor: '#030b1e',
            backgroundImage: 'radial-gradient(circle at 25px 25px, rgba(255, 255, 255, 0.05) 2%, transparent 0%), radial-gradient(circle at 75px 75px, rgba(0, 51, 153, 0.4) 10%, transparent 60%)',
            padding: '60px 70px',
            fontFamily: 'sans-serif',
            color: 'white',
            position: 'relative',
          }}
        >
          {/* Ambient decorative glowing spheres */}
          <div
            style={{
              position: 'absolute',
              top: '-100px',
              right: '-100px',
              width: '450px',
              height: '450px',
              borderRadius: '50%',
              background: 'rgba(56, 189, 248, 0.2)',
              filter: 'blur(90px)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: '-50px',
              left: '30%',
              width: '400px',
              height: '400px',
              borderRadius: '50%',
              background: 'rgba(0, 51, 153, 0.35)',
              filter: 'blur(100px)',
            }}
          />

          {/* Top Header with Brand and Badge */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', zIndex: 10 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '14px',
                  background: 'linear-gradient(135deg, #003399 0%, #38bdf8 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '24px',
                  fontWeight: 'bold',
                  color: 'white',
                  boxShadow: '0 8px 20px rgba(0, 51, 153, 0.5)',
                }}
              >
                C
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '24px', fontWeight: '800', letterSpacing: '-0.5px', color: '#ffffff' }}>
                  CLIFTONVILLE GARDENS
                </span>
                <span style={{ fontSize: '13px', color: '#93c5fd', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: '700' }}>
                  {location}
                </span>
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '10px 22px',
                borderRadius: '9999px',
                background: 'rgba(56, 189, 248, 0.15)',
                border: '1px solid rgba(56, 189, 248, 0.3)',
                color: '#bae6fd',
                fontSize: '14px',
                fontWeight: '700',
                textTransform: 'uppercase',
                letterSpacing: '1.5px',
              }}
            >
              {badge}
            </div>
          </div>

          {/* Center Main Content */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', zIndex: 10, maxWidth: '1000px' }}>
            <div
              style={{
                fontSize: '54px',
                fontWeight: '900',
                lineHeight: 1.15,
                letterSpacing: '-1.5px',
                background: 'linear-gradient(90deg, #ffffff 0%, #e0f2fe 50%, #93c5fd 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
              }}
            >
              {title}
            </div>
            <div
              style={{
                fontSize: '22px',
                color: '#cbd5e1',
                lineHeight: 1.45,
                fontWeight: '400',
              }}
            >
              {description}
            </div>
          </div>

          {/* Bottom Footer Info Bar */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingTop: '24px',
              borderTop: '1px solid rgba(255, 255, 255, 0.1)',
              zIndex: 10,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '28px', fontSize: '15px', color: '#94a3b8' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: '#38bdf8' }}>✓</span> 24/7 Monitored Security
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: '#38bdf8' }}>✓</span> World-Class Supported Care
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: '#38bdf8' }}>✓</span> Turnkey Modern Residences
              </span>
            </div>

            <div style={{ fontSize: '15px', fontWeight: '700', color: '#38bdf8' }}>
              cliftonvillegardens.com
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e) {
    return new Response(`Failed to generate the image: ${e.message}`, {
      status: 500,
    });
  }
}
