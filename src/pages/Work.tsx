import { useState } from 'react';
import { projects } from '../data/content';
import { ProjectCard } from '../components/ProjectCard';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

const categories = ['All', 'Branding', 'Web Design', 'SEO'];

export function Work() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="px-6 py-20 max-w-7xl mx-auto">
      <header className="mb-20">
        <h1 className="text-7xl md:text-9xl font-display font-bold mb-12 tracking-tighter">
          OUR <span className="text-accent">WORK</span>
        </h1>
        <div className="flex flex-wrap gap-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-8 py-3 font-mono text-sm uppercase tracking-widest border transition-all duration-300",
                activeCategory === cat 
                  ? "bg-accent border-accent text-background" 
                  : "border-border text-secondary-text hover:border-accent hover:text-accent"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </header>

      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 gap-12"
      >
        {filteredProjects.map((project) => (
          <motion.div
            layout
            key={project.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
