import React, { useState } from "react";
import { Mail, Phone, MapPin, Clock, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="pb-16">
      {/* En-tête */}
      <section className="bg-primary/5 border-b border-border py-12 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <h1 className="text-3xl sm:text-4xl font-serif">Contactez-nous</h1>
          <p className="text-sm text-muted-foreground mt-2">
            Les services du Ministère de l'Industrie et du Commerce sont à votre écoute pour toute demande d'information.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Formulaire de contact */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white rounded-xl border border-border p-6 sm:p-8 shadow-sm space-y-6">
              <h3 className="text-xl font-serif text-primary">Formulaire de contact</h3>
              <p className="text-xs text-muted-foreground">Remplissez ce formulaire et nos équipes vous répondront dans les plus brefs délais.</p>

              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="block text-xs font-semibold text-muted-foreground">Nom complet</label>
                    <input type="text" required placeholder="Ex: Fatoumata COULIBALY" className="w-full p-3 rounded border border-border bg-white" />
                  </div>
                  <div className="space-y-1">
                    <label className="block text-xs font-semibold text-muted-foreground">Adresse e-mail</label>
                    <input type="email" required placeholder="Ex: fatou@example.com" className="w-full p-3 rounded border border-border bg-white" />
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="block text-xs font-semibold text-muted-foreground">Sujet de votre message</label>
                  <input type="text" required placeholder="Ex: Demande de renseignements sur les agréments industriels" className="w-full p-3 rounded border border-border bg-white" />
                </div>
                <div className="space-y-1">
                  <label className="block text-xs font-semibold text-muted-foreground">Votre message</label>
                  <textarea required rows={5} placeholder="Saisissez ici l'objet de votre demande avec le plus de précisions possibles..." className="w-full p-3 rounded border border-border bg-white" />
                </div>
                <button type="submit" className="px-6 py-3 bg-primary text-primary-foreground font-bold rounded hover:bg-primary/90 transition-colors shadow-sm">
                  Envoyer le message
                </button>
              </form>

              {submitted && (
                <div className="bg-green-50 text-green-800 p-4 rounded-lg flex items-start gap-2 text-xs">
                  <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold">Message envoyé avec succès !</p>
                    <p className="mt-1">Nous avons bien reçu votre demande. Un accusé de réception vous a été envoyé par e-mail.</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Infos de contact */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-xl border border-border p-6 sm:p-8 shadow-sm space-y-6">
              <h3 className="text-xl font-serif text-primary">Coordonnées</h3>
              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-primary">Adresse physique</p>
                    <p className="text-muted-foreground mt-1">Bâtiment 08, 3ème Étage, Cité Administrative, Bamako, République du Mali</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-primary">Téléphone</p>
                    <p className="text-muted-foreground mt-1">+223 20 28 32 11</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-primary">Adresse e-mail officielle</p>
                    <p className="text-muted-foreground mt-1">contact@micmali.ml</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-primary">Heures d'ouverture</p>
                    <p className="text-muted-foreground mt-1">Lundi au Vendredi : 08h00 - 16h00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
