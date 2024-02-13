// mark as client component
'use client';

// importing necessary functions
import { signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link';

export function Login() {
  const { data: session } = useSession();
  if (session?.user?.name) {
    return (
      <div className='flex items-center gap-1'>
        <Link href='/dashboard'>{`${session?.user?.name}`}</Link>
        <button
          onClick={signOut}
          type='button'
          className='rounded border-2 border-zinc-950 px-5 py-1 text-xs'
        >
          Sign out
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={signIn}
      className='rounded border-2 border-zinc-950 bg-gray-950 px-5 py-1 text-xs text-white'
      type='button'
    >
      Sign In
    </button>
  );
}
