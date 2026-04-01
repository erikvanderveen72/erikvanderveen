import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export const dynamic = 'force-dynamic';

const levelLabels: Record<string, string> = {
  starter: 'Starter',
  explorer: 'Explorer',
  adopter: 'Adopter',
  leader: 'Leader',
};

export async function POST(request: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID || '';

  try {
    const { email, naam, organisatie, score, level } = await request.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Ongeldig e-mailadres' }, { status: 400 });
    }

    // Add contact to Resend audience with AI scan tag
    await resend.contacts.create({
      email,
      firstName: naam || undefined,
      audienceId: AUDIENCE_ID,
    });

    const levelLabel = levelLabels[level] || level;

    // Send results email
    await resend.emails.send({
      from: 'Erik van der Veen <nieuwsbrief@erikvanderveen.nl>',
      to: email,
      subject: `Jullie AI Readiness Score: ${levelLabel} (${score}/32)`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
          <div style="text-align: center; margin-bottom: 32px;">
            <div style="display: inline-block; background: #7c3aed; width: 48px; height: 48px; border-radius: 50%; line-height: 48px; color: white; font-weight: bold; font-size: 18px;">AI</div>
          </div>
          <h1 style="color: #1c1917; font-size: 24px; margin-bottom: 16px;">
            ${naam ? `Hoi ${naam}, j` : 'J'}ullie AI Readiness resultaat
          </h1>
          <div style="background: #faf5ff; border-radius: 12px; padding: 24px; text-align: center; margin-bottom: 24px;">
            <p style="color: #7c3aed; font-size: 14px; text-transform: uppercase; letter-spacing: 2px; margin: 0 0 8px 0;">Niveau</p>
            <p style="color: #7c3aed; font-size: 32px; font-weight: 800; margin: 0 0 8px 0;">${levelLabel}</p>
            <p style="color: #57534e; margin: 0;">Score: ${score}/32${organisatie ? ` · ${organisatie}` : ''}</p>
          </div>
          <p style="color: #57534e; font-size: 16px; line-height: 1.6;">
            Bedankt voor het invullen van de AI Readiness Scan. Op basis van jullie antwoorden vallen jullie in de categorie <strong>${levelLabel}</strong>.
          </p>
          <p style="color: #57534e; font-size: 16px; line-height: 1.6;">
            Wil je weten hoe jullie team concrete stappen kan zetten met AI? Ik denk graag vrijblijvend mee in een kort telefoongesprek.
          </p>
          <div style="text-align: center; margin: 32px 0;">
            <a href="https://erikvanderveen.nl/contact" style="display: inline-block; background: #7c3aed; color: white; padding: 14px 32px; border-radius: 12px; text-decoration: none; font-weight: 600;">
              Plan een vrijblijvend gesprek
            </a>
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

    // Send notification to Erik
    await resend.emails.send({
      from: 'AI Scan <nieuwsbrief@erikvanderveen.nl>',
      to: 'erik@erikvanderveen.nl',
      subject: `Nieuwe AI Scan: ${levelLabel} (${score}/32)${organisatie ? ` - ${organisatie}` : ''}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; padding: 20px;">
          <h2>Nieuwe AI Readiness Scan ingevuld</h2>
          <ul>
            <li><strong>Naam:</strong> ${naam || 'Niet ingevuld'}</li>
            <li><strong>E-mail:</strong> ${email}</li>
            <li><strong>Organisatie:</strong> ${organisatie || 'Niet ingevuld'}</li>
            <li><strong>Score:</strong> ${score}/32</li>
            <li><strong>Niveau:</strong> ${levelLabel}</li>
          </ul>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('AI Scan error:', error);
    return NextResponse.json(
      { error: 'Er ging iets mis. Probeer het later opnieuw.' },
      { status: 500 }
    );
  }
}
