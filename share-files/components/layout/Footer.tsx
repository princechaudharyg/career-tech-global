"use client";

import Link from "next/link";
import {
  IconArrowUpRight,
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandYoutube,
  IconChevronUp,
  IconMail,
  IconMapPin,
  IconPhone,
} from "@tabler/icons-react";

const companyLinks = [
  {
    name: "About Us",
    href: "/about",
  },
  {
    name: "Career Services",
    href: "/career-services",
  },
  {
    name: "Programs",
    href: "/programs",
  },
  {
    name: "Open Opportunities",
    href: "/open-opportunities",
  },
  {
    name: "Contact Us",
    href: "/contact",
  },
];

const programLinks = [
  {
    name: "Data Science & AI",
    href: "/programs/data-science-ai",
  },
  {
    name: "Cyber Security",
    href: "/programs/cyber-security-ai",
  },
  {
    name: "GRC + AI",
    href: "/programs/grc-ai",
  },
  {
    name: "1-to-1 Mentorship",
    href: "/contact",
  },
  {
    name: "Career Programs",
    href: "/programs",
  },
];

const resourceLinks = [
  {
    name: "FAQ",
    href: "/faq",
  },
  {
    name: "Privacy Policy",
    href: "/privacy-policy",
  },
  {
    name: "Terms & Conditions",
    href: "/terms",
  },
  {
    name: "Refund Policy",
    href: "/refund-policy",
  },
];

const socialLinks = [
  {
    name: "LinkedIn",
    icon: IconBrandLinkedin,
    href: "#",
  },
  {
    name: "YouTube",
    icon: IconBrandYoutube,
    href: "#",
  },
  {
    name: "Instagram",
    icon: IconBrandInstagram,
    href: "#",
  },
  {
    name: "Facebook",
    icon: IconBrandFacebook,
    href: "#",
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[#050d1a] text-white">
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(6,182,212,0.16),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(37,99,235,0.14),transparent_35%)]" />

      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-cyan-500/10 blur-[130px]" />

      <div className="pointer-events-none absolute -bottom-40 right-0 h-96 w-96 rounded-full bg-blue-600/10 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-[1500px] px-5 py-14 sm:px-8 lg:py-20 xl:px-10">
        {/* Main Footer Grid */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-10">
          {/* Brand Section */}
          <div className="sm:col-span-2 lg:col-span-5">
            <Link
              href="/"
              className="inline-flex items-center gap-3"
              aria-label="Career Tech home"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 text-lg font-black text-white shadow-lg shadow-cyan-500/20">
                CT
              </div>

              <div className="leading-none">
                <h2 className="text-xl font-black tracking-tight text-white">
                  Career Tech
                </h2>

                <p className="mt-1 text-xs font-medium text-slate-400">
                  Global LLC
                </p>
              </div>
            </Link>

            <p className="mt-6 max-w-md text-sm leading-7 text-slate-400 sm:text-base">
              Career Tech Global LLC helps students and professionals build
              future-ready careers through industry-focused training, real
              projects, AI-powered learning and dedicated career support.
            </p>

            {/* Social Links */}
            <div className="mt-7 flex items-center gap-2.5">
              {socialLinks.map((social) => {
                const SocialIcon = social.icon;

                return (
                  <Link
                    key={social.name}
                    href={social.href}
                    aria-label={social.name}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] text-slate-400 transition duration-200 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400 hover:text-white"
                  >
                    <SocialIcon size={19} stroke={1.8} />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Company Links */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Company
            </h3>

            <ul className="mt-5 space-y-3.5">
              {companyLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-1 text-sm text-slate-400 transition hover:text-cyan-300"
                  >
                    {item.name}

                    <IconArrowUpRight
                      size={13}
                      className="opacity-0 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Programs
            </h3>

            <ul className="mt-5 space-y-3.5">
              {programLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-1 text-sm text-slate-400 transition hover:text-cyan-300"
                  >
                    {item.name}

                    <IconArrowUpRight
                      size={13}
                      className="opacity-0 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Get in touch
            </h3>

            <div className="mt-5 space-y-4">
              <a
                href="mailto:info@careertechglobal.com"
                className="group flex items-start gap-3"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300 transition group-hover:bg-cyan-400 group-hover:text-white">
                  <IconMail size={17} />
                </span>

                <span className="pt-1 text-sm text-slate-400 transition group-hover:text-cyan-300">
                  info@careertechglobal.com
                </span>
              </a>

              <a
                href="tel:+10000000000"
                className="group flex items-start gap-3"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300 transition group-hover:bg-cyan-400 group-hover:text-white">
                  <IconPhone size={17} />
                </span>

                <span className="pt-1 text-sm text-slate-400 transition group-hover:text-cyan-300">
                  +1 (000) 000-0000
                </span>
              </a>

              <div className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
                  <IconMapPin size={17} />
                </span>

                <span className="pt-1 text-sm leading-5 text-slate-400">
                  United States
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Resource Links */}
        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {resourceLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-xs text-slate-500 transition hover:text-cyan-300"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <a
            href="#top"
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 transition hover:text-cyan-300"
          >
            Back to top

            <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-white/10 bg-white/[0.05]">
              <IconChevronUp size={15} />
            </span>
          </a>
        </div>

        {/* Bottom Bar */}
        <div className="mt-7 flex flex-col gap-3 border-t border-white/10 pt-6 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p className="text-xs text-slate-500">
            © {currentYear} Career Tech Global LLC. All rights reserved.
          </p>

          <p className="text-xs font-medium text-cyan-400">
            Transforming careers through technology &amp; AI.
          </p>
        </div>
      </div>
    </footer>
  );
}