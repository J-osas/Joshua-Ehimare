import { motion, AnimatePresence } from 'motion/react';
import { projects, blogPosts } from '../data/content';
import { ProjectCard } from '../components/ProjectCard';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const services = ["Web Design", "Brand Identity", "SEO Strategy"];

export function Home() {
  const [serviceIndex, setServiceIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setServiceIndex((prev) => (prev + 1) % services.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="px-6">
      {/* Hero Section */}
      <section className="min-h-[100vh] flex flex-col justify-center max-w-7xl mx-auto py-20 relative">
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-7xl md:text-[10vw] font-display font-bold leading-[0.85] mb-12 tracking-tighter"
        >
          DESIGN THAT <br />
          <span className="text-accent italic">DEMANDS</span> <br />
          ATTENTION.
        </motion.h1>
        <div className="h-px w-full bg-accent mb-12" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
          <div className="space-y-8">
            <p className="text-xl md:text-2xl text-secondary-text max-w-xl leading-relaxed">
              I'm Joshua — a creative designer helping brands stand out, rank higher, and convert better.
            </p>
            <div className="h-8 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.p
                  key={services[serviceIndex]}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  className="text-accent font-mono text-xl uppercase tracking-widest"
                >
                  {services[serviceIndex]}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>
          <div className="hidden md:flex justify-end absolute bottom-20 right-0">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="text-accent font-mono text-sm uppercase tracking-widest vertical-text"
              style={{ writingMode: 'vertical-rl' }}
            >
              Scroll to explore ↓
            </motion.div>
          </div>
        </div>
      </section>

      {/* Selected Work */}
      <section className="py-32 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-20">
          <h2 className="text-5xl md:text-7xl font-display font-bold">
            Selected <span className="text-accent">Work</span>
          </h2>
          <Link to="/work" className="text-accent font-mono uppercase tracking-widest hover:underline underline-offset-8">
            View All Projects →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {projects.slice(0, 4).map((project, index) => (
            <div key={project.id} className={index % 2 === 1 ? 'md:mt-32' : ''}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </section>

      {/* About Teaser */}
      <section className="py-32 bg-surface -mx-6 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="border-l-4 border-accent pl-12 py-8">
            <span className="block text-accent font-mono text-6xl font-bold mb-4">01</span>
            <h3 className="text-4xl md:text-5xl font-display font-bold leading-tight">
              Strategic thinking <br /> meets bold design.
            </h3>
          </div>
          <div>
            <p className="text-xl text-secondary-text mb-8 leading-relaxed">
              I don't just make things look pretty. I combine design craft with strategic thinking — brand, SEO, and web, all working together to make your business impossible to ignore.
            </p>
            <Link to="/about" className="text-accent font-mono uppercase tracking-widest hover:underline underline-offset-8">
              More about me →
            </Link>
          </div>
        </div>
      </section>

      {/* Services Strip */}
      <section className="py-20 overflow-hidden border-y border-border">
        <div className="flex whitespace-nowrap gap-20 animate-marquee">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex gap-20 items-center">
              <span className="text-4xl md:text-6xl font-display font-bold uppercase">Web Design</span>
              <span className="w-4 h-4 bg-accent rounded-full" />
              <span className="text-4xl md:text-6xl font-display font-bold uppercase">Brand Identity</span>
              <span className="w-4 h-4 bg-accent rounded-full" />
              <span className="text-4xl md:text-6xl font-display font-bold uppercase">SEO Strategy</span>
              <span className="w-4 h-4 bg-accent rounded-full" />
              <span className="text-4xl md:text-6xl font-display font-bold uppercase">Digital Marketing</span>
              <span className="w-4 h-4 bg-accent rounded-full" />
            </div>
          ))}
        </div>
      </section>

      {/* Blog Teaser */}
      <section className="py-32 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-20">
          <h2 className="text-5xl md:text-7xl font-display font-bold">
            Latest <span className="text-accent">Insights</span>
          </h2>
          <Link to="/blog" className="text-accent font-mono uppercase tracking-widest hover:underline underline-offset-8">
            Read Blog →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {blogPosts.slice(0, 2).map((post) => (
            <Link key={post.id} to={`/blog/${post.slug}`} className="group">
              <div className="p-10 bg-surface border border-border group-hover:border-accent transition-colors">
                <span className="text-xs font-mono text-secondary-text uppercase tracking-widest mb-4 block">
                  {post.date} — {post.readingTime}
                </span>
                <h3 className="text-3xl font-display font-bold mb-4 group-hover:text-accent transition-colors">
                  {post.title}
                </h3>
                <p className="text-secondary-text mb-6 line-clamp-2">
                  {post.excerpt}
                </p>
                <span className="text-accent font-mono text-sm uppercase tracking-widest">
                  Read More →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
