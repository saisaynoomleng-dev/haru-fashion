import Header from '@/components/Header';
import '../globals.css';
import { SanityLive } from '@/sanity/lib/live';
import Footer from '@/components/Footer';
import { Toaster } from 'sonner';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      {children}

      <SanityLive />
      <Toaster />
    </main>
  );
}
