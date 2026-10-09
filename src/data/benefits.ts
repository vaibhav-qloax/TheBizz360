import { BenefitItem } from '../types';

export const BENEFITS: BenefitItem[] = [
  {
    id: 'unified-platform',
    title: 'Dual-Space Ecosystem',
    description: 'Switch between food court ordering and commercial complex services in a single platform without managing separate accounts.',
    icon: 'Layers',
    stat: '2 Spaces',
    statLabel: 'Food & Work Unified',
  },
  {
    id: 'queue-reduction',
    title: 'Zero-Queue Ordering',
    description: 'Order your lunch or submit print jobs in advance. Skip physical lines and collect smoothly with your verified ready token.',
    icon: 'Zap',
    stat: 'Zero Queue',
    statLabel: 'Direct Token Pickup',
  },
  {
    id: 'verified-campus-partners',
    title: 'Verified On-Premises Partners',
    description: 'All food stalls and commercial service providers operate within your complex with transparent pricing and direct desk delivery.',
    icon: 'ShieldCheck',
    stat: 'On-Premises',
    statLabel: 'Verified Outlets',
  },
  {
    id: 'realtime-tracking',
    title: 'Live Order Progression',
    description: 'Track orders live through each stage—from cooking to desk delivery, and document upload to finished collection.',
    icon: 'Activity',
    stat: 'Realtime',
    statLabel: 'Status Updates',
  },
];
