import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID || '';
  try {
    const { email, firstName } = await request.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Ongeldig e-mailadres' },
        { status: 400 }
      );
    }

    // Add contact to Resend audience
    await resend.contacts.create({
      email,
      firstName: firstName || undefined,
      audienceId: AUDIENCE_ID,
    });

    // Send welcome email
    await resend.emails.send({
      from: 'Erik van der Veen <nieuwsbrief@erikvanderveen.nl>',
      to: email,
      subject: 'Welkom bij de AI Nieuwsbrief van Erik van der Veen',
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
          <div style="text-align: center; margin-bottom: 32px;">
            <div style="display: inline-block; background: #7c3aed; width: 48px; height: 48px; border-radius: 50%; line-height: 48px; color: white; font-weight: bold; font-size: 18px;">AI</div>
          </div>
          <h1 style="color: #1c1917; font-size: 24px; margin-bottom: 16px;">Welkom${firstName ? `, ${firstName}` : ''}!</h1>
          <p style="color: #57534e; font-size: 16px; line-height: 1.6;">
            Leuk dat je je hebt aangemeld voor mijn AI-nieuwsbrief. Elke twee weken deel ik een praktische AI-tip,
            een observatie uit mijn trainingen, en een handige link.
          </p>
          <p style="color: #57534e; font-size: 16px; line-height: 1.6;">
            Geen spam, geen verkooppraatjes. Gewoon bruikbare inzichten die je direct kunt toepassen.
          </p>
          <div style="margin: 32px 0; padding: 24px; background: #faf5ff; border-radius: 12px;">
            <p style="color: #7c3aed; font-weight: 600; margin: 0 0 8px 0;">In de tussentijd:</p>
            <p style="color: #57534e; margin: 0;">
              Bekijk mijn <a href="https://erikvanderveen.nl/blog" style="color: #7c3aed;">blogtips over AI</a>
              of download de gratis <a href="https://erikvanderveen.nl/downloads" style="color: #7c3aed;">cheatsheets</a>.
            </p>
          </div>
          <p style="color: #57534e; font-size: 16px; line-height: 1.6;">
            Tot snel,<br />
            <strong>Erik van der Veen</strong><br />
            <span style="color: #a8a29e;">AI Trainer & Consultant</span>
          </p>
          <hr style="border: none; border-top: 1px solid #e7e5e4; margin: 32px 0;" />
          <p style="color: #a8a29e; font-size: 12px; text-align: center;">
            <a href="https://erikvanderveen.nl" style="color: #a8a29e;">erikvanderveen.nl</a> ·
            <a href="https://linkedin.com/in/erikvanderveen" style="color: #a8a29e;">LinkedIn</a>
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Newsletter signup error:', error);
    return NextResponse.json(
      { error: 'Er ging iets mis. Probeer het later opnieuw.' },
      { status: 500 }
    );
  }
}
