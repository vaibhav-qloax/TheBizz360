export type SpaceType = 'food' | 'work' | 'all';

export interface OfferingItem {
  id: string;
  space: 'food' | 'work';
  title: string;
  category: string;
  description: string;
  features: string[];
  icon: string;
  tag: string;
  accentColor: string;
}

export interface BenefitItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  stat?: string;
  statLabel?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  category: 'Dining Logistics' | 'Commercial Services' | 'Work & Productivity' | 'Merchant Operations' | 'Campus Dining' | 'Work & Services';
  author: {
    name: string;
    role: string;
  };
  publishedAt: string;
  readTime: string;
  isFeatured?: boolean;
  coverImage?: string;
  tags: string[];
  keyTakeaways: string[];
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phone?: string;
  category: 'General Inquiry' | 'Food Stall Partner' | 'Work Service Vendor' | 'Campus Administration';
  subject: string;
  message: string;
}

export interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
}
