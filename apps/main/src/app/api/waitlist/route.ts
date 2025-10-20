import { NextResponse } from "next/server";

const REMOTE_WAITLIST_ENDPOINT =
  process.env.WAITLIST_ENDPOINT ??
  "https://wit-frontend-web-974973921159.us-central1.run.app/api/waitlist";

export async function POST(request: Request) {
  try {
    const { email, goal } = await request.json();

    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "Valid email required" }, { status: 400 });
    }

    const body: Record<string, unknown> = { email };
    if (typeof goal === "string" && goal.trim().length > 0) {
      body.goal = goal.trim();
    }
    // Always tag source as 'wit' from the website
    body.source = "wit";

    const response = await fetch(REMOTE_WAITLIST_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      cache: "no-store",
    });

    const responseText = await response.text();

    if (!response.ok) {
      return NextResponse.json(
        {
          error: "Failed to save email",
          details: responseText,
        },
        { status: response.status }
      );
    }

    return new NextResponse(responseText, {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("[waitlist] proxy failed", error);
    return NextResponse.json({ error: "Unexpected error" }, { status: 500 });
  }
}
