'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Card, CardContent } from '@/components/ui/card';
import { Loader2, Wand2, Lightbulb } from 'lucide-react';
import { getTimelineEstimate, type TimelineState } from '@/app/actions';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="w-full" disabled={pending}>
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Estimation en cours...
        </>
      ) : (
        <>
          <Wand2 className="mr-2 h-4 w-4" />
          Estimer la durée
        </>
      )}
    </Button>
  );
}

export function TimelineEstimatorForm() {
  const initialState: TimelineState = { timeline: null, error: null };
  const [state, formAction] = useFormState(getTimelineEstimate, initialState);

  return (
    <div className="space-y-6">
      <form action={formAction} className="space-y-4">
        <div>
          <Label htmlFor="serviceDescription" className="text-lg font-medium">
            Description de vos besoins
          </Label>
          <p className="text-sm text-muted-foreground mb-2">
            Veuillez décrire le plus précisément possible les services notariaux dont vous avez besoin.
          </p>
          <Textarea
            id="serviceDescription"
            name="serviceDescription"
            placeholder="Exemple: 'Je souhaite acheter un appartement en nom propre. Le compromis de vente est déjà signé...'"
            rows={8}
            required
            className="text-base"
          />
        </div>
        <SubmitButton />
        {state.error && <p className="text-sm font-medium text-destructive">{state.error}</p>}
      </form>
      
      {state.timeline && (
        <Card className="bg-secondary">
          <CardContent className="p-6">
            <Alert>
                <Lightbulb className="h-4 w-4" />
                <AlertTitle className="font-headline">Estimation du délai</AlertTitle>
                <AlertDescription className="prose prose-sm max-w-none text-muted-foreground whitespace-pre-wrap">
                    {state.timeline}
                </AlertDescription>
            </Alert>
            <p className="text-xs text-muted-foreground mt-4 italic">
                Note : Cette estimation est fournie à titre indicatif par une IA et ne constitue pas un engagement contractuel. Les délais réels peuvent varier en fonction de la complexité du dossier et des délais administratifs.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
