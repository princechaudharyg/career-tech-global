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

  const title = formData.get("title");
  const organization = formData.get("organization");
  const location = formData.get("location");
  const opportunityType = formData.get("opportunityType");
  const description = formData.get("description");
  const applyUrl = formData.get("applyUrl");
  const deadline = formData.get("deadline");
  const isPublished = formData.get("isPublished");

  if (
    typeof title !== "string" ||
    title.trim() === "" ||
    typeof organization !== "string" ||
    organization.trim() === "" ||
    typeof opportunityType !== "string" ||
    opportunityType.trim() === ""
  ) {
    return NextResponse.redirect(new URL("/admin/opportunities", request.url), 303);
  }

  const { error: insertError } = await supabase.from("opportunities").insert({
    title: title.trim(),
    organization: organization.trim(),
    location: typeof location === "string" ? location.trim() : null,
    opportunity_type: opportunityType.trim(),
    description: typeof description === "string" ? description.trim() : null,
    apply_url: typeof applyUrl === "string" && applyUrl.trim() !== "" ? applyUrl.trim() : null,
    deadline: typeof deadline === "string" && deadline.trim() !== "" ? deadline : null,
    is_published: isPublished === "on",
  });

  if (insertError) {
    return NextResponse.redirect(new URL("/admin/opportunities", request.url), 303);
  }

  return NextResponse.redirect(new URL("/admin/opportunities", request.url), 303);
}