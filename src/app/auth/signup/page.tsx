'use client';

import { Loader, UserRound } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { TextInput } from '@/components/form/TextInput';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form } from '@/components/ui/form';
import Link from 'next/link';
import { GoogleIcon } from '@/components/common/GoogleIcon';
import { signup, signupWithGoogle } from '@/app/actions/signup';
import { handleResponse } from '@/lib/handleResponse';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export const signupSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  password: z.string().min(6),
});

export default function SignupPage() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  const onSubmit = async (data: z.infer<typeof signupSchema>) => {
    setIsLoading(true);
    const res = await signup(data);
    setIsLoading(false);
    const response = handleResponse(res);
    if (response) {
      router.push('/dashboard');
    }
  };

  const handleSignupWithGoogle = async () => {
    const res = await signupWithGoogle();
    handleResponse(res);
  };

  return (
    <section className='h-screen w-full flex items-center justify-center'>
      <div className='max-w-[450px] w-full'>
        <div className='flex flex-col gap-4'>
          <Card className='mx-auto w-full max-w-md'>
            <CardHeader className='items-center'>
              <UserRound className='size-10 rounded-full bg-accent p-2.5 text-muted-foreground' />
              <CardTitle className='text-xl'>Create your account</CardTitle>
              <CardDescription>
                Enter your name, email and password to create your account
              </CardDescription>
            </CardHeader>
            <CardContent className='space-y-4'>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                  <div className='grid gap-4'>
                    <div className='grid gap-2'>
                      <TextInput
                        name='name'
                        label='Name'
                        placeholder='John Doe'
                        control={form.control}
                        type='text'
                      />
                    </div>
                    <div className='grid gap-2'>
                      <TextInput
                        name='email'
                        label='Email'
                        placeholder='m@example.com'
                        control={form.control}
                        type='email'
                      />
                    </div>
                    <div className='grid gap-2'>
                      <TextInput
                        name='password'
                        label='Password'
                        placeholder='Enter your password'
                        control={form.control}
                        type='password'
                      />
                    </div>
                    <Button
                      type='submit'
                      className='w-full'
                      disabled={isLoading}
                    >
                      Create account{' '}
                      {isLoading && <Loader className='size-4 animate-spin' />}
                    </Button>
                  </div>
                </form>
              </Form>
              <div className='flex items-center gap-4'>
                <span className='h-px w-full bg-input'></span>
                <span className='text-xs text-muted-foreground'>OR</span>
                <span className='h-px w-full bg-input'></span>
              </div>
              <Button
                type='button'
                onClick={handleSignupWithGoogle}
                variant='outline'
                className='w-full'
                disabled
              >
                <GoogleIcon />
                Sign up with Google
              </Button>
            </CardContent>
          </Card>
          <div className='mx-auto flex gap-1 text-sm'>
            <p>Already have an account?</p>
            <Link href='/auth/signin' className='underline'>
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
