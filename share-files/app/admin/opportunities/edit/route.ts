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
  const title = formData.get("title");
  const company = formData.get("company");
  const location = formData.get("location");
  const workMode = formData.get("workMode");
  const jobType = formData.get("jobType");
  const experienceLevel = formData.get("experienceLevel");
  const description = formData.get("description");
  const skills = formData.get("skills");
  const applyUrl = formData.get("applyUrl");
  const isPublished = formData.get("isPublished");

  if (
    typeof opportunityId !== "string" ||
    typeof title !== "string" ||
    title.trim() === "" ||
    typeof company !== "string" ||
    company.trim() === ""
  ) {
    return NextResponse.redirect(new URL("/admin/opportunities", request.url), 303);
  }

  const skillsArray =
    typeof skills === "string" && skills.trim() !== ""
      ? skills.split(",").map((s) => s.trim()).filter(Boolean)
      : [];

  const { error: updateError } = await supabase
    .from("opportunities")
    .update({
      title: title.trim(),
      company: company.trim(),
      location: typeof location === "string" && location.trim() !== "" ? location.trim() : null,
      work_mode: typeof workMode === "string" ? workMode.trim() : "Remote",
      job_type: typeof jobType === "string" ? jobType.trim() : "Full Time",
      experience_level: typeof experienceLevel === "string" ? experienceLevel.trim() : "Entry Level",
      description: typeof description === "string" && description.trim() !== "" ? description.trim() : null,
      skills: skillsArray.length > 0 ? skillsArray : null,
      apply_url: typeof applyUrl === "string" && applyUrl.trim() !== "" ? applyUrl.trim() : null,
      is_published: isPublished === "on",
      updated_at: new Date().toISOString(),
    })
    .eq("id", opportunityId);

  if (updateError) {
    return NextResponse.redirect(new URL("/admin/opportunities", request.url), 303);
  }

  return NextResponse.redirect(new URL("/admin/opportunities", request.url), 303);
}