import { emptyInquiry, validateInquiry, type Inquiry } from "@/lib/inquiry";

/**
 * Trial-lesson inquiry endpoint (stub).
 * Validates the payload and logs it. Replace the TODO with your email
 * service, CRM or booking system.
 */
export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  const data: Inquiry = { ...emptyInquiry };
  if (body && typeof body === "object") {
    for (const key of Object.keys(emptyInquiry) as (keyof Inquiry)[]) {
      const v = (body as Record<string, unknown>)[key];
      if (typeof v === "string") data[key] = v.slice(0, 2000);
    }
  }

  const errors = validateInquiry(data);
  if (Object.keys(errors).length > 0) {
    return Response.json({ ok: false, errors }, { status: 422 });
  }

  // TODO: send to email / CRM. For now, log on the server.
  console.info("[inquiry] new trial lesson request", { ...data, receivedAt: new Date().toISOString() });

  return Response.json({ ok: true });
}
