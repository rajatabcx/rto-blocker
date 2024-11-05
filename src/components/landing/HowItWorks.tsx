import { howItWorksData } from '@/lib/constants';
import HowItWorkCard from './HowItWorkCard';

export const HowItWorks = () => {
  return (
    <section className='min-h-screen flex justify-center items-center max-w-screen-xl mx-auto py-10'>
      <div className='relative p-4  md:px-10 md:py-6 text-center'>
        <div className='pointer-events-none absolute inset-0 -z-10 mx-auto hidden size-[500px] bg-[radial-gradient(hsl(var(--muted-foreground))_1px,transparent_1px)] opacity-25 [background-size:6px_6px] [mask-image:radial-gradient(circle_at_center,white_250px,transparent_250px)] lg:block' />
        <div className='relative flex justify-between lg:gap-16'>
          <div className='pointer-events-none absolute inset-0 hidden bg-gradient-to-t from-background via-transparent to-transparent lg:block' />

          <div className='w-full max-w-96 flex-grow-1 shrink-0 justify-between text-left'>
            <p className='font-mono text-xs text-muted-foreground'>
              What’s the solution?
            </p>
            <h2 className='mb-3 mt-6 text-3xl font-medium lg:text-4xl'>
              Streamline Your E-commerce Operations
            </h2>
            <p className='text-sm text-muted-foreground'>
              Experience a seamless, end-to-end solution designed to simplify
              your workflow. From data gathering and report generation to task
              automation and real-time results, Streamline takes care of every
              detail so you can focus on growing your business.
            </p>
          </div>
          <div className='hidden shrink-0 lg:block flex-1 h-[450px]'>
            <img
              src='https://images.unsplash.com/photo-1542202024422-83d20d29efff?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              alt='placeholder'
              className='w-full h-full rounded-lg border object-cover'
            />
          </div>
        </div>
        <div className='relative mt-8 lg:mt-0 grid md:grid-cols-3'>
          {howItWorksData.map((item) => (
            <HowItWorkCard key={item.id} {...item} />
          ))}

          <div className='absolute -inset-x-4 top-0 h-px bg-input md:hidden'></div>
          <div className='absolute -inset-x-4 top-[-0.5px] row-start-2 h-px bg-input md:hidden'></div>
          <div className='absolute -inset-x-4 top-[-0.5px] row-start-3 h-px bg-input md:hidden'></div>
          <div className='absolute -inset-x-4 bottom-0 row-start-4 h-px bg-input md:hidden'></div>
          <div className='absolute -left-2 -top-2 bottom-0 w-px bg-input md:hidden'></div>
          <div className='absolute -right-2 -top-2 bottom-0 col-start-2 w-px bg-input md:hidden'></div>
          <div className='absolute -inset-x-2 top-0 hidden h-px bg-input md:block'></div>
          <div className='absolute -top-2 bottom-0 left-0 hidden w-px bg-input md:block'></div>
          <div className='absolute -left-[0.5px] -top-2 bottom-0 col-start-2 hidden w-px bg-input md:block'></div>
          <div className='absolute -left-[0.5px] -top-2 bottom-0 col-start-3 hidden w-px bg-input md:block'></div>
          <div className='absolute -top-2 bottom-0 right-0 hidden w-px bg-input md:block'></div>
        </div>
      </div>
    </section>
  );
};
