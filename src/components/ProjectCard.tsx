import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Project } from '../data/content';

export function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="group relative bg-surface border border-border overflow-hidden"
    >
      <Link to={`/work/${project.slug}`}>
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="p-8">
          <div className="flex justify-between items-start mb-4">
            <span className="text-xs font-mono text-accent uppercase tracking-widest">
              {project.category}
            </span>
            <span className="text-xs font-mono text-secondary-text">
              {project.year}
            </span>
          </div>
          <h3 className="text-3xl font-display font-bold mb-2 group-hover:text-accent transition-colors">
            {project.title}
          </h3>
          <p className="text-secondary-text text-sm line-clamp-2">
            {project.description}
          </p>
        </div>
        <div className="absolute inset-0 bg-accent/90 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
          <span className="text-background font-mono font-bold uppercase tracking-widest text-lg">
            View Case Study →
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
