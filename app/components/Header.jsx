"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { navItems } from "../lib/nav";

export default function Header() {
  const detailsRef = useRef(null);

  return (
    <header className="bg-[#0b0e13] border-b border-[#232830]">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo-CT.png"
            alt="Chelsea Thrive logo"
            width={32}
            height={32}
            priority
          />
          <span className="font-semibold text-lg text-[#f2f4f7]">
            Chelsea Thrive
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex space-x-6 items-center h-full">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[#c7cdd6] hover:text-white transition-colors py-1"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile menu */}
        <details ref={detailsRef} className="relative md:hidden">
          <summary className="list-none cursor-pointer p-2 -mr-2">
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6 text-[#c7cdd6]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </summary>
          <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-[#12161c] border border-[#232830] py-2 z-50">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-2 text-sm text-[#c7cdd6] hover:bg-[#1b2027] hover:text-white transition-colors"
                onClick={() => {
                  if (detailsRef.current) detailsRef.current.open = false;
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </details>
      </div>
    </header>
  );
}
