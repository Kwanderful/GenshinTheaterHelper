"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname() || "/";
  const isHome = pathname === "/";
  const isCharacters = pathname.startsWith("/characters");

  return (
    <nav className="sticky top-0 z-10 w-full border-b border-slate-700 bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center">
          <div>
            <Link
              href="/"
              className={`text-lg font-semibold text-white`}
            >
              TheaterHelper
            </Link>
          </div>

          <div className="flex items-center gap-6 justify-end ml-auto">
            <Link
              href="/"
              className={`${isHome ? "text-white font-semibold" : "text-sm text-slate-300 hover:text-white"}`}
              aria-current={isHome ? "page" : undefined}
            >
              Home
            </Link>
            <Link
              href="/characters"
              className={`${isCharacters ? "text-white font-semibold" : "text-sm text-slate-300 hover:text-white"}`}
              aria-current={isCharacters ? "page" : undefined}
            >
              Characters
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
