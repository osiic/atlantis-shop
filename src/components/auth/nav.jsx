"use client";
import { useSession } from "next-auth/react";
import { Login } from "./login";

export function Nav() {
  const { data } = useSession();

  return (
    <section className="m-auto flex justify-between max-w-5xl px-[7%] py-3">
      <span>{data?.user?.name || "Prototype"}</span>
      <Login session={data} />
    </section>
  );
}
