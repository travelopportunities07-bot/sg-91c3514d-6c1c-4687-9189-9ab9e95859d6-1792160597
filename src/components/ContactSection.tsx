import { useState } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const countries = [
  { name: "France", code: "+33", flag: "🇫🇷" },
  { name: "Belgique", code: "+32", flag: "🇧🇪" },
  { name: "Suisse", code: "+41", flag: "🇨🇭" },
  { name: "Allemagne", code: "+49", flag: "🇩🇪" },
  { name: "Royaume-Uni", code: "+44", flag: "🇬🇧" },
  { name: "Espagne", code: "+34", flag: "🇪🇸" },
  { name: "Italie", code: "+39", flag: "🇮🇹" },
  { name: "Sénégal", code: "+221", flag: "🇸🇳" },
  { name: "Côte d'Ivoire", code: "+225", flag: "🇨🇮" },
  { name: "Cameroun", code: "+237", flag: "🇨🇲" },
  { name: "Mali", code: "+223", flag: "🇲🇱" },
  { name: "Burkina Faso", code: "+226", flag: "🇧🇫" },
  { name: "Bénin", code: "+229", flag: "🇧🇯" },
  { name: "Togo", code: "+228", flag: "🇹🇬" },
  { name: "Niger", code: "+227", flag: "🇳🇪" },
  { name: "Guinée", code: "+224", flag: "🇬🇳" },
  { name: "Congo", code: "+242", flag: "🇨🇬" },
  { name: "RD Congo", code: "+243", flag: "🇨🇩" },
  { name: "Gabon", code: "+241", flag: "🇬🇦" },
  { name: "Madagascar", code: "+261", flag: "🇲🇬" },
  { name: "États-Unis", code: "+1", flag: "🇺🇸" },
  { name: "Canada", code: "+1", flag: "🇨🇦" },
  { name: "Chine", code: "+86", flag: "🇨🇳" },
  { name: "Japon", code: "+81", flag: "🇯🇵" },
  { name: "Inde", code: "+91", flag: "🇮🇳" },
];

export function ContactSection() {
  const [formData, setFormData] = useState({
    nom: "",
    prenoms: "",
    email: "",
    pays: "",
    phoneCode: "",
    telephone: "",
    statut: "",
    objectif: "",
    langue: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.nom.trim()) newErrors.nom = "Le nom est requis";
    if (!formData.prenoms.trim()) newErrors.prenoms = "Le prénom est requis";
    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email invalide";
    }
    if (!formData.pays) newErrors.pays = "Veuillez sélectionner un pays";
    if (!formData.phoneCode) newErrors.phoneCode = "Veuillez sélectionner un code pays";
    if (!formData.telephone.trim()) {
      newErrors.telephone = "Le téléphone est requis";
    } else if (formData.telephone.replace(/\s/g, "").length < 10) {
      newErrors.telephone = "Le numéro doit contenir au moins 10 chiffres";
    }
    if (!formData.statut) newErrors.statut = "Veuillez sélectionner votre statut";
    if (!formData.objectif) newErrors.objectif = "Veuillez sélectionner un objectif";
    if (!formData.langue) newErrors.langue = "Veuillez sélectionner une langue";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      console.log("Formulaire soumis:", formData);
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      setFormData({
        nom: "",
        prenoms: "",
        email: "",
        pays: "",
        phoneCode: "",
        telephone: "",
        statut: "",
        objectif: "",
        langue: "",
        message: "",
      });

      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-white to-cream">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-6 py-2 bg-gold/10 border-2 border-gold/30 rounded-full text-gold font-semibold text-sm tracking-wider mb-6">
              CONTACTEZ-NOUS
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-navy mb-6">
              Démarrez Votre Parcours Linguistique
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Remplissez le formulaire ci-dessous et notre équipe vous contactera dans les plus brefs délais
            </p>
          </div>
          
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl border-2 border-gray-100">
            {isSubmitted && (
              <div className="mb-8 p-6 bg-green-50 border-2 border-green-500 rounded-2xl flex items-center gap-4">
                <CheckCircle className="w-8 h-8 text-green-500 flex-shrink-0" />
                <p className="text-green-700 font-medium text-lg">
                  Votre message a été envoyé avec succès ! Nous vous répondrons rapidement.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="nom" className="text-navy font-semibold text-base">
                    Nom <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="nom"
                    value={formData.nom}
                    onChange={(e) => handleInputChange("nom", e.target.value)}
                    className={`mt-2 h-12 ${errors.nom ? "border-red-500" : ""}`}
                    placeholder="Votre nom"
                  />
                  {errors.nom && <p className="text-red-500 text-sm mt-1">{errors.nom}</p>}
                </div>

                <div>
                  <Label htmlFor="prenoms" className="text-navy font-semibold text-base">
                    Prénoms <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="prenoms"
                    value={formData.prenoms}
                    onChange={(e) => handleInputChange("prenoms", e.target.value)}
                    className={`mt-2 h-12 ${errors.prenoms ? "border-red-500" : ""}`}
                    placeholder="Votre prénom"
                  />
                  {errors.prenoms && <p className="text-red-500 text-sm mt-1">{errors.prenoms}</p>}
                </div>
              </div>

              <div>
                <Label htmlFor="email" className="text-navy font-semibold text-base">
                  Email <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className={`mt-2 h-12 ${errors.email ? "border-red-500" : ""}`}
                  placeholder="votre.email@exemple.com"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              <div>
                <Label htmlFor="pays" className="text-navy font-semibold text-base">
                  Pays <span className="text-red-500">*</span>
                </Label>
                <Select value={formData.pays} onValueChange={(value) => handleInputChange("pays", value)}>
                  <SelectTrigger className={`mt-2 h-12 ${errors.pays ? "border-red-500" : ""}`}>
                    <SelectValue placeholder="Sélectionnez votre pays" />
                  </SelectTrigger>
                  <SelectContent className="max-h-[300px]">
                    {countries.map((country) => (
                      <SelectItem key={country.name} value={country.name}>
                        {country.flag} {country.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.pays && <p className="text-red-500 text-sm mt-1">{errors.pays}</p>}
              </div>

              <div>
                <Label htmlFor="telephone" className="text-navy font-semibold text-base">
                  Téléphone <span className="text-red-500">*</span>
                </Label>
                <div className="flex gap-3 mt-2">
                  <Select value={formData.phoneCode} onValueChange={(value) => handleInputChange("phoneCode", value)}>
                    <SelectTrigger className={`w-[140px] h-12 ${errors.phoneCode ? "border-red-500" : ""}`}>
                      <SelectValue placeholder="Code" />
                    </SelectTrigger>
                    <SelectContent className="max-h-[300px]">
                      {countries.map((country) => (
                        <SelectItem key={country.code + country.name} value={country.code}>
                          {country.flag} {country.code}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Input
                    id="telephone"
                    type="tel"
                    value={formData.telephone}
                    onChange={(e) => handleInputChange("telephone", e.target.value.replace(/[^\d\s]/g, ""))}
                    className={`flex-1 h-12 ${errors.telephone ? "border-red-500" : ""}`}
                    placeholder="XX XX XX XX XX"
                  />
                </div>
                {(errors.phoneCode || errors.telephone) && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.phoneCode || errors.telephone}
                  </p>
                )}
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="statut" className="text-navy font-semibold text-base">
                    Statut <span className="text-red-500">*</span>
                  </Label>
                  <Select value={formData.statut} onValueChange={(value) => handleInputChange("statut", value)}>
                    <SelectTrigger className={`mt-2 h-12 ${errors.statut ? "border-red-500" : ""}`}>
                      <SelectValue placeholder="Sélectionnez votre statut" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="eleve">Élève</SelectItem>
                      <SelectItem value="etudiant">Étudiant</SelectItem>
                      <SelectItem value="professionnel">Professionnel</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.statut && <p className="text-red-500 text-sm mt-1">{errors.statut}</p>}
                </div>

                <div>
                  <Label htmlFor="objectif" className="text-navy font-semibold text-base">
                    Objectif <span className="text-red-500">*</span>
                  </Label>
                  <Select value={formData.objectif} onValueChange={(value) => handleInputChange("objectif", value)}>
                    <SelectTrigger className={`mt-2 h-12 ${errors.objectif ? "border-red-500" : ""}`}>
                      <SelectValue placeholder="Sélectionnez votre objectif" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="collaboration">Collaboration</SelectItem>
                      <SelectItem value="inscription">S'inscrire pour les cours de langue</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.objectif && <p className="text-red-500 text-sm mt-1">{errors.objectif}</p>}
                </div>
              </div>

              <div>
                <Label htmlFor="langue" className="text-navy font-semibold text-base">
                  Choisir une langue <span className="text-red-500">*</span>
                </Label>
                <Select value={formData.langue} onValueChange={(value) => handleInputChange("langue", value)}>
                  <SelectTrigger className={`mt-2 h-12 ${errors.langue ? "border-red-500" : ""}`}>
                    <SelectValue placeholder="Sélectionnez une langue" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="francais">🇫🇷 Français</SelectItem>
                    <SelectItem value="anglais">🇬🇧 Anglais</SelectItem>
                    <SelectItem value="allemand">🇩🇪 Allemand</SelectItem>
                    <SelectItem value="espagnol">🇪🇸 Espagnol</SelectItem>
                    <SelectItem value="chinois">🇨🇳 Chinois</SelectItem>
                  </SelectContent>
                </Select>
                {errors.langue && <p className="text-red-500 text-sm mt-1">{errors.langue}</p>}
              </div>

              <div>
                <Label htmlFor="message" className="text-navy font-semibold text-base">
                  Message <span className="text-gray-400">(facultatif)</span>
                </Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  className="mt-2"
                  rows={5}
                  placeholder="Votre message..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gold hover:bg-gold/90 text-navy font-bold py-6 text-lg rounded-full shadow-xl transition-all h-14"
              >
                {isSubmitting ? (
                  "Envoi en cours..."
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Envoyer le formulaire
                  </>
                )}
              </Button>
            </form>

            <div className="mt-12 pt-12 border-t-2 border-gray-100 grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center mb-4">
                  <Phone className="w-8 h-8 text-gold" />
                </div>
                <h3 className="font-semibold text-lg text-navy mb-2">Téléphone</h3>
                <p className="text-gray-700 font-medium">+44 7537 10 6060</p>
                <p className="text-sm text-gray-500 mt-1">(WhatsApp uniquement)</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center mb-4">
                  <Mail className="w-8 h-8 text-gold" />
                </div>
                <h3 className="font-semibold text-lg text-navy mb-2">Email</h3>
                <a 
                  href="mailto:contact@powerlingua.com"
                  className="text-gray-700 font-medium hover:text-gold transition-colors"
                >
                  contact@powerlingua.com
                </a>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center mb-4">
                  <MapPin className="w-8 h-8 text-gold" />
                </div>
                <h3 className="font-semibold text-lg text-navy mb-2">Siège Social</h3>
                <p className="text-gray-700 leading-relaxed">
                  71-75, Shelton Street,<br />
                  WC2H 9JQ, Londres, UK
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}