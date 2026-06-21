import type { NextApiRequest, NextApiResponse } from "next";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const supabase = createClient(supabaseUrl, supabaseServiceKey);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { token } = req.body;

  if (!token) {
    return res.status(400).json({ error: "Token is required", valid: false });
  }

  try {
    // Vérifier si le token existe et est valide
    const { data: purchase, error } = await supabase
      .from("purchases")
      .select("*")
      .eq("download_token", token)
      .gte("expires_at", new Date().toISOString())
      .single();

    if (error || !purchase) {
      return res.status(404).json({ 
        error: "Invalid or expired download token", 
        valid: false 
      });
    }

    // Incrémenter le compteur de téléchargements
    await supabase
      .from("purchases")
      .update({ download_count: (purchase.download_count || 0) + 1 })
      .eq("id", purchase.id);

    return res.status(200).json({
      valid: true,
      purchase: {
        productName: purchase.product_name,
        pdfUrl: purchase.pdf_url,
        purchaseDate: purchase.created_at,
        expiresAt: purchase.expires_at
      }
    });
  } catch (error: any) {
    console.error("Verification error:", error);
    return res.status(500).json({ 
      error: "Server error", 
      valid: false,
      details: error.message 
    });
  }
}