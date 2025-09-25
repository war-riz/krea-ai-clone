// src/constants/footers.ts
import { FooterLinks, SocialLink } from '@/types';
import { Twitter, MessageCircle, Instagram, Github } from 'lucide-react';

export const footerLinks: FooterLinks = {
  product: [
    { label: 'AI Image Generator', href: '/generator' },
    { label: 'AI Video Generator', href: '/video' },
    { label: 'Real-time Generation', href: '/realtime' },
    { label: 'AI Upscaler', href: '/upscaler' },
    { label: 'Logo Maker', href: '/logo' },
  ],
  company: [
    { label: 'About', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Careers', href: '/careers' },
    { label: 'Press', href: '/press' },
    { label: 'Contact', href: '/contact' },
  ],
  resources: [
    { label: 'Documentation', href: '/docs' },
    { label: 'API Reference', href: '/api' },
    { label: 'Community', href: '/community' },
    { label: 'Discord', href: 'https://discord.gg/krea' },
    { label: 'Twitter', href: 'https://twitter.com/krea' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Cookie Policy', href: '/cookies' },
    { label: 'DMCA', href: '/dmca' },
  ],
};

export const socialLinks: SocialLink[] = [
  {
    name: 'Twitter',
    href: 'https://twitter.com/krea',
    icon: Twitter
  },
  {
    name: 'Discord',
    href: 'https://discord.gg/krea',
    icon: MessageCircle
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com/krea',
    icon: Instagram
  },
  {
    name: 'GitHub',
    href: 'https://github.com/krea',
    icon: Github
  }
];