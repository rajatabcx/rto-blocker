'use client';

import { UserRound } from 'lucide-react';

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

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export default function SigninPage() {
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (data: z.infer<typeof schema>) => {
    console.log(data);
  };

  return (
    <section className='h-screen w-full flex items-center justify-center'>
      <div className='max-w-[450px] w-full'>
        <div className='flex flex-col gap-4'>
          <Card className='mx-auto w-full max-w-md'>
            <CardHeader className='items-center'>
              <UserRound className='size-10 rounded-full bg-accent p-2.5 text-muted-foreground' />
              <CardTitle className='text-xl'>Log in to your account</CardTitle>
              <CardDescription>
                Enter your email and password to login
              </CardDescription>
            </CardHeader>
            <CardContent className='space-y-4'>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                  <div className='grid gap-4'>
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
                    <Button type='submit' className='w-full'>
                      Log in
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
                onClick={() => {
                  console.log('handle google');
                }}
                variant='outline'
                className='w-full'
              >
                <GoogleIcon />
                Sign up with Google
              </Button>
            </CardContent>
          </Card>
          <div className='mx-auto flex gap-1 text-sm'>
            <p>Don&apos;t have an account yet?</p>
            <Link href='/auth/signup' className='underline'>
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
