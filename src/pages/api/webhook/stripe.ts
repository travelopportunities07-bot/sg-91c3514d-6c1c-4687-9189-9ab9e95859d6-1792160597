import type { NextApiRequest, NextApiResponse } from "next";
import { createClient } from "@supabase/supabase-js";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-12-18.acacia"
});

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const supabase = createClient(supabaseUrl, supabaseServiceKey);

// Mapping des produits avec leurs informations
const PRODUCT_MAPPING: Record<string, { name: string; pdfUrl: string }> = {
  "5kQ3cn2TdctkatdbZJ1sQ0o": {
    name: "Comment Étudier Gratuitement en Allemagne, Suisse, Autriche et Luxembourg",
    pdfUrl: "https://drive.google.com/file/d/1hIkNSknoH1ROUkLL2VpvTkKMzd7gcGDS/view?usp=drive_link"
  },
  "3cI7sDdxRfFw6cXgfZ1sQ0p": {
    name: "Comment Étudier Gratuitement aux USA, Australie, Canada et Royaume-Uni",
    pdfUrl: "https://drive.google.com/file/d/1G7OHqdPXL03l8lgVwLvhgJa2GQkFd2y-/view?usp=drive_link"
  },
  "6oU00bfFZ3WO7h15Bl1sQ0q": {
    name: "Comment Étudier Gratuitement en France, Belgique, Luxembourg, Suisse Romande et Canada",
    pdfUrl: "https://drive.google.com/file/d/1Mh5EoboSoQFfOhL3UhxHEwJnIcE0vFoY/view?usp=drive_link"
  },
  "price_guide_suisse": {
    name: "Voyage et Opportunités pour la Suisse",
    pdfUrl: "https://drive.google.com/uc?export=download&id=1cLNtOGlR92fv0NjG8U0ATyUc3wHZm5L6"
  },
  "price_guide_mines": {
    name: "Opportunités dans les Mines Australiennes",
    pdfUrl: "https://drive.google.com/uc?export=download&id=VOTRE_ID_MINES"
  },
  "price_passeport_africain": {
    name: "Passeport Africain - Immigration Stratégique",
    pdfUrl: "https://drive.google.com/uc?export=download&id=VOTRE_ID_PASSEPORT"
  },
  "price_guide_juriste": {
    name: "Guide Juriste Africain en Europe",
    pdfUrl: "https://drive.google.com/uc?export=download&id=VOTRE_ID_JURISTE"
  },
  "price_habitudes_financieres": {
    name: "Les 7 Habitudes Financières",
    pdfUrl: "https://drive.google.com/uc?export=download&id=VOTRE_ID_FINANCE"
  }
};

function generateDownloadToken(): string {
  return `dl_${Date.now()}_${Math.random().toString(36).substring(2, 15)}`;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const signature = req.headers["stripe-signature"];
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!signature || !webhookSecret) {
    return res.status(400).json({ error: "Missing signature or webhook secret" });
  }

  try {
    const event = stripe.webhooks.constructEvent(
      req.body,
      signature,
      webhookSecret
    );

    // Traiter uniquement les paiements réussis
    if (event.type === "checkout.session.completed") {
      const session = event.data.object as Stripe.Checkout.Session;

      // Récupérer les informations du paiement
      const customerEmail = session.customer_email || session.customer_details?.email;
      const paymentIntentId = session.payment_intent as string;
      const amountTotal = session.amount_total || 0;
      const currency = session.currency || "eur";
      
      // Identifier le produit acheté via metadata ou line_items
      let productId = "";
      let productInfo = null;

      // Extraire le payment link ID de l'URL ou metadata
      if (session.metadata?.product_id) {
        productId = session.metadata.product_id;
      } else {
        // Essayer d'identifier via l'URL du payment link
        const paymentLinkMatch = session.payment_link?.toString().match(/plink_([a-zA-Z0-9]+)/);
        if (paymentLinkMatch) {
          productId = paymentLinkMatch[1];
        }
      }

      // Trouver les infos du produit
      productInfo = Object.entries(PRODUCT_MAPPING).find(([key]) => 
        key === productId || session.payment_link?.includes(key)
      )?.[1];

      if (!productInfo) {
        console.error("Produit non trouvé pour:", productId, session.payment_link);
        return res.status(400).json({ error: "Product not found" });
      }

      if (!customerEmail) {
        console.error("Email client manquant");
        return res.status(400).json({ error: "Customer email missing" });
      }

      // Générer un token unique pour le téléchargement
      const downloadToken = generateDownloadToken();

      // Enregistrer l'achat dans Supabase
      const { data: purchase, error: dbError } = await supabase
        .from("purchases")
        .insert({
          email: customerEmail,
          product_id: productId,
          product_name: productInfo.name,
          stripe_payment_id: paymentIntentId,
          stripe_session_id: session.id,
          download_token: downloadToken,
          amount: amountTotal / 100,
          currency: currency,
          pdf_url: productInfo.pdfUrl
        })
        .select()
        .single();

      if (dbError) {
        console.error("Erreur DB:", dbError);
        return res.status(500).json({ error: "Database error" });
      }

      // Envoyer l'email de confirmation avec le lien de téléchargement
      const confirmationUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/shop/confirmation/${productId}?token=${downloadToken}`;
      
      await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/send-ebook-email`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: customerEmail,
          productName: productInfo.name,
          downloadToken: downloadToken,
          confirmationUrl: confirmationUrl
        })
      });

      console.log("Achat enregistré avec succès:", purchase.id);
      return res.status(200).json({ received: true, purchaseId: purchase.id });
    }

    res.status(200).json({ received: true });
  } catch (error: any) {
    console.error("Webhook error:", error.message);
    return res.status(400).json({ error: error.message });
  }
}

export const config = {
  api: {
    bodyParser: false
  }
};