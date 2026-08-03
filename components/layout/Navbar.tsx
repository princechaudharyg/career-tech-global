import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-gray-200 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-extrabold text-blue-600"
        >
          Career Tech Global LLC
        </Link>

        {/* Navigation */}
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

        {/* Button */}
        <Link
          href="/contact"
          className="rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          Book Consultation
        </Link>

      </div>
    </header>
  );
}