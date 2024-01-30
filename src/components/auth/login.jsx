"use client";

import { signIn, signOut } from "next-auth/react";

export function Login({ session }) {
  if (session) {
    return (
      <div className="flex items-center" >
        <span>
          {session?.name}
        </span>
        <button
          onClick={() => signOut()}
          type="button"
          className="px-5 py-1 rounded border-2 border-zinc-950 text-xs"
        >
          Sign out
        </button>
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => signIn()}
      className="px-5 py-1 rounded border-2 border-zinc-950 bg-gray-950 text-xs text-white"
    >
      Sign In
    </button>
  );
}
