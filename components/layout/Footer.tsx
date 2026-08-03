import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-12 md:grid-cols-4">

          {/* Company */}
          <div>
            <h2 className="text-2xl font-bold text-blue-400">
              Career Tech Global LLC
            </h2>

            <p className="mt-4 text-slate-300 leading-7">
              Empowering students with AI, Data Science, Cyber Security and
              future-ready skills through industry-focused education.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>

            <ul className="space-y-3 text-slate-300">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Programs</h3>

            <ul className="space-y-3 text-slate-300">
              <li>Data Science & AI</li>
              <li>Cyber Security & Ethical Hacking</li>
              <li>Cyber Security & AI</li>
              <li>GRC & AI</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact</h3>

            <ul className="space-y-3 text-slate-300">
              <li>📧 info@careertechglobal.com</li>
              <li>📍 United States</li>
              <li>🌐 careertechglobal.com</li>
            </ul>
          </div>

        </div>

        <div className="mt-12 border-t border-slate-700 pt-6 text-center text-slate-400">
          © 2026 Career Tech Global LLC. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}