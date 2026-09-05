import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

const ALLOWED_STATUSES = [
  "pending",
  "reviewed",
  "shortlisted",
  "rejected",
  "hired",
] as const;

export async function POST(request: NextRequest) {
  const supabase = await createClient();

  const {
    data: { user: currentUser },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !currentUser) {
    return NextResponse.redirect(
      new URL("/auth/sign-in", request.url),
      303,
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
  const applicationId = formData.get("applicationId");
  const requestedStatus = formData.get("status");

  if (
    typeof applicationId !== "string" ||
    typeof requestedStatus !== "string" ||
    !ALLOWED_STATUSES.includes(
      requestedStatus as (typeof ALLOWED_STATUSES)[number],
    )
  ) {
    return NextResponse.redirect(
      new URL("/admin/applications", request.url),
      303,
    );
  }

  await supabase
    .from("applications")
    .update({ status: requestedStatus, updated_at: new Date().toISOString() })
    .eq("id", applicationId);

  return NextResponse.redirect(
    new URL("/admin/applications", request.url),
    303,
  );
}