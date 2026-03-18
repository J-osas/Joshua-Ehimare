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
        <div className="h-[220px] bg-[#1A1A1A] border-2 border-dashed border-accent flex items-center justify-center overflow-hidden">
          <span className="text-accent font-mono uppercase tracking-widest">
            [ Project Image ]
          </span>
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
            {project.desc}
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
