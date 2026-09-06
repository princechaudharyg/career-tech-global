import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function POST(request: NextRequest) {
  let body: Record<string, unknown>;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 }
    );
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const phone = typeof body.phone === "string" ? body.phone.trim() : "";
  const program = typeof body.program === "string" ? body.program.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 }
    );
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  const supabase = await createClient();

  const { error: insertError } = await supabase.from("contact_messages").insert({
    name,
    email,
    phone: phone || null,
    program: program || null,
    message,
  });

  if (insertError) {
    return NextResponse.json(
      { error: "Could not send your message. Please try again." },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true }, { status: 201 });
}