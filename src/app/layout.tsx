import type { Metadata } from 'next';
import './globals.css';
import { Poppins } from 'next/font/google';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Toaster } from '@/components/ui/sonner';

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'RTO Blocker - Prevent Return to Origin Orders for E-commerce',
  description:
    'Protect your e-commerce business from RTO fraud with real-time order monitoring, multi-platform integration, and advanced analytics. Get instant alerts for suspicious orders and manage returns efficiently.',
  keywords: [
    'RTO prevention',
    'return to origin blocker',
    'e-commerce fraud prevention',
    'order monitoring system',
    'shopify RTO protection',
    'woocommerce fraud prevention',
    'bigcommerce order monitoring',
    'suspicious order detection',
    'e-commerce returns management',
    'delivery success optimization',
    'multi-platform e-commerce integration',
    'real-time fraud alerts',
    'return rate analytics',
    'problematic customer database',
    'order risk assessment',
    'RTO Blocker',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={poppins.className}>
        <TooltipProvider>
          {children}
          <div className='dark'>
            <Toaster />
          </div>
        </TooltipProvider>
      </body>
    </html>
  );
}
