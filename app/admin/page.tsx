import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/auth/sign-in");
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", user.id)
    .single();

  const role = profile?.role ?? "user";

  if (role !== "admin") {
    redirect("/dashboard");
  }

  return (
    <main className="min-h-screen bg-slate-950 px-4 pb-16 pt-16 text-white sm:px-6 lg:px-8">
      <section className="mx-auto w-full max-w-6xl">
        <div className="mb-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Career Tech Global
          </p>

          <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
            Admin Dashboard
          </h1>

          <p className="mt-3 text-sm text-slate-400 sm:text-base">
            Manage users, roles, and platform settings.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-700 bg-slate-900 p-7">
          <h2 className="text-xl font-bold text-white sm:text-2xl">
            Admin-only content
          </h2>

          <p className="mt-3 text-sm text-slate-400 sm:text-base">
            This page is only visible to users with the admin role.
          </p>
        </div>
      </section>
    </main>
  );
}