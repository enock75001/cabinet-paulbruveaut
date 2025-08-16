'use server';

import { z } from 'zod';
import { estimateTimeline } from '@/ai/flows/estimate-timeline';
import type { EstimateTimelineOutput } from '@/ai/flows/estimate-timeline';

const contactSchema = z.object({
  name: z.string().min(2, { message: 'Le nom doit contenir au moins 2 caractères.' }),
  email: z.string().email({ message: 'Veuillez saisir une adresse e-mail valide.' }),
  message: z.string().min(10, { message: 'Le message doit contenir au moins 10 caractères.' }),
});

export type ContactFormState = {
  message: string;
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
  };
  isSuccess: boolean;
};

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const validatedFields = contactSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      message: 'Veuillez corriger les erreurs ci-dessous.',
      errors: validatedFields.error.flatten().fieldErrors,
      isSuccess: false,
    };
  }

  // In a real application, you would send an email or save to a database.
  console.log('Contact form submitted:', validatedFields.data);

  return {
    message: 'Merci ! Votre message a été envoyé avec succès.',
    isSuccess: true,
  };
}

const timelineSchema = z.object({
  serviceDescription: z.string().min(20, { message: 'Veuillez fournir une description plus détaillée (au moins 20 caractères).' }),
});

export type TimelineState = {
  timeline: EstimateTimelineOutput['estimatedTimeline'] | null;
  error: string | null;
};

export async function getTimelineEstimate(
  prevState: TimelineState,
  formData: FormData
): Promise<TimelineState> {
  const serviceDescription = formData.get('serviceDescription');
  const validatedFields = timelineSchema.safeParse({ serviceDescription });

  if (!validatedFields.success) {
    return {
      timeline: null,
      error: validatedFields.error.flatten().fieldErrors.serviceDescription?.[0] || 'Erreur de validation.',
    };
  }
  
  try {
    const result = await estimateTimeline({ serviceDescription: validatedFields.data.serviceDescription });
    return {
      timeline: result.estimatedTimeline,
      error: null,
    };
  } catch (error) {
    console.error("AI Error:", error);
    return {
      timeline: null,
      error: "Une erreur s'est produite lors de la communication avec le service d'estimation. Veuillez réessayer plus tard.",
    };
  }
}
