import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { client, urlFor } from '../lib/sanity';

const query = `*[_type == "project" && slug.current == $slug][0] {
  _id,
  title,
  "slug": slug.current,
  category,
  description,
  image,
  url,
  isFigma,
  year,
  overview,
  challenge,
  solution,
  role,
  timeline,
  tools
}`;

export function CaseStudy() {
  const { slug } = useParams();
  const [project, setProject] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      client.fetch(query, { slug })
        .then((data) => {
          setProject(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error(err);
          setLoading(false);
        });
    }
  }, [slug]);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-32 px-[6vw]">
        <span className="font-mono text-[11px] text-[#6B6560] uppercase tracking-[0.15em]">
          Loading projects...
        </span>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <span className="font-mono text-[11px] text-[#6B6560] uppercase tracking-[0.15em]">
          Project not found.
        </span>
      </div>
    );
  }

  return (
    <div className="w-full bg-bg text-text selection:bg-accent selection:text-white">
      {/* Hero Section */}
      <section className="pt-[140px] pb-[80px] px-[var(--page-padding)]">
        <div className="max-w-[1400px] mx-auto">
          <Link to="/work" className="inline-block font-mono text-[11px] text-accent tracking-[0.2em] mb-12 no-underline hover:translate-x-[-8px] transition-transform">
            ← BACK TO WORK
          </Link>
          
          <div className="relative w-full aspect-video overflow-hidden rounded-[4px] mb-16 bg-bg-3">
            {project.image && (
              <img
                src={urlFor(project.image).width(1400).url()}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            )}
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
                {project.description}
              </p>

              <div className="flex flex-wrap gap-4">
                {project.isFigma ? (
                  <a href={project.url} target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 
                      font-mono text-[12px] uppercase 
                      tracking-[0.1em] text-[#FF4D00] 
                      border border-[#FF4D00] px-5 py-3 
                      rounded-[2px] mt-6
                      hover:bg-[#FF4D00] hover:text-[#0A0A0A] 
                      transition-all duration-200">
                    View Figma Design →
                  </a>
                ) : (
                  <a href={project.url} target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 
                      font-mono text-[12px] uppercase 
                      tracking-[0.1em] text-[#FF4D00] 
                      border border-[#FF4D00] px-5 py-3 
                      rounded-[2px] mt-6
                      hover:bg-[#FF4D00] hover:text-[#0A0A0A] 
                      transition-all duration-200">
                    Visit Live Site →
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-[100px] px-[var(--page-padding)] border-t border-border">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4 space-y-12">
            <div>
              <span className="font-mono text-[11px] text-accent uppercase tracking-[0.2em] mb-4 block">ROLE</span>
              <p className="font-sans text-[16px] text-text-2">{project.role}</p>
            </div>
            <div>
              <span className="font-mono text-[11px] text-accent uppercase tracking-[0.2em] mb-4 block">TIMELINE</span>
              <p className="font-sans text-[16px] text-text-2">{project.timeline}</p>
            </div>
            <div>
              <span className="font-mono text-[11px] text-accent uppercase tracking-[0.2em] mb-4 block">TOOLS</span>
              <p className="font-sans text-[16px] text-text-2">{project.tools}</p>
            </div>
          </div>
          <div className="lg:col-span-8 space-y-16">
            <div>
              <h2 className="font-display text-[32px] font-bold mb-6">Overview</h2>
              <p className="font-sans text-[18px] text-text-2 leading-relaxed">{project.overview}</p>
            </div>
            {project.challenge && (
              <div>
                <h2 className="font-display text-[32px] font-bold mb-6">The Challenge</h2>
                <p className="font-sans text-[18px] text-text-2 leading-relaxed">{project.challenge}</p>
              </div>
            )}
            {project.solution && (
              <div>
                <h2 className="font-display text-[32px] font-bold mb-6">The Solution</h2>
                <p className="font-sans text-[18px] text-text-2 leading-relaxed">{project.solution}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Navigation Strip */}
      <section className="w-full border-t border-border mt-20">
        <div className="flex justify-center p-12">
           <Link to="/work" className="font-mono text-[12px] text-accent uppercase tracking-[0.2em] no-underline hover:translate-x-[-8px] transition-transform">
             ← BACK TO ALL WORK
           </Link>
        </div>
      </section>
    </div>
  );
}
