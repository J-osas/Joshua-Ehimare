import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/content';
import { motion } from 'framer-motion';

export function CaseStudy() {
  const { slug } = useParams();
  const projectIndex = projects.findIndex(p => p.slug === slug);
  const project = projects[projectIndex];
  
  const prevProject = projectIndex > 0 ? projects[projectIndex - 1] : null;
  const nextProject = projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null;

  if (!project) return <div className="p-20 text-center font-display text-2xl">Project not found</div>;

  return (
    <div className="w-full bg-bg text-text selection:bg-accent selection:text-white">
      {/* Hero Section */}
      <section className="pt-[140px] pb-[80px] px-[var(--page-padding)]">
        <div className="max-w-[1400px] mx-auto">
          <Link to="/work" className="inline-block font-mono text-[11px] text-accent tracking-[0.2em] mb-12 no-underline hover:translate-x-[-8px] transition-transform">
            ← BACK TO WORK
          </Link>
          
          <div className="relative w-full aspect-video overflow-hidden rounded-[4px] mb-16">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-top"
              referrerPolicy="no-referrer"
            />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-8">
              <span className="font-mono text-[11px] text-accent uppercase tracking-[0.2em] mb-4 block">
                {project.category} — {project.year}
              </span>
              <h1 className="font-display text-[clamp(48px,7vw,100px)] font-bold leading-[1.0] tracking-[-0.02em] mb-8">
                {project.title}
              </h1>
              <p className="font-serif italic text-[clamp(20px,2.5vw,32px)] text-text-2 leading-[1.4] max-w-[800px] mb-10">
                {project.desc}
              </p>

              {project.isFigma && (
                <a href={project.url} target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-mono 
                    text-[12px] uppercase tracking-[0.1em] 
                    text-[var(--accent)] border border-[var(--accent)] 
                    px-5 py-3 rounded-[2px]
                    hover:bg-[var(--accent)] hover:text-[#0A0A0A] 
                    transition-all duration-200 no-underline">
                  View Figma Design →
                </a>
              )}

              {project.isLive && (
                <a href={project.url} target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-mono 
                    text-[12px] uppercase tracking-[0.1em]
                    text-[var(--accent)] border border-[var(--accent)] 
                    px-5 py-3 rounded-[2px]
                    hover:bg-[var(--accent)] hover:text-[#0A0A0A] 
                    transition-all duration-200 no-underline">
                  Visit Live Site →
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Strip */}
      <section className="w-full border-t border-border mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Previous */}
          {prevProject ? (
            <Link 
              to={`/work/${prevProject.slug}`}
              className="group flex flex-col p-12 border-b md:border-b-0 md:border-r border-border no-underline hover:bg-bg-2 transition-colors"
            >
              <span className="font-mono text-[11px] text-text-2 uppercase tracking-[0.2em] mb-4">
                ← PREVIOUS PROJECT
              </span>
              <h3 className="font-display text-[24px] text-text font-bold group-hover:text-accent transition-colors">
                {prevProject.title}
              </h3>
            </Link>
          ) : (
            <div className="p-12 border-b md:border-b-0 md:border-r border-border opacity-20">
              <span className="font-mono text-[11px] text-text-2 uppercase tracking-[0.2em] mb-4">
                NO PREVIOUS PROJECT
              </span>
            </div>
          )}

          {/* Next */}
          {nextProject ? (
            <Link 
              to={`/work/${nextProject.slug}`}
              className="group flex flex-col p-12 text-right no-underline hover:bg-bg-2 transition-colors"
            >
              <span className="font-mono text-[11px] text-text-2 uppercase tracking-[0.2em] mb-4">
                NEXT PROJECT →
              </span>
              <h3 className="font-display text-[24px] text-text font-bold group-hover:text-accent transition-colors">
                {nextProject.title}
              </h3>
            </Link>
          ) : (
            <div className="p-12 text-right opacity-20">
              <span className="font-mono text-[11px] text-text-2 uppercase tracking-[0.2em] mb-4">
                NO NEXT PROJECT
              </span>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
