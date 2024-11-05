import { FeatureCardData } from '@/lib/types';

export default function HowItWorkCard({
  icon: Icon,
  title,
  description,
}: FeatureCardData) {
  return (
    <div
      className='flex flex-col gap-y-6 px-2 py-10 md:p-6 lg:p-8 group
      cursor-pointer select-none bg-background'
    >
      {' '}
      <Icon className='size-6 text-primary' />
      <div>
        <h3 className='text-lg font-medium lg:group-hover:underline'>
          {title}
        </h3>
        <p className='mt-1 text-sm text-muted-foreground lg:group-hover:underline'>
          {description}
        </p>
      </div>
    </div>
  );
}
