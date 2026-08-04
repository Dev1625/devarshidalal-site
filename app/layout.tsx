import type { Metadata } from 'next';
import { Inter, Newsreader, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { LenisWrapper } from '@/components/layout/LenisWrapper';
import { Cursor } from '@/components/ui/Cursor';
import { Nav } from '@/components/layout/Nav';
import { Footer } from '@/components/layout/Footer';
import { Pulse } from '@/components/ui/Pulse';
import { PageTransition } from '@/components/layout/PageTransition';

// Editorial serif for display and pull quotes. Real italics, which the tab
// labels and blockquotes lean on heavily.
// Weights are deliberately omitted so next/font serves the variable files.
// Newsreader carries an optical-size axis that globals.css tunes.
const newsreader = Newsreader({
  subsets: ['latin'],
  display: 'swap',
  style: ['normal', 'italic'],
  variable: '--font-serif-var',
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans-var',
});

// Replaces Courier New, which was the single most dated thing on the page.
const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono-var',
});

export const metadata: Metadata = {
  title: 'Devarshi Dalal',
  description:
    'Business, mathematical biology and neuroscience at Michigan. Healthcare investment research: twelve company memos and a dated coverage archive.',
  metadataBase: new URL('https://devarshidalal.com'),
  openGraph: {
    title: 'Devarshi Dalal',
    description:
      'Healthcare investment research. Twelve company memos and a dated coverage archive spanning biopharma, clinical AI, devices and policy.',
    url: 'https://devarshidalal.com',
    siteName: 'Devarshi Dalal',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Devarshi Dalal',
    description: 'Healthcare investment research. Twelve company memos and a dated coverage archive.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${newsreader.variable} ${inter.variable} ${jetbrains.variable}`}
    >
      <body
        suppressHydrationWarning
        className="antialiased selection:bg-accent/20 selection:text-ink font-sans min-h-screen"
      >
        {/* Fixed frame. Purely decorative, so it must never intercept clicks or scroll. */}
        <div aria-hidden className="pointer-events-none fixed inset-0 z-[900] border border-obsidian" />
        <LenisWrapper>
          <Cursor />
          <div className="flex min-h-screen w-full flex-col">
            <Nav />
            <Pulse />
            <PageTransition>{children}</PageTransition>
            <Footer />
          </div>
        </LenisWrapper>
      </body>
    </html>
  );
}
