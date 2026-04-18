'use client';

import { AiHeroBackground } from '@/components/ui/ai-hero-background';

export default function AiHeroDemo() {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
      <AiHeroBackground />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1,
          color: 'white',
          fontSize: '3rem',
          fontWeight: 800,
          textAlign: 'center',
          pointerEvents: 'none',
        }}
      >
        Ai Hero Background
      </div>
    </div>
  );
}
