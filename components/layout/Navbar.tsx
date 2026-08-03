"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-slate-200/70 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-extrabold text-blue-600 lg:text-2xl"
        >
          Career Tech Global LLC
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 font-medium md:flex">

          <Link href="/" className="transition hover:text-blue-600">
            Home
          </Link>

          <Link href="/programs" className="transition hover:text-blue-600">
            Programs
          </Link>

          <Link
            href="/open-opportunities"
            className="transition hover:text-blue-600"
          >
            Open Opportunities
          </Link>

          <Link
            href="/hiring-events"
            className="transition hover:text-blue-600"
          >
            Hiring Events
          </Link>

          <Link
            href="/career-services"
            className="transition hover:text-blue-600"
          >
            Career Services
          </Link>

          <Link href="/about" className="transition hover:text-blue-600">
            About
          </Link>

          <Link href="/contact" className="transition hover:text-blue-600">
            Contact
          </Link>

        </nav>

        {/* Desktop Button */}
        <Link
          href="/contact"
          className="hidden rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700 md:block"
        >
          Book Consultation
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden"
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t bg-white md:hidden">

          <div className="flex flex-col px-6 py-6">

            <Link href="/" onClick={() => setIsOpen(false)} className="py-3">
              Home
            </Link>

            <Link
              href="/programs"
              onClick={() => setIsOpen(false)}
              className="py-3"
            >
              Programs
            </Link>

            <Link
              href="/open-opportunities"
              onClick={() => setIsOpen(false)}
              className="py-3"
            >
              Open Opportunities
            </Link>

            <Link
              href="/hiring-events"
              onClick={() => setIsOpen(false)}
              className="py-3"
            >
              Hiring Events
            </Link>

            <Link
              href="/career-services"
              onClick={() => setIsOpen(false)}
              className="py-3"
            >
              Career Services
            </Link>

            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className="py-3"
            >
              About
            </Link>

            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="py-3"
            >
              Contact
            </Link>

            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-5 rounded-xl bg-blue-600 py-3 text-center font-semibold text-white"
            >
              Book Consultation
            </Link>

          </div>

        </div>
      )}
    </header>
  );
}