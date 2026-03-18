import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';
import { useState, useEffect } from 'react';

const navLinks = [
  { name: 'Work', path: '/work' },
  { name: 'About', path: '/about' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav 
      id="navbar"
      className={cn(
        "fixed top-0 left-0 w-full h-[72px] flex items-center z-[1000] transition-all duration-400 px-[var(--page-padding)]",
        scrolled ? "bg-background/92 backdrop-blur-[20px] border-b border-border" : "bg-transparent"
      )}
    >
      <div className="w-full flex justify-between items-center">
        <Link to="/" className="font-display font-bold text-[22px] text-accent no-underline">
          JE.
        </Link>
        
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "font-mono text-[11px] uppercase tracking-[0.15em] no-underline transition-colors duration-300",
                location.pathname === link.path ? "text-accent" : "text-secondary-text hover:text-foreground"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden lg:flex items-center gap-2 font-mono text-[11px] text-secondary-text">
            <div className="w-1.5 h-1.5 bg-[#00FF00] rounded-full shadow-[0_0_8px_#00FF00] animate-pulse" />
            Available for work
          </div>
          <Link to="/contact" className="hidden md:block border border-border text-secondary-text px-[22px] py-[10px] font-mono text-[11px] uppercase no-underline transition-all duration-300 hover:border-accent hover:text-accent">
            Let's Talk →
          </Link>
          
          <button 
            className="md:hidden flex flex-col gap-[6px] bg-none border-none z-[1100]"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className={cn("w-6 h-[2px] bg-foreground transition-all duration-300", isOpen && "translate-y-[8px] rotate-45")} />
            <span className={cn("w-6 h-[2px] bg-foreground transition-all duration-300", isOpen && "opacity-0")} />
            <span className={cn("w-6 h-[2px] bg-foreground transition-all duration-300", isOpen && "-translate-y-[8px] -rotate-45")} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 w-full h-screen bg-background flex flex-col items-center justify-center gap-8 z-[1050]"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="font-display text-[52px] font-semibold no-underline text-foreground hover:text-accent transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact" className="mt-5 border border-accent text-accent px-[22px] py-[10px] font-mono text-[11px] uppercase no-underline">
              Let's Talk →
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export function Footer() {
  return (
    <>
      <section className="py-[120px] px-[var(--page-padding)] bg-surface border-t border-border text-center">
        <span className="font-mono text-[11px] text-secondary-text uppercase tracking-[0.15em] mb-4 block">READY WHEN YOU ARE</span>
        <h2 className="font-display text-[clamp(48px,7vw,100px)] leading-[1.1] max-w-[900px] mx-auto mb-12">
          Let's build something remarkable.
        </h2>
        <p className="font-serif italic text-2xl text-secondary-text mb-12">
          Available for freelance projects and full-time roles.
        </p>
        <Link to="/contact" className="inline-block bg-accent text-[#0A0A0A] font-display font-semibold text-base px-12 py-[18px] rounded-[2px] no-underline transition-colors hover:bg-[#E04400]">
          Start a Project →
        </Link>
      </section>

      <footer className="py-10 md:py-[40px] pb-[60px] px-[var(--page-padding)] border-t border-border flex flex-col md:flex-row justify-between items-center gap-6 bg-surface">
        <div className="font-mono text-[11px] text-text-3 order-3 md:order-1">
          © 2024 Joshua Ehimare. All rights reserved.
        </div>
        <div className="flex gap-8 order-1 md:order-2">
          {navLinks.map(link => (
            <Link key={link.path} to={link.path} className="font-mono text-[11px] text-secondary-text no-underline hover:text-foreground transition-colors">
              {link.name}
            </Link>
          ))}
        </div>
        <div className="flex gap-8 order-2 md:order-3">
          <a href="#" className="font-mono text-[11px] text-secondary-text no-underline hover:text-accent transition-colors">LinkedIn</a>
          <a href="#" className="font-mono text-[11px] text-secondary-text no-underline hover:text-accent transition-colors">Twitter</a>
          <a href="#" className="font-mono text-[11px] text-secondary-text no-underline hover:text-accent transition-colors">Instagram</a>
        </div>
      </footer>
    </>
  );
}
