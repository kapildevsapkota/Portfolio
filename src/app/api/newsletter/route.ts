import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required." }, { status: 400 });
    }

    // Notify you about the new subscriber
    await resend.emails.send({
      from: "Newsletter <onboarding@resend.dev>",
      to: "kapildevsapkota98@gmail.com",
      subject: "New Newsletter Subscriber!",
      html: `
        <h2>New Subscriber 🎉</h2>
        <p><strong>${email}</strong> just subscribed to your newsletter.</p>
      `,
    });

    // Send a welcome email to the subscriber
    await resend.emails.send({
      from: "Kapil Dev Sapkota <onboarding@resend.dev>",
      to: email,
      subject: "Thanks for subscribing!",
      html: `
        <h2>Welcome aboard! 👋</h2>
        <p>Thanks for subscribing to my newsletter. I'll keep you updated with my latest projects and articles.</p>
        <p>— Kapil Dev Sapkota</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to subscribe." }, { status: 500 });
  }
}