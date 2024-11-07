// import { Button } from '@/components/ui/button';
import { Waitlist } from './Waitlist';

export const Cta = () => {
  return (
    <section className='py-10 bg-secondary/50'>
      <div className='flex items-center justify-center rounded-2xl bg-[url("/images/blocks/circles.svg")] bg-cover bg-center px-8 py-20 text-center md:p-20'>
        <div className='mx-auto max-w-screen-md'>
          <h1 className='mb-4 text-balance text-3xl font-semibold md:text-5xl'>
            Reduce RTO and streamline your operations
          </h1>
          <p className='text-muted-foreground text-sm md:text-base'>
            Join our waitlist to access tools that help lower Return to Origin
            (RTO) rates. Track RTO patterns by pincode, email, or phone in a
            centralized dashboard, and get alerts for flagged customers. Join
            waitlist now to be among the first to benefit.
          </p>
          <div className='mt-11 flex flex-col justify-center gap-2 sm:flex-row'>
            {/* <Button size='lg'>Get Started</Button>
            <Button size='lg' variant='outline'>
              Learn More
            </Button> */}
            <Waitlist />
          </div>
        </div>
      </div>
    </section>
  );
};
