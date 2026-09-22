import type { Metadata } from 'next';
import { Cormorant_Garamond, Manrope } from 'next/font/google';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  weight: ['400', '500', '600', '700'],
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://saaz.studio'),
  title: {
    default: 'SAAZ | Creative & Marketing Studio',
    template: '%s | SAAZ',
  },
  description:
    'SAAZ is a creative and marketing studio creating films, content, branding and campaigns with cinematic craft and strategic clarity.',
  keywords: [
    'creative studio',
    'marketing studio',
    'film production',
    'brand strategy',
    'documentary',
    'content agency',
    'creative campaign',
  ],
  openGraph: {
    title: 'SAAZ | Creative & Marketing Studio',
    description:
      'Stories that make an impact. Strategy, production, post-production and brand content for memorable growth.',
    type: 'website',
    locale: 'en_GB',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${cormorant.variable} ${manrope.variable} bg-charcoal text-cream antialiased`}>
        {children}
      </body>
    </html>
  );
}
