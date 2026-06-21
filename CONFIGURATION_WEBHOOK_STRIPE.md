# Configuration du Système de Téléchargement Sécurisé

## Vue d'ensemble
Le système est maintenant en place pour gérer automatiquement les paiements, l'envoi d'emails et les téléchargements sécurisés pour tous les ebooks.

## ✅ Composants créés

### 1. Base de données Supabase
- **Table `purchases`** : Stocke tous les achats validés avec tokens de téléchargement
- Champs : email, product_id, product_name, stripe_payment_id, download_token, pdf_url, etc.
- Token unique généré pour chaque achat
- Expiration automatique après 1 an

### 2. API Routes
- **`/api/webhook/stripe`** : Webhook pour recevoir les événements Stripe
- **`/api/send-ebook-email`** : Envoie l'email de confirmation avec lien de téléchargement
- **`/api/verify-download`** : Vérifie la validité du token avant le téléchargement

### 3. Pages de confirmation sécurisées
- Vérification automatique du token à l'arrivée
- Affichage du bouton de téléchargement uniquement si le paiement est validé
- Message d'erreur si le token est invalide ou expiré

## 🔧 Configuration requise

### 1. Variables d'environnement (.env.local)
Vous devez ajouter les valeurs suivantes dans votre fichier `.env.local` :

```bash
# Supabase Service Role Key (trouvable dans Supabase Dashboard > Settings > API)
SUPABASE_SERVICE_ROLE_KEY=votre_service_role_key_ici

# Stripe Configuration
STRIPE_SECRET_KEY=sk_live_... ou sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...

# Configuration Email (exemple avec Gmail)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=votre_email@gmail.com
SMTP_PASSWORD=votre_app_password
```

### 2. Configuration Stripe Webhook

#### Étape 1 : Créer le webhook dans Stripe Dashboard
1. Allez sur https://dashboard.stripe.com/webhooks
2. Cliquez sur "Add endpoint"
3. URL du endpoint : `https://votre-domaine.com/api/webhook/stripe`
4. Sélectionnez l'événement : `checkout.session.completed`
5. Cliquez sur "Add endpoint"

#### Étape 2 : Récupérer le secret du webhook
1. Cliquez sur le webhook que vous venez de créer
2. Copiez la valeur "Signing secret" (commence par `whsec_...`)
3. Ajoutez-la dans `.env.local` comme `STRIPE_WEBHOOK_SECRET`

### 3. Configuration des Payment Links Stripe

Pour chaque ebook, vous devez ajouter des métadonnées au Payment Link :

1. Allez dans Stripe Dashboard > Payment Links
2. Pour chaque Payment Link existant, éditez et ajoutez :
   - Metadata key: `product_id`
   - Metadata value: (un identifiant unique, par exemple : `etudes-allemagne`, `etudes-anglophone`, `etudes-francophone`)

3. Ou créez de nouveaux Payment Links avec ces métadonnées

### 4. Mapping des produits

Dans `/api/webhook/stripe.ts`, le mapping des produits est défini. Vous devez mettre à jour le `PRODUCT_MAPPING` avec vos vrais identifiants de Payment Links Stripe :

```typescript
const PRODUCT_MAPPING: Record<string, { name: string; pdfUrl: string }> = {
  "etudes-allemagne": {
    name: "Comment Étudier Gratuitement en Allemagne, Suisse, Autriche et Luxembourg",
    pdfUrl: "https://drive.google.com/file/d/1hIkNSknoH1ROUkLL2VpvTkKMzd7gcGDS/view?usp=drive_link"
  },
  "etudes-anglophone": {
    name: "Comment Étudier Gratuitement aux USA, Australie, Canada et Royaume-Uni",
    pdfUrl: "https://drive.google.com/file/d/1G7OHqdPXL03l8lgVwLvhgJa2GQkFd2y-/view?usp=drive_link"
  },
  "etudes-francophone": {
    name: "Comment Étudier Gratuitement en France, Belgique, Luxembourg, Suisse Romande et Canada",
    pdfUrl: "https://drive.google.com/file/d/1Mh5EoboSoQFfOhL3UhxHEwJnIcE0vFoY/view?usp=drive_link"
  }
};
```

### 5. Configuration Email (Gmail exemple)

Si vous utilisez Gmail :
1. Activez la validation en 2 étapes sur votre compte Google
2. Générez un "App Password" : https://myaccount.google.com/apppasswords
3. Utilisez cet App Password comme `SMTP_PASSWORD`

Ou utilisez un service email professionnel comme SendGrid, Mailgun, etc.

## 📊 Flux de fonctionnement

1. **Client achète un ebook** via le Payment Link Stripe
2. **Stripe envoie un webhook** à `/api/webhook/stripe`
3. **Le webhook crée un enregistrement** dans la table `purchases` avec un token unique
4. **Email automatique envoyé** au client avec le lien de confirmation
5. **Client clique sur le lien** (avec token dans l'URL)
6. **Page de confirmation vérifie le token** via `/api/verify-download`
7. **Si valide** : affichage du bouton de téléchargement
8. **Si invalide** : message d'erreur avec instructions

## 🔒 Sécurité

- ✅ Tokens uniques non-devinables
- ✅ Vérification serveur avant chaque téléchargement
- ✅ Expiration automatique après 1 an
- ✅ Compteur de téléchargements
- ✅ Pas d'accès direct aux PDFs sans validation

## 🧪 Tests

### Test en local (mode développement Stripe)
1. Utilisez `stripe listen --forward-to localhost:3000/api/webhook/stripe`
2. Utilisez une clé webhook de test
3. Faites un achat test via un Payment Link en mode test

### Test en production
1. Configurez le webhook production pointant vers votre domaine
2. Utilisez vos vraies clés Stripe production
3. Testez avec un vrai achat

## 📝 Notes importantes

- Les pages de confirmation ne fonctionneront qu'avec un token valide dans l'URL
- Le système est conçu pour être automatique : aucune configuration manuelle par produit
- Pour ajouter un nouvel ebook : ajoutez simplement son mapping dans `PRODUCT_MAPPING`
- Les emails incluent un lien direct vers la page de confirmation avec le token

## 🆘 Dépannage

**Email non reçu ?**
- Vérifiez les logs de l'API `/api/send-ebook-email`
- Vérifiez que les identifiants SMTP sont corrects
- Regardez dans les spams du client

**Téléchargement ne fonctionne pas ?**
- Vérifiez que le token est dans l'URL
- Vérifiez que l'enregistrement existe dans la table `purchases`
- Vérifiez que la date d'expiration n'est pas dépassée

**Webhook ne se déclenche pas ?**
- Vérifiez que le webhook est actif dans Stripe Dashboard
- Vérifiez que l'URL est correcte
- Testez avec Stripe CLI en local