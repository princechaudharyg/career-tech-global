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
      { error: "You must be signed in to save jobs." },
      { status: 401 }
    );
  }

  const { error: insertError } = await supabase.from("saved_jobs").insert({
    user_id: user.id,
    opportunity_id: opportunityId,
  });

  if (insertError && insertError.code !== "23505") {
    return NextResponse.json(
      { error: "Could not save this job. Please try again." },
      { status: 500 }
    );
  }

  return NextResponse.json({ saved: true });
}

export async function DELETE(
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
      { error: "You must be signed in." },
      { status: 401 }
    );
  }

  const { error: deleteError } = await supabase
    .from("saved_jobs")
    .delete()
    .eq("user_id", user.id)
    .eq("opportunity_id", opportunityId);

  if (deleteError) {
    return NextResponse.json(
      { error: "Could not remove this job. Please try again." },
      { status: 500 }
    );
  }

  return NextResponse.json({ saved: false });
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
    return NextResponse.json({ saved: false });
  }

  const { data } = await supabase
    .from("saved_jobs")
    .select("id")
    .eq("user_id", user.id)
    .eq("opportunity_id", opportunityId)
    .maybeSingle();

  return NextResponse.json({ saved: Boolean(data) });
}
