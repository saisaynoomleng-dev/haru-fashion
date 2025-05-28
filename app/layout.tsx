import type { Metadata } from 'next';
import './globals.css';
import { intrepid, libre } from '@/lib/fonts';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

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
      <body className={`${libre.variable} ${intrepid.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
