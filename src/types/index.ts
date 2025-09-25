// src/types/index.ts
import { LucideIcon } from 'lucide-react';

export interface ModelCard {
  id: string;
  name: string;
  description: string;
  image: string;
  category: string;
  isNew?: boolean;
  isFeatured?: boolean;
  tags?: string[];
  icon?: LucideIcon;
}

export interface GenerateModel {
  id: string;
  name: string;
  description: string;
  backgroundColor: string;
  iconWrapper: string;
  icon: LucideIcon;
  iconColor: string;
  isNew: boolean;
  buttonText: string;
}

export interface FeaturedModel extends ModelCard {
  title: string;
  subtitle: string;
  backgroundImage: string;
  version?: string;
  icon?: LucideIcon;
}

export interface Tool {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: string;
  isNew?: boolean;
  lucideIcon?: LucideIcon;
}

export interface NavigationItem {
  id: string;
  label: string;
  href: string;
  icon?: LucideIcon;
  isActive?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  creator: string;
  imageUrl: string;
  tags: string[];
  likes?: number;
  downloads?: number;
  views?: number;
  createdAt?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export type Theme = 'light' | 'dark';

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

export interface ModelStats {
  likes: number;
  downloads: number;
  rating: number;
  views?: number;
}

export interface SearchFilters {
  category?: string;
  sortBy?: 'popular' | 'newest' | 'rating';
  tags?: string[];
}

export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
  error?: string;
}

export interface GalleryFilters {
  category: string;
  sortBy: 'newest' | 'popular' | 'title';
  searchQuery?: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: LucideIcon;
}

export interface FooterLinks {
  product: FooterLink[];
  company: FooterLink[];
  resources: FooterLink[];
  legal: FooterLink[];
}

export interface FooterProps {
  links?: FooterLinks;
  socialLinks?: SocialLink[];
  companyName?: string;
  description?: string;
  showNewsletter?: boolean;
  showSocials?: boolean;
}