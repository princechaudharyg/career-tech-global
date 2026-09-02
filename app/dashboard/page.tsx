import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  const supabase = await createClient();

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error || !user) {
    redirect("/auth/sign-in");
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("full_name, role")
    .eq("id", user.id)
    .single();

  const profileStatus = profileError ? `Profile error: ${profileError.message}` : `Profile loaded: ${profile ? "yes" : "no"}`;

  const profileStatus = profileError ? `Profile error: ${profileError.message}` : `Profile loaded: ${profile ? "yes" : "no"}`;

  const name = profile?.full_name?.trim() || "User";
  const role = profile?.role || "user";

  return (
    <main className="min-h-screen bg-slate-950 px-4 pb-16 pt-16 text-white sm:px-6 lg:px-8">
      <section className="mx-auto w-full max-w-6xl">
        <div className="mb-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Career Tech Global
          </p>

          <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
            Welcome, {name}! <span aria-hidden="true">👋</span>
          </h1>

          <p className="mt-3 break-all text-sm text-slate-400 sm:text-base">
            You are signed in as {user.email}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Link
            href="/open-opportunities"
            className="group min-h-[190px] rounded-2xl border border-slate-700 bg-slate-900 p-7 transition duration-200 hover:-translate-y-1 hover:border-cyan-400 hover:bg-slate-800"
          >
            <div className="flex h-full flex-col justify-between">
              <div>
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10 text-2xl">
                  🌍
                </div>

                <h2 className="text-xl font-bold text-white sm:text-2xl">
                  Explore opportunities
                </h2>

                <p className="mt-3 max-w-md text-sm leading-6 text-slate-400 sm:text-base">
                  Browse global tech jobs, internships, and career programs.
                </p>
              </div>

              <span className="mt-6 text-sm font-semibold text-cyan-400">
                View opportunities →
              </span>
            </div>
          </Link>

          <div className="min-h-[190px] rounded-2xl border border-slate-700 bg-slate-900 p-7">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-400/10 text-2xl">
              ✓
            </div>

            <h2 className="text-xl font-bold text-white sm:text-2xl">
              Account status
            </h2>

            <div className="mt-4 space-y-2 text-sm text-slate-400 sm:text-base">
              <p>
                Role:{" "}
                <span className="font-medium capitalize text-slate-200">
                  {role}
                </span>
              </p>

              <p className="text-emerald-400">
                Profile connected to Supabase
              </p>
            </div>
          </div>
        </div>

        <form action="/auth/sign-out" method="post" className="mt-8 flex justify-end">
          <button
            type="submit"
            className="rounded-lg border border-red-400/50 px-5 py-2.5 text-sm font-semibold text-red-300 transition hover:bg-red-500 hover:text-white"
          >
            Sign out
          </button>
        </form>
      </section>
    </main>
  );
}




