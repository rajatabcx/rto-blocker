'use server';

import { supabaseServer } from '@/supabase/server';
import { z } from 'zod';
import { signupSchema } from '../auth/signup/page';
import { Response } from '@/lib/types';
import { ResponseType } from '@/lib/constants';

export async function signup(
  data: z.infer<typeof signupSchema>
): Promise<Response> {
  console.log('started Signup');
  const supabase = await supabaseServer();
  const { error } = await supabase.auth.signUp({
    email: data.email,
    password: data.password,
    options: {
      data: {
        name: data.name,
      },
    },
  });
  console.dir(error, { depth: null });
  if (error) {
    return {
      message: error.message,
      type: ResponseType.ERROR,
    };
  }

  return {
    message: 'Signup successful',
    type: ResponseType.SUCCESS,
  };
}

export const signupWithGoogle = async (): Promise<Response> => {
  const supabase = await supabaseServer();
  const { error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
  });

  if (error) {
    return {
      message: error.message,
      type: ResponseType.ERROR,
    };
  }

  return {
    message: 'Signup with google successful',
    type: ResponseType.SUCCESS,
  };
};
