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
      'Receive instant alerts about potentially problematic orders, allowing you to take action before they become issues.',
  },
  {
    id: 'multi-platform-integration',
    icon: Store,
    title: 'Multi-Platform Integration',
    description:
      'Easily connect with Shopify, BigCommerce, WooCommerce, and more for streamlined e-commerce management.',
  },
  {
    id: 'centralized-dashboard',
    icon: CheckCircle2,
    title: 'Centralized Dashboard',
    description:
      'Access all your e-commerce returns and customer data in one unified dashboard for easy management.',
  },
  {
    id: 'rto-analytics',
    icon: BarChart,
    title: 'RTO Analytics',
    description:
      'Analyze your return-to-origin trends with comprehensive metrics and insights to improve delivery success rates.',
  },
];

export const howItWorksData: FeatureCardData[] = [
  {
    id: 'connect-stores',
    icon: Timer,
    title: 'Connect Your Stores',
    description:
      'Quickly integrate all your e-commerce platforms into one dashboard with our streamlined setup process.',
  },
  {
    id: 'monitor-orders',
    icon: DollarSign,
    title: 'Monitor Orders in Real-Time',
    description:
      'Our system instantly checks new orders against a database of high-risk customers and return histories.',
  },
  {
    id: 'get-notified',
    icon: KeyRound,
    title: 'Instant Alerts',
    description:
      'Stay informed with instant email or in-app notifications whenever potential issues are detected.',
  },
];
