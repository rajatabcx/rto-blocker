import { LucideIcon } from 'lucide-react';
import { ResponseType } from './constants';

export interface FeatureCardData {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

export type Response = {
  type: ResponseType;
  message: string;
};
