import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';
import { projects } from '../data/content';

const categories = ["ALL", "WEB DESIGN", "UI/UX DESIGN"];

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
              <span className="font-mono text-[11px] text-text-2 block mb-1">— {projects.length.toString().padStart(2, '0')} PROJECTS</span>
              <span className="font-mono text-[11px] text-text-2 block">2024</span>
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
                    <div className="relative w-full aspect-video overflow-hidden 
                      rounded-[4px] border border-[var(--border)] 
                      group-hover:border-[rgba(255,77,0,0.4)] 
                      transition-colors duration-300">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-top
                          grayscale group-hover:grayscale-0
                          scale-100 group-hover:scale-105
                          transition-all duration-500 ease-out"
                        referrerPolicy="no-referrer"
                      />
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
