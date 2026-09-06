import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id: opportunityId } = await params;
  const supabase = await createClient();

  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    return NextResponse.json(
      { error: "You must be signed in to apply." },
      { status: 401 }
    );
  }

  const { data: opportunity, error: opportunityError } = await supabase
    .from("opportunities")
    .select("id, is_published")
    .eq("id", opportunityId)
    .single();

  if (opportunityError || !opportunity) {
    return NextResponse.json(
      { error: "Opportunity not found." },
      { status: 404 }
    );
  }

  let coverNote: string | null = null;
  try {
    const body = await request.json();
    coverNote =
      typeof body?.coverNote === "string" && body.coverNote.trim() !== ""
        ? body.coverNote.trim()
        : null;
  } catch {
    // No body sent — that's fine, cover note is optional.
  }

  const { data, error: insertError } = await supabase
    .from("applications")
    .insert({
      user_id: user.id,
      opportunity_id: opportunityId,
      cover_note: coverNote,
    })
    .select()
    .single();

  if (insertError) {
    if (insertError.code === "23505") {
      return NextResponse.json(
        { error: "You have already applied to this opportunity.", alreadyApplied: true },
        { status: 409 }
      );
    }

    return NextResponse.json(
      { error: "Could not submit application. Please try again." },
      { status: 500 }
    );
  }

  return NextResponse.json({ application: data }, { status: 201 });
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id: opportunityId } = await params;
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ applied: false });
  }

  const { data } = await supabase
    .from("applications")
    .select("id, status")
    .eq("user_id", user.id)
    .eq("opportunity_id", opportunityId)
    .maybeSingle();

  return NextResponse.json({
    applied: Boolean(data),
    status: data?.status ?? null,
  });
}