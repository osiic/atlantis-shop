import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import SessionWrapper from '@/components/auth/sesion-wrapper';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <SessionWrapper>
      <html lang='en'>
        <body className={inter.className}>{children}</body>
      </html>
    </SessionWrapper>
  );
}
