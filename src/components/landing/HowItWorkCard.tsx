import { FeatureCardData } from '@/lib/types';

export default function HowItWorkCard({
  icon: Icon,
  title,
  description,
}: FeatureCardData) {
  return (
    <div
      className='flex flex-col gap-y-6 px-2 py-10 md:p-6 lg:p-8 
      hover:bg-gray-50 dark:hover:bg-gray-900
      transition-all duration-300 ease-in-out 
      cursor-pointer select-none'
    >
      <Icon />
      <div>
        <h3 className='text-lg font-medium'>{title}</h3>
        <p className='mt-1 text-sm text-muted-foreground'>{description}</p>
      </div>
    </div>
  );
}
