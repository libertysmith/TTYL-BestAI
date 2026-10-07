import { createServerFn } from '@tanstack/react-start';
import { createClient } from '@supabase/supabase-js';
import { applicationSchema } from './application-schema';
import type { Database } from '@/integrations/supabase/types';

export const submitApplication = createServerFn({ method: 'POST' })
  .inputValidator((input: unknown) => applicationSchema.parse(input))
  .handler(async ({ data }) => {
    const url = process.env['SUPABASE_URL'];
    const key = process.env['SUPABASE_PUBLISHABLE_KEY'];
    if (!url || !key) throw new Error('Applications are temporarily unavailable. Please try again later.');
    const client = createClient<Database>(url, key, {
      auth: { persistSession: false, autoRefreshToken: false },
      global: { fetch: (input, init) => {
        const headers = new Headers(init?.headers);
        if (key.startsWith('sb_') && headers.get('Authorization') === `Bearer ${key}`) headers.delete('Authorization');
        headers.set('apikey', key);
        return fetch(input, { ...init, headers });
      } },
    });
    const { website: _website, ...application } = data;
    const { error } = await client.from('access_applications').insert(application);
    if (error) {
      if (error.message.includes('wait before')) throw new Error('Please wait 10 minutes before submitting another application with this email.');
      throw new Error('Your application could not be saved. Please try again.');
    }
    return { success: true };
  });