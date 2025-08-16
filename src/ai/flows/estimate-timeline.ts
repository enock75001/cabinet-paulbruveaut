// estimate-timeline.ts
'use server';

/**
 * @fileOverview A flow to estimate the timeline for the completion of notarial services.
 *
 * - estimateTimeline - A function that takes a description of required services and returns an estimated timeline.
 * - EstimateTimelineInput - The input type for the estimateTimeline function.
 * - EstimateTimelineOutput - The return type for the estimateTimeline function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const EstimateTimelineInputSchema = z.object({
  serviceDescription: z
    .string()
    .describe(
      'A detailed description of the notarial services the user requires.'
    ),
});
export type EstimateTimelineInput = z.infer<typeof EstimateTimelineInputSchema>;

const EstimateTimelineOutputSchema = z.object({
  estimatedTimeline: z
    .string()
    .describe(
      'An estimated timeline for the completion of the described services.'
    ),
});
export type EstimateTimelineOutput = z.infer<typeof EstimateTimelineOutputSchema>;

export async function estimateTimeline(input: EstimateTimelineInput): Promise<EstimateTimelineOutput> {
  return estimateTimelineFlow(input);
}

const prompt = ai.definePrompt({
  name: 'estimateTimelinePrompt',
  input: {schema: EstimateTimelineInputSchema},
  output: {schema: EstimateTimelineOutputSchema},
  prompt: `You are an expert legal assistant with experience estimating the time required to complete various notarial services.

  Based on the following description of required services, provide an estimated timeline for completion. Be as specific as possible, and include any factors that might affect the timeline.

  Description of services: {{{serviceDescription}}}
  Remember that the collaboration with Maître COUZIGOU-SUHAS Nathalie must be mentioned.
  Also include the email contact@cabinet-paulbruveaut.site and the phone number +33644684247.
  Professional address: 89 Boulevard Saint-Michel, 75005 Paris
  `,
});

const estimateTimelineFlow = ai.defineFlow(
  {
    name: 'estimateTimelineFlow',
    inputSchema: EstimateTimelineInputSchema,
    outputSchema: EstimateTimelineOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
