import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { client, urlFor } from '../lib/sanity';

const query = `*[_type == "project"] | order(order asc)[0...3] {
  _id,
  title,
  "slug": slug.current,
  category,
  description,
  image
}`;

export function Home() {
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    client.fetch(query)
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).style.opacity = '1';
          (entry.target as HTMLElement).style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center px-[var(--page-padding)] relative py-20">
        <div className="max-w-[1400px] mx-auto w-full">
          <div className="font-mono text-[11px] text-secondary-text tracking-[0.2em] mb-8 animate-fade-in opacity-0 [animation-fill-mode:forwards] [animation-delay:0.1s]">
            DESIGNER & CREATIVE STRATEGIST — LAGOS / WORLDWIDE
          </div>
          
          <h1 className="font-display text-[clamp(48px,10vw,160px)] leading-[0.9] font-bold tracking-[-0.04em] mb-12">
            <motion.span 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="block"
            >
              Crafting bold
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="block"
            >
              digital identities
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="block text-accent"
            >
              that convert.
            </motion.span>
          </h1>

          <div className="w-full h-px bg-border mb-12" />

          <div className="flex flex-col md:flex-row justify-between items-end gap-12">
            <div className="max-w-[500px] font-serif italic text-[24px] md:text-[28px] leading-[1.3] text-secondary-text">
              I'm Joshua — a creative designer who combines brand strategy, SEO, and web design to help businesses stand out and scale.
            </div>
            <div className="flex flex-col items-end gap-4">
              <span className="font-mono text-[11px] text-accent tracking-[0.2em] animate-bounce">
                Scroll to explore ↓
              </span>
              <span className="font-mono text-[11px] text-text-3 tracking-[0.2em]">
                20+ PROJECTS DELIVERED
              </span>
            </div>
          </div>
        </div>

        <div className="absolute right-[var(--page-padding)] top-1/2 -translate-y-1/2 vertical-text font-mono text-[11px] text-text-3 tracking-[0.3em] hidden lg:block">
          joshuaehimare.com
        </div>
      </section>

      {/* Marquee */}
      <div className="py-10 border-y border-border overflow-hidden bg-surface">
        <div className="flex whitespace-nowrap animate-marquee">
          {[1, 2].map((i) => (
            <div key={i} className="flex items-center gap-10 pr-10">
              <span className="font-display text-[40px] md:text-[60px] font-bold uppercase">Web Design</span>
              <span className="text-accent text-4xl">✦</span>
              <span className="font-display text-[40px] md:text-[60px] font-bold uppercase">Brand Identity</span>
              <span className="text-accent text-4xl">✦</span>
              <span className="font-display text-[40px] md:text-[60px] font-bold uppercase">SEO Strategy</span>
              <span className="text-accent text-4xl">✦</span>
              <span className="font-display text-[40px] md:text-[60px] font-bold uppercase">Digital Marketing</span>
              <span className="text-accent text-4xl">✦</span>
            </div>
          ))}
        </div>
      </div>

      {/* Selected Work */}
      <section className="py-[120px] px-[var(--page-padding)] max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
          <div>
            <span className="font-mono text-[11px] text-accent tracking-[0.2em] mb-4 block">SELECTED WORK</span>
            <h2 className="font-display text-[clamp(40px,6vw,80px)] font-bold leading-none">Recent Projects</h2>
          </div>
          <Link to="/work" className="font-mono text-[11px] text-secondary-text uppercase tracking-[0.15em] no-underline hover:text-accent transition-colors">
            View all work →
          </Link>
        </div>

        <div className="flex flex-col border-t border-border">
          {loading ? (
            <div className="py-20 text-center font-mono text-[11px] text-text-3 uppercase tracking-widest">Loading projects...</div>
          ) : (
            projects.map((project, idx) => (
              <Link 
                key={project.slug} 
                to={`/work/${project.slug}`} 
                className="group flex flex-col md:flex-row justify-between items-center py-12 border-b border-border no-underline transition-all duration-500 hover:bg-surface/50 px-4"
              >
                <div className="flex items-center gap-8 md:gap-16 w-full md:w-auto">
                  <span className="font-mono text-[14px] text-text-3">{(idx + 1).toString().padStart(2, '0')}</span>
                  <h3 className="font-display text-[clamp(28px,4vw,52px)] font-semibold transition-transform duration-500 group-hover:translate-x-4">
                    {project.title} <span className="text-accent opacity-0 group-hover:opacity-100 transition-opacity ml-4">→</span>
                  </h3>
                </div>
                <div className="flex items-center gap-12 mt-8 md:mt-0 w-full md:w-auto justify-between md:justify-end">
                  <span className="font-mono text-[11px] text-secondary-text uppercase tracking-[0.2em]">{project.category}</span>
                  <div className="w-[120px] h-[80px] md:w-[200px] md:h-[120px] bg-bg-3 overflow-hidden rounded-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden sm:block">
                    {project.image && (
                      <img 
                        src={urlFor(project.image).width(400).url()} 
                        alt={project.title} 
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                      />
                    )}
                  </div>
                </div>
              </Link>
            ))
          )}
        </div>
      </section>

      {/* About Teaser */}
      <section className="py-[120px] px-[var(--page-padding)] bg-surface flex flex-col lg:flex-row gap-20 items-center">
        <div className="w-full lg:w-1/2 relative">
          <div className="aspect-[4/5] bg-bg-3 rounded-[2px] overflow-hidden">
            <img
              src="/images/joshua-ehimare.jpg"
              alt="Joshua Ehimare"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="absolute -bottom-10 -right-10 hidden md:flex gap-4">
            <div className="bg-accent text-background p-6 rounded-[2px] font-display font-bold text-center">
              <span className="block text-4xl">6+</span>
              <span className="text-[10px] uppercase tracking-widest">Years Exp.</span>
            </div>
            <div className="bg-foreground text-background p-6 rounded-[2px] font-display font-bold text-center">
              <span className="block text-4xl">20+</span>
              <span className="text-[10px] uppercase tracking-widest">Projects</span>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <span className="font-mono text-[11px] text-accent tracking-[0.2em] mb-4 block">ABOUT ME</span>
          <h2 className="font-display text-[clamp(36px,5vw,64px)] font-bold leading-[1.1] mb-8">
            Design craft meets strategic thinking.
          </h2>
          <div className="space-y-6 text-secondary-text text-lg md:text-xl leading-relaxed">
            <p>I'm Joshua Ehimare — a designer and creative strategist based in Lagos. I help brands build identities that are impossible to ignore, websites that convert, and digital strategies that grow.</p>
            <p>My work sits at the intersection of aesthetics and performance — because great design should be beautiful AND effective.</p>
            <Link to="/about" className="inline-block font-mono text-[11px] text-accent uppercase tracking-[0.2em] no-underline border-b border-accent pb-2 mt-4 hover:text-foreground hover:border-foreground transition-all">
              More about me →
            </Link>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-[120px] px-[var(--page-padding)] text-center border-y border-border">
        <h2 className="font-serif italic text-[clamp(32px,5vw,72px)] leading-[1.2] max-w-[1000px] mx-auto mb-20">
          "Work that doesn't just look good — it performs."
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 max-w-[1200px] mx-auto">
          {[
            { num: '20', label: 'Projects Completed' },
            { num: '6', label: 'Years Experience' },
            { num: '100', label: 'Client Satisfaction' },
            { num: '15', label: 'Brands Built' }
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center">
              <span className="font-display text-[clamp(40px,5vw,80px)] font-bold text-accent mb-2">{stat.num}</span>
              <span className="font-mono text-[10px] text-text-3 uppercase tracking-widest">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Insights */}
      <section className="py-[120px] px-[var(--page-padding)] max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
          <div>
            <span className="font-mono text-[11px] text-accent tracking-[0.2em] mb-4 block">FROM THE BLOG</span>
            <h2 className="font-display text-[clamp(40px,6vw,80px)] font-bold leading-none">Latest Insights</h2>
          </div>
          <Link to="/blog" className="font-mono text-[11px] text-secondary-text uppercase tracking-[0.15em] no-underline hover:text-accent transition-colors">
            Read all articles →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="col-span-2 py-20 text-center font-mono text-[11px] text-text-3 uppercase tracking-widest">Loading insights...</div>
        </div>
      </section>
    </div>
  );
}
