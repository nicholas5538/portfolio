import { Montserrat } from 'next/font/google';
import MotionProvider from '@/hooks/useMotionContext';
import RefsProvider from '@/hooks/useRefsContext';
import ThemeProvider from '@/hooks/useThemeContext';
import ViewProvider from '@/hooks/useViewContext';
import type { Metadata } from 'next';
import type { childrenNode } from '@/constants/typeInterface';
import './globals.css';

const monserrat = Montserrat({
  subsets: ['latin'],
  weight: 'variable',
  style: ['normal', 'italic'],
  variable: '--font-mont',
});

export const metadata: Metadata = {
  title: 'Nicholas Yong',
  description:
    "Hi, I'm Nicholas and I love to build simple and beautiful things!",
  creator: 'Nicholas Yong',
  icons: {
    icon: '/favicons/favicon.ico',
    apple: '/favicons/apple-touch-icon.png',
    other: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        url: '/favicons/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        url: '/favicons/favicon-16x16.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '192x192',
        url: '/favicons/android-chrome-192x192.png',
      },
      {
        rel: 'mask-icon',
        url: '/favicons/safari-pinned-tab.svg',
      },
    ],
  },
  manifest: '/favicons/site.webmanifest',
};

export default function RootLayout({ children }: childrenNode) {
  return (
    <html lang="en" className={monserrat.className}>
      <body>
        <ThemeProvider>
          <MotionProvider>
            <RefsProvider>
              <ViewProvider>{children}</ViewProvider>
            </RefsProvider>
          </MotionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
