'use server';

import { supabaseServer } from '@/supabase/server';
import { Response } from '@/lib/types';
import { ResponseType } from '@/lib/constants';
import { resend } from '@/lib/resend';
import { WaitlistConfirmation } from '@/components/email-templates/WaitlistConfirmation';

export async function addToWaitlist(
  email: string,
  name?: string
): Promise<Response> {
  const supabase = await supabaseServer();
  const { error } = await supabase.from('waitlist').insert({
    email,
    name,
  });

  if (error) {
    console.error('Failed to add to waitlist:', error);
    if (error.code === '23505') {
      return {
        message: 'This email is already on the waitlist',
        type: ResponseType.INFO,
      };
    }

    return { message: 'Failed to add to waitlist', type: ResponseType.ERROR };
  }

  const { error: emailError } = await resend.emails.send({
    from: 'Rajat <rajat@zama.agency>',
    to: [email],
    subject: 'Thank you for joining the waitlist!',
    react: WaitlistConfirmation({ name }),
    replyTo: 'rajat.abcx@gmail.com',
  });

  if (emailError) {
    console.error('Failed to send waitlist confirmation email:', emailError);

    return {
      message:
        'You have been added to the waitlist, but we could not send a confirmation email.',
      type: ResponseType.INFO, // Using INFO instead of ERROR since the primary action succeeded
    };
  }

  return {
    message: 'You have been added to the waitlist',
    type: ResponseType.SUCCESS,
  };
}
