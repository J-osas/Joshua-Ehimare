import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

const projects = [
  {
    num: "01", title: "Vibrant Brand Identity", 
    category: "BRANDING", slug: "vibrant-brand-identity",
    desc: "Complete visual overhaul for a modern tech startup.",
    image: "https://picsum.photos/seed/vibrant/800/450"
  },
  {
    num: "02", title: "Nexus Digital Experience",
    category: "WEB DESIGN", slug: "nexus-digital-experience",
    desc: "Immersive e-commerce for a high-end furniture brand.",
    image: "https://picsum.photos/seed/nexus/800/450"
  },
  {
    num: "03", title: "Orbit SEO Strategy",
    category: "SEO", slug: "orbit-seo-strategy",
    desc: "Data-driven content strategy for a SaaS platform.",
    image: "https://picsum.photos/seed/orbit/800/450"
  },
  {
    num: "04", title: "Pulse Brand System",
    category: "BRANDING", slug: "pulse-brand-system",
    desc: "Brand identity and guidelines for a fintech startup.",
    image: "https://picsum.photos/seed/pulse/800/450"
  },
  {
    num: "05", title: "Horizon Web Presence",
    category: "WEB DESIGN", slug: "horizon-web-presence",
    desc: "Conversion-focused website for a B2B software company.",
    image: "https://picsum.photos/seed/horizon/800/450"
  },
  {
    num: "06", title: "Apex Growth Strategy",
    category: "STRATEGY", slug: "apex-growth-strategy",
    desc: "Full digital strategy for a fast-scaling e-commerce brand.",
    image: "https://picsum.photos/seed/apex/800/450"
  }
];

const categories = ["ALL", "BRANDING", "WEB DESIGN", "SEO", "STRATEGY"];

export function Work() {
  const [activeFilter, setActiveFilter] = useState("ALL");

  useEffect(() => {
    document.title = "Work — Joshua Ehimare | Selected Projects";
  }, []);

  const filteredProjects = activeFilter === "ALL" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="w-full bg-bg text-text overflow-x-hidden selection:bg-accent selection:text-white">
      
      {/* SECTION 1 — PAGE HERO */}
      <section className="min-h-[100svh] relative flex flex-col pt-[140px] pb-[80px] px-[var(--page-padding)]">
        <div className="w-full flex-grow flex flex-col">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-mono text-[11px] text-accent uppercase tracking-[0.15em] mb-8 block text-left"
          >
            SELECTED WORK
          </motion.span>

          <h1 className="font-display text-[clamp(56px,8vw,110px)] font-bold leading-[1.0] tracking-[-0.02em] text-left">
            <motion.span 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="block text-text"
            >
              Work &
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="block text-accent italic"
            >
              Projects.
            </motion.span>
          </h1>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-full h-px bg-border my-10"
          />

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65 }}
            className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10"
          >
            <p className="font-serif italic text-[clamp(17px,1.8vw,24px)] text-text-2 leading-[1.7] max-w-[55%] text-left">
              A selection of brand, web, and strategy projects.
            </p>

            <div className="text-right">
              <span className="font-mono text-[11px] text-text-2 block mb-1">— 06 PROJECTS</span>
              <span className="font-mono text-[11px] text-text-2 block">2019–2024</span>
            </div>
          </motion.div>
        </div>

        {/* Vertical URL */}
        <div className="absolute bottom-10 right-[6vw] rotate-90 origin-right hidden lg:block">
          <span className="font-mono text-[10px] text-text-3 tracking-[0.3em] uppercase">
            joshuaehimare.com
          </span>
        </div>
      </section>

      {/* SECTION 2 — FILTER BAR */}
      <div className="sticky top-[60px] md:top-[72px] z-50 bg-bg-2 border-b border-border py-4 px-[var(--page-padding)]">
        <div className="flex flex-wrap gap-x-8 gap-y-4 items-center">
          {categories.map((cat) => (
            <button 
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={cn(
                "font-mono text-[11px] uppercase tracking-[0.1em] transition-all duration-300 border-b-2 pb-1",
                activeFilter === cat 
                  ? "text-accent border-accent" 
                  : "text-text-2 border-transparent hover:text-text"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* SECTION 3 — PROJECT LIST */}
      <section className="px-[var(--page-padding)] pb-[100px]">
        <div className="flex flex-col">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group border-t border-border last:border-b py-[48px] relative"
              >
                <Link 
                  to={`/work/${project.slug}`}
                  className="flex flex-col lg:flex-row justify-between items-center gap-[48px] no-underline transition-all duration-300 hover:bg-bg-2 hover:px-[var(--page-padding)] hover:mx-[calc(-1*var(--page-padding))] w-full"
                >
                  {/* LEFT side (50%) */}
                  <div className="w-full lg:w-1/2 flex flex-col">
                    <span className="font-mono text-[11px] text-text-3 mb-3 block">
                      {project.num}
                    </span>
                    <h2 className="font-display text-[clamp(26px,3vw,48px)] text-text mb-2 font-bold group-hover:text-accent transition-colors flex items-center">
                      {project.title}
                      <span className="inline-block opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ml-4">
                        →
                      </span>
                    </h2>
                    <span className="font-mono text-[11px] text-accent uppercase tracking-[0.15em] mb-4 block">
                      {project.category}
                    </span>
                    <p className="font-sans text-[14px] text-text-2 leading-[1.6] max-w-[400px]">
                      {project.desc}
                    </p>
                  </div>

                  {/* RIGHT side (45%) */}
                  <div className="w-full lg:w-[45%]">
                    <div className="aspect-video bg-bg-3 border border-border rounded-[4px] overflow-hidden flex items-center justify-center relative group-hover:border-accent/40 transition-colors duration-300">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-bg-3/20 opacity-0 group-hover:opacity-0 transition-opacity">
                        <span className="font-mono text-[11px] text-text-3 uppercase tracking-widest">
                          [ Project Image ]
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

    </div>
  );
}
