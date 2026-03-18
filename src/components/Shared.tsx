import { motion } from 'motion/react';
import { ReactNode } from 'react';
import { cn } from '../lib/utils';

interface PageHeroProps {
  label: string;
  title: string;
  italicTitle: string;
  subline: string;
}

export function PageHero({ label, title, italicTitle, subline }: PageHeroProps) {
  return (
    <section className="min-h-[50vh] flex flex-col justify-start pt-[140px] pb-[80px] px-[var(--page-padding)]">
      <div className="max-w-[1400px] w-full">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-mono text-[11px] text-accent uppercase tracking-[0.15em] mb-4 block text-left"
        >
          {label}
        </motion.span>
        <h1 className="font-display text-[clamp(56px,8vw,110px)] leading-[1.0] mb-0 tracking-[-0.02em] text-left">
          <motion.span 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="block"
          >
            {title}
          </motion.span>
          <motion.span 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="block text-accent italic"
          >
            {italicTitle}
          </motion.span>
        </h1>
        <motion.div 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="h-[1px] bg-border w-full my-10 origin-left"
        />
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif italic text-[clamp(17px,1.8vw,24px)] text-secondary-text leading-[1.7] max-w-[700px] text-left"
        >
          {subline}
        </motion.p>
      </div>
    </section>
  );
}

interface SectionProps {
  label?: string;
  title?: string;
  children: ReactNode;
  className?: string;
  dark?: boolean;
}

export function Section({ label, title, children, className, dark }: SectionProps) {
  return (
    <section className={cn(
      "py-[100px] px-[var(--page-padding)]",
      dark ? "bg-bg-2" : "bg-bg",
      className
    )}>
      <div className="max-w-[1400px] mx-auto w-full">
        {label && (
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-mono text-[11px] text-accent uppercase tracking-[0.15em] mb-4 block"
          >
            {label}
          </motion.span>
        )}
        {title && (
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-[clamp(36px,4vw,60px)] text-foreground mb-12"
          >
            {title}
          </motion.h2>
        )}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}

export function ImagePlaceholder({ label, className }: { label: string, className?: string }) {
  return (
    <div className={cn(
      "bg-bg-3 border border-accent/40 rounded-[4px] flex items-center justify-center overflow-hidden",
      className
    )}>
      <span className="font-mono text-[11px] text-accent opacity-60 uppercase tracking-widest">
        [ {label} ]
      </span>
    </div>
  );
}
