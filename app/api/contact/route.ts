import { NextResponse } from "next/server";
import { Resend } from "resend";
const requests = new Map<
  string,
  {
    count: number;
    firstRequest: number;
  }
>();
function escapeHtml(text: string) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

const MAX_REQUESTS = 5;
const WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const forwardedFor = req.headers.get("x-forwarded-for");
    const ip = forwardedFor?.split(",")[0]?.trim() ?? "unknown";

    const now = Date.now();

    const existing = requests.get(ip);

    if (!existing) {
      requests.set(ip, {
        count: 1,
        firstRequest: now,
      });
    } else {
      if (now - existing.firstRequest > WINDOW_MS) {
        requests.set(ip, {
          count: 1,
          firstRequest: now,
        });
      } else {
        if (existing.count >= MAX_REQUESTS) {
          return NextResponse.json(
            {
              message: "Too many requests. Please try again in 10 minutes.",
            },
            {
              status: 429,
            },
          );
        }

        existing.count++;
      }
    }
    const body = await req.json();

    const { name, email, subject, message } = body;
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeSubject = escapeHtml(subject);
    const safeMessage = escapeHtml(message);

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { message: "All fields are required." },
        { status: 400 },
      );
    }

    const { error } = await resend.emails.send({
      from: "Bits&Bytes Website <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL!,
      subject: `[Contact Form] ${subject}`,
      replyTo: email,

      html: `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8" />
</head>

<body style="margin:0;padding:0;background:#0f172a;font-family:Arial,sans-serif;">

<table width="100%" cellpadding="0" cellspacing="0">
<tr>
<td align="center" style="padding:40px 20px;">

<table
  width="650"
  cellpadding="0"
  cellspacing="0"
  style="
    background:#081225;
    border:1px solid #164e63;
    border-radius:18px;
    overflow:hidden;
  "
>

<tr>
<td
  align="center"
  style="
    padding:35px;
    background:linear-gradient(135deg,#2563eb,#06b6d4);
  "
>

<h1
  style="
    margin:0;
    color:white;
    font-size:34px;
  "
>
Bits&Bytes Noida
</h1>

<p
  style="
    color:#dbeafe;
    margin-top:10px;
    font-size:16px;
  "
>
New Contact Form Submission
</p>

</td>
</tr>

<tr>
<td style="padding:35px;">

<table width="100%" cellpadding="12">

<tr>
<td
  style="
    color:#67e8f9;
    font-weight:bold;
    width:120px;
  "
>
Name
</td>

<td style="color:white;">
${safeName}
</td>
</tr>

<tr>
<td
  style="
    color:#67e8f9;
    font-weight:bold;
  "
>
Email
</td>

<td style="color:white;">
${safeEmail}
</td>
</tr>

<tr>
<td
  style="
    color:#67e8f9;
    font-weight:bold;
  "
>
Subject
</td>

<td style="color:white;">
${safeSubject}
</td>
</tr>

</table>

<div
  style="
    margin-top:30px;
    padding:22px;
    border-radius:12px;
    background:#0f172a;
    border:1px solid #164e63;
  "
>

<p
  style="
    color:#67e8f9;
    font-weight:bold;
    margin-top:0;
  "
>
Message
</p>

<p
  style="
    color:#e5e7eb;
    line-height:1.8;
    white-space:pre-line;
  "
>
${safeMessage}
</p>

</div>

</td>
</tr>

<tr>
<td
  align="center"
  style="
    padding:25px;
    color:#94a3b8;
    font-size:13px;
    border-top:1px solid #164e63;
  "
>

This email was generated automatically from the
Bits&Bytes website contact form.

</td>
</tr>

</table>

</td>
</tr>
</table>

</body>
</html>
`,
    });

    if (error) {
      console.error(error);

      return NextResponse.json(
        { message: "Failed to send email." },
        { status: 500 },
      );
    }

    return NextResponse.json({
      message: "Email sent successfully.",
    });
  } catch (err) {
    console.error(err);

    return NextResponse.json(
      { message: "Internal Server Error." },
      { status: 500 },
    );
  }
}
