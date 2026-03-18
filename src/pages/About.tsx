import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import { Link } from 'react-router-dom';

/**
 * Counter component for Section 6 stats
 */
const Counter = ({ target, duration = 2 }: { target: string; duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  // Extract numeric value and suffix
  const numericValue = parseInt(target.replace(/\D/g, '')) || 0;
  const suffix = target.replace(/[0-9]/g, '');

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, numericValue, {
        duration: duration,
        ease: "easeOut",
        onUpdate: (value) => setCount(Math.floor(value)),
      });
      return () => controls.stop();
    }
  }, [isInView, numericValue, duration]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
};

export function About() {
  useEffect(() => {
    document.title = "About — Joshua Ehimare | Designer & Creative";
  }, []);

  // Animation variants for scroll sections
  const scrollFade = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8 }
  };

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
            ABOUT ME
          </motion.span>

          <h1 className="font-display text-[clamp(56px,8vw,110px)] font-bold leading-[1.0] tracking-[-0.02em] text-left">
            <motion.span 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="block text-text"
            >
              The designer
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="block text-accent italic"
            >
              behind the work.
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
              Designer, creative strategist, and the person behind every pixel.
            </p>

            <div className="text-right">
              <span className="font-mono text-[11px] text-text-2 block mb-1">Based in Lagos</span>
              <span className="font-mono text-[11px] text-text-2 block">Available Worldwide</span>
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

      {/* SECTION 2 — WHO I AM */}
      <section className="py-[100px] px-[var(--page-padding)]">
        <motion.div 
          {...scrollFade}
          className="grid grid-cols-1 lg:grid-cols-2 gap-[80px]"
        >
          {/* Left Col */}
          <div className="flex flex-col">
            <div className="relative w-full aspect-[3/4] 
              overflow-hidden rounded-[4px] 
              border border-[rgba(255,77,0,0.35)]">
              <img
                src="/images/joshua-ehimare.jpg"
                alt="Joshua Ehimare"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="flex flex-wrap gap-3 mt-8">
              <div className="bg-bg-3 border border-border font-mono text-[11px] text-text-2 px-[18px] py-2 rounded-[2px]">
                6+ Years Experience
              </div>
              <div className="bg-bg-3 border border-border font-mono text-[11px] text-text-2 px-[18px] py-2 rounded-[2px]">
                20+ Projects Delivered
              </div>
            </div>
          </div>

          {/* Right Col */}
          <div className="flex flex-col">
            <span className="font-mono text-[11px] text-accent uppercase tracking-[0.15em] mb-6 block">
              WHO I AM
            </span>
            <h2 className="font-display text-[clamp(32px,4vw,52px)] text-text border-l-4 border-accent pl-5 leading-[1.2] mb-10 font-bold">
              Design with purpose.<br />Strategy with edge.
            </h2>
            <div className="space-y-6 font-sans text-[16px] text-text-2 leading-[1.9]">
              <p>
                I'm Joshua Ehimare — a designer and creative strategist based in Lagos. I help brands build identities that are impossible to ignore, websites that convert, and digital strategies that actually grow.
              </p>
              <p>
                My work sits at the intersection of aesthetics and performance. Because great design should be beautiful AND effective — not one or the other.
              </p>
              <p>
                Whether you're a startup finding your visual voice or an established brand ready for a refresh — I bring strategic thinking and craft to every project.
              </p>
            </div>
            <Link 
              to="/work" 
              className="font-mono text-[12px] text-accent mt-10 inline-block hover:underline transition-all w-fit"
            >
              View My Work →
            </Link>
          </div>
        </motion.div>
      </section>

      {/* SECTION 3 — PHILOSOPHY */}
      <section className="bg-bg-2 border-y border-border py-[100px] px-[var(--page-padding)]">
        <motion.div {...scrollFade} className="mb-16">
          <span className="font-mono text-[11px] text-accent uppercase tracking-[0.15em] mb-4 block">
            MY APPROACH
          </span>
          <h2 className="font-display text-[clamp(32px,4vw,52px)] font-bold text-text">
            How I work.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
          {[
            { num: "01", title: "Design First", body: "Every decision starts with the visual experience. If it doesn't look right, feel right, and communicate clearly — nothing else matters." },
            { num: "02", title: "Strategy Driven", body: "Design without strategy is decoration. I combine visual craft with data, SEO, and business thinking to create work that performs." },
            { num: "03", title: "Results Obsessed", body: "Beautiful work that doesn't convert is a failed brief. I measure success by the outcomes it creates for you." }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              {...scrollFade}
              className="flex flex-col py-10 lg:py-0 lg:px-12 first:pl-0 lg:border-l border-border first:border-l-0 border-b lg:border-b-0 last:border-b-0"
            >
              <span className="font-display font-bold text-[64px] text-accent opacity-25 mb-6 leading-none block">
                {item.num}
              </span>
              <h3 className="font-display text-[22px] text-text mb-4 font-semibold">
                {item.title}
              </h3>
              <p className="font-sans text-[14px] text-text-2 leading-[1.8]">
                {item.body}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION 4 — SKILLS */}
      <section className="py-[100px] px-[var(--page-padding)]">
        <motion.div {...scrollFade} className="mb-16">
          <span className="font-mono text-[11px] text-accent uppercase tracking-[0.15em] mb-4 block">
            SKILLS & TOOLS
          </span>
          <h2 className="font-display text-[clamp(32px,4vw,52px)] font-bold text-text">
            What I bring to the table.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[80px]">
          {/* Design Group */}
          <motion.div {...scrollFade} className="flex flex-col">
            <h3 className="font-display text-[18px] text-text-2 mb-6 border-b border-border pb-4 font-medium">
              Design
            </h3>
            <div className="flex flex-wrap gap-3">
              {["Brand Identity", "UI·UX Design", "Typography", "Motion Graphics", "Print Design", "Visual Strategy"].map((skill) => (
                <span 
                  key={skill}
                  className="bg-bg-3 border border-border text-text-2 font-mono text-[11px] uppercase tracking-[0.08em] px-4 py-2 rounded-[2px] hover:border-accent hover:text-accent transition-all duration-300 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Strategy Group */}
          <motion.div {...scrollFade} className="flex flex-col">
            <h3 className="font-display text-[18px] text-text-2 mb-6 border-b border-border pb-4 font-medium">
              Strategy & Web
            </h3>
            <div className="flex flex-wrap gap-3">
              {["SEO Strategy", "Web Design", "Conversion Optimisation", "Content Strategy", "Digital Marketing", "Creative Direction"].map((skill) => (
                <span 
                  key={skill}
                  className="bg-bg-3 border border-border text-text-2 font-mono text-[11px] uppercase tracking-[0.08em] px-4 py-2 rounded-[2px] hover:border-accent hover:text-accent transition-all duration-300 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 5 — EXPERIENCE */}
      <section className="py-[100px] px-[var(--page-padding)]">
        <motion.div {...scrollFade} className="mb-16">
          <span className="font-mono text-[11px] text-accent uppercase tracking-[0.15em] mb-4 block">
            EXPERIENCE
          </span>
          <h2 className="font-display text-[clamp(32px,4vw,52px)] font-bold text-text">
            Where I've been.
          </h2>
        </motion.div>

        <div className="flex flex-col">
          {[
            { year: "2022–Present", role: "Lead Designer", company: "Freelance & Independent", desc: "Brand, web and SEO for startups and SMEs globally." },
            { year: "2021–2022", role: "UI Designer", company: "Digital Agency Lagos", desc: "Interface design for fintech and e-commerce clients." },
            { year: "2020–2021", role: "Junior Designer", company: "Creative Studio", desc: "Brand identity and print for growing businesses." },
            { year: "2019–2020", role: "Design Intern", company: "Marketing Agency", desc: "Supported senior creatives on brand and campaign work." }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              {...scrollFade}
              className="group border-t border-border last:border-b py-8 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 transition-all duration-300 hover:bg-bg-2 hover:px-[var(--page-padding)] hover:mx-[calc(-1*var(--page-padding))]"
            >
              <div className="flex flex-col">
                <span className="font-mono text-[11px] text-accent mb-2 block">{item.year}</span>
                <h4 className="font-display text-[22px] text-text mb-1 font-semibold">{item.role}</h4>
                <span className="font-sans text-[14px] text-text-2">{item.company}</span>
              </div>
              <div className="max-w-full lg:max-w-[40%] lg:text-right">
                <p className="font-sans text-[14px] text-text-2 leading-[1.7]">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION 6 — STATS */}
      <section className="bg-bg-2 border-y border-border py-[100px] px-[var(--page-padding)]">
        <motion.div {...scrollFade} className="text-center mb-20">
          <h2 className="font-serif italic text-[clamp(24px,3vw,36px)] text-text leading-[1.4] max-w-[800px] mx-auto">
            "Committed to craft. Focused on results."
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 max-w-[1200px] mx-auto">
          {[
            { val: "20+", label: "Projects Completed" },
            { val: "6+", label: "Years Experience" },
            { val: "100%", label: "Satisfaction" },
            { val: "15+", label: "Brands Built" }
          ].map((stat, idx) => (
            <motion.div 
              key={idx} 
              {...scrollFade}
              className="flex flex-col items-center justify-center text-center py-10 lg:py-0 border-b lg:border-b-0 lg:border-l border-border first:border-l-0"
            >
              <span className="font-display font-bold text-[clamp(48px,6vw,72px)] text-accent leading-none block">
                <Counter target={stat.val} />
              </span>
              <span className="font-mono text-[11px] text-text-2 uppercase tracking-[0.1em] mt-4 block">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}
