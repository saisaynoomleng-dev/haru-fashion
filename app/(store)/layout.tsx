import '../globals.css';
import { SanityLive } from '@/sanity/lib/live';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      {children} <SanityLive />
    </main>
  );
}
