'use server';

import { z } from 'zod';

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
