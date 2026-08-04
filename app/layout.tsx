import type { Metadata } from 'next';
import './globals.css';
import { LenisWrapper } from '@/components/layout/LenisWrapper';
import { Cursor } from '@/components/ui/Cursor';
import { Nav } from '@/components/layout/Nav';
import { Footer } from '@/components/layout/Footer';
import { Pulse } from '@/components/ui/Pulse';
import { PageTransition } from '@/components/layout/PageTransition';

export const metadata: Metadata = {
  title: 'Devarshi Dalal',
  description: 'BBA + Neuroscience candidate at Michigan. Thinking at the intersection of clinical science, capital, and strategy.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className="antialiased selection:bg-accent/20 selection:text-ink font-sans min-h-screen">
        {/* Fixed frame. Purely decorative, so it must never intercept clicks or scroll. */}
        <div aria-hidden className="pointer-events-none fixed inset-0 z-[900] border border-obsidian" />
        <LenisWrapper>
          <Cursor />
          <div className="flex min-h-screen w-full flex-col">
            <Nav />
            <Pulse />
            <PageTransition>
              {children}
            </PageTransition>
            <Footer />
          </div>
        </LenisWrapper>
      </body>
    </html>
  );
}
