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
    id: 'rto-analytics',
    icon: BarChart,
    title: 'RTO Analytics',
    description:
      'Monitor your return-to-origin patterns with detailed metrics and insights to help optimize your delivery success rates.',
  },
];

export const howItWorksData: FeatureCardData[] = [
  {
    id: 'connect-stores',
    icon: Timer,
    title: 'Connect Your Stores',
    description:
      'Easily integrate your e-commerce platforms with our dashboard using our simple setup process.',
  },
  {
    id: 'monitor-orders',
    icon: DollarSign,
    title: ' Monitor Orders',
    description:
      'Our system automatically checks new orders against our database of problematic customers and return histories.',
  },
  {
    id: 'get-notified',
    icon: KeyRound,
    title: 'Get Notified',
    description:
      'Receive instant notifications via email or in-app alerts when potential issues are detected.',
  },
];
