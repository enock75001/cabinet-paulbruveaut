import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { Logo } from "./Logo";

const navLinks = [
    { href: "/services", label: "Services" },
    { href: "/about", label: "À Propos" },
    { href: "/timeline-estimator", label: "Estimation Délais" },
    { href: "/contact", label: "Contact" },
  ];

export function Footer() {
  return (
    <footer className="bg-secondary">
      <div className="container mx-auto px-4 py-12 sm:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="space-y-4">
            <Logo />
            <p className="max-w-xs text-sm text-muted-foreground">
              Votre partenaire de confiance pour des solutions juridiques sécurisées et sur-mesure.
            </p>
            <p className="text-sm text-muted-foreground">
              En collaboration avec Maître COUZIGOU-SUHAS Nathalie.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:col-span-2">
            <div className="space-y-4">
              <h4 className="font-headline font-semibold text-primary">Navigation</h4>
              <ul className="space-y-2">
                {navLinks.map(link => (
                    <li key={link.href}>
                        <Link href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                            {link.label}
                        </Link>
                    </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-headline font-semibold text-primary">Légal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-muted-foreground transition-colors hover:text-primary">Mentions Légales</a></li>
                <li><a href="#" className="text-sm text-muted-foreground transition-colors hover:text-primary">Politique de confidentialité</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-headline font-semibold text-primary">Contact</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 shrink-0 text-accent" />
                  <a href="mailto:contact@cabinet-paulbruveaut.site" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                    contact@cabinet-paulbruveaut.site
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 shrink-0 text-accent" />
                  <a href="tel:+33644684247" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                    +33 6 44 68 42 47
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 shrink-0 text-accent mt-1" />
                  <address className="text-sm text-muted-foreground not-italic">
                    89 Boulevard Saint-Michel, <br />75005 Paris, France
                  </address>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center">
            <p className="text-xs text-muted-foreground">
                © {new Date().getFullYear()} Bruveau Notaire. Tous droits réservés.
            </p>
        </div>
      </div>
    </footer>
  );
}
