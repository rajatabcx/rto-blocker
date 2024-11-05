'use server';

import { supabaseServer } from '@/supabase/server';

export async function addToWaitlist(email: string, name?: string) {
  console.log(email, name);

  const supabase = await supabaseServer();
  const { error } = await supabase.from('waitlist').insert({
    email,
    name,
  });

  if (error) {
    if (error.code === '23505') {
      throw new Error('This email is already on the waitlist');
    }

    throw new Error('Failed to add to waitlist');
  }

  return { success: true };
}
