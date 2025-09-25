// src/constants/constants.ts
import { 
  Home, 
  Image as ImageIcon, 
  Folder,
  Sparkles,
  Video,
  Zap,
  Play,
  Wand2,
  Layers,
  BookOpen
} from 'lucide-react';
import { FeaturedModel, GenerateModel, Tool, NavigationItem, GalleryItem } from '@/types';

export const CENTER_NAVIGATION_ITEMS: NavigationItem[] = [
  { 
    id: 'home', 
    label: 'Home', 
    href: '/', 
    icon: Home 
  },
  { 
    id: 'image', 
    label: 'Image', 
    href: '/image', 
    icon: ImageIcon 
  },
  { 
    id: 'video', 
    label: 'Video', 
    href: '/video', 
    icon: Video 
  },
  { 
    id: 'tools', 
    label: 'Tools', 
    href: '/tools', 
    icon: Zap 
  },
  { 
    id: 'text', 
    label: 'Text', 
    href: '/text', 
    icon: BookOpen 
  },
  { 
    id: 'folder', 
    label: 'Folder', 
    href: '/folder', 
    icon: Folder 
  }
];

export const RIGHT_NAVIGATION_ITEMS: NavigationItem[] = [
  { 
    id: 'gallery', 
    label: 'Gallery', 
    href: '/gallery'
  },
  { 
    id: 'support', 
    label: 'Support', 
    href: '/support'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: '1',
    title: 'Ethereal Portrait',
    creator: 'Alex Chen',
    imageUrl: '/images/gallery/portrait-1.jpg',
    tags: ['Portrait', 'Digital Art']
  },
  {
    id: '2',
    title: 'Cyberpunk City',
    creator: 'Maya Rodriguez',
    imageUrl: '/images/gallery/cyberpunk-1.jpg',
    tags: ['Cyberpunk', 'Architecture']
  },
  {
    id: '3',
    title: 'Abstract Dreams',
    creator: 'Jordan Kim',
    imageUrl: '/images/gallery/abstract-1.jpg',
    tags: ['Abstract', 'Surreal']
  },
  {
    id: '4',
    title: 'Nature Fusion',
    creator: 'Sam Parker',
    imageUrl: '/images/gallery/nature-1.jpg',
    tags: ['Nature', 'Fantasy']
  },
  {
    id: '5',
    title: 'Retro Vibes',
    creator: 'Casey Wong',
    imageUrl: '/images/gallery/retro-1.jpg',
    tags: ['Retro', 'Vintage']
  },
  {
    id: '6',
    title: 'Minimalist Study',
    creator: 'River Smith',
    imageUrl: '/images/gallery/minimal-1.jpg',
    tags: ['Minimalist', 'Clean']
  },
  {
    id: '7',
    title: 'Digital Landscape',
    creator: 'Taylor Lee',
    imageUrl: '/images/gallery/landscape-1.jpg',
    tags: ['Landscape', 'Digital']
  },
  {
    id: '8',
    title: 'Character Design',
    creator: 'Morgan Davis',
    imageUrl: '/images/gallery/character-1.jpg',
    tags: ['Character', 'Design']
  },
  {
    id: '9',
    title: 'Sci-Fi Concept',
    creator: 'Chris Wilson',
    imageUrl: '/images/gallery/scifi-1.jpg',
    tags: ['Sci-Fi', 'Concept Art']
  },
  {
    id: '10',
    title: 'Urban Photography',
    creator: 'Dana Martinez',
    imageUrl: '/images/gallery/urban-1.jpg',
    tags: ['Photography', 'Urban']
  },
  {
    id: '11',
    title: 'Fantasy Illustration',
    creator: 'Robin Taylor',
    imageUrl: '/images/gallery/fantasy-1.jpg',
    tags: ['Fantasy', 'Illustration']
  },
  {
    id: '12',
    title: 'Modern Architecture',
    creator: 'Alex Thompson',
    imageUrl: '/images/gallery/architecture-1.jpg',
    tags: ['Architecture', 'Modern']
  }
];

export const GALLERY_CATEGORIES = [
  'all', 
  'portrait', 
  'abstract', 
  'nature', 
  'cyberpunk', 
  'minimalist', 
  'landscape', 
  'character',
  'sci-fi',
  'photography',
  'fantasy',
  'architecture'
];

export const FEATURED_MODELS: FeaturedModel[] = [
  {
    id: 'wan-2-2',
    name: 'WAN 2.2',
    title: 'WAN 2.2',
    subtitle: 'WAN 2.2 Image generation',
    description: 'Generate complex images with the brand new and powerful WAN 2.2 model. Exceptional prompt adherence and ultra-realistic textures.',
    image: '/images/models/wan-2-2.jpg',
    backgroundImage: '/images/models/wan-2-2-bg.jpg',
    category: 'image',
    version: '2.2',
    isFeatured: true,
    tags: ['AI Model', 'Image Generation'],
    icon: Sparkles
  },
  {
    id: 'flux-krea',
    name: 'FLUX1 Krea',
    title: 'Open Source',
    subtitle: 'FLUX1 Krea',
    description: "We're making the weights to our FLUX1 Krea model open-source. Download and run our model weights, read the technical report, or generate with it in Krea Image.",
    image: '/images/models/flux-krea.jpg',
    backgroundImage: '/images/models/flux-krea-bg.jpg',
    category: 'image',
    isFeatured: true,
    tags: ['AI Model', 'Open Source'],
    icon: Zap
  },
  {
    id: 'style-transfer',
    name: 'Style Transfer',
    title: 'Style Transfer',
    subtitle: 'Advanced Style Transfer',
    description: 'Transform your images with artistic styles using our advanced neural style transfer technology.',
    image: '/images/models/style-transfer.jpg',
    backgroundImage: '/images/models/style-transfer-bg.jpg',
    category: 'image',
    version: '1.5',
    isFeatured: true,
    tags: ['Style Transfer', 'Art'],
    icon: Sparkles
  },
  {
    id: 'video-gen',
    name: 'Video Generator',
    title: 'Video Generator',
    subtitle: 'AI Video Generation',
    description: 'Create stunning videos from text prompts with our state-of-the-art video generation model.',
    image: '/images/models/video-gen.jpg',
    backgroundImage: '/images/models/video-gen-bg.jpg',
    category: 'video',
    version: '3.0',
    isFeatured: true,
    tags: ['Video', 'Generation'],
    icon: Video
  }
];

export const GENERATE_MODELS: GenerateModel[] = [
  {
    id: 'image-gen',
    name: 'Image',
    description: 'Generate image with custom styles in Flux and Ideogram.',
    backgroundColor: 'bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30',
    iconWrapper: 'bg-blue-500 dark:bg-blue-600',
    icon: ImageIcon,
    iconColor: 'text-white',
    isNew: true,
    buttonText: 'Open'
  },
  {
    id: 'video-gen',
    name: 'Video',
    description: 'Generate videos with Haiper, Pika, Runway, Luma, and more.',
    backgroundColor: 'bg-gradient-to-br from-amber-50 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30',
    iconWrapper: 'bg-amber-500 dark:bg-amber-600',
    icon: Video,
    iconColor: 'text-white',
    isNew: false,
    buttonText: 'Open'
  },
  {
    id: 'realtime',
    name: 'Realtime',
    description: 'Realtime AI rendering on a canvas. Instant feedback loops.',
    backgroundColor: 'bg-gradient-to-br from-cyan-50 to-teal-100 dark:from-cyan-900/30 dark:to-teal-900/30',
    iconWrapper: 'bg-cyan-500 dark:bg-cyan-600',
    icon: Zap,
    iconColor: 'text-white',
    isNew: false,
    buttonText: 'Open'
  },
  {
    id: 'enhancer',
    name: 'Enhancer',
    description: 'Upscale and enhance images and videos up to 2.2K.',
    backgroundColor: 'bg-gradient-to-br from-emerald-50 to-green-100 dark:from-emerald-900/30 dark:to-green-900/30',
    iconWrapper: 'bg-emerald-500 dark:bg-emerald-600',
    icon: Sparkles,
    iconColor: 'text-white',
    isNew: true,
    buttonText: 'Open'
  },
  {
    id: 'edit',
    name: 'Edit',
    description: 'Add objects, change style, or expand photos and generations.',
    backgroundColor: 'bg-gradient-to-br from-purple-50 to-violet-100 dark:from-purple-900/30 dark:to-violet-900/30',
    iconWrapper: 'bg-purple-500 dark:bg-purple-600',
    icon: Wand2,
    iconColor: 'text-white',
    isNew: true,
    buttonText: 'Open'
  },
  {
    id: 'video-upsync',
    name: 'Video Upsync',
    description: 'Lip sync any video to any audio.',
    backgroundColor: 'bg-gradient-to-br from-green-50 to-lime-100 dark:from-green-900/30 dark:to-lime-900/30',
    iconWrapper: 'bg-green-500 dark:bg-green-600',
    icon: Play,
    iconColor: 'text-white',
    isNew: true,
    buttonText: 'Open'
  },
  {
    id: 'motion-transfer',
    name: 'Motion Transfer',
    description: 'Transfer motion to images and animate characters.',
    backgroundColor: 'bg-gradient-to-br from-rose-50 to-pink-100 dark:from-rose-900/30 dark:to-pink-900/30',
    iconWrapper: 'bg-rose-500 dark:bg-rose-600',
    icon: Layers,
    iconColor: 'text-white',
    isNew: true,
    buttonText: 'Open'
  },
  {
    id: 'train-advanced',
    name: 'Train',
    description: 'Teach Krea to replicate your style, products, or characters.',
    backgroundColor: 'bg-gradient-to-br from-indigo-50 to-blue-100 dark:from-indigo-900/30 dark:to-blue-900/30',
    iconWrapper: 'bg-indigo-500 dark:bg-indigo-600',
    icon: BookOpen,
    iconColor: 'text-white',
    isNew: false,
    buttonText: 'Open'
  }
];

export const TOOLS: Tool[] = [
  {
    id: 'image-editor',
    name: 'Image Editor',
    description: 'Advanced image editing tools',
    icon: 'edit-image',
    category: 'image',
    isNew: true
  },
  {
    id: 'video-editor',
    name: 'Video Editor',
    description: 'Professional video editing suite',
    icon: 'video-edit',
    category: 'video'
  },
  {
    id: 'prompt-builder',
    name: 'Prompt Builder',
    description: 'Build better prompts for AI models',
    icon: 'prompt',
    category: 'text',
    isNew: true
  }
];

export const THEME_COLORS = {
  light: {
    primary: 'hsl(221.2 83.2% 53.3%)',
    secondary: 'hsl(210 40% 96%)',
    background: 'hsl(0 0% 100%)',
    foreground: 'hsl(222.2 84% 4.9%)',
    muted: 'hsl(210 40% 96%)',
    accent: 'hsl(210 40% 96%)',
    border: 'hsl(214.3 31.8% 91.4%)',
  },
  dark: {
    primary: 'hsl(217.2 91.2% 59.8%)',
    secondary: 'hsl(217.2 32.6% 17.5%)',
    background: 'hsl(222.2 84% 4.9%)',
    foreground: 'hsl(210 40% 98%)',
    muted: 'hsl(217.2 32.6% 17.5%)',
    accent: 'hsl(217.2 32.6% 17.5%)',
    border: 'hsl(217.2 32.6% 17.5%)',
  }
};