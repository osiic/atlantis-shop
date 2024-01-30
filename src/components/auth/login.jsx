"use client";

import { signIn, signOut } from "next-auth/react";

export function Login({ session }) {
  if (session) {
    return (
      <button
        onClick={() => signOut()}
        type="button"
        className="px-5 py-1 rounded border-2 border-zinc-950 text-xs"
      >
        Sign out
      </button>
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
