import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Star } from "lucide-react";
import { testimonials } from "@/lib/testimonials";

export default function TestimonialsPage() {
  return (
    <>
      <section className="bg-secondary/50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-headline text-4xl font-bold text-primary sm:text-5xl">
            Témoignages de nos clients
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            La confiance et la satisfaction de nos clients sont au cœur de notre engagement. Découvrez leurs expériences.
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="flex flex-col border bg-card transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                 <CardContent className="flex-grow p-6">
                   <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />)}
                  </div>
                  <p className="italic text-muted-foreground">"{testimonial.text}"</p>
                </CardContent>
                <CardHeader className="flex-row items-center gap-4 pt-0 p-6">
                  <Avatar>
                    <AvatarImage src={`https://placehold.co/40x40.png?text=${testimonial.avatar}`} />
                    <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}