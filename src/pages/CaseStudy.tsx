import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/content';
import { motion } from 'motion/react';
import { ImagePlaceholder, Section } from '../components/Shared';
import { cn } from '../lib/utils';

export function CaseStudy() {
  const { slug } = useParams();
  const projectIndex = projects.findIndex(p => p.slug === slug);
  const project = projects[projectIndex];
  const nextProject = projects[(projectIndex + 1) % projects.length];

  if (!project) return <div className="p-20 text-center font-display text-2xl">Project not found</div>;

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="pt-[120px] pb-[60px] px-[var(--page-padding)]">
        <div className="max-w-[1400px] mx-auto">
          <Link to="/work" className="inline-block font-mono text-[11px] text-accent tracking-[0.2em] mb-12 no-underline hover:translate-x-[-8px] transition-transform">
            ← BACK TO WORK
          </Link>
          
          <ImagePlaceholder label="Full Bleed Hero Image" className="aspect-[21/9] w-full mb-16" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8">
              <h1 className="font-display text-[clamp(48px,7vw,100px)] font-bold leading-[1.0] tracking-[-0.02em]">
                {project.title}
              </h1>
            </div>
            <div className="lg:col-span-4 grid grid-cols-2 gap-8 pb-4">
              <div className="space-y-2">
                <span className="block font-mono text-[10px] text-text-3 uppercase tracking-widest">CLIENT</span>
                <p className="font-mono text-[12px] text-secondary-text">{project.client || 'Internal'}</p>
              </div>
              <div className="space-y-2">
                <span className="block font-mono text-[10px] text-text-3 uppercase tracking-widest">YEAR</span>
                <p className="font-mono text-[12px] text-secondary-text">{project.year}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <Section className="relative overflow-hidden">
        <span className="absolute top-0 right-0 font-display text-[300px] leading-none opacity-[0.04] pointer-events-none select-none translate-x-[20%] translate-y-[-20%]">01</span>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <span className="font-mono text-[11px] text-accent uppercase tracking-[0.2em] mb-4 block">OVERVIEW</span>
            <h2 className="font-display text-4xl font-semibold">The Challenge.</h2>
          </div>
          <div className="lg:col-span-8">
            <p className="font-serif italic text-2xl md:text-3xl text-secondary-text leading-relaxed mb-8">
              {project.description}
            </p>
            <p className="font-body text-secondary-text text-lg leading-relaxed max-w-[700px]">
              {project.challenge || "Creating a cohesive digital identity that resonates with a modern audience while maintaining core brand values and accessibility standards."}
            </p>
          </div>
        </div>
      </Section>

      {/* Process */}
      <Section dark className="relative overflow-hidden">
        <span className="absolute top-0 right-0 font-display text-[300px] leading-none opacity-[0.04] pointer-events-none select-none translate-x-[20%] translate-y-[-20%]">02</span>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <span className="font-mono text-[11px] text-accent uppercase tracking-[0.2em] mb-4 block">PROCESS</span>
            <h2 className="font-display text-4xl font-semibold">The Solution.</h2>
          </div>
          <div className="lg:col-span-8 space-y-12">
            <p className="font-body text-secondary-text text-lg leading-relaxed max-w-[700px]">
              {project.solution || "A minimalist design language coupled with high-performance technology to create a seamless user experience across all touchpoints."}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ImagePlaceholder label="Process Image 01" className="aspect-square" />
              <ImagePlaceholder label="Process Image 02" className="aspect-square" />
            </div>
          </div>
        </div>
      </Section>

      {/* Results */}
      <Section className="relative overflow-hidden">
        <span className="absolute top-0 right-0 font-display text-[300px] leading-none opacity-[0.04] pointer-events-none select-none translate-x-[20%] translate-y-[-20%]">03</span>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <span className="font-mono text-[11px] text-accent uppercase tracking-[0.2em] mb-4 block">RESULTS</span>
            <h2 className="font-display text-4xl font-semibold">Impact.</h2>
          </div>
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
              {[
                { val: '45%', label: 'CONVERSION' },
                { val: '2.4s', label: 'LOAD TIME' },
                { val: '120k', label: 'MONTHLY USERS' }
              ].map((stat, i) => (
                <div key={i} className="space-y-2">
                  <span className="block font-display text-6xl font-bold text-accent">{stat.val}</span>
                  <p className="font-mono text-[10px] text-text-3 uppercase tracking-widest">{stat.label}</p>
                </div>
              ))}
            </div>
            <p className="font-body text-secondary-text text-lg leading-relaxed max-w-[700px]">
              {project.results || "The final product exceeded all initial KPIs, providing the client with a scalable platform that continues to drive growth and user engagement."}
            </p>
          </div>
        </div>
      </Section>

      {/* Next Project CTA */}
      <section className="px-[var(--page-padding)] py-[120px] bg-bg-2 border-t border-border">
        <Link 
          to={`/work/${nextProject.slug}`} 
          className="group block max-w-[1400px] mx-auto text-center no-underline"
        >
          <span className="font-mono text-[11px] text-text-3 uppercase tracking-[0.3em] mb-8 block">NEXT PROJECT</span>
          <h2 className="font-display text-[clamp(40px,8vw,120px)] font-bold leading-none tracking-tight group-hover:text-accent transition-colors">
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
