export interface Project {
  id: string;
  slug: string;
  title: string;
  client?: string;
  category: string;
  year: string;
  image: string;
  description: string;
  challenge: string;
  process: string;
  solution: string;
  results?: string;
  tags: string[];
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: string;
  date: string;
  readingTime: string;
  excerpt: string;
  content: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    id: '1',
    slug: 'vibrant-brand',
    title: 'Vibrant Brand Identity',
    client: 'Vibrant Energy',
    category: 'Branding',
    year: '2024',
    image: 'https://picsum.photos/seed/vibrant/1920/1080',
    description: 'A complete visual overhaul for a modern tech startup focusing on sustainable energy.',
    challenge: 'The brand felt dated and disconnected from its mission of clean energy.',
    process: 'We explored minimalist geometric shapes and a bold, high-contrast color palette.',
    solution: 'A dynamic identity system that scales across digital and physical touchpoints.',
    results: '25% increase in brand recognition within the first quarter.',
    tags: ['Brand Strategy', 'Visual Identity', 'Logo Design']
  },
  {
    id: '2',
    slug: 'nexus-web',
    title: 'Nexus Digital Experience',
    client: 'Nexus Furniture',
    category: 'Web Design',
    year: '2023',
    image: 'https://picsum.photos/seed/nexus/1920/1080',
    description: 'An immersive e-commerce platform for high-end furniture.',
    challenge: 'The previous site was slow and lacked the premium feel required for luxury goods.',
    process: 'Focusing on high-quality imagery and smooth transitions using Framer Motion.',
    solution: 'A headless Shopify build with a custom React frontend.',
    results: '40% improvement in conversion rate.',
    tags: ['E-commerce', 'UX/UI', 'React']
  },
  {
    id: '3',
    slug: 'orbit-seo',
    title: 'Orbit SEO Strategy',
    client: 'Orbit SaaS',
    category: 'SEO',
    year: '2024',
    image: 'https://picsum.photos/seed/orbit/1920/1080',
    description: 'Data-driven content strategy for a SaaS platform.',
    challenge: 'Organic traffic had plateaued despite regular content publishing.',
    process: 'In-depth keyword research and technical SEO audit.',
    solution: 'A revamped content architecture and internal linking strategy.',
    results: '150% increase in organic search traffic.',
    tags: ['Content Strategy', 'Technical SEO', 'Analytics']
  },
  {
    id: '4',
    slug: 'lumina-app',
    title: 'Lumina Mobile App',
    client: 'Lumina Health',
    category: 'App Design',
    year: '2023',
    image: 'https://picsum.photos/seed/lumina/1920/1080',
    description: 'A wellness tracking application designed for mental health awareness.',
    challenge: 'Users found existing health apps overwhelming and stressful to use.',
    process: 'User interviews and empathetic design workshops to identify core needs.',
    solution: 'A calming, minimalist interface with gentle notifications and progress tracking.',
    results: 'Reached 50k downloads in the first month with a 4.8 star rating.',
    tags: ['Mobile Design', 'UX Research', 'HealthTech']
  },
  {
    id: '5',
    slug: 'zenith-campaign',
    title: 'Zenith Marketing Campaign',
    client: 'Zenith Watches',
    category: 'Digital Marketing',
    year: '2024',
    image: 'https://picsum.photos/seed/zenith/1920/1080',
    description: 'A multi-channel digital campaign for the launch of a new luxury watch collection.',
    challenge: 'Breaking into a competitive market dominated by legacy brands.',
    process: 'Influencer partnerships combined with targeted social media advertising.',
    solution: 'A storytelling-driven campaign focusing on the craftsmanship and heritage.',
    results: 'Sold out the limited edition collection within 48 hours.',
    tags: ['Marketing', 'Social Media', 'Content Creation']
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'the-power-of-whitespace',
    title: 'The Power of Whitespace in Modern Design',
    category: 'Design',
    date: 'March 15, 2024',
    readingTime: '5 min read',
    excerpt: 'Why less is often more when it comes to creating high-impact digital experiences.',
    content: 'Whitespace is not empty space; it is a powerful design tool...',
    tags: ['Design Philosophy', 'Minimalism']
  },
  {
    id: '2',
    slug: 'seo-for-designers',
    title: 'SEO for Designers: Why Strategy Matters',
    category: 'Strategy',
    date: 'February 28, 2024',
    readingTime: '7 min read',
    excerpt: 'How to integrate SEO thinking into your design process without compromising aesthetics.',
    content: 'Design and SEO are often seen as separate disciplines...',
    tags: ['SEO', 'Strategy']
  },
  {
    id: '3',
    slug: 'future-of-branding',
    title: 'The Future of Branding in an AI World',
    category: 'Branding',
    date: 'January 10, 2024',
    readingTime: '6 min read',
    excerpt: 'How artificial intelligence is reshaping the way we think about brand identity and creation.',
    content: 'AI is changing everything, and branding is no exception...',
    tags: ['AI', 'Branding', 'Future']
  }
];
