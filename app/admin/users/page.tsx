import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

export default async function AdminUsersPage() {
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

  if (profile?.role !== "admin") {
    redirect("/dashboard");
  }

  const { data: users } = await supabase
    .from("profiles")
    .select("id, full_name, role")
    .order("created_at", { ascending: false });

  return (
    <main className="min-h-screen bg-slate-950 px-4 pb-16 pt-48 text-white sm:px-6 sm:pt-52 lg:px-8">
      <section className="mx-auto w-full max-w-6xl">
        <div className="mb-10">
          <Link
            href="/admin"
            className="text-sm font-semibold text-cyan-400 hover:underline"
          >
            â† Back to Admin
          </Link>

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Career Tech Global
          </p>

          <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
            User Management
          </h1>

          <p className="mt-3 text-sm text-slate-400 sm:text-base">
            View and manage all users.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-slate-700 bg-slate-900">
          <table className="min-w-full text-left text-sm">
            <thead className="border-b border-slate-700 bg-slate-800">
              <tr>
                <th className="px-6 py-4 font-semibold text-white">Name</th>
                <th className="px-6 py-4 font-semibold text-white">Role</th>
                <th className="px-6 py-4 font-semibold text-white">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {users?.map((u) => (
                <tr key={u.id} className="hover:bg-slate-800/50">
                  <td className="px-6 py-4 text-slate-200">
                    {u.full_name || "â€”"}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                        u.role === "admin"
                          ? "bg-purple-400/10 text-purple-400"
                          : "bg-slate-400/10 text-slate-400"
                      }`}
                    >
                      {u.role}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    {u.role !== "admin" ? (
                      <form action="/admin/users/make-admin" method="post">
                        <input type="hidden" name="userId" value={u.id} />
                        <button
                          type="submit"
                          className="rounded-lg bg-purple-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-purple-300"
                        >
                          Make Admin
                        </button>
                      </form>
                    ) : (
                      <span className="text-sm text-slate-500">
                        Already admin
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}

