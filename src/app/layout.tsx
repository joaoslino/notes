/* eslint-disable @next/next/no-head-element */
import Link from 'next/link';
import './globals.css';
import Navbar from '@/components/Navbar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <main>
          <nav>
            <Navbar />
          </nav>
          {children}
        </main>
      </body>
    </html>
  );
}