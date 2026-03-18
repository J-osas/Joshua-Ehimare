import { motion } from 'motion/react';

export function About() {
  return (
    <div className="w-full pt-[120px] pb-[100px]">
      {/* Hero */}
      <section className="px-[var(--page-padding)] max-w-[1400px] mx-auto mb-32">
        <span className="font-mono text-[11px] text-accent tracking-[0.2em] mb-4 block">ABOUT JOSHUA</span>
        <h1 className="font-display text-[clamp(48px,8vw,120px)] font-bold leading-[0.9] tracking-[-0.04em] mb-12">
          Designer, Strategist, <br />
          <span className="text-accent italic">Creative Thinker.</span>
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div className="font-serif italic text-2xl md:text-3xl text-secondary-text leading-relaxed">
            I help forward-thinking brands stand out in a crowded digital landscape through strategic design and bold creative direction.
          </div>
          <div className="space-y-6 text-secondary-text text-lg leading-relaxed">
            <p>Based in Lagos, Nigeria, I've spent the last 3+ years working with clients worldwide to bridge the gap between aesthetics and business goals. My approach is rooted in the belief that great design is not just about how it looks, but how it works.</p>
            <p>Whether it's building a brand from the ground up, designing a high-converting website, or crafting a digital growth strategy, I bring a mix of creative craft and analytical thinking to every project.</p>
          </div>
        </div>
      </section>

      {/* Photo Grid */}
      <section className="px-[var(--page-padding)] max-w-[1400px] mx-auto mb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="aspect-[3/4] bg-surface rounded-[2px] overflow-hidden">
            <img src="https://picsum.photos/seed/about1/600/800" alt="Joshua" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" referrerPolicy="no-referrer" />
          </div>
          <div className="aspect-[3/4] bg-surface rounded-[2px] overflow-hidden md:mt-20">
            <img src="https://picsum.photos/seed/about2/600/800" alt="Joshua" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" referrerPolicy="no-referrer" />
          </div>
          <div className="aspect-[3/4] bg-surface rounded-[2px] overflow-hidden">
            <img src="https://picsum.photos/seed/about3/600/800" alt="Joshua" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" referrerPolicy="no-referrer" />
          </div>
        </div>
      </section>

      {/* Skills & Services */}
      <section className="py-[120px] px-[var(--page-padding)] bg-surface border-y border-border">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <span className="font-mono text-[11px] text-accent tracking-[0.2em] mb-4 block">WHAT I DO</span>
            <h2 className="font-display text-[clamp(36px,5vw,64px)] font-bold leading-[1.1] mb-12">
              A holistic approach to digital growth.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { title: 'Brand Identity', desc: 'Logo design, visual systems, brand guidelines, and positioning.' },
              { title: 'Web Design', desc: 'UI/UX design, responsive websites, and interactive experiences.' },
              { title: 'SEO Strategy', desc: 'Keyword research, on-page optimization, and technical SEO.' },
              { title: 'Digital Marketing', desc: 'Content strategy, social media direction, and growth tactics.' }
            ].map((service, i) => (
              <div key={i} className="space-y-4">
                <h3 className="font-display text-2xl font-semibold">{service.title}</h3>
                <p className="text-secondary-text leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-[120px] px-[var(--page-padding)] max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
          <div>
            <span className="font-mono text-[11px] text-accent tracking-[0.2em] mb-4 block">EXPERIENCE</span>
            <h2 className="font-display text-[clamp(40px,6vw,80px)] font-bold leading-none">Career Path</h2>
          </div>
        </div>

        <div className="flex flex-col border-t border-border">
          {[
            { role: 'Senior Creative Designer', company: 'Freelance / Self-Employed', period: '2022 — Present' },
            { role: 'UI/UX Designer', company: 'Digital Agency X', period: '2020 — 2022' },
            { role: 'Junior Graphic Designer', company: 'Creative Studio Y', period: '2019 — 2020' }
          ].map((job, i) => (
            <div key={i} className="flex flex-col md:flex-row justify-between items-start md:items-center py-10 border-b border-border gap-4">
              <div className="space-y-1">
                <h3 className="font-display text-2xl font-semibold">{job.role}</h3>
                <p className="font-mono text-[11px] text-text-3 uppercase tracking-widest">{job.company}</p>
              </div>
              <span className="font-mono text-[11px] text-secondary-text uppercase tracking-widest">{job.period}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
