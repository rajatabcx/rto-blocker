import Link from 'next/link';

import { Features } from '@/components/landing/Fearture';
import { Hero } from '@/components/landing/Hero';
import { Cta } from '@/components/landing/SecondaryCTACard';
import { HowItWorks } from '@/components/landing/HowItWorks';

export default function LandingPage() {
  return (
    <div className='flex flex-col'>
      {/* <header className='px-4 lg:px-6 h-14 flex items-center'>
        <Link className='flex items-center justify-center' href='#'>
          <ShoppingCart className='h-6 w-6' />
          <span className='sr-only'>E-commerce Dashboard</span>
        </Link>
        <nav className='ml-auto flex gap-4 sm:gap-6'>
          <Link
            className='text-sm font-medium hover:underline underline-offset-4'
            href='#'
          >
            Features
          </Link>
          <Link
            className='text-sm font-medium hover:underline underline-offset-4'
            href='#'
          >
            Pricing
          </Link>
          <Link
            className='text-sm font-medium hover:underline underline-offset-4'
            href='#'
          >
            About
          </Link>
          <Link
            className='text-sm font-medium hover:underline underline-offset-4'
            href='#'
          >
            Contact
          </Link>
        </nav>
      </header> */}
      <main className='flex-1'>
        <Hero />
        <Features />
        <HowItWorks />

        <Cta />
      </main>
      <footer className='flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t'>
        <p className='text-xs text-gray-500 dark:text-gray-400'>
          © 2024 E-commerce Dashboard. All rights reserved.
        </p>
        <nav className='sm:ml-auto flex gap-4 sm:gap-6'>
          <Link className='text-xs hover:underline underline-offset-4' href='#'>
            Terms of Service
          </Link>
          <Link className='text-xs hover:underline underline-offset-4' href='#'>
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}

// function PlatformLogo({ name }: { name: string }) {
//   return (
//     <div className='flex items-center justify-center w-40 h-20 bg-white dark:bg-gray-800 rounded-lg shadow-md'>
//       <span className='text-xl font-semibold'>{name}</span>
//     </div>
//   );
// }
