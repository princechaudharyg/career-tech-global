import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

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
  const opportunityId = formData.get("opportunityId");

  if (typeof opportunityId !== "string") {
    return NextResponse.redirect(new URL("/admin/opportunities", request.url), 303);
  }

  const { error: deleteError } = await supabase
    .from("opportunities")
    .delete()
    .eq("id", opportunityId);

  if (deleteError) {
    return NextResponse.redirect(new URL("/admin/opportunities", request.url), 303);
  }

  return NextResponse.redirect(new URL("/admin/opportunities", request.url), 303);
}