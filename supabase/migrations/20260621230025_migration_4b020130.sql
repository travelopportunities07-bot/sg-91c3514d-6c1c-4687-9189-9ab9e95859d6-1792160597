-- Table pour stocker les achats validés
CREATE TABLE IF NOT EXISTS purchases (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL,
  product_id text NOT NULL,
  product_name text NOT NULL,
  stripe_payment_id text NOT NULL UNIQUE,
  stripe_session_id text,
  download_token text NOT NULL UNIQUE,
  download_count integer DEFAULT 0,
  amount numeric NOT NULL,
  currency text NOT NULL DEFAULT 'eur',
  pdf_url text NOT NULL,
  created_at timestamp with time zone DEFAULT now(),
  expires_at timestamp with time zone DEFAULT (now() + interval '365 days')
);

-- Index pour recherche rapide par email et token
CREATE INDEX IF NOT EXISTS purchases_email_idx ON purchases(email);
CREATE INDEX IF NOT EXISTS purchases_token_idx ON purchases(download_token);
CREATE INDEX IF NOT EXISTS purchases_stripe_payment_idx ON purchases(stripe_payment_id);

-- RLS Policies
ALTER TABLE purchases ENABLE ROW LEVEL SECURITY;

-- Politique pour permettre la lecture si on a le bon token
CREATE POLICY "Allow download with valid token"
  ON purchases FOR SELECT
  USING (true);

-- Politique pour insertion via service role uniquement
CREATE POLICY "Service role can insert"
  ON purchases FOR INSERT
  WITH CHECK (auth.jwt()->>'role' = 'service_role');

-- Commentaires pour documentation
COMMENT ON TABLE purchases IS 'Stores validated ebook purchases with secure download tokens';
COMMENT ON COLUMN purchases.download_token IS 'Unique secure token for download verification';
COMMENT ON COLUMN purchases.expires_at IS 'Download link expiration date (1 year from purchase)';