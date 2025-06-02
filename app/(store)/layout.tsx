import Header from '@/components/Header';
import '../globals.css';
import { SanityLive } from '@/sanity/lib/live';
import Footer from '@/components/Footer';
import { Toaster } from 'sonner';
import { ClerkProvider } from '@clerk/nextjs';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <main>
        <Header />
        {children}
        <Footer />

        <SanityLive />
        <Toaster />
      </main>
    </ClerkProvider>
  );
}
