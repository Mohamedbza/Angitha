import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const request = formData.get('request') as string;
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const details = formData.get('details') as string;
    const file = formData.get('file') as File | null;

    // Validate required fields
    if (!request || !name || !email || !phone || !details) {
      return NextResponse.json(
        { error: 'Tous les champs sont obligatoires' },
        { status: 400 }
      );
    }

    // Email configuration for Gmail SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    // Prepare email content and attachments
    const mailOptions: any = {
      from: process.env.SMTP_FROM,
      to: process.env.CONTACT_EMAIL,
      subject: `Nouvelle demande de projet de ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background-color: #e22d2e;
                color: white;
                padding: 20px;
                text-align: center;
                border-radius: 8px 8px 0 0;
              }
              .content {
                padding: 20px;
                background: #f9f9f9;
                border: 1px solid #ddd;
                border-radius: 0 0 8px 8px;
              }
              .field {
                margin-bottom: 15px;
                padding: 10px;
                background: white;
                border-radius: 4px;
              }
              .label {
                font-weight: bold;
                color: #e22d2e;
                margin-bottom: 5px;
                display: block;
              }
              .value {
                color: #444;
              }
              .footer {
                text-align: center;
                margin-top: 20px;
                font-size: 0.8em;
                color: #666;
              }
            </style>
          </head>
          <body>
            <div class="header">
              <h1 style="margin: 0;">Nouvelle Demande de Projet</h1>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Type de demande</div>
                <div class="value">${request}</div>
              </div>
              <div class="field">
                <div class="label">Nom</div>
                <div class="value">${name}</div>
              </div>
              <div class="field">
                <div class="label">Email</div>
                <div class="value">${email}</div>
              </div>
              <div class="field">
                <div class="label">Téléphone</div>
                <div class="value">${phone}</div>
              </div>
              <div class="field">
                <div class="label">Détails</div>
                <div class="value">${details}</div>
              </div>
              ${file ? `
                <div class="field">
                  <div class="label">Fichier joint</div>
                  <div class="value">✅ Un fichier a été joint à cette demande: ${file.name}</div>
                </div>
              ` : ''}
            </div>
            <div class="footer">
              <p>Cet email a été envoyé depuis le formulaire de contact de projets MB Group Canada.</p>
            </div>
          </body>
        </html>
      `,
    };

    // Add attachment if file is present
    if (file && file.size > 0) {
      // Convert File to Buffer
      const buffer = Buffer.from(await file.arrayBuffer());
      
      mailOptions.attachments = [{
        filename: file.name,
        content: buffer
      }];
    }

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Votre message a été envoyé avec succès' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Une erreur est survenue lors de l\'envoi du message' },
      { status: 500 }
    );
  }
}
