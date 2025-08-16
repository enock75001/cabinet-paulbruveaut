import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Scale, Users, Briefcase, ChevronRight, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    icon: <Scale className="h-10 w-10 text-primary" />,
    title: "Droit Immobilier",
    description: "Transactions, locations, copropriété, urbanisme.",
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: "Droit de la Famille",
    description: "Contrats de mariage, successions, donations, divorces.",
  },
  {
    icon: <Briefcase className="h-10 w-10 text-primary" />,
    title: "Droit des Sociétés",
    description: "Création de sociétés, fusions, acquisitions, secrétariat juridique.",
  },
];

const testimonials = [
  {
    name: "Alexandre P.",
    role: "Entrepreneur",
    avatar: "AP",
    text: "Une expertise et une réactivité hors pair pour la création de notre société. Maître Bruveau a su nous guider à chaque étape avec clarté et professionnalisme.",
  },
  {
    name: "Marie & Jean D.",
    role: "Acquéreurs immobiliers",
    avatar: "MD",
    text: "L'accompagnement pour notre premier achat a été exceptionnel. Nous nous sommes sentis en totale confiance. Un grand merci pour votre patience et vos conseils avisés.",
  },
  {
    name: "Sophie L.",
    role: "Héritière",
    avatar: "SL",
    text: "La gestion de la succession a été menée avec beaucoup de tact et d'efficacité dans un moment difficile. Je recommande vivement le cabinet.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col dark">
      <section className="relative bg-background py-24 sm:py-32 md:py-40">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            L'excellence notariale, au service de vos projets.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            Maître Paul Bruveau vous accompagne avec rigueur et bienveillance dans les moments clés de votre vie personnelle et professionnelle.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/contact">Prendre rendez-vous</Link>
            </Button>
            <Button asChild variant="ghost" size="lg">
              <Link href="/services">
                Nos services <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 sm:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="font-headline text-3xl font-bold text-foreground sm:text-4xl">Nos Domaines d'Expertise</h2>
            <p className="mt-4 text-lg text-muted-foreground">Un conseil sur-mesure pour sécuriser vos actes et vos investissements.</p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            {services.map((service) => (
              <Card key={service.title} className="text-center transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 border-transparent bg-background/50">
                <CardHeader>
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-secondary">
                    {service.icon}
                  </div>
                </CardHeader>
                <CardContent>
                  <h3 className="font-headline text-xl font-semibold text-foreground">{service.title}</h3>
                  <p className="mt-2 text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      <section id="about" className="bg-background py-20 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-2">
            <div className="order-2 md:order-1">
              <h2 className="font-headline text-3xl font-bold text-foreground sm:text-4xl">Maître Paul Bruveau</h2>
              <p className="mt-6 text-lg text-muted-foreground">
                Diplômé de l'Université Panthéon-Assas, Maître Paul Bruveau a fondé son étude avec la volonté de proposer un service notarial moderne, réactif et proche de ses clients.
              </p>
              <p className="mt-4 text-muted-foreground">
                Son approche allie la tradition du notariat à une vision dynamique du conseil, assurant une sécurité juridique optimale pour tous vos actes. L'étude travaille en étroite collaboration avec Maître COUZIGOU-SUHAS Nathalie pour offrir une expertise complète et approfondie.
              </p>
              <Button asChild className="mt-8" size="lg">
                <Link href="/about">En savoir plus</Link>
              </Button>
            </div>
            <div className="order-1 md:order-2">
              <Image
                src="https://placehold.co/600x600.png"
                alt="Maître Paul Bruveau"
                width={600}
                height={600}
                className="rounded-lg shadow-2xl shadow-primary/20"
                data-ai-hint="professional portrait notary"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section id="testimonials" className="py-20 sm:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="font-headline text-3xl font-bold text-foreground sm:text-4xl">Témoignages de nos clients</h2>
            <p className="mt-4 text-lg text-muted-foreground">La satisfaction de nos clients est notre plus grande fierté.</p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="flex flex-col bg-background/50 border-transparent">
                <CardHeader className="flex-row items-center gap-4 pb-4">
                  <Avatar>
                    <AvatarImage src={`https://placehold.co/40x40.png?text=${testimonial.avatar}`} />
                    <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow p-6 pt-0">
                  <div className="flex gap-1 mb-2">
                    {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 text-primary fill-primary" />)}
                  </div>
                  <p className="italic text-muted-foreground">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
