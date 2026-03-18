import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const navLinks = [
  { name: 'Work', path: '/work' },
  { name: 'About', path: '/about' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="text-2xl font-display font-bold tracking-tighter">
          JE<span className="text-accent">.</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-sm font-mono uppercase tracking-widest transition-colors hover:text-accent",
                location.pathname === link.path ? "text-accent" : "text-secondary-text"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="px-6 py-2 border border-accent text-accent text-sm font-mono uppercase tracking-widest hover:bg-accent hover:text-background transition-all duration-300"
          >
            Let's Talk
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-20 left-0 w-full bg-background border-b border-border p-6 flex flex-col gap-6"
        >
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-xl font-display font-medium",
                location.pathname === link.path ? "text-accent" : "text-foreground"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="w-full py-4 border border-accent text-accent text-center font-mono uppercase tracking-widest"
          >
            Let's Talk
          </Link>
        </motion.div>
      )}
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="bg-surface border-t border-border py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 leading-tight">
            Ready to build <br />
            <span className="text-accent italic">something bold?</span>
          </h2>
          <Link
            to="/contact"
            className="inline-block px-10 py-4 bg-accent text-background font-mono uppercase tracking-widest font-bold hover:scale-105 transition-transform"
          >
            Start a Project
          </Link>
        </div>
        <div className="flex flex-col justify-end md:items-end gap-4 text-secondary-text font-mono text-sm uppercase tracking-widest">
          <div className="flex gap-6">
            <a href="#" className="hover:text-accent">LinkedIn</a>
            <a href="#" className="hover:text-accent">Twitter</a>
            <a href="#" className="hover:text-accent">Instagram</a>
          </div>
          <p>© 2024 Joshua Ehimare. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
