import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Scale, Users, Briefcase, Landmark } from "lucide-react";
import type { ReactNode } from "react";

type Service = {
  icon: ReactNode;
  title: string;
  description: string;
  features: string[];
};

const servicesList: Service[] = [
  {
    icon: <Scale className="h-8 w-8 text-accent" />,
    title: "Droit Immobilier",
    description: "Sécurisez chaque étape de vos projets immobiliers, de l'acquisition à la gestion.",
    features: [
      "Ventes et acquisitions (maisons, appartements, terrains)",
      "Baux d'habitation et commerciaux",
      "Règlements de copropriété et divisions",
      "Conseils en urbanisme et promotion immobilière",
      "Financements et hypothèques",
    ],
  },
  {
    icon: <Users className="h-8 w-8 text-accent" />,
    title: "Droit de la Famille",
    description: "Anticipez et protégez l'avenir de votre famille et de votre patrimoine.",
    features: [
      "Contrats de mariage et pactes civils de solidarité (PACS)",
      "Successions, testaments et partages",
      "Donations (simples, partages, entre époux)",
      "Procédures d'adoption et de protection des majeurs",
      "Conseils en matière de divorce par consentement mutuel",
    ],
  },
  {
    icon: <Briefcase className="h-8 w-8 text-accent" />,
    title: "Droit des Sociétés",
    description: "Accompagnez la vie de votre entreprise, de sa naissance à sa transmission.",
    features: [
      "Constitution de sociétés (SARL, SAS, SCI...)",
      "Rédaction et modification de statuts",
      "Secrétariat juridique (assemblées générales, rapports)",
      "Cessions de parts sociales et d'actions",
      "Fusions, acquisitions et restructurations",
      "Baux commerciaux et cessions de fonds de commerce",
    ],
  },
  {
    icon: <Landmark className="h-8 w-8 text-accent" />,
    title: "Gestion de Patrimoine",
    description: "Optimisez, structurez et pérennisez votre patrimoine personnel et professionnel.",
    features: [
      "Bilan patrimonial et stratégies d'optimisation fiscale",
      "Structuration de patrimoine (holding, démembrement)",
      "Anticipation de la transmission d'entreprise",
      "Investissements immobiliers et financiers (en conseil)",
      "Collaboration avec Maître COUZIGOU-SUHAS Nathalie pour une expertise globale",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-secondary py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-headline text-4xl font-bold text-primary sm:text-5xl">
            Nos Domaines d'Expertise
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
            Nous offrons un accompagnement juridique complet et sur-mesure pour sécuriser chaque étape de vos projets personnels et professionnels. Notre mission est de vous apporter clarté, sécurité et sérénité.
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
            {servicesList.map((service) => (
              <Card key={service.title} className="flex flex-col overflow-hidden border-2 border-transparent bg-background/50 transition-all duration-300 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20">
                <CardHeader className="flex flex-row items-center gap-4 bg-secondary/50 p-6">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                    {service.icon}
                  </div>
                  <div>
                    <CardTitle className="font-headline text-2xl text-primary">{service.title}</CardTitle>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow p-6">
                  <ul className="space-y-3">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                        <span className="text-foreground/90">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
