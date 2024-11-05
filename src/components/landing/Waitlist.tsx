'use client';

import { useForm } from 'react-hook-form';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Form } from '@/components/ui/form';
import { TextInput } from '@/components/form/TextInput';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { addToWaitlist } from '@/app/actions/addToWaitlist';
import { useState } from 'react';
import { ArrowRight, Loader } from 'lucide-react';

const schema = z.object({
  email: z.string().email(),
  name: z.string().optional(),
});

export function Waitlist() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: '',
      name: '',
    },
  });

  const onSubmit = async (data: z.infer<typeof schema>) => {
    setIsLoading(true);
    try {
      await addToWaitlist(data.email, data.name);
      toast.success('You have been added to the waitlist');
      setIsOpen(false);
      form.reset();
    } catch (err: any) {
      toast.error(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          size={'lg'}
          className='max-w-[300px] w-full flex items-center gap-1 group'
        >
          Join Waitlist{' '}
          <ArrowRight className='size-4 group-hover:translate-x-1 transition-transform' />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Join the Waitlist</DialogTitle>
          <DialogDescription>
            Be the first to know when we launch. Enter your email to join the
            waitlist.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-2'>
            <TextInput
              control={form.control}
              name='name'
              label='Name (Optional)'
              placeholder='Name'
              disabled={isLoading}
            />
            <TextInput
              control={form.control}
              name='email'
              label='Email'
              placeholder='Email'
              disabled={isLoading}
            />
            <div className='flex justify-end'>
              <Button
                type='submit'
                variant='secondary'
                size='lg'
                disabled={isLoading}
                className='flex items-center gap-1'
              >
                Join Waitlist
                {isLoading && <Loader className='size-4 animate-spin' />}
              </Button>
            </div>
          </form>
          <p className='text-xs text-muted-foreground'>
            *Be the first to know when we launch. No spam, we promise!
          </p>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
