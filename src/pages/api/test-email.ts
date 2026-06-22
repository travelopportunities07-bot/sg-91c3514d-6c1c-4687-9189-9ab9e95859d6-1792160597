import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const testEmail = req.query.email as string || "test@example.com";

  try {
    console.log("Configuration SMTP:");
    console.log("- Host:", process.env.SMTP_HOST);
    console.log("- Port:", process.env.SMTP_PORT);
    console.log("- User:", process.env.SMTP_USER);
    console.log("- Password configuré:", !!process.env.SMTP_PASSWORD);

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD
      }
    });

    // Vérifier la connexion
    await transporter.verify();
    console.log("✅ Connexion SMTP réussie");

    // Envoyer un email de test
    const mailOptions = {
      from: `"PowerLingua Test" <${process.env.SMTP_USER}>`,
      to: testEmail,
      subject: "✅ Test Email - PowerLingua",
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background: #f4f4f4;">
          <div style="max-width: 600px; margin: 0 auto; background: white; padding: 40px; border-radius: 10px;">
            <h1 style="color: #1a2332;">✅ Email de Test</h1>
            <p>Ceci est un email de test pour vérifier la configuration SMTP de PowerLingua.</p>
            <p><strong>Configuration actuelle :</strong></p>
            <ul>
              <li>Host: ${process.env.SMTP_HOST}</li>
              <li>Port: ${process.env.SMTP_PORT}</li>
              <li>User: ${process.env.SMTP_USER}</li>
            </ul>
            <p style="color: #10b981; font-weight: bold;">✅ Si vous recevez cet email, la configuration fonctionne correctement !</p>
          </div>
        </div>
      `
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("✅ Email envoyé:", info.messageId);

    return res.status(200).json({
      success: true,
      message: "Email de test envoyé avec succès",
      messageId: info.messageId,
      recipient: testEmail,
      config: {
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        user: process.env.SMTP_USER,
        passwordConfigured: !!process.env.SMTP_PASSWORD
      }
    });
  } catch (error: any) {
    console.error("❌ Erreur email test:", error);
    return res.status(500).json({
      success: false,
      error: error.message,
      config: {
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        user: process.env.SMTP_USER,
        passwordConfigured: !!process.env.SMTP_PASSWORD
      }
    });
  }
}