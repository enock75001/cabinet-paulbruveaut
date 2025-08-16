'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Mail, Phone, MapPin, Calendar } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { submitContactForm, type ContactFormState } from '@/app/actions';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="w-full" disabled={pending}>
      {pending ? 'Envoi en cours...' : 'Envoyer le message'}
    </Button>
  );
}

export default function ContactPage() {
  const { toast } = useToast();
  const initialState: ContactFormState = { message: '', isSuccess: false };
  const [state, formAction] = useFormState(submitContactForm, initialState);

  useEffect(() => {
    if (state.message) {
      toast({
        title: state.isSuccess ? 'Succès' : 'Erreur',
        description: state.message,
        variant: state.isSuccess ? 'default' : 'destructive',
      });
    }
  }, [state, toast]);

  return (
    <>
      <section className="bg-secondary/50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-headline text-4xl font-bold text-primary sm:text-5xl">
            Nous Contacter
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Pour toute question ou pour prendre rendez-vous, n'hésitez pas à nous joindre.
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="container mx-auto grid max-w-6xl grid-cols-1 gap-12 px-4 md:grid-cols-2">
          <div className="space-y-8">
            <h2 className="font-headline text-3xl font-bold text-primary">Informations de contact</h2>
            <div className="space-y-4 text-lg">
              <p className="flex items-center gap-4">
                <Mail className="h-6 w-6 text-primary" />
                <a href="mailto:contact@cabinet-paulbruveaut.site" className="hover:text-primary/80 text-muted-foreground">
                  contact@cabinet-paulbruveaut.site
                </a>
              </p>
              <p className="flex items-center gap-4">
                <Phone className="h-6 w-6 text-primary" />
                <a href="tel:+33644684247" className="hover:text-primary/80 text-muted-foreground">
                  +33 6 44 68 42 47
                </a>
              </p>
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 flex-shrink-0 text-primary" />
                <address className="not-italic text-muted-foreground">
                  89 Boulevard Saint-Michel,
                  <br />
                  75005 Paris, France
                </address>
              </div>
            </div>
             <p className="text-sm text-muted-foreground pt-4">
                En collaboration avec Maître COUZIGOU-SUHAS Nathalie.
            </p>
            <div className="pt-6">
                 <Button asChild size="lg">
                    <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
                        <Calendar className="mr-2 h-5 w-5" />
                        Planifier un rendez-vous
                    </a>
                </Button>
            </div>
            <div className="pt-6">
                <div className="aspect-video w-full overflow-hidden rounded-lg">
                    <a href="https://www.google.com/maps/place/89+Bd+Saint-Michel,+75005+Paris,+France" target="_blank" rel="noopener noreferrer">
                        <img src="https://placehold.co/600x400.png" alt="Map" className="h-full w-full object-cover" data-ai-hint="paris map"/>
                    </a>
                </div>
            </div>
          </div>
          
          <Card className="border shadow-lg">
            <CardHeader>
              <CardTitle className="font-headline text-2xl">Envoyez-nous un message</CardTitle>
              <CardDescription>Nous vous répondrons dans les plus brefs délais.</CardDescription>
            </CardHeader>
            <CardContent>
              <form action={formAction} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Nom complet</Label>
                  <Input id="name" name="name" placeholder="Votre nom" required />
                  {state.errors?.name && <p className="text-sm text-destructive">{state.errors.name[0]}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Adresse e-mail</Label>
                  <Input id="email" name="email" type="email" placeholder="votre.email@example.com" required />
                  {state.errors?.email && <p className="text-sm text-destructive">{state.errors.email[0]}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Votre message</Label>
                  <Textarea id="message" name="message" placeholder="Décrivez votre demande ici..." rows={6} required />
                  {state.errors?.message && <p className="text-sm text-destructive">{state.errors.message[0]}</p>}
                </div>
                <SubmitButton />
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}