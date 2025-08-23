import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/components/LanguageProvider';
import FloatingLanguageButton from '@/components/FloatingLanguageButton';

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Angitha',
  description: 'Angitha - Professional services and solutions',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${montserrat.variable} antialiased font-sans`}>
        <LanguageProvider>
          {children}
          <FloatingLanguageButton />
        </LanguageProvider>
      </body>
    </html>
  );
}
