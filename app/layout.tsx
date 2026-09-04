import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://gigatop.io'),
  title: 'Private AI für Schweizer Unternehmen | Gigatop',
  description: 'Gigatop verbindet Unternehmenswissen, lokale AI und menschliche Kontrolle zu funktionierenden Systemen.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Gigatop Private AI',
    description: 'Ihre Daten. Ein klarer Raum.',
    type: 'website',
    locale: 'de_CH',
    url: '/',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Gigatop Private AI – Ihre Daten. Ein klarer Raum.' }],
  },
  twitter: { card: 'summary_large_image', title: 'Gigatop Private AI', description: 'Ihre Daten. Ein klarer Raum.', images: ['/og.png'] },
  robots: { index: true, follow: true },
  icons: { icon: '/icon.svg' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="de-CH"><body>{children}</body></html>;
}
