/** @jsxImportSource react */

interface BackgroundImageProps {
  url: string;
  overlayColor?: string;
  opacity?: number;
  pattern?: 'dots' | 'grid' | 'lines' | 'none';
}

export default function BackgroundImage({
  url,
  overlayColor = '#0F1412',
  opacity = 0.75,
  pattern = 'dots',
}: BackgroundImageProps) {
  return (
    <div
      className="absolute inset-0 z-0"
      style={{
        backgroundImage: `url(${url})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0" style={{ backgroundColor: overlayColor, opacity }} />
      
      {/* Pattern overlay */}
      {pattern === 'dots' && (
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />
      )}
      {pattern === 'grid' && (
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)
            `,
            backgroundSize: '32px 32px',
          }}
        />
      )}
      {pattern === 'lines' && (
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px)',
            backgroundSize: '100% 24px',
          }}
        />
      )}
    </div>
  );
}