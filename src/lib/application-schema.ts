import { z } from 'zod';
export const applicationSchema = z.object({
  name: z.string().trim().min(1, 'Please enter your name.').max(100),
  email: z.string().trim().toLowerCase().email('Please enter a valid email address.').max(255),
  phone: z.string().trim().min(7, 'Please enter your phone number.').max(30).regex(/^\+?[0-9() .-]+$/, 'Please enter a valid phone number.').refine(value => value.replace(/\D/g, '').length >= 7 && value.replace(/\D/g, '').length <= 15, 'Use 7–15 digits, including your country code.'),
  expectations: z.string().trim().min(1, 'Please tell us what you are looking for.').max(2000),
  referral: z.string().trim().min(1, 'Please tell us how you heard about us.').max(200),
  additional: z.string().trim().max(2000).default(''),
  acknowledged: z.boolean().refine(value => value, 'Please acknowledge that applying is not SMS consent.'),
  website: z.string().max(0, 'Unable to submit this application.').default(''),
});
export type ApplicationInput = z.infer<typeof applicationSchema>;