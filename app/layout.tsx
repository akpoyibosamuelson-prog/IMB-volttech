import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

export const metadata: Metadata = {
  title: 'VoltBiz | Electrical Services & Marketplace',
  description: 'VoltBiz helps customers book electrical services and buy electrical materials from trusted suppliers and wholesalers.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-900 antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
