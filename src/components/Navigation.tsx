import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const navLinks = [
  { name: 'Work', path: '#work' },
  { name: 'About', path: '#about' },
  { name: 'Blog', path: '#blog' },
  { name: 'Contact', path: '#contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    setIsOpen(false);
    if (path.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(path);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        <Link to="/" className="text-2xl font-display font-bold tracking-tighter flex items-center h-11">
          JE<span className="text-accent">.</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.path}
              href={link.path}
              onClick={(e) => handleLinkClick(e, link.path)}
              className="text-sm font-mono uppercase tracking-widest transition-colors hover:text-accent text-secondary-text min-h-[44px] flex items-center"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, '#contact')}
            className="px-6 py-2 border border-accent text-accent text-sm font-mono uppercase tracking-widest hover:bg-accent hover:text-background transition-all duration-300 min-h-[44px] flex items-center"
          >
            Let's Talk
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-foreground z-[101] min-w-[44px] min-h-[44px] flex items-center justify-center"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 w-full h-screen bg-[#0D0D0D]/95 z-[100] flex flex-col items-center justify-center gap-8 p-6"
          >
            {navLinks.map((link) => (
              <a
                key={link.path}
                href={link.path}
                onClick={(e) => handleLinkClick(e, link.path)}
                className="text-5xl font-display font-bold uppercase tracking-tighter hover:text-accent transition-colors min-h-[60px] flex items-center"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="mt-8 px-12 py-4 border border-accent text-accent text-xl font-mono uppercase tracking-widest hover:bg-accent hover:text-background transition-all min-h-[60px] flex items-center"
            >
              Let's Talk
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="bg-surface border-t border-border py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 leading-tight">
            Ready to build <br />
            <span className="text-accent italic">something bold?</span>
          </h2>
          <a
            href="#contact"
            className="inline-block px-10 py-4 bg-accent text-background font-mono uppercase tracking-widest font-bold hover:scale-105 transition-transform min-h-[44px]"
          >
            Start a Project
          </a>
        </div>
        <div className="flex flex-col justify-end md:items-end gap-6 text-secondary-text font-mono text-sm uppercase tracking-widest">
          <div className="flex flex-wrap gap-6">
            <a href="#" className="hover:text-accent min-h-[44px] flex items-center">LinkedIn</a>
            <a href="#" className="hover:text-accent min-h-[44px] flex items-center">Twitter</a>
            <a href="#" className="hover:text-accent min-h-[44px] flex items-center">Instagram</a>
          </div>
          <p className="text-xs">© 2024 Joshua Ehimare. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
