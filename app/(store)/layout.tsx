import Header from '@/components/Header';
import '../globals.css';
import { SanityLive } from '@/sanity/lib/live';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <Header />
      {children}
      <SanityLive />
    </main>
  );
}
