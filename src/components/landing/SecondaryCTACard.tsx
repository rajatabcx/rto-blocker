import { Button } from '@/components/ui/button';

export const Cta = () => {
  return (
    <section className='my-10'>
      <div className='flex items-center justify-center rounded-2xl bg-[url("/images/blocks/circles.svg")] bg-cover bg-center px-8 py-20 text-center md:p-20'>
        <div className='mx-auto max-w-screen-md'>
          <h1 className='mb-4 text-balance text-3xl font-semibold md:text-5xl'>
            Start building your websites faster
          </h1>
          <p className='text-muted-foreground md:text-lg'>
            Try our tools and services to build your website faster. Start with
            a 14-day free trial. No credit card required. No setup fees. Cancel
            anytime.
          </p>
          <div className='mt-11 flex flex-col justify-center gap-2 sm:flex-row'>
            <Button size='lg'>Get Started</Button>
            <Button size='lg' variant='outline'>
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
