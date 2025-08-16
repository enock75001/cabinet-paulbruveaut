import { TimelineEstimatorForm } from '@/components/timeline-estimator-form';
import { BotMessageSquare } from 'lucide-react';

export default function TimelineEstimatorPage() {
  return (
    <>
      <section className="bg-secondary py-20">
        <div className="container mx-auto px-4 text-center">
            <BotMessageSquare className="mx-auto h-12 w-12 text-accent"/>
          <h1 className="font-headline text-4xl font-bold text-primary sm:text-5xl mt-4">
            Estimation de Délais
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Obtenez une estimation du temps nécessaire pour vos démarches notariales grâce à notre outil d'intelligence artificielle.
          </p>
        </div>
      </section>
      
      <section className="py-20 sm:py-24">
        <div className="container mx-auto max-w-3xl px-4">
            <TimelineEstimatorForm />
        </div>
      </section>
    </>
  );
}
