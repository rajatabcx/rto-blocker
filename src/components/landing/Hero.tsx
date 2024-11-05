import { Bell, PlayCircle } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { HeroBackground } from './HeroBackground';

export const Hero = () => {
  return (
    <div className='relative h-screen overflow-hidden'>
      <HeroBackground />
      <section className='w-full h-full max-w-screen-xl mx-auto flex justify-center items-center p-4 md:gap-8 md:px-10 md:py-6'>
        <div className='flex-1 z-20'>
          <Badge
            variant='outline'
            className='mb-4 text-sm font-normal lg:mb-10 lg:py-2 lg:pl-2 lg:pr-5 rounded-full bg-background'
          >
            <span className='mr-2 flex size-8 shrink-0 items-center justify-center rounded-full bg-accent'>
              <Bell className='size-4 animate-ring' />
            </span>
            <p className='truncate whitespace-nowrap'>New feature update</p>
          </Badge>
          <h1 className='mb-6 text-4xl font-bold md:text-5xl lg:text-7xl'>
            Streamline Your E&#8209;commerce Returns
          </h1>
          <p className='max-w-2xl text-muted-foreground md:text-[2vw] lg:text-xl'>
            Manage returns, identify problematic customers, and boost your
            e-commerce efficiency across multiple platforms.
          </p>
          <div className='mt-6 flex flex-col gap-4 sm:flex-row lg:mt-10'>
            <Button size={'lg'} className='w-full md:w-auto'>
              Get a demo
            </Button>
            <Button
              size={'lg'}
              variant={'outline'}
              className='w-full md:w-auto'
            >
              <PlayCircle className='mr-2 size-4' />
              Watch video
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
