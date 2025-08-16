import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Award, BookOpen, ShieldCheck } from "lucide-react";
import Link from "next/link";

const values = [
    {
        icon: <ShieldCheck className="h-8 w-8 text-primary"/>,
        title: "Rigueur",
        description: "Garantir la sécurité juridique de chaque acte par une analyse approfondie et une application stricte du droit."
    },
    {
        icon: <Award className="h-8 w-8 text-primary"/>,
        title: "Excellence",
        description: "Viser la plus haute qualité de service à travers une expertise constamment mise à jour et une approche personnalisée."
    },
    {
        icon: <BookOpen className="h-8 w-8 text-primary"/>,
        title: "Pédagogie",
        description: "Rendre le droit accessible en expliquant clairement les enjeux et les implications de chaque décision."
    }
]

export default function AboutPage() {
  return (
    <>
      <section className="bg-secondary/50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-headline text-4xl font-bold text-primary sm:text-5xl">
            À Propos de l'Étude
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Découvrez le parcours de Maître Paul Bruveau et les valeurs qui animent notre pratique notariale.
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-20">
            <div>
              <Image
                src="https://placehold.co/800x1000.png"
                alt="Maître Paul Bruveau"
                width={800}
                height={1000}
                className="rounded-lg shadow-xl"
                data-ai-hint="professional lawyer portrait"
              />
            </div>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <h2 className="font-headline text-3xl font-bold text-primary">Maître Paul Bruveau</h2>
              <p>
                Passionné par le droit et animé par le désir de conseiller, Maître Paul Bruveau a suivi un cursus d'excellence à l'Université Panthéon-Assas à Paris, où il a obtenu son Diplôme Supérieur du Notariat. Fort de ses expériences au sein de grandes études parisiennes, il a fondé son propre cabinet au cœur du 5ème arrondissement, au 89 Boulevard Saint-Michel.
              </p>
              <h3 className="font-headline text-2xl font-bold text-primary mt-8">Notre Philosophie</h3>
              <p>
                L'étude a pour vocation d'offrir un service notarial qui allie tradition et modernité. Nous croyons en une relation de confiance durable, fondée sur l'écoute, la disponibilité et la réactivité. Chaque client bénéficie d'un interlocuteur unique pour un suivi personnalisé et efficace.
              </p>
              <p>
                Nous travaillons en étroite collaboration avec <strong>Maître COUZIGOU-SUHAS Nathalie</strong>, ce qui nous permet de mobiliser des expertises complémentaires pour les dossiers les plus complexes et d'assurer une continuité de service irréprochable.
              </p>
               <Button asChild size="lg" className="mt-6">
                 <Link href="/contact">Contacter l'étude</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary/50 py-20 sm:py-24">
        <div className="container mx-auto px-4">
             <div className="text-center max-w-3xl mx-auto">
                <h2 className="font-headline text-3xl font-bold text-primary sm:text-4xl">Nos Valeurs Fondamentales</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                    Trois piliers qui guident notre action au quotidien pour vous offrir le meilleur service.
                </p>
             </div>
             <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
                {values.map(value => (
                    <div key={value.title} className="text-center p-8 transition-all duration-300 bg-card border rounded-lg hover:shadow-xl hover:-translate-y-2">
                        <div className="inline-block bg-primary/10 p-4 rounded-full">
                           {value.icon}
                        </div>
                        <h3 className="font-headline text-xl font-semibold text-foreground mt-5">{value.title}</h3>
                        <p className="mt-2 text-muted-foreground">{value.description}</p>
                    </div>
                ))}
             </div>
        </div>
      </section>
    </>
  );
}
