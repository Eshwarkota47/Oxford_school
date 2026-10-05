import type { Metadata } from 'next';
import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';

export const metadata: Metadata = {
  title: 'Oxford English Medium School | Bukkapatna - 572115',
  description:
    'Official portal of Oxford English Medium School, Bukkapatna - 572115, Sira Taluk, Tumakuru District. Quality education from Kindergarten to 10th Standard (SSLC) with digital smart classes, science labs, sports & safe bus transport.',
  keywords: [
    'Oxford English Medium School Bukkapatna',
    'Oxford School Bukkapatna 572115',
    'Best School in Bukkapatna',
    'Schools in Sira Taluk Tumkur',
    'Admissions 2026-27 Bukkapatna',
  ],
  authors: [{ name: 'Oxford English Medium School Administration' }],
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-slate-50 text-slate-900 selection:bg-amber-400 selection:text-slate-900">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
