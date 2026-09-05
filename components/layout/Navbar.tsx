"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { createClient } from "@/lib/supabase/client";

import {
  IconArrowRight,
  IconChevronDown,
  IconMenu2,
  IconX,
  IconShieldLock,
  IconBrain,
  IconRobot,
} from "@tabler/icons-react";

const programs = [
  {
    title: "Data Science & AI",
    description: "Python • Machine Learning • Deep Learning • LLMs",
    href: "/programs/data-science-ai",
    icon: IconBrain,
  },
  {
    title: "Cyber Security",
    description: "Ethical Hacking • SOC • Cloud Security",
    href: "/programs/cyber-security-ai",
    icon: IconShieldLock,
  },
  {
    title: "GRC + AI",
    description: "Governance • Risk • Compliance",
    href: "/programs/grc-ai",
    icon: IconRobot,
  },
];

export default function Navbar() {
  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [programOpen, setProgramOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setProgramOpen(false);
  }, [pathname]);

  useEffect(() => {
    const supabase = createClient();

    async function checkLogin() {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      setIsLoggedIn(Boolean(session));
    }

    checkLogin();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setIsLoggedIn(Boolean(session));
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  async function handleSignOut() {
    const supabase = createClient();

    const { error } = await supabase.auth.signOut();

    if (!error) {
      setMobileOpen(false);
      window.location.href = "/auth/sign-in";
    }
  }

  const navLink =
    "whitespace-nowrap text-[14px] font-semibold leading-none text-slate-700 transition-colors duration-200 hover:text-cyan-600";

  const activeLink =
    "whitespace-nowrap text-[14px] font-semibold leading-none text-cyan-600";

  const mobileLink =
    "block rounded-xl px-4 py-3.5 text-[16px] font-semibold text-slate-700 transition hover:bg-cyan-50 hover:text-cyan-600";

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-slate-200 bg-white/95 shadow-md backdrop-blur-xl"
            : "border-b border-slate-100 bg-white"
        }`}
      >
        <div className="mx-auto flex h-[80px] w-full max-w-[1540px] items-center gap-6 px-5 sm:px-8 xl:px-10">
          <Link
            href="/"
            className="flex shrink-0 items-center gap-2.5"
            aria-label="Career Tech home"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-base font-black text-white shadow-lg">
              CT
            </div>

            <div className="leading-none">
              <h2 className="whitespace-nowrap text-[18px] font-black tracking-tight text-slate-900">
                Career Tech
              </h2>

              <p className="mt-1 text-[11px] font-medium text-slate-500">
                Global LLC
              </p>
            </div>
          </Link>

          <nav className="ml-auto hidden items-center gap-5 lg:flex xl:gap-7">
            <Link
              href="/"
              className={pathname === "/" ? activeLink : navLink}
            >
              Home
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setProgramOpen(true)}
              onMouseLeave={() => setProgramOpen(false)}
            >
              <button
                type="button"
                className={`${navLink} flex items-center gap-1.5`}
                aria-expanded={programOpen}
              >
                Programs
                <IconChevronDown size={16} stroke={2} />
              </button>

              <AnimatePresence>
                {programOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-1/2 top-8 z-50 w-[410px] -translate-x-1/2 overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-2xl"
                  >
                    <h4 className="mb-3 px-2 text-base font-black text-slate-900">
                      Featured Programs
                    </h4>

                    <div className="space-y-1">
                      {programs.map((item) => {
                        const Icon = item.icon;

                        return (
                          <Link
                            key={item.title}
                            href={item.href}
                            className="flex items-start gap-3 rounded-xl p-3 transition hover:bg-cyan-50"
                          >
                            <div className="shrink-0 rounded-lg bg-cyan-100 p-2.5">
                              <Icon
                                size={21}
                                stroke={2}
                                className="text-cyan-600"
                              />
                            </div>

                            <div>
                              <h5 className="text-sm font-bold text-slate-900">
                                {item.title}
                              </h5>

                              <p className="mt-1 text-xs leading-5 text-slate-500">
                                {item.description}
                              </p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/career-services"
              className={
                pathname === "/career-services" ? activeLink : navLink
              }
            >
              Career Services
            </Link>

            <Link
              href="/open-opportunities"
              className={
                pathname === "/open-opportunities" ? activeLink : navLink
              }
            >
              Open Opportunities
            </Link>

            {isLoggedIn && (
              <Link
                href="/dashboard"
                className={pathname === "/dashboard" ? activeLink : navLink}
              >
                Dashboard
              </Link>
            )}

            <Link
              href="/about"
              className={pathname === "/about" ? activeLink : navLink}
            >
              About
            </Link>

            <Link
              href="/contact"
              className={pathname === "/contact" ? activeLink : navLink}
            >
              Contact
            </Link>
          </nav>

          <div className="hidden shrink-0 items-center gap-3 lg:flex">
            <Link
              href="/contact"
              className="whitespace-nowrap rounded-full border border-cyan-500 px-4 py-2.5 text-[14px] font-semibold text-cyan-600 transition hover:bg-cyan-50 xl:px-5"
            >
              Book Consultation
            </Link>

            <Link
              href="/auth/sign-in"
              className="whitespace-nowrap rounded-full border border-purple-500 px-4 py-2.5 text-[14px] font-semibold text-purple-600 transition hover:bg-purple-50 xl:px-5"
            >
              Admin Login
            </Link>

            {isLoggedIn ? (
              <button
                type="button"
                onClick={handleSignOut}
                className="whitespace-nowrap rounded-full bg-slate-900 px-5 py-2.5 text-[14px] font-semibold text-white shadow-lg transition hover:bg-red-500"
              >
                Sign out
              </button>
            ) : (
              <Link
                href="/register"
                className="flex items-center gap-2 whitespace-nowrap rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-2.5 text-[14px] font-semibold text-white shadow-lg transition hover:scale-[1.02]"
              >
                Apply Now
                <IconArrowRight size={17} stroke={2} />
              </Link>
            )}
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="ml-auto rounded-lg p-2 text-slate-800 transition hover:bg-slate-100 lg:hidden"
            aria-label="Open menu"
          >
            <IconMenu2 size={28} stroke={2} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm"
            />

            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed right-0 top-0 z-[70] flex h-screen w-[min(360px,90vw)] flex-col bg-white shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5">
                <Link
                  href="/"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-2.5"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-sm font-black text-white">
                    CT
                  </div>

                  <div className="leading-none">
                    <h2 className="text-lg font-black text-slate-900">
                      Career Tech
                    </h2>

                    <p className="mt-1 text-[11px] text-slate-500">
                      Global LLC
                    </p>
                  </div>
                </Link>

                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg p-2 text-slate-700 transition hover:bg-slate-100"
                  aria-label="Close menu"
                >
                  <IconX size={27} stroke={2} />
                </button>
              </div>

              <nav className="flex flex-1 flex-col gap-1 overflow-y-auto p-5">
                <Link
                  href="/"
                  onClick={() => setMobileOpen(false)}
                  className={mobileLink}
                >
                  Home
                </Link>

                <Link
                  href="/programs"
                  onClick={() => setMobileOpen(false)}
                  className={mobileLink}
                >
                  Programs
                </Link>

                <Link
                  href="/career-services"
                  onClick={() => setMobileOpen(false)}
                  className={mobileLink}
                >
                  Career Services
                </Link>

                <Link
                  href="/open-opportunities"
                  onClick={() => setMobileOpen(false)}
                  className={mobileLink}
                >
                  Open Opportunities
                </Link>

                {isLoggedIn && (
                  <Link
                    href="/dashboard"
                    onClick={() => setMobileOpen(false)}
                    className={mobileLink}
                  >
                    Dashboard
                  </Link>
                )}

                <Link
                  href="/about"
                  onClick={() => setMobileOpen(false)}
                  className={mobileLink}
                >
                  About
                </Link>

                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className={mobileLink}
                >
                  Contact
                </Link>
              </nav>

              <div className="border-t border-slate-200 p-5">
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="mb-3 flex w-full items-center justify-center rounded-xl border border-cyan-500 px-5 py-3.5 font-semibold text-cyan-600 transition hover:bg-cyan-50"
                >
                  Book Consultation
                </Link>

                <Link
                  href="/auth/sign-in"
                  onClick={() => setMobileOpen(false)}
                  className="mb-3 flex w-full items-center justify-center rounded-xl border border-purple-500 px-5 py-3.5 font-semibold text-purple-600 transition hover:bg-purple-50"
                >
                  Admin Login
                </Link>

                {isLoggedIn ? (
                  <button
                    type="button"
                    onClick={handleSignOut}
                    className="flex w-full items-center justify-center rounded-xl bg-slate-900 px-5 py-3.5 font-bold text-white transition hover:bg-red-500"
                  >
                    Sign out
                  </button>
                ) : (
                  <Link
                    href="/register"
                    onClick={() => setMobileOpen(false)}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3.5 font-bold text-white shadow-lg"
                  >
                    Apply Now
                    <IconArrowRight size={18} stroke={2} />
                  </Link>
                )}
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}