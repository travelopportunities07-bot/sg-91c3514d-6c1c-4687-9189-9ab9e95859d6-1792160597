import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { email, productName, downloadToken, confirmationUrl } = req.body;

  if (!email || !productName || !downloadToken) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    // Configuration du transporteur email (utiliser un service comme SendGrid, Mailgun, ou SMTP)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD
      }
    });

    // Template email moderne et professionnel
    const mailOptions = {
      from: `"PowerLingua" <${process.env.SMTP_USER}>`,
      to: email,
      subject: `✅ Votre Guide "${productName}" est prêt !`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; background: #f4f4f4; margin: 0; padding: 0; }
            .container { max-width: 600px; margin: 0 auto; background: white; }
            .header { background: linear-gradient(135deg, #1a2332 0%, #2d3e50 100%); color: white; padding: 40px 20px; text-align: center; }
            .header h1 { margin: 0; font-size: 28px; }
            .content { padding: 40px 30px; }
            .success-badge { background: #10b981; color: white; padding: 12px 24px; border-radius: 50px; display: inline-block; font-weight: bold; margin-bottom: 20px; }
            .product-box { background: #f8fafc; border-left: 4px solid #d4af37; padding: 20px; margin: 20px 0; border-radius: 8px; }
            .product-name { font-size: 18px; font-weight: bold; color: #1a2332; margin-bottom: 10px; }
            .download-button { display: inline-block; background: linear-gradient(135deg, #d4af37 0%, #c9a532 100%); color: white; padding: 16px 40px; text-decoration: none; border-radius: 50px; font-weight: bold; margin: 30px 0; font-size: 18px; box-shadow: 0 4px 15px rgba(212, 175, 55, 0.3); }
            .download-button:hover { background: linear-gradient(135deg, #c9a532 0%, #b89530 100%); }
            .info-box { background: #eff6ff; border: 1px solid #bfdbfe; padding: 20px; border-radius: 8px; margin: 20px 0; }
            .footer { background: #1a2332; color: #94a3b8; padding: 30px 20px; text-align: center; font-size: 14px; }
            .footer a { color: #d4af37; text-decoration: none; }
            .icon { font-size: 48px; margin-bottom: 20px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <div class="icon">📚</div>
              <h1>Merci pour votre achat !</h1>
              <p style="margin: 10px 0 0 0; opacity: 0.9;">Votre guide est maintenant disponible</p>
            </div>
            
            <div class="content">
              <div class="success-badge">✅ Paiement confirmé</div>
              
              <h2 style="color: #1a2332; margin-top: 30px;">Bonjour,</h2>
              
              <p>Félicitations ! Votre achat a été validé avec succès. Vous pouvez maintenant télécharger votre guide :</p>
              
              <div class="product-box">
                <div class="product-name">📖 ${productName}</div>
                <p style="margin: 5px 0 0 0; color: #64748b;">Format PDF - Accès immédiat</p>
              </div>
              
              <div style="text-align: center;">
                <a href="${confirmationUrl}" class="download-button">
                  ⬇️ Télécharger mon guide maintenant
                </a>
              </div>
              
              <div class="info-box">
                <h3 style="margin-top: 0; color: #1e40af;">📌 Informations importantes :</h3>
                <ul style="margin: 10px 0; padding-left: 20px;">
                  <li>Votre lien de téléchargement est valide pendant <strong>1 an</strong></li>
                  <li>Vous pouvez télécharger le guide autant de fois que nécessaire</li>
                  <li>Conservez cet email pour accéder à votre guide à tout moment</li>
                  <li>Le fichier est au format PDF, lisible sur tous les appareils</li>
                </ul>
              </div>
              
              <p style="margin-top: 30px;">Si vous avez des questions, n'hésitez pas à nous contacter.</p>
              
              <p style="margin-top: 20px;">
                Cordialement,<br>
                <strong>L'équipe PowerLingua</strong>
              </p>
            </div>
            
            <div class="footer">
              <p style="margin: 0 0 10px 0;"><strong>PowerLingua</strong></p>
              <p style="margin: 5px 0;">Votre partenaire pour réussir vos projets d'études et de carrière à l'international</p>
              <p style="margin: 20px 0 0 0;">
                <a href="${process.env.NEXT_PUBLIC_SITE_URL}">Visitez notre site</a> |
                <a href="${process.env.NEXT_PUBLIC_SITE_URL}/contact">Contact</a>
              </p>
            </div>
          </div>
        </body>
        </html>
      `
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({ success: true, message: "Email sent successfully" });
  } catch (error: any) {
    console.error("Email error:", error);
    return res.status(500).json({ error: "Failed to send email", details: error.message });
  }
}