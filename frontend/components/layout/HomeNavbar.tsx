'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function HomeNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 z-30 w-full px-4 py-4 sm:px-6 lg:px-10 lg:py-6">
      <div className="flex items-center justify-between text-white">
        {/* Left */}
        <div className="flex items-center">
          <h1 className="text-lg font-semibold sm:text-xl">Travel Agency</h1>
        </div>

        {/* Center nav - desktop only */}
        <div className="hidden flex-1 justify-center lg:flex">
          <div className="flex items-center gap-6 xl:gap-8 text-sm font-medium">
            <Link href="/">Home</Link>
            <Link href="/destinations">Destinations</Link>
            <Link href="/tours">Tours</Link>
            <Link href="/login">Login</Link>
            <Link href="/signup">Sign Up</Link>
          </div>
        </div>

        {/* Right - desktop only */}
        <div className="hidden flex-1 items-center justify-end gap-4 lg:flex xl:gap-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40">
              <span className="text-lg">📞</span>
            </div>

            <div className="text-left leading-tight">
              <p className="text-[10px] font-medium uppercase tracking-wide text-white/80 xl:text-xs">
                Need help
              </p>
              <p className="text-xs font-semibold xl:text-sm">+94 77 123 4567</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-white/10">
              <span className="text-lg">👤</span>
            </div>

            <img
              src="/images/avatar.jpg"
              alt="User avatar"
              className="h-10 w-10 rounded-full border border-white/40 object-cover"
            />
          </div>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-white/10 lg:hidden"
        >
          <span className="text-lg">{menuOpen ? '✕' : '☰'}</span>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="mt-4 rounded-2xl border border-white/20 bg-black/40 p-4 text-white backdrop-blur-md lg:hidden">
          <div className="flex flex-col gap-4 text-sm font-medium">
            <Link href="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
            <Link href="/destinations" onClick={() => setMenuOpen(false)}>
              Destinations
            </Link>
            <Link href="/tours" onClick={() => setMenuOpen(false)}>
              Tours
            </Link>
            <Link href="/login" onClick={() => setMenuOpen(false)}>
              Login
            </Link>
            <Link href="/signup" onClick={() => setMenuOpen(false)}>
              Sign Up
            </Link>
          </div>

          <div className="mt-5 border-t border-white/20 pt-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40">
                <span className="text-lg">📞</span>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wide text-white/80">
                  Need help
                </p>
                <p className="text-sm font-semibold">+94 77 123 4567</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}