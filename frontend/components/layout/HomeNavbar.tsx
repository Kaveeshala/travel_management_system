"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { User, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Destinations", href: "/destinations" },
  { name: "Tours", href: "/tours" },
  { name: "Flights", href: "/flights" },
  { name: "Hotels", href: "/hotels" },
  { name: "Blog", href: "/blogs" },
  { name: "About Us", href: "/about" },
];

export default function HomeNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 z-30 w-full">
      <div className="w-full bg-white/95 shadow-sm backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          {/* Left logo */}
          <Link href="/" className="shrink-0">
            <Image
              src="/images/logo.png"
              alt="Travel Agency logo"
              width={52}
              height={52}
              priority
              className="h-11 w-11 rounded-full object-cover sm:h-12 sm:w-12"
            />
          </Link>

          {/* Center nav tabs - desktop */}
          <div className="hidden flex-1 justify-center lg:flex">
            <div className="flex items-center justify-center rounded-full border border-blue-100 bg-slate-50/90 p-1 shadow-inner">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="rounded-full px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-white hover:text-blue-600 xl:px-5 xl:text-[15px]"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Right side - desktop */}
          <div className="hidden shrink-0 items-center gap-4 lg:flex xl:gap-6">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-50 shadow-sm">
                <Phone className="h-5 w-5 text-blue-600" strokeWidth={2.2} />
              </div>

              <div className="text-left leading-tight">
                <p className="text-[10px] font-medium uppercase tracking-wide text-gray-500 xl:text-xs">
                  Need help
                </p>
                <p className="text-xs font-semibold text-gray-900 xl:text-sm">
                  +94 77 123 4567
                </p>
              </div>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-50 shadow-sm">
              <User className="h-5 w-5 text-blue-600" strokeWidth={2.2} />
            </div>
          </div>

          {/* Mobile menu button */}
          <Button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-50 text-blue-600 shadow-sm hover:bg-blue-100 lg:hidden"
            aria-label="Toggle menu"
          >
            <span className="text-xl">{menuOpen ? "✕" : "☰"}</span>
          </Button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="border-t border-gray-100 bg-white px-4 pb-4 pt-3 sm:px-6 lg:hidden">
            <div className="rounded-2xl bg-slate-50 p-4 text-gray-900 shadow-sm ring-1 ring-gray-100">
              <div className="flex flex-col gap-2 text-sm font-medium">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="rounded-xl px-3 py-3 transition hover:bg-white hover:text-blue-600"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              <div className="mt-5 border-t border-gray-200 pt-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-50">
                    <Phone className="h-5 w-5 text-blue-600" strokeWidth={2.2} />
                  </div>

                  <div>
                    <p className="text-[10px] uppercase tracking-wide text-gray-500">
                      Need help
                    </p>
                    <p className="text-sm font-semibold text-gray-900">
                      +94 77 123 4567
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-50">
                    <User className="h-5 w-5 text-blue-600" strokeWidth={2.2} />
                  </div>
                  <p className="text-sm font-medium text-gray-900">My Profile</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}