import { FeatureCardData } from './types';
import {
  AlertCircle,
  Store,
  CheckCircle2,
  BarChart,
  Timer,
  DollarSign,
  KeyRound,
} from 'lucide-react';

export const featureCardsData: FeatureCardData[] = [
  {
    id: 'proactive-notifications',
    icon: AlertCircle,
    title: 'Proactive Notifications',
    description:
      'Get instant alerts about potential problematic orders before they become issues.',
  },
  {
    id: 'multi-platform-integration',
    icon: Store,
    title: 'Multi-Platform Integration',
    description:
      'Seamlessly connect with Shopify, BigCommerce, WooCommerce, and more.',
  },
  {
    id: 'centralized-dashboard',
    icon: CheckCircle2,
    title: 'Centralized Dashboard',
    description:
      'Manage all your e-commerce returns and customer data in one place.',
  },
  {
    id: 'real-time-analytics',
    icon: BarChart,
    title: 'Real-Time Analytics',
    description:
      'Track performance metrics and customer insights with live data visualization.',
  },
];

export const howItWorksData: FeatureCardData[] = [
  {
    id: 'maximize-efficiency',
    icon: Timer,
    title: 'Maximize efficiency',
    description:
      'Skip the manual tasks and complex setups. With Streamline, you can focus on what matters most while the system handles the rest.',
  },
  {
    id: 'optimize-resources',
    icon: DollarSign,
    title: 'Optimize resources',
    description:
      "Don't overspend on unnecessary tools or teams. Keep your operations lean and efficient by automating your workflows with Streamline.",
  },
  {
    id: 'simplify-operations',
    icon: KeyRound,
    title: 'Simplify operations',
    description:
      'Say goodbye to managing multiple platforms. Streamline takes care of all the heavy lifting, ensuring consistent results with minimal hassle.',
  },
];
