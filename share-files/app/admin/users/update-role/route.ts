import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

const ALLOWED_ROLES = ["admin", "user"] as const;

export async function POST(request: NextRequest) {
  const supabase = await createClient();

  const {
    data: { user: currentUser },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !currentUser) {
    return NextResponse.redirect(
      new URL("/auth/sign-in", request.url),
      303
    );
  }

  const { data: currentProfile, error: currentProfileError } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", currentUser.id)
    .single();

  if (currentProfileError || currentProfile?.role !== "admin") {
    return NextResponse.redirect(new URL("/dashboard", request.url), 303);
  }

  const formData = await request.formData();
  const userId = formData.get("userId");
  const requestedRole = formData.get("role");

  if (
    typeof userId !== "string" ||
    typeof requestedRole !== "string" ||
    !ALLOWED_ROLES.includes(requestedRole as (typeof ALLOWED_ROLES)[number])
  ) {
    return NextResponse.redirect(new URL("/admin/users", request.url), 303);
  }

  if (userId === currentUser.id && requestedRole === "user") {
    return NextResponse.redirect(new URL("/admin/users", request.url), 303);
  }

  const { error: updateError } = await supabase
    .from("profiles")
    .update({ role: requestedRole })
    .eq("id", userId);

  if (updateError) {
    return NextResponse.redirect(new URL("/admin/users", request.url), 303);
  }

  return NextResponse.redirect(new URL("/admin/users", request.url), 303);
}