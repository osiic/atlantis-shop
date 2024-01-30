import Link from 'next/link';
import { Login } from './login';

export function Nav() {
  return (
    <section className='m-auto flex max-w-5xl justify-between px-[7%] py-3'>
      <Link href='/'>Prototype</Link>
      <Login />
    </section>
  );
}
