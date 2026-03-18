import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/content';
import { motion } from 'motion/react';

export function CaseStudy() {
  const { slug } = useParams();
  const projectIndex = projects.findIndex(p => p.slug === slug);
  const project = projects[projectIndex];
  const nextProject = projects[(projectIndex + 1) % projects.length];

  if (!project) return <div className="p-20 text-center font-display text-2xl">Project not found</div>;

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="pt-[120px] pb-[80px] px-[var(--page-padding)]">
        <div className="max-w-[1400px] mx-auto">
          <Link to="/work" className="inline-block font-mono text-[11px] text-accent tracking-[0.2em] mb-12 no-underline hover:translate-x-[-8px] transition-transform">
            ← BACK TO ALL WORK
          </Link>
          <h1 className="font-display text-[clamp(48px,10vw,160px)] font-bold leading-[0.85] tracking-[-0.04em] mb-16">
            {project.title.split(' ').map((word, i) => (
              <span key={i} className="block">{word}</span>
            ))}
          </h1>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-y border-border">
            <div className="space-y-2">
              <span className="block font-mono text-[10px] text-text-3 uppercase tracking-widest">CLIENT</span>
              <p className="font-display text-xl font-semibold">{project.client || 'Internal Project'}</p>
            </div>
            <div className="space-y-2">
              <span className="block font-mono text-[10px] text-text-3 uppercase tracking-widest">SERVICES</span>
              <p className="font-display text-xl font-semibold">{project.category}</p>
            </div>
            <div className="space-y-2">
              <span className="block font-mono text-[10px] text-text-3 uppercase tracking-widest">YEAR</span>
              <p className="font-display text-xl font-semibold">{project.year}</p>
            </div>
            <div className="space-y-2">
              <span className="block font-mono text-[10px] text-text-3 uppercase tracking-widest">LINK</span>
              <a href="#" className="block font-display text-xl font-semibold text-accent no-underline hover:underline">Visit Site ↗</a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Image */}
      <section className="px-[var(--page-padding)] mb-32">
        <div className="max-w-[1400px] mx-auto aspect-[16/9] bg-bg-3 overflow-hidden rounded-[2px]">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
            referrerPolicy="no-referrer"
          />
        </div>
      </section>

      {/* Overview */}
      <section className="px-[var(--page-padding)] mb-32">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <h2 className="font-display text-4xl font-bold tracking-tight">The Overview.</h2>
          </div>
          <div className="lg:col-span-8">
            <p className="font-serif italic text-2xl md:text-3xl text-secondary-text leading-relaxed mb-8">
              {project.description}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
              <div className="space-y-6">
                <h3 className="font-mono text-[11px] text-accent uppercase tracking-widest">THE CHALLENGE</h3>
                <p className="text-secondary-text leading-relaxed">
                  {project.challenge || "Creating a cohesive digital identity that resonates with a modern audience while maintaining core brand values and accessibility standards."}
                </p>
              </div>
              <div className="space-y-6">
                <h3 className="font-mono text-[11px] text-accent uppercase tracking-widest">THE SOLUTION</h3>
                <p className="text-secondary-text leading-relaxed">
                  {project.solution || "A minimalist design language coupled with high-performance technology to create a seamless user experience across all touchpoints."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section - Visual Grid */}
      <section className="px-[var(--page-padding)] mb-32">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="aspect-square bg-bg-3 rounded-[2px] overflow-hidden">
            <img src={`https://picsum.photos/seed/${project.slug}-1/1000/1000`} alt="Process 1" className="w-full h-full object-cover grayscale" referrerPolicy="no-referrer" />
          </div>
          <div className="aspect-square bg-bg-3 rounded-[2px] overflow-hidden">
            <img src={`https://picsum.photos/seed/${project.slug}-2/1000/1000`} alt="Process 2" className="w-full h-full object-cover grayscale" referrerPolicy="no-referrer" />
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="px-[var(--page-padding)] py-32 bg-surface border-y border-border mb-32">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <h2 className="font-display text-4xl font-bold tracking-tight">The Results.</h2>
          </div>
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="space-y-2">
                <span className="block font-display text-6xl font-bold text-accent">45%</span>
                <p className="font-mono text-[10px] text-text-3 uppercase tracking-widest">INCREASE IN CONVERSION</p>
              </div>
              <div className="space-y-2">
                <span className="block font-display text-6xl font-bold text-accent">2.4s</span>
                <p className="font-mono text-[10px] text-text-3 uppercase tracking-widest">AVG. LOAD TIME</p>
              </div>
              <div className="space-y-2">
                <span className="block font-display text-6xl font-bold text-accent">120k</span>
                <p className="font-mono text-[10px] text-text-3 uppercase tracking-widest">MONTHLY ACTIVE USERS</p>
              </div>
            </div>
            <p className="text-secondary-text leading-relaxed mt-12 max-w-[700px]">
              {project.results || "The final product exceeded all initial KPIs, providing the client with a scalable platform that continues to drive growth and user engagement."}
            </p>
          </div>
        </div>
      </section>

      {/* Next Project CTA */}
      <section className="px-[var(--page-padding)] pb-32">
        <Link 
          to={`/work/${nextProject.slug}`} 
          className="group block max-w-[1400px] mx-auto py-32 border-t border-border no-underline text-center"
        >
          <span className="font-mono text-[11px] text-text-3 uppercase tracking-[0.3em] mb-8 block">NEXT PROJECT</span>
          <h2 className="font-display text-[clamp(40px,8vw,100px)] font-bold leading-none tracking-tight group-hover:text-accent transition-colors">
            {nextProject.title}
          </h2>
          <div className="mt-12 inline-block font-mono text-[11px] text-accent uppercase tracking-widest group-hover:translate-x-4 transition-transform">
            VIEW CASE STUDY →
          </div>
        </Link>
      </section>
    </div>
  );
}
