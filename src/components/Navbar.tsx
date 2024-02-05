import Link from "next/link";
import React from "react";
import SignInButton from "./SignInButton";
import { getAuthSession } from "@/lib/auth";
import UserAccountNav from "./UserAccountNav";
import { ThemeToggle } from "./ThemeToggle";

type Props = {};

const Navbar = async (props: Props) => {
  const session = await getAuthSession();
  return (
    <nav className="text-lg fixed inset-x-0 top-0 bg-sky-100 dark:bg-slate-800 z-[10] h-fit border-b border-zinc-300 py-2">
      <div className="flex items-center justify-center h-full gap-2 px-8 mx-auto sm:justify-between max-w-8xl">
        <Link href="/gallery" className="items-center hidden gap-2 sm:flex">
          <p className="rounded-3xl border-2 border-b-4 border-l-4 border-black px-2 py-1 text-2xl font-extrabold transition-all hover:-translate-y-[-2px] hover:-translate-x-[2px] md:block dark:border-white">
            Course Forge
          </p>
        </Link>
        <div className="flex items-center">
          <Link href="/explore" className="mr-6 font-lightbold text-base hover:-translate-y-[-2px] transition-all">
            Explore
          </Link>
          {session?.user && (
            <>
              <Link href="/forge" className="mr-6 font-lightbold text-base hover:-translate-y-[-2px] transition-all">
                Forge
              </Link>
              <Link href="/settings" className="mr-6 font-lightbold text-base hover:-translate-y-[-2px] transition-all">
                Settings
              </Link>
            </>
          )}
          <ThemeToggle className="mr-6"/>
          <div className="flex items-center font-lightbold text-base">
            {session?.user ? (
              <UserAccountNav user={session.user} />
            ) : (
              <SignInButton />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;