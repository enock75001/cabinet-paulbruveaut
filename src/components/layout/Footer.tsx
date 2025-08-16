
'use client'

import React from 'react'
import Link from 'next/link'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <h3 className="font-headline text-2xl font-semibold text-primary">
              Maître Paul Bruveau, Notaire
            </h3>
            <p className="mt-4 text-muted-foreground">
              89 Boulevard Saint-Michel, 75005 Paris
              <br />
              En collaboration avec Maître COUZIGOU-SUHAS Nathalie.
            </p>
             <div className="mt-6 space-y-2 text-sm">
                <a href="tel:+33644684247" className="flex items-center gap-2 hover:text-primary">
                  <Phone className="h-4 w-4" /> +33 6 44 68 42 47
                </a>
                <a href="mailto:contact@cabinet-paulbruveaut.site" className="flex items-center gap-2 hover:text-primary">
                  <Mail className="h-4 w-4" /> contact@cabinet-paulbruveaut.site
                </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground">Navigation</h4>
            <ul className="mt-4 space-y-2">
              <li><Link href="/" className="text-muted-foreground hover:text-primary">Accueil</Link></li>
              <li><Link href="/services" className="text-muted-foreground hover:text-primary">Services</Link></li>
              <li><Link href="/about" className="text-muted-foreground hover:text-primary">À Propos</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary">Contact</Link></li>
              <li><Link href="/testimonials" className="text-muted-foreground hover:text-primary">Témoignages</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground">Horaires d'ouverture</h4>
            <div className="mt-4 space-y-2 text-muted-foreground">
              <p>Lundi - Vendredi: 9h00 - 18h00</p>
              <p>Samedi: 9h00 - 12h00 (sur RDV)</p>
              <p>Dimanche: Fermé</p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Cabinet Bruveau Notaire. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}
