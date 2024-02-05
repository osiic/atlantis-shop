// mark as client component
"use client";

// importing necessary functions
import { useSession } from "next-auth/react"
import Link from 'next/link';

export function Login() {
  const { data: session } = useSession()
  if (session?.user?.name) {
    return (
      <div className='flex items-center gap-1'>
        <Link href='/dashboard'>{`${session?.user?.name}`}</Link>
        <Link
          href='api/auth/signout'
          type='button'
          className='rounded border-2 border-zinc-950 px-5 py-1 text-xs'
        >
          Sign out
        </Link>
      </div>
    );
  }

  return (
    <Link
      href='/api/auth/signin'
      className='rounded border-2 border-zinc-950 bg-gray-950 px-5 py-1 text-xs text-white'
    >
      Sign In
    </Link>
  );
}
