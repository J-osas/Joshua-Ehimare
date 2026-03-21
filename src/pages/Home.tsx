import { motion, useInView } from 'motion/react';
import { Link } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import { client, urlFor } from '../lib/sanity';

const projectsQuery = `*[_type == "project"] | order(order asc)[0...3] {
  _id,
  title,
  "slug": slug.current,
  category,
  description,
  image
}`;

const postsQuery = `*[_type == "post"] | order(publishedAt desc)[0...2] {
  _id,
  title,
  "slug": slug.current,
  category,
  excerpt,
  publishedAt
}`;

// Fallback data when Sanity is not available
const fallbackProjects = [
  { _id: '1', title: 'Manifield Solicitors', slug: 'manifield-solicitors', category: 'WEB DESIGN', image: null },
  { _id: '2', title: 'Apprisma AI', slug: 'apprisma-ai', category: 'WEB DESIGN', image: null },
  { _id: '3', title: 'TechBridge Africa', slug: 'techbridge-africa', category: 'UI/UX DESIGN', image: null },
];

const fallbackPosts = [
  { _id: '1', title: 'Why Brand Strategy Matters More Than Ever', slug: 'brand-strategy-matters', category: 'Branding', excerpt: 'In a world saturated with choices, a strong brand strategy is your competitive advantage.', publishedAt: '2024-01-15' },
  { _id: '2', title: 'The Future of Web Design in 2024', slug: 'future-web-design-2024', category: 'Design', excerpt: 'Exploring the trends and technologies shaping the next generation of web experiences.', publishedAt: '2024-01-10' },
];

function CountUpNumber({ target, suffix = '' }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = target / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);
      return () => clearInterval(timer);
    }
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

export function Home() {
  const [projects, setProjects] = useState<any[]>(fallbackProjects);
  const [posts, setPosts] = useState<any[]>(fallbackPosts);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [projectsData, postsData] = await Promise.all([
          client.fetch(projectsQuery),
          client.fetch(postsQuery)
        ]);
        if (projectsData && projectsData.length > 0) {
          setProjects(projectsData);
        }
        if (postsData && postsData.length > 0) {
          setPosts(postsData);
        }
      } catch (err) {
        console.error('Error fetching data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="min-h-[calc(100svh-60px)] md:min-h-[calc(100svh-72px)] flex flex-col justify-center px-[6vw] relative py-20">
        {/* Radial glow bottom left */}
        <div 
          className="absolute bottom-0 left-0 w-[600px] h-[600px] pointer-events-none"
          style={{
            background: 'radial-gradient(circle at center, rgba(255,77,0,0.06) 0%, transparent 70%)',
          }}
        />
        
        <div className="max-w-[1400px] mx-auto w-full relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-mono text-[11px] text-secondary-text tracking-[0.2em] uppercase mb-8"
          >
            DESIGNER & CREATIVE STRATEGIST — LAGOS / WORLDWIDE
          </motion.div>
          
          <h1 className="font-display text-[clamp(56px,12vw,140px)] leading-[0.95] font-bold tracking-[-0.03em] mb-10">
            <motion.span 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="block text-foreground"
            >
              Crafting bold
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="block text-foreground"
            >
              digital identities
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="block text-accent italic"
            >
              that convert.
            </motion.span>
          </h1>

          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="w-full h-px bg-border my-10 origin-left" 
          />

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8"
          >
            <p className="max-w-[55%] font-serif italic text-[clamp(17px,2vw,24px)] leading-[1.4] text-secondary-text">
              I'm Joshua — a creative designer who combines brand strategy, SEO, and web design to help businesses stand out and scale.
            </p>
            <div className="flex flex-col items-start md:items-end gap-3 text-right">
              <span className="font-mono text-[11px] text-secondary-text tracking-[0.15em] animate-bounce">
                Scroll to explore ↓
              </span>
              <span className="font-mono text-[11px] text-secondary-text tracking-[0.15em] uppercase">
                20+ PROJECTS DELIVERED
              </span>
            </div>
          </motion.div>
        </div>

        {/* Vertical text */}
        <div className="absolute right-[6vw] bottom-20 vertical-text font-mono text-[10px] text-[#3A3530] tracking-[0.2em] hidden lg:block">
          joshuaehimare.com
        </div>
      </section>

      {/* Marquee Strip */}
      <div className="h-14 border-y border-border bg-surface overflow-hidden flex items-center">
        <div className="flex whitespace-nowrap animate-marquee">
          {[1, 2].map((i) => (
            <div key={i} className="flex items-center gap-8 pr-8">
              <span className="font-mono text-[11px] text-secondary-text uppercase tracking-[0.15em]">Web Design</span>
              <span className="text-accent">✦</span>
              <span className="font-mono text-[11px] text-secondary-text uppercase tracking-[0.15em]">Brand Identity</span>
              <span className="text-accent">✦</span>
              <span className="font-mono text-[11px] text-secondary-text uppercase tracking-[0.15em]">SEO Strategy</span>
              <span className="text-accent">✦</span>
              <span className="font-mono text-[11px] text-secondary-text uppercase tracking-[0.15em]">Digital Marketing</span>
              <span className="text-accent">✦</span>
              <span className="font-mono text-[11px] text-secondary-text uppercase tracking-[0.15em]">Creative Direction</span>
              <span className="text-accent">✦</span>
              <span className="font-mono text-[11px] text-secondary-text uppercase tracking-[0.15em]">UI Design</span>
              <span className="text-accent">✦</span>
              <span className="font-mono text-[11px] text-secondary-text uppercase tracking-[0.15em]">Content Strategy</span>
              <span className="text-accent">✦</span>
            </div>
          ))}
        </div>
      </div>

      {/* Selected Work */}
      <section className="py-[120px] px-[6vw] max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <span className="font-mono text-[11px] text-accent tracking-[0.2em] uppercase mb-4 block">SELECTED WORK</span>
            <h2 className="font-display text-[clamp(36px,5vw,64px)] font-bold leading-none">Recent Projects</h2>
          </div>
          <Link to="/work" className="font-mono text-[11px] text-secondary-text uppercase tracking-[0.15em] no-underline hover:text-accent transition-colors">
            View all work →
          </Link>
        </div>

        <div className="flex flex-col">
          {projects.map((project, idx) => (
            <Link 
              key={project._id || idx} 
              to={`/work/${project.slug}`} 
              className="group flex flex-col lg:flex-row justify-between items-start lg:items-center py-12 border-t border-border no-underline transition-all duration-300 hover:bg-surface px-4 -mx-4"
            >
              <div className="flex items-start lg:items-center gap-6 lg:gap-12 w-full lg:w-[55%]">
                <span className="font-mono text-[14px] text-[#3A3530] mt-2 lg:mt-0">
                  {(idx + 1).toString().padStart(2, '0')}
                </span>
                <div className="flex flex-col gap-3">
                  <h3 className="font-display text-[clamp(24px,4vw,48px)] font-semibold text-foreground group-hover:text-accent transition-colors duration-300">
                    {project.title}
                    <span className="text-accent opacity-0 group-hover:opacity-100 transition-opacity ml-4 inline-block group-hover:translate-x-1">→</span>
                  </h3>
                  <span className="font-mono text-[11px] text-accent uppercase tracking-[0.15em]">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="w-full lg:w-[40%] mt-6 lg:mt-0 flex justify-end">
                <div className="w-full max-w-[320px] aspect-video bg-[#181818] border border-border rounded group-hover:border-accent/40 transition-colors duration-300 overflow-hidden">
                  {project.image ? (
                    <img 
                      src={urlFor(project.image).width(640).url()} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="font-mono text-[11px] text-[#3A3530] uppercase">Preview</span>
                    </div>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* About Teaser */}
      <section className="py-[120px] px-[6vw] flex flex-col lg:flex-row gap-16 lg:gap-20 items-start">
        <div className="w-full lg:w-[45%] relative">
          <div className="aspect-[3/4] bg-[#181818] border border-accent/35 rounded overflow-hidden">
            <img
              src="/images/joshua-ehimare.jpeg"
              alt="Joshua Ehimare"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="flex gap-4 mt-6">
            <div className="bg-surface border border-border px-5 py-3 rounded">
              <span className="font-mono text-[11px] text-secondary-text uppercase tracking-[0.1em]">6+ Years Experience</span>
            </div>
            <div className="bg-surface border border-border px-5 py-3 rounded">
              <span className="font-mono text-[11px] text-secondary-text uppercase tracking-[0.1em]">20+ Projects Delivered</span>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[55%]">
          <span className="font-mono text-[11px] text-accent tracking-[0.2em] uppercase mb-6 block">ABOUT ME</span>
          <h2 className="font-display text-[clamp(28px,4vw,42px)] font-bold leading-[1.15] mb-8 border-l-4 border-accent pl-5">
            Design craft meets strategic thinking.
          </h2>
          <div className="space-y-5 text-secondary-text text-base leading-relaxed">
            <p>
              I'm Joshua Ehimare — a designer and creative strategist based in Lagos. I help brands build identities that are impossible to ignore, websites that convert, and digital strategies that grow.
            </p>
            <p>
              My work sits at the intersection of aesthetics and performance — because great design should be beautiful AND effective.
            </p>
            <p>
              Whether it's a complete brand overhaul or a high-converting landing page, I bring the same level of craft and strategic thinking to every project.
            </p>
          </div>
          <Link 
            to="/about" 
            className="inline-block font-mono text-[11px] text-accent uppercase tracking-[0.15em] no-underline mt-8 hover:text-foreground transition-colors"
          >
            More about me →
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-[100px] px-[6vw] bg-surface border-y border-border">
        <p className="font-serif italic text-[clamp(20px,3vw,32px)] text-secondary-text text-center max-w-[800px] mx-auto mb-16 leading-relaxed">
          "Work that doesn't just look good — it performs."
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 max-w-[1200px] mx-auto">
          {[
            { num: 20, suffix: '+', label: 'Projects Completed' },
            { num: 6, suffix: '+', label: 'Years Experience' },
            { num: 100, suffix: '%', label: 'Client Satisfaction' },
            { num: 15, suffix: '+', label: 'Brands Built' }
          ].map((stat, i) => (
            <div 
              key={i} 
              className={`flex flex-col items-center py-8 ${i > 0 ? 'md:border-l border-border' : ''} ${i === 2 ? 'border-l border-border md:border-l' : ''}`}
            >
              <span className="font-display text-[clamp(48px,6vw,72px)] font-bold text-accent mb-2">
                <CountUpNumber target={stat.num} suffix={stat.suffix} />
              </span>
              <span className="font-mono text-[11px] text-secondary-text uppercase tracking-[0.15em] text-center">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Latest Insights */}
      <section className="py-[120px] px-[6vw] max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <span className="font-mono text-[11px] text-accent tracking-[0.2em] uppercase mb-4 block">FROM THE BLOG</span>
            <h2 className="font-display text-[clamp(36px,5vw,64px)] font-bold leading-none">Latest Insights</h2>
          </div>
          <Link to="/blog" className="font-mono text-[11px] text-secondary-text uppercase tracking-[0.15em] no-underline hover:text-accent transition-colors">
            Read all articles →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <Link 
              key={post._id} 
              to={`/blog/${post.slug}`} 
              className="group p-9 bg-surface border border-border rounded no-underline transition-all duration-300 hover:border-accent/40 hover:-translate-y-1"
            >
              <span className="inline-block bg-accent/10 text-accent font-mono text-[10px] px-3 py-1.5 rounded-full mb-5 uppercase tracking-[0.15em]">
                {post.category}
              </span>
              <h3 className="font-display text-[22px] font-semibold mb-4 text-foreground group-hover:text-accent transition-colors">
                {post.title}
              </h3>
              <p className="text-secondary-text text-sm mb-6 line-clamp-2 leading-relaxed">
                {post.excerpt}
              </p>
              <div className="flex justify-between items-center pt-6 border-t border-border">
                <span className="font-mono text-[11px] text-[#3A3530] uppercase tracking-[0.1em]">
                  {post.publishedAt 
                    ? new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) 
                    : 'Recently'
                  }
                </span>
                <span className="font-mono text-[11px] text-accent uppercase tracking-[0.1em] group-hover:translate-x-1 transition-transform">
                  Read →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
