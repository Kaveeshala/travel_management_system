"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { User, Phone } from "lucide-react";
import { Button } from "@/components/ui/button"


const navLinks = [
  { name: "Home", href: "/" },
  { name: "Destinations", href: "/destinations" },
  { name: "Tours", href: "/tours" },
  { name: "Flights", href: "/flights" },
  { name: "Hotels", href: "/hotels" },
  { name: "Blogs", href: "/blogs" },
  { name: "About Us", href: "/about" },
];

export default function HomeNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 z-30 w-full px-4 py-4 sm:px-6 lg:px-10 lg:py-6">
      <div className="flex items-center justify-between gap-4 text-white">
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

        {/* Center nav - desktop */}
        <div className="hidden flex-1 justify-center lg:flex">
          <div className="flex items-center justify-center gap-6 text-sm font-medium xl:gap-8 xl:text-base">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="transition hover:text-blue-200"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Right side - desktop */}
        <div className="hidden shrink-0 items-center gap-4 lg:flex xl:gap-6">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-md">
              <Phone className="h-5 w-5 text-blue-600" strokeWidth={2.2} />
            </div>

            <div className="text-left leading-tight">
              <p className="text-[10px] font-medium uppercase tracking-wide text-white/80 xl:text-xs">
                Need help
              </p>
              <p className="text-xs font-semibold xl:text-sm">
                +94 77 123 4567
              </p>
            </div>
          </div>

          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-md">
            <User className="h-5 w-5 text-blue-600" strokeWidth={2.2} />
          </div>
        </div>

        {/* Mobile menu button */}
        <Button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-blue-600 shadow-md lg:hidden"
          aria-label="Toggle menu"
        >
          <span className="text-xl">{menuOpen ? "✕" : "☰"}</span>
        </Button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="mt-4 rounded-2xl bg-white p-4 text-gray-900 shadow-xl lg:hidden">
          <div className="flex flex-col gap-4 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-2 py-2 transition hover:underline hover:decoration-white underline-offset-4"
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
      )}
    </nav>
  );
}
