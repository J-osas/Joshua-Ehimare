export interface Project {
  num: string;
  title: string;
  category: string;
  slug: string;
  desc: string;
  image: string;
  url: string;
  isLive: boolean;
  isFigma: boolean;
  year: string;
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
    num: "01",
    title: "Manifield Solicitors",
    category: "WEB DESIGN",
    slug: "manifield-solicitors",
    desc: "A professional web presence for a modern law firm.",
    image: "/images/projects/manifield-solicitors.webp",
    url: "https://manifieldsolicitors.com/",
    isLive: true,
    isFigma: false,
    year: "2024"
  },
  {
    num: "02",
    title: "FocusPoint",
    category: "UI/UX DESIGN",
    slug: "focuspoint",
    desc: "E-commerce UI design for a premium camera and gear store.",
    image: "/images/projects/focuspoint.webp",
    url: "https://www.figma.com/design/hniywPtcQGw0kcHvFjxGoV/FocusPoint?node-id=1-1059&t=sNo3BGGQlIufOh0m-1",
    isLive: false,
    isFigma: true,
    year: "2024"
  },
  {
    num: "03",
    title: "TechBridge Africa",
    category: "UI/UX DESIGN",
    slug: "techbridge-africa",
    desc: "A bold mobile platform connecting African tech talent and learners.",
    image: "/images/projects/techbridge-africa.webp",
    url: "https://www.figma.com/design/dJJql7G1xuIwPT5qUFqacK/TechBridge-Africa?node-id=0-1&t=geZRktYeKs0So1Ly-1",
    isLive: false,
    isFigma: true,
    year: "2024"
  },
  {
    num: "04",
    title: "Chinonso Nelson",
    category: "WEB DESIGN",
    slug: "chinonso-nelson",
    desc: "Personal brand website for a marketing strategist.",
    image: "/images/projects/chinonso-nelson.webp",
    url: "https://chinonsonelson.com/",
    isLive: true,
    isFigma: false,
    year: "2024"
  },
  {
    num: "05",
    title: "Mapway Real Estate",
    category: "WEB DESIGN",
    slug: "mapway-real-estate",
    desc: "Property investment platform for a growing Nigerian real estate brand.",
    image: "/images/projects/mapway-real-estate.webp",
    url: "https://mapway.com.ng/",
    isLive: true,
    isFigma: false,
    year: "2024"
  },
  {
    num: "06",
    title: "Porter and Bell",
    category: "WEB DESIGN",
    slug: "porter-and-bell",
    desc: "A vibrant web presence for Lagos-based cleaning agency.",
    image: "/images/projects/porter-and-bell.webp",
    url: "https://porterandbell.ng/",
    isLive: true,
    isFigma: false,
    year: "2024"
  },
  {
    num: "07",
    title: "Apprisma AI",
    category: "WEB DESIGN",
    slug: "apprisma-ai",
    desc: "Performance-driven website for an AI-powered marketing agency.",
    image: "/images/projects/apprisma-ai.jpg",
    url: "https://apprisma.co.uk/",
    isLive: true,
    isFigma: false,
    year: "2024"
  },
  {
    num: "08",
    title: "Birdie NG",
    category: "WEB DESIGN",
    slug: "birdie-ng",
    desc: "Domestic services platform connecting skilled providers with homes.",
    image: "/images/projects/birdie-ng.jpg.jpg",
    url: "https://birdie.ng/",
    isLive: true,
    isFigma: false,
    year: "2024"
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
