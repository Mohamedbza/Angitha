import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  otherSubject?: string;
  message: string;
}

// Helper function to get subject display value
function getSubjectDisplayValue(subjectKey: string): string {
  const subjectMap: { [key: string]: string } = {
    'newcomerServices': 'Newcomer & Refugee Services',
    'studentServices': 'Student Services & Information',
    'employmentServices': 'Employment & Integration Services',
    'guidanceServices': 'Guidance & Orientation Services',
    'futurePlanning': 'Future Planning & Development',
    'other': 'Other'
  };
  return subjectMap[subjectKey] || subjectKey;
}

export async function POST(request: NextRequest) {
  console.log('🔍 Contact API route called');
  try {
    const body: ContactFormData = await request.json();
    console.log('📝 Form data received:', body);
    const { name, email, phone, subject, otherSubject, message } = body;

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Create transporter
    console.log('📧 Creating email transporter...');
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email to business owner
    const mailOptions = {
      from: process.env.SMTP_FROM,
      to: process.env.CONTACT_EMAIL,
      subject: `Nouvelle demande de contact de ${name} - MB Group Canada`,
      html: `
        <!DOCTYPE html>
        <html lang="fr">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Nouvelle soumission de formulaire de contact</title>
          <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; background-color: #f8f9fa; }
            .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); }
            .header { background: linear-gradient(135deg, #961d1f 0%, #7a1619 100%); color: white; padding: 30px 20px; text-align: center; }
            .header h1 { font-size: 24px; font-weight: bold; margin-bottom: 5px; }
            .header p { font-size: 14px; opacity: 0.9; }
            .content { padding: 30px 20px; }
            .client-info { background-color: #f8f9fa; border-radius: 8px; padding: 20px; margin-bottom: 25px; border-left: 4px solid #961d1f; }
            .info-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 15px; margin-bottom: 25px; }
            .info-item { background-color: #ffffff; border: 1px solid #e9ecef; border-radius: 6px; padding: 15px; }
            .info-label { font-weight: 600; color: #495057; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 5px; }
            .info-value { font-size: 16px; color: #212529; }
            .message-section { background-color: #f8f9fa; border-radius: 8px; padding: 20px; margin-top: 20px; }
            .message-content { background-color: white; padding: 15px; border-radius: 6px; border-left: 3px solid #961d1f; font-style: italic; }
            .footer { background-color: #2d2e2e; color: white; padding: 20px; text-align: center; font-size: 12px; }
            .urgent { background-color: #fff3cd; border-color: #ffeaa7; color: #856404; padding: 10px; border-radius: 6px; margin-bottom: 20px; }
            .divider { height: 1px; background: linear-gradient(to right, transparent, #dee2e6, transparent); margin: 20px 0; }
            .form-type-badge { background-color: #961d1f; color: white; padding: 5px 15px; border-radius: 20px; font-size: 12px; font-weight: bold; text-transform: uppercase; }
            @media (max-width: 600px) {
              .container { margin: 10px; }
              .content { padding: 20px 15px; }
              .info-grid { grid-template-columns: 1fr; }
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Nouvelle demande de contact</h1>
              <p>MB Group Canada - Formulaire de contact du site web</p>
            </div>
            
            <div class="content">
              <div class="urgent">
                <strong>Nouvelle demande:</strong> Une personne s'intéresse à vos services et a besoin d'une réponse dans les 24 heures.
              </div>
              
                             <div style="text-align: center; margin-bottom: 20px;">
                 <span class="form-type-badge">${getSubjectDisplayValue(subject).toUpperCase()}</span>
               </div>
              
              <div class="client-info">
                <h2 style="color: #961d1f; margin-bottom: 15px; font-size: 18px;">Informations du client</h2>
                <div class="info-grid">
                  <div class="info-item">
                    <div class="info-label">Nom complet</div>
                    <div class="info-value"><strong>${name}</strong></div>
                  </div>
                  <div class="info-item">
                    <div class="info-label">Adresse email</div>
                    <div class="info-value"><a href="mailto:${email}" style="color: #961d1f; text-decoration: none;">${email}</a></div>
                  </div>
                  <div class="info-item">
                    <div class="info-label">Numéro de téléphone</div>
                    <div class="info-value"><a href="tel:${phone}" style="color: #961d1f; text-decoration: none;">${phone}</a></div>
                  </div>
                                     <div class="info-item">
                     <div class="info-label">Sujet</div>
                     <div class="info-value"><span style="background-color: #961d1f; color: white; padding: 3px 8px; border-radius: 12px; font-size: 12px;">${getSubjectDisplayValue(subject)}</span></div>
                   </div>
                  ${otherSubject ? `
                  <div class="info-item">
                    <div class="info-label">Autre sujet</div>
                    <div class="info-value">${otherSubject}</div>
                  </div>
                  ` : ''}
                </div>
              </div>
              
              <div class="divider"></div>
              
              <div class="message-section">
                <h3 style="color: #2d2e2e; margin-bottom: 15px; font-size: 16px;">Message du client</h3>
                <div class="message-content">
                  "${message}"
                </div>
              </div>
              
              <div class="divider"></div>
              
              <div style="text-align: center; margin-top: 30px;">
                <div style="display: flex; justify-content: space-between; align-items: center; width: 100%; max-width: 500px; margin: 0 auto; padding: 0 20px;">
                    <a href="mailto:${email}" style="background-color: #4299e1; color: white; margin-right: 15px; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: 500; display: inline-block; text-align: center;">Répondre par email</a>
                    <a href="tel:${phone}" style="background-color: #48bb78; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: 500; display: inline-block; text-align: center;">Appeler maintenant</a>
                </div>
              </div>
            </div>
            
            <div class="footer">
              <p><strong>MB Group Canada</strong></p>
              <p>contact@mbgroupcanada.com</p>
              <p style="margin-top: 10px; opacity: 0.8;">Cet email a été généré automatiquement depuis le formulaire de contact de votre site web.</p>
            </div>
          </div>
        </body>
        </html>
      `,
      text: `
Nouvelle demande de contact - MB Group Canada
==============================

INFORMATIONS CLIENT:
• Nom: ${name}
• Email: ${email}
• Téléphone: ${phone}
• Sujet: ${getSubjectDisplayValue(subject)}
${otherSubject ? `• Autre sujet: ${otherSubject}` : ''}

MESSAGE:
${message}

PROCHAINES ÉTAPES:
• Répondre dans les 24 heures pour une meilleure conversion
• Email: ${email}
• Téléphone: ${phone}

---
MB Group Canada
      `,
    };

    // Send business notification email
    console.log('📤 Sending business notification email...');
    await transporter.sendMail(mailOptions);
    console.log('✅ Business notification email sent');

    return NextResponse.json(
      { message: 'Email envoyé avec succès!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Échec de l\'envoi de l\'email. Veuillez réessayer plus tard.' },
      { status: 500 }
    );
  }
}
