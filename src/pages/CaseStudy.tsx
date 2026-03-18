import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/content';
import { motion } from 'motion/react';

export function CaseStudy() {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);

  if (!project) return <div className="p-20 text-center">Project not found</div>;

  return (
    <div className="px-6">
      <header className="py-20 max-w-7xl mx-auto">
        <Link to="/work" className="text-accent font-mono uppercase tracking-widest mb-12 block">
          ← Back to Work
        </Link>
        <h1 className="text-7xl md:text-[8vw] font-display font-bold leading-none mb-12 tracking-tighter">
          {project.title}
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-y border-border">
          <div>
            <span className="block text-xs font-mono text-secondary-text uppercase tracking-widest mb-2">Category</span>
            <span className="text-lg font-display font-medium">{project.category}</span>
          </div>
          <div>
            <span className="block text-xs font-mono text-secondary-text uppercase tracking-widest mb-2">Year</span>
            <span className="text-lg font-display font-medium">{project.year}</span>
          </div>
          <div className="col-span-2">
            <span className="block text-xs font-mono text-secondary-text uppercase tracking-widest mb-2">Tags</span>
            <div className="flex flex-wrap gap-2">
              {project.tags.map(tag => (
                <span key={tag} className="px-3 py-1 bg-surface border border-border text-xs font-mono uppercase tracking-widest">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </header>

      <section className="max-w-7xl mx-auto mb-32">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full aspect-video object-cover border border-border"
          referrerPolicy="no-referrer"
        />
      </section>

      <section className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-20 mb-32">
        <div className="md:col-span-1">
          <h2 className="text-2xl font-display font-bold uppercase tracking-widest text-accent mb-4">Overview</h2>
        </div>
        <div className="md:col-span-2">
          <p className="text-2xl text-secondary-text leading-relaxed">
            {project.description}
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-20 mb-32">
        <div className="md:col-span-1">
          <h2 className="text-2xl font-display font-bold uppercase tracking-widest text-accent mb-4">The Challenge</h2>
        </div>
        <div className="md:col-span-2">
          <p className="text-xl text-secondary-text leading-relaxed">
            {project.challenge}
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-20 mb-32">
        <div className="md:col-span-1">
          <h2 className="text-2xl font-display font-bold uppercase tracking-widest text-accent mb-4">Process</h2>
        </div>
        <div className="md:col-span-2">
          <p className="text-xl text-secondary-text leading-relaxed">
            {project.process}
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-20 mb-32">
        <div className="md:col-span-1">
          <h2 className="text-2xl font-display font-bold uppercase tracking-widest text-accent mb-4">Solution</h2>
        </div>
        <div className="md:col-span-2">
          <p className="text-xl text-secondary-text leading-relaxed">
            {project.solution}
          </p>
        </div>
      </section>

      {project.results && (
        <section className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-20 mb-32">
          <div className="md:col-span-1">
            <h2 className="text-2xl font-display font-bold uppercase tracking-widest text-accent mb-4">Results</h2>
          </div>
          <div className="md:col-span-2">
            <p className="text-xl text-secondary-text leading-relaxed">
              {project.results}
            </p>
          </div>
        </section>
      )}
    </div>
  );
}
