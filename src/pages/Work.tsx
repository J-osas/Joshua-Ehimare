import { useState } from 'react';
import { projects } from '../data/content';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';
import { Link } from 'react-router-dom';

const categories = ['All', 'Branding', 'Web Design', 'SEO Strategy'];

export function Work() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="w-full pt-[120px] pb-[100px] px-[var(--page-padding)]">
      <header className="max-w-[1400px] mx-auto mb-20">
        <span className="font-mono text-[11px] text-accent tracking-[0.2em] mb-4 block">PORTFOLIO</span>
        <h1 className="font-display text-[clamp(48px,8vw,120px)] font-bold leading-[0.9] tracking-[-0.04em] mb-12">
          Selected <span className="text-accent">Works</span>
        </h1>
        
        <div className="flex flex-wrap gap-4 md:gap-8 border-b border-border pb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "font-mono text-[11px] uppercase tracking-[0.2em] bg-transparent border-none cursor-pointer transition-colors duration-300 py-2",
                activeCategory === cat ? "text-accent border-b border-accent" : "text-secondary-text hover:text-foreground"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </header>

      <div className="max-w-[1400px] mx-auto flex flex-col">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link 
                to={`/case-study/${project.id}`} 
                className="group flex flex-col md:flex-row justify-between items-center py-16 border-b border-border no-underline transition-all duration-500 hover:bg-surface/50 px-4"
              >
                <div className="flex items-center gap-8 md:gap-16 w-full md:w-auto">
                  <span className="font-mono text-[14px] text-text-3">0{index + 1}</span>
                  <h3 className="font-display text-[clamp(28px,4vw,64px)] font-semibold transition-transform duration-500 group-hover:translate-x-4">
                    {project.title} <span className="text-accent opacity-0 group-hover:opacity-100 transition-opacity ml-4">→</span>
                  </h3>
                </div>
                <div className="flex items-center gap-12 mt-8 md:mt-0 w-full md:w-auto justify-between md:justify-end">
                  <div className="flex flex-col items-end">
                    <span className="font-mono text-[11px] text-secondary-text uppercase tracking-[0.2em]">{project.category}</span>
                    <span className="font-mono text-[10px] text-text-3 uppercase tracking-[0.1em] mt-1">{project.year || '2024'}</span>
                  </div>
                  <div className="w-[120px] h-[80px] md:w-[240px] md:h-[140px] bg-bg-3 overflow-hidden rounded-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden sm:block">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Philosophy Strip */}
      <div className="mt-[100px] py-12 border-y border-border overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          {[1, 2].map((i) => (
            <div key={i} className="flex items-center gap-10 pr-10">
              <span className="font-serif italic text-3xl text-secondary-text">Strategic Design</span>
              <span className="text-accent text-2xl">✦</span>
              <span className="font-serif italic text-3xl text-secondary-text">Digital Excellence</span>
              <span className="text-accent text-2xl">✦</span>
              <span className="font-serif italic text-3xl text-secondary-text">Brand Evolution</span>
              <span className="text-accent text-2xl">✦</span>
              <span className="font-serif italic text-3xl text-secondary-text">Creative Strategy</span>
              <span className="text-accent text-2xl">✦</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
