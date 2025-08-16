import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Scale, Users, Briefcase, Landmark } from "lucide-react";
import Image from "next/image";

const serviceItems = [
  {
    value: "item-1",
    title: "Droit Immobilier",
    icon: <Scale className="h-6 w-6 text-accent" />,
    content: "Nous vous assistons dans toutes vos opérations immobilières : acquisition ou vente de biens, baux d'habitation et commerciaux, mise en copropriété, promotion immobilière. Notre expertise garantit la sécurité juridique de vos transactions les plus importantes.",
  },
  {
    value: "item-2",
    title: "Droit de la Famille",
    icon: <Users className="h-6 w-6 text-accent" />,
    content: "Nous vous conseillons pour les grands moments de votre vie : contrat de mariage, PACS, adoption, donation entre époux, succession, testament et divorce. Nous vous aidons à anticiper et à protéger vos proches.",
  },
  {
    value: "item-3",
    title: "Droit des Sociétés",
    icon: <Briefcase className="h-6 w-6 text-accent" />,
    content: "De la création à la transmission de votre entreprise, nous sommes à vos côtés : choix de la structure juridique, rédaction des statuts, augmentation de capital, cession de parts sociales, baux commerciaux et fusions-acquisitions.",
  },
  {
    value: "item-4",
    title: "Gestion de Patrimoine",
    icon: <Landmark className="h-6 w-6 text-accent" />,
    content: "Nous vous proposons des stratégies personnalisées pour organiser, optimiser et transmettre votre patrimoine privé et professionnel, en collaboration avec Maître COUZIGOU-SUHAS Nathalie pour une approche globale et performante.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-secondary py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-headline text-4xl font-bold text-primary sm:text-5xl">
            Nos Services
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Une expertise complète pour sécuriser chaque étape de vos projets de vie et professionnels.
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="container mx-auto grid max-w-5xl grid-cols-1 gap-12 px-4 md:grid-cols-2 md:gap-16">
            <div className="flex flex-col justify-center">
                <h2 className="font-headline text-3xl font-bold text-primary">
                    Des compétences à votre service
                </h2>
                <p className="mt-4 text-muted-foreground">
                    Notre étude vous offre un accompagnement juridique sur-mesure dans les principaux domaines du droit notarial.
                    Chaque dossier est traité avec la plus grande rigueur et une écoute attentive de vos besoins.
                </p>
                <Accordion type="single" collapsible defaultValue="item-1" className="mt-6 w-full">
                {serviceItems.map((item) => (
                    <AccordionItem key={item.value} value={item.value}>
                    <AccordionTrigger className="font-headline text-lg text-primary hover:no-underline">
                        <div className="flex items-center gap-4">
                        {item.icon}
                        {item.title}
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-base text-muted-foreground">
                        {item.content}
                    </AccordionContent>
                    </AccordionItem>
                ))}
                </Accordion>
            </div>
            <div className="relative min-h-[500px]">
                 <Image
                    src="https://placehold.co/600x700.png"
                    alt="Bureau de notaire"
                    fill
                    className="rounded-lg object-cover shadow-xl"
                    data-ai-hint="notary office interior"
                />
            </div>
        </div>
      </section>
    </>
  );
}
