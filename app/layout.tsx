import type { Metadata } from 'next';
import './globals.css';
import { instrument_sans, libre, valentino } from '@/lib/fonts';

export const metadata: Metadata = {
  title: {
    template: '%s | Haru',
    default: 'Haru',
  },
  description:
    'Haru is an e-commerce website selling fashion and editorial clothing worldwide.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${valentino.variable} ${instrument_sans.variable} ${libre.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
