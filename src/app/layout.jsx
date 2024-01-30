import { Inter } from 'next/font/google';
import '@/styles/globals.css';

import { getAuth } from '@/lib/auth';
import { Provider } from '@/components/auth/Provider';
import { Nav } from '@/components/auth/nav';

const inter = Inter({ subsets: ['latin'] });
const session = await getAuth();

export default function RootLayout({ children }) {
  return (
    <Provider sessionProp={session}>
      <html lang='en'>
        <body className={inter.className}>
          <Nav />
          {children}
        </body>
      </html>
    </Provider>
  );
}
