import type { Metadata, Viewport } from 'next';
import { LanguageProvider } from '../contexts/LanguageContext';
import { DifyChatbot } from '../components/DifyChatbot';
import { Layout } from '../components/Layout';
import { publicBasePath } from '../lib/publicBasePath';
import '../styles/globals.css';

export const metadata: Metadata = {
  title: 'Heiheihoho\'s Portfolio',
  description: 'A portfolio showcasing my projects, blogs, and gallery explorations.',
  icons: {
    icon: `${publicBasePath}/favicon.svg`,
    apple: `${publicBasePath}/favicon.svg`,
    shortcut: `${publicBasePath}/favicon.svg`,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={`${publicBasePath}/favicon.svg`} type="image/svg+xml" />
        <link rel="apple-touch-icon" href={`${publicBasePath}/favicon.svg`} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <DifyChatbot />
        <LanguageProvider>
          <Layout>
            {children}
          </Layout>
        </LanguageProvider>
      </body>
    </html>
  );
}

