import { NextRequest, NextResponse } from "next/server";

const requests = new Map<
  string,
  {
    count: number;
    firstRequest: number;
  }
>();

const MAX_REQUESTS = 5;
const WINDOW_MS = 10 * 60 * 1000; // 10 minutes

function escapeHtml(text: string) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(req: NextRequest) {
  try {
    // --------------------------
    // Rate Limiting
    // --------------------------

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
              message:
                "Too many requests. Please try again in 10 minutes.",
            },
            {
              status: 429,
            }
          );
        }

        existing.count++;
      }
    }

    // --------------------------
    // Parse Body
    // --------------------------

    const { name, email, subject, message } = await req.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        {
          message: "All fields are required.",
        },
        {
          status: 400,
        }
      );
    }

    // --------------------------
    // Sanitize
    // --------------------------

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeSubject = escapeHtml(subject);
    const safeMessage = escapeHtml(message);

    // --------------------------
    // Discord Webhook
    // --------------------------

    const discordResponse = await fetch(
      process.env.DISCORD_WEBHOOK_URL!,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: "Bits&Bytes Noida Contact Form Inputs",
          avatar_url: "https://noida.gobitsnbytes.org/logo.png",

          embeds: [
            {
              title: "📨 New Contact Form Submission",

              description:
                "A new message has been submitted through the website.",

              color: 0x06b6d4,

              fields: [
                {
                  name: "👤 Name",
                  value: safeName,
                  inline: true,
                },
                {
                  name: "📧 Email",
                  value: safeEmail,
                  inline: true,
                },
                {
                  name: "📝 Subject",
                  value: safeSubject,
                  inline: false,
                },
                {
                  name: "💬 Message",
                  value: safeMessage,
                  inline: false,
                },
              ],

              footer: {
                text: "Bits&Bytes Noida Website",
              },

              timestamp: new Date().toISOString(),
            },
          ],
        }),
      }
    );

    if (!discordResponse.ok) {
      throw new Error("Failed to send Discord notification.");
    }

    return NextResponse.json({
      success: true,
      message: "Message sent successfully!",
    });
  } catch (error) {
    console.error("Contact API Error:", error);

    return NextResponse.json(
      {
        message: "Failed to send message.",
      },
      {
        status: 500,
      }
    );
  }
}