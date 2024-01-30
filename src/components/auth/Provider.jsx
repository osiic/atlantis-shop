"use client";

import { SessionProvider } from "next-auth/react";

export function Provider({ children, sessionProp }) {
  return <SessionProvider session={sessionProp}>{children}</SessionProvider>;
}
