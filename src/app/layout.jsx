import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import SessionWrapper from '@/components/auth/sesion-wrapper';
import { Nav } from '@/components/auth/nav';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <SessionWrapper>
      <html lang='en'>
        <body className={inter.className}>
          <Nav />

          {children}
        </body>
      </html>
    </SessionWrapper>
  );
}
