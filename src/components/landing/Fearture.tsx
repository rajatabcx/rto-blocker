import { featureCardsData } from '@/lib/constants';

export const Features = () => {
  return (
    <section className='w-full flex justify-center items-center bg-secondary/50'>
      <div className='p-4 md:gap-8 md:px-10 md:py-6 max-w-screen-xl mx-auto my-10'>
        <p className='mb-4 text-xs text-muted-foreground'>
          Why Choose Our Platform?
        </p>
        <h2 className='text-3xl font-medium lg:text-4xl'>
          Reduce RTO with Shared Customer Intelligence
        </h2>
        <div className='mt-6 grid gap-3 md:grid-cols-2 lg:mt-10 lg:grid-cols-4'>
          {featureCardsData.map((feature) => (
            <div
              key={feature.id}
              className='relative flex gap-3 rounded-lg border-dashed md:block md:border-l md:p-5'
            >
              <span className='mb-8 flex size-10 shrink-0 items-center justify-center rounded-full bg-secondary-foreground md:size-12'>
                <feature.icon className='size-5 md:size-6 text-secondary' />
              </span>
              <div>
                <h3 className='font-medium md:mb-2 md:text-xl'>
                  {feature.title}
                  <span className='absolute -left-px hidden h-6 w-px bg-primary md:inline-block'></span>
                </h3>
                <p className='text-sm text-muted-foreground'>
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
